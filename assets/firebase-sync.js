/* ER CT Cheat Sheets — OPTIONAL Firebase sync.
   Mirrors favorites, personal macros, quiz progress, and recents to Firestore so
   they follow you across devices (phone ↔ workstation). Online-only enhancement;
   the app works fully without it. NO patient data is ever stored — only your
   favorites/macros/quiz state. Loaded only by sync.html.

   Setup: see FIREBASE_SETUP.md. Paste your Firebase web config on sync.html, then
   sign in with Google. */
window.ERCTSync = (function () {
  'use strict';
  var SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
  var app, auth, db, user, unsub, mods = {}, started = false, remoteWrite = false, saveTimer = null;
  var statusCb = function () {};

  function onStatus(cb) { statusCb = cb; }
  function setStatus(s) { try { statusCb(s); } catch (e) {} }
  function getConfig() { try { return ERCTStore.getSetting('firebaseConfig', null); } catch (e) { return null; } }
  function saveConfig(cfg) { ERCTStore.setSetting('firebaseConfig', cfg); }

  async function load() {
    var a = await import(SDK + 'firebase-app.js');
    var au = await import(SDK + 'firebase-auth.js');
    var fs = await import(SDK + 'firebase-firestore.js');
    mods = { a: a, au: au, fs: fs };
  }

  async function init() {
    var cfg = getConfig();
    if (!cfg) throw new Error('No Firebase config saved yet.');
    if (typeof cfg === 'string') cfg = JSON.parse(cfg);
    if (!app) {
      await load();
      app = mods.a.initializeApp(cfg);
      auth = mods.au.getAuth(app);
      db = mods.fs.getFirestore(app);
      mods.au.onAuthStateChanged(auth, function (u) {
        user = u;
        if (u) { setStatus('Signed in as ' + (u.email || u.uid)); start(); }
        else { setStatus('Signed out'); stop(); }
      });
    }
    setStatus('Firebase ready — sign in to sync.');
  }

  async function signIn() {
    if (!auth) await init();
    await mods.au.signInWithPopup(auth, new mods.au.GoogleAuthProvider());
  }
  async function signOut() { if (auth) await mods.au.signOut(auth); }

  function snapshot() {
    return {
      favorites: ERCTStore.getFavorites(), macros: ERCTStore.getMacros(),
      quiz: ERCTStore.getQuiz(), recents: ERCTStore.getRecents()
    };
  }
  function uniq(a) { var seen = {}, out = []; a.forEach(function (x) { if (!seen[x]) { seen[x] = 1; out.push(x); } }); return out; }

  function mergeIn(remote) {
    if (!remote) return;
    ERCTStore._write('favorites', uniq((remote.favorites || []).concat(ERCTStore.getFavorites())));
    var byId = {};
    (remote.macros || []).concat(ERCTStore.getMacros()).forEach(function (m) { byId[m.id || m.trigger] = m; });
    ERCTStore._write('macros', Object.keys(byId).map(function (k) { return byId[k]; }));
    var lq = ERCTStore.getQuiz(), q = Object.assign({}, remote.quiz || {});
    Object.keys(lq).forEach(function (k) { if (!q[k] || (lq[k].box || 0) > (q[k].box || 0)) q[k] = lq[k]; });
    ERCTStore._write('quiz', q);
    ERCTStore._write('recents', uniq(ERCTStore.getRecents().concat(remote.recents || [])).slice(0, 16));
  }

  function ref() { return mods.fs.doc(db, 'erctUsers', user.uid); }
  async function pushUp() {
    if (!user) return;
    remoteWrite = true;
    try { await mods.fs.setDoc(ref(), snapshot()); } catch (e) { setStatus('Sync error: ' + e.message); }
    setTimeout(function () { remoteWrite = false; }, 400);
  }
  function scheduleSave() { if (!user) return; clearTimeout(saveTimer); saveTimer = setTimeout(pushUp, 1500); }

  async function start() {
    if (started) return; started = true;
    try {
      var snap = await mods.fs.getDoc(ref());
      if (snap.exists()) mergeIn(snap.data());
    } catch (e) {}
    await pushUp();
    unsub = mods.fs.onSnapshot(ref(), function (s) { if (!remoteWrite && s.exists()) mergeIn(s.data()); });
    ['favorites', 'macros', 'quiz', 'recents'].forEach(function (evt) { ERCTStore.on(evt, scheduleSave); });
    setStatus('✓ Synced — ' + (user.email || user.uid));
  }
  function stop() { started = false; if (unsub) { unsub(); unsub = null; } }

  return { onStatus: onStatus, getConfig: getConfig, saveConfig: saveConfig, init: init, signIn: signIn, signOut: signOut, syncNow: pushUp };
})();
