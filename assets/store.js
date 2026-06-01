/* ER CT Cheat Sheets — local store.
   Tiny localStorage-backed state for favorites, recently-viewed, personal macros,
   quiz/spaced-repetition progress, and settings. Pure client-side, no PHI.
   Optional Firebase sync layer (assets/firebase-sync.js) hooks into ERCTStore.on().

   All data is namespaced under 'erct.' keys and JSON-encoded. */
(function () {
  'use strict';
  var P = 'erct.';
  function read(k, dflt) {
    try { var v = localStorage.getItem(P + k); return v == null ? dflt : JSON.parse(v); }
    catch (e) { return dflt; }
  }
  function write(k, v) {
    try { localStorage.setItem(P + k, JSON.stringify(v)); } catch (e) {}
    emit(k, v);
  }

  // ---- pub/sub so the UI updates live ----
  var subs = {};
  function on(evt, cb) { (subs[evt] = subs[evt] || []).push(cb); }
  function emit(evt, v) { (subs[evt] || []).forEach(function (cb) { try { cb(v); } catch (e) {} }); }

  // ---- favorites (array of slugs) ----
  function getFavorites() { return read('favorites', []); }
  function isFav(slug) { return getFavorites().indexOf(slug) !== -1; }
  function toggleFav(slug) {
    var f = getFavorites(), i = f.indexOf(slug);
    if (i === -1) f.unshift(slug); else f.splice(i, 1);
    write('favorites', f);
    return i === -1; // true if now favorited
  }

  // ---- recently viewed (most-recent-first, capped) ----
  var RECENT_CAP = 16;
  function getRecents() { return read('recents', []); }
  function pushRecent(slug) {
    if (!slug) return;
    var r = getRecents().filter(function (s) { return s !== slug; });
    r.unshift(slug);
    if (r.length > RECENT_CAP) r = r.slice(0, RECENT_CAP);
    write('recents', r);
  }
  function clearRecents() { write('recents', []); }

  // ---- personal macros (array of {id, trigger, label, text}) ----
  function getMacros() { return read('macros', []); }
  function saveMacro(m) {
    var list = getMacros();
    if (!m.id) { m.id = 'm' + (list.reduce(function (a, x) { return Math.max(a, +(x.id || 'm0').slice(1) || 0); }, 0) + 1); list.push(m); }
    else { var i = list.findIndex(function (x) { return x.id === m.id; }); if (i >= 0) list[i] = m; else list.push(m); }
    write('macros', list);
    return m.id;
  }
  function deleteMacro(id) { write('macros', getMacros().filter(function (x) { return x.id !== id; })); }

  // ---- quiz / spaced-repetition (map slug -> {box:1-5, seen, correct, due}) ----
  function getQuiz() { return read('quiz', {}); }
  function setQuizCard(slug, card) { var q = getQuiz(); q[slug] = card; write('quiz', q); }
  function resetQuiz() { write('quiz', {}); }

  // ---- settings (object) ----
  function getSettings() { return read('settings', {}); }
  function getSetting(k, dflt) { var s = getSettings(); return k in s ? s[k] : dflt; }
  function setSetting(k, v) { var s = getSettings(); s[k] = v; write('settings', s); }

  window.ERCTStore = {
    on: on,
    getFavorites: getFavorites, isFav: isFav, toggleFav: toggleFav,
    getRecents: getRecents, pushRecent: pushRecent, clearRecents: clearRecents,
    getMacros: getMacros, saveMacro: saveMacro, deleteMacro: deleteMacro,
    getQuiz: getQuiz, setQuizCard: setQuizCard, resetQuiz: resetQuiz,
    getSettings: getSettings, getSetting: getSetting, setSetting: setSetting,
    _read: read, _write: write
  };
})();
