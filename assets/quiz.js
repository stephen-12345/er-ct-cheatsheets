/* ER CT Cheat Sheets — self-study Quiz + Leitner spaced repetition.
   Vanilla JS, offline, no frameworks. Reads window.ERCT.dx and persists
   progress through window.ERCTStore (getQuiz / setQuizCard / resetQuiz).

   Card schema (per slug): { box:1..5, seen, correct, due:<sessionCounter> }
   Leitner: correct -> box+1 (max 5); wrong/"didn't know" -> box=1.
   Priority for a session: lowest box first, then lowest due (oldest), then unseen. */
(function () {
  'use strict';

  var ERCT = window.ERCT || { dx: [], regions: [] };
  var Store = window.ERCTStore;
  var root = document.getElementById('quiz-root');

  if (!Store || !root) { if (root) root.textContent = 'Quiz unavailable (storage not loaded).'; return; }

  // ---------- catalog ----------
  // A diagnosis is "quizzable" if it has a title (always) and at least a blurb or a sheet.
  var ALL = (ERCT.dx || []).filter(function (d) {
    return d && d.slug && d.title && (d.blurb || d.sheet);
  });
  var REGIONS = (ERCT.regions || []).filter(function (r) {
    return ALL.some(function (d) { return d.region === r.key; });
  });
  var regionMap = ERCT.regionMap || {};

  if (!ALL.length) { root.textContent = 'No diagnoses available to quiz.'; return; }

  // ---------- helpers ----------
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k === 'style') n.setAttribute('style', attrs[k]);
      else if (k.slice(0, 2) === 'on' && typeof attrs[k] === 'function') n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  function clear() { while (root.firstChild) root.removeChild(root.firstChild); }
  function regColor(key) { return (regionMap[key] && regionMap[key].color) || 'var(--teal)'; }
  function regName(key) { return (regionMap[key] && regionMap[key].name) || key || ''; }
  function regEmoji(key) { return (regionMap[key] && regionMap[key].emoji) || ''; }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  // strip HTML tags from a sheet field, return first sentence (defensive).
  function firstSentence(htmlStr) {
    if (!htmlStr) return '';
    var tmp = document.createElement('div');
    tmp.innerHTML = String(htmlStr);
    var txt = (tmp.textContent || '').replace(/\s+/g, ' ').trim();
    if (!txt) return '';
    var m = txt.match(/^.*?[.!?](\s|$)/);
    return (m ? m[0] : txt).trim();
  }
  function plainTitle(d) {
    // remove any "— qualifier" so the answer isn't echoed by a hint; keep full for display
    return d.title || '';
  }
  function targetFor(d) { return d.href ? d.href : ('dx.html?dx=' + encodeURIComponent(d.slug)); }

  // ---------- spaced-repetition state ----------
  function loadCards() { try { return Store.getQuiz() || {}; } catch (e) { return {}; } }
  function cardFor(cards, slug) {
    var c = cards[slug];
    if (!c) return { box: 1, seen: 0, correct: 0, due: 0 };
    return { box: c.box || 1, seen: c.seen || 0, correct: c.correct || 0, due: c.due || 0 };
  }
  // session counter advances each card answered; used as a monotonic "due" clock.
  function nextDue() {
    var cards = loadCards(), max = 0;
    for (var s in cards) if (cards[s] && cards[s].due > max) max = cards[s].due;
    return max;
  }
  function gradeCard(slug, correct) {
    var cards = loadCards();
    var c = cardFor(cards, slug);
    c.seen = (c.seen || 0) + 1;
    if (correct) { c.correct = (c.correct || 0) + 1; c.box = Math.min(5, (c.box || 1) + 1); }
    else { c.box = 1; }
    c.due = nextDue() + 1; // schedule after everything currently seen
    Store.setQuizCard(slug, c);
    return c;
  }
  // mastered = box >= 5
  function progressCounts(pool) {
    var cards = loadCards(), mastered = 0, rotation = 0;
    pool.forEach(function (d) {
      var c = cards[d.slug];
      if (c && c.box >= 5) mastered++; else rotation++;
    });
    return { mastered: mastered, rotation: rotation, total: pool.length };
  }
  // ordering: lowest box first; within a box, lowest due (oldest / unseen first)
  function prioritize(pool) {
    var cards = loadCards();
    return pool.slice().map(function (d) {
      var c = cards[d.slug];
      return { d: d, box: c ? (c.box || 1) : 0, due: c ? (c.due || 0) : 0, seen: c ? (c.seen || 0) : 0, r: Math.random() };
    }).sort(function (a, b) {
      if (a.box !== b.box) return a.box - b.box;      // box 0 (unseen) and box 1 surface first
      if (a.due !== b.due) return a.due - b.due;       // older / never-seen first
      return a.r - b.r;
    }).map(function (x) { return x.d; });
  }

  // ---------- persisted setup prefs ----------
  function getSel() {
    var saved = null;
    try { saved = Store.getSetting('quizRegions', null); } catch (e) {}
    if (saved && saved.length) {
      var valid = saved.filter(function (k) { return REGIONS.some(function (r) { return r.key === k; }); });
      if (valid.length) return valid;
    }
    return REGIONS.map(function (r) { return r.key; }); // default: all
  }
  function saveSel(keys) { try { Store.setSetting('quizRegions', keys); } catch (e) {} }

  // ---------- session state ----------
  var state = {
    mode: 'flash',          // 'flash' | 'mc'
    selected: getSel(),     // region keys
    size: 10,               // 10 | 20 | 'all'
    queue: [],              // array of dx
    idx: 0,
    correct: 0,
    review: 0,
    revealed: false,
    answered: false
  };
  try { var m = Store.getSetting('quizMode', null); if (m === 'flash' || m === 'mc') state.mode = m; } catch (e) {}

  function poolForSelection() {
    var keys = state.selected.length ? state.selected : REGIONS.map(function (r) { return r.key; });
    return ALL.filter(function (d) { return keys.indexOf(d.region) !== -1; });
  }

  // ============================================================ SETUP SCREEN
  function renderSetup() {
    state.revealed = false; state.answered = false;
    clear();
    document.onkeydown = onSetupKeys;

    var pool = poolForSelection();
    var pc = progressCounts(pool.length ? pool : ALL);

    var wrap = el('div', {});
    wrap.appendChild(el('h1', { class: 'sheet-h1', text: 'Study Quiz' }));
    wrap.appendChild(el('p', { class: 'quiz-sub',
      html: 'Test recall of the cheat-sheet catalog. Progress is saved on this device using spaced repetition (Leitner boxes) — missed cards come back sooner, mastered cards rotate out.' }));

    // progress summary
    var prog = el('div', { class: 'qprogress' });
    var pct = pc.total ? Math.round((pc.mastered / pc.total) * 100) : 0;
    prog.appendChild(el('div', { class: 'bar' }, [el('i', { style: 'width:' + pct + '%' })]));
    prog.appendChild(el('div', { class: 'lbl' }, [
      el('span', { text: pc.mastered + ' mastered' }),
      el('span', { text: pc.rotation + ' in rotation' })
    ]));
    wrap.appendChild(prog);

    // region chips
    wrap.appendChild(el('label', { class: 'qfieldlabel', text: 'Regions' }));
    var chips = el('div', { class: 'qchips' });

    var allOn = state.selected.length === REGIONS.length;
    var allChip = el('div', {
      class: 'qchip' + (allOn ? ' on' : ''), role: 'button', tabindex: '0',
      onclick: function () {
        if (state.selected.length === REGIONS.length) state.selected = [REGIONS[0].key];
        else state.selected = REGIONS.map(function (r) { return r.key; });
        saveSel(state.selected); renderSetup();
      }
    }, [el('span', { text: 'All' }), el('span', { class: 'cnt', text: String(ALL.length) })]);
    chips.appendChild(allChip);

    REGIONS.forEach(function (r) {
      var on = state.selected.indexOf(r.key) !== -1;
      var cnt = ALL.filter(function (d) { return d.region === r.key; }).length;
      var chip = el('div', {
        class: 'qchip' + (on ? ' on' : ''), role: 'button', tabindex: '0',
        style: '--reg:' + r.color,
        onclick: function () { toggleRegion(r.key); }
      }, [
        el('span', { class: 'rdot' }),
        el('span', { text: (r.emoji ? r.emoji + ' ' : '') + r.name }),
        el('span', { class: 'cnt', text: String(cnt) })
      ]);
      chip.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleRegion(r.key); } });
      chips.appendChild(chip);
    });
    wrap.appendChild(chips);

    // mode
    wrap.appendChild(el('label', { class: 'qfieldlabel', text: 'Mode' }));
    var modeRow = el('div', { class: 'qrow' });
    [['flash', '🃏 Flashcard'], ['mc', '🎯 Name the diagnosis']].forEach(function (m) {
      modeRow.appendChild(el('button', {
        class: 'qbtn' + (state.mode === m[0] ? ' on' : ''),
        onclick: function () { state.mode = m[0]; try { Store.setSetting('quizMode', m[0]); } catch (e) {} renderSetup(); },
        text: m[1]
      }));
    });
    wrap.appendChild(modeRow);

    // session length
    wrap.appendChild(el('label', { class: 'qfieldlabel', text: 'Session length' }));
    var sizeRow = el('div', { class: 'qrow' });
    [[10, '10'], [20, '20'], ['all', 'All (' + pool.length + ')']].forEach(function (s) {
      sizeRow.appendChild(el('button', {
        class: 'qbtn' + (state.size === s[0] ? ' on' : ''),
        onclick: function () { state.size = s[0]; renderSetup(); },
        text: s[1]
      }));
    });
    wrap.appendChild(sizeRow);

    // start
    var startWrap = el('div', { style: 'margin-top:26px' });
    var canStart = pool.length > 0;
    var start = el('button', {
      class: 'qbtn primary wide',
      text: canStart ? 'Start session ▶' : 'Select at least one region',
      onclick: function () { if (canStart) startSession(); }
    });
    start.disabled = !canStart;
    startWrap.appendChild(start);
    wrap.appendChild(startWrap);

    if (canStart) {
      wrap.appendChild(el('div', { class: 'qkbdhint', html:
        'Tip: keyboard <kbd>1</kbd>–<kbd>4</kbd> pick answers · <kbd>Space</kbd> reveals / advances.' }));
    }

    // reset progress
    var reset = el('div', { class: 'qreset' });
    reset.appendChild(el('button', { text: 'Reset all quiz progress', onclick: doReset }));
    wrap.appendChild(reset);

    root.appendChild(wrap);
  }

  function toggleRegion(key) {
    var i = state.selected.indexOf(key);
    if (i === -1) state.selected.push(key);
    else if (state.selected.length > 1) state.selected.splice(i, 1); // keep at least one
    saveSel(state.selected);
    renderSetup();
  }

  function doReset() {
    if (window.confirm('Reset all quiz progress? This clears every Leitner box and cannot be undone.')) {
      try { Store.resetQuiz(); } catch (e) {}
      renderSetup();
    }
  }

  function onSetupKeys(e) {
    if (e.key === 'Enter' && poolForSelection().length) { e.preventDefault(); startSession(); }
  }

  // ============================================================ SESSION
  function startSession() {
    var pool = poolForSelection();
    if (!pool.length) return;
    var ordered = prioritize(pool);
    var n = state.size === 'all' ? ordered.length : Math.min(state.size, ordered.length);
    state.queue = ordered.slice(0, n);
    state.idx = 0; state.correct = 0; state.review = 0;
    renderCard();
  }

  function current() { return state.queue[state.idx]; }

  function renderCard() {
    state.revealed = false; state.answered = false;
    clear();
    var d = current();
    if (!d) return renderResults();
    document.onkeydown = onCardKeys;

    var wrap = el('div', {});

    // progress bar across the session
    var prog = el('div', { class: 'qprogress' });
    var pct = Math.round((state.idx / state.queue.length) * 100);
    prog.appendChild(el('div', { class: 'bar' }, [el('i', { style: 'width:' + pct + '%' })]));
    prog.appendChild(el('div', { class: 'lbl' }, [
      el('span', { text: 'Card ' + (state.idx + 1) + ' / ' + state.queue.length }),
      el('span', { text: state.mode === 'flash' ? 'Flashcard' : 'Name the dx' })
    ]));
    wrap.appendChild(prog);

    if (state.mode === 'flash') wrap.appendChild(renderFlash(d));
    else wrap.appendChild(renderMC(d));

    root.appendChild(wrap);
  }

  // ---- prompt construction (never names the diagnosis) ----
  function buildPrompt(d) {
    // clinical prompt = blurb (preferred) else first sheet.find sentence
    var p = d.blurb || firstSentence(d.sheet && d.sheet.find) || 'Identify the diagnosis from the clues below.';
    return p;
  }
  function promptTags(d) { return (d.tags || []).slice(0, 3); }
  function findHint(d) {
    // a non-naming hint: first sentence of sheet.find if it differs from the blurb
    if (!d.sheet || !d.sheet.find) return '';
    var fs = firstSentence(d.sheet.find);
    if (!fs) return '';
    if (d.blurb && fs.toLowerCase().indexOf(d.blurb.slice(0, 24).toLowerCase()) !== -1) return '';
    return fs;
  }

  // ---- FLASHCARD ----
  function renderFlash(d) {
    var card = el('div', { class: 'qcard', style: '--reg:' + regColor(d.region) });

    var meta = el('div', { class: 'qmeta' });
    meta.appendChild(el('span', { class: 'qpill', text: (regEmoji(d.region) ? regEmoji(d.region) + ' ' : '') + 'Mystery case' }));
    if (d.modality) meta.appendChild(el('span', { class: 'qpill mod', text: d.modality }));
    card.appendChild(meta);

    card.appendChild(el('div', { class: 'qprompt', text: buildPrompt(d) }));

    var hint = findHint(d);
    if (hint) card.appendChild(el('div', { class: 'qhint', html: '<b>Hint:</b> ' + escapeHtml(hint) }));

    var tags = promptTags(d);
    if (tags.length) {
      var tr = el('div', { class: 'qtagrow' });
      tags.forEach(function (t) { tr.appendChild(el('span', { class: 'chip', text: t })); });
      card.appendChild(tr);
    }

    // body that flips between Reveal and the answer
    var body = el('div', { id: 'qflash-body' });
    body.appendChild(el('div', { style: 'margin-top:18px' }, [
      el('button', { class: 'qbtn primary wide', text: 'Reveal answer  (Space)', onclick: function () { revealFlash(d, card); } })
    ]));
    card.appendChild(body);
    return card;
  }

  function revealFlash(d, card) {
    if (state.revealed) return;
    state.revealed = true;
    var body = card.querySelector('#qflash-body');
    if (body) while (body.firstChild) body.removeChild(body.firstChild);

    var rev = el('div', { class: 'qreveal' });
    rev.appendChild(el('div', { class: 'qanswer' }, [
      document.createTextNode(plainTitle(d)),
      el('span', { class: 'reg', text: regName(d.region) + (d.system ? ' · ' + d.system : '') })
    ]));

    var co = el('div', { class: 'qcallouts' });
    if (d.sheet) {
      addCallout(co, 'pitfall', '⚠️', 'Pitfall', d.sheet.pitfall);
      addCallout(co, 'pearl', '💡', 'Pearl', d.sheet.pearl);
      addCallout(co, 'measure', '📏', 'Measure', d.sheet.measure);
    }
    if (!co.childNodes.length && d.blurb) {
      addCallout(co, 'pearl', '💡', 'Key point', d.blurb);
    }
    rev.appendChild(co);

    rev.appendChild(el('a', { class: 'qlink', href: targetFor(d), target: '_blank', rel: 'noopener',
      text: 'Open full sheet ↗' }));

    // self grade
    var grade = el('div', { class: 'qfooter' });
    grade.appendChild(el('button', { class: 'qbtn good', text: '✓ Got it  (1)', onclick: function () { gradeAndNext(d, true); } }));
    grade.appendChild(el('button', { class: 'qbtn bad', text: '✗ Missed it  (2)', onclick: function () { gradeAndNext(d, false); } }));
    rev.appendChild(grade);

    var body2 = card.querySelector('#qflash-body');
    if (body2) body2.appendChild(rev);
  }

  function addCallout(parent, kind, ico, lbl, htmlStr) {
    if (!htmlStr) return;
    parent.appendChild(el('div', { class: 'callout ' + kind }, [
      el('div', { class: 'c-title' }, [
        el('span', { class: 'ico', text: ico }),
        el('span', { class: 'lbl', text: lbl })
      ]),
      el('p', { html: String(htmlStr) })
    ]));
  }

  // ---- MULTIPLE CHOICE ----
  function buildOptions(d) {
    var pool = ALL.filter(function (x) { return x.region === d.region && x.slug !== d.slug; });
    if (pool.length < 3) {
      var extra = ALL.filter(function (x) { return x.slug !== d.slug && pool.indexOf(x) === -1; });
      pool = pool.concat(extra);
    }
    var distractors = shuffle(pool).slice(0, 3);
    return shuffle([d].concat(distractors));
  }

  function renderMC(d) {
    var card = el('div', { class: 'qcard', style: '--reg:' + regColor(d.region) });

    var meta = el('div', { class: 'qmeta' });
    meta.appendChild(el('span', { class: 'qpill', text: (regEmoji(d.region) ? regEmoji(d.region) + ' ' : '') + regName(d.region) }));
    if (d.modality) meta.appendChild(el('span', { class: 'qpill mod', text: d.modality }));
    card.appendChild(meta);

    card.appendChild(el('div', { class: 'qprompt', text: buildPrompt(d) }));

    var tags = promptTags(d);
    if (tags.length) {
      var tr = el('div', { class: 'qtagrow' });
      tags.forEach(function (t) { tr.appendChild(el('span', { class: 'chip', text: t })); });
      card.appendChild(tr);
    }

    var opts = buildOptions(d);
    state._opts = opts; // for keyboard
    var box = el('div', { class: 'qopts' });
    opts.forEach(function (o, i) {
      var b = el('button', { class: 'qopt', 'data-slug': o.slug, onclick: function () { pickMC(d, o, opts, box, card); } }, [
        el('span', { class: 'num', text: String(i + 1) }),
        el('span', { text: plainTitle(o) })
      ]);
      box.appendChild(b);
    });
    card.appendChild(box);
    state._mcCard = card; state._mcDx = d;
    return card;
  }

  function pickMC(d, chosen, opts, box, card) {
    if (state.answered) return;
    state.answered = true;
    var correct = chosen.slug === d.slug;

    var btns = box.querySelectorAll('.qopt');
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      var slug = btns[i].getAttribute('data-slug');
      if (slug === d.slug) btns[i].classList.add('correct');
      else if (slug === chosen.slug) btns[i].classList.add('wrong');
    }

    var fb = el('div', { class: 'qfeedback ' + (correct ? 'ok' : 'no'),
      text: correct ? '✓ Correct' : '✗ Not quite — it’s ' + plainTitle(d) });
    card.appendChild(fb);

    // a quick pearl/pitfall for reinforcement
    var co = el('div', { class: 'qcallouts' });
    if (d.sheet) {
      addCallout(co, 'pearl', '💡', 'Pearl', d.sheet.pearl);
      if (!co.childNodes.length) addCallout(co, 'pitfall', '⚠️', 'Pitfall', d.sheet.pitfall);
    }
    if (!co.childNodes.length && d.blurb) addCallout(co, 'pearl', '💡', 'Key point', d.blurb);
    card.appendChild(co);

    card.appendChild(el('a', { class: 'qlink', href: targetFor(d), target: '_blank', rel: 'noopener',
      text: 'Open full sheet ↗' }));

    var foot = el('div', { class: 'qfooter' });
    foot.appendChild(el('button', { class: 'qbtn primary', text: 'Next  (Space)', onclick: function () { advance(); } }));
    card.appendChild(foot);

    // auto-grade
    if (correct) state.correct++; else state.review++;
    gradeCard(d.slug, correct);
  }

  function gradeAndNext(d, correct) {
    if (state.answered) return;
    state.answered = true;
    if (correct) state.correct++; else state.review++;
    gradeCard(d.slug, correct);
    advance();
  }

  function advance() {
    state.idx++;
    if (state.idx >= state.queue.length) renderResults();
    else renderCard();
  }

  // ============================================================ RESULTS
  function renderResults() {
    clear();
    document.onkeydown = onResultKeys;

    var total = state.queue.length;
    var pool = poolForSelection();
    var pc = progressCounts(pool);

    var wrap = el('div', {});
    wrap.appendChild(el('h1', { class: 'sheet-h1', text: 'Session complete' }));
    var pctScore = total ? Math.round((state.correct / total) * 100) : 0;
    wrap.appendChild(el('p', { class: 'quiz-sub',
      text: 'You answered ' + state.correct + ' of ' + total + ' correctly (' + pctScore + '%).' }));

    var grid = el('div', { class: 'qresult-grid' });
    grid.appendChild(el('div', { class: 'qstat good' }, [
      el('div', { class: 'n', text: String(state.correct) }), el('div', { class: 'k', text: 'Correct' })
    ]));
    grid.appendChild(el('div', { class: 'qstat review' }, [
      el('div', { class: 'n', text: String(state.review) }), el('div', { class: 'k', text: 'To review' })
    ]));
    wrap.appendChild(grid);

    // overall mastery bar
    var prog = el('div', { class: 'qprogress' });
    var pct = pc.total ? Math.round((pc.mastered / pc.total) * 100) : 0;
    prog.appendChild(el('div', { class: 'bar' }, [el('i', { style: 'width:' + pct + '%' })]));
    prog.appendChild(el('div', { class: 'lbl' }, [
      el('span', { text: pc.mastered + ' mastered' }),
      el('span', { text: pc.rotation + ' in rotation' })
    ]));
    wrap.appendChild(prog);

    var row = el('div', { class: 'qrow', style: 'margin-top:18px' });
    row.appendChild(el('button', { class: 'qbtn primary', text: '↻ Restart', onclick: function () { startSession(); } }));
    row.appendChild(el('button', { class: 'qbtn', text: 'New setup', onclick: renderSetup }));
    row.appendChild(el('a', { class: 'qbtn ghost', href: 'index.html', text: '← Back to topics',
      style: 'text-decoration:none' }));
    wrap.appendChild(row);

    wrap.appendChild(el('div', { class: 'qkbdhint', html: 'Press <kbd>Space</kbd> to restart.' }));

    var reset = el('div', { class: 'qreset' });
    reset.appendChild(el('button', { text: 'Reset all quiz progress', onclick: doReset }));
    wrap.appendChild(reset);

    root.appendChild(wrap);
  }

  // ============================================================ KEYBOARD
  function onCardKeys(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var d = current();
    if (!d) return;
    if (state.mode === 'flash') {
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        if (!state.revealed) revealFlash(d, root.querySelector('.qcard'));
        // after reveal, space does nothing until graded (avoid accidental skip)
      } else if (state.revealed && (e.key === '1')) { e.preventDefault(); gradeAndNext(d, true); }
      else if (state.revealed && (e.key === '2')) { e.preventDefault(); gradeAndNext(d, false); }
    } else { // MC
      if (!state.answered && /^[1-4]$/.test(e.key)) {
        var opts = state._opts || [];
        var i = parseInt(e.key, 10) - 1;
        if (opts[i]) { e.preventDefault(); pickMC(d, opts[i], opts, root.querySelector('.qopts'), state._mcCard); }
      } else if (state.answered && (e.key === ' ' || e.code === 'Space')) {
        e.preventDefault(); advance();
      }
    }
  }
  function onResultKeys(e) {
    if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); startSession(); }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // ---------- go ----------
  renderSetup();
})();
