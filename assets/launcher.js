/* ER CT Cheat Sheets — home launcher.
   Renders: region quick-nav (table of contents), collapsible region accordions,
   a pinned Favorites section and Recently-viewed section, per-card star toggles,
   live search, and voice search — all from ERCT.dx (data/*.js) + ERCTStore. */
(function () {
  'use strict';
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  var store = window.ERCTStore;

  var navWrap = document.getElementById('region-nav');
  var sectionsWrap = document.getElementById('dx-sections');
  var countEl = document.getElementById('result-count');
  var noRes = document.getElementById('no-results');
  var pinWrap = document.getElementById('pinned');   // favorites + recents go here

  // slug -> {d, r}
  var index = {};
  ERCT.dx.forEach(function (d) { index[d.slug] = { d: d, r: ERCT.regionMap[d.region] || {} }; });

  // ---- one card ----
  function makeCard(d, r) {
    var href = d.href ? d.href : 'dx.html?dx=' + encodeURIComponent(d.slug);
    var a = el('a', 'dxcard');
    a.href = href;
    a.dataset.slug = d.slug;
    a.style.setProperty('--card-accent', r.color || 'var(--teal)');
    var deep = d.href ? '<span class="deep-tag">◆ deep dive</span>' : '';
    var tags = (d.tags || []).slice(0, 3).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
    a.innerHTML =
      '<button class="star" aria-label="Toggle favorite" title="Favorite">' + (store.isFav(d.slug) ? '★' : '☆') + '</button>' +
      '<div class="top"><span class="ico">' + (d.emoji || '▮') + '</span>' +
      '<div><h3>' + esc(d.title) + '</h3>' +
      '<div class="meta">' + esc(d.modality || 'CT') + (d.system ? ' · ' + esc(d.system) : '') + ' ' + deep + '</div></div></div>' +
      '<p>' + esc(d.blurb || '') + '</p>' +
      (tags ? '<div class="tags">' + tags + '</div>' : '');
    if (store.isFav(d.slug)) a.classList.add('is-fav');
    a.dataset.search = (d.title + ' ' + (d.system || '') + ' ' + (d.blurb || '') + ' ' +
      (d.tags || []).join(' ') + ' ' + (r.name || '') + ' ' + (d.modality || '')).toLowerCase();
    // star toggles favorite without navigating
    a.querySelector('.star').addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      store.toggleFav(d.slug);
    });
    // record recently-viewed on open
    a.addEventListener('click', function () { store.pushRecent(d.slug); });
    return a;
  }

  // ---- region quick-nav (TOC) + accordions ----
  var activeRegions = ERCT.regions.filter(function (r) { return r.dx.length; });
  activeRegions.forEach(function (r) {
    r.dx.sort(function (a, b) { return a.title.localeCompare(b.title); });

    var nav = el('a', null, '<span class="rdot"></span>' + esc(r.name) + ' <span class="rcount">' + r.dx.length + '</span>');
    nav.href = '#rb-' + r.key;
    nav.style.setProperty('--reg', r.color);
    nav.addEventListener('click', function (e) { e.preventDefault(); openRegion(r.key, true); });
    navWrap.appendChild(nav);

    var block = el('div', 'region-block');
    block.id = 'rb-' + r.key;
    block.dataset.region = r.key;
    block.style.setProperty('--reg', r.color);

    var head = el('button', 'region-head');
    head.innerHTML =
      '<span class="ricon">' + (r.emoji || '▮') + '</span>' +
      '<span class="rh-txt"><span class="rh-name">' + esc(r.name) + '</span>' +
      '<span class="rsub">' + esc(r.sub || '') + '</span></span>' +
      '<span class="rn">' + r.dx.length + '</span><span class="chev">▸</span>';
    head.addEventListener('click', function () { block.classList.toggle('open'); });
    block.appendChild(head);

    var grid = el('div', 'dxgrid');
    r.dx.forEach(function (d) { grid.appendChild(makeCard(d, r)); });
    block.appendChild(grid);
    sectionsWrap.appendChild(block);
  });

  function openRegion(key, scroll) {
    var block = document.getElementById('rb-' + key);
    if (!block) return;
    block.classList.add('open');
    if (scroll) setTimeout(function () { block.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 30);
  }

  // ---- pinned: favorites + recently viewed ----
  function pinnedSection(id, title, slugs) {
    if (!slugs.length) return null;
    var sec = el('div', 'pin-sec');
    sec.id = id;
    var extra = id === 'sec-recent'
      ? '<button class="pin-clear" id="clear-recent">clear</button>' : '';
    sec.appendChild(el('div', 'region-head pin-head',
      '<span class="ricon">' + (id === 'sec-fav' ? '⭐' : '🕘') + '</span>' +
      '<span class="rh-txt"><span class="rh-name">' + title + '</span></span>' +
      '<span class="rn">' + slugs.length + '</span>' + extra));
    var grid = el('div', 'dxgrid');
    slugs.forEach(function (s) { var hit = index[s]; if (hit) grid.appendChild(makeCard(hit.d, hit.r)); });
    sec.appendChild(grid);
    return sec;
  }
  function renderPinned() {
    pinWrap.innerHTML = '';
    var fav = pinnedSection('sec-fav', 'Favorites', store.getFavorites());
    var rec = pinnedSection('sec-recent', 'Recently viewed', store.getRecents());
    if (fav) pinWrap.appendChild(fav);
    if (rec) pinWrap.appendChild(rec);
    var clr = document.getElementById('clear-recent');
    if (clr) clr.addEventListener('click', function (e) { e.stopPropagation(); store.clearRecents(); });
  }
  renderPinned();

  // keep all stars + favorites in sync when favorites change
  store.on('favorites', function () {
    var favs = store.getFavorites();
    [].forEach.call(document.querySelectorAll('.dxcard'), function (c) {
      var on = favs.indexOf(c.dataset.slug) !== -1;
      var st = c.querySelector('.star'); if (st) st.textContent = on ? '★' : '☆';
      c.classList.toggle('is-fav', on);
    });
    renderPinned();
  });
  store.on('recents', renderPinned);

  // ---- search ----
  var input = document.getElementById('dx-search');
  var clearBtn = document.getElementById('search-clear');
  var kbdHint = document.getElementById('kbd-hint');
  var allCards = [].slice.call(sectionsWrap.querySelectorAll('.dxcard'));

  function apply() {
    var q = (input.value || '').trim().toLowerCase();
    var terms = q ? q.split(/\s+/) : [];
    var shown = 0;
    allCards.forEach(function (c) {
      var hay = c.dataset.search;
      var vis = terms.every(function (t) { return hay.indexOf(t) !== -1; });
      c.style.display = vis ? '' : 'none';
      if (vis) shown++;
    });
    [].forEach.call(sectionsWrap.querySelectorAll('.region-block'), function (b) {
      var grid = b.querySelector('.dxgrid');
      var any = [].some.call(grid.children, function (c) { return c.style.display !== 'none'; });
      b.style.display = any ? '' : 'none';
      if (q) b.classList.toggle('open', any); // auto-expand matches while searching
    });
    countEl.textContent = q ? (shown + ' of ' + allCards.length + ' diagnoses')
      : (allCards.length + ' diagnoses · ' + activeRegions.length + ' regions · tap a region to open');
    noRes.classList.toggle('show', shown === 0);
    clearBtn.classList.toggle('show', !!q);
    if (kbdHint) kbdHint.style.display = q ? 'none' : '';
    navWrap.style.display = q ? 'none' : '';
    if (pinWrap) pinWrap.style.display = q ? 'none' : '';
  }
  input.addEventListener('input', apply);
  clearBtn.addEventListener('click', function () { input.value = ''; input.focus(); collapseAll(); apply(); });

  // ---- expand / collapse all ----
  function collapseAll() { [].forEach.call(sectionsWrap.querySelectorAll('.region-block'), function (b) { b.classList.remove('open'); }); }
  var toggleAll = document.getElementById('toggle-all');
  if (toggleAll) toggleAll.addEventListener('click', function () {
    var anyClosed = [].some.call(sectionsWrap.querySelectorAll('.region-block'), function (b) { return !b.classList.contains('open'); });
    [].forEach.call(sectionsWrap.querySelectorAll('.region-block'), function (b) { b.classList.toggle('open', anyClosed); });
    toggleAll.textContent = anyClosed ? 'Collapse all' : 'Expand all';
  });

  // ---- voice search (Web Speech API; gracefully absent if unsupported) ----
  var voiceBtn = document.getElementById('voice-btn');
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (voiceBtn && SR) {
    var rec = new SR();
    rec.lang = 'en-US'; rec.interimResults = false; rec.maxAlternatives = 1;
    voiceBtn.addEventListener('click', function () {
      try { rec.start(); voiceBtn.classList.add('listening'); } catch (e) {}
    });
    rec.onresult = function (ev) {
      var t = ev.results[0][0].transcript.replace(/[.!?]+$/, '');
      input.value = t; apply(); input.focus();
    };
    rec.onend = function () { voiceBtn.classList.remove('listening'); };
    rec.onerror = function () { voiceBtn.classList.remove('listening'); };
  } else if (voiceBtn) {
    voiceBtn.style.display = 'none';
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input) { e.preventDefault(); input.focus(); input.select(); }
    else if (e.key === 'Escape' && document.activeElement === input) { input.value = ''; collapseAll(); apply(); input.blur(); }
  });

  apply();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
