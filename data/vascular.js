/* Region: Vascular — aorta, arterial, venous emergencies. */
ERCT.add([
  {
    slug:'acute-aortic-syndrome', title:'Acute Aortic Syndrome', region:'vascular', system:'Thoracic aorta',
    modality:'CTA', sev:'killer', emoji:'🩸',
    blurb:'Dissection, intramural hematoma, penetrating ulcer, and ruptured aneurysm — flap, lumina, malperfusion, rupture.',
    tags:['Stanford A/B','True/false lumen','IMH / PAU'], rp:'acute-aortic-syndrome',
    href:'aorta/acute-aortic-syndrome.html'
  },
  {
    slug:'traumatic-aortic-injury', title:'Blunt Traumatic Aortic Injury', region:'vascular', system:'Aortic isthmus',
    modality:'CTA', sev:'killer', emoji:'💥',
    blurb:'Deceleration tear at the isthmus — the radiologic call that gets the patient to OR/TEVAR.',
    tags:['Isthmus','Pseudoaneurysm','Mediastinal hematoma'], rp:'traumatic-aortic-injury',
    sheet:{
      call:'Any irregularity of the aortic contour just distal to the left subclavian in a deceleration mechanism is aortic injury until proven otherwise — <b>discuss immediately</b>; Grade III–IV need urgent repair.',
      find:'Look at the <b>aortic isthmus</b> (just distal to the left subclavian origin, the ligamentum site) on arterial CTA: intimal flap, contour irregularity, pseudoaneurysm, or abrupt caliber change. Periaortic/mediastinal hematoma is the alerting sign.',
      measure:'Grade I intimal tear → II intramural hematoma → III pseudoaneurysm → IV rupture/free contrast. Mediastinal hematoma that does not contact the aorta suggests a small vessel/venous source.',
      pitfall:'<b>Ductus diverticulum</b> — a smooth focal bulge at the anteromedial isthmus with obtuse margins and no intimal flap — is the classic mimic. Aortic injury has acute angles and irregular margins.',
      pearl:'Always reconstruct sagittal/oblique and review for associated great-vessel and spine injury; report the distance from the left subclavian for stent planning.',
      f:'Focal contour irregularity / outpouching at the aortic isthmus [X] cm distal to the left subclavian origin with an intimal flap and surrounding mediastinal hematoma. [No active extravasation.] Caliber change of [X] mm.',
      i:'CT findings of blunt traumatic aortic injury (Grade [III, pseudoaneurysm]) at the isthmus. Discussed urgently with [name] at [time].'
    }
  },
  {
    slug:'abdominal-aortic-aneurysm', title:'Abdominal Aortic Aneurysm', region:'vascular', system:'Infrarenal aorta',
    modality:'CTA', sev:'urgent', emoji:'🎈',
    blurb:'Size it, look for the leak — hyperdense crescent and draped aorta herald rupture before frank bleed.',
    tags:['≥3 cm','5.5 cm repair','Crescent sign'], rp:'abdominal-aortic-aneurysm',
    sheet:{
      call:'A symptomatic AAA with a <b>hyperattenuating crescent</b> or <b>periaortic hematoma</b> is rupture/impending rupture — communicate now.',
      find:'Outer-wall-to-outer-wall diameter on a true axial (double-oblique) plane. Note infrarenal vs juxta/suprarenal, neck length, and iliac involvement for repair planning.',
      measure:'≥3.0 cm = aneurysm. Elective repair ≥5.5 cm (men), ~5.0 cm (women), or growth >0.5 cm / 6 mo. Rupture risk rises steeply >5.5 cm.',
      pitfall:'A <b>hyperattenuating crescent</b> within mural thrombus = acute intramural hemorrhage (impending rupture) even without free blood. Don’t mistake a horseshoe kidney or duodenum for periaortic fluid.',
      pearl:'Inflammatory AAA shows a soft-tissue rind sparing the posterior wall; mycotic AAA is saccular, lobulated, with periaortic gas/stranding.',
      f:'Infrarenal abdominal aortic aneurysm measuring [X] cm in maximal outer-wall diameter, with [mural thrombus / a hyperattenuating crescent]. [No periaortic hematoma or active extravasation.] Proximal neck [X] cm below the renals.',
      i:'[X] cm infrarenal AAA. [No CT evidence of rupture.] [Meets threshold for elective repair / surveillance.]'
    }
  },
  {
    slug:'acute-limb-ischemia', title:'Acute Limb Ischemia', region:'vascular', system:'Peripheral arterial',
    modality:'CTA', sev:'killer', emoji:'🦵',
    blurb:'Abrupt arterial cutoff — embolic vs thrombotic; the clock is muscle and limb.',
    tags:['Abrupt cutoff','Embolus vs thrombus','Reconstitution'], rp:'acute-limb-ischaemia',
    sheet:{
      call:'A threatened limb (sensory/motor deficit, Rutherford IIb) is a <b>surgical emergency</b> — report the level of occlusion and distal reconstitution immediately.',
      find:'Trace runoff from aorta to pedal vessels: an <b>abrupt contrast cutoff</b> with a meniscus = embolus (often at bifurcations: common femoral, popliteal). Tapered occlusion with collaterals and diffuse atheroma = in-situ thrombosis.',
      measure:'Document occlusion level, length, and the <b>most distal reconstituted vessel</b> (target for bypass/thrombectomy). Note inflow disease.',
      pitfall:'Poor bolus timing / slow flow can mimic occlusion — check the venous phase or delayed images before calling a vessel occluded.',
      pearl:'Look for an embolic source: AAA/popliteal aneurysm with thrombus, cardiac thrombus, or proximal dissection.',
      f:'Abrupt occlusion of the [left popliteal] artery with a meniscoid cutoff and no opacification of the [tibioperoneal trunk]. Reconstitution of the [posterior tibial] artery distally via collaterals. [Popliteal aneurysm with thrombus as embolic source.]',
      i:'Acute arterial occlusion of the [left popliteal] artery, [embolic] pattern, with distal reconstitution at the [PT]. Acute limb ischemia — discussed with vascular surgery at [time].'
    }
  },
  {
    slug:'lower-extremity-dvt', title:'Lower-Extremity DVT', region:'vascular', system:'Deep veins',
    modality:'CTV', sev:'urgent', emoji:'🩸',
    blurb:'Expanded vein with a non-enhancing endoluminal filling defect; track for iliocaval extension.',
    tags:['Filling defect','Vein expansion','Iliocaval'], rp:'deep-vein-thrombosis',
    sheet:{
      find:'On CT venography / portal-venous-phase abdomen-pelvis: an <b>expanded vein with a central non-enhancing filling defect</b> and perivenous stranding/rim enhancement. Follow from calf to common femoral and into the iliacs/IVC.',
      pitfall:'Mixing/flow artifact and incompletely opacified veins mimic thrombus — true thrombus expands the vein and persists across slices. Chronic DVT shows a small, calcified, or web-containing vein with collaterals.',
      pearl:'<b>May-Thurner</b>: left common iliac vein compressed by the right common iliac artery — suspect it in young women with isolated left-leg DVT.',
      call:'<b>Phlegmasia cerulea dolens</b> (massive iliofemoral DVT with a swollen, dusky limb) threatens the limb — flag urgently.',
      f:'Expansile non-occlusive filling defect within the [left common femoral and external iliac] veins with perivenous stranding, consistent with acute DVT. [Extends into the common iliac vein / IVC.]',
      i:'Acute [left iliofemoral] deep vein thrombosis. [Consider May-Thurner anatomy.]'
    }
  },
  {
    slug:'ivc-thrombosis', title:'IVC Thrombosis / Tumor Thrombus', region:'vascular', system:'Inferior vena cava',
    modality:'CT', sev:'urgent', emoji:'🩸',
    blurb:'Bland vs tumor thrombus — enhancement and contiguity with a renal/adrenal mass decide it.',
    tags:['Enhancing thrombus','Renal vein','Level'], rp:'inferior-vena-cava-thrombosis',
    sheet:{
      find:'Filling defect expanding the IVC. <b>Bland</b> thrombus does not enhance; <b>tumor</b> thrombus enhances and is contiguous with a renal/adrenal/hepatic tumor extending via the renal vein.',
      measure:'Define the cranial extent for surgical planning: infrahepatic, intrahepatic/retrohepatic, or extending into the right atrium.',
      pitfall:'Unopacified blood from unenhanced lower-extremity inflow causes pseudothrombus at the IVC confluence — use delayed images.',
      pearl:'RCC is the classic source of IVC tumor thrombus; report the highest level and atrial involvement.',
      f:'Expansile [enhancing] thrombus within the IVC extending from the [right renal vein] to the [retrohepatic IVC], contiguous with a [right renal mass].',
      i:'IVC [tumor] thrombus extending to the [retrohepatic] level. [Consistent with venous tumor extension from renal cell carcinoma.]'
    }
  },
  {
    slug:'active-arterial-extravasation', title:'Active Arterial Extravasation', region:'vascular', system:'Any bed',
    modality:'CTA', sev:'killer', emoji:'💉',
    blurb:'Contrast that blooms and spreads across phases — the sign that sends the patient to IR.',
    tags:['Blush','Phase change','Pseudoaneurysm'], rp:'active-contrast-extravasation',
    sheet:{
      call:'Active extravasation = ongoing hemorrhage. <b>Call the team and IR/surgery now</b> and give the source vessel if you can.',
      find:'A focus of <b>high-attenuation contrast (≈ arterial density)</b> that <b>increases and changes shape on the delayed phase</b>, surrounded by hematoma. Compare arterial and portal/delayed phases side by side.',
      pitfall:'A <b>contained pseudoaneurysm</b> follows the blood pool on all phases and has a rounded margin that washes out; <b>extravasation</b> spreads and persists. Hyperdense surgical material, enteric contrast, and calcified plaque are mimics.',
      pearl:'Measure HU: extravasation is typically 85–370 HU and approaches the aorta; hematoma is 40–70 HU.',
      f:'Focus of high-attenuation contrast within the [mesenteric/pelvic] hematoma that increases in size and attenuation on delayed imaging, consistent with active arterial extravasation arising from the [branch] artery.',
      i:'Active arterial extravasation from the [vessel]. Communicated to [name] at [time]; [IR for embolization].'
    }
  },
  {
    slug:'pseudoaneurysm', title:'Pseudoaneurysm', region:'vascular', system:'Arterial',
    modality:'CTA', sev:'urgent', emoji:'🫧',
    blurb:'Contained arterial breach — a saccular outpouching that fills with the lumen and can rupture.',
    tags:['Yin-yang','Neck','Post-procedural'], rp:'pseudoaneurysm',
    sheet:{
      find:'A rounded, contrast-filled saccular outpouching arising from an artery via a narrow <b>neck</b>, isodense to the lumen on all phases, often with surrounding hematoma. Common after trauma, catheterization, pancreatitis, or infection.',
      pitfall:'Distinguish from active extravasation (which spreads/grows on delayed phase) and from a true aneurysm (involves all wall layers, wider mouth).',
      pearl:'<b>Visceral/splanchnic pseudoaneurysms</b> in pancreatitis (splenic, GDA) can bleed catastrophically — actively seek them in necrotizing pancreatitis with a drop in Hb.',
      call:'A symptomatic or enlarging pseudoaneurysm, or one in pancreatitis, warrants urgent IR — communicate.',
      f:'Saccular contrast-filled outpouching arising from the [splenic] artery measuring [X] mm with a narrow neck and surrounding hematoma, isoattenuating to the arterial lumen, consistent with pseudoaneurysm.',
      i:'[Splenic] artery pseudoaneurysm. [Discussed with IR for embolization.]'
    }
  },
  {
    slug:'mesenteric-venous-thrombosis', title:'Mesenteric / Portal Venous Thrombosis', region:'vascular', system:'SMV / portal',
    modality:'CT', sev:'urgent', emoji:'🩸',
    blurb:'SMV/portal filling defect with mesenteric edema — watch the bowel for venous ischemia.',
    tags:['SMV','Bowel edema','Hypercoagulable'], rp:'portal-vein-thrombosis',
    sheet:{
      find:'Non-enhancing filling defect expanding the <b>SMV / portal / splenic vein</b> on portal-venous phase, with mesenteric fat stranding, ascites, and engorged collaterals. Assess the bowel wall.',
      pitfall:'Flow artifact at the portal confluence (unmixed splenic/SMV inflow) mimics thrombus — confirm vein expansion and stranding.',
      pearl:'<b>Bowel-wall thickening with poor enhancement, mesenteric edema, and ascites signals venous ischemia</b> — a transition to a surgical problem. Cavernous transformation indicates chronicity.',
      call:'Venous mesenteric ischemia (target bowel, pneumatosis) is an emergency — escalate.',
      f:'Expansile non-enhancing thrombus within the [superior mesenteric and main portal] veins with mesenteric fat stranding and ascites. [Segmental small-bowel wall thickening with reduced enhancement.]',
      i:'Acute [superior mesenteric / portal] venous thrombosis [with early venous bowel ischemia]. [Hypercoagulable workup advised.]'
    }
  },
  {
    slug:'mycotic-aneurysm', title:'Mycotic (Infected) Aneurysm', region:'vascular', system:'Arterial',
    modality:'CTA', sev:'urgent', emoji:'🦠',
    blurb:'Saccular, lobulated, rapidly growing aneurysm with periarterial inflammation ± gas.',
    tags:['Saccular','Periaortic gas','Rapid growth'], rp:'mycotic-aneurysm',
    sheet:{
      find:'A <b>saccular, lobulated, eccentric</b> aneurysm (often at atypical sites) with <b>periaortic soft tissue / stranding, fluid, or gas</b> and rapid interval growth. Suspect with fever, positive cultures, endocarditis.',
      pitfall:'A penetrating ulcer or contained rupture can look similar — the inflammatory periaortic changes and clinical sepsis point to infection.',
      pearl:'Periaortic <b>gas</b> in the absence of recent instrumentation strongly suggests infection; salmonella and staph are classic organisms.',
      call:'High rupture risk — communicate and involve vascular surgery / ID urgently.',
      f:'Saccular, lobulated [para-/suprarenal] aortic aneurysm measuring [X] cm with adjacent periaortic soft-tissue stranding, fluid, [and locules of gas], concerning for a mycotic aneurysm. [Interval enlargement from prior.]',
      i:'Findings concerning for a mycotic (infected) [aortic] aneurysm with high rupture risk. Urgently discussed with [name] at [time].'
    }
  },
  {
    slug:'thoracic-outlet-paget-schroetter', title:'Effort Thrombosis (Paget–Schroetter)', region:'vascular', system:'Subclavian vein',
    modality:'CTV', sev:'urgent', emoji:'💪',
    blurb:'Subclavian/axillary vein thrombosis in a young athlete from thoracic outlet compression.',
    tags:['Subclavian vein','Abduction','Collaterals'], rp:'paget-schroetter-syndrome',
    sheet:{
      find:'Filling defect / non-opacification of the <b>axillo-subclavian vein</b> at the thoracic outlet with venous collaterals across the shoulder, in a young patient after repetitive overhead activity.',
      pitfall:'Catheter-associated thrombosis is far more common in inpatients — correlate with lines. Streaming artifact from the injected arm mimics thrombus; inject the contralateral arm or use delayed imaging.',
      pearl:'Look for the structural cause: cervical rib, hypertrophied scalene, or costoclavicular narrowing on abduction views.',
      f:'Occlusive thrombus within the [right] axillo-subclavian vein at the thoracic outlet with prominent venous collaterals. [Costoclavicular narrowing.]',
      i:'Primary effort thrombosis (Paget–Schroetter) of the [right] axillo-subclavian vein. [Vascular surgery for thoracic outlet evaluation.]'
    }
  },
  {
    slug:'segmental-arterial-mediolysis', title:'Spontaneous Visceral Artery Dissection', region:'vascular', system:'Splanchnic arteries',
    modality:'CTA', sev:'urgent', emoji:'🌀',
    blurb:'Isolated SMA/celiac dissection or SAM — flap, aneurysm, or occlusion without aortic disease.',
    tags:['SMA','Isolated dissection','SAM'], rp:'isolated-superior-mesenteric-artery-dissection',
    sheet:{
      find:'Intimal flap, eccentric mural thickening, or focal aneurysm/occlusion of the <b>SMA or celiac</b> beginning 1.5–3 cm from the origin, without aortic dissection. Assess downstream bowel perfusion.',
      pitfall:'Segmental arterial mediolysis (SAM) produces multifocal dilatation/dissection of splanchnic arteries and mimics vasculitis or FMD — note the multiplicity.',
      pearl:'Most isolated SMA dissections without malperfusion are managed conservatively; report bowel ischemia and aneurysm size that change management.',
      f:'Eccentric intramural hematoma with an intimal flap involving the [SMA] beginning [X] cm from its origin, with [preserved / reduced] distal opacification. No aortic dissection. [Focal pseudoaneurysm X mm.]',
      i:'Isolated [superior mesenteric] artery dissection [without bowel malperfusion]. [Conservative management / vascular surgery discussion.]'
    }
  },
  {
    slug:'arteriovenous-fistula', title:'Arteriovenous Fistula', region:'vascular', system:'Arterial–venous',
    modality:'CTA', sev:'routine', emoji:'🔀',
    blurb:'Early venous opacification next to an artery — post-traumatic or post-procedural shunt.',
    tags:['Early venous fill','Enlarged vein','Trauma'], rp:'arteriovenous-fistula',
    sheet:{
      find:'<b>Abnormally early/intense opacification of a vein</b> on the arterial phase adjacent to an artery, with an enlarged draining vein and feeding artery. Common after penetrating trauma or catheterization.',
      pitfall:'Asymmetric arm injection or rapid transit can cause early venous filling generally — true AVF has a focal arterialized vein at the lesion site.',
      pearl:'Pulsatile mass + bruit clinically; on CT the dilated early-filling vein localizes the fistula for endovascular repair.',
      f:'Early arterial-phase opacification of the [common femoral] vein adjacent to the [superficial femoral] artery with an enlarged draining vein, consistent with arteriovenous fistula. [Post-catheterization.]',
      i:'[Femoral] arteriovenous fistula. [IR/vascular surgery for repair.]'
    }
  },
  {
    slug:'large-vessel-vasculitis', title:'Large-Vessel Vasculitis', region:'vascular', system:'Aorta & branches',
    modality:'CTA', sev:'routine', emoji:'🔥',
    blurb:'Concentric mural thickening and enhancement of the aorta/branches — Takayasu or GCA.',
    tags:['Mural thickening','Smooth stenosis','Aortitis'], rp:'aortitis',
    sheet:{
      find:'<b>Smooth, concentric wall thickening with mural enhancement</b> of the aorta and great-vessel origins, with long smooth stenoses, occlusions, or aneurysms. Young woman (Takayasu) vs >50 with headache (GCA).',
      pitfall:'IMH and atherosclerosis also thicken the wall — vasculitis is concentric, enhancing, long-segment, and clinically inflammatory (raised ESR/CRP).',
      pearl:'Mural enhancement and wall edema indicate active disease and guide immunosuppression; map stenoses for the clinician.',
      f:'Smooth concentric mural thickening with enhancement involving the [thoracic aorta and proximal great vessels] with long-segment smooth narrowing of the [left subclavian] artery. No dissection.',
      i:'Findings consistent with large-vessel vasculitis ([Takayasu] in the appropriate clinical setting). [Active mural enhancement.]'
    }
  },
  {
    slug:'septic-thrombophlebitis', title:'Septic Thrombophlebitis', region:'vascular', system:'Venous',
    modality:'CT', sev:'urgent', emoji:'🦠',
    blurb:'Thrombosed vein with perivenous inflammation and a septic source — Lemierre, pylephlebitis, line.',
    tags:['Perivenous gas','Lemierre','Pylephlebitis'], rp:'septic-thrombophlebitis',
    sheet:{
      find:'Venous thrombosis with <b>perivenous fat stranding, rim enhancement, ± gas</b> and an adjacent infective source. Lemierre = internal jugular vein after oropharyngeal infection; pylephlebitis = portal/SMV from intra-abdominal sepsis.',
      pitfall:'Bland thrombophlebitis lacks the surrounding inflammation and septic source; check for septic pulmonary emboli (Lemierre) or hepatic abscesses (pylephlebitis).',
      pearl:'Pylephlebitis often complicates diverticulitis/appendicitis — when you see portal/SMV thrombus, hunt the abdominal source.',
      call:'Source control + anticoagulation decisions are time-sensitive — communicate.',
      f:'Thrombosis of the [internal jugular / portal] vein with perivenous stranding and rim enhancement [and locules of gas], adjacent to [tonsillar / diverticular] infection. [Septic pulmonary emboli / hepatic microabscesses.]',
      i:'Septic thrombophlebitis ([Lemierre / pylephlebitis]) with [secondary septic emboli]. Source: [ ].'
    }
  }
]);
