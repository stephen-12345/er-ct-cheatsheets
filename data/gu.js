/* Region: Genitourinary and Renal — kidney, ureter, bladder, adrenal. */
ERCT.add([

  /* ── BESPOKE PAGE (no sheet) ─────────────────────────────────────────── */
  {
    slug:'renal-colic', title:'Renal Colic / Ureterolithiasis', region:'gu', system:'Ureter',
    modality:'NCCT', sev:'urgent', emoji:'🪨',
    blurb:'Non-contrast stone protocol — size, location, HU, passage prediction, and the infected obstructed system.',
    tags:['Rim sign','Hydronephrosis','Pyonephrosis'], rp:'ureteric-calculus',
    href:'renal/renal-colic.html'
  },

  /* ── FULL SHEET ENTRIES ───────────────────────────────────────────────── */

  {
    slug:'acute-pyelonephritis', title:'Acute Pyelonephritis', region:'gu', system:'Kidney',
    modality:'CT', sev:'urgent', emoji:'🔥',
    blurb:'Striated nephrogram and perinephric fat stranding — find the complication that changes management.',
    tags:['Striated nephrogram','Fat stranding','Abscess'], rp:'acute-pyelonephritis',
    sheet:{
      find:'<b>Striated nephrogram</b> — wedge-shaped or band-like areas of hypoenhancement radiating toward the cortex on portal venous phase, with <b>perinephric fat stranding</b> and possible renal enlargement. Look carefully for gas, liquefaction, or a discrete fluid collection indicating abscess formation.',
      measure:'Measure any focal hypoenhancing collection (abscess if >3 cm). Note ureteric dilation suggesting obstructed infected system (pyonephrosis). Document bilateral involvement.',
      pitfall:'Absence of CT abnormality does not exclude pyelonephritis — sensitivity is ~75%. Conversely, <b>renal infarct</b> produces a similar wedge defect but without fat stranding and with cortical rim sign.',
      pearl:'Always check for an <b>obstructing calculus</b> — infected obstruction is a urologic emergency requiring urgent drainage regardless of antibiotic coverage.',
      call:'Gas within the renal parenchyma or collecting system = <b>emphysematous pyelonephritis/pyelitis</b> — discuss urgently for emergent drainage or nephrectomy.',
      f:'Wedge-shaped cortical hypoenhancement of the [right/left] kidney with perinephric fat stranding consistent with acute pyelonephritis. [No abscess. No obstructing calculus. No gas.]',
      i:'Acute [right/left] pyelonephritis. [No drainable abscess. Recommend urology consult if clinical deterioration.]'
    }
  },

  {
    slug:'emphysematous-pyelonephritis', title:'Emphysematous Pyelonephritis', region:'gu', system:'Kidney',
    modality:'CT', sev:'killer', emoji:'💀',
    blurb:'Gas in the renal parenchyma in a diabetic — a necrotizing infection demanding emergent drainage or nephrectomy.',
    tags:['Parenchymal gas','Diabetic','Nephrectomy'], rp:'emphysematous-pyelonephritis',
    sheet:{
      find:'<b>Gas within the renal parenchyma</b> — streaky, mottled, or bubbly foci extending beyond the collecting system. Huang-Tseng Class I: gas in collecting system only; Class II: parenchymal gas without extension; Class III: perinephric/paranephric gas; Class IV: bilateral or solitary kidney.',
      measure:'Document extent: confined to parenchyma (Class II) vs perinephric extension (Class III). Note abscess formation, liquefaction, or contralateral involvement.',
      pitfall:'<b>Emphysematous pyelitis</b> (gas confined to collecting system) carries a far better prognosis than parenchymal emphysematous pyelonephritis — distinguish the two carefully.',
      pearl:'Huang-Tseng Class III/IV and bilateral disease carry mortality >50% with antibiotics alone; Class I–II may be managed with percutaneous drainage. Underlying DM and obstruction are near-universal.',
      call:'<b>Parenchymal or perinephric gas</b> in a diabetic or immunocompromised patient = emphysematous pyelonephritis — <b>call urology immediately</b>; emergent nephrectomy or drainage required.',
      f:'Mottled gas within the [right/left] renal parenchyma extending into the perinephric space (Huang-Tseng Class [II/III]). Background renal enlargement with loss of corticomedullary differentiation. [No contralateral gas. Underlying obstructing calculus at the UPJ.]',
      i:'Emphysematous pyelonephritis, [right/left], Huang-Tseng Class [III]. Emergent urology consultation recommended.'
    }
  },

  {
    slug:'renal-perinephric-abscess', title:'Renal and Perinephric Abscess', region:'gu', system:'Kidney',
    modality:'CT', sev:'urgent', emoji:'🦠',
    blurb:'Rim-enhancing fluid collection in or around the kidney — source, size, and percutaneous drainage threshold.',
    tags:['Rim enhancing','Perinephric','Drainage'], rp:'renal-abscess',
    sheet:{
      find:'<b>Thick-walled rim-enhancing fluid collection</b> within the renal parenchyma (intrarenal) or in the perinephric space between Gerota fascia and the kidney. Internal debris, septations, or gas indicate superinfection. Perinephric abscesses may cross compartments into the psoas (psoas abscess).',
      measure:'Measure collection in three planes. Collections >3 cm generally warrant percutaneous drainage. Document proximity to the collecting system and pleural space.',
      pitfall:'A <b>complicated cyst</b> (Bosniak IIF–III) can mimic abscess — correlation with clinical context (fever, leukocytosis) is essential. Infected renal cyst may appear identical to abscess.',
      pearl:'<b>Xanthogranulomatous pyelonephritis</b> and <b>renal cell carcinoma with necrosis</b> are important mimics — search for a staghorn calculus (XGP) or enhancing solid components (RCC).',
      f:'[X] cm thick-walled rim-enhancing fluid collection in the [upper pole/perinephric space] of the [right/left] kidney with internal debris [and gas]. The collection extends [into the perinephric fat].',
      i:'[Intrarenal/Perinephric] abscess, [right/left]. Urology and interventional radiology consultation recommended for drainage consideration.'
    }
  },

  {
    slug:'renal-infarct', title:'Renal Infarct', region:'gu', system:'Kidney',
    modality:'CTA', sev:'urgent', emoji:'🔺',
    blurb:'Cortical-rim sign saves the diagnosis — wedge non-enhancement without fat stranding, always look for the source.',
    tags:['Cortical rim sign','Wedge defect','AFib'], rp:'renal-infarction',
    sheet:{
      find:'<b>Wedge-shaped cortical hypoenhancement</b> with a sharp geographic border pointing toward the hilum. The <b>cortical rim sign</b> — a thin enhancing outer cortical stripe — is preserved by capsular collateral flow and distinguishes infarct from tumour. Global infarct produces a non-enhancing kidney with a preserved cortical rim.',
      measure:'Estimate percentage of renal parenchyma involved. Global infarct = 100% non-enhancement. Assess the renal artery for occlusion/dissection flap.',
      pitfall:'<b>Acute pyelonephritis</b> produces a similar wedge but has perinephric fat stranding and clinical infection. Infarct has sharp, non-inflammatory borders and no stranding.',
      pearl:'Always search for <b>AF, endocarditis, renal artery dissection, and hypercoagulable states</b>. Check for contralateral infarct and splenic/mesenteric emboli — shower emboli suggest cardiac source.',
      f:'Wedge-shaped cortical non-enhancement of the [upper/lower/mid] pole of the [right/left] kidney with a preserved cortical rim. [No perinephric stranding. Renal artery appears patent/occluded at the [level].]',
      i:'[Segmental/Global] renal infarct, [right/left]. Recommend hematology and cardiology evaluation for source (AF, endocarditis, hypercoagulable state).'
    }
  },

  {
    slug:'renal-trauma-aast', title:'Renal Trauma (AAST Grading)', region:'gu', system:'Kidney',
    modality:'CT', sev:'killer', emoji:'💥',
    blurb:'Grade the laceration depth, vascular injury, and urinary extravasation — Grade IV–V demand prompt surgical consultation.',
    tags:['AAST grade','Laceration','Urinary extrav'], rp:'renal-trauma',
    sheet:{
      find:'<b>AAST renal injury grading</b>: Grade I — contusion or subcapsular hematoma, no laceration; Grade II — laceration ≤1 cm, no urinary extravasation; Grade III — laceration >1 cm, no collecting system involvement; Grade IV — collecting system laceration with urinary extravasation, or segmental vascular injury; Grade V — shattered kidney, renal avulsion, or main renal artery/vein injury.',
      measure:'Measure laceration depth. On delayed phase (5–10 min), look for contrast blush outside the kidney = <b>active hemorrhage</b>. Urinary extravasation appears as low-density pooling around the kidney on delayed images (not arterial/venous phase). Perinephric hematoma volume.',
      pitfall:'Do not call urinary extravasation on arterial-phase images — contrast outside the collecting system on arterial phase is <b>vascular</b> (active bleed). Always obtain a delayed phase (urographic) to confirm urine leak.',
      pearl:'<b>Renal artery thrombosis/dissection</b> presents as a non-enhancing kidney with a cortical rim sign — devascularization without active bleeding is an AAST Grade IV injury (Grade V is main renal artery/vein avulsion or a shattered kidney). Do not miss this surgical emergency.',
      call:'Grade IV–V: <b>active extravasation, shattered kidney, or vascular avulsion</b> — call urology immediately. Grade V renal artery injury = emergent exploration or endovascular intervention.',
      f:'[Right/Left] renal laceration [X] cm depth extending [into/not into] the collecting system. [Active contrast extravasation. Urinary extravasation on delayed phase. Perinephric hematoma measuring [X] cm.] AAST Grade [I–V].',
      i:'[Right/Left] renal trauma, AAST Grade [IV]. [Active hemorrhage requiring urgent intervention. Urinary extravasation requiring urology consultation.]'
    }
  },

  {
    slug:'renal-cell-carcinoma', title:'Renal Cell Carcinoma', region:'gu', system:'Kidney',
    modality:'CT', sev:'urgent', emoji:'🎗',
    blurb:'Enhancing renal mass — characterize the phase, measure the enhancement, and stage for vascular extension.',
    tags:['Enhancing mass','Renal vein thrombus','Bosniak'], rp:'renal-cell-carcinoma',
    sheet:{
      find:'<b>Solid enhancing renal mass</b> with ≥20 HU enhancement from unenhanced to nephrographic phase. Clear cell RCC is heterogeneous and hypervascular; papillary is hypovascular; chromophobe is homogeneous. Look for <b>renal vein and IVC tumour thrombus</b>, lymphadenopathy, adrenal and liver metastases.',
      measure:'Measure mass in three planes. Document enhancement (unenhanced minus enhanced HU). Tumour thrombus: document IVC level (infrarenal, infrahepatic, suprahepatic, atrial). Perinephric fat invasion and Gerota fascia breach.',
      pitfall:'<b>Pseudoenhancement</b> in small masses on CT can mimic enhancement of a benign cyst — enhancement of 10–20 HU in a small (<1.5 cm) mass may be artifactual; MRI is recommended for characterization.',
      pearl:'<b>Fat within the mass</b> on NCCT (HU −30 to −10) strongly suggests angiomyolipoma; however, fat-poor AML and clear cell RCC with fat can overlap. Retroperitoneal lymphadenopathy at the renal hilum and above the IVC bifurcation is the nodal drainage territory.',
      f:'[X] cm heterogeneously enhancing solid mass in the [upper/lower pole/mid] [right/left] kidney with enhancement from [X] HU on unenhanced to [X] HU on nephrographic phase. [Tumour thrombus extending into the renal vein/IVC to [level].] [No lymphadenopathy. No adrenal metastasis.]',
      i:'Enhancing renal mass [right/left], highly suspicious for renal cell carcinoma. [IVC tumour thrombus — urology consultation recommended.] Staging evaluation recommended.'
    }
  },

  {
    slug:'angiomyolipoma-hemorrhage', title:'Angiomyolipoma with Hemorrhage (Wunderlich Syndrome)', region:'gu', system:'Kidney',
    modality:'CT', sev:'killer', emoji:'🩸',
    blurb:'Fat-containing renal mass with spontaneous retroperitoneal hemorrhage — embolize when size exceeds 4 cm.',
    tags:['Macroscopic fat','Retroperitoneal bleed','Embolization'], rp:'angiomyolipoma',
    sheet:{
      find:'<b>Macroscopic fat (HU −30 or lower)</b> within a renal mass on NCCT. Acute hemorrhage appears as high-density hematoma (50–70 HU) in the perinephric or retroperitoneal space. Active extravasation appears as a blush denser than adjacent hematoma on arterial phase. Wunderlich syndrome = spontaneous non-traumatic perirenal hemorrhage.',
      measure:'Measure mass size. AMLs >4 cm have high rupture risk. Document hematoma extent and active extravasation. Assess for bilateral/multiple lesions (TSC association).',
      pitfall:'<b>Fat-poor AML</b> lacks macroscopic fat and cannot be distinguished from RCC by CT alone — MRI with chemical shift or biopsy required. Fat within RCC (osseous metaplasia) is exceedingly rare but reported.',
      pearl:'Bilateral or multiple AMLs suggest <b>tuberous sclerosis complex</b> — check for cerebral tubers and pulmonary LAM. Embolization is first-line for acute hemorrhage >4 cm AML; prophylactic embolization is recommended for asymptomatic AMLs >4 cm.',
      call:'<b>Active retroperitoneal extravasation</b> from a ruptured AML = Wunderlich syndrome — <b>emergent IR consultation for embolization</b>; BP management is critical.',
      f:'[X] cm fat-containing renal mass in the [right/left] kidney with macroscopic fat (HU −[X]) and [active arterial extravasation/surrounding perinephric hematoma measuring [X] cm].',
      i:'Ruptured angiomyolipoma, [right/left], with retroperitoneal hemorrhage (Wunderlich syndrome). Active extravasation present — emergent IR embolization recommended.'
    }
  },

  {
    slug:'bladder-rupture', title:'Bladder Rupture: Intraperitoneal vs Extraperitoneal', region:'gu', system:'Bladder',
    modality:'CT cystogram', sev:'killer', emoji:'💧',
    blurb:'CT cystogram distinguishes intraperitoneal (operative) from extraperitoneal (catheter) rupture — retrograde fill is mandatory.',
    tags:['Intraperitoneal','Extraperitoneal','CT cystogram'], rp:'bladder-rupture',
    sheet:{
      find:'<b>Intraperitoneal rupture</b>: contrast surrounds bowel loops and fills the peritoneal recesses (paracolic gutters, Morison pouch, rectovesical pouch) — "contrast outlines the bowel." <b>Extraperitoneal rupture</b>: contrast leaks into the perivesical fat in a "flame-shaped" or "molar-tooth" pattern confined to the pelvis. Combined rupture may show both patterns.',
      measure:'Must retrograde fill bladder with 300–400 mL contrast for adequate CT cystogram — passive filling from IV contrast is insufficient. Document site of leak (dome, anterolateral wall) and hematoma extent.',
      pitfall:'<b>IV contrast alone is inadequate</b> — an underfilled bladder will miss rupture. Always perform retrograde instillation. Extravasation may track along fascial planes and mimic pelvic hematoma.',
      pearl:'<b>Intraperitoneal rupture</b> (dome tears from a distended bladder) requires operative repair. <b>Extraperitoneal rupture</b> is typically managed conservatively with Foley catheter drainage; operative repair reserved for associated pelvic fractures requiring plating.',
      call:'<b>Intraperitoneal bladder rupture</b> = surgical emergency — <b>call urology now</b> for operative repair.',
      f:'CT cystogram with retrograde instillation demonstrates [intraperitoneal/extraperitoneal/combined] contrast extravasation. [Contrast outlines bowel loops in the peritoneal cavity / Flame-shaped perivesical extravasation in the space of Retzius.] [Associated pelvic fracture: right/left pubic rami.]',
      i:'[Intraperitoneal/Extraperitoneal] bladder rupture. [Intraperitoneal rupture requires operative repair — urology notified. / Extraperitoneal rupture amenable to catheter drainage — urology aware.]'
    }
  },

  {
    slug:'ureteric-injury-urinoma', title:'Ureteric Injury and Urinoma', region:'gu', system:'Ureter',
    modality:'CT urogram', sev:'urgent', emoji:'🌊',
    blurb:'Delayed-phase CT urogram is the key — a column-of-contrast defect or pooling around the ureter means ureteric injury or urine leak.',
    tags:['Urinoma','Delayed phase','Iatrogenic'], rp:'ureteral-injury',
    sheet:{
      find:'On <b>delayed phase (10–15 min)</b>: contrast extravasation around the ureter forming a <b>urinoma</b> (fluid collection that fills with contrast). Partial disruption: contrast leaks alongside an intact column. Complete transection: abrupt termination of the opacified ureter with pooling.',
      measure:'Document level of injury (UPJ, mid-ureter, UVJ). Measure urinoma dimensions. Note hydroureteronephrosis proximal to injury. Assess for coexistent vascular or bowel injury in trauma.',
      pitfall:'Urinomas are <b>isodense to water (0–20 HU)</b> on early phases and may be overlooked — they only enhance on delayed phase. Do not confuse lymphocele (post-surgical) with urinoma; creatinine of aspirated fluid distinguishes them.',
      pearl:'Most common iatrogenic cause: <b>gynecologic surgery</b> (hysterectomy, oophorectomy). In trauma, ureteric avulsion typically occurs at the <b>UPJ</b> after rapid deceleration. Stab wounds injure any level.',
      f:'Delayed CT urogram demonstrates [contrast extravasation / urinoma formation] adjacent to the [right/left] ureter at the level of [UPJ/mid-ureter/UVJ]. [Proximal hydroureteronephrosis. No opacification of ureter distal to [level] suggesting complete transection.]',
      i:'[Right/Left] ureteric injury with [urinoma/active urine leak] at the [level]. Urology consultation recommended for [stent placement/surgical repair].'
    }
  },

  {
    slug:'pyonephrosis', title:'Pyonephrosis (Infected Obstructed System)', region:'gu', system:'Kidney',
    modality:'CT', sev:'killer', emoji:'☠',
    blurb:'Obstructed collecting system with infection — delayed nephrogram, gas, or debris in a dilated system demands emergent drainage.',
    tags:['Infected obstruction','Collecting system gas','Emergent drainage'], rp:'pyonephrosis',
    sheet:{
      find:'<b>Hydronephrosis</b> with an obstructing cause (stone, mass, extrinsic compression) plus signs of infection: <b>gas within the collecting system</b>, debris/layering in the renal pelvis, perirenal stranding, or global renal hypoenhancement. The kidney may show delayed or absent nephrogram.',
      measure:'Grade hydronephrosis (mild/moderate/severe). Document obstructing stone size and position. Note degree of cortical thinning (chronicity). Identify any perinephric abscess component.',
      pitfall:'A <b>non-dilated system can be obstructed and infected</b> — early or partial obstruction, retroperitoneal fibrosis, or prior surgery may prevent dilation. High clinical suspicion warrants drainage even without marked hydronephrosis.',
      pearl:'Pyonephrosis is a <b>clinical-radiologic diagnosis</b> — CT does not reliably distinguish pyonephrosis from simple hydronephrosis. Turbid aspirate at drainage confirms it. Urosepsis can develop rapidly without drainage.',
      call:'<b>Obstructed infected kidney with fever/sepsis = pyonephrosis until proven otherwise</b> — <b>emergent urologic or IR drainage</b> (nephrostomy or retrograde stent) is required regardless of antibiotic therapy.',
      f:'Moderate/severe hydronephrosis of the [right/left] kidney with an obstructing [X] mm calculus at the [UPJ/mid-ureter/UVJ]. Gas within the collecting system and perinephric fat stranding. [Global hypoenhancement of the renal parenchyma.]',
      i:'Findings consistent with pyonephrosis, [right/left]. Emergent urology consultation recommended for drainage.'
    }
  },

  {
    slug:'renal-vein-thrombosis', title:'Renal Vein Thrombosis', region:'gu', system:'Kidney',
    modality:'CTA', sev:'urgent', emoji:'🩸',
    blurb:'Expanded renal vein with a non-enhancing filling defect — acute enlargement and cortical stranding, check for IVC extension.',
    tags:['Filling defect','Renal enlargement','IVC extension'], rp:'renal-vein-thrombosis',
    sheet:{
      find:'<b>Non-enhancing filling defect expanding the renal vein</b> on portal venous phase. Acute RVT: diffuse renal enlargement, cortical hypoenhancement, perinephric stranding, and thickening of Gerota fascia. Chronic RVT: small kidney with collateral venous channels.',
      measure:'Document thrombus extent: renal vein → IVC (level relative to hepatic veins and renal arteries). Note bilateral involvement. Measure renal size and enhancement asymmetry.',
      pitfall:'<b>Tumour thrombus from RCC</b> expands and enhances within the vein — arterial phase enhancement within the thrombus favors tumour thrombus. Bland thrombus does not enhance.',
      pearl:'Causes: nephrotic syndrome (membranous nephropathy most common), trauma, dehydration in infants, RCC extension. In adults with membranous nephropathy, up to 50% develop RVT. Anticoagulation is the primary treatment.',
      f:'Non-enhancing filling defect within the [right/left] renal vein extending [to the IVC at the level of the hepatic veins]. Ipsilateral renal enlargement with cortical hypoenhancement and perinephric stranding.',
      i:'Acute [right/left] renal vein thrombosis [with IVC extension to the [infrahepatic/suprahepatic] level]. Recommend hematology consultation and anticoagulation.'
    }
  },

  {
    slug:'renal-papillary-necrosis', title:'Renal Papillary Necrosis', region:'gu', system:'Kidney',
    modality:'CT urogram', sev:'urgent', emoji:'🔸',
    blurb:'Sloughed papillae with medullary cavitation and calyceal clubbing — NSAID, sickle cell, diabetes, and obstruction are the triggers.',
    tags:['Papillary sloughing','Medullary cavitation','Calyceal clubbing'], rp:'renal-papillary-necrosis',
    sheet:{
      find:'Medullary <b>papillary cavitation</b> or necrosis appearing as irregular lucencies, triangular defects, or "moth-eaten" papillae on CT urogram. Sloughed papillae may produce <b>filling defects</b> in the collecting system or pass as calcified fragments into the ureter. Calyceal clubbing (blunted calyces) on delayed phase.',
      measure:'Document number of affected papillae and laterality. Note hydronephrosis from obstructing sloughed papilla. Assess for calcification within papillae (calcium-containing necrotic debris).',
      pitfall:'Small sloughed papilla can mimic a <b>transitional cell carcinoma</b> filling defect — clinical context (analgesic nephropathy, sickle cell, DM) and absence of upstream hydroureter help distinguish.',
      pearl:'Mnemonic: <b>POSTCARDS</b> — Phenacetin/NSAIDs, Obstruction, Sickle cell, Tuberculosis, Cirrhosis/chronic liver disease, Analgesics, Renal transplant, DM, Sjögren syndrome.',
      f:'Medullary papillary cavitation and blunted calyces in [bilateral kidneys/the right/left kidney] with [sloughed papilla in the [right/left] ureter causing partial obstruction]. [Calcified papillary debris.]',
      i:'Renal papillary necrosis, [bilateral/right/left]. [Obstructing sloughed papilla in the [right/left] ureter — urology consultation recommended.]'
    }
  },

  {
    slug:'xanthogranulomatous-pyelonephritis', title:'Xanthogranulomatous Pyelonephritis', region:'gu', system:'Kidney',
    modality:'CT', sev:'urgent', emoji:'🐻',
    blurb:'Staghorn calculus, enlarged non-functioning kidney with bear-paw fat-density cavities — nearly always nephrectomy.',
    tags:['Staghorn calculus','Bear paw','Fat-density cavities'], rp:'xanthogranulomatous-pyelonephritis',
    sheet:{
      find:'<b>Enlarged, non-functioning kidney</b> with a central <b>staghorn calculus</b> and multiple <b>fat-density (−10 to −30 HU) expansile cavities</b> replacing the renal parenchyma — the <b>"bear paw" sign</b>. Perinephric extension with fistulas to adjacent structures (colon, skin, pleura) in advanced disease. The kidney typically shows no excretory function on delayed phase.',
      measure:'Document extent of perinephric/retroperitoneal extension. Note fistulous tracts. Assess for ipsilateral psoas involvement. Contralateral kidney function.',
      pitfall:'<b>Renal cell carcinoma with necrosis</b> and infected renal cyst can mimic XGP — the combination of staghorn calculus, non-function, and fat-density cavities is nearly pathognomonic for XGP.',
      pearl:'Causative organisms: <b>Proteus mirabilis and E. coli</b> most common. Nearly universal treatment is nephrectomy (often staged with antibiotics first). Diffuse (90%) vs. segmental (10%) forms exist.',
      f:'Enlarged [right/left] kidney with a central staghorn calculus and multiple fat-density expansile cavities replacing the parenchyma (bear paw sign). No excretory function on delayed phase. [Perinephric extension to the psoas/abdominal wall.] [Fistulous communication to the [colon/skin].]',
      i:'Xanthogranulomatous pyelonephritis, [right/left], [with perinephric extension]. Urology consultation recommended — typically requires nephrectomy.'
    }
  },

  {
    slug:'adrenal-hemorrhage', title:'Adrenal Hemorrhage', region:'gu', system:'Adrenal',
    modality:'CT', sev:'urgent', emoji:'🔴',
    blurb:'High-density oval adrenal mass on NCCT in a trauma or anticoagulated patient — bilateral hemorrhage means Addisonian crisis.',
    tags:['High density NCCT','Bilateral Addison','Trauma/anticoag'], rp:'adrenal-haemorrhage',
    sheet:{
      find:'<b>Ovoid high-density mass (50–90 HU) replacing the adrenal gland</b> on NCCT without enhancement. Acute hemorrhage is hyperdense; subacute becomes isodense then hypodense. No central enhancement distinguishes hemorrhage from a hypervascular tumor. Perinephric hematoma may extend around the adrenal.',
      measure:'Measure adrenal gland dimensions. Bilateral involvement: document both sides and estimate residual normal adrenal tissue. Note associated injuries (in trauma) or anticoagulation status.',
      pitfall:'An <b>adrenal adenoma or metastasis</b> can have high density on NCCT — adrenal washout protocol (15 min delayed) helps; hemorrhage does not washout. Clinical context (trauma, sepsis, anticoag) is key.',
      pearl:'<b>Bilateral adrenal hemorrhage</b> causes acute primary adrenal insufficiency (Addisonian crisis) — alert the clinical team immediately. Waterhouse-Friderichsen syndrome = bilateral hemorrhage from meningococcemia. Neonatal adrenal hemorrhage is usually right-sided from birth trauma.',
      call:'<b>Bilateral adrenal hemorrhage</b> = risk of acute adrenal insufficiency — <b>notify clinical team urgently</b> for empiric corticosteroid coverage.',
      f:'[Right/Left/Bilateral] high-density ovoid adrenal mass(es) ([X] HU on NCCT) measuring [X] cm without central enhancement, consistent with acute adrenal hemorrhage. [No residual normal adrenal tissue identified bilaterally.]',
      i:'[Unilateral/Bilateral] adrenal hemorrhage. [Bilateral involvement — risk of acute adrenal insufficiency; clinical team notified for corticosteroid assessment.]'
    }
  },

  {
    slug:'adrenal-pheochromocytoma', title:'Adrenal Mass and Pheochromocytoma', region:'gu', system:'Adrenal',
    modality:'CT', sev:'urgent', emoji:'⚡',
    blurb:'Large heterogeneous adrenal mass that fails to washout — the rule of 10s and the biopsy you must never do first.',
    tags:['No washout','Rule of 10s','No biopsy'], rp:'phaeochromocytoma',
    sheet:{
      find:'<b>Adrenal mass characterization</b>: Adenoma: homogeneous, HU ≤10 on NCCT (lipid-rich) or absolute washout ≥60%/relative washout ≥40% on 15-min delayed. Pheochromocytoma: often large (>3 cm), heterogeneous with cystic/hemorrhagic change, HU >20 on NCCT, <b>fails to washout</b>, avid enhancement (>100 HU). Metastasis: irregular, progressive enhancement, known primary.',
      measure:'<b>Washout protocol</b>: acquire unenhanced, portal venous (60 s), and 15-min delayed. Absolute percentage washout (APW) = (portal − delayed)/(portal − unenhanced) × 100. APW ≥60% = adenoma. Relative percentage washout (RPW) = (portal − delayed)/portal × 100. RPW ≥40% = adenoma.',
      pitfall:'<b>NEVER biopsy a pheochromocytoma</b> — precipitates hypertensive crisis. If pheochromocytoma is suspected biochemically or radiologically, surgical referral first. Bilateral adrenal masses: MEN2, VHL, NF1, SDH mutations.',
      pearl:'<b>Rule of 10s for pheo</b>: 10% extra-adrenal, 10% bilateral, 10% malignant, 10% familial, 10% in children. On MIBG/PET, pheo is avidly positive. Always correlate with urine/plasma metanephrines before biopsy.',
      f:'[X] cm [homogeneous/heterogeneous] [right/left] adrenal mass measuring [X] HU on NCCT with [absolute washout of [X]% / failure to washout — APW [X]%]. [Cystic/hemorrhagic change.]',
      i:'[Right/Left] adrenal mass, most consistent with [adenoma/pheochromocytoma/metastasis] based on washout characteristics. [If pheochromocytoma: biochemical evaluation recommended prior to any invasive procedure.]'
    }
  },

  {
    slug:'bladder-carcinoma', title:'Bladder Carcinoma', region:'gu', system:'Bladder',
    modality:'CT urogram', sev:'urgent', emoji:'🔶',
    blurb:'Enhancing intraluminal filling defect or bladder wall thickening — stage by perivesical fat invasion and nodal spread.',
    tags:['Filling defect','Perivesical invasion','Lymphadenopathy'], rp:'bladder-cancer',
    sheet:{
      find:'<b>Enhancing intraluminal soft-tissue mass or focal bladder wall thickening</b> on CT urogram. Transitional cell carcinoma (TCC/urothelial) is the most common. Document <b>perivesical fat invasion</b> (infiltration beyond the bladder wall = T3), adjacent organ involvement (T4), and regional lymphadenopathy (obturator, internal/external iliac chains).',
      measure:'Measure maximum tumour dimensions. Note location (trigone vs. dome vs. lateral wall). Document depth of wall invasion. Lymph node size threshold: >10 mm short axis in the pelvis. Check for upper tract urothelial carcinoma (synchronous lesions in renal pelvis or ureter).',
      pitfall:'<b>Blood clot</b> mimics a filling defect but does not enhance — compare unenhanced and enhanced phases. Bladder wall thickening from cystitis or prior radiation can mimic carcinoma. Cystoscopy and biopsy are required for diagnosis.',
      pearl:'Urothelial carcinoma is a <b>field change disease</b> — always evaluate the entire upper urinary tract on delayed phase for synchronous TCC. Squamous cell carcinoma is associated with Schistosoma haematobium and chronic indwelling catheter.',
      f:'[X] cm enhancing intraluminal mass/focal wall thickening involving the [posterior/lateral/trigone] bladder wall with [perivesical fat stranding suggesting T3 disease]. [No pelvic lymphadenopathy. No upper tract filling defects.]',
      i:'Bladder mass, suspicious for urothelial carcinoma. [Perivesical extension suggesting at least T3 disease.] Cystoscopy and urology consultation recommended.'
    }
  },

  {
    slug:'obstructive-uropathy', title:'Obstructive Uropathy and Hydronephrosis Grading', region:'gu', system:'Kidney',
    modality:'CT', sev:'urgent', emoji:'🌊',
    blurb:'Grade hydronephrosis, find the cause, and identify cortical thinning or infection — the obstructed infected kidney is the emergency.',
    tags:['Hydronephrosis grade','Cortical thinning','Cause'], rp:'hydronephrosis',
    sheet:{
      find:'<b>Grading</b>: Grade 1 — mild calyceal dilation, infundibula and renal pelvis visible; Grade 2 — moderate pelvicaliectasis with some preserved parenchyma; Grade 3 — severe pelvicaliectasis with cortical thinning; Grade 4 — "white kidney," minimal or no residual cortex. Trace the ureter for the <b>transition point</b> and cause (calculus, mass, extrinsic compression, stricture).',
      measure:'Measure AP diameter of the renal pelvis (mild <10 mm, moderate 10–15 mm, severe >15 mm). Document cortical thickness. Note contralateral kidney and bladder volume. Post-void residual if applicable.',
      pitfall:'A <b>parapelvic cyst</b> can mimic hydronephrosis on NCCT — on contrast CT, parapelvic cysts do not fill with contrast on delayed phase, whereas the dilated collecting system opacifies.',
      pearl:'<b>Functionally significant obstruction</b> is determined by nuclear medicine renography, not CT morphology alone. Chronic obstruction with thin cortex and absent function = likely irreversible; discuss with urology before nephrostomy.',
      f:'[Mild/Moderate/Severe] hydronephrosis of the [right/left] kidney [Grade 2/3] with cortical thinning to [X] mm. Transition point at the [UPJ/mid-ureter/UVJ] with a [X] mm [calculus/soft-tissue mass/extrinsic compression].',
      i:'[Mild/Moderate/Severe] right/left hydronephrosis secondary to [cause]. [Cortical thinning suggesting chronicity. Urology consultation recommended.]'
    }
  },

  {
    slug:'emphysematous-cystitis', title:'Emphysematous Cystitis', region:'gu', system:'Bladder',
    modality:'CT', sev:'urgent', emoji:'💨',
    blurb:'Gas within the bladder wall in a diabetic patient — distinguish from intraluminal gas and treat the underlying infection.',
    tags:['Bladder wall gas','Diabetic','E. coli'], rp:'emphysematous-cystitis',
    sheet:{
      find:'<b>Gas within the bladder wall</b> (mural gas) appearing as curvilinear or bubbly lucencies tracking the bladder contour on CT — distinct from intraluminal gas (which layers or shifts with position). May coexist with emphysematous pyelonephritis or pyelitis if upper tract involved.',
      measure:'Document extent of mural gas and whether gas extends beyond the bladder wall into perivesical fat (more severe, suggesting perforation risk). Identify any free pelvic gas suggesting perforation. Check for upper tract gas.',
      pitfall:'<b>Intraluminal gas</b> from recent catheterization or cystoscopy is benign — it layers dependently and shifts position. Mural gas is fixed within the wall and does not shift. Also distinguish from gas-forming bowel adjacent to the bladder.',
      pearl:'Organisms: <b>E. coli</b> (most common), Klebsiella, Proteus. Risk factors: <b>DM</b> (most common), immunosuppression, neurogenic bladder, chronic UTI. Managed with IV antibiotics and catheter drainage; surgery rarely required unless perforation occurs.',
      f:'Curvilinear/bubbly gas within the bladder wall with [intraluminal gas]. [Extension of gas into the perivesical fat.] [No free pelvic gas suggesting perforation.] [Coexistent upper tract gas.]',
      i:'Emphysematous cystitis. [With perivesical extension — urology consultation recommended.] Recommend IV antibiotics and Foley catheter placement.'
    }
  },

  {
    slug:'fournier-gangrene', title:'Fournier Gangrene', region:'gu', system:'Perineum',
    modality:'CT', sev:'killer', emoji:'⚠',
    blurb:'Subcutaneous gas tracking the perineum and scrotum/labia — necrotizing fasciitis demanding emergency debridement within hours.',
    tags:['Perineal gas','Necrotizing fasciitis','LRINEC score'], rp:'fournier-gangrene',
    sheet:{
      find:'<b>Gas tracking along the fascial planes of the scrotum, perineum, and perineal body</b> — may extend to the anterior abdominal wall, buttocks, or thigh along Colles and Buck fasciae. Soft-tissue thickening and fat stranding of the perineal and scrotal soft tissues. Gas may be subtle — use lung windows.',
      measure:'Extent of gas: perineum only vs. extension to anterior abdominal wall, thigh, or buttock. Document any perirectal or presacral involvement. Identify source (anorectal abscess, urethral injury, skin infection).',
      pitfall:'<b>Do not delay debridement for imaging</b> — CT confirms extent but should never delay OR. Gas may be minimal early; soft-tissue stranding alone with clinical signs of sepsis warrants emergent exploration.',
      pearl:'<b>LRINEC score ≥6</b> raises suspicion for necrotizing fasciitis. Mortality is 20–40% even with aggressive debridement; hyperbaric oxygen and IVIG are adjuncts. Identify the source: perianal fistula, urethral stricture, Bartholin gland abscess.',
      call:'<b>Perineal gas with soft-tissue stranding</b> = Fournier gangrene — <b>activate surgical emergency immediately</b>; mortality doubles with each 6-hour delay to debridement.',
      f:'Extensive gas tracking along the fascial planes of the [bilateral scrotum/labia/perineum] extending to the [anterior abdominal wall/bilateral thighs/buttocks]. Soft-tissue thickening and fat stranding of the perineum. [Source: perirectal abscess / urethral injury.] No drainable discrete abscess.',
      i:'Fournier gangrene with [extensive] gas and necrotizing fasciitis of the perineum [extending to the anterior abdominal wall and thighs]. Emergent surgical debridement required — case discussed with surgery at [time].'
    }
  },

  {
    slug:'upj-obstruction', title:'Ureteropelvic Junction Obstruction', region:'gu', system:'Ureter',
    modality:'CT urogram', sev:'urgent', emoji:'🔀',
    blurb:'Abrupt transition at the UPJ with proximal hydronephrosis and no downstream dilation — crossing vessel or intrinsic stenosis.',
    tags:['UPJ','Crossing vessel','Delayed excretion'], rp:'ureteropelvic-junction-obstruction',
    sheet:{
      find:'<b>Hydronephrosis with abrupt tapering at the UPJ and normal-caliber ureter distally</b>. The UPJ is the junction of the renal pelvis and proximal ureter at the medial lower pole. Extrinsic: <b>crossing vessel</b> (lower pole artery or vein indenting the UPJ from anterior — identify on CTA). Intrinsic: smooth focal narrowing without mass or calculus.',
      measure:'Grade hydronephrosis. Measure AP renal pelvis diameter. Assess cortical thickness as a marker of chronicity. On delayed CT urogram, note time to and extent of contrast excretion past the UPJ.',
      pitfall:'A small non-opacified <b>UPJ calculus</b> can mimic intrinsic UPJ stenosis — review NCCT carefully for a calculus at the UPJ. Parapelvic cysts can mimic hydronephrosis (see obstructive uropathy pitfall).',
      pearl:'UPJ obstruction may be intermittent and exacerbated by high urine output (Dietl crisis). Nuclear medicine MAG3 renogram is the gold standard for quantifying functional obstruction and split renal function.',
      f:'[Moderate/Severe] hydronephrosis of the [right/left] kidney with abrupt tapering at the UPJ and [normal-caliber ureter distally]. [A lower pole crossing vessel indents the UPJ anteriorly on CTA.] [Cortical thinning suggesting chronicity.] [Delayed/absent excretion past the UPJ on delayed phase.]',
      i:'[Right/Left] ureteropelvic junction obstruction with [moderate/severe] hydronephrosis. [Crossing vessel identified — endopyeloplasty may be preferred over pyeloplasty.] Urology consultation recommended.'
    }
  },

  {
    slug:'renal-transplant-complication', title:'Post-Transplant Kidney Complication', region:'gu', system:'Kidney',
    modality:'CT', sev:'urgent', emoji:'🔬',
    blurb:'Transplant in the iliac fossa — vascular thrombosis, urinoma, lymphocele, and rejection on a single CT.',
    tags:['Transplant','Lymphocele','Vascular thrombosis'], rp:'renal-transplant',
    sheet:{
      find:'<b>Peritransplant fluid collections</b>: Hematoma (early, high density) → Urinoma (fills with contrast on delayed phase) → Lymphocele (near the iliac vessels, no contrast fill, weeks to months post-op) → Abscess (rim-enhancing, fever). <b>Vascular complications</b>: Renal artery thrombosis (no cortical enhancement) or stenosis (delayed nephrogram, asymmetric enhancement); Renal vein thrombosis (expanded vein with filling defect, swollen kidney). <b>Ureteric complications</b>: Stricture or obstruction at the ureteroneocystostomy (UNC) site.',
      measure:'Measure any fluid collection. For vascular assessment, use CTA and measure renal artery stenosis grade. Document collecting system dilation and level of ureteric obstruction. Note cortical enhancement compared to contralateral native kidney (if present).',
      pitfall:'<b>Lymphocele</b> is the most common post-transplant collection (1–2 weeks post-op) — it does not enhance on delayed phase (unlike urinoma). Urinoma peaks at 1–3 weeks. Hematoma is typically immediate post-op.',
      pearl:'<b>Acute rejection</b> has no specific CT finding — diffuse swelling and cortical hypoenhancement are non-specific; nuclear medicine and biopsy are required. Chronic rejection shows progressive cortical thinning and parenchymal atrophy.',
      f:'Post-renal transplant CT demonstrates [describe collection: X cm fluid collection in the peritransplant space with characteristics of lymphocele/urinoma/hematoma/abscess]. [Transplant renal vein: expanded with filling defect consistent with thrombosis.] [Moderate hydronephrosis of the transplant kidney with transition at the UNC site.] [Transplant kidney enhancement: [normal/reduced].]',
      i:'Post-renal transplant [lymphocele/urinoma/hematoma/vascular thrombosis/ureteric obstruction] as above. Transplant urology/nephrology consultation recommended.'
    }
  },

  {
    slug:'traumatic-urethral-injury', title:'Traumatic Urethral Injury', region:'gu', system:'Urethra',
    modality:'CT cystogram', sev:'urgent', emoji:'🦴',
    blurb:'Pelvic fracture with blood at the meatus — retrograde urethrogram first, never blind Foley in an unstable urethra.',
    tags:['Pelvic fracture','Blood at meatus','Retrograde urethrogram'], rp:'urethral-injury',
    sheet:{
      find:'<b>CT cystogram findings</b>: contrast extravasation at the bladder neck or posterior urethra (membranous urethra, most common in males with pelvic fracture). Pelvic hematoma displacing the prostate or bladder superiorly — the <b>"high-riding prostate"</b> sign on clinical exam. Anterior urethral injuries (straddle injury) are identified by periurethral extravasation in the perineum.',
      measure:'Document pelvic fracture pattern (symphysis diastasis, sacroiliac disruption). Identify bladder displacement and estimated hematoma volume. Note any coexistent bladder rupture (extraperitoneal or intraperitoneal).',
      pitfall:'<b>Avoid blind Foley catheter placement</b> in suspected urethral injury — may convert partial to complete tear. Retrograde urethrogram (RUG) is the definitive diagnostic study. CT findings are often indirect.',
      pearl:'<b>Posterior urethral injury</b> (membranous urethra) = pelvic fracture urethral distraction defect. Management: suprapubic catheter acutely, delayed primary repair at 3–6 months. Anterior urethral injury (bulbar) = straddle mechanism, perineal hematoma.',
      call:'Blood at the urethral meatus in a pelvic fracture patient — <b>alert urology before any catheterization attempt</b>; suprapubic catheter is first-line drainage.',
      f:'Pelvic fracture with [symphysis pubis diastasis/sacral fracture/acetabular fracture]. [Pelvic hematoma displacing the bladder superiorly.] [Contrast extravasation at the posterior urethra/bladder neck on CT cystogram suggesting urethral or bladder neck injury.] [Associated extraperitoneal bladder rupture.]',
      i:'Pelvic fracture with imaging findings suggesting [posterior urethral injury/bladder neck disruption]. Urology consultation urgently recommended — avoid Foley catheter placement prior to retrograde urethrogram.'
    }
  }

]);
