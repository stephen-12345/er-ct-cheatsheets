/* ER CT Cheat Sheets — shared content-page chrome.
   - Auto-builds the TOC drawer from <h2 class="group">, <h2>, <h3> with ids
   - Font-size control (persisted), back-to-top, scroll-spy, swipe-to-close
   - Registers the service worker
   Drop-in: include once at the end of <body>. Requires the markup hooks
   (#toc-drawer skeleton, #to-top, #toc-handle) which buildChrome() injects. */
(function () {
  'use strict';

  // ---- inject floating + drawer chrome so pages stay content-only ----
  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }

  var drawer = el(
    '<nav id="toc-drawer" class="toc-drawer" aria-label="Table of contents">' +
      '<div class="toc-head"><span class="t">Contents</span>' +
      '<button id="toc-close" class="toc-close" aria-label="Close contents">&times;</button></div>' +
      '<div class="toc-list" id="toc-list"></div></nav>');
  var backdrop = el('<div id="toc-backdrop" class="toc-backdrop"></div>');
  var handle = el('<button id="toc-handle" class="toc-handle" aria-label="Open table of contents" title="Contents">☰<span class="chev">›</span></button>');
  var toTop = el('<button id="to-top" class="to-top" aria-label="Back to top" title="Back to top (Home)">↑</button>');
  document.body.appendChild(drawer);
  document.body.appendChild(backdrop);
  document.body.appendChild(handle);
  document.body.appendChild(toTop);

  // ---- build TOC tree from headings ----
  function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  var content = document.querySelector('.sheet') || document.body;
  var heads = [].slice.call(content.querySelectorAll('h2.group, h2:not(.group), h3'));
  var used = {};
  heads.forEach(function (h) {
    if (!h.id) {
      var base = slug(h.textContent) || 'section';
      var id = base, n = 2;
      while (used[id] || document.getElementById(id)) { id = base + '-' + n++; }
      h.id = id;
    }
    used[h.id] = true;
  });

  var list = drawer.querySelector('#toc-list');
  // Build a flat-but-nested structure: group/h2 are top-level, h3 nest under the nearest h2/group.
  var topNodes = [];          // {head, children:[]}
  var currentTop = null;
  heads.forEach(function (h) {
    var lvl = h.classList.contains('group') ? 'group' : h.tagName.toLowerCase();
    if (lvl === 'h3' && currentTop) { currentTop.children.push(h); }
    else { currentTop = { head: h, lvl: lvl, children: [] }; topNodes.push(currentTop); }
  });

  function linkFor(h, lvlClass) {
    var a = document.createElement('a');
    a.className = 'toc-link ' + lvlClass;
    a.href = '#' + h.id;
    a.textContent = h.textContent.replace(/\s+/g, ' ').trim();
    return a;
  }

  topNodes.forEach(function (node) {
    var wrap = document.createElement('div');
    wrap.className = 'toc-node' + (node.children.length ? '' : ' leaf');
    var row = document.createElement('div');
    row.className = 'toc-row';
    if (node.children.length) {
      var tog = document.createElement('button');
      tog.className = 'toc-tog';
      tog.setAttribute('aria-label', 'expand section');
      row.appendChild(tog);
    }
    var lvlClass = node.lvl === 'group' ? 'lvl-group' : 'lvl-h2';
    row.appendChild(linkFor(node.head, lvlClass));
    wrap.appendChild(row);
    if (node.children.length) {
      var kids = document.createElement('div');
      kids.className = 'toc-children';
      node.children.forEach(function (c) {
        var leaf = document.createElement('div');
        leaf.className = 'toc-node leaf';
        var lrow = document.createElement('div');
        lrow.className = 'toc-row';
        lrow.appendChild(linkFor(c, 'lvl-h3'));
        leaf.appendChild(lrow);
        kids.appendChild(leaf);
      });
      wrap.appendChild(kids);
    }
    list.appendChild(wrap);
  });

  // ---- drawer open/close ----
  var tocToggle = document.getElementById('toc-toggle');
  var tocClose = drawer.querySelector('#toc-close');
  function open() { drawer.classList.add('open'); backdrop.classList.add('show'); document.body.classList.add('toc-open'); }
  function close() { drawer.classList.remove('open'); backdrop.classList.remove('show'); document.body.classList.remove('toc-open'); }
  function toggle() { drawer.classList.contains('open') ? close() : open(); }
  if (tocToggle) tocToggle.onclick = toggle;
  handle.onclick = open;
  tocClose.onclick = close;
  backdrop.onclick = close;

  drawer.addEventListener('click', function (e) {
    var tog = e.target.closest('.toc-tog');
    if (tog) { e.preventDefault(); tog.closest('.toc-node').classList.toggle('open'); return; }
    if (e.target.closest('a')) { close(); }
  });

  // swipe-left to close
  var swX = null, swY = null;
  document.addEventListener('touchstart', function (e) {
    if (drawer.classList.contains('open')) { var t = e.touches[0]; swX = t.clientX; swY = t.clientY; } else swX = null;
  }, { passive: true });
  document.addEventListener('touchmove', function (e) {
    if (swX === null) return; var t = e.touches[0];
    if (t.clientX - swX < -45 && Math.abs(t.clientY - swY) < 70) { close(); swX = null; }
  }, { passive: true });
  document.addEventListener('touchend', function () { swX = null; }, { passive: true });

  // ---- scroll-spy ----
  var links = {};
  [].forEach.call(drawer.querySelectorAll('a[href^="#"]'), function (a) { links[a.getAttribute('href').slice(1)] = a; });
  var spyT = null;
  function spy() {
    if (!heads.length) return;
    var y = window.scrollY + 96, cur = null;
    for (var k = 0; k < heads.length; k++) { if (heads[k].offsetTop <= y) cur = heads[k].id; else break; }
    for (var id in links) links[id].classList.remove('active');
    if (cur && links[cur]) {
      var a = links[cur]; a.classList.add('active');
      var node = a.closest('.toc-node');
      while (node) { node.classList.add('open'); node = node.parentElement && node.parentElement.closest('.toc-node'); }
    }
  }
  window.addEventListener('scroll', function () { if (spyT) return; spyT = setTimeout(function () { spyT = null; spy(); }, 120); }, { passive: true });

  // ---- back-to-top ----
  function goTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function onScroll() { if (window.scrollY > 320) toTop.classList.add('show'); else toTop.classList.remove('show'); }
  toTop.onclick = goTop;
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  spy();

  // ---- font-size control (persisted) ----
  var KEY = 'erct-font-scale', MIN = 0.7, MAX = 1.8, STEP = 0.1;
  var scale = parseFloat(localStorage.getItem(KEY));
  if (!scale || isNaN(scale)) scale = 1;
  function apply() { document.body.style.zoom = scale; }
  function setScale(s) { scale = Math.min(MAX, Math.max(MIN, Math.round(s * 10) / 10)); localStorage.setItem(KEY, scale); apply(); }
  apply();
  var dec = document.getElementById('fs-dec'), inc = document.getElementById('fs-inc'), rst = document.getElementById('fs-rst');
  if (dec) dec.onclick = function () { setScale(scale - STEP); };
  if (inc) inc.onclick = function () { setScale(scale + STEP); };
  if (rst) rst.onclick = function () { setScale(1); };

  // ---- keyboard shortcuts ----
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === '+' || e.key === '=') { setScale(scale + STEP); e.preventDefault(); }
    else if (e.key === '-' || e.key === '_') { setScale(scale - STEP); e.preventDefault(); }
    else if (e.key === '0') { setScale(1); e.preventDefault(); }
    else if (e.key === 'Home') { goTop(); e.preventDefault(); }
    else if (e.key === 'c' || e.key === 'C') { toggle(); e.preventDefault(); }
    else if (e.key === 'Escape') { close(); }
  });

  // ---- copy-to-clipboard for dictation lines (tap an F:/I: line) ----
  function flash(node) {
    var old = node.style.background;
    node.style.transition = 'background .15s';
    node.style.background = 'rgba(95,211,154,0.18)';
    setTimeout(function () { node.style.background = old; }, 450);
  }
  content.addEventListener('click', function (e) {
    var line = e.target.closest('.f, .i');
    if (!line || e.target.closest('a')) return;
    var txt = line.textContent.replace(/^\s*[FI]:\s*/, '').trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { flash(line); }).catch(function () {});
    }
  });

  // ---- "Copy F + I" button per dictation scenario ----
  function clean(node, label) { return node.textContent.replace(/^\s*[FI]:\s*/, '').replace(/\s+/g, ' ').trim(); }
  [].forEach.call(content.querySelectorAll('.dx'), function (dx) {
    var f = null, i = null, last = null, node = dx.nextElementSibling;
    while (node && !node.classList.contains('dx') && node.tagName !== 'H2' && node.tagName !== 'H3') {
      if (node.classList.contains('f')) { f = node; last = node; }
      else if (node.classList.contains('i')) { i = node; last = node; }
      node = node.nextElementSibling;
    }
    if (!f && !i) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-both';
    var label = (f && i) ? 'Copy F + I' : f ? 'Copy findings' : 'Copy impression';
    btn.innerHTML = '<span class="cb-ico">⧉</span> ' + label;
    btn.addEventListener('click', function () {
      var parts = [];
      if (f) parts.push('FINDINGS:\n' + clean(f));
      if (i) parts.push('IMPRESSION:\n' + clean(i));
      var txt = parts.join('\n\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () {
          btn.classList.add('copied');
          btn.innerHTML = '<span class="cb-ico">✓</span> Copied';
          setTimeout(function () { btn.classList.remove('copied'); btn.innerHTML = '<span class="cb-ico">⧉</span> ' + label; }, 1200);
        }).catch(function () {});
      }
    });
    (last || dx).insertAdjacentElement('afterend', btn);
  });

  // ---- service worker ----
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('../sw.js').catch(function () {});
    });
  }
})();
