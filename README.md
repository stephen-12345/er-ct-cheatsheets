# ER CT Cheat Sheets — Chest / Abdomen / Pelvis

Dark-mode, offline-first reference for the top emergency-department CT diagnoses.
Copy-ready findings (**F:**) and impressions (**I:**) with color-zoned teaching
callouts, an auto-built table-of-contents drawer, font controls, and tap-to-copy
dictation lines. Built as a static PWA you can pin to an iPhone home screen.

> ⚠️ **Educational reference only.** Thresholds and management vary by institution.
> This is a workstation memory aid, not a substitute for clinical judgment, local
> protocol, or direct communication of critical results.

## Topics

**Chest / vascular**
- [Acute Aortic Syndrome](aorta/acute-aortic-syndrome.html) — dissection, IMH, PAU, ruptured AAA
- [Pulmonary Embolism](pe/pulmonary-embolism.html) — CTPA, RV strain

**Abdomen / pelvis**
- [Acute Appendicitis](appendicitis/appendicitis.html)
- [Acute Diverticulitis](diverticulitis/diverticulitis.html) — modified Hinchey
- [Bowel Obstruction](obstruction/bowel-obstruction.html) — SBO/LBO, closed-loop
- [Mesenteric Ischemia](ischemia/mesenteric-ischemia.html)
- [Perforation / Free Air](perforation/perforation.html)
- [Acute Pancreatitis](pancreatitis/pancreatitis.html) — revised Atlanta, CTSI
- [Renal Colic / Ureterolithiasis](renal/renal-colic.html)

## Architecture

- `index.html` — card launcher
- `assets/sheet.css` — single shared stylesheet (launcher + content pages, ER theme)
- `assets/sheet.js` — shared page chrome: auto-builds the TOC from headings, font
  size control, scroll-spy, back-to-top, swipe-to-close, tap-to-copy, SW registration
- `<topic>/<topic>.html` — content-only pages (markup links the shared assets)
- `manifest.webmanifest`, `sw.js`, icons — PWA / offline + home-screen install

Each content page is intentionally content-only: the heavy lifting (styles, TOC,
interactions) lives in the two shared `assets/` files, so adding a new topic is just
a new HTML file plus one card in `index.html` and one line in `sw.js`.

## Run locally

It's a static site — open `index.html` directly, or serve the folder:

```
cd er-ct-cheatsheets
python3 -m http.server 8080
# then open http://localhost:8080
```

A local server (not `file://`) is needed for the service worker / offline install.

## Add a topic

1. Copy any page in a topic folder as a template, replace the content.
2. Add a `<a class="card">` to `index.html`.
3. Add the new path to the `SHELL` array in `sw.js` and bump `CACHE`.
