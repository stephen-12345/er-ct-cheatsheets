/* Region: Cardiac and Great Vessels — heart, pericardium, coronary, cardiac trauma. */
ERCT.add([
  {
    slug:'pericardial-effusion-tamponade', title:'Pericardial Effusion and Tamponade', region:'cardiac', system:'Pericardium',
    modality:'CT', sev:'killer', emoji:'💧',
    blurb:'Circumferential pericardial fluid with chamber compression and IVC distension signals tamponade physiology.',
    tags:['Chamber compression','IVC distension','Dependent RA'], rp:'pericardial-effusion',
    sheet:{
      find:'<b>Circumferential low-attenuation pericardial fluid</b> (transudative ~0–20 HU; exudate/blood >30 HU). Tamponade signs: <b>RA/RV collapse</b>, leftward septal shift, dilated IVC without respiratory variation, and reflux of contrast into the hepatic veins.',
      measure:'Grading by depth: small <10 mm, moderate 10–20 mm, large >20 mm on short axis. High-attenuation fluid (>45 HU) suggests hemopericardium.',
      pitfall:'Pericardial fat can mimic a small effusion — fat measures negative HU (−50 to −100); fluid measures near-water density. A large effusion without tamponade physiology may not require immediate drainage.',
      pearl:'Reflux of IV contrast into the IVC and hepatic veins on CT indicates elevated right-sided pressure and supports tamponade physiology.',
      call:'RA or RV diastolic collapse with IVC plethora on CT is a <b>tamponade equivalent — contact the team for emergent pericardiocentesis</b>.',
      f:'[Large] circumferential pericardial effusion measuring up to [X] mm, with [high] attenuation ([X] HU) suggesting [hemopericardium / exudate]. [Compression of the right atrium and right ventricle.] [IVC distension with hepatic vein reflux.]',
      i:'[Large] pericardial effusion with CT signs of tamponade physiology. [Emergent pericardiocentesis discussed with [name] at [time].]'
    }
  },
  {
    slug:'hemopericardium', title:'Hemopericardium', region:'cardiac', system:'Pericardium',
    modality:'CT', sev:'killer', emoji:'🩸',
    blurb:'High-attenuation pericardial fluid after trauma, dissection, or perforation demands urgent cause identification.',
    tags:['High attenuation','Trauma','Aortic root'], rp:'haemopericardium',
    sheet:{
      find:'Pericardial fluid measuring <b>>45–60 HU</b> (acute blood approaches 60–80 HU). Look for the source: aortic root dissection extending into the pericardium, coronary perforation, free-wall rupture, or penetrating trauma.',
      pitfall:'Clotted blood can layer and be heterogeneous. Always trace an aortic dissection proximally — Type A dissection with pericardial extension is a surgical emergency distinct from primary hemopericardium.',
      pearl:'In blunt trauma, hemopericardium without aortic injury implies cardiac laceration or coronary injury — communicate urgently even without frank tamponade.',
      call:'Any hemopericardium requires immediate team notification; if aortic dissection is the source, <b>operative repair is the only definitive treatment — do not drain first</b>.',
      f:'High-attenuation pericardial fluid measuring [X] HU (mean) and [X] mm in depth, consistent with hemopericardium. [Source: aortic root dissection / cardiac contusion / penetrating injury.] [RA/RV compression present / absent.]',
      i:'Hemopericardium [with tamponade physiology]. [Source: ]. [Discussed with cardiac surgery at [time].]'
    }
  },
  {
    slug:'acute-pericarditis', title:'Acute Pericarditis', region:'cardiac', system:'Pericardium',
    modality:'CT', sev:'urgent', emoji:'🔥',
    blurb:'Pericardial thickening and enhancement with small effusion and pericardial fat stranding.',
    tags:['Pericardial enhancement','Fat stranding','Effusion'], rp:'pericarditis',
    sheet:{
      find:'<b>Pericardial thickening (>2 mm) with avid post-contrast enhancement</b> and pericardial fat stranding. Small-to-moderate effusion is common. Look for myocardial involvement (myopericarditis) and for any underlying cause (malignancy, purulent pericarditis).',
      pitfall:'Normal pericardium may faintly enhance — true pericarditis shows both thickening and stranding. Purulent pericarditis has loculated high-attenuation fluid and adjacent pneumonia/abscess.',
      pearl:'CT is not the primary imaging modality for uncomplicated pericarditis, but when seen incidentally, pericardial fat-stranding and enhancement are reliable signs; MRI with late gadolinium enhancement confirms myopericarditis.',
      f:'Pericardial thickening measuring up to [X] mm with avid enhancement and adjacent fat stranding. [Small circumferential effusion.] [No loculation or hemopericardium.]',
      i:'CT findings consistent with acute pericarditis. [Small pericardial effusion.] [No features of purulent pericarditis.]'
    }
  },
  {
    slug:'blunt-cardiac-injury', title:'Blunt Cardiac Injury and Myocardial Contusion', region:'cardiac', system:'Myocardium',
    modality:'CT', sev:'urgent', emoji:'💥',
    blurb:'Post-trauma myocardial hypoenhancement or wall-motion abnormality; RV free wall is most vulnerable.',
    tags:['RV contusion','Sternal fracture','Myocardial hypoenhancement'], rp:'blunt-cardiac-injury',
    sheet:{
      find:'Look for <b>myocardial hypoenhancement (wedge or transmural) after blunt chest trauma</b>, particularly of the right ventricular free wall and anterior LV. Associated findings: sternal fracture, anterior rib fractures, hemopericardium, and pneumopericardium.',
      measure:'Note the involved segment, depth of enhancement defect (subendocardial vs transmural), and any wall thinning. Pericardial fluid >20 HU after trauma implies hemorrhage.',
      pitfall:'The RV wall is thin and easy to miss on routine windows — use narrow cardiac windows (W:400 / C:40). Artifacts from respiratory and cardiac motion can mimic hypoenhancement.',
      pearl:'Sternal fracture or anterior flail is the strongest CT predictor of cardiac injury; all patients with sternal fractures warrant troponin monitoring and ECG.',
      call:'Myocardial hypoenhancement, pneumopericardium, or hemopericardium after blunt trauma should prompt immediate team notification.',
      f:'[Subendocardial / transmural] hypoenhancement of the [RV free wall / anterior LV] following blunt chest trauma. [Associated sternal fracture.] [Hemopericardium / pneumopericardium present / absent.]',
      i:'CT findings consistent with blunt cardiac injury / myocardial contusion involving the [RV free wall]. [Discussed with cardiology / trauma surgery at [time].]'
    }
  },
  {
    slug:'acute-mi-ct-perfusion-defect', title:'Acute MI — CT Hypoenhancement', region:'cardiac', system:'Myocardium',
    modality:'CT', sev:'killer', emoji:'❤️',
    blurb:'Wedge-shaped subendocardial or transmural myocardial hypoenhancement in a coronary territory is infarct.',
    tags:['Subendocardial defect','Coronary territory','No-reflow'], rp:'myocardial-infarction',
    sheet:{
      find:'<b>Subendocardial or transmural hypodensity</b> in a coronary territory on contrast CT, typically first visible as a wedge-shaped perfusion defect. The culprit vessel may be occluded or severely stenosed. Assess wall thickness.',
      measure:'Segmental wall thinning to <5.5 mm (LV) implies chronic scar rather than acute infarct. Transmural enhancement defect >50% indicates poor recovery.',
      pitfall:'Beam-hardening artifacts from the sternum and cardiac motion can create spurious anteroseptal defects — review on multiple reconstructions. Delayed-phase imaging or cardiac MRI is needed to confirm.',
      pearl:'No-reflow sign: a transmural enhancement defect that appears more prominent on delayed images after primary PCI, indicating microvascular obstruction and worse prognosis.',
      call:'An acute coronary territory perfusion defect on CT warrants immediate cardiology consultation — do not allow it to be dismissed as artifact.',
      f:'[Subendocardial / transmural] hypodensity involving the [anterior / inferior / lateral] wall in the [LAD / RCA / LCx] territory, [without / with] wall thinning. [Occluded / severely stenosed] [vessel] on CTA.',
      i:'CT findings consistent with [acute / subacute] myocardial [infarction / ischemia] in the [LAD] territory. [Cardiology notified at [time].]'
    }
  },
  {
    slug:'lv-thrombus-laa-thrombus', title:'LV and Left Atrial Appendage Thrombus', region:'cardiac', system:'Myocardium',
    modality:'CT', sev:'urgent', emoji:'🩸',
    blurb:'Hypoattenuating filling defect in the LV apex or LAA that is the most common cardioembolic stroke source.',
    tags:['LV apex','LAA filling defect','Cardioembolic'], rp:'left-ventricular-thrombus',
    sheet:{
      find:'<b>LV thrombus</b>: hypoattenuating endoluminal mass at the LV apex, often in a region of wall-motion abnormality or aneurysm, that does not enhance on delayed images. <b>LAA thrombus</b>: non-enhancing filling defect within the LAA on CTA; distinguish from pectinate muscle trabeculae.',
      measure:'LV thrombus: measure size and note if pedunculated (higher embolism risk). LAA thrombus: CT LAA density <100 HU or LAA/ascending aorta ratio <0.25 suggests thrombus.',
      pitfall:'LAA ridge (coumadin ridge) is a normal muscular fold between the LSPV and LAA orifice — it should not be called thrombus. Flow artifacts in slow-filling LAA produce pseudo-thrombus on early-phase CT; delayed or dedicated ECG-gated CTA helps.',
      pearl:'LV thrombus in a dilated, poorly contracting apex after anterior STEMI warrants anticoagulation; LAA thrombus is a contraindication to cardioversion or LAA closure.',
      f:'[Hypoattenuating / non-enhancing] endoluminal filling defect within the [LV apex / left atrial appendage] measuring [X × X] mm, [associated with apical aneurysm / wall-motion abnormality].',
      i:'[LV apical / Left atrial appendage] thrombus. [Cardiology notified for anticoagulation.]'
    }
  },
  {
    slug:'cardiac-mass-myxoma', title:'Cardiac Mass and Myxoma', region:'cardiac', system:'Myocardium',
    modality:'CT', sev:'urgent', emoji:'🫀',
    blurb:'Intracardiac mass in the left atrium attached to the fossa ovalis is most likely benign myxoma — but prove it.',
    tags:['LA mass','Fossa ovalis stalk','Heterogeneous'], rp:'cardiac-myxoma',
    sheet:{
      find:'<b>Pedunculated heterogeneous mass</b> in the left atrium with a stalk at the fossa ovalis — the hallmark of myxoma. Variable internal calcification, cystic change, and peripheral fronds. Note chamber of origin, attachment site, and any obstruction of the mitral valve.',
      measure:'Measure in three planes. Assess for prolapse across the mitral valve (functional obstruction risk). Note any intratumoral calcification or enhancement pattern.',
      pitfall:'RV/RA masses are more likely metastatic (melanoma, RCC tumor thrombus, lymphoma) or thrombus than myxoma. A sessile mural mass with surrounding edema in an immunosuppressed patient raises papillary fibroelastoma or metastasis.',
      pearl:'Myxoma is the most common primary cardiac tumor in adults; two-thirds arise in the left atrium. Metastases (especially lung, breast, melanoma) are far more common than primary tumors overall.',
      f:'Heterogeneous [pedunculated] intracardiac mass within the [left atrium] measuring [X × X × X] mm, with [a stalk at the fossa ovalis / broad-based attachment], [with / without] prolapse across the mitral valve.',
      i:'Intracardiac mass in the [left atrium]; myxoma is the most common etiology. [Cardiac surgery / cardiology consultation recommended.]'
    }
  },
  {
    slug:'coronary-artery-disease-ccta', title:'Coronary Artery Disease on CCTA', region:'cardiac', system:'Coronary',
    modality:'CCTA', sev:'urgent', emoji:'🫀',
    blurb:'CCTA grades plaque burden and luminal stenosis — significant stenosis and high-risk plaque features change management.',
    tags:['Stenosis grade','High-risk plaque','TIMI'], rp:'coronary-artery-disease',
    sheet:{
      find:'Grade stenosis in each major vessel (LM, LAD, LCx, RCA and major branches): <b>0% (none) / 1–24% (minimal) / 25–49% (mild) / 50–69% (moderate) / 70–99% (severe) / 100% (occlusion)</b>. Report high-risk plaque features: positive remodeling, low-attenuation plaque, napkin-ring sign, spotty calcification.',
      measure:'CAC score (Agatston) if non-contrast acquired. Stenosis by diameter reduction. Minimal lumen diameter and area for significant lesions.',
      pitfall:'Coronary motion artifact, beam hardening from dense calcium, and heart-rate variability can degrade image quality — document IQ per vessel. Do not grade stenoses in severely calcified segments.',
      pearl:'The <b>napkin-ring sign</b> (low-attenuation core surrounded by higher-attenuation rim) and positive remodeling index >1.1 identify vulnerable plaques with heightened near-term ACS risk.',
      call:'Significant stenosis (≥70%) of the LM or proximal LAD, or three-vessel disease, warrants urgent cardiology notification for revascularization triage.',
      f:'[No significant coronary artery stenosis / Moderate–severe stenosis of the [LAD / RCA / LCx].] [High-risk plaque features present: positive remodeling, low-attenuation core, napkin-ring sign.] CAC score [X].',
      i:'[Significant coronary artery disease with high-risk plaque in the proximal LAD.] [Cardiology notified at [time].]'
    }
  },
  {
    slug:'prosthetic-valve-complication', title:'Prosthetic Valve Complication', region:'cardiac', system:'Valve',
    modality:'CT', sev:'urgent', emoji:'⚙️',
    blurb:'Paravalvular leak, ring dehiscence, pannus, or abscess — CT reveals structural failure the echo may miss.',
    tags:['Paravalvular','Annular abscess','Dehiscence'], rp:'prosthetic-heart-valve',
    sheet:{
      find:'<b>Paravalvular leak</b>: gap between prosthetic ring and annulus with contrast filling the perivalvular space. <b>Annular abscess</b>: ring-enhancing fluid collection adjacent to the valve with annular destruction — typically in infective endocarditis. <b>Dehiscence</b>: rocking motion on cine CT, wide paravalvular gap.',
      measure:'Define the circumferential extent of dehiscence (degrees). Abscess: size and depth. Pseudoaneurysm of the aortic root is a complication — measure dimensions.',
      pitfall:'ECG-gating is critical; ungated CT significantly underestimates paravalvular leaks and misses dehiscence. Metal artifact degrades tissue detail — use iterative reconstruction.',
      pearl:'A <b>pseudoaneurysm of the aorto-mitral continuity</b> is a surgically important complication of aortic valve endocarditis — look for a posterior aortic root outpouching.',
      call:'Annular abscess or root pseudoaneurysm in endocarditis = surgical emergency — communicate with cardiac surgery immediately.',
      f:'[Paravalvular gap / ring-enhancing collection] adjacent to the [aortic / mitral] prosthesis measuring [X] mm, [with contrast opacification of the perivalvular space / with extension into the aortic root annulus].',
      i:'[Paravalvular dehiscence / Annular abscess / Root pseudoaneurysm] of the [aortic] prosthesis. [Cardiac surgery notified at [time].]'
    }
  },
  {
    slug:'rv-strain-pulmonary-hypertension', title:'RV Strain and Pulmonary Hypertension', region:'cardiac', system:'Myocardium',
    modality:'CT', sev:'urgent', emoji:'🫁',
    blurb:'RV:LV ratio greater than 1.0 with septal flattening and IVC dilatation signals RV pressure overload.',
    tags:['RV:LV ratio','Septal bowing','IVC dilatation'], rp:'right-ventricular-strain',
    diagram:{ svg:'<svg viewBox="0 0 260 160" role="img" aria-label="RV to LV ratio with septal bowing"><rect width="260" height="160" rx="6" fill="#070a0e"/><ellipse cx="130" cy="84" rx="112" ry="60" fill="#202a39" stroke="#33404f" stroke-width="3"/><path d="M150,32 Q184,84 150,136" fill="none" stroke="#e9edf4" stroke-width="3"/><text class="dgm-crit" style="font:800 14px system-ui" x="84" y="90" text-anchor="middle">RV</text><text class="dgm-teal" style="font:800 12px system-ui" x="198" y="90" text-anchor="middle">LV</text><text class="dgm-label sm" x="150" y="22" text-anchor="middle">septum bows into LV (D-sign)</text></svg>', caption:'Acute RV pressure overload: the RV dilates so the <b>RV:LV ratio exceeds 1</b>, and the interventricular septum flattens and bows toward the LV (the "D-sign").' },
    sheet:{
      find:'<b>RV:LV diameter ratio >1.0</b> on axial CT (four-chamber level). Interventricular septal flattening or leftward bowing ("D-sign"), dilated IVC >28 mm, reflux of contrast into the hepatic veins and IVC, and right heart dilatation. In chronic pulmonary hypertension: main pulmonary artery >29 mm.',
      measure:'RV/LV diameter ratio (>1.0 = strain; >1.5 = severe). Main PA diameter (>29 mm suggests pulmonary hypertension). IVC diameter. Note any RV free-wall hypertrophy (>4 mm) indicating chronicity.',
      pitfall:'RV:LV ratio should be measured at the level of the four-chamber view on axial images, not at the base or near the valves. Severe RV enlargement may compress and undersize the LV measurement.',
      pearl:'In acute massive PE, the combination of RV:LV >1.0, septal bowing, and elevated troponin/BNP stratifies the patient to intermediate-high or high risk with mortality benefit from systemic thrombolysis or catheter-directed therapy.',
      call:'RV:LV >1.0 with hemodynamic instability and massive PE = high-risk PE — <b>escalate immediately for systemic thrombolysis or catheter-directed intervention</b>.',
      f:'Right ventricular enlargement with RV:LV diameter ratio of [X:1] at the four-chamber level. [Leftward interventricular septal bowing.] [Dilated IVC ([X] mm) with hepatic vein reflux.] [Main PA [X] mm.]',
      i:'CT findings of [acute / chronic] right ventricular strain / pressure overload. [RV:LV ratio [X].] [In the setting of PE, this is consistent with hemodynamically significant right heart strain.]'
    }
  },
  {
    slug:'lv-aneurysm-vs-pseudoaneurysm', title:'LV Aneurysm vs Pseudoaneurysm', region:'cardiac', system:'Myocardium',
    modality:'CT', sev:'urgent', emoji:'💔',
    blurb:'True aneurysm has a wide neck and thin wall; pseudoaneurysm has a narrow neck and ruptures freely.',
    tags:['Narrow neck','Post-MI','Free-wall rupture'], rp:'left-ventricular-aneurysm',
    sheet:{
      find:'<b>True LV aneurysm</b>: dyskinetic, thin-walled (≤5 mm), fibrous outpouching of the anterior/apical LV wall with a <b>wide mouth (neck:sac ratio >0.5)</b>; contains mural thrombus; risk of arrhythmia and heart failure. <b>Pseudoaneurysm</b>: contained rupture with a <b>narrow neck (neck:sac ratio <0.5)</b>, no myocardium in the wall, may enhance in rim; posterior-lateral or inferior location after RCA territory MI.',
      measure:'Measure neck diameter and sac diameter. Neck:sac ratio <0.5 = pseudoaneurysm. Note involvement of adjacent structures.',
      pitfall:'Pericardial effusion or fat can surround a pseudoaneurysm and obscure the narrow neck — trace the wall carefully on multiple planes. A true posterior diverticulum (congenital) is smooth, non-dyskinetic, and not post-MI.',
      pearl:'<b>LV pseudoaneurysm carries a 30–45% risk of free rupture</b> — it is a surgical emergency. True aneurysm is at lower rupture risk and more commonly managed medically.',
      call:'LV pseudoaneurysm = impending free-wall rupture — <b>cardiac surgery emergently</b>.',
      f:'[Outpouching / saccular protrusion] of the [inferior / lateral] LV wall measuring [X × X] mm with a [narrow / wide] neck of [X] mm, [without myocardium identifiable in the wall]. [Mural thrombus present / absent.]',
      i:'CT findings consistent with [LV pseudoaneurysm / true LV aneurysm] of the [inferior] wall. [Pseudoaneurysm — cardiac surgery notified at [time].]'
    }
  },
  {
    slug:'post-mi-free-wall-rupture-vsd', title:'Post-MI Complications: Free-Wall Rupture and VSD', region:'cardiac', system:'Myocardium',
    modality:'CT', sev:'killer', emoji:'💥',
    blurb:'Sudden deterioration 3–7 days post-MI — CT reveals hemopericardium, septal defect, or papillary rupture.',
    tags:['Free-wall rupture','VSD','Hemopericardium'], rp:'post-myocardial-infarction-complications',
    sheet:{
      find:'<b>Free-wall rupture</b>: hemopericardium (high-attenuation fluid) with a myocardial defect or pseudoaneurysm at the site of transmural infarction. <b>VSD</b>: septal enhancement defect with left-to-right shunt detectable as early ventricular opacification on CTA. <b>Papillary muscle rupture</b>: irregular myocardium at the papillary muscle base; clinical acute MR.',
      pitfall:'Free-wall rupture often presents subacutely with a pseudoaneurysm (contained rupture) — a sealed perforation may not show active extravasation. Always look at the pericardial space in any patient with post-MI hemodynamic collapse.',
      pearl:'The three mechanical complications (free-wall rupture, VSD, papillary muscle rupture) peak at days 3–7 post-MI, with free-wall rupture carrying the highest mortality. Urgent surgical or hybrid repair is indicated.',
      call:'Any of these three mechanical complications = <b>cardiac surgical emergency — call now</b>.',
      f:'[Hemopericardium with a myocardial defect at the [inferior] wall / Septal enhancement defect in the [apical] septum / Disruption of the [posteromedial] papillary muscle] in the context of [inferior] MI. [Active extravasation / contained.] ',
      i:'CT findings of post-MI [free-wall rupture / ventricular septal defect / papillary muscle rupture]. Cardiac surgery notified at [time].'
    }
  },
  {
    slug:'constrictive-pericarditis', title:'Constrictive Pericarditis', region:'cardiac', system:'Pericardium',
    modality:'CT', sev:'routine', emoji:'🔒',
    blurb:'Calcified or thickened pericardium with biatrial enlargement and tubular ventricles in a patient with exertional dyspnea.',
    tags:['Pericardial calcification','Tubular RV','Biatrial enlargement'], rp:'constrictive-pericarditis',
    sheet:{
      find:'<b>Pericardial thickening (>4 mm) ± calcification</b>, predominantly over the RV and AV groove. Tubular/narrowed RV contour, biatrial enlargement, dilated IVC/hepatic veins, pericardial tethering, and conical-shaped ventricles. Septal bounce on cine CT.',
      measure:'Pericardial thickness at the RV: normal <2 mm, abnormal >4 mm. Extent and pattern of calcification (circumferential vs focal). Hepatic vein dilatation.',
      pitfall:'Pericardial thickening without calcification is non-specific and also seen in active pericarditis; MRI constrictive physiology (septal bounce and hepatic vein flow reversal) may be required for confirmation. Up to 20% of proven constrictive pericarditis has normal pericardial thickness.',
      pearl:'Pericardial calcification is pathognomonic but not necessary — effusive-constrictive physiology can occur with normal-thickness pericardium (viral, radiation, idiopathic).',
      f:'Pericardial thickening measuring up to [X] mm [with extensive calcification] over the right ventricular free wall and atrioventricular grooves. [Biatrial enlargement.] [Tubular right ventricular contour.] [Dilated IVC and hepatic veins.]',
      i:'CT findings consistent with constrictive pericarditis. [Cardiology / cardiac surgery consultation for pericardiectomy evaluation.]'
    }
  },
  {
    slug:'takotsubo-cardiomyopathy', title:'Takotsubo Stress Cardiomyopathy', region:'cardiac', system:'Myocardium',
    modality:'CT', sev:'urgent', emoji:'🫀',
    blurb:'Apical ballooning with basal hypercontraction after emotional or physical stress — mimics anterior STEMI.',
    tags:['Apical ballooning','Basal sparing','Stress trigger'], rp:'takotsubo-cardiomyopathy',
    sheet:{
      find:'<b>Apical LV ballooning</b> (akinetic, dilated apex) with <b>preserved or hyperkinetic basal segments</b> on ECG-gated CTA or contrast CT. No significant obstructive coronary artery disease. Associated findings: small pericardial effusion, LV thrombus in the apex, RV involvement in 25%.',
      measure:'Wall-motion abnormality extending beyond a single coronary territory (wrapping around apex) distinguishes Takotsubo from LAD territory infarct. LV ejection fraction often 20–40% acutely.',
      pitfall:'The CT pattern overlaps with anterior STEMI — both show apical wall-motion abnormality. Clinical context (emotional trigger, female sex, no obstructive coronary disease) and coronary angiography are required for definitive diagnosis.',
      pearl:'RV Takotsubo variant shows right ventricular apical hypokinesis with basal sparing, and carries higher in-hospital mortality. Cardiogenic shock and LVOT obstruction (from basal hypertrophy) are the most lethal acute complications.',
      f:'Apical and mid-ventricular wall thinning and hypoenhancement [with apical ballooning] extending beyond a single coronary territory, with [relative preservation of the basal segments]. [No significant coronary stenosis.] [Small apical thrombus.]',
      i:'CT pattern consistent with Takotsubo (stress) cardiomyopathy. [Cardiology notified.] [No obstructive coronary artery disease on CCTA.]'
    }
  }
]);
