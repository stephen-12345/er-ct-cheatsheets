/* ER CT Cheat Sheets — home launcher.
   Renders the region quick-nav, region sections + cards, and powers live search
   and severity filtering, all from ERCT.dx (data/*.js). */
(function () {
  'use strict';
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  var SEV_LABEL = { killer: 'Killer', urgent: 'Urgent' };
  var navWrap = document.getElementById('region-nav');
  var sectionsWrap = document.getElementById('dx-sections');
  var countEl = document.getElementById('result-count');
  var noRes = document.getElementById('no-results');

  // ---- build region quick-nav + sections ----
  ERCT.regions.forEach(function (r) {
    if (!r.dx.length) return;
    // sort within region: killers first, then urgent, then routine; alpha within
    var order = { killer: 0, urgent: 1, routine: 2 };
    r.dx.sort(function (a, b) {
      var s = (order[a.sev] || 3) - (order[b.sev] || 3);
      return s !== 0 ? s : a.title.localeCompare(b.title);
    });

    var nav = el('a', null,
      '<span class="rdot"></span>' + esc(r.name) + ' <span class="rcount">' + r.dx.length + '</span>');
    nav.href = '#r-' + r.key;
    nav.style.setProperty('--reg', r.color);
    navWrap.appendChild(nav);

    var head = el('div', 'region-head');
    head.id = 'r-' + r.key;
    head.style.setProperty('--reg', r.color);
    head.innerHTML =
      '<span class="ricon">' + (r.emoji || '▮') + '</span>' +
      '<h2>' + esc(r.name) + '<span class="rsub">' + esc(r.sub || '') + '</span></h2>' +
      '<span class="rn">' + r.dx.length + '</span>';
    sectionsWrap.appendChild(head);

    var grid = el('div', 'dxgrid');
    grid.dataset.region = r.key;
    r.dx.forEach(function (d) {
      var href = d.href ? d.href : 'dx.html?dx=' + encodeURIComponent(d.slug);
      var a = el('a', 'dxcard');
      a.href = href;
      a.style.setProperty('--card-accent', d.sev === 'killer' ? '#ff4d5e' : d.sev === 'urgent' ? '#ffb648' : r.color);
      var badge = d.sev === 'killer' ? '<span class="badge killer">Killer</span>'
        : d.sev === 'urgent' ? '<span class="badge urgent">Urgent</span>'
        : d.href ? '<span class="badge deep">Deep dive</span>' : '';
      var tags = (d.tags || []).slice(0, 3).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
      a.innerHTML =
        badge +
        '<div class="top"><span class="ico">' + (d.emoji || '▮') + '</span>' +
        '<div><h3>' + esc(d.title) + '</h3>' +
        '<div class="meta">' + esc(d.modality || 'CT') + (d.system ? ' · ' + esc(d.system) : '') + '</div></div></div>' +
        '<p>' + esc(d.blurb || '') + '</p>' +
        (tags ? '<div class="tags">' + tags + '</div>' : '');
      // searchable haystack
      a.dataset.search = (d.title + ' ' + (d.system || '') + ' ' + (d.blurb || '') + ' ' +
        (d.tags || []).join(' ') + ' ' + r.name + ' ' + (d.modality || '')).toLowerCase();
      a.dataset.sev = d.sev || 'routine';
      grid.appendChild(a);
    });
    sectionsWrap.appendChild(grid);
  });

  // ---- search + filter ----
  var input = document.getElementById('dx-search');
  var clearBtn = document.getElementById('search-clear');
  var kbdHint = document.getElementById('kbd-hint');
  var sevFilter = 'all';
  var allCards = [].slice.call(document.querySelectorAll('.dxcard'));

  function apply() {
    var q = (input.value || '').trim().toLowerCase();
    var terms = q ? q.split(/\s+/) : [];
    var shown = 0;
    allCards.forEach(function (c) {
      var okSev = sevFilter === 'all' ? true
        : sevFilter === 'killer' ? c.dataset.sev === 'killer'
        : sevFilter === 'urgent' ? (c.dataset.sev === 'killer' || c.dataset.sev === 'urgent') : true;
      var hay = c.dataset.search;
      var okText = terms.every(function (t) { return hay.indexOf(t) !== -1; });
      var vis = okSev && okText;
      c.style.display = vis ? '' : 'none';
      if (vis) shown++;
    });
    // hide empty region sections
    [].forEach.call(document.querySelectorAll('.dxgrid'), function (g) {
      var any = [].some.call(g.children, function (c) { return c.style.display !== 'none'; });
      g.style.display = any ? '' : 'none';
      var head = document.getElementById('r-' + g.dataset.region);
      if (head) head.style.display = any ? '' : 'none';
    });
    var filtering = q || sevFilter !== 'all';
    countEl.textContent = filtering ? (shown + ' of ' + allCards.length + ' diagnoses') : (allCards.length + ' diagnoses across ' + ERCT.regions.filter(function (r) { return r.dx.length; }).length + ' regions');
    noRes.classList.toggle('show', shown === 0);
    clearBtn.classList.toggle('show', !!q);
    if (kbdHint) kbdHint.style.display = q ? 'none' : '';
    navWrap.style.display = q ? 'none' : '';
  }

  input.addEventListener('input', apply);
  clearBtn.addEventListener('click', function () { input.value = ''; input.focus(); apply(); });

  [].forEach.call(document.querySelectorAll('.filters .fchip'), function (chip) {
    chip.addEventListener('click', function () {
      [].forEach.call(document.querySelectorAll('.filters .fchip'), function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      sevFilter = chip.dataset.sev || 'all';
      apply();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input) {
      e.preventDefault(); input.focus(); input.select();
    } else if (e.key === 'Escape' && document.activeElement === input) {
      input.value = ''; apply(); input.blur();
    }
  });

  apply();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
