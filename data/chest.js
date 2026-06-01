/* Region: Chest and Airway — lung, pleura, mediastinum, esophagus, chest trauma. */
ERCT.add([
  {
    slug:'pulmonary-embolism', title:'Pulmonary Embolism', region:'chest', system:'CTPA',
    modality:'CTPA', sev:'killer', emoji:'🫁',
    blurb:'Filling defects saddle to subsegmental, acute vs chronic, and the right-heart strain markers.',
    tags:['Saddle','RV:LV ratio','Infarct'], rp:'pulmonary-embolism',
    href:'pe/pulmonary-embolism.html'
  },
  {
    slug:'tension-pneumothorax', title:'Tension Pneumothorax', region:'chest', system:'Pleura',
    href:'pneumothorax/pneumothorax.html',
    modality:'CT chest', sev:'killer', emoji:'💨',
    blurb:'Air under pressure collapses the lung, shifts the mediastinum, and obstructs venous return — do not scan, decompress.',
    tags:['Mediastinal shift','Hemidiaphragm inversion','Tracheal deviation'], rp:'tension-pneumothorax',
    sheet:{
      call:'<b>Mediastinal shift away from the side of pneumothorax + hemidiaphragm inversion</b> = tension physiology — immediate needle decompression before any further imaging.',
      find:'Large pneumothorax with <b>contralateral mediastinal shift</b>, ipsilateral hemidiaphragm flattening or inversion, and compression/collapse of the ipsilateral lung. IVC compression may be visible.',
      measure:'Pneumothorax size by Collins method or largest interpleural distance at the hilum. Tension is a clinical-radiologic diagnosis — do not wait for a formal percentage.',
      pitfall:'A large simple pneumothorax can mimic tension on supine CXR; CT confirms direction of shift and identifies contralateral pneumothorax in multiply-injured patients.',
      pearl:'The trachea deviates <i>away</i> from the tension side; the ipsilateral hemidiaphragm inverts; the heart is bowed contralaterally. On a supine trauma CT, even a moderate anterior pneumothorax can be under tension.',
      f:'Large [right] pneumothorax with contralateral mediastinal shift [X] cm to the left, inversion of the [right] hemidiaphragm, and near-complete [right] lung collapse. No contralateral pneumothorax.',
      i:'Large [right] tension pneumothorax with mediastinal shift. Clinical correlation and immediate decompression recommended.'
    }
  },
  {
    slug:'simple-pneumothorax', title:'Simple and Occult Pneumothorax', region:'chest', system:'Pleura',
    modality:'CT chest', sev:'urgent', emoji:'💨',
    blurb:'Pleural air from trauma or spontaneous rupture — CT reveals occult pneumothoraces missed on supine chest radiograph.',
    tags:['Deep sulcus','Anterior air','Occult PTX'], rp:'pneumothorax',
    diagram:{ svg:'<svg viewBox="0 0 260 170" role="img" aria-label="Pneumothorax axial schematic"><rect width="260" height="170" rx="6" fill="#070a0e"/><ellipse cx="130" cy="92" rx="118" ry="70" fill="#11161e" stroke="#33404f" stroke-width="3"/><path d="M78,44 Q150,36 188,72 Q204,92 188,116 Q150,150 78,142 Q52,92 78,44 Z" fill="#2b3a4d"/><path d="M78,44 Q150,36 188,72 Q204,92 188,116 Q150,150 78,142" fill="none" stroke="#ff4d5e" stroke-width="2.5"/><text class="dgm-label sm" x="150" y="22" text-anchor="middle">lucent pleural air, no markings</text><text class="dgm-teal" style="font:700 12px system-ui" x="120" y="98" text-anchor="middle">lung</text><text class="dgm-crit" style="font:600 10px system-ui" x="206" y="64">visceral pleural line</text></svg>', caption:'The lung retracts from the chest wall; the crescent of <b>lucent pleural air</b> with no lung markings lies peripheral to the thin <b>visceral pleural line</b>. On supine CT it collects anteriorly, often occult on the supine radiograph.' },
    sheet:{
      find:'Air in the pleural space, best seen anteriorly on supine CT. Assess for lung re-expansion, visceral pleural line, and whether air is free or loculated.',
      measure:'Measure the largest interpleural distance. Consensus threshold for drainage: >2 cm rim (BTS) or >3 cm apex (ACCP) on CXR; any ventilated patient needs chest tube regardless of size.',
      pitfall:'<b>Skin folds</b> on CXR mimic a pleural line — CT will definitively distinguish. On supine CT, air layers anteriorly (\'deep sulcus sign\' on frontal view).',
      pearl:'Occult pneumothorax (seen on CT, not CXR) can be managed conservatively in stable non-ventilated patients; serial imaging and observation are acceptable.',
      f:'[Small / moderate / large] [right / left / bilateral] pneumothorax with a maximal interpleural distance of [X] cm. [The mediastinum is midline.] [No hemothorax.]',
      i:'[Small] [right] pneumothorax. No tension physiology. Recommend clinical correlation for drainage decision.'
    }
  },
  {
    slug:'hemothorax', title:'Hemothorax', region:'chest', system:'Pleura',
    modality:'CT chest', sev:'urgent', emoji:'🩸',
    blurb:'Blood in the pleural space after trauma or vessel rupture — density, volume, and active bleeding source drive management.',
    tags:['Hyperdense effusion','Active extravasation','Hemopneumothorax'], rp:'haemothorax',
    sheet:{
      call:'<b>Active contrast extravasation</b> into the pleural space or rapidly expanding hemothorax requires emergent IR or surgical intervention.',
      find:'Pleural fluid measuring <b>35–70 HU</b> (acute blood) on non-contrast or <b>heterogeneous high-density clot</b> mixed with lower-density fluid. Assess for active arterial blush on CTA.',
      measure:'Estimate volume: each cm of layering fluid on CXR ≈ 200 mL. CT allows volumetric estimation. >1500 mL (or ongoing loss >200 mL/h) = massive hemothorax requiring surgery.',
      pitfall:'Exudative effusions can reach 35–45 HU — always correlate with mechanism. Clotted hemothorax appears heterogeneous with mixed density. Hematocrit sign (layering cells) develops over hours.',
      pearl:'Look carefully for the <b>source vessel</b>: intercostal artery (rib fracture/shear), internal mammary, subclavian, or pulmonary vessel injury. CTA in arterial phase is essential.',
      f:'[Moderate / large] [right] pleural collection measuring [X] HU consistent with hemothorax, [with an estimated volume of X mL]. [Active arterial extravasation identified at X location.] [Associated rib fractures at ribs X–X.]',
      i:'[Moderate] [right] hemothorax. [Active extravasation suggesting arterial injury — urgent vascular surgery consultation.]'
    }
  },
  {
    slug:'pleural-effusion', title:'Pleural Effusion — Transudate vs Exudate', region:'chest', system:'Pleura',
    modality:'CT chest', sev:'routine', emoji:'💧',
    blurb:'CT characterizes effusion density and pleural enhancement to distinguish transudate, exudate, blood, and chyle.',
    tags:['HU density','Pleural enhancement','Loculated'], rp:'pleural-effusion',
    sheet:{
      find:'Free-flowing dependent pleural fluid. Measure HU on non-contrast: <b>0–15 HU</b> = transudate; <b>~15–30 HU</b> = exudate/protein-rich; <b>35–70 HU</b> = acute blood; <b>negative HU</b> = chyle/lipid (significant overlap — use as a guide). Post-contrast: smooth uniform pleural enhancement = benign; nodular/irregular = malignant or empyema.',
      measure:'Volume estimation: sum of cross-sectional areas × slice thickness, or use the ellipsoid method (L × W × H × 0.5). Report if unilateral, bilateral, or asymmetric.',
      pitfall:'Post-contrast density of fluid is unreliable for characterization — always check pre-contrast series if available. Loculation can be mistaken for a solid pleural mass.',
      pearl:'<b>Split-pleura sign</b> (enhancing visceral and parietal pleura separated by fluid) indicates empyema / complicated parapneumonic effusion. Bilateral symmetric low-density effusions favor a transudate (CHF, cirrhosis, nephrotic).',
      f:'[Small / moderate / large] [right / bilateral] pleural effusion measuring [X] HU on non-contrast images. [Smooth / nodular] pleural enhancement. [No loculation / complex loculation identified.]',
      i:'[Moderate bilateral] pleural effusions, density consistent with [transudate / exudate]. [Recommend clinical correlation with Light\'s criteria.]'
    }
  },
  {
    slug:'empyema', title:'Empyema — Split-Pleura Sign', region:'chest', system:'Pleura',
    modality:'CT chest', sev:'urgent', emoji:'🦠',
    blurb:'Infected pleural collection with enhancing split pleura, loculation, and thickening — CT guides drainage and excludes lung abscess.',
    tags:['Split-pleura sign','Loculated','Pleural thickening'], rp:'empyema',
    sheet:{
      call:'Empyema with <b>tension physiology</b>, mediastinal shift, or suspicion for bronchopleural fistula (air-fluid level communicating with bronchi) requires urgent thoracic surgery consultation.',
      find:'<b>Split-pleura sign</b>: both visceral and parietal pleura are thickened and <b>separately enhance</b>, displaced by the fluid collection. Internal loculations, gas bubbles within the fluid, and adjacent lung atelectasis/consolidation.',
      measure:'Report collection dimensions in three planes, number and size of loculations, and any associated lung parenchymal abnormality (underlying pneumonia, abscess).',
      pitfall:'Parapneumonic empyema can look identical to a peripheral lung abscess — <b>the key distinction</b>: empyema forms an obtuse angle with the chest wall and compresses lung; abscess is spherical with acute margins and bronchial supply.',
      pearl:'CT-guided drainage is first-line; fibrinopurulent stage (dense loculations, fibrin strands) may need intrapleural tPA/DNase or VATS. Report the safest window for thoracentesis.',
      f:'Loculated [right] pleural collection measuring [X × X × X] cm with <b>split-pleura enhancement</b>, [internal gas bubbles], and [adjacent lower lobe consolidation]. No pneumothorax.',
      i:'CT findings consistent with [right] empyema. Recommend urgent drainage and infectious disease consultation.'
    }
  },
  {
    slug:'community-acquired-pneumonia', title:'Community-Acquired Pneumonia', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'🦠',
    blurb:'Lobar or segmental consolidation with air bronchograms — characterize distribution, severity, and complications.',
    tags:['Consolidation','Air bronchogram','Parapneumonic'], rp:'pneumonia',
    sheet:{
      find:'<b>Lobar / segmental consolidation</b> with air bronchograms. Assess extent (number of lobes), bilateral vs unilateral, GGO (viral vs early bacterial), and complications: necrotizing pneumonia (gas in consolidation), abscess (walled cavity), parapneumonic effusion.',
      measure:'PSI / PORT or CURB-65 inputs inform severity; radiologically report the number of lobes involved and any cavity formation. Multilobar bilateral = severe / ICU consideration.',
      pitfall:'<b>Cryptogenic organizing pneumonia (COP)</b> mimics bacterial CAP — subacute course, peripheral band-like consolidation, and failure to improve on antibiotics are clues. Obstructive post-stenotic pneumonia warrants bronchoscopy.',
      pearl:'Rounded pneumonia (especially in adults) should raise concern for primary lung malignancy — short-term follow-up CT is warranted once acute illness resolves.',
      f:'[Right lower lobe] consolidation with air bronchograms involving [X] lobe(s). [Small associated parapneumonic effusion.] [No cavitation or necrotizing change.] [No adenopathy.]',
      i:'CT findings consistent with [right lower lobe] community-acquired pneumonia. [Recommend follow-up chest CT in 6–8 weeks to confirm resolution and exclude underlying mass.]'
    }
  },
  {
    slug:'aspiration-pneumonia', title:'Aspiration Pneumonia and Pneumonitis', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'🤢',
    blurb:'Dependent consolidation or ground-glass in the posterior segments and lower lobes — gravity and aspiration mechanism drive distribution.',
    tags:['Dependent segments','Tree-in-bud','Foreign body'], rp:'aspiration-pneumonia',
    sheet:{
      find:'Consolidation or GGO in <b>gravity-dependent lung segments</b>: posterior upper lobe (S2), superior lower lobe (S6), and posterior basilar lower lobes. In upright patients, basilar predominance. Look for <b>tree-in-bud</b> nodularity (bronchiolitis) and airway foreign body.',
      measure:'Assess volume of affected parenchyma and bilateral involvement. Foreign body: report location, radiodensity, and evidence of post-obstructive atelectasis or air trapping.',
      pitfall:'Chemical pneumonitis (Mendelson syndrome) peaks 24–48 hours and may appear rapidly; initial CT may underestimate extent. Lipoid pneumonia from mineral oil aspiration shows fat-density consolidation (negative HU).',
      pearl:'<b>Tree-in-bud</b> nodularity extending from central to peripheral airway = aspiration bronchiolitis. A solitary hyperdense endobronchial lesion in an at-risk patient = aspirated foreign body.',
      f:'Consolidation and [ground-glass opacity] in the [posterior segments of both lower lobes / right lower lobe] consistent with aspiration. [Tree-in-bud nodularity in the [right lower lobe].] [No endobronchial foreign body identified.]',
      i:'CT pattern consistent with aspiration pneumonia/pneumonitis in the [bilateral lower lobes]. [Recommend aspiration precautions and clinical correlation.]'
    }
  },
  {
    slug:'pulmonary-edema-ards', title:'Pulmonary Edema and ARDS', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'💦',
    blurb:'Bilateral GGO and consolidation — central cardiogenic edema vs diffuse heterogeneous ARDS with dependent consolidation.',
    tags:['GGO','Crazy-paving','Dependent gradient'], rp:'pulmonary-oedema',
    sheet:{
      find:'<b>Cardiogenic edema</b>: bilateral perihilar GGO/consolidation with smooth septal thickening (Kerley B), pleural effusions, cardiomegaly, and peribronchovascular cuffing. <b>ARDS</b>: diffuse bilateral GGO with dependent consolidation, <i>anterior</i> sparing (gravitational gradient), no or minimal pleural effusion, barotrauma (pneumothorax, pneumomediastinum in ventilated patients).',
      measure:'CT-based ARDS severity: percent lung aeration on expiratory CT; morphologic: focal (posterior consolidation, anterior GGO) vs non-focal (diffuse). Cardiomegaly: cardiothoracic ratio >0.55 on PA.',
      pitfall:'<b>Crazy-paving</b> (GGO + interlobular septal thickening) is not specific — seen in edema, alveolar proteinosis, COVID, and drug toxicity. Gravitational distribution (ARDS) vs perihilar (cardiogenic) is the key discriminator.',
      pearl:'<b>Vascular pedicle width >70 mm</b> on supine CXR and azygos vein diameter >10 mm favor elevated pulmonary venous pressure (cardiogenic) over capillary leak (ARDS).',
      f:'Bilateral [perihilar / diffuse] ground-glass opacity and consolidation with [smooth septal thickening and bilateral pleural effusions / dependent consolidation and anterior sparing]. [Cardiomegaly present / absent.] [No barotrauma.]',
      i:'CT pattern consistent with [cardiogenic pulmonary edema / ARDS]. [Recommend echocardiography / clinical correlation with Berlin criteria.]'
    }
  },
  {
    slug:'lung-cancer-nodule', title:'Lung Cancer and Suspicious Nodule', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'🔴',
    blurb:'Spiculated mass, cavitating lesion, or incidentally found nodule — size, morphology, and Lung-RADS risk category guide the call.',
    tags:['Spiculated mass','Lung-RADS','Hilar adenopathy'], rp:'lung-cancer',
    sheet:{
      find:'<b>Solid nodule/mass</b>: spiculation, pleural tethering, lobulation, satellite nodules, hilar/mediastinal adenopathy, pleural invasion, or chest wall involvement. <b>Ground-glass / part-solid</b>: persistent GGO >6 mm or solid component >6 mm. Assess for endobronchial lesion causing post-obstructive collapse/pneumonia.',
      measure:'Nodule: longest diameter and orthogonal on the same slice. Mass >3 cm. Lung-RADS 1 (<6 mm solid / <20 mm pure GGO) → 4B (≥15 mm solid, or ≥8 mm solid component in part-solid). Report any adenopathy by station.',
      pitfall:'Rounded pneumonia, carcinoid, and hamartoma (popcorn calcium, fat) mimic malignancy. A smooth well-defined nodule <6 mm in a low-risk patient is almost always benign.',
      pearl:'<b>Spiculation is the single strongest morphologic predictor of malignancy.</b> An endobronchial lesion causing lobar collapse in a smoker must be assumed malignant until proven otherwise — request bronchoscopy.',
      f:'[X] mm [spiculated / lobulated] [solid / part-solid] [right upper lobe] [nodule / mass] with [pleural tethering / satellite nodules / associated hilar adenopathy]. [Lung-RADS [4A/4B].]',
      i:'[Right upper lobe] [X] mm spiculated [nodule / mass], Lung-RADS [4B], suspicious for primary lung malignancy. Recommend PET-CT and pulmonary/oncology consultation.'
    }
  },
  {
    slug:'pneumomediastinum', title:'Pneumomediastinum', region:'chest', system:'Mediastinum',
    modality:'CT chest', sev:'urgent', emoji:'💨',
    blurb:'Free mediastinal air tracks from alveolar rupture or hollow viscus injury — esophageal source is the life-threatening cause to exclude.',
    tags:['Mediastinal air','Continuous diaphragm sign','Esophageal source'], rp:'pneumomediastinum',
    sheet:{
      call:'Pneumomediastinum in the setting of forceful vomiting, esophageal instrumentation, or left pleural effusion = <b>esophageal rupture until proven otherwise</b> — emergent esophagram and surgery consult.',
      find:'Air outlining mediastinal structures: along the aortic arch (<b>ring-around-the-artery</b> sign), continuous diaphragm sign, subcutaneous emphysema tracking into the neck. Identify the source: alveolar rupture (central air tracking peripherally), esophageal tear (periesophageal air, left pleural effusion), tracheobronchial injury.',
      measure:'Extent of subcutaneous emphysema (neck, chest wall, face). Presence of tension pneumomediastinum is rare but can cause tamponade physiology.',
      pitfall:'Spontaneous (Macklin effect) pneumomediastinum from severe Valsalva, asthma, or exercise is benign and self-limited; the dangerous mimic is esophageal rupture — always correlate with clinical history.',
      pearl:'<b>Periesophageal air + left pleural effusion</b> is the CT fingerprint of Boerhaave syndrome. Macklin effect: alveolar air dissects along bronchovascular sheaths centrally to the mediastinum — a well-recognized barotrauma pattern.',
      f:'Pneumomediastinum with air tracking along the [aortic arch / esophagus / tracheobronchial tree]. [Subcutaneous emphysema in the neck and chest wall.] [Left pleural effusion measuring X HU.] [No pneumothorax.]',
      i:'Pneumomediastinum. [Given the left pleural effusion and periesophageal air, esophageal rupture (Boerhaave) cannot be excluded — recommend urgent esophagram.]'
    }
  },
  {
    slug:'esophageal-rupture', title:'Esophageal Rupture (Boerhaave Syndrome)', region:'chest', system:'Esophagus',
    modality:'CT chest', sev:'killer', emoji:'💥',
    blurb:'Transmural esophageal tear from forceful vomiting — periesophageal air, left effusion, and mediastinitis develop rapidly.',
    tags:['Periesophageal air','Left effusion','Mediastinitis'], rp:'oesophageal-rupture',
    sheet:{
      call:'Boerhaave is a <b>surgical emergency with >35% mortality</b> if repair is delayed beyond 24 hours — communicate immediately to the surgical team.',
      find:'<b>Periesophageal air</b> (most sensitive early sign), pneumomediastinum, left-sided (or bilateral) pleural effusion with hydropneumothorax, esophageal wall thickening, and mediastinal fat stranding. Look for oral contrast extravasation on CT esophagram.',
      measure:'Location of the tear: most common at the left posterolateral distal esophagus (Boerhaave). Measure extent of mediastinal contamination and effusion volume.',
      pitfall:'Early Boerhaave may show only subtle periesophageal air — if clinical suspicion is high after a negative or equivocal CT, proceed to water-soluble contrast esophagram or endoscopy.',
      pearl:'The <b>V-sign of Naclerio</b> on CXR (air tracking between the descending aorta and the left hemidiaphragm forming a V) is a classic but late finding. CT is more sensitive.',
      f:'Pneumomediastinum with periesophageal air tracking around the [distal] esophagus. [Left] pleural effusion measuring [X] HU with a hydropneumothorax. Mediastinal fat stranding. [Oral contrast extravasation identified at the [X] level.]',
      i:'CT findings highly suspicious for esophageal rupture (Boerhaave syndrome). Mediastinitis cannot be excluded. Emergent surgical consultation recommended.'
    }
  },
  {
    slug:'rib-fractures-flail-chest', title:'Rib Fractures and Flail Chest', region:'chest', system:'Chest wall',
    modality:'CT chest', sev:'urgent', emoji:'🦴',
    blurb:'Count, localize, and look for a flail segment — posterior fractures, sternal involvement, and pneumothorax/hemothorax drive disposition.',
    tags:['Flail segment','Posterior fractures','Neurovascular bundle'], rp:'rib-fracture',
    sheet:{
      call:'<b>Flail chest</b> (≥3 consecutive ribs fractured in ≥2 places) with pulmonary contusion and hypoxia = anticipate respiratory failure — discuss with trauma surgery and ICU.',
      find:'Use <b>thin-slice bone window coronal reconstructions</b> systematically. Count fractures by rib number; note anterior vs posterior location; flag <b>flail segment</b>; assess for pneumothorax, hemothorax, pulmonary contusion, and neurovascular bundle injury (intercostal vessel bleeding).',
      measure:'Flail: ≥3 consecutive rib fractures each broken in ≥2 places, creating a free-floating segment. First-rib fracture suggests high-energy mechanism with associated neurovascular injury risk.',
      pitfall:'Posterior rib fractures near the costovertebral junction are easily missed on axial images — always review <b>coronal and sagittal bone window</b> reformats. Fractures at the costal cartilage are cartilaginous and invisible on CT.',
      pearl:'The number of rib fractures is the strongest independent predictor of mortality in blunt chest trauma. First and second rib fractures correlate with brachial plexus and subclavian vessel injury.',
      f:'[X] rib fractures identified at ribs [list] on the [right/left/bilateral]. [Flail segment at ribs X–X.] [Associated [small/moderate] pneumothorax and/or hemothorax.] [Pulmonary contusion in the [X] lobe.]',
      i:'[X] [right/left/bilateral] rib fractures [with flail chest segment (ribs X–X)]. [Pneumothorax and hemothorax as detailed above.] Trauma surgery consultation recommended.'
    }
  },
  {
    slug:'pulmonary-contusion', title:'Pulmonary Contusion', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'🫁',
    blurb:'Non-segmental parenchymal hemorrhage and edema after blunt thoracic trauma — extent predicts respiratory failure risk.',
    tags:['Non-segmental GGO','Traumatic','% lung volume'], rp:'pulmonary-contusion',
    sheet:{
      find:'<b>Non-segmental, non-lobar</b> consolidation and GGO underlying the site of impact, appearing within hours. Does not respect segmental boundaries (distinguishes contusion from pneumonia). May see associated rib fractures and pneumothorax.',
      measure:'Estimate percent lung volume involved. >20% bilateral contusion correlates with high risk of ARDS. CT underestimates extent on images obtained within first 6 hours (edema peaks at 24–48 h).',
      pitfall:'<b>Pulmonary laceration</b> (traumatic cavity/pneumatocele) may be obscured within contusion on initial imaging — repeat CT at 48–72 h reveals the cavity as the contusion resolves. Aspiration pneumonia has a dependent distribution; contusion is impact-site dependent.',
      pearl:'Contusion reaches maximum extent at 24–48 hours and typically resolves in 5–7 days. A contusion that worsens beyond 72 hours suggests superimposed pneumonia or development of ARDS.',
      f:'Non-segmental consolidation and ground-glass opacity in the [right lower lobe / left upper lobe] consistent with pulmonary contusion, involving approximately [X]% of total lung volume. [Associated rib fractures at ribs X–X.] [No laceration cavity identified.]',
      i:'[Moderate] pulmonary contusion in the [right lower lobe] involving approximately [X]% of total lung volume. [Recommend repeat CT in 48–72 hours to exclude underlying laceration.]'
    }
  },
  {
    slug:'tracheobronchial-injury', title:'Tracheobronchial Injury', region:'chest', system:'Airway',
    modality:'CT chest', sev:'killer', emoji:'💥',
    blurb:'Tracheal or bronchial tear from blunt or penetrating trauma — persistent air leak, tension, and fallen-lung sign are the alarms.',
    tags:['Fallen-lung sign','Peritracheobronchial air','Pneumomediastinum'], rp:'tracheobronchial-injury',
    sheet:{
      call:'<b>Fallen-lung sign</b> or persistent large air leak after chest tube = tracheobronchial injury until proven otherwise — emergent rigid bronchoscopy and thoracic surgery.',
      find:'<b>Peritracheobronchial air</b>, pneumomediastinum, pneumothorax that fails to resolve (or worsens) after chest tube. <b>Fallen-lung sign</b>: lung falls away from the hilum (normally the hilum holds the lung up). Tracheal wall defect, abnormal angulation, or bronchial cutoff.',
      measure:'Identify the level of injury: trachea vs right/left main bronchus vs lobar bronchus. Most blunt injuries occur within 2.5 cm of the carina. Report distance from the carina.',
      pitfall:'Small tears can present with only pneumomediastinum without pneumothorax. The fallen-lung sign is pathognomonic but may only be evident on delayed or decubitus views.',
      pearl:'90% of blunt tracheobronchial injuries occur within 2.5 cm of the carina. The right main bronchus is injured more than the left. Penetrating injuries can occur at any level.',
      f:'Pneumomediastinum with peritracheobronchial air. [Fallen-lung sign on the right with the lung displaced inferiorly from the hilum.] [Pneumothorax present — chest tube in place with persistent large air leak.] [Bronchial wall irregularity at the [right main bronchus] [X] cm from the carina.]',
      i:'CT findings consistent with tracheobronchial injury at the [right main bronchus]. Emergent bronchoscopy and thoracic surgery consultation recommended.'
    }
  },
  {
    slug:'sternal-fracture', title:'Sternal Fracture', region:'chest', system:'Chest wall',
    modality:'CT chest', sev:'urgent', emoji:'🦴',
    blurb:'Direct impact fracture of the sternum — associated cardiac contusion, posterior displacement, and retrosternal hematoma change management.',
    tags:['Retrosternal hematoma','Cardiac contusion','Manubriosternal'], rp:'sternal-fracture',
    sheet:{
      find:'Sagittal and axial bone windows are essential. Identify fracture location (manubrium vs body vs manubriosternal junction), <b>displacement and angulation</b>, retrosternal hematoma, and any associated mediastinal vascular injury.',
      measure:'Measure posterior displacement in mm. >1 cm displacement or comminution raises concern for cardiac/great vessel injury. Report if manubriosternal joint is disrupted vs body fracture.',
      pitfall:'Sternal fractures are easily missed on axial images — always perform <b>sagittal reconstructions</b>. Transverse body fractures look like a cortical break on axial that could be dismissed as a partial volume artifact.',
      pearl:'Sternal fracture alone has a low mortality when isolated; the danger lies in associated injuries (myocardial contusion, aortic injury, rib fractures). Cardiac troponin and ECG monitoring are mandatory.',
      f:'[Transverse / comminuted] fracture of the sternal [body / manubrium] with [X] mm posterior displacement. [Retrosternal hematoma measuring X × X cm.] [No cardiac contour abnormality or pericardial effusion.]',
      i:'Sternal [body] fracture with [minimal / X mm] displacement. [Retrosternal hematoma present — recommend cardiac monitoring and troponin.]'
    }
  },
  {
    slug:'diaphragmatic-rupture', title:'Diaphragmatic Rupture', region:'chest', system:'Diaphragm',
    modality:'CT chest', sev:'killer', emoji:'💥',
    blurb:'Diaphragmatic tear allows herniation of abdominal viscera into the chest — left-sided is more common; right-sided is more often missed.',
    tags:['Collar sign','Visceral herniation','Dependent viscera sign'], rp:'diaphragmatic-rupture',
    sheet:{
      call:'Herniation of abdominal viscera into the chest (stomach, colon, spleen, liver) with strangulation risk requires <b>urgent surgical repair</b>.',
      find:'<b>Collar sign</b> (waist constriction of herniated bowel/omentum at the diaphragm defect), <b>dependent viscera sign</b> (abdominal organ directly contacting the posterior chest wall, lacking diaphragm support), intrathoracic stomach or bowel loops with air-fluid levels, and diaphragmatic discontinuity.',
      measure:'Identify side (left 75–80%, right 20–25%), location (central vs peripheral), and estimated defect size. Report which viscera have herniated.',
      pitfall:'Left-sided rupture is often masked by the spleen and omentum initially plugging the defect. Right-sided rupture is notoriously difficult — the liver plugs the defect and simulates an elevated right hemidiaphragm.',
      pearl:'The <b>collar sign</b> is the most specific CT finding. The <b>dependent viscera sign</b> (any abdominal organ touching the posterior ribs) is sensitive on supine CT. Always look for it on sagittal reformats.',
      f:'Discontinuity of the [left] hemidiaphragm with herniation of [stomach / colon / omentum] into the left hemithorax. Collar sign present. [Associated left hemothorax / pneumothorax.] [No strangulation signs.]',
      i:'[Left] diaphragmatic rupture with intrathoracic herniation of [stomach and omentum]. Urgent surgical consultation recommended.'
    }
  },
  {
    slug:'acute-mediastinitis', title:'Acute Mediastinitis', region:'chest', system:'Mediastinum',
    modality:'CT chest', sev:'killer', emoji:'🦠',
    blurb:'Mediastinal infection from esophageal rupture, descending necrotizing infection, or post-sternotomy — fat stranding, fluid, and gas are the triad.',
    tags:['Mediastinal gas','Fat stranding','Descending necrotizing'], rp:'mediastinitis',
    sheet:{
      call:'Acute mediastinitis is a <b>surgical emergency with >40% mortality</b> — identify source, extent, and any drainable fluid collections for emergent surgical or interventional drainage.',
      find:'<b>Mediastinal fat stranding</b> (infiltration of mediastinal fat), <b>gas bubbles or gas-containing fluid collections</b>, thickening of mediastinal soft tissue, pleural and pericardial effusions. Look for the source: esophageal defect, retropharyngeal/parapharyngeal abscess (descending necrotizing), or post-sternotomy wound.',
      measure:'Extent of involvement: anterior, posterior, superior, inferior mediastinum. Map drainable fluid collections and their size. Assess for pericardial involvement (purulent pericarditis).',
      pitfall:'Post-sternotomy pneumomediastinum is expected in the first 2 weeks and does not equal mediastinitis; fat stranding and fluid collection are the differentiating features.',
      pearl:'<b>Descending necrotizing mediastinitis</b> from an oropharyngeal source has the highest mortality — the infection tracks along fascial planes from the neck into the mediastinum; map the extent to guide surgical planning.',
      f:'Mediastinal fat infiltration and [gas-containing fluid collection(s)] in the [posterior / anterior] mediastinum measuring [X × X cm]. [Bilateral pleural effusions.] [Pericardial effusion.] [Esophageal wall defect at [X] level.]',
      i:'CT findings consistent with acute mediastinitis. [Source: esophageal rupture / descending necrotizing infection.] Emergent surgical consultation and drainage recommended.'
    }
  },
  {
    slug:'lung-abscess', title:'Lung Abscess', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'🦠',
    blurb:'Cavitary parenchymal infection with a thick irregular wall — distinguish from empyema, and identify obstruction or underlying mass.',
    tags:['Cavity','Air-fluid level','Thick wall'], rp:'lung-abscess',
    sheet:{
      find:'<b>Thick-walled (>4 mm) cavity</b> with an air-fluid level, surrounded by consolidation. Spherical shape, acute angles with the chest wall. Assess for a feeding bronchus and any endobronchial obstructing lesion (post-obstructive abscess).',
      measure:'Cavity dimensions (3 planes), wall thickness, and extent of surrounding consolidation. Identify any satellite nodules or lymphadenopathy suggesting an underlying tumor.',
      pitfall:'Lung abscess vs empyema: abscess is spherical with acute margins and a thick wall; empyema is lenticular with obtuse margins, compresses lung, and has the split-pleura sign. Misidentifying an abscess as empyema leads to inappropriate chest tube placement.',
      pearl:'<b>Cavitating malignancy</b> (squamous cell carcinoma most commonly) has an irregular nodular inner wall and associated lymphadenopathy; if a cavity is in a high-risk patient or fails to improve, biopsy is warranted.',
      f:'[X × X × X] cm thick-walled cavity in the [right lower lobe] with an air-fluid level and surrounding consolidation. Wall thickness [X] mm. [No endobronchial obstructing lesion identified.] [No satellite nodules or hilar adenopathy.]',
      i:'CT findings consistent with [right lower lobe] lung abscess. [No obstructing endobronchial lesion. Recommend IR-guided drainage if no clinical improvement on antibiotics.]'
    }
  },
  {
    slug:'septic-pulmonary-emboli', title:'Septic Pulmonary Emboli', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'🦠',
    blurb:'Multiple bilateral peripheral nodules that cavitate — think IV drug use, infected central line, or right-sided endocarditis.',
    tags:['Peripheral nodules','Cavitation','Feeding vessel sign'], rp:'septic-pulmonary-emboli',
    sheet:{
      find:'<b>Multiple bilateral peripheral pulmonary nodules</b>, often with a subpleural distribution, that may cavitate or develop into abscesses. <b>Feeding vessel sign</b>: a vessel leading directly into the nodule (best seen on MIP reconstructions). Wedge-shaped peripheral infarcts may coexist.',
      measure:'Number, size, and distribution of nodules. Document cavitation. Assess for evidence of right-sided endocarditis on CTA (tricuspid/pulmonic valve vegetations are better seen on echo).',
      pitfall:'Metastatic malignancy is the main mimic — nodules without a feeding vessel sign, larger and more variable in size, without cavitation or fever. Clinical context (IVDU, bacteremia) is essential.',
      pearl:'In an IV drug user with fever and bilateral nodules, septic PE from tricuspid endocarditis is the leading diagnosis — <b>echocardiography is mandatory</b> to identify valvular vegetations.',
      f:'Multiple bilateral peripheral pulmonary nodules ranging [X–X] mm, several with cavitation, with feeding vessel signs. [Wedge-shaped subpleural opacities consistent with infarcts.] [No CT evidence of cardiac valvular vegetations — echo recommended.]',
      i:'CT pattern consistent with septic pulmonary emboli. Recommend blood cultures, echocardiography, and infectious disease consultation.'
    }
  },
  {
    slug:'pulmonary-infarct', title:'Pulmonary Infarct', region:'chest', system:'Lung',
    modality:'CTPA', sev:'urgent', emoji:'🔺',
    blurb:'Peripheral wedge-shaped subpleural opacity after pulmonary embolism — Hampton\'s hump on CXR, non-enhancing on CTPA.',
    tags:['Hampton hump','Wedge opacity','Non-enhancing'], rp:'pulmonary-infarction',
    sheet:{
      find:'<b>Peripheral wedge-shaped or pleurally based consolidation</b> with the base toward the pleura and apex toward the hilum. On CTPA: non-enhancing (infarcted) consolidated lung. May have a central lucency (cavitation/necrosis, especially in septic emboli). Associated pleural effusion (exudate) and pleural thickening.',
      measure:'Size of infarct, number, and distribution. Assess for cavitation. Correlate with filling defects on CTPA.',
      pitfall:'Pulmonary infarcts enhance on delayed phase — do not be reassured by enhancement on a 5-minute delayed scan. Peripheral consolidation from pneumonia can be identical; clinical correlation is key.',
      pearl:'Only 10–15% of PEs result in infarction — it occurs when bronchial collateral circulation is insufficient. <b>Hampton\'s hump</b>: the classic radiographic hump of pleural-based consolidation is the CXR correlate.',
      f:'Peripheral wedge-shaped non-enhancing [consolidation / opacity] in the [right lower lobe] with the base abutting the pleura. [Small associated pleural effusion.] [Correlating filling defect in the [segmental] pulmonary artery.]',
      i:'CT findings consistent with pulmonary infarct in the [right lower lobe] in the setting of [acute pulmonary embolism / clinical suspicion for PE].'
    }
  },
  {
    slug:'massive-hemoptysis-bronchial-artery', title:'Massive Hemoptysis — Bronchial Artery Source', region:'chest', system:'Lung',
    modality:'CTA', sev:'killer', emoji:'🩸',
    blurb:'CTA identifies the hypertrophied bronchial artery culprit — active bleeding, aneurysm, or hypervascularity guides emergency embolization.',
    tags:['Bronchial artery','Hypervascularity','Aneurysm'], rp:'haemoptysis',
    sheet:{
      call:'Massive hemoptysis (>300–600 mL/24 h or causing airway compromise) is immediately life-threatening — <b>contact IR for emergent bronchial artery embolization</b>.',
      find:'On CTA: identify <b>hypertrophied bronchial arteries</b> (>2 mm, tortuous, from the aorta between T5–T6), bronchial artery aneurysm, active extravasation into airway, and the underlying cause (bronchiectasis, TB, aspergilloma, lung cancer, cystic fibrosis).',
      measure:'Bronchial artery diameter: normal <1.5 mm; >2 mm = hypertrophied; >5 mm = aneurysmal. Report origin from aorta (level and side) and any anomalous origin (intercostal-bronchial trunk, subclavian, internal mammary).',
      pitfall:'Non-bronchial systemic collaterals (internal mammary, inferior phrenic, intercostal arteries) are a major source of re-bleeding after embolization if not identified pre-procedure — scrutinize all systemic supply to the affected lung.',
      pearl:'<b>Spinal artery of Adamkiewicz</b> can arise from a common trunk with the right bronchial artery — pre-embolization angiogram must identify this to prevent spinal cord infarction.',
      f:'Hypertrophied [right] bronchial artery measuring [X] mm arising from the aorta at [T5/T6 level], with [tortuous course / aneurysmal dilation at X mm / active extravasation into the airway]. [Underlying [bronchiectasis / aspergilloma / carcinoma] in the [X] lobe.]',
      i:'Findings consistent with hypertrophied [right] bronchial artery as the likely source of massive hemoptysis. [Bronchial artery aneurysm measuring X mm.] Emergent IR consultation for embolization.'
    }
  },
  {
    slug:'cavitary-lung-tb', title:'Cavitary Lung Lesion and Tuberculosis', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'🔬',
    blurb:'Upper lobe cavitation with tree-in-bud nodules and centrilobular nodules — active TB until proven otherwise, with infection control implications.',
    tags:['Upper lobe cavitation','Tree-in-bud','Centrilobular nodules'], rp:'tuberculosis',
    sheet:{
      find:'<b>Upper lobe / superior lower lobe predominant</b> cavitation, consolidation, and satellite nodules. <b>Tree-in-bud nodularity</b> = endobronchial spread (implies active, infectious disease). Centrilobular nodules, miliary pattern (hematogenous spread), hilar/mediastinal lymphadenopathy (often with central necrosis), and pleural effusion.',
      measure:'Cavity size and wall thickness. Miliary: uniform 1–3 mm nodules throughout all lobes. Report extent of upper lobe involvement and any endobronchial spread.',
      pitfall:'Upper lobe cavitation also occurs with necrotizing pneumonia, abscess, Wegener\'s, aspergillosis, and cavitating malignancy. TB lymphadenopathy with central low density and rim enhancement is characteristic but not pathognomonic.',
      pearl:'Active TB is suggested by <b>tree-in-bud + upper lobe cavitation</b>; the tree-in-bud pattern indicates endobronchial dissemination and high infectivity. Flag for airborne precautions immediately.',
      f:'[Right upper lobe] cavitation with [X] cm thin/thick-walled cavity and surrounding satellite nodules. Tree-in-bud nodularity in the [upper and middle lobes / bilateral lung bases] consistent with endobronchial spread. [Calcified hilar lymphadenopathy.] [No miliary pattern.]',
      i:'CT findings highly suspicious for active pulmonary tuberculosis. Recommend airborne isolation, sputum AFB cultures and NAAT, and infectious disease consultation.'
    }
  },
  {
    slug:'foreign-body-aspiration', title:'Foreign Body Aspiration', region:'chest', system:'Airway',
    modality:'CT chest', sev:'urgent', emoji:'🔍',
    blurb:'Radiopaque or radiolucent endobronchial object with distal air trapping, atelectasis, or post-obstructive pneumonia — bronchoscopy is definitive.',
    tags:['Endobronchial','Air trapping','Post-obstructive'], rp:'foreign-body-aspiration',
    sheet:{
      find:'Directly visualize the <b>hyperdense endobronchial foreign body</b> or look for indirect signs: <b>obstructive hyperinflation / air trapping</b> (unilateral hyperlucent lung on expiratory images), lobar atelectasis, or post-obstructive consolidation. Most organic FBs (peanuts, food) are low density or isodense.',
      measure:'Location: trachea, main bronchi, lobar, segmental. Measure size of object. Assess volume of affected lung and degree of air trapping on expiratory phase.',
      pitfall:'Radiolucent organic foreign bodies (food, plastic) may be invisible on CT — the <b>indirect signs</b> (air trapping, unilateral hyperinflation) are the key findings. Expiratory images are essential for demonstrating air trapping.',
      pearl:'In adults, the right main bronchus is more vertical and wider — right-sided aspiration predominates. In children, right and left are nearly equal. A hyperlucent lung on expiratory CXR is the classic clue.',
      f:'[Hyperdense / isodense] [X × X mm] endobronchial [foreign body at the right main/lobar bronchus]. [Post-obstructive [right middle lobe] atelectasis and consolidation.] [Air trapping in the [right lower lobe] on expiratory images.]',
      i:'Endobronchial foreign body at the [right main bronchus] with [post-obstructive right middle lobe atelectasis]. Urgent bronchoscopy recommended.'
    }
  },
  {
    slug:'cteph', title:'Chronic Thromboembolic Pulmonary Hypertension (CTEPH)', region:'chest', system:'CTPA',
    modality:'CTPA', sev:'urgent', emoji:'🫀',
    blurb:'Organized chronic thrombus causes pulmonary hypertension — webs, eccentric wall thrombus, mosaic perfusion, and RV enlargement are the imaging hallmarks.',
    tags:['Mosaic perfusion','Eccentric thrombus','RV enlargement'], rp:'chronic-thromboembolic-pulmonary-hypertension',
    sheet:{
      find:'<b>Eccentric, wall-adherent, calcified or organized thrombus</b> (does not expand the vessel, unlike acute PE). <b>Mosaic perfusion</b> (geographic areas of alternating high and low attenuation on inspiratory CT). <b>RV enlargement</b> (RV:LV >1.0), dilated main pulmonary artery (>29 mm), and bronchial collateral hypertrophy.',
      measure:'Main pulmonary artery diameter at the bifurcation (>29 mm suggests PH). RV:LV short-axis ratio at the level of the papillary muscles. Look for reflux of contrast into the IVC and hepatic veins (right heart failure).',
      pitfall:'Acute PE on a background of CTEPH: organized thrombus (wall-adherent, calcified, webbed) coexists with new acute filling defect (central, expands the vessel, no calcification). Both can be present simultaneously.',
      pearl:'<b>Pulmonary artery webs</b> (thin endoluminal bands within the pulmonary arteries) are pathognomonic of organized chronic thrombus from recanalization — best seen on thin MIP reconstructions.',
      f:'Eccentric wall-adherent [calcified / organized] thrombus in the [bilateral main / lobar / segmental] pulmonary arteries. Main pulmonary artery diameter [X] mm. RV:LV ratio [X]. Mosaic perfusion pattern bilaterally. [No new acute central filling defect.]',
      i:'CT findings consistent with chronic thromboembolic disease / CTEPH. Recommend V/Q scan and pulmonary hypertension specialist referral for surgical endarterectomy evaluation.'
    }
  },
  {
    slug:'lobar-collapse-atelectasis', title:'Lobar Collapse and Atelectasis vs Obstruction', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'📉',
    blurb:'Collapsed lobe — identify the obstructing lesion vs extrinsic compression vs mucus plug; signs and compensatory changes differ by lobe.',
    tags:['Endobronchial lesion','Compensatory hyperinflation','S-sign of Golden'], rp:'lobar-collapse',
    sheet:{
      find:'<b>Volume loss</b> of a lobe with displacement of fissures, mediastinal shift, diaphragm elevation, and compensatory hyperinflation. Search for an <b>endobronchial obstructing lesion</b> (mass, mucus plug, foreign body) or <b>extrinsic compression</b> (lymphadenopathy). Right upper lobe collapse: <b>S-sign of Golden</b> (concave inferolateral border of the collapsed lobe + mass forming the S).',
      measure:'Identify which lobe(s) are collapsed. Report any endobronchial lesion: size, density, location, and distance from the carina.',
      pitfall:'<b>Plate atelectasis</b> (subsegmental) is common and benign (mucus, shallow breathing). Lobar collapse with an obstructing mass requires bronchoscopy — do not dismiss it as mucus plug without an endobronchial search.',
      pearl:'<b>S-sign of Golden</b> in right upper lobe collapse is virtually pathognomonic for an obstructing central mass (typically lung cancer). Lobar collapse in a smoker should trigger a full bronchoscopy workup.',
      f:'[Right upper lobe] collapse with displaced [minor fissure] and [S-sign of Golden]. [Endobronchial lesion measuring X mm at the [right upper lobe bronchus] / No endobronchial lesion identified.] [Compensatory hyperinflation of the [right middle and lower lobes].]',
      i:'[Right upper lobe] collapse. [S-sign of Golden consistent with obstructing central mass.] Recommend urgent bronchoscopy to evaluate for endobronchial malignancy.'
    }
  },
  {
    slug:'anterior-mediastinal-mass', title:'Anterior Mediastinal Mass — The 4 Ts', region:'chest', system:'Mediastinum',
    modality:'CT chest', sev:'urgent', emoji:'🔴',
    blurb:'Thymoma, teratoma, terrible lymphoma, or thyroid — anterior compartment mass demands tissue diagnosis and airway risk assessment.',
    tags:['4 Ts','Thymoma','Lymphoma'], rp:'anterior-mediastinal-mass',
    sheet:{
      find:'Mass in the <b>prevascular compartment</b> (anterior to the heart and great vessels). Characterize: calcification (teratoma/thyroid), fat (teratoma/thymolipoma), cystic component, heterogeneity, invasion, and pericardial or pleural involvement. Assess airway compression (tracheal cross-sectional area reduction).',
      measure:'Mass dimensions (3 planes). Tracheal cross-sectional area reduction: >50% = anesthetic risk. Report invasion of great vessels, pericardium, or lung.',
      pitfall:'A homogeneous, smooth-walled anterior mediastinal cyst (thymic cyst or pericardial cyst) can mimic a solid mass — assess for imperceptible wall and fluid-equivalent density (<20 HU). Do not biopsy a vascular mass without assessment for a vascular anomaly.',
      pearl:'<b>The most dangerous finding</b> in an anterior mediastinal mass is significant tracheal/subcarinal compression — this is an airway emergency that must be communicated before any procedures requiring general anesthesia.',
      f:'[X × X × X] cm [heterogeneous / solid / cystic / fat-containing] anterior mediastinal mass, [with calcification / without calcification]. [Tracheal luminal narrowing to X% of normal caliber.] [No invasion of the great vessels or pericardium.]',
      i:'Anterior mediastinal mass. Differential: [thymoma / lymphoma / germ cell tumor / thyroid mass]. [Tracheal compression present — airway management consultation prior to any anesthesia.] Recommend PET-CT and tissue sampling.'
    }
  },
  {
    slug:'malignant-pleural-disease', title:'Malignant Pleural Disease and Mesothelioma', region:'chest', system:'Pleura',
    modality:'CT chest', sev:'urgent', emoji:'🔴',
    blurb:'Nodular circumferential pleural thickening, mediastinal pleural involvement, and a shrunken hemithorax — mesothelioma vs metastatic pleural disease.',
    tags:['Nodular pleural thickening','Circumferential','Shrinking hemithorax'], rp:'malignant-mesothelioma',
    sheet:{
      find:'<b>Nodular or irregular pleural thickening >1 cm</b>, circumferential (rind-like) pleural thickening, mediastinal pleural involvement, diaphragmatic involvement, and <b>shrunken ipsilateral hemithorax</b> (volume loss despite large effusion) are hallmarks of mesothelioma. Malignant metastases: nodular pleural deposits with known primary, bilateral effusions.',
      measure:'Pleural thickening: thickness and extent. Measure the effusion. Report invasion of chest wall, pericardium, or diaphragm. Assess mediastinal lymphadenopathy.',
      pitfall:'Benign fibrous pleuritis and post-empyema fibrothorax can mimic malignant pleural thickening — the key differentiators are nodularity, mediastinal pleural involvement, and a history of asbestos exposure. PET-CT distinguishes metabolically active malignancy.',
      pearl:'<b>Mesothelioma</b> classically encases and shrinks the hemithorax — an effusion with a shrunken hemithorax (rather than contralateral shift) is highly suspicious. In asbestos-exposed patients, this is mesothelioma until proven otherwise.',
      f:'Nodular circumferential pleural thickening measuring up to [X] mm on the [left], with mediastinal and diaphragmatic involvement. [Large associated pleural effusion.] [Ipsilateral hemithorax contracted with mediastinal shift toward the left.] [Calcified pleural plaques bilaterally.]',
      i:'CT findings suspicious for malignant pleural disease / mesothelioma on the [left]. [Known asbestos exposure history.] Recommend PET-CT, thoracentesis with cytology, and thoracic surgery/pulmonology referral for diagnostic pleuroscopy.'
    }
  },
  {
    slug:'fat-embolism-ali', title:'Fat Embolism Syndrome and Acute Lung Injury', region:'chest', system:'Lung',
    modality:'CT chest', sev:'urgent', emoji:'🦴',
    blurb:'After long-bone fracture, bilateral diffuse GGO 24–72 hours later with petechiae and neurologic changes — fat embolism syndrome.',
    tags:['Diffuse GGO','Post-fracture','ARDS pattern'], rp:'fat-embolism',
    sheet:{
      find:'<b>Bilateral diffuse GGO</b>, interlobular septal thickening, and consolidation developing 24–72 hours after long-bone fracture, major orthopedic surgery, or liposuction. Distribution: diffuse bilateral, central predominance, or random. Brain MRI (if done): multiple small fat/embolic infarcts. Pulmonary vessels may show fat-density filling defects (rare, high-density fat vs blood).',
      measure:'Extent of GGO and consolidation (percent lung involvement). Correlate with PaO2/FiO2 ratio for ALI/ARDS criteria.',
      pitfall:'Fat embolism syndrome is a <b>clinical-radiologic</b> diagnosis — the CT findings are non-specific ARDS/ALI pattern. Distinguish from cardiogenic edema (no cardiac enlargement, no septal lines, direct post-trauma onset) and aspiration (dependent distribution).',
      pearl:'The <b>classic triad</b>: hypoxemia, petechial rash (axilla, conjunctivae), and neurologic changes (confusion, seizures) following long-bone fracture. The chest CT shows bilateral GGO but lags behind clinical symptoms by 12–24 h.',
      f:'Bilateral diffuse ground-glass opacity and interlobular septal thickening with a [random / central] distribution, onset [X hours] following [femur fracture / orthopedic surgery]. [No cardiomegaly or large pleural effusions.] [No pulmonary thromboembolic filling defects.]',
      i:'Bilateral diffuse GGO pattern temporally related to [long-bone fracture / orthopedic surgery], consistent with fat embolism syndrome / acute lung injury. Recommend ICU-level monitoring and supportive care.'
    }
  },
  {
    slug:'esophageal-airway-foreign-body', title:'Esophageal and Airway Foreign Body', region:'chest', system:'Esophagus',
    modality:'CT chest', sev:'urgent', emoji:'🔍',
    blurb:'Identify radiopaque or radiolucent foreign body in the esophagus or airway — button batteries and sharp objects mandate emergency endoscopy.',
    tags:['Button battery','Endobronchial','Esophageal impaction'], rp:'oesophageal-foreign-body',
    sheet:{
      call:'<b>Button battery in the esophagus</b> causes liquefactive necrosis within 2 hours and is a true endoscopic emergency — communicate immediately.',
      find:'<b>Hyperdense foreign body</b> in the esophagus or airway lumen. Esophageal: look at cricopharyngeus, aortic arch level, and GEJ — the three natural narrowings. Airway: trachea or bronchi (right > left). <b>Button battery</b>: bilaminar disk with a halo/step-off sign on frontal view. Coin: smooth disc without halo.',
      measure:'Identify level, size, and orientation. Assess for complications: esophageal perforation (periesophageal air, mediastinal fat stranding), tracheal/bronchial impaction with distal air trapping.',
      pitfall:'<b>Button battery vs coin</b>: the battery has a double-density (bilaminar) shadow and a peripheral halo on frontal view; a coin is uniformly opaque. Never delay removal of a battery waiting for further imaging.',
      pearl:'Esophageal foreign bodies project in the <b>coronal plane</b> (coin face-on on frontal CXR); tracheal foreign bodies project in the <b>sagittal plane</b> (coin edge-on on frontal CXR).',
      f:'[X × X mm] [hyperdense / soft-tissue density] foreign body in the [esophagus at the level of the aortic arch / right main bronchus]. [Button battery morphology with bilaminar appearance.] [No periesophageal air or perforation signs.]',
      i:'[Esophageal / endobronchial] foreign body at [level]. [Button battery — emergent endoscopy.] [No evidence of perforation.]'
    }
  },
  {
    slug:'occult-pneumothorax-ventilated', title:'Occult Pneumothorax in the Ventilated Patient', region:'chest', system:'Pleura',
    modality:'CT chest', sev:'urgent', emoji:'💨',
    blurb:'Anterior pneumothorax invisible on supine CXR in an ICU patient on positive pressure ventilation — small can become tension rapidly.',
    tags:['Anterior PTX','Deep sulcus','Positive pressure'], rp:'pneumothorax',
    sheet:{
      call:'Any pneumothorax in a <b>ventilated patient on positive-pressure ventilation</b> carries high risk of conversion to tension — communicate to the ICU team immediately for drainage decision.',
      find:'Air in the <b>anteromedial</b> and <b>subpulmonic</b> pleural recesses on supine CT (the most gravity-independent areas). (The deep sulcus sign — an abnormally deep, lucent lateral costophrenic angle — is a supine-CXR sign, not a CT finding.)',
      measure:'Interpleural distance at the anterior lung edge. Assess for mediastinal shift and hemidiaphragm inversion to exclude occult tension physiology.',
      pitfall:'The deep sulcus sign on CXR is easily overlooked in a busy ICU. On CT, the anterior position of air (rather than lateral/posterior) is the key to diagnosis. Compare with prior CTshowing the pleural recesses.',
      pearl:'In ARDS patients on high PEEP, <b>barotrauma</b> commonly causes pneumothorax, pneumomediastinum, and pneumopericardium simultaneously — survey all three compartments.',
      f:'Anterior [right / bilateral] pneumothorax with [X] cm interpleural distance, not identified on the concurrent supine CXR. [No mediastinal shift.] [No hemidiaphragm inversion.]',
      i:'Occult anterior [right] pneumothorax on CT. [Patient is on positive pressure ventilation — recommend immediate clinical assessment and drainage planning.]'
    }
  }
]);
