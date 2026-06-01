/* ER CT Cheat Sheets — AI Report Polish / articulation sandbox.
   Bring-your-own-key LLM client. Vanilla JS, no dependencies.
   Provider/model/key persist via ERCTStore.setSetting (localStorage only).

   SAFETY: this is a personal sandbox for de-identified / hypothetical phrasing
   practice. It is NOT HIPAA-covered or institution-approved. No PHI, ever. */
(function () {
  'use strict';

  var Store = window.ERCTStore;
  if (!Store) { console.error('[ai] ERCTStore not loaded'); return; }

  // ---------- provider registry ----------
  var PROVIDERS = {
    gemini: {
      label: 'Google Gemini',
      defaultModel: 'gemini-2.0-flash',
      keyHint: 'AIza… (Google AI Studio key)',
      keyUrl: 'https://aistudio.google.com/app/apikey'
    },
    openai: {
      label: 'OpenAI',
      defaultModel: 'gpt-4o-mini',
      keyHint: 'sk-… (OpenAI key)',
      keyUrl: 'https://platform.openai.com/api-keys'
    },
    anthropic: {
      label: 'Anthropic (Claude)',
      defaultModel: 'claude-3-5-haiku-latest',
      keyHint: 'sk-ant-… (Anthropic key)',
      keyUrl: 'https://console.anthropic.com/settings/keys'
    }
  };

  var SYSTEM_PROMPT =
    'You are an expert radiology attending and editor helping refine de-identified ' +
    'report language. Never fabricate findings. Be concise and use standard ' +
    'radiology lexicon. Assume the input contains NO patient identifiers.';

  // ---------- task prompts ----------
  var TASKS = {
    impression: {
      title: 'Polished Impression',
      build: function (txt) {
        return 'Rewrite the following rough/dictated radiology text into a clear, ' +
          'concise, professional radiology IMPRESSION. Preserve the exact meaning. ' +
          'Do NOT invent, add, or imply any new findings. Use standard radiology ' +
          'lexicon. Return only the polished impression text.\n\n--- INPUT ---\n' + txt;
      }
    },
    variants: {
      title: '3 Phrasing Variants',
      build: function (txt) {
        return 'Provide exactly THREE alternative wordings of the following ' +
          'de-identified radiology text. Label them:\n' +
          '1) Concise — terse, to-the-point.\n' +
          '2) Detailed — fuller, more explicit but still professional.\n' +
          '3) Hedge-appropriate — calibrated uncertainty where the evidence warrants ' +
          'it (e.g. "may represent", "favored", "cannot be excluded").\n' +
          'Keep the same meaning. Do NOT invent findings.\n\n--- INPUT ---\n' + txt;
      }
    },
    tighten: {
      title: 'Tightened Findings',
      build: function (txt) {
        return 'Clean up the grammar, punctuation, and structure of the following ' +
          'radiology FINDINGS paragraph using standard radiology reporting style ' +
          '(organ-system order, parallel phrasing, consistent tense). Preserve the ' +
          'exact meaning and every finding. Do NOT add, remove, or invent findings. ' +
          'Return only the cleaned findings text.\n\n--- INPUT ---\n' + txt;
      }
    },
    differential: {
      title: 'Structured Differential (educational)',
      build: function (txt) {
        return 'Given the described imaging finding(s) below, list a structured ' +
          'differential diagnosis ordered from MOST LIKELY to CAN\'T-MISS. For each ' +
          'entry give a one-line discriminator (the key feature that argues for or ' +
          'against it). Use standard radiology lexicon. This is for EDUCATIONAL ' +
          'phrasing practice only — not a diagnosis. End with a one-line reminder ' +
          'that this is educational and not clinical advice.\n\n--- FINDING ---\n' + txt;
      }
    }
  };

  // ---------- settings helpers ----------
  function getProvider() {
    var p = Store.getSetting('aiProvider', 'gemini');
    return PROVIDERS[p] ? p : 'gemini';
  }
  function getModel() {
    var m = Store.getSetting('aiModel', '');
    return (m && String(m).trim()) || PROVIDERS[getProvider()].defaultModel;
  }
  function getKey() {
    var providerKeys = Store.getSetting('aiKeys', {}) || {};
    return providerKeys[getProvider()] || '';
  }
  function setKey(provider, key) {
    var providerKeys = Store.getSetting('aiKeys', {}) || {};
    providerKeys[provider] = key;
    Store.setSetting('aiKeys', providerKeys);
  }

  // ---------- DOM helpers ----------
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) {
      n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return n;
  }

  // ---------- network: call the chosen provider ----------
  // Returns a Promise resolving to the model's text output.
  function callAPI(provider, model, key, system, userPrompt) {
    if (!key) return Promise.reject(new Error('No API key set. Open settings (gear) and paste your key.'));

    var url, opts;
    var maxTokens = 1200;

    if (provider === 'gemini') {
      url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
        encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(key);
      opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userPrompt }] }],
          systemInstruction: { parts: [{ text: system }] }
        })
      };
    } else if (provider === 'openai') {
      url = 'https://api.openai.com/v1/chat/completions';
      opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'system', content: system },
            { role: 'user', content: userPrompt }
          ]
        })
      };
    } else if (provider === 'anthropic') {
      url = 'https://api.anthropic.com/v1/messages';
      opts = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: model,
          max_tokens: maxTokens,
          system: system,
          messages: [{ role: 'user', content: userPrompt }]
        })
      };
    } else {
      return Promise.reject(new Error('Unknown provider: ' + provider));
    }

    return fetch(url, opts).then(function (resp) {
      return resp.text().then(function (raw) {
        var data = null;
        try { data = raw ? JSON.parse(raw) : null; } catch (e) { /* keep raw */ }

        if (!resp.ok) {
          var msg = extractError(data, raw, resp.status, provider);
          throw new Error(msg);
        }
        var out = extractText(data, provider);
        if (!out) throw new Error('The API responded but no text could be extracted.\n\n' +
          (raw ? raw.slice(0, 600) : ''));
        return out;
      });
    }, function (netErr) {
      // fetch rejects on network / CORS failures (no response object)
      throw new Error('Network or CORS error — the request did not reach the API ' +
        '(check connection, key, or that this provider allows browser calls).\n\n' +
        (netErr && netErr.message ? netErr.message : String(netErr)));
    });
  }

  function extractError(data, raw, status, provider) {
    var detail = '';
    if (data) {
      if (data.error) {
        detail = typeof data.error === 'string' ? data.error :
          (data.error.message || JSON.stringify(data.error));
      } else if (data.message) {
        detail = data.message;
      }
    }
    if (!detail) detail = (raw || '').slice(0, 600);
    var hint = '';
    if (status === 401 || status === 403) hint = ' (likely an invalid or unauthorized API key)';
    else if (status === 429) hint = ' (rate limit or quota exceeded — slow down or check billing)';
    else if (status === 404) hint = ' (model name not found for this provider — check the model field)';
    return 'API error ' + status + hint + ':\n' + detail;
  }

  function extractText(data, provider) {
    if (!data) return '';
    try {
      if (provider === 'gemini') {
        var cand = data.candidates && data.candidates[0];
        if (!cand) return '';
        if (cand.content && cand.content.parts) {
          return cand.content.parts.map(function (p) { return p.text || ''; }).join('').trim();
        }
        return '';
      }
      if (provider === 'openai') {
        var ch = data.choices && data.choices[0];
        return (ch && ch.message && ch.message.content || '').trim();
      }
      if (provider === 'anthropic') {
        if (!data.content) return '';
        return data.content.map(function (b) { return b.text || ''; }).join('').trim();
      }
    } catch (e) { return ''; }
    return '';
  }

  // ---------- UI build ----------
  function mount() {
    var root = document.getElementById('ai-app');
    if (!root) return;

    // ===== SETTINGS PANEL =====
    var providerSel = el('select', { class: 'ai-select', id: 'ai-provider' });
    Object.keys(PROVIDERS).forEach(function (k) {
      providerSel.appendChild(el('option', { value: k, text: PROVIDERS[k].label }));
    });

    var keyInput = el('input', {
      class: 'ai-input', id: 'ai-key', type: 'password',
      autocomplete: 'off', spellcheck: 'false', placeholder: 'Paste API key…'
    });
    var modelInput = el('input', {
      class: 'ai-input', id: 'ai-model', type: 'text',
      autocomplete: 'off', spellcheck: 'false', placeholder: 'Model name (optional override)'
    });
    var showKeyBtn = el('button', { class: 'ai-btn', type: 'button', text: 'Show' });
    var saveBtn = el('button', { class: 'ai-btn primary', type: 'button', text: 'Save settings' });
    var testBtn = el('button', { class: 'ai-btn', type: 'button', text: 'Test connection' });
    var keyHint = el('p', { class: 'ai-note' });
    var settingsStatus = el('div', { class: 'ai-status', 'aria-live': 'polite' });

    var settingsPanel = el('div', { class: 'ai-panel ai-settings', id: 'ai-settings' }, [
      el('h3', { text: '⚙ Provider & API key' }),
      el('div', { class: 'ai-row' }, [ el('label', { text: 'Provider' }), providerSel ]),
      el('div', { class: 'ai-row' }, [ el('label', { text: 'API key' }), keyInput, showKeyBtn ]),
      el('div', { class: 'ai-row' }, [ el('label', { text: 'Model' }), modelInput ]),
      keyHint,
      el('div', { class: 'ai-row' }, [ saveBtn, testBtn ]),
      settingsStatus,
      el('p', { class: 'ai-note', html:
        '<b>Storage:</b> your key, provider, and model are saved <b>only in this ' +
        'browser</b> (localStorage, via the app\'s local store). They are never sent ' +
        'anywhere except directly to the provider you choose when you click a button. ' +
        'Clear your browser data to remove them.' })
    ]);

    // ===== INPUT PANEL =====
    var gearBtn = el('button', { class: 'ai-btn ai-gear', type: 'button', text: '⚙ Settings' });
    var keyState = el('span', { class: 'ai-note', id: 'ai-keystate' });

    var textarea = el('textarea', {
      id: 'ai-in',
      placeholder: 'Paste DE-IDENTIFIED / hypothetical rough or dictated text here.\n' +
        'NO names, MRNs, dates of birth, accession numbers, or any identifiers.'
    });
    var charCount = el('div', { class: 'ai-charcount', id: 'ai-chars', text: '0 characters' });

    var btnImpression = el('button', { type: 'button', 'data-task': 'impression', text: 'Polish impression' });
    var btnVariants = el('button', { type: 'button', 'data-task': 'variants', text: '3 phrasing variants' });
    var btnTighten = el('button', { type: 'button', 'data-task': 'tighten', text: 'Tighten findings' });
    var btnDiff = el('button', { type: 'button', 'data-task': 'differential', text: 'Differential' });
    var clearBtn = el('button', { type: 'button', id: 'ai-clear', text: 'Clear input' });
    var actionBtns = [btnImpression, btnVariants, btnTighten, btnDiff];

    var inputPanel = el('div', { class: 'ai-panel' }, [
      el('div', { class: 'ai-out-head' }, [
        el('span', { class: 'o-title', text: 'Your draft text' }), gearBtn
      ]),
      keyState,
      textarea,
      charCount,
      el('div', { class: 'ai-actions' }, actionBtns),
      el('div', { class: 'ai-actions' }, [ clearBtn ])
    ]);

    // ===== OUTPUT PANEL =====
    var outTitle = el('span', { class: 'o-title', id: 'ai-out-title', text: 'AI output' });
    var copyBtn = el('button', { class: 'ai-btn', type: 'button', id: 'ai-copy', text: 'Copy' });
    var outStatus = el('div', { class: 'ai-status', id: 'ai-status', 'aria-live': 'polite' });
    var errBox = el('div', { class: 'ai-err-box', id: 'ai-err', 'aria-live': 'assertive' });
    var outBody = el('div', { id: 'ai-out', class: 'placeholder',
      text: 'Output will appear here. Pick an action above.' });

    var outputPanel = el('div', { class: 'ai-panel' }, [
      el('div', { class: 'ai-out-head' }, [ outTitle, copyBtn ]),
      outStatus,
      errBox,
      outBody
    ]);

    root.appendChild(settingsPanel);
    root.appendChild(inputPanel);
    root.appendChild(outputPanel);

    // ---------- state sync ----------
    function refreshSettingsInputs() {
      var p = getProvider();
      providerSel.value = p;
      keyInput.value = getKey();
      var savedModel = Store.getSetting('aiModel', '');
      modelInput.value = savedModel || '';
      modelInput.placeholder = 'Default: ' + PROVIDERS[p].defaultModel;
      keyHint.innerHTML = 'Key format: <b>' + PROVIDERS[p].keyHint + '</b>. ' +
        'Get one at <a href="' + PROVIDERS[p].keyUrl + '" target="_blank" rel="noopener">' +
        PROVIDERS[p].keyUrl + '</a>';
    }

    function refreshKeyState() {
      var hasKey = !!getKey();
      keyState.innerHTML = hasKey
        ? 'Using <b>' + PROVIDERS[getProvider()].label + '</b> · model <b>' + getModel() +
          '</b> · key stored locally. <a href="#" id="ai-open-settings">Change</a>'
        : '<b style="color:var(--amber)">No API key set.</b> ' +
          '<a href="#" id="ai-open-settings">Open settings</a> to add one.';
      var link = document.getElementById('ai-open-settings');
      if (link) link.addEventListener('click', function (e) { e.preventDefault(); openSettings(true); });
      actionBtns.forEach(function (b) { b.disabled = !hasKey; });
    }

    function openSettings(open) {
      if (open == null) open = !settingsPanel.classList.contains('open');
      settingsPanel.classList.toggle('open', open);
      if (open) { refreshSettingsInputs(); keyInput.focus(); }
    }

    // ---------- settings events ----------
    gearBtn.addEventListener('click', function () { openSettings(); });

    providerSel.addEventListener('change', function () {
      // persist provider immediately so key lookups map to this provider
      Store.setSetting('aiProvider', providerSel.value);
      Store.setSetting('aiModel', ''); // model override is provider-specific; reset on switch
      refreshSettingsInputs();
      refreshKeyState();
      settingsStatus.className = 'ai-status';
      settingsStatus.textContent = '';
    });

    showKeyBtn.addEventListener('click', function () {
      var hidden = keyInput.type === 'password';
      keyInput.type = hidden ? 'text' : 'password';
      showKeyBtn.textContent = hidden ? 'Hide' : 'Show';
    });

    saveBtn.addEventListener('click', function () {
      Store.setSetting('aiProvider', providerSel.value);
      setKey(providerSel.value, keyInput.value.trim());
      var m = modelInput.value.trim();
      Store.setSetting('aiModel', m); // empty = use default
      settingsStatus.className = 'ai-status ok';
      settingsStatus.textContent = '✓ Saved locally.';
      refreshKeyState();
    });

    testBtn.addEventListener('click', function () {
      // Save current field values first so the test uses them.
      Store.setSetting('aiProvider', providerSel.value);
      setKey(providerSel.value, keyInput.value.trim());
      Store.setSetting('aiModel', modelInput.value.trim());
      refreshKeyState();

      var key = getKey();
      if (!key) {
        settingsStatus.className = 'ai-status err';
        settingsStatus.textContent = 'Enter an API key first.';
        return;
      }
      testBtn.disabled = true;
      saveBtn.disabled = true;
      settingsStatus.className = 'ai-status busy';
      settingsStatus.innerHTML = '<span class="spinner"></span>Testing connection…';
      callAPI(getProvider(), getModel(), key,
        'You are a connection test. Reply with the single word: OK.',
        'Reply with exactly: OK')
        .then(function (out) {
          settingsStatus.className = 'ai-status ok';
          settingsStatus.textContent = '✓ Connected. Model replied: ' +
            out.slice(0, 60).replace(/\s+/g, ' ');
        })
        .catch(function (err) {
          settingsStatus.className = 'ai-status err';
          settingsStatus.textContent = '✗ ' + (err && err.message ? err.message : String(err));
        })
        .then(function () { testBtn.disabled = false; saveBtn.disabled = false; });
    });

    // ---------- input events ----------
    function updateChars() {
      var n = textarea.value.length;
      charCount.textContent = n.toLocaleString() + ' character' + (n === 1 ? '' : 's');
    }
    textarea.addEventListener('input', updateChars);

    clearBtn.addEventListener('click', function () {
      textarea.value = ''; updateChars(); textarea.focus();
    });

    // ---------- run a task ----------
    var inFlight = false;
    function runTask(taskKey) {
      if (inFlight) return;
      var task = TASKS[taskKey];
      if (!task) return;

      var text = textarea.value.trim();
      errBox.classList.remove('show');
      errBox.textContent = '';

      if (!getKey()) {
        outStatus.className = 'ai-status err';
        outStatus.textContent = 'No API key set.';
        openSettings(true);
        return;
      }
      if (!text) {
        outStatus.className = 'ai-status err';
        outStatus.textContent = 'Enter some de-identified text first.';
        textarea.focus();
        return;
      }

      inFlight = true;
      setBusy(true);
      outTitle.textContent = task.title;
      outBody.className = 'placeholder';
      outBody.textContent = '';
      outStatus.className = 'ai-status busy';
      outStatus.innerHTML = '<span class="spinner"></span>Contacting ' +
        PROVIDERS[getProvider()].label + ' (' + getModel() + ')…';

      callAPI(getProvider(), getModel(), getKey(), SYSTEM_PROMPT, task.build(text))
        .then(function (out) {
          outBody.className = '';
          outBody.textContent = out;
          outStatus.className = 'ai-status ok';
          outStatus.textContent = '✓ Done. Review carefully — verify meaning before any use.';
        })
        .catch(function (err) {
          outBody.className = 'placeholder';
          outBody.textContent = '';
          outStatus.className = 'ai-status err';
          outStatus.textContent = '✗ Request failed.';
          errBox.textContent = (err && err.message ? err.message : String(err));
          errBox.classList.add('show');
        })
        .then(function () { inFlight = false; setBusy(false); });
    }

    function setBusy(busy) {
      actionBtns.forEach(function (b) { b.disabled = busy || !getKey(); });
      clearBtn.disabled = busy;
      gearBtn.disabled = busy;
    }

    actionBtns.forEach(function (b) {
      b.addEventListener('click', function () { runTask(b.getAttribute('data-task')); });
    });

    // ---------- copy ----------
    copyBtn.addEventListener('click', function () {
      var text = outBody.classList.contains('placeholder') ? '' : outBody.textContent;
      if (!text) { copyFeedback('Nothing to copy'); return; }
      function done() { copyFeedback('Copied ✓'); }
      function fail() { copyFeedback('Copy failed'); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { legacyCopy(text, done, fail); });
      } else {
        legacyCopy(text, done, fail);
      }
    });
    function legacyCopy(text, done, fail) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        ok ? done() : fail();
      } catch (e) { fail(); }
    }
    var copyTimer;
    function copyFeedback(msg) {
      var prev = copyBtn.textContent;
      copyBtn.textContent = msg;
      clearTimeout(copyTimer);
      copyTimer = setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1500);
    }

    // ---------- init ----------
    refreshSettingsInputs();
    refreshKeyState();
    updateChars();
    if (!getKey()) openSettings(true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
