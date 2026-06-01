# ER CT Cheat Sheets — Top ED Diagnoses, Head to Toe

Dark-mode, offline-first CT reference for the top emergency-department diagnoses across
**every body region** — brain, head/face/neck, spine, chest, cardiac, vascular, abdomen,
hepatobiliary, GU, pelvis/OB-GYN, MSK/trauma, and pediatrics. Each entry gives copy-ready
findings (**F:**) and impressions (**I:**) plus color-zoned teaching callouts (how to find
it · threshold · pitfall · pearl · call-now). Built as a static PWA you can pin to a home screen.

> ⚠️ **Educational reference only.** Thresholds and management vary by institution.
> This is a workstation memory aid, not a substitute for clinical judgment, local
> protocol, or direct communication of critical results.

## Highlights

- **~286 diagnoses across 12 body regions** — see the count on the home page.
- **Instant search** on the home page (`/` to focus): filter by name, sign, threshold, region, or modality.
- **Severity filters** — Killers / Time-critical — and a region quick-nav.
- **Two page types:**
  - **Generic sheets** (`dx.html?dx=<slug>`) rendered on the fly from the data catalog — every diagnosis is a real, offline page.
  - **Bespoke deep-dives** (9 high-yield topics) with bespoke layouts, tables, and hand-drawn SVG diagrams.
- **Sources** block + per-page links to **Radiopaedia**, **RadioGraphics/RSNA**, ACR, AAST, etc.
- Auto-built table-of-contents drawer, font controls, tap-to-copy dictation, and full offline support.

## Productivity tools

All client-side, offline, and **PHI-free by design**:

- **Home page** — collapsible region accordions (no endless scroll), a region table-of-contents,
  live + **voice** search, ⭐ **Favorites** and 🕘 **Recently viewed** pinned at the top, and a
  star toggle on every card and sheet.
- **🎴 Study** (`quiz.html`) — flashcard + multiple-choice quiz over the catalog with Leitner
  spaced-repetition (progress stored locally).
- **📝 Templates** (`macros.html`) — every F:/I: template with one-tap copy, your own editable
  macros, and a **PowerScribe AutoText export** (bulk `erct_<slug>_f/_i` trigger→text file).
- **✨ AI Polish** (`polish.html`) — bring-your-own-key (Gemini / OpenAI / Anthropic) report-phrasing
  sandbox. **De-identified / hypothetical text only — never a HIPAA-covered tool.**
- **☁️ Sync** (`sync.html`, optional) — mirror favorites/macros/quiz across devices via your own
  free Firebase project. See [FIREBASE_SETUP.md](FIREBASE_SETUP.md). Only non-clinical state syncs.

Local state lives in `assets/store.js` (localStorage); `assets/firebase-sync.js` is the optional
cross-device layer.

## Architecture

```
index.html            card launcher — search, severity filters, region nav, sources
dx.html               generic renderer host (?dx=<slug>)
assets/
  sheet.css           single shared stylesheet (launcher + content + diagrams)
  sheet.js            shared page chrome: TOC, font control, scroll-spy, tap-to-copy, SW
  launcher.js         home page: builds region sections + cards, powers search/filter
  render.js           builds a full sheet from a catalog entry’s structured .sheet object
data/
  _core.js            defines window.ERCT, the region taxonomy, and ERCT.add()
  <region>.js         one file per region; each calls ERCT.add([...]) — the source of truth
<topic>/<topic>.html  9 bespoke deep-dive pages (content-only; link the shared assets)
manifest.webmanifest, sw.js, icons   PWA / offline + home-screen install
```

The **catalog is data-driven**: `data/*.js` is the single source of truth that powers the
searchable launcher *and* the generic renderer. Adding a diagnosis is a one-object edit — no
new HTML file needed.

## Add a diagnosis

Append one object to the relevant `data/<region>.js`:

```js
ERCT.add([{
  slug:'my-diagnosis', title:'My Diagnosis', region:'abdomen', system:'Colon',
  modality:'CT', sev:'urgent', emoji:'🌀',
  blurb:'one-line description for the card and search',
  tags:['sign','threshold'], rp:'radiopaedia-article-slug',
  sheet:{
    find:'where/how to find it on the scan',
    measure:'the number that matters',          // optional
    pitfall:'the classic mimic / miss',         // optional
    pearl:'the high-yield teaching point',      // optional
    call:'what makes it a call-now',            // optional (killer/urgent)
    f:'copy-ready Findings with [bracketed] placeholders',
    i:'copy-ready Impression'
  }
}]);
```

It immediately appears in search, under its region, and renders a full page at
`dx.html?dx=my-diagnosis`. For a richer custom page, write a bespoke HTML file and add an
`href:'folder/page.html'` to the entry (omit `sheet`). The schema and HTML-escaping rules
are documented at the top of `data/_core.js`.

> **Note on rendering:** generic sheet fields are HTML-escaped, then `<b>`/`<i>` are restored
> and `[brackets]` are styled — so you can freely use `<` / `>` as math operators in thresholds.

## Run locally

It's a static site — open `index.html`, or serve the folder (needed for the service worker / offline install):

```
cd er-ct-cheatsheets
python3 -m http.server 8080   # then open http://localhost:8080
```

Bump `CACHE` in `sw.js` on each meaningful change to purge old caches.
