/* ER CT Cheat Sheets — data core.
   Single source of truth for the catalog. Region files (data/<region>.js) call
   ERCT.add([...]) to register diagnoses. The launcher and the generic renderer
   (dx.html) both read from ERCT.dx — so adding a diagnosis is a one-object edit.

   Diagnosis schema:
   {
     slug:    'aortic-dissection',        // unique id; used by dx.html?dx=slug
     title:   'Aortic Dissection',
     region:  'vascular',                 // region key (see ERCT.regions)
     system:  'Thoracic aorta',           // sub-label shown on the card
     modality:'CTA',                       // CT / CTA / CTPA / NCCT / CT cysto ...
     sev:     'killer',                    // 'killer' | 'urgent' | 'routine'
     emoji:   '🩸',
     blurb:   'one-line description for the card + search',
     tags:    ['Stanford A/B','True/false lumen'],
     rp:      'aortic-dissection',         // Radiopaedia article slug (optional)
     href:    'aorta/acute-aortic-syndrome.html',  // bespoke page (optional). If absent,
                                                    // dx.html renders from .sheet below.
     sheet: {                              // structured quick-sheet (used when no href)
       find:   'how to find it on the scan',
       measure:'key measurement / threshold',     // optional
       pitfall:'classic mimic / what fools you',  // optional
       pearl:  'the high-yield teaching point',   // optional
       call:   'what makes this a call-now',      // optional
       f:      'copy-ready Findings dictation with [bracketed] placeholders',
       i:      'copy-ready Impression dictation'
     }
   }
*/
window.ERCT = window.ERCT || { dx: [], regions: [] };

ERCT.regions = [
  { key:'neuro',    name:'Brain & Neuro',          sub:'Head CT · CTA · CTV',        emoji:'🧠', color:'#b69cf0' },
  { key:'headneck', name:'Head, Face & Neck',      sub:'Orbit · sinus · airway',     emoji:'👁️', color:'#46c6e0' },
  { key:'spine',    name:'Spine',                  sub:'C / T / L · cord · canal',   emoji:'🦴', color:'#7fb2ea' },
  { key:'chest',    name:'Chest & Airway',         sub:'Lung · pleura · mediastinum',emoji:'🫁', color:'#5fc6e6' },
  { key:'cardiac',  name:'Cardiac & Great Vessels',sub:'Heart · pericardium · aorta',emoji:'🫀', color:'#ff6b7a' },
  { key:'vascular', name:'Vascular',               sub:'Aorta · arterial · venous',  emoji:'🩸', color:'#ff4d5e' },
  { key:'abdomen',  name:'Abdomen & GI',           sub:'Bowel · peritoneum · hernia',emoji:'🩻', color:'#ffb648' },
  { key:'hpb',      name:'Liver · Biliary · Panc · Spleen', sub:'Hepatobiliary · pancreas', emoji:'🫧', color:'#6cd49b' },
  { key:'gu',       name:'Genitourinary & Renal',  sub:'Kidney · ureter · bladder',  emoji:'🫘', color:'#f4955c' },
  { key:'pelvis',   name:'Pelvis & OB / GYN',      sub:'Adnexa · uterus · scrotum',  emoji:'⚕️', color:'#ff8fb3' },
  { key:'msk',      name:'MSK & Trauma',           sub:'Fractures · soft tissue',    emoji:'🦿', color:'#8fb3ff' },
  { key:'peds',     name:'Pediatric',              sub:'Child-specific emergencies', emoji:'🧸', color:'#9ad97f' }
];

ERCT.regionMap = {};
ERCT.regions.forEach(function (r) { r.dx = []; ERCT.regionMap[r.key] = r; });

ERCT.add = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var d = arr[i];
    ERCT.dx.push(d);
    if (ERCT.regionMap[d.region]) ERCT.regionMap[d.region].dx.push(d);
  }
};
