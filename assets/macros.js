/* ER CT Cheat Sheets — Macros & Template-Export module.
   Three sections:
     A) Built-in report templates  — searchable/region-filterable list of every dx
        with a sheet.f / sheet.i dictation, each with Copy buttons.
     B) Export for PowerScribe AutoText — bulk-build downloadable .txt of suggested
        AutoTexts (trigger + text), plus copy-to-clipboard.
     C) My macros — local editor backed by ERCTStore (localStorage), with JSON
        backup import/export. Included in "Export everything".
   Vanilla JS, offline-only, defensive against entries without a sheet. */
(function () {
  'use strict';

  var ERCT = window.ERCT || { dx: [], regions: [], regionMap: {} };
  var Store = window.ERCTStore;
  var root = document.getElementById('mac-root');
  if (!root) return;

  /* ---------------------------------------------------------------- helpers */

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  // Escape arbitrary text for safe HTML insertion.
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Source dictation text may contain inline HTML (e.g. <b>). Strip tags to get
  // the plain copy/export text the radiologist actually dictates.
  function plain(s) {
    if (s == null) return '';
    var d = document.createElement('div');
    d.innerHTML = String(s);
    var t = d.textContent || d.innerText || '';
    return t.replace(/ /g, ' ').trim();
  }

  // Render plain dictation text with [placeholders] wrapped in .ph spans.
  function withPlaceholders(s) {
    return esc(plain(s)).replace(/\[([^\]]*)\]/g, function (_, inner) {
      return '<span class="ph">[' + esc(inner) + ']</span>';
    });
  }

  // slug -> safe trigger fragment
  function slugify(s) {
    return String(s || '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'item';
  }

  function regionInfo(key) {
    var r = (ERCT.regionMap && ERCT.regionMap[key]) || null;
    return {
      name: r ? r.name : (key || ''),
      color: r ? r.color : 'var(--teal)'
    };
  }

  // brief "Copied" flash on a button
  function flash(btn, ok) {
    var prev = btn.getAttribute('data-label') || btn.textContent;
    if (!btn.getAttribute('data-label')) btn.setAttribute('data-label', prev);
    btn.textContent = ok ? 'Copied ✓' : 'Press ⌘C';
    btn.classList.add('copied');
    clearTimeout(btn._t);
    btn._t = setTimeout(function () {
      btn.textContent = btn.getAttribute('data-label');
      btn.classList.remove('copied');
    }, 1100);
  }

  function copyText(text, btn) {
    function fallback() {
      try {
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.focus(); ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (btn) flash(btn, ok);
      } catch (e) { if (btn) flash(btn, false); }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { if (btn) flash(btn, true); },
        fallback
      );
    } else {
      fallback();
    }
  }

  function download(filename, text) {
    var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  /* ---------------------------------------------------------------- data */

  // All diagnoses that carry a usable dictation template.
  var templates = (ERCT.dx || []).filter(function (d) {
    return d && d.sheet && (d.sheet.f || d.sheet.i);
  }).map(function (d) {
    var slug = d.slug || slugify(d.title);
    return {
      slug: slug,
      title: d.title || slug,
      region: d.region || '',
      f: d.sheet.f ? plain(d.sheet.f) : '',
      i: d.sheet.i ? plain(d.sheet.i) : '',
      triggerF: 'erct_' + slugify(slug) + '_f',
      triggerI: 'erct_' + slugify(slug) + '_i'
    };
  });

  /* ============================================================ SCAFFOLD */

  root.appendChild(el('h1', 'sheet-h1', 'Macros &amp; Report Templates'));
  root.appendChild(el('p', 'subtitle',
    'Copy-ready Findings/Impression dictations for every diagnosis, a one-time ' +
    'AutoText export for PowerScribe, and your own saved macros — all offline on this device.'));

  var tabs = el('div', 'mac-tabs');
  var TABS = [
    { id: 'templates', label: 'Report templates' },
    { id: 'export', label: 'PowerScribe export' },
    { id: 'mine', label: 'My macros' }
  ];
  var panels = {};
  TABS.forEach(function (t) {
    var b = el('button', 'mac-tab', t.label);
    b.type = 'button';
    b.addEventListener('click', function () { activate(t.id); });
    tabs.appendChild(b);
    t.btn = b;
    var p = el('section', 'mac-panel');
    p.id = 'panel-' + t.id;
    panels[t.id] = p;
  });
  root.appendChild(tabs);
  TABS.forEach(function (t) { root.appendChild(panels[t.id]); });

  function activate(id) {
    TABS.forEach(function (t) {
      var on = t.id === id;
      t.btn.classList.toggle('active', on);
      panels[t.id].classList.toggle('active', on);
    });
  }

  /* ============================================== SECTION A — TEMPLATES */

  (function buildTemplates() {
    var p = panels.templates;

    var note = el('div', 'callout find');
    note.innerHTML =
      '<div class="c-title"><span class="ico">📋</span><span class="lbl">How to use</span></div>' +
      '<p>Each diagnosis below carries a copy-ready <b>Findings</b> and <b>Impression</b> dictation. ' +
      'Tap <b>Copy</b> and paste into your report. ' +
      'Highlighted <span class="ph">[placeholders]</span> are the values you fill in (side, size, location).</p>';
    p.appendChild(note);

    var toolbar = el('div', 'mac-toolbar');
    var search = el('div', 'mac-search');
    search.innerHTML = '<span class="mag">🔎</span>' +
      '<input type="search" id="tpl-search" placeholder="Search title or dictation text…" ' +
      'autocomplete="off" autocapitalize="none" spellcheck="false">';
    toolbar.appendChild(search);

    var sel = el('select', 'mac-regsel');
    sel.id = 'tpl-region';
    sel.appendChild(new Option('All regions', ''));
    (ERCT.regions || []).forEach(function (r) {
      // only offer regions that actually have templates
      if (templates.some(function (t) { return t.region === r.key; })) {
        sel.appendChild(new Option(r.name, r.key));
      }
    });
    toolbar.appendChild(sel);
    p.appendChild(toolbar);

    var count = el('div', 'mac-count');
    p.appendChild(count);

    var list = el('div', 'mac-tpl-list');
    p.appendChild(list);

    var empty = el('div', 'mac-empty mac-hidden', 'No templates match your search.');
    p.appendChild(empty);

    function lineRow(kind, label, text, trigger) {
      if (!text) return null;
      var row = el('div', 'mac-line ' + kind);
      row.innerHTML =
        '<div class="lab">' + label + '</div>' +
        '<div class="body">' + withPlaceholders(text) + '</div>' +
        '<div class="trig">trigger: ' + esc(trigger) + '</div>';
      var br = el('div', 'mac-btnrow');
      var cb = el('button', 'mac-btn primary', 'Copy ' + label);
      cb.type = 'button';
      cb.addEventListener('click', function () { copyText(plain(text), cb); });
      br.appendChild(cb);
      row.appendChild(br);
      return row;
    }

    function render() {
      var q = (document.getElementById('tpl-search').value || '').trim().toLowerCase();
      var reg = sel.value;
      list.innerHTML = '';
      var shown = 0;
      templates.forEach(function (t) {
        if (reg && t.region !== reg) return;
        if (q) {
          var hay = (t.title + ' ' + t.f + ' ' + t.i).toLowerCase();
          if (hay.indexOf(q) === -1) return;
        }
        shown++;
        var ri = regionInfo(t.region);
        var row = el('div', 'mac-row');
        row.style.setProperty('--rc', ri.color);
        var head = el('div', 'dx');
        head.innerHTML = esc(t.title) +
          (t.region ? ' <span class="reg-pill">' + esc(ri.name) + '</span>' : '');
        row.appendChild(head);
        var fr = lineRow('f', 'F', t.f, t.triggerF); if (fr) row.appendChild(fr);
        var ir = lineRow('i', 'I', t.i, t.triggerI); if (ir) row.appendChild(ir);
        list.appendChild(row);
      });
      empty.classList.toggle('mac-hidden', shown !== 0);
      count.textContent = shown + ' of ' + templates.length + ' templates' +
        (q || reg ? ' (filtered)' : '');
    }

    document.getElementById('tpl-search').addEventListener('input', render);
    sel.addEventListener('change', render);
    render();
  })();

  /* ============================================== SECTION B — EXPORT */

  // Build the AutoText export block for a set of templates.
  // mode: 'i' | 'f' | 'all'
  function buildAutoText(mode, includeMacros) {
    var out = [];
    out.push('# ER CT Cheat Sheets — suggested PowerScribe AutoTexts');
    out.push('# Generated ' + new Date().toISOString().slice(0, 10) + ' · all offline, no PHI');
    out.push('# Workflow: PowerScribe has no public API, so add these once via');
    out.push('#   AutoText management. [trigger] = the spoken/typed key,');
    out.push('#   [text] = the inserted template. [bracketed] words are fields to fill in;');
    out.push('#   you can convert them to PowerScribe voice fields manually.');
    out.push('');

    function entry(trigger, text) {
      if (!text) return;
      out.push('[trigger]  ' + trigger);
      out.push('[text]     ' + text);
      out.push('----');
    }

    templates.forEach(function (t) {
      if (mode === 'i' || mode === 'all') entry(t.triggerI, t.i);
      if (mode === 'f' || mode === 'all') entry(t.triggerF, t.f);
    });

    if (includeMacros && Store) {
      var mine = Store.getMacros() || [];
      if (mine.length) {
        out.push('# ---- My macros ----');
        mine.forEach(function (m) {
          entry(m.trigger || ('erct_my_' + slugify(m.label || m.id)), plain(m.text));
        });
      }
    }
    return out.join('\n') + '\n';
  }

  (function buildExport() {
    var p = panels.export;

    var note = el('div', 'callout protocol');
    note.innerHTML =
      '<div class="c-title"><span class="ico">⚙️</span><span class="lbl">Why a file?</span></div>' +
      '<p>PowerScribe has <b>no public API</b>, so there is no way to push these in automatically. ' +
      'The practical workflow is a <b>one-time bulk add</b>: download the file below, then create ' +
      'each entry once in PowerScribe&rsquo;s AutoText management. After that the triggers are yours forever.</p>' +
      '<p>Each entry uses a consistent trigger scheme — <code>erct_&lt;diagnosis&gt;_f</code> for Findings and ' +
      '<code>erct_&lt;diagnosis&gt;_i</code> for Impressions. <span class="ph">[Placeholders]</span> stay as ' +
      'plain brackets in the text; in PowerScribe you can convert each one to a <b>voice field</b> you fill in by voice.</p>';
    p.appendChild(note);

    var grid = el('div', 'mac-export-grid');
    function exBtn(label, fn) {
      var b = el('button', 'mac-btn', label);
      b.type = 'button';
      b.addEventListener('click', fn);
      grid.appendChild(b);
      return b;
    }

    exBtn('⬇ Export all impressions', function () {
      download('erct-autotext-impressions.txt', buildAutoText('i', false));
    });
    exBtn('⬇ Export all findings', function () {
      download('erct-autotext-findings.txt', buildAutoText('f', false));
    });
    var allBtn = exBtn('⬇ Export everything', function () {
      download('erct-autotext-all.txt', buildAutoText('all', true));
    });
    allBtn.classList.add('primary');

    var copyAll = el('button', 'mac-btn', '⧉ Copy all to clipboard');
    copyAll.type = 'button';
    copyAll.addEventListener('click', function () {
      copyText(buildAutoText('all', true), copyAll);
    });
    grid.appendChild(copyAll);

    p.appendChild(grid);

    var stat = el('p', 'mac-count');
    stat.textContent = templates.length + ' diagnoses with templates · ' +
      '"Export everything" also includes your saved macros.';
    p.appendChild(stat);
  })();

  /* ============================================== SECTION C — MY MACROS */

  (function buildMine() {
    var p = panels.mine;
    if (!Store) {
      p.appendChild(el('div', 'mac-empty', 'Local storage is unavailable, so personal macros cannot be saved here.'));
      return;
    }

    var note = el('div', 'callout pearl');
    note.innerHTML =
      '<div class="c-title"><span class="ico">⭐</span><span class="lbl">Your snippets</span></div>' +
      '<p>Save your own dictation snippets on this device. Give each a <b>trigger</b> (e.g. ' +
      '<code>erct_normal_chest</code>), a short <b>label</b>, and the <b>text</b>. ' +
      'They are stored locally (no PHI, no sync) and are included in &ldquo;Export everything.&rdquo;</p>';
    p.appendChild(note);

    // ---- editor form ----
    var form = el('form', 'mac-form');
    form.innerHTML =
      '<input type="hidden" id="m-id" value="">' +
      '<div class="row">' +
        '<label>Trigger<input id="m-trigger" placeholder="erct_normal_chest" autocomplete="off" autocapitalize="none" spellcheck="false" required></label>' +
        '<label>Label<input id="m-label" placeholder="Normal chest CT" autocomplete="off"></label>' +
      '</div>' +
      '<div class="row">' +
        '<label class="full">Text (dictation; use [brackets] for fields)' +
          '<textarea id="m-text" placeholder="The lungs are clear without [focal consolidation]. No pleural effusion or pneumothorax…"></textarea>' +
        '</label>' +
      '</div>' +
      '<div class="mac-btnrow">' +
        '<button type="submit" class="mac-btn primary" id="m-save">Save macro</button>' +
        '<button type="button" class="mac-btn" id="m-clear">Clear / new</button>' +
      '</div>';
    p.appendChild(form);

    // ---- backup controls ----
    var backup = el('div', 'mac-btnrow');
    backup.style.margin = '0 0 16px';
    var expJson = el('button', 'mac-btn', '⬇ Export my macros (JSON)');
    expJson.type = 'button';
    expJson.addEventListener('click', function () {
      download('erct-my-macros.json', JSON.stringify(Store.getMacros() || [], null, 2));
    });
    var impBtn = el('button', 'mac-btn', '⬆ Import (JSON)');
    impBtn.type = 'button';
    var fileIn = el('input', '');
    fileIn.type = 'file';
    fileIn.id = 'file-import';
    fileIn.accept = 'application/json,.json';
    impBtn.addEventListener('click', function () { fileIn.click(); });
    fileIn.addEventListener('change', function () {
      var file = fileIn.files && fileIn.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var arr = JSON.parse(reader.result);
          if (!Array.isArray(arr)) throw new Error('not an array');
          var added = 0;
          arr.forEach(function (m) {
            if (!m || typeof m !== 'object') return;
            // re-id on import to avoid clobbering existing ids
            Store.saveMacro({
              trigger: String(m.trigger || '').trim() || ('erct_my_' + slugify(m.label || 'macro')),
              label: String(m.label || '').trim(),
              text: String(m.text || '')
            });
            added++;
          });
          renderList();
          alert('Imported ' + added + ' macro' + (added === 1 ? '' : 's') + '.');
        } catch (e) {
          alert('Could not import: the file is not valid macro JSON.');
        }
        fileIn.value = '';
      };
      reader.readAsText(file);
    });
    backup.appendChild(expJson);
    backup.appendChild(impBtn);
    backup.appendChild(fileIn);
    p.appendChild(backup);

    // ---- list ----
    var listHead = el('div', 'mac-count');
    p.appendChild(listHead);
    var list = el('div', 'mac-mine-list');
    p.appendChild(list);

    var fId = form.querySelector('#m-id');
    var fTrig = form.querySelector('#m-trigger');
    var fLabel = form.querySelector('#m-label');
    var fText = form.querySelector('#m-text');

    function resetForm() {
      fId.value = ''; fTrig.value = ''; fLabel.value = ''; fText.value = '';
      form.querySelector('#m-save').textContent = 'Save macro';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var trigger = fTrig.value.trim();
      var text = fText.value;
      if (!trigger || !text.trim()) {
        alert('A trigger and some text are required.');
        return;
      }
      var m = { trigger: trigger, label: fLabel.value.trim(), text: text };
      if (fId.value) m.id = fId.value;
      Store.saveMacro(m);
      resetForm();
      renderList();
    });
    form.querySelector('#m-clear').addEventListener('click', resetForm);

    function editMacro(m) {
      fId.value = m.id || '';
      fTrig.value = m.trigger || '';
      fLabel.value = m.label || '';
      fText.value = m.text || '';
      form.querySelector('#m-save').textContent = 'Update macro';
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function renderList() {
      var mine = Store.getMacros() || [];
      list.innerHTML = '';
      listHead.textContent = mine.length
        ? (mine.length + ' saved macro' + (mine.length === 1 ? '' : 's'))
        : '';
      if (!mine.length) {
        list.appendChild(el('div', 'mac-empty', 'No macros yet — add one above.'));
        return;
      }
      mine.forEach(function (m) {
        var row = el('div', 'mac-row');
        var head = el('div', 'dx');
        head.innerHTML = esc(m.label || m.trigger || 'Untitled');
        row.appendChild(head);
        var line = el('div', 'mac-line');
        line.innerHTML =
          '<div class="body">' + withPlaceholders(m.text) + '</div>' +
          '<div class="trig">trigger: ' + esc(m.trigger || '') + '</div>';
        row.appendChild(line);

        var br = el('div', 'mac-btnrow');
        var cb = el('button', 'mac-btn primary', 'Copy');
        cb.type = 'button';
        cb.addEventListener('click', function () { copyText(plain(m.text), cb); });
        var eb = el('button', 'mac-btn', 'Edit');
        eb.type = 'button';
        eb.addEventListener('click', function () { editMacro(m); });
        var db = el('button', 'mac-btn danger', 'Delete');
        db.type = 'button';
        db.addEventListener('click', function () {
          if (confirm('Delete macro "' + (m.label || m.trigger) + '"?')) {
            Store.deleteMacro(m.id);
            renderList();
          }
        });
        br.appendChild(cb); br.appendChild(eb); br.appendChild(db);
        row.appendChild(br);
        list.appendChild(row);
      });
    }

    // live refresh if store changes elsewhere
    if (Store.on) Store.on('macros', function () { renderList(); });
    renderList();
  })();

  /* ---------------------------------------------------------------- init */
  activate('templates');
})();
