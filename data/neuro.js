/* Region: Brain and Neuro — emergency head CT/CTA/CTV. */
ERCT.add([
  {
    slug:'acute-ischemic-stroke-early-ct',
    href:'stroke/acute-ischemic-stroke.html',
    title:'Acute Ischemic Stroke — Early CT Signs',
    region:'neuro', system:'Supratentorial',
    modality:'NCCT', sev:'killer', emoji:'🧠',
    blurb:'Subtle loss of grey-white differentiation and sulcal effacement herald infarction in the first 6 hours.',
    tags:['Grey-white loss','Sulcal effacement','ASPECTS'],
    rp:'ischaemic-stroke',
    sheet:{
      find:'Systematically score <b>ASPECTS</b> (10-point MCA territory map: caudate, putamen, internal capsule, insular ribbon, M1–M6). Loss of grey-white differentiation, sulcal effacement, and <b>insular ribbon sign</b> are the earliest signs. Compare with contralateral hemisphere.',
      measure:'ASPECTS ≥ 6 favors thrombectomy benefit; ≤ 5 suggests large established infarct. Mention core estimate and any "early ischemic changes."',
      pitfall:'Early infarct can be invisible on NCCT — a "normal" CT with a clinical stroke syndrome demands urgent CTA and perfusion. Contralateral comparison and window/level manipulation (W:8 L:32) improve sensitivity.',
      pearl:'<b>Insular ribbon sign</b> (loss of insular cortex grey-white definition) is one of the most sensitive early NCCT signs — scrutinize in every stroke protocol.',
      call:'ASPECTS ≤ 5 or large territory early ischemic changes warrant immediate neuro/neurovascular discussion before tPA or thrombectomy.',
      f:'[No / Early] ischemic change in the [right MCA] territory. ASPECTS [X/10] with loss of grey-white differentiation in [caudate, insular ribbon, M1-M2]. [No definite hyperdense vessel sign.] [No hemorrhage.]',
      i:'Early ischemic change in the [right MCA] territory, ASPECTS [X/10]. [Urgent CTA/CTP recommended for LVO evaluation.]'
    }
  },
  {
    slug:'dense-vessel-sign-lvo',
    title:'Dense Vessel Sign and Large-Vessel Occlusion',
    region:'neuro', system:'Supratentorial',
    modality:'NCCT', sev:'killer', emoji:'🔴',
    blurb:'Hyperdense artery on NCCT pinpoints the clot location — find it before the CTA loads.',
    tags:['Hyperdense MCA','Dot sign','Clot burden'],
    rp:'dense-middle-cerebral-artery-sign',
    sheet:{
      find:'Scan for <b>hyperdense MCA sign</b> (proximal M1, Hounsfield ~70–90 HU vs. contralateral ~40 HU), <b>hyperdense basilar</b>, hyperdense ICA terminus. Also look for the <b>MCA dot sign</b> (M2 branch in Sylvian fissure on axial cuts).',
      measure:'HU > 50–55 in the vessel with at least 1.5:1 ratio vs. contralateral side supports true hyperdensity. Clot length on axial slices estimates thrombus burden.',
      pitfall:'Polycythemia and elevated hematocrit cause diffuse vascular hyperdensity — compare HU bilaterally. Calcified atherosclerosis mimics dense vessel but is eccentric and wall-based.',
      pearl:'<b>Always look for the dense basilar</b> — it is less obvious than MCA and is a devastating miss. Reconstruct sagittal images.',
      call:'Dense vessel sign indicating LVO should trigger immediate CTA confirmation and stroke team notification regardless of clinical deficit.',
      f:'Hyperdense [right M1 MCA / basilar artery] with attenuation of [X] HU, consistent with acute thrombus. [No early ischemic change / ASPECTS X/10.]',
      i:'Hyperdense [right M1 MCA] consistent with acute thrombus and LVO. Urgent CTA recommended for thrombectomy evaluation.'
    }
  },
  {
    slug:'lvo-cta-thrombectomy',
    title:'Large-Vessel Occlusion on CTA',
    region:'neuro', system:'Supratentorial',
    modality:'CTA', sev:'killer', emoji:'🚨',
    blurb:'Abrupt vessel cutoff on CTA drives the thrombectomy decision — describe site, collaterals, and extent.',
    tags:['Vessel cutoff','Collateral grade','Clot length'],
    rp:'large-vessel-occlusion',
    sheet:{
      find:'Trace intracranial vessels from ICA siphon through MCA M1–M2 on axial MIP and thin-slab reconstructions. Report occlusion site, estimated clot length, and collateral filling of the downstream territory (compare cortical branches filling to contralateral).',
      measure:'<b>Collateral score 0–3</b>: 0 = absent, 1 = poor (< 50% filling), 2 = moderate (50–100%), 3 = complete. Good collaterals (2–3) predict penumbra salvageability. Report ASPECTS on concurrent NCCT.',
      pitfall:'Severe M1 stenosis with slow flow can mimic occlusion — review venous phase and perfusion maps. Contralateral ICA stenosis or hypoplastic A1 segment can be mistaken for occlusion.',
      pearl:'Include <b>tandem occlusion</b> (ipsilateral cervical ICA occlusion/stenosis with intracranial LVO) — it changes the thrombectomy approach and must be explicitly reported.',
      call:'Confirmed LVO requires immediate direct communication with the stroke/neurointerventional team. Include occlusion site, NIHSS correlation, ASPECTS, and collateral grade in the verbal report.',
      f:'Acute occlusion of the [right M1 MCA / ICA terminus] with abrupt cutoff at [location]. Estimated clot length [X] mm. Collateral grade [X/3] with [poor/moderate/good] retrograde filling. [Tandem cervical ICA occlusion present / absent.] ASPECTS [X/10].',
      i:'Acute [right M1 MCA] large-vessel occlusion. Collateral grade [X/3]. [Tandem cervical ICA occlusion.] Findings communicated to [provider] at [time] for thrombectomy evaluation.'
    }
  },
  {
    slug:'basilar-artery-occlusion',
    title:'Basilar Artery Occlusion',
    region:'neuro', system:'Posterior fossa',
    modality:'CTA', sev:'killer', emoji:'☠️',
    blurb:'Basilar occlusion carries near-100% mortality untreated — the dense basilar sign and CTA cutoff cannot be missed.',
    tags:['Dense basilar','Top-of-basilar','Locked-in'],
    rp:'basilar-artery-occlusion',
    sheet:{
      find:'On NCCT, scan the sagittal/axial posterior fossa for a <b>hyperdense basilar artery</b>. On CTA, trace the vertebral arteries through the basilar to the PCA origins. Report the level of occlusion (proximal/mid/distal basilar or top-of-basilar), extent, and collateral PCOM flow.',
      measure:'Report vertebral artery origins and dominant VA; proximal occlusion vs. top-of-basilar syndrome (bilateral PCA involvement, thalami, midbrain) have different clinical profiles.',
      pitfall:'Dense basilar is easy to miss versus atherosclerotic calcification — check Hounsfield units and compare to vertebral arteries. Early pontine infarcts are invisible on NCCT; a normal NCCT does not exclude BAO.',
      pearl:'<b>Top-of-basilar syndrome</b>: bilateral thalamic, midbrain, occipital, and medial temporal ischemia from embolism at the basilar apex — look for bilateral thalamic involvement (artery of Percheron territory).',
      call:'Any suspected basilar occlusion warrants immediate call to stroke/neurointerventional team — thrombectomy window extends to 24 h in select cases.',
      f:'Hyperdense basilar artery on NCCT with HU [X]. CTA demonstrates [complete/partial] occlusion of the [proximal/mid/distal] basilar artery with [absent/reduced] filling. [Top-of-basilar involvement with bilateral PCAs.] Posterior fossa shows [early ischemic changes / established infarct] in [pons/cerebellum].',
      i:'Acute basilar artery occlusion at the [proximal/distal] basilar. Immediately communicated to [provider] at [time]. Thrombectomy evaluation recommended.'
    }
  },
  {
    slug:'intraparenchymal-hemorrhage',
    title:'Intraparenchymal Hemorrhage',
    region:'neuro', system:'Supratentorial',
    modality:'NCCT', sev:'killer', emoji:'🩸',
    blurb:'Acute blood is bright on NCCT — location guides etiology, spot sign on CTA predicts expansion.',
    tags:['Location','Spot sign','Expansion risk'],
    rp:'intracerebral-haemorrhage',
    sheet:{
      find:'Identify hyperdense (60–80 HU) focus; measure volume using <b>ABC/2 method</b> (A × B × C / 2 on the largest axial slice). Report location (basal ganglia, thalamus, lobar, brainstem, cerebellar), midline shift, ventricular extension, and surrounding edema.',
      measure:'Volume in mL (ABC/2). Midline shift in mm. <b>Hematoma expansion</b> risk is highest in first 6 h. If CTA obtained, report <b>spot sign</b> (enhancing focus within hematoma = active extravasation, predicts expansion).',
      pitfall:'<b>Hemorrhagic metastasis</b> and <b>cavernoma</b> can mimic primary IPH — an atypical location, disproportionate edema, or "blooming" on MR should raise suspicion. Contrast extravasation (spot sign) ≠ tumor enhancement.',
      pearl:'<b>Lobar hemorrhage in older adults</b> suggests cerebral amyloid angiopathy (CAA); <b>basal ganglia/thalamic</b> hemorrhage in hypertensives is classic hypertensive hemorrhage. Both affect management.',
      call:'Volume > 30 mL, significant midline shift, posterior fossa hemorrhage, or deteriorating exam warrants urgent neurosurgical notification.',
      f:'Hyperdense [right putaminal / left lobar] intraparenchymal hemorrhage measuring [X × Y × Z] mm, volume approximately [X] mL by ABC/2. [X] mm midline shift to the [left/right]. [Intraventricular extension present / absent.] [Spot sign present / absent on CTA.] Surrounding hypodense edema.',
      i:'[Right putaminal] intraparenchymal hemorrhage, [X] mL, [X] mm midline shift. [Spot sign predicting expansion.] Neurosurgical notification recommended.'
    }
  },
  {
    slug:'subarachnoid-hemorrhage',
    href:'sah/subarachnoid-hemorrhage.html',
    title:'Subarachnoid Hemorrhage',
    region:'neuro', system:'Supratentorial',
    modality:'NCCT', sev:'killer', emoji:'💥',
    blurb:'Hyperdense CSF in the basal cisterns — find the aneurysm on CTA before the next bleed.',
    tags:['Basal cisterns','Fisher grade','LP if NCCT negative'],
    rp:'subarachnoid-haemorrhage',
    sheet:{
      find:'Look for <b>hyperdense (hyperattenuating) material in the sulci, basal cisterns, Sylvian fissures, and interhemispheric fissure</b>. Check suprasellar cistern, ambient cisterns, and posterior fossa. Aneurysmal SAH is characteristically basilar/perimesencephalic. Also check for hydrocephalus, IPH, and midline shift.',
      measure:'<b>Modified Fisher Scale</b> (0–4) quantifies clot burden and vasospasm risk: Grade 3–4 = thick clot or IVH = high vasospasm risk. Note clot distribution for aneurysm localization (e.g., Sylvian fissure = MCA, interhemispheric = ACA/AComm).',
      pitfall:'<b>10–15% of SAH is NCCT-negative</b> — if thunderclap headache with normal CT, lumbar puncture for xanthochromia is mandatory. Anemia (Hct < 30) reduces blood density and can give false-negative CT.',
      pearl:'Blood distribution pattern predicts aneurysm location: <b>perimesencephalic</b> = nonaneurysmal/venous (benign prognosis); <b>Sylvian</b> = MCA; <b>interhemispheric</b> = AComm; <b>basal cisterns</b> = PCOM/basilar.',
      call:'Any SAH requires immediate neurosurgical/neurovascular consultation. Aneurysmal SAH: report Fisher grade and distribution urgently.',
      f:'Hyperdense material within the [basal cisterns, Sylvian fissures, suprasellar cistern] consistent with subarachnoid hemorrhage. Modified Fisher grade [X]. [Intraventricular extension / hydrocephalus present / absent.] [IPH in X location.] [X mm midline shift.]',
      i:'Subarachnoid hemorrhage, modified Fisher grade [X], distribution [supratenorial/perimesencephalic] suggesting [aneurysmal/nonaneurysmal] source. CTA head recommended urgently.'
    }
  },
  {
    slug:'cerebral-aneurysm-cta',
    title:'Cerebral Aneurysm on CTA',
    region:'neuro', system:'Circle of Willis',
    modality:'CTA', sev:'killer', emoji:'💣',
    blurb:'Report neck width, dome size, and morphology — irregular daughter sacs predict rupture risk.',
    tags:['Dome:neck ratio','Daughter sac','ISUIA thresholds'],
    rp:'intracranial-aneurysm',
    sheet:{
      find:'Review thin-slab MIP and volume-rendered CTA. Assess <b>all named vessels</b> systematically (ICA, MCA, ACA/AComm, PComm, basilar, PICA). For each aneurysm: location, maximum dome diameter, neck width, dome:neck ratio, presence of irregular lobulation or daughter sacs, wall enhancement.',
      measure:'Neck width ≤ 4 mm = favorable for coiling. Dome:neck ratio ≥ 2 = favorable for coiling. Size: < 7 mm small; 7–12 mm medium; 12–25 mm large; > 25 mm giant. Ruptured aneurysm: correlate location with SAH distribution.',
      pitfall:'<b>Infundibular dilations</b> (triangular, < 3 mm at arterial origins, esp. PCOM) are normal variants but can be misread as small aneurysms. True aneurysms are typically round and lack a vessel arising from the apex.',
      pearl:'<b>PCOM aneurysm</b> projecting posterolaterally is the classic cause of CN III palsy — always check the PCOM origin. Aneurysm pointing down and lateral = high rupture risk morphology.',
      call:'Any aneurysm ≥ 7 mm or with daughter sac/irregular morphology, or in setting of SAH, should prompt urgent neurovascular discussion.',
      f:'[Single / Multiple] saccular aneurysm(s) identified. [Right PCOM] aneurysm measuring [X] mm dome × [X] mm neck with [irregular lobulation / daughter sac / smooth dome]. [Additional aneurysm at X.] Dome:neck ratio [X].',
      i:'[Right PCOM] saccular aneurysm [X] mm with [irregular morphology / daughter sac]. [Correlates with SAH distribution.] Urgent neurovascular consultation recommended.'
    }
  },
  {
    slug:'subdural-hematoma',
    title:'Subdural Hematoma',
    region:'neuro', system:'Extra-axial',
    modality:'NCCT', sev:'killer', emoji:'🔵',
    blurb:'Crescent-shaped extra-axial collection crossing sutures — density tracks age and predicts acute-on-chronic layering.',
    tags:['Crescent shape','Midline shift','Acute-on-chronic'],
    rp:'subdural-haematoma',
    sheet:{
      find:'<b>Crescent-shaped hyperdense (acute), isodense (subacute ~2–3 weeks), or hypodense (chronic) extra-axial collection</b> conforming to the inner calvarium, crossing suture lines. Measure maximum thickness and midline shift. Look for layering (hyperdense dependent component in chronic = acute-on-chronic).',
      measure:'Max thickness in mm; midline shift in mm. <b>Acute-on-chronic</b>: hyperdense (fresh) blood layering within a hypodense (chronic) collection. Bilateral chronic SDH can hide midline shift — compare both sides.',
      pitfall:'<b>Isodense subacute SDH</b> (days 5–20) is the great mimic — look for effacement of sulci, medial displacement of cortical vessels, asymmetric gyri. Compare cerebral surfaces carefully.',
      pearl:'<b>Bilateral isodense SDH</b>: midline may appear "normal" while both hemispheres are compressed. Buckling of the white matter and inward displacement of grey-white junction are the clues.',
      call:'Acute SDH with midline shift > 5 mm, thickness > 10 mm, or declining GCS: urgent neurosurgical consultation.',
      f:'[Acute/subacute/chronic/acute-on-chronic] [right/left/bilateral] subdural hematoma, maximum thickness [X] mm. [X] mm midline shift to the [contralateral] side. [Hyperdense layering on chronic collection consistent with acute-on-chronic.] [Mass effect on basal cisterns.] [Herniation signs present/absent.]',
      i:'[Acute] [right] subdural hematoma, [X] mm thick, [X] mm midline shift. [Acute-on-chronic component.] Urgent neurosurgical consultation recommended.'
    }
  },
  {
    slug:'epidural-hematoma',
    title:'Epidural Hematoma',
    region:'neuro', system:'Extra-axial',
    modality:'NCCT', sev:'killer', emoji:'🟡',
    blurb:'Biconvex hyperdense collection bounded by sutures — the swirl sign warns of active arterial bleeding.',
    tags:['Biconvex','Swirl sign','Lucid interval'],
    rp:'extradural-haematoma',
    sheet:{
      find:'<b>Biconvex (lenticular) hyperdense extra-axial collection</b>, typically temporal/temporoparietal, <b>bounded by suture lines</b> (unlike SDH which crosses). Check for underlying temporal bone fracture and middle meningeal artery course.',
      measure:'Maximum thickness and volume (ABC/2). Midline shift. <b>Swirl sign</b>: low-density foci within a hyperdense EDH = active arterial extravasation → high-risk, predict rapid expansion.',
      pitfall:'EDH can be isodense in severe anemia or coagulopathy. Posterior fossa EDH is particularly dangerous and harder to detect — examine the posterior fossa carefully in any head trauma.',
      pearl:'<b>Lucid interval</b>: patient may be initially conscious then deteriorate — the classic history for EDH. EDH rarely crosses sutures (periosteal dural attachment) but can cross the midline at the superior sagittal sinus.',
      call:'Any EDH with swirl sign, volume > 30 mL, thickness > 15 mm, or midline shift > 5 mm demands immediate neurosurgical notification — this is a surgical emergency.',
      f:'Biconvex hyperdense extra-axial hematoma overlying the [right temporoparietal] region, maximum thickness [X] mm, volume approximately [X] mL. [Swirl sign present, indicating active extravasation.] [X] mm midline shift. [Temporal bone fracture crossing the middle meningeal groove.]',
      i:'[Right temporal] epidural hematoma, [X] mm thick, [X] mL. [Swirl sign — active arterial hemorrhage.] [Temporal bone fracture.] Immediate neurosurgical consultation.'
    }
  },
  {
    slug:'traumatic-sah',
    title:'Traumatic Subarachnoid Hemorrhage',
    region:'neuro', system:'Sulci/Convexities',
    modality:'NCCT', sev:'urgent', emoji:'🔶',
    blurb:'Thin blood in cortical sulci after trauma — distinguish from aneurysmal SAH by distribution and mechanism.',
    tags:['Sulcal blood','Cortical contusion','Aneurysmal vs traumatic'],
    rp:'traumatic-subarachnoid-haemorrhage',
    sheet:{
      find:'Hyperdense material within <b>cortical sulci and superficial cisterns</b>, typically adjacent to contusion sites. Check all sulci, especially vertex and convexity. Traumatic SAH is often unilateral or asymmetric; aneurysmal SAH is typically basilar/cistern-dominant.',
      measure:'Note distribution (sulcal/convexity vs. basal cistern), extent, and whether basal cisterns are involved. Any hydrocephalus? Associated contusions or SDH?',
      pitfall:'<b>Pseudo-SAH</b>: in severe diffuse cerebral edema, the basilar cisterns appear hyperdense relative to the extremely low-density swollen brain — not true SAH. Check HU in cisterns (true SAH > 40 HU).',
      pearl:'Traumatic SAH at the <b>interpeduncular or perimesencephalic cisterns</b> in a trauma patient still requires aneurysm exclusion by CTA if mechanism is unclear (e.g., "fall" that may have been preceded by ictus).',
      f:'Hyperdense material within [right parietal sulci / bilateral convexity sulci], consistent with traumatic subarachnoid hemorrhage. [Adjacent contusion.] [Basal cisterns clear / involved.] [No hydrocephalus.]',
      i:'Traumatic subarachnoid hemorrhage in [right parietal sulci]. [Adjacent contusion.] [CTA recommended to exclude aneurysm given distribution.]'
    }
  },
  {
    slug:'cerebral-contusion',
    title:'Cerebral Contusion',
    region:'neuro', system:'Supratentorial',
    modality:'NCCT', sev:'urgent', emoji:'🟤',
    blurb:'Petechial hemorrhage at cortex-white matter junction — coup-contrecoup; "salt and pepper" appearance evolves over hours.',
    tags:['Coup-contrecoup','Temporal poles','Bloom on MR'],
    rp:'cerebral-contusion',
    sheet:{
      find:'Heterogeneous foci of <b>hyperdense (hemorrhagic) and hypodense (edematous) cortex</b> at the <b>inferior frontal and temporal poles</b> (classic contrecoup sites over rough skull base), cortical surface adjacent to impact. The "salt and pepper" or "pepper-and-salt" hemorrhagic cortical pattern.',
      measure:'Dimensions in 3 planes, surrounding edema extent, proximity to eloquent cortex. Note any mass effect.',
      pitfall:'<b>Contusions "blossom" (expand) in the first 24–48 h</b> — initial CT can significantly underestimate final lesion volume. Repeat CT at 6–12 h for deteriorating patients or large initial lesions.',
      pearl:'Contusions at the temporal poles and inferior frontal lobes are the most common sites (orbital frontal and temporal base impact over rough skull base). Always scrutinize these areas on every head trauma CT.',
      f:'[Bilateral inferior frontal / right temporal pole] cerebral contusions with heterogeneous hyperdense and hypodense cortical foci, maximum [X × Y] mm. Surrounding hypodense edema. [Associated SAH / SDH.] [No significant mass effect.]',
      i:'[Bifrontal/temporal] cerebral contusions. [Lesion blossoming possible — follow-up CT recommended at 12–24 hours.]'
    }
  },
  {
    slug:'diffuse-axonal-injury',
    title:'Diffuse Axonal Injury',
    region:'neuro', system:'White matter tracts',
    modality:'CT', sev:'urgent', emoji:'⚡',
    blurb:'CT is insensitive — tiny petechial hemorrhages at grey-white junction, corpus callosum, and brainstem are the clue.',
    tags:['Grey-white junction','Corpus callosum','MR-sensitive'],
    rp:'diffuse-axonal-injury',
    sheet:{
      find:'Look for small (<10 mm) petechial hyperdense foci at the <b>grey-white junction</b>, <b>corpus callosum splenium</b>, internal capsule, and dorsolateral midbrain/pontine tegmentum. Often barely visible on CT; MRI (GRE/SWI) is far more sensitive.',
      measure:'Adams grade: I = grey-white junction; II = corpus callosum; III = brainstem. Higher grade = worse prognosis.',
      pitfall:'<b>CT is normal in up to 50–80% of DAI cases</b> — clinical suspicion (GCS out of proportion to CT findings) demands urgent MRI. Microhemorrhages look like noise on standard windows; review at narrow brain windows.',
      pearl:'<b>Corpus callosum hemorrhage in the absence of other trauma findings</b> raises concern for shaken-baby syndrome (non-accidental trauma) in pediatric patients.',
      f:'[Small petechial hemorrhagic foci at the grey-white junction and corpus callosum splenium consistent with diffuse axonal injury. / Head CT without evidence of DAI; however, CT is insensitive — MRI with SWI recommended given clinical severity.]',
      i:'CT findings [consistent with / insufficient to exclude] diffuse axonal injury. MRI with susceptibility-weighted imaging recommended for complete evaluation.'
    }
  },
  {
    slug:'intraventricular-hemorrhage',
    title:'Intraventricular Hemorrhage',
    region:'neuro', system:'Ventricles',
    modality:'NCCT', sev:'urgent', emoji:'🔴',
    blurb:'Hyperdense blood layering in the occipital horns — track for hydrocephalus and source (thalamic bleed, AVM, SAH).',
    tags:['Occipital horn','Hydrocephalus','EVD threshold'],
    rp:'intraventricular-haemorrhage',
    sheet:{
      find:'<b>Hyperdense layering in the occipital horns and temporal horns</b> (dependent blood-CSF level). Assess all four ventricles and the third ventricle. Check for obstructive hydrocephalus (temporal horn enlargement, transependymal edema). Report associated IPH source (thalamic, caudate, or periventricular).',
      measure:'Note which ventricles are involved, degree of ventricular expansion, and periventricular hypodensity (transependymal CSF absorption = high ICP). <b>Graeb score</b> (1–12) can grade IVH severity.',
      pitfall:'Small amounts of IVH in the occipital horns can be subtle — compare with prior and look for dependent hyperdensity vs. choroid plexus calcification (which is bilateral, calcified, and in the typical location).',
      pearl:'Thalamic hemorrhage extending into the ventricle is the classic cause of IVH with hydrocephalus — always find the source. Isolated IVH in a young patient raises concern for AVM.',
      call:'Hydrocephalus from IVH requires urgent neurosurgical evaluation for external ventricular drain placement.',
      f:'Intraventricular hemorrhage within the [bilateral occipital horns / all four ventricles / third ventricle], with blood-CSF layering. [Obstructive hydrocephalus with temporal horn enlargement.] [Source: right thalamic hemorrhage extending into ventricle.] [Transependymal edema present.]',
      i:'Intraventricular hemorrhage [with obstructive hydrocephalus]. [Source: right thalamic IPH.] Urgent neurosurgical consultation for EVD consideration.'
    }
  },
  {
    slug:'dural-venous-sinus-thrombosis',
    title:'Dural Venous Sinus Thrombosis',
    region:'neuro', system:'Dural sinuses',
    modality:'CTV', sev:'killer', emoji:'🕸️',
    blurb:'Dense sinus on NCCT and the "empty delta sign" on CECT — CTV confirms filling defect in the dural sinuses.',
    tags:['Empty delta','Dense sinus','Venous infarct'],
    rp:'cerebral-venous-thrombosis',
    sheet:{
      find:'<b>NCCT</b>: hyperdense dural sinus (dense sinus sign), dense cortical vein (cord sign). <b>CECT</b>: <b>empty delta sign</b> — triangular contrast enhancement around a central low-density thrombus in the posterior SSS on axial CT. <b>CTV</b>: non-enhancing filling defect within the sinus; compare to contralateral and anterior SSS.',
      measure:'Identify which sinuses are involved (SSS, transverse, sigmoid, cavernous, straight sinus, cortical veins). Note any associated venous infarcts or hemorrhage (the hallmark — non-arterial-territory, often hemorrhagic, parasagittal/temporal).',
      pitfall:'<b>Arachnoid granulations</b> (smooth, rounded, low-density filling defects in the transverse or SSS) are the classic mimic on CTV — they are smooth, lateral, and adjacent to the sinus wall, not central. Also: hypoplastic/absent left transverse sinus is common.',
      pearl:'Venous infarcts do not respect arterial territory, are often bilateral and parasagittal, and are frequently hemorrhagic — this combination should always prompt DVST evaluation.',
      call:'Any confirmed DVST requires immediate neurology/hematology consultation for anticoagulation decision — even in the presence of hemorrhagic infarct.',
      f:'Non-enhancing filling defect within the [superior sagittal sinus / right transverse and sigmoid sinus] on CTV, consistent with dural venous sinus thrombosis. [Empty delta sign on CECT.] [Associated parasagittal/temporal venous hemorrhagic infarction.] [Cortical vein involvement.]',
      i:'Dural venous sinus thrombosis involving [SSS and right transverse sinus] with [associated hemorrhagic venous infarction]. Urgent neurology consultation recommended.'
    }
  },
  {
    slug:'cerebral-venous-infarct',
    title:'Cerebral Venous Infarct',
    region:'neuro', system:'Cortical/subcortical',
    modality:'NCCT', sev:'urgent', emoji:'🟣',
    blurb:'Non-arterial territory edema or hemorrhage — especially parasagittal or bilateral — should prompt CTV for venous cause.',
    tags:['Non-arterial territory','Parasagittal','Hemorrhagic edema'],
    rp:'cerebral-venous-thrombosis',
    sheet:{
      find:'<b>Focal cortical/subcortical low density or hemorrhagic foci that do not conform to an arterial territory</b>. Classic locations: parasagittal (SSS), temporal lobe (transverse sinus), thalamus (deep venous/straight sinus). Often bilateral and hemorrhagic.',
      measure:'Extent, midline shift, mass effect, and whether hemorrhage is present. Bilateral thalamic edema/hemorrhage = deep cerebral venous thrombosis of the internal cerebral veins.',
      pitfall:'Venous infarcts are routinely misclassified as arterial strokes or hypertensive hemorrhage. The key distinguishing features are non-arterial territory, bilateral or parasagittal distribution, and disproportionate hemorrhagic component.',
      pearl:'<b>Bilateral thalamic hypodensity/edema on NCCT</b> without basilar occlusion should always trigger evaluation for deep cerebral venous thrombosis (internal cerebral veins, vein of Galen, straight sinus).',
      f:'[Parasagittal / bilateral thalamic] hypodense [and hemorrhagic] lesion not conforming to an arterial territory, raising concern for venous infarction. [Associated dense sinus sign.] CTV recommended.',
      i:'[Parasagittal/thalamic] lesion with non-arterial territory distribution and hemorrhagic component — dural venous sinus thrombosis with venous infarction to be excluded. CTV head recommended.'
    }
  },
  {
    slug:'hydrocephalus',
    title:'Hydrocephalus — Obstructive vs. Communicating',
    region:'neuro', system:'Ventricles',
    modality:'NCCT', sev:'urgent', emoji:'💧',
    blurb:'Enlarged temporal horns are the earliest sign — locate the obstruction and check for transependymal edema.',
    tags:['Temporal horns','Evans index','Transependymal edema'],
    rp:'hydrocephalus',
    sheet:{
      find:'<b>Temporal horn enlargement</b> (> 2 mm in adults without atrophy) is the earliest sign. Check all four ventricles. <b>Obstructive (non-communicating)</b>: dilated ventricles proximal to obstruction with normal distal; find the level (aqueduct, foramen of Monro, fourth ventricular outlet). <b>Communicating</b>: all ventricles dilated (including fourth), sulci normal or effaced.',
      measure:'<b>Evans index</b> = max bifrontal horn width / max inner skull diameter > 0.3 = hydrocephalus. Transependymal edema: periventricular hypodensity flanking frontal horns = acute high-pressure hydrocephalus.',
      pitfall:'<b>Hydrocephalus ex vacuo</b> (atrophic enlargement) vs. true hydrocephalus: ex vacuo shows proportional sulcal and ventricular enlargement, no transependymal edema, and normal temporal horns. NPH (normal-pressure) also has enlarged sulci but with Evans > 0.3.',
      pearl:'<b>Aqueductal stenosis</b>: third and lateral ventricles dilated with normal fourth ventricle. <b>Fourth ventricular outlet obstruction</b> (Dandy-Walker, ependymitis): all four dilated with prominent fourth. Always find the level.',
      call:'Obstructive hydrocephalus with transependymal edema and clinical deterioration requires urgent neurosurgical consultation for EVD or VP shunt.',
      f:'[Symmetric / asymmetric] ventricular enlargement including bilateral temporal horns. Evans index [X]. [Transependymal periventricular hypodensity consistent with acute obstructive hydrocephalus.] Obstruction at the [aqueduct / foramen of Monro / fourth ventricular outlet] secondary to [mass / hematoma / prior infection]. [Communicating hydrocephalus — all four ventricles enlarged, sulci effaced.]',
      i:'[Obstructive/communicating] hydrocephalus with [acute transependymal edema]. [Level of obstruction: aqueduct.] Urgent neurosurgical evaluation recommended.'
    }
  },
  {
    slug:'colloid-cyst-hydrocephalus',
    title:'Colloid Cyst with Acute Hydrocephalus',
    region:'neuro', system:'Third ventricle',
    modality:'NCCT', sev:'killer', emoji:'⚠️',
    blurb:'Round hyperdense cyst at the foramen of Monro — intermittent ball-valve obstruction can cause sudden death.',
    tags:['Foramen of Monro','Ball-valve','Sudden death'],
    rp:'colloid-cyst',
    sheet:{
      find:'<b>Well-circumscribed round hyperdense (or isodense to hypodense) cyst at the roof of the third ventricle at the level of the foramen of Monro</b>. Look for asymmetric or symmetric lateral ventricular hydrocephalus.',
      measure:'Size in mm. Degree of hydrocephalus and temporal horn enlargement. A cyst > 7 mm or with significant hydrocephalus is at higher risk for acute obstruction.',
      pitfall:'Isodense or hypodense colloid cysts (15–25%) may be invisible on NCCT. If lateral ventricular hydrocephalus is present without obvious cause, scrutinize the foramen of Monro on thin axial sections or reformats.',
      pearl:'<b>Sudden death from colloid cyst</b> is caused by acute ball-valve obstruction of both foramina of Monro. Any symptomatic colloid cyst requires neurosurgical evaluation regardless of imaging severity.',
      call:'Colloid cyst with hydrocephalus and symptomatic presentation requires urgent neurosurgical consultation.',
      f:'Round [hyperdense/isodense] cyst at the roof of the third ventricle at the level of the foramen of Monro, measuring [X] mm, consistent with a colloid cyst. [Obstructive hydrocephalus with bilateral temporal horn enlargement, Evans index X.] [Transependymal edema present.]',
      i:'Colloid cyst at the foramen of Monro ([X] mm) with [obstructive hydrocephalus]. Urgent neurosurgical evaluation for surgical management.'
    }
  },
  {
    slug:'cerebral-herniation',
    title:'Cerebral Herniation Syndromes',
    region:'neuro', system:'Supratentorial/infratentorial',
    modality:'NCCT', sev:'killer', emoji:'🚨',
    blurb:'Effaced cisterns and midline shift signal herniation — subfalcine, uncal, and tonsillar each carry distinct imaging signs.',
    tags:['Uncal herniation','Effaced cisterns','Tonsillar descent'],
    rp:'cerebral-herniation',
    sheet:{
      find:'<b>Subfalcine</b>: cingulate gyrus crossing midline under the falx; midline shift in mm. <b>Uncal</b>: medial temporal lobe (uncus) displacing into suprasellar/ambient cistern; effaced ipsilateral suprasellar cistern; compressed midbrain. <b>Tonsillar</b>: cerebellar tonsils descending below the foramen magnum (> 5 mm on sagittal).',
      measure:'Midline shift in mm; temporal horn status; cisternal effacement (suprasellar, ambient, quadrigeminal). <b>Duret hemorrhage</b>: secondary brainstem hemorrhage from downward traction in uncal herniation = poor prognosis sign.',
      pitfall:'<b>Pseudo-herniation</b> after large decompressive craniectomy — the brain shifts toward the craniectomy defect, and this may paradoxically worsen sinking flap syndrome, not true herniatory compression.',
      pearl:'<b>Effacement of all basal cisterns</b> (suprasellar, ambient, and quadrigeminal) with bilateral temporal horn enlargement indicates severe herniation and impending brainstem compression — a neurosurgical emergency.',
      call:'Any herniation sign with acute clinical deterioration demands immediate neurosurgical notification. Direct conversation, not just a report.',
      f:'[Subfalcine herniation with X mm midline shift.] [Uncal herniation with medial displacement of the right uncus into the suprasellar cistern, effacement of the ipsilateral ambient cistern, and compression of the midbrain.] [Tonsillar descent X mm below the foramen magnum.] [Duret hemorrhage in midbrain tegmentum.]',
      i:'[Uncal / subfalcine / tonsillar] herniation with [basal cisternal effacement and midline shift]. [Duret hemorrhage.] Immediate neurosurgical notification.'
    }
  },
  {
    slug:'pneumocephalus',
    title:'Pneumocephalus and Tension Pneumocephalus',
    region:'neuro', system:'Extra-axial/Intraventricular',
    modality:'NCCT', sev:'urgent', emoji:'💨',
    blurb:'Air in the cranium after trauma or surgery — the "Mount Fuji sign" marks tension and is a surgical emergency.',
    tags:['Mount Fuji sign','Post-op air','CSF leak'],
    rp:'pneumocephalus',
    sheet:{
      find:'<b>Air attenuation (approximately -1000 HU)</b> within the epidural, subdural, subarachnoid, intraventricular, or intraparenchymal compartments. Subdural air is most common. Measure volume and distribution. Look for bilateral frontal subdural air separated by the falx with compression of frontal lobes.',
      measure:'<b>Mount Fuji sign</b>: bilateral subdural frontal air with compression of frontal lobes and widened interhemispheric space — indicates tension pneumocephalus. Any increasing pneumocephalus post-op warrants evaluation.',
      pitfall:'Small amounts of pneumocephalus are expected and normal after craniotomy/skull base surgery for up to several weeks. The concern is new or enlarging air, or air causing mass effect.',
      pearl:'<b>Inverted Champagne Glass sign</b> (air-fluid level in the frontal horns) suggests intraventricular pneumocephalus and often indicates a CSF fistula. Any tension signs require immediate neurosurgical decompression.',
      call:'Tension pneumocephalus (Mount Fuji sign with neurological deterioration) is a neurosurgical emergency requiring immediate communication.',
      f:'[Small/large] [subdural/epidural/intraventricular/intraparenchymal] pneumocephalus, most prominent in the [bilateral frontal subdural / right posterior fossa] region. [Mount Fuji sign present with bifrontal subdural air and frontal lobe compression — tension pneumocephalus.] [Expected post-operative findings / new or enlarging compared to prior.]',
      i:'[Tension] pneumocephalus with [Mount Fuji sign]. [Neurosurgical consultation required / Expected post-operative finding.]'
    }
  },
  {
    slug:'skull-fracture',
    title:'Skull Vault and Base Fracture',
    region:'neuro', system:'Osseous/Skull base',
    modality:'CT', sev:'urgent', emoji:'💀',
    blurb:'Trace sutures carefully — linear fractures crossing the MMA groove, temporal squamosa, or posterior fossa signal danger.',
    tags:['MMA groove','Temporal squamosa','Skull base'],
    rp:'skull-fracture',
    sheet:{
      find:'Review bone algorithm (wide window W:3000 L:600). For <b>vault fractures</b>: sharp linear lucency vs. normal sutures and vascular grooves (sutures are bilateral, vascular grooves have sclerotic margins). For <b>skull base</b>: temporal bone, orbital roof, cribriform plate, occipital condyle, clivus. Axial and coronal reconstructions essential.',
      measure:'Linear vs. depressed (measure depth in mm relative to inner table). Assess for epidural hematoma overlying temporal bone fracture (MMA). Report extension through the carotid canal (dissection risk), jugular foramen, otic capsule (sensorineural hearing loss).',
      pitfall:'<b>Vascular grooves</b> (middle meningeal artery, venous lakes) are the classic mimic of linear fractures — grooves are smooth-margined with cortication, branch in predictable patterns, and are bilateral. Fractures are sharp, irregular, non-branching, and often non-bilateral.',
      pearl:'<b>Temporal bone fracture crossing the mastoid segment of the facial nerve canal or otic capsule</b> indicates high risk of facial nerve injury and hearing loss — mention explicitly in the report.',
      f:'[Linear / Depressed] fracture of the [right temporal squamosa] crossing the [middle meningeal artery groove / otic capsule / carotid canal], with [overlying epidural hematoma / without extra-axial collection]. [Pneumocephalus adjacent to fracture site.] [Opacified mastoid air cells / hemotympanum.]',
      i:'[Right temporal] skull fracture crossing [MMA groove] with [overlying epidural hematoma]. [Facial nerve canal / otic capsule involvement — otologic consultation recommended.]'
    }
  },
  {
    slug:'brain-abscess',
    title:'Brain Abscess',
    region:'neuro', system:'Supratentorial',
    modality:'CT', sev:'urgent', emoji:'🦠',
    blurb:'Ring-enhancing lesion with smooth thin wall, central DWI restriction — thick irregular enhancement favors GBM.',
    tags:['Ring enhancement','Thin smooth wall','DWI restriction'],
    rp:'cerebral-abscess',
    sheet:{
      find:'<b>Ring-enhancing lesion</b> with smooth, thin, regular wall and central low attenuation (pus), surrounded by vasogenic edema. May have a "daughter abscess." Look for source: adjacent sinusitis, temporal bone infection, dental infection, or foreign body. Subependymal spread indicates severe disease.',
      measure:'Lesion size. Wall thickness (thin/smooth = abscess; thick/irregular = tumor). Degree of mass effect and midline shift. Multiple abscesses suggest hematogenous spread.',
      pitfall:'<b>GBM vs. abscess</b>: both ring-enhance but abscess wall is smooth, thin, and complete; GBM wall is thick, nodular, and incomplete. DWI (MRI) is the discriminator — abscess restricts centrally (bright DWI/dark ADC).',
      pearl:'<b>Subependymal rupture of abscess</b> into the ventricle (ependymitis/ventriculitis) is a life-threatening complication — look for ventricular debris, ependymal enhancement, and IVH.',
      call:'New ring-enhancing lesion with subependymal spread or ventricular rupture requires urgent neurosurgical and infectious disease consultation.',
      f:'[Single / Multiple] ring-enhancing lesion(s) within the [right frontal lobe], measuring [X] mm, with smooth thin enhancing wall, central low attenuation, and surrounding vasogenic edema. [Subependymal spread / ependymal enhancement.] [Adjacent [paranasal sinus / temporal bone] infection as possible source.]',
      i:'Ring-enhancing lesion in the [right frontal lobe] with smooth thin wall, consistent with brain abscess. [Adjacent sinusitis as possible source.] [Ventriculitis/ependymitis — urgent neurosurgical and ID consultation.]'
    }
  },
  {
    slug:'hsv-encephalitis',
    title:'HSV Encephalitis',
    region:'neuro', system:'Limbic/Temporal',
    modality:'CT', sev:'killer', emoji:'🔬',
    blurb:'Asymmetric temporal and insular edema on CT — start empiric acyclovir before MRI, LP, or PCR results.',
    tags:['Temporal lobe','Insular cortex','Early CT-negative'],
    rp:'herpes-simplex-encephalitis',
    sheet:{
      find:'<b>Asymmetric, often bilateral temporal lobe and insular cortex low attenuation</b> (edema/gyral swelling) with associated gyral enhancement. May extend to cingulate gyrus. CT is often <b>normal in early disease</b> (first 3–5 days) — MRI is far more sensitive (DWI, FLAIR).',
      measure:'Extent of temporal lobe involvement, mass effect, midline shift. Bilateral but asymmetric involvement is classic. Hemorrhagic components are a late finding indicating severe disease.',
      pitfall:'<b>Early CT is frequently normal</b> — a temporal lobe hypodensity in a febrile encephalopathic patient is virtually diagnostic, but the absence of CT findings does not exclude HSV encephalitis. Start acyclovir empirically; get MRI.',
      pearl:'Involvement of the <b>insular ribbon and medial temporal lobe bilaterally</b> (often asymmetric) with sparing of the basal ganglia is the hallmark pattern of HSV-1 encephalitis. Any alternative diagnosis should explain this pattern.',
      call:'Suspected HSV encephalitis requires immediate empiric IV acyclovir — do not delay for LP or MRI. Communicate findings directly.',
      f:'[Subtle / Moderate] asymmetric low attenuation within the [right > left] medial temporal lobe and insular cortex, with gyral swelling and [no / mild] enhancement. [No midline shift.] [Findings are suspicious for HSV encephalitis / CT is without definitive abnormality; clinical suspicion warrants MRI and empiric acyclovir.]',
      i:'[Asymmetric temporal and insular edema suspicious for HSV encephalitis. / CT without definitive abnormality; clinical suspicion for HSV encephalitis — MRI and empiric acyclovir recommended.] Communicated to [provider].'
    }
  },
  {
    slug:'meningitis-imaging',
    title:'Meningitis — CT Imaging Signs',
    region:'neuro', system:'Meninges/Leptomeninges',
    modality:'CT', sev:'urgent', emoji:'🌡️',
    blurb:'CT is usually negative in meningitis — its role is to exclude contraindications to LP and detect complications.',
    tags:['Pre-LP CT','Leptomeningeal enhancement','Complication screen'],
    rp:'meningitis',
    sheet:{
      find:'CT is primarily to <b>exclude contraindications to LP</b>: mass lesion, obstructive hydrocephalus, midline shift, or herniation. Complications to identify: <b>subdural empyema</b> (hyperdense extra-axial collection with restricted diffusion), <b>hydrocephalus</b>, <b>venous thrombosis</b>, cerebritis, and vasculitis-related infarcts.',
      measure:'Note any mass effect, ventricular size, cisternal effacement. Leptomeningeal enhancement (CECT) — sulcal enhancement conforming to gyri. Subdural empyema vs. hygroma: empyema is denser and enhances peripherally.',
      pitfall:'<b>Normal CT does not exclude meningitis</b> — LP remains the diagnostic test. Conversely, do not omit CT when the clinical picture includes focal deficit, new seizure, altered consciousness, or papilledema, as these warrant pre-LP imaging.',
      pearl:'<b>Subdural empyema</b> is a surgical emergency that complicates bacterial meningitis — look for a thin hyperdense subdural collection with peripheral enhancement and restricted diffusion, especially adjacent to frontal sinuses.',
      call:'Subdural empyema or brain abscess complicating meningitis requires immediate neurosurgical consultation.',
      f:'[No mass lesion, midline shift, herniation, or obstructive hydrocephalus — CT does not contraindicate LP. / Complications present:] [Subdural empyema overlying right frontal lobe.] [Communicating hydrocephalus.] [Leptomeningeal enhancement in multiple sulci.]',
      i:'[No contraindication to LP identified. / CT demonstrates complications of meningitis: subdural empyema / hydrocephalus.] [Neurosurgical consultation recommended for empyema.]'
    }
  },
  {
    slug:'brain-metastases',
    title:'Brain Metastases',
    region:'neuro', system:'Supratentorial/Infratentorial',
    modality:'CT', sev:'urgent', emoji:'🔵',
    blurb:'Multiple ring-enhancing lesions at grey-white junction with disproportionate edema — always check the posterior fossa.',
    tags:['Grey-white junction','Multiple lesions','Vasogenic edema'],
    rp:'brain-metastases',
    sheet:{
      find:'<b>Multiple (sometimes solitary) round enhancing lesions at the grey-white junction</b> (watershed zone for emboli) surrounded by disproportionate vasogenic edema (finger-like white matter extension). Common tumors: lung, breast, melanoma, renal cell, colon. Check posterior fossa systematically — metastases commonly involve cerebellum.',
      measure:'Number, size (largest lesion), location. Total lesion burden. Mass effect and midline shift. Herniation signs.',
      pitfall:'<b>Solitary metastasis vs. primary brain tumor vs. abscess</b> — MRI with perfusion is needed for definitive characterization. Ring-enhancing single lesion in HIV/immunocompromised patient = toxoplasmosis until proven otherwise.',
      pearl:'<b>Leptomeningeal carcinomatosis</b> may show only subtle sulcal/cistern enhancement on CECT — look for enhancement conforming to the sulci and basal cisterns in a cancer patient with meningismus.',
      f:'[Multiple / Solitary] ring-enhancing or solid-enhancing lesion(s) at the grey-white junction in the [right frontal, left cerebellar] regions, measuring up to [X] mm, with surrounding vasogenic edema. [X mm midline shift.] [Leptomeningeal enhancement.] [Known primary: X].',
      i:'Multiple enhancing lesions at the grey-white junction consistent with brain metastases. [Known primary: lung cancer.] Oncology and neurosurgery notification. MRI brain with/without contrast recommended.'
    }
  },
  {
    slug:'glioblastoma',
    title:'Glioblastoma (GBM)',
    region:'neuro', system:'Supratentorial white matter',
    modality:'CT', sev:'urgent', emoji:'🔴',
    blurb:'Irregular thick ring enhancement crossing the corpus callosum with necrosis — "butterfly glioma" is GBM until proven otherwise.',
    tags:['Butterfly glioma','Necrotic core','Corpus callosum crossing'],
    rp:'glioblastoma',
    sheet:{
      find:'<b>Heterogeneous mass with thick, irregular ring enhancement surrounding a central necrotic low-attenuation core</b>, deep white matter or callosal involvement. Classic "butterfly glioma" crosses the corpus callosum to involve both hemispheres. Large surrounding vasogenic and infiltrative edema.',
      measure:'Lesion dimensions. Corpus callosum involvement. Midline shift. Satellite lesions (multifocal vs. multicentric GBM).',
      pitfall:'<b>GBM vs. brain abscess</b>: GBM wall is thick, irregular, and nodular; abscess wall is smooth and thin. GBM vs. metastasis: metastasis is at grey-white junction and has less infiltrative edema; GBM arises from white matter with more infiltration. MRI/perfusion/spectroscopy needed.',
      pearl:'Corpus callosum involvement with bilateral hemispheric spread (<b>butterfly pattern</b>) is essentially pathognomonic for GBM (or lymphoma). Lymphoma is typically homogeneously enhancing in immunocompetent patients.',
      f:'Heterogeneous right [frontal/temporal/parietal] mass with thick irregular ring enhancement, central necrosis, and extensive surrounding vasogenic edema. [Corpus callosum invasion with butterfly configuration.] [X] mm midline shift. [Ependymal spread / leptomeningeal involvement.]',
      i:'Imaging features highly suspicious for high-grade primary brain neoplasm (glioblastoma). [Butterfly configuration.] Neurosurgery and neuro-oncology consultation. Urgent MRI brain with/without contrast and perfusion recommended.'
    }
  },
  {
    slug:'hypoxic-ischemic-injury',
    title:'Hypoxic-Ischemic Brain Injury',
    region:'neuro', system:'Diffuse/Global',
    modality:'NCCT', sev:'killer', emoji:'🫁',
    blurb:'Loss of grey-white differentiation throughout all territories after cardiac arrest — reversal sign signals severe injury.',
    tags:['Grey-white loss','Reversal sign','Diffuse swelling'],
    rp:'hypoxic-ischaemic-brain-injury',
    sheet:{
      find:'Diffuse loss of <b>grey-white differentiation throughout multiple vascular territories</b> (not following one arterial territory), sulcal effacement, diffuse cerebral swelling, basal ganglia and cortex hypoattenuation. In severe cases, <b>reversal sign</b>: cerebral cortex/basal ganglia appear dense relative to diffusely low-density white matter.',
      measure:'Extent of grey-white loss (focal vs. diffuse). Whether basal ganglia are involved (prognostic). Look for <b>pseudosubarachnoid hemorrhage</b> (diffuse high attenuation in cisterns/sulci due to relative cerebral hypodensity in severe HII — not true blood).',
      pitfall:'<b>Pseudo-SAH</b>: in severe cerebral edema after HII, the blood/CSF attenuation difference is lost and cisterns appear falsely hyperdense. Measure cistern HU — true SAH > 40–50 HU; pseudo-SAH is lower (~35–40 HU).',
      pearl:'<b>Basal ganglia involvement in HII</b> correlates with severe/near-total injury. The "reversal sign" (white matter appears denser than cortex) indicates profound, typically fatal injury.',
      call:'Diffuse HII with reversal sign or pseudo-SAH indicates severe brain injury — immediate neurological assessment and family communication are critical.',
      f:'Diffuse loss of grey-white differentiation throughout [bilateral cerebral hemispheres and basal ganglia] with sulcal effacement and cerebral swelling. [Reversal sign present.] [Pseudo-SAH: hyperdense basilar cisterns, HU X, likely representing relative hyperdensity rather than true SAH in context of diffuse edema.] [Cerebellum relatively spared / involved.]',
      i:'Imaging consistent with severe diffuse hypoxic-ischemic brain injury. [Reversal sign present — poor prognosis.] [Pseudo-SAH.] Immediate neurology consultation and family discussion.'
    }
  },
  {
    slug:'pres',
    title:'Posterior Reversible Encephalopathy Syndrome (PRES)',
    region:'neuro', system:'Parieto-occipital',
    modality:'CT', sev:'urgent', emoji:'👁️',
    blurb:'Symmetric parieto-occipital cortical/subcortical edema in hypertensive crisis or eclampsia — CT may be subtle; get MRI.',
    tags:['Parieto-occipital edema','Hypertensive emergency','Eclampsia'],
    rp:'posterior-reversible-encephalopathy-syndrome',
    sheet:{
      find:'<b>Bilateral symmetric cortical and subcortical low attenuation in parieto-occipital lobes</b>, representing vasogenic edema (venous outflow theory). Can extend to frontal lobes, brainstem, and cerebellum. Triggered by hypertension, eclampsia, immunosuppressants (tacrolimus, cyclosporine), chemotherapy, renal failure.',
      measure:'Extent of involvement: parieto-occipital only vs. additional frontal/temporal/cerebellar/brainstem. Any hemorrhagic components (petechial hemorrhage occurs in up to 20% of PRES). CT is less sensitive than MRI-FLAIR.',
      pitfall:'<b>CT is frequently underestimated or normal in PRES</b> — bilateral occipital hypodensity on NCCT in the right clinical context is suspicious but MRI-FLAIR is the gold standard. Basilar artery thrombosis can cause similar occipital ischemia — check the basilar on CTA.',
      pearl:'<b>Frontal lobe involvement in PRES</b> is associated with more severe disease and worse outcome. Hemorrhagic PRES (petechial or confluent blood) = atypical and needs close follow-up.',
      f:'Bilateral [parieto-occipital / parieto-occipital and frontal / diffuse] subcortical low-attenuation consistent with vasogenic edema. [Petechial hemorrhagic foci.] Clinical context: [hypertensive emergency / eclampsia / tacrolimus toxicity]. [CT is subtle — MRI-FLAIR recommended for complete characterization.]',
      i:'CT findings [suspicious for / consistent with] PRES in setting of [hypertensive emergency/eclampsia]. [Hemorrhagic component.] MRI brain urgently recommended. Immediate BP management.'
    }
  },
  {
    slug:'pituitary-apoplexy',
    title:'Pituitary Apoplexy',
    region:'neuro', system:'Sella/Parasellar',
    modality:'CT', sev:'killer', emoji:'🌡️',
    blurb:'Acute hemorrhage or infarction in a pituitary adenoma — sudden headache, visual loss, and ophthalmoplegia demand immediate CT/MRI.',
    tags:['Sellar hyperdensity','Visual loss','CN III palsy'],
    rp:'pituitary-apoplexy',
    sheet:{
      find:'<b>Hyperdense or heterogeneous sellar mass</b> on NCCT representing hemorrhage into a pituitary adenoma. May have suprasellar extension and compression of the optic chiasm. Assess for cavernous sinus invasion (sphenoid sinus blood, lateral extension). CT can be negative — MRI is more sensitive.',
      measure:'Sellar mass dimensions, suprasellar extension, optic chiasm position, and cavernous sinus involvement. Any sphenoid sinus fluid (blood from apoplexy).',
      pitfall:'CT is frequently normal or shows only subtle sellar expansion in pituitary apoplexy — do not dismiss the diagnosis based on a normal CT in a patient with thunderclap headache and visual changes. Proceed to MRI.',
      pearl:'<b>Pituitary apoplexy can mimic SAH</b> (thunderclap headache, meningismus) — if SAH work-up is negative and symptoms persist, obtain dedicated pituitary MRI. Cortisol deficiency from apoplexy is an Addisonian crisis — steroid replacement may be life-saving.',
      call:'Pituitary apoplexy with visual loss or ophthalmoplegia requires urgent neurosurgical and endocrinological consultation — emergency decompression may preserve vision.',
      f:'Enlarged sellar region with [hyperdense / heterogeneous] pituitary mass [X × Y × Z] mm on NCCT, representing [hemorrhage into / infarction of] a pituitary adenoma. [Suprasellar extension with proximity to optic chiasm.] [Sphenoid sinus opacification / air-fluid level.] [Cavernous sinus involvement.]',
      i:'Pituitary apoplexy with [suprasellar extension and optic chiasm compression]. Urgent neurosurgical and endocrinology consultation. [Emergency decompression for visual symptoms.]'
    }
  },
  {
    slug:'cavernous-sinus-thrombosis',
    title:'Cavernous Sinus Thrombosis',
    region:'neuro', system:'Cavernous sinus',
    modality:'CTV', sev:'killer', emoji:'🔺',
    blurb:'Septic or aseptic cavernous sinus thrombosis — look for non-enhancing filling defect and adjacent orbital fat stranding.',
    tags:['Filling defect','Proptosis','Septic source'],
    rp:'cavernous-sinus-thrombosis',
    sheet:{
      find:'<b>CECT/CTV</b>: non-enhancing filling defect within the cavernous sinus with bulging lateral margin (normally concave). Bilaterality is common. Look for <b>associated orbital signs</b>: proptosis, periorbital soft tissue swelling, superior ophthalmic vein enlargement and thrombosis, and orbital fat infiltration. Identify septic source (sphenoid sinusitis, orbital cellulitis, dental infection).',
      measure:'Lateral cavernous sinus convexity vs. normal slight concavity. Superior ophthalmic vein diameter (> 2.5 mm suspicious). Bilateral involvement. Associated intracranial extension.',
      pitfall:'Early cavernous sinus thrombosis can be subtle — compare bilateral cavernous sinus shape and enhancement. Superior ophthalmic vein thrombosis/enlargement is an early and sensitive sign.',
      pearl:'<b>Septic cavernous sinus thrombosis</b> (most common source: sphenoid sinusitis or facial furuncle) is a neurosurgical/ENT emergency with high mortality — do not delay antibiotic initiation for imaging completion.',
      call:'Suspected cavernous sinus thrombosis requires immediate neurology, neurosurgery, and ophthalmology/ENT consultation with urgent anticoagulation and antibiotics (if septic).',
      f:'Non-enhancing filling defect within the [right / bilateral] cavernous sinus with convex lateral margin, consistent with cavernous sinus thrombosis. [Superior ophthalmic vein enlargement and thrombosis.] [Proptosis and periorbital fat stranding.] [Ipsilateral sphenoid sinusitis as septic source.]',
      i:'[Bilateral / right] cavernous sinus thrombosis [with superior ophthalmic vein involvement]. [Septic source: sphenoid sinusitis.] Immediate neurology, ENT, and ophthalmology consultation. Anticoagulation and antibiotics.'
    }
  },
  {
    slug:'cerebellar-posterior-fossa-infarct',
    title:'Cerebellar and Posterior Fossa Infarct',
    region:'neuro', system:'Posterior fossa',
    modality:'NCCT', sev:'killer', emoji:'🧠',
    blurb:'Early cerebellar infarct may look subtly hypodense — hemorrhagic transformation and swelling can cause fatal hydrocephalus within 48–72 hours.',
    tags:['PICA territory','Effaced fourth ventricle','Malignant edema'],
    rp:'cerebellar-infarct',
    sheet:{
      find:'Subtle <b>hypodensity in a cerebellar territory</b> (PICA: posterior-inferior cerebellar; AICA: anterior-inferior; SCA: superior cerebellar). Loss of grey-white differentiation in the folia. Look for <b>effacement of the fourth ventricle</b>, obstructive hydrocephalus, compression of the brainstem, and ascending transtentorial herniation.',
      measure:'Extent of involvement (one vs. bilateral hemispheres). Fourth ventricular position and patency. Temporal horn size (obstructive hydrocephalus). Brainstem compression.',
      pitfall:'<b>Early cerebellar infarct is notoriously subtle on CT</b> — bone artifact in the posterior fossa reduces sensitivity. MRI-DWI is required if clinical suspicion exists. A "normal" posterior fossa CT in a vertiginous patient with CN signs does not exclude cerebellar stroke.',
      pearl:'<b>Large cerebellar infarct</b> (> 1/3 of hemisphere) with edema is a life-threatening condition — malignant swelling can cause acute obstructive hydrocephalus and brainstem compression within 24–48 hours, requiring emergent suboccipital decompression.',
      call:'Cerebellar infarct with fourth ventricular effacement, brainstem compression, or hydrocephalus requires immediate neurosurgical consultation.',
      f:'[Subtle / Moderate / Extensive] low attenuation within the [right PICA / bilateral cerebellar] territory with [loss of folial grey-white differentiation]. [Fourth ventricle effaced / patent.] [Obstructive hydrocephalus with temporal horn enlargement.] [Brainstem compression.] [Hemorrhagic transformation.]',
      i:'[Large right cerebellar (PICA territory)] infarct with [fourth ventricular effacement and obstructive hydrocephalus]. Immediate neurosurgical consultation for decompression consideration.'
    }
  },
  {
    slug:'septic-emboli-mycotic-aneurysm',
    title:'Septic Emboli and Mycotic Aneurysm',
    region:'neuro', system:'Supratentorial/Peripheral vessels',
    modality:'CTA', sev:'killer', emoji:'🦠',
    blurb:'Peripheral irregular aneurysms in a bacteremic patient — different from berry aneurysms and carry rupture risk during antibiotic therapy.',
    tags:['Peripheral aneurysm','Endocarditis','Hemorrhagic emboli'],
    rp:'mycotic-aneurysm',
    sheet:{
      find:'<b>Septic emboli</b>: multiple small peripheral hemorrhagic and ischemic foci at the grey-white junction, often in watershed zones. <b>Mycotic aneurysm on CTA</b>: irregular, lobulated, <b>peripheral (distal MCA) aneurysm</b> — distinct from typical proximal circle of Willis berry aneurysms. May be multiple. Clinical context: endocarditis, IV drug use, bacteremia.',
      measure:'Number and distribution of embolic foci. Aneurysm location (peripheral vs. proximal), size, and morphology. Any SAH or IPH suggesting rupture.',
      pitfall:'<b>Mycotic aneurysms can enlarge and rupture during antibiotic treatment</b> — serial imaging is required. They can be missed on initial CTA if small; CTA resolution limits detection of < 3 mm aneurysms.',
      pearl:'In any patient with bacteremia/endocarditis and intracranial hemorrhage — especially lobar or peripheral IPH — <b>mycotic aneurysm must be excluded by dedicated CTA and DSA</b>. DSA remains gold standard.',
      call:'Suspected mycotic aneurysm requires immediate neurosurgical, neurovascular, and infectious disease consultation. Serial imaging is essential.',
      f:'[Multiple peripheral haemorrhagic/ischemic foci at the grey-white junction consistent with septic emboli.] [Irregular lobulated peripheral [right M3/M4 MCA] aneurysm measuring [X] mm, morphologically consistent with mycotic aneurysm.] Clinical context: [endocarditis / bacteremia].',
      i:'[Septic cerebral emboli with peripheral hemorrhagic infarcts.] [Peripheral MCA mycotic aneurysm — rupture risk.] Neurovascular, neurosurgery, and ID consultation. Serial CTA recommended. DSA for definitive characterization.'
    }
  }
]);
