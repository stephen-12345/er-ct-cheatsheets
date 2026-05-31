/* ER CT Cheat Sheets — generic diagnosis renderer.
   dx.html?dx=<slug> looks the slug up in ERCT.dx and builds a full sheet page
   (same markup/classes as the bespoke pages) from the structured .sheet object.
   Runs BEFORE sheet.js so the auto-TOC picks up the injected headings. */
(function () {
  'use strict';
  function qs(name) {
    var m = new RegExp('[?&]' + name + '=([^&]+)').exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  // Sheet text may use raw < / > as math operators AND <b>/<i> for emphasis.
  // Escape everything, then restore the allowed emphasis tags, then style [placeholders].
  function ph(s) {
    s = esc(s).replace(/&lt;(\/?)(b|i)&gt;/g, '<$1$2>');
    return s.replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');
  }

  var slug = qs('dx');
  var d = null;
  for (var i = 0; i < ERCT.dx.length; i++) { if (ERCT.dx[i].slug === slug) { d = ERCT.dx[i]; break; } }

  var root = document.getElementById('dx-root');
  var crumb = document.getElementById('dx-crumb');

  if (!d) {
    document.title = 'Not found — ER CT Cheat Sheet';
    if (crumb) crumb.textContent = 'Not found';
    root.innerHTML =
      '<h1 class="sheet-h1">Diagnosis not found</h1>' +
      '<p class="subtitle">No catalog entry matched “' + esc(slug || '') + '”. ' +
      'It may have a dedicated page — head back to the index and search for it.</p>' +
      '<p><a href="index.html">← All topics</a></p>';
    return;
  }

  // bespoke page exists -> bounce straight to it
  if (d.href) { location.replace(d.href); return; }

  var reg = ERCT.regionMap[d.region] || { name: '', color: 'var(--teal)' };
  document.title = d.title + ' — ER CT Cheat Sheet';
  if (crumb) crumb.textContent = d.title;
  document.documentElement.style.setProperty('--reg', reg.color);

  var s = d.sheet || {};
  var html = [];

  html.push('<h1 class="sheet-h1">' + esc(d.title) +
    ' <span style="font-size:.5em;opacity:.7;font-weight:600">on ' + esc(d.modality || 'CT') + '</span></h1>');
  html.push('<p class="subtitle"><b>' + esc(reg.name) + (d.system ? ' · ' + esc(d.system) : '') +
    '</b> — ' + esc(d.blurb || '') + ' Replace <span class="ph">[bracketed]</span> text; tap an F:/I: line to copy.</p>');

  if (s.call) {
    html.push('<div class="crit-strip"><span class="bolt">🚨</span><span class="txt">' + ph(s.call) + '</span></div>');
  }

  function callout(cls, ico, lbl, ttl, body) {
    if (!body) return;
    html.push('<div class="callout ' + cls + '"><div class="c-title"><span class="ico">' + ico +
      '</span><span class="lbl">' + lbl + '</span><span class="ttl">' + esc(ttl) + '</span></div>' +
      '<p>' + ph(body) + '</p></div>');
  }

  html.push('<h2 class="group">How to read it</h2>');
  callout('find',    '🔍', 'How to find it', 'Where to look', s.find);
  callout('measure', '📏', 'Threshold',      'The number that matters', s.measure);
  callout('pitfall', '⚠️', 'Pitfall',        'Mimics &amp; misses', s.pitfall);
  callout('pearl',   '💡', 'Pearl',          'High-yield point', s.pearl);

  // optional hand-drawn schematic(s): d.diagram = {svg, caption} or an array of them
  if (d.diagram) {
    [].concat(d.diagram).forEach(function (g) {
      if (!g || !g.svg) return;
      html.push('<figure class="diagram">' + g.svg +
        (g.caption ? '<figcaption>' + ph(g.caption) + '</figcaption>' : '') + '</figure>');
    });
  }

  if (s.f || s.i) {
    html.push('<h2 class="group">Copy-Ready Dictation</h2>');
    html.push('<p class="subtitle">Tap a line to copy.</p>');
    html.push('<div class="dx">' + esc(d.title) + '</div>');
    if (s.f) html.push('<p class="f"><b>F:</b> ' + ph(s.f) + '</p>');
    if (s.i) html.push('<p class="i"><b>I:</b> ' + ph(s.i) + '</p>');
  }

  // sources
  html.push('<h2 id="sources">Sources &amp; further reading</h2><p>');
  var links = [];
  if (d.rp) links.push('<a href="https://radiopaedia.org/articles/' + esc(d.rp) +
    '" target="_blank" rel="noopener noreferrer">Radiopaedia — ' + esc(d.title) + '</a>');
  links.push('<a href="https://radiopaedia.org/search?q=' + encodeURIComponent(d.title) +
    '&scope=articles" target="_blank" rel="noopener noreferrer">Radiopaedia search</a>');
  links.push('<a href="https://pubs.rsna.org/action/doSearch?AllField=' + encodeURIComponent(d.title) +
    '" target="_blank" rel="noopener noreferrer">RadioGraphics / RSNA</a>');
  html.push(links.join(' · ') + '.</p>');
  html.push('<p class="subtitle">Educational reference only — thresholds and management vary by institution. ' +
    'Verify against local protocol and communicate critical results directly.</p>');

  root.innerHTML = html.join('\n');
})();
