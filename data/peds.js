/* Region: Pediatric — child-specific emergencies (note US/radiograph often first-line; describe imaging findings). */
ERCT.add([

  {
    slug:'ileocolic-intussusception', title:'Ileocolic Intussusception', region:'peds', system:'Bowel',
    modality:'US', sev:'urgent', emoji:'🌀',
    blurb:'Bowel-within-bowel target or pseudokidney on US — reduce with air enema unless peritonitis.',
    tags:['Target sign','Pseudokidney','Air enema'], rp:'intussusception',
    diagram:{ svg:'<svg viewBox="0 0 200 184" role="img" aria-label="Target sign of intussusception"><rect width="200" height="184" rx="6" fill="#070a0e"/><circle cx="100" cy="86" r="74" fill="#2b3a4d" stroke="#33404f" stroke-width="2"/><circle cx="100" cy="86" r="56" fill="#11161e"/><circle cx="100" cy="86" r="40" fill="#33404f"/><circle cx="100" cy="86" r="22" fill="#46c6e0"/><path d="M100,86 L100,46 A40,40 0 0 1 134,66 Z" fill="#ffb648" opacity="0.85"/><text class="dgm-label sm" x="100" y="178" text-anchor="middle">bowel-within-bowel + dragged-in mesenteric fat</text></svg>', caption:'Concentric bowel-within-bowel rings make the <b>target sign</b>. The eccentric crescent of dragged-in <b>mesenteric fat</b> and nodes is the giveaway; loss of mural flow signals ischemia.' },
    sheet:{
      find:'<b>Target sign</b> (transverse): hyperechoic central bowel and mesentery surrounded by hypoechoic outer bowel wall. <b>Pseudokidney sign</b> (longitudinal): layered bowel resembling a renal silhouette. Most ileocolic intussusceptions are found in the right lower quadrant or hepatic flexure.',
      measure:'Outer diameter typically >3 cm. Doppler: absent inner-loop blood flow raises concern for ischemia. Trapped free fluid within the intussusceptum or lymph nodes often visible.',
      pitfall:'Small-bowel-to-small-bowel intussusception in a child >5 years warrants CT for a lead point (lymphoma, Meckel). Transient ileo-ileal intussusception in infants can be a normal variant.',
      pearl:'<b>Pathologic lead points</b> (polyp, Meckel, lymphoma) are more common outside the peak age of 3 months to 3 years; US or CT should search for a discrete mass within the intussusceptum.',
      call:'<b>Peritonitis, free air, or hemodynamic instability</b> contraindicates fluoroscopic or pneumatic reduction — emergent surgical consultation.',
      f:'[Longitudinal / transverse] scan of the [right lower quadrant] demonstrates a [target / pseudokidney] sign measuring [X] cm in outer diameter. [Color Doppler shows preserved / absent] inner-loop vascularity. [No free intraperitoneal air or fluid.]',
      i:'Ileocolic intussusception. [No sonographic signs of ischemia.] Recommend [air-enema reduction / surgical consultation].'
    }
  },

  {
    slug:'malrotation-midgut-volvulus', title:'Malrotation with Midgut Volvulus', region:'peds', system:'Bowel',
    modality:'US/CT', sev:'killer', emoji:'🌪️',
    blurb:'Whirlpool sign of SMV around SMA and inverted SMA/SMV relationship signal midgut volvulus — operate immediately.',
    tags:['Whirlpool sign','Inverted SMA/SMV','Duodenal obstruction'], rp:'intestinal-malrotation',
    sheet:{
      find:'US: <b>whirlpool sign</b> — the SMV and mesentery spiral around the SMA in a clockwise direction. Inversion of the normal SMA/SMV relationship (SMV should lie to the right of SMA). Upper GI series (gold standard for malrotation without acute volvulus): <b>duodenojejunal junction</b> (ligament of Treitz) fails to cross midline and does not reach the level of the pylorus. CT: swirling mesentery, duodenal cut-off, proximal bowel dilation, bowel wall thickening, or pneumatosis in advanced cases.',
      measure:'Normal SMV diameter and relationship: SMV lies to the right and anterior to the SMA. Report distance of SMV from SMA and direction of rotation.',
      pitfall:'A normal SMA/SMV relationship does not exclude malrotation — ligament of Treitz position on upper GI remains essential. Volvulus can intermittently reduce, giving a deceptively normal CT.',
      pearl:'<b>Bilious vomiting in a neonate = malrotation with volvulus until proven otherwise.</b> Clock is critical — the entire midgut can infarct within hours.',
      call:'<b>Bilious emesis plus whirlpool sign</b> = surgical emergency. Do not delay for a formal upper GI series if US confirms volvulus.',
      f:'US demonstrates [clockwise] swirling of the superior mesenteric vein around the superior mesenteric artery — <b>whirlpool sign</b>. The SMV lies [to the left / anterior] to the SMA. [Proximal duodenal dilation with abrupt cut-off.] [No pneumatosis identified.]',
      i:'Findings consistent with midgut volvulus in the setting of intestinal malrotation. Emergent surgical consultation recommended.'
    }
  },

  {
    slug:'hypertrophic-pyloric-stenosis', title:'Hypertrophic Pyloric Stenosis', region:'peds', system:'Bowel',
    modality:'US', sev:'urgent', emoji:'🍶',
    blurb:'Pyloric muscle thickness over 3 mm and channel length over 15 mm confirm HPS in a vomiting infant.',
    tags:['Muscle thickness','Channel length','String sign'], rp:'hypertrophic-pyloric-stenosis',
    sheet:{
      find:'<b>Elongated, thickened pyloric channel</b> with failure of gastric contents to pass into the duodenum on real-time imaging. The <b>antral nipple sign</b> (redundant mucosa prolapsing into gastric antrum) and <b>cervix sign</b> (pylorus indenting the fluid-filled antrum) are classic ancillary features.',
      measure:'<b>Muscle wall thickness (MT) ≥ 3 mm</b> and <b>pyloric channel length (CL) ≥ 15 mm</b> are diagnostic. Single-wall measurement is standard. Transverse outer diameter ≥ 12–14 mm also supportive.',
      pitfall:'Pylorospasm can mimic HPS but is transient — real-time observation should show eventual channel opening. Measure the hypoechoic muscle only, not the echogenic mucosa.',
      pearl:'Normal electrolytes at initial presentation do not exclude HPS. US has >95% sensitivity and specificity; fluoroscopic upper GI (string sign, double track) is reserved for equivocal US.',
      f:'Pyloric muscle wall thickness [X] mm, channel length [X] mm, transverse pyloric diameter [X] mm. No passage of gastric contents through the pylorus during [X]-minute real-time observation.',
      i:'Ultrasound findings diagnostic of hypertrophic pyloric stenosis. Surgical consultation recommended.'
    }
  },

  {
    slug:'necrotizing-enterocolitis', title:'Necrotizing Enterocolitis (NEC)', region:'peds', system:'Bowel',
    modality:'Radiograph', sev:'killer', emoji:'🦠',
    blurb:'Pneumatosis intestinalis and portal venous gas on abdominal radiograph signal bowel necrosis in a premature neonate.',
    tags:['Pneumatosis','Portal venous gas','Fixed loop'], rp:'necrotising-enterocolitis',
    sheet:{
      find:'<b>Pneumatosis intestinalis</b>: intramural gas appearing as linear (subserosal) or bubbly (submucosal) lucencies within the bowel wall, best seen in the right lower quadrant. <b>Portal venous gas</b>: branching lucencies extending to the liver periphery (distinguishes from biliary gas which is central). <b>Fixed loop</b>: an unchanging dilated loop on serial radiographs suggests transmural necrosis. Pneumoperitoneum (free air) indicates perforation.',
      measure:'Bell staging guides management: Stage I (suspected — radiograph normal or nonspecific); Stage II (definite — pneumatosis ± portal venous gas); Stage III (advanced — pneumoperitoneum or clinical deterioration).',
      pitfall:'Pneumatosis must be distinguished from stool gas (luminal) — pneumatosis follows the bowel wall contour and does not move. Portal venous gas in NEC differs from biliary air (peripheral vs central hepatic location).',
      pearl:'<b>Left lateral decubitus radiograph</b> is most sensitive for free air in neonates; as little as 1–2 mL of free air can be detected. Urgent surgical consultation if pneumoperitoneum or clinical Stage III.',
      call:'<b>Pneumoperitoneum on radiograph = intestinal perforation</b> — emergent neonatal surgical consultation.',
      f:'[Diffuse / focal] pneumatosis intestinalis involving the [right lower quadrant / diffuse] small bowel. [Portal venous gas present / absent.] [No pneumoperitoneum / Pneumoperitoneum identified.] [Fixed dilated loop in the right lower quadrant on serial views.]',
      i:'Radiographic findings consistent with necrotizing enterocolitis [Bell Stage II / Stage III]. [Emergent surgical consultation recommended for pneumoperitoneum.]'
    }
  },

  {
    slug:'pediatric-appendicitis', title:'Pediatric Appendicitis', region:'peds', system:'Bowel',
    modality:'US', sev:'urgent', emoji:'🔬',
    blurb:'Non-compressible appendix over 6 mm with periappendiceal fat stranding — US first, CT if non-diagnostic.',
    tags:['6 mm threshold','Appendicolith','Perforation'], rp:'acute-appendicitis',
    sheet:{
      find:'<b>Non-compressible blind-ending tubular structure</b> arising from the cecal base, outer diameter ≥6 mm, with hyperechoic periappendiceal fat (stranding), absence of peristalsis, and pain on transducer compression. An <b>appendicolith</b> produces posterior acoustic shadowing and increases perforation risk. Perforation: loss of wall layers, loculated periappendiceal fluid, or abscess.',
      measure:'Outer-wall diameter ≥6 mm is the threshold. If the appendix is visualized at <6 mm with normal compressibility = normal. If not visualized on US, proceed to MRI (preferred in children) or low-dose CT.',
      pitfall:'Right-sided ovarian pathology, mesenteric lymphadenitis, and Crohn\'s ileitis can mimic appendicitis on US. Always scan the ovaries in girls. Perforation may decompress the appendix to <6 mm — don\'t be falsely reassured.',
      pearl:'<b>MRI without contrast</b> has >95% sensitivity in pediatric appendicitis and avoids ionizing radiation — preferred when US is non-diagnostic in children at institutions with rapid MRI access.',
      call:'<b>Free perforation with peritonitis</b> or <b>free air</b> requires urgent surgical consultation.',
      f:'[Visualized / not visualized] appendix measuring [X] mm in outer diameter, [non-compressible / compressible]. [Periappendiceal hyperechoic fat stranding / echogenic fluid collection present.] [Appendicolith identified / not identified.]',
      i:'[Sonographic findings consistent with acute appendicitis / Non-diagnostic US — recommend MRI or CT for further evaluation.]'
    }
  },

  {
    slug:'ingested-button-battery', title:'Ingested Button Battery', region:'peds', system:'Airway',
    modality:'Radiograph', sev:'killer', emoji:'🔋',
    blurb:'Double-ring halo sign on AP radiograph identifies a button battery lodged in the esophagus — endoscopic removal within two hours.',
    tags:['Double-ring sign','Esophageal impaction','Two-hour rule'], rp:'foreign-body-ingestion',
    sheet:{
      find:'On AP radiograph: <b>double-ring or halo sign</b> — the bilaminar battery edge creates two concentric rings (distinguishes from a coin which has a single sharp edge). On lateral: a step-off or notched shoulder confirms the battery rather than a smooth coin. Location in the esophagus (most dangerous) vs stomach vs colon.',
      pitfall:'A coin and a button battery can look nearly identical on a single AP view — <b>always obtain a lateral</b>. A coin is uniformly thin; a battery has a shoulder/step on lateral.',
      pearl:'Even a few hours of esophageal battery impaction can cause liquefactive necrosis via hydroxide ion generation and electrical current — esophageal perforation, tracheoesophageal fistula, and aortoesophageal fistula are reported. Pre-endoscopy honey can be given at home if ≤12 years and asymptomatic.',
      call:'<b>Esophageal button battery = endoscopic emergency within 2 hours</b> — alert GI/surgery immediately. Aortoesophageal fistula risk if retained >24 h.',
      f:'[20 / 23] mm round radiopaque foreign body at the level of [cricopharyngeus / mid-esophagus / GEJ] demonstrating a <b>double-ring halo sign</b> on AP view and a shoulder on lateral view, consistent with a button battery. [No pneumomediastinum or free air.]',
      i:'Button battery impacted in the [mid-] esophagus. Emergent endoscopic removal recommended within 2 hours.'
    }
  },

  {
    slug:'ingested-foreign-body-coin', title:'Ingested Foreign Body — Coin', region:'peds', system:'Airway',
    modality:'Radiograph', sev:'urgent', emoji:'🪙',
    blurb:'Coin in the esophagus appears en face on AP (round) and edge-on on lateral — distinguish from button battery.',
    tags:['En face AP','Esophageal vs tracheal','Removal threshold'], rp:'foreign-body-ingestion',
    sheet:{
      find:'Esophageal coin: appears <b>round and flat (en face) on AP view</b> and as a thin line on lateral, because the esophagus is in the coronal plane. Tracheal foreign body: appears edge-on on AP (sagittal plane of trachea) and round on lateral. Most esophageal coins impact at three sites: <b>cricopharyngeus, aortic arch level, and GEJ.</b>',
      measure:'Measure coin diameter. Document level relative to thoracic inlet, carina, and GEJ. Obtain both AP and lateral to confirm esophageal location and to exclude battery (double ring).',
      pitfall:'Do not assume "coin" without a lateral view — button batteries can appear identical on AP. Always perform the lateral. Tracheal coins rarely cause acute distress but can cause air trapping and atelectasis.',
      pearl:'Esophageal coins at or below the GEJ can be managed with observation if asymptomatic — most pass spontaneously within 2–4 days. Symptomatic esophageal coins require endoscopic removal regardless of location.',
      f:'[Round] radiopaque foreign body measuring [X] mm at the level of [cricopharyngeus / aortic arch / GEJ], oriented <b>en face</b> on AP and edge-on on lateral, consistent with a coin in the esophagus. [No double-ring sign. No pneumomediastinum.]',
      i:'Radiopaque foreign body in the [mid-] esophagus, consistent with a coin. No radiographic features of a button battery. Recommend [endoscopic removal / observation with repeat radiograph in 24 h].'
    }
  },

  {
    slug:'non-accidental-trauma', title:'Non-Accidental Trauma (Child Abuse)', region:'peds', system:'Skeletal',
    modality:'Radiograph', sev:'killer', emoji:'⚠️',
    blurb:'Classic metaphyseal lesions, posterior rib fractures, and fractures of different ages are highly specific for non-accidental trauma.',
    tags:['CML','Posterior rib fractures','Multiple ages'], rp:'non-accidental-injury',
    sheet:{
      find:'<b>Classic metaphyseal lesions (CMLs) / bucket-handle fractures</b>: transverse subphyseal microfracture through the primary spongiosa — highly specific. <b>Posterior rib fractures</b>: particularly at costovertebral junction; result from squeezing. <b>Multiple fractures at different healing stages</b>: acute (sharp cortical margins), healing (periosteal new bone, 7–14 days), healed (remodeled, callus). Bilateral symmetric metaphyseal lesions and fractures inconsistent with stated mechanism or developmental age.',
      measure:'Skeletal survey per ACR guidelines: 21+ views. Head CT (or brain MRI) to assess for intracranial injury. Report each fracture: site, laterality, estimated healing age, and specificity for abuse.',
      pitfall:'Physiologic periosteal new bone (3–4 months of age, bilateral, symmetrical, no fracture line) mimics healing fractures — it is smooth, symmetric, and involves the diaphyses not metaphyses. Metabolic bone disease (rickets, OI) must be excluded, though high-specificity CMLs are rare in OI.',
      pearl:'Specificity for NAT: <b>high</b> — CMLs, posterior rib fractures, spinous process fractures, sternal fractures; <b>moderate</b> — multiple fractures, fractures of different ages, epiphyseal separations in infants; <b>low</b> — isolated long bone fractures.',
      call:'Any high-specificity fracture pattern in a child <2 years with inconsistent history requires <b>mandatory child protective services report and hospitalization</b>.',
      f:'[Right posterior rib fractures at ribs 4, 5, and 6] at the costovertebral junction showing [periosteal new bone / acute fracture lines], consistent with [healing / acute] injury. [Classic metaphyseal lesion at the distal right femur.] [Findings inconsistent with stated mechanism.]',
      i:'Fracture pattern highly suspicious for non-accidental trauma. Correlation with clinical history and mandatory child protective services notification recommended per institutional protocol.'
    }
  },

  {
    slug:'pediatric-round-pneumonia', title:'Pediatric Round Pneumonia', region:'peds', system:'Lung',
    modality:'Radiograph', sev:'urgent', emoji:'🫁',
    blurb:'Spherical parenchymal opacity in a child under 8 mimics a mass — CT rarely needed if classic location and fever.',
    tags:['Spherical opacity','Posterior segment','Streptococcus'], rp:'round-pneumonia',
    sheet:{
      find:'<b>Round or oval well-defined homogeneous consolidation</b>, most often in the <b>posterior segment of a lower lobe</b> (right > left), lacking air bronchograms early. Margins become ill-defined as consolidation matures. May look identical to a pulmonary mass on radiograph.',
      measure:'Typically 3–7 cm. Features favoring pneumonia over mass: fever, acute onset, posterior lower lobe location, age <8 years. CT reserved for atypical location, no clinical response after 4 weeks, or suspicion for abscess.',
      pitfall:'Round pneumonia is most common in children <8 years because collateral ventilation via pores of Kohn is incompletely developed, allowing confined spherical consolidation. In adults, a round opacity should be worked up as a mass.',
      pearl:'Follow-up CXR at 4–6 weeks is recommended to confirm resolution and exclude an underlying mass. If the lesion crosses a fissure or shows a bronchial cut-off, CT is warranted.',
      f:'[Well-defined] round opacity measuring [X] cm in the [posterior segment of the right lower lobe]. [No associated pleural effusion.] [No hilar or mediastinal lymphadenopathy.]',
      i:'Round opacity in the [right lower lobe] in a child — most consistent with round pneumonia in the appropriate clinical context. Recommend follow-up CXR at 4–6 weeks to confirm resolution.'
    }
  },

  {
    slug:'croup-steeple-sign', title:'Croup — Steeple Sign', region:'peds', system:'Airway',
    modality:'Radiograph', sev:'urgent', emoji:'🏰',
    blurb:'Subglottic narrowing creates a steeple sign on AP neck radiograph — croup is clinical, imaging excludes epiglottitis.',
    tags:['Steeple sign','Subglottic narrowing','Parainfluenza'], rp:'croup',
    sheet:{
      find:'AP soft-tissue neck radiograph: <b>symmetric subglottic tapering</b> replacing the normal shouldered subglottic airway — the <b>steeple sign</b> (inverted V, church-steeple shape). Lateral: subglottic soft tissue normal (distinguishes from epiglottitis). The epiglottis and aryepiglottic folds are normal.',
      measure:'Normal subglottic width is approximately equal to the tracheal width below it. Steeple sign: subglottic diameter <4 mm in a child or visually narrower than the trachea below.',
      pitfall:'Normal infants can have apparent subglottic narrowing during expiration or crying. Always obtain radiograph in inspiration. <b>Do not attempt direct laryngoscopy in the radiology suite</b> if epiglottitis cannot be excluded — risk of complete obstruction.',
      pearl:'Croup is a clinical diagnosis; radiograph is obtained mainly to exclude epiglottitis or foreign body when presentation is atypical. Steroid and nebulized racemic epinephrine are mainstays of treatment.',
      f:'AP neck radiograph demonstrates <b>symmetric subglottic narrowing</b> — steeple sign — at the level of the glottis. The epiglottis and aryepiglottic folds appear [normal]. [No foreign body. No pre-vertebral soft tissue swelling.]',
      i:'Symmetric subglottic narrowing consistent with croup (laryngotracheobronchitis). Normal epiglottis — epiglottitis excluded.'
    }
  },

  {
    slug:'epiglottitis-thumbprint-sign', title:'Epiglottitis — Thumbprint Sign', region:'peds', system:'Airway',
    modality:'Radiograph', sev:'killer', emoji:'👍',
    blurb:'Swollen epiglottis producing a thumbprint sign on lateral neck radiograph — secure the airway before imaging.',
    tags:['Thumbprint sign','Epiglottis','Airway emergency'], rp:'epiglottitis',
    sheet:{
      find:'<b>Lateral soft-tissue neck radiograph</b>: <b>thickened epiglottis (thumbprint sign)</b> — the epiglottis occupies more than one-third of the AP diameter of the subglottic airway. Thickened aryepiglottic folds (normal: thin and linear). Loss of the vallecula air space. Hypopharyngeal distension.',
      measure:'Normal epiglottis width: <8 mm in children, <10 mm in adults. Aryepiglottic folds: ≤7 mm. Thickening beyond these values with the appropriate clinical picture confirms epiglottitis.',
      pitfall:'Do NOT examine the pharynx or attempt IV access without airway personnel present. The radiograph should be obtained only in stable patients with personnel capable of immediate intubation. Never use AP view alone — the epiglottis is only reliably assessed on lateral.',
      pearl:'Classically caused by <i>Haemophilus influenzae</i> type b (now rare with vaccination); increasingly adult patients with <i>Streptococcus</i>. Adults can present with a more indolent course but are at equal risk of sudden obstruction.',
      call:'<b>Thickened epiglottis in an unwell child = immediate anesthesia or ENT at bedside.</b> Do not leave the patient unaccompanied.',
      f:'Lateral neck radiograph demonstrates a <b>markedly thickened epiglottis</b> measuring [X] mm (thumbprint sign) with thickening of the aryepiglottic folds and loss of the vallecula air space. [No foreign body. Pre-vertebral soft tissues are normal.]',
      i:'Radiographic findings consistent with epiglottitis. Emergent airway management recommended.'
    }
  },

  {
    slug:'retropharyngeal-abscess-peds', title:'Retropharyngeal Abscess', region:'peds', system:'Airway',
    modality:'CT', sev:'urgent', emoji:'🦠',
    blurb:'Rim-enhancing pre-vertebral collection with mass effect on the airway — distinguish cellulitis from drainable abscess.',
    tags:['Pre-vertebral swelling','Rim enhancement','Airway compression'], rp:'retropharyngeal-abscess',
    sheet:{
      find:'Contrast CT neck: <b>hypodense collection with a peripheral enhancing rim</b> in the pre-vertebral/retropharyngeal space (posterior to the posterior pharyngeal wall and anterior to the pre-vertebral muscles). Anterior displacement and narrowing of the airway, mass effect on adjacent structures. Extension into the parapharyngeal or danger space warrants notation.',
      measure:'Report craniocaudal extent, AP depth, and width of the collection. Airway AP diameter at the narrowest point. Assess for gas within the collection (anaerobic infection), internal septations, and internal low-density debris vs uniform pus.',
      pitfall:'Retropharyngeal <b>cellulitis/lymphadenitis</b> shows diffuse swelling without a discrete drainable fluid core — do not call it an abscess. Normal retropharyngeal soft tissue: ≤7 mm at C2, ≤22 mm at C6 in children. Inspiratory lateral radiographs can artifactually thicken retropharyngeal tissue.',
      pearl:'Danger space (between alar and pre-vertebral fascia) extends from skull base to the posterior mediastinum — infection here can descend to cause mediastinitis. Report any inferior extension beyond T4.',
      call:'<b>Airway narrowing >50% or rapid progression</b> = ENT and anesthesia at bedside; the child must not be sent to CT unaccompanied without airway support.',
      f:'[X × X × X] cm rim-enhancing hypodense collection within the retropharyngeal space at [C2–C4], anteriorly displacing the posterior pharyngeal wall with [X] mm of residual airway lumen. [No gas. No extension into the danger space. No mediastinitis.]',
      i:'Retropharyngeal abscess at [C2–C4]. Recommend ENT consultation for surgical drainage. No mediastinal extension.'
    }
  },

  {
    slug:'pediatric-ovarian-torsion', title:'Pediatric Ovarian and Testicular Torsion', region:'peds', system:'GU',
    modality:'US', sev:'killer', emoji:'🔄',
    blurb:'Absent Doppler flow in an enlarged ovary or testis with a whirlpool sign demands emergent surgical exploration.',
    tags:['Absent Doppler flow','Whirlpool sign','Enlarged gonad'], rp:'ovarian-torsion',
    sheet:{
      find:'<b>Ovarian torsion</b>: enlarged (>4 cm) ovary with peripheral follicles displaced to the periphery, free pelvic fluid, and a <b>twisted vascular pedicle (whirlpool sign)</b>. Absent or markedly diminished intraovarian Doppler signal. The ipsilateral fallopian tube may be thickened. <b>Testicular torsion</b>: enlarged testis with heterogeneous echogenicity, absent intratesticular Doppler flow, and a hyperechoic epididymis with reactive hydrocele.',
      measure:'Ovarian volume: length × width × height × 0.523. Ovary >4 cm³ (prepubertal) or >20 cm³ (adolescent) is abnormal. Testicular Doppler: compare with the contralateral side; always document the presence or absence of flow.',
      pitfall:'Preserved Doppler flow does NOT exclude torsion — intermittent torsion or early torsion can have preserved signal. Clinical suspicion in a girl with acute pelvic pain and an enlarged ovary is sufficient for surgical exploration. Ovarian torsion is associated with a mass or cyst in 50–70% of cases in children.',
      pearl:'The <b>twisted pedicle (whirlpool sign)</b> is the most specific sonographic finding for torsion and may be visible even when Doppler seems preserved. Ovarian salvage is possible with prompt detorsion even if the ovary appears necrotic.',
      call:'<b>Clinical suspicion for torsion with equivocal or absent Doppler = emergent gynecology or urology consultation.</b> Do not delay surgery awaiting repeat imaging.',
      f:'[Right] ovary is enlarged measuring [X × X × X] cm (volume [X] cm³) with peripherally displaced follicles. [Absent / markedly diminished] intraovarian Doppler flow. [Twisted vascular pedicle identified / not identified.] [Moderate free pelvic fluid.]',
      i:'Sonographic findings highly suspicious for [right] ovarian torsion. Emergent gynecologic consultation recommended.'
    }
  },

  {
    slug:'wilms-tumor', title:'Wilms Tumor (Nephroblastoma)', region:'peds', system:'Abdomen',
    modality:'CT', sev:'urgent', emoji:'🎗️',
    blurb:'Large intrinsic renal mass in a child under 5 — CT characterizes extent, contralateral kidney, and venous involvement.',
    tags:['Intrinsic renal mass','Venous extension','Bilateral'], rp:'nephroblastoma',
    sheet:{
      find:'<b>Large heterogeneous intrinsic renal mass</b> with a pseudocapsule, variable cystic/necrotic areas, and enhancement of viable tissue on post-contrast CT. The mass arises from and distorts the kidney (vs. neuroblastoma which displaces the kidney laterally). Assess: <b>renal vein and IVC extension</b> (up to 15%), contralateral kidney involvement (bilateral in 5–7%), lymph node enlargement, and liver metastases.',
      measure:'Report three-dimensional size. Describe extension: Wilms staging I–V based on capsule integrity, local extension, nodal involvement, and bilateral disease.',
      pitfall:'Neuroblastoma crosses the midline, engulfs vessels without invading them, and displaces rather than distorts the kidney — Wilms is intrinsic. Always evaluate the contralateral kidney (bilaterality alters surgical plan).',
      pearl:'<b>Renal vein and IVC thrombus</b> in a child with a renal mass is a strong predictor of Wilms tumor. Pre-operative chemotherapy (per COG protocol) is first-line for very large or bilateral tumors.',
      call:'<b>IVC extension to the right atrium</b> requires cardiac surgery — flag immediately.',
      f:'[X × X × X] cm heterogeneous [right] renal mass with [peripheral enhancement / central necrosis], arising intrinsically from the kidney. [Renal vein is patent / contains a filling defect measuring X cm.] [IVC is [patent / extends to the level of X].] [Contralateral kidney appears normal.] [No enlarged lymph nodes.]',
      i:'Large intrinsic [right] renal mass — most consistent with Wilms tumor (nephroblastoma) in this age group. [No IVC extension. No contralateral disease.] Oncology and pediatric surgery referral recommended.'
    }
  },

  {
    slug:'neuroblastoma', title:'Neuroblastoma', region:'peds', system:'Abdomen',
    modality:'CT', sev:'urgent', emoji:'🧠',
    blurb:'Suprarenal calcified mass crossing the midline and engulfing vessels without invading the kidney — classic neuroblastoma.',
    tags:['Suprarenal mass','Midline crossing','Vascular encasement'], rp:'neuroblastoma',
    sheet:{
      find:'<b>Heterogeneous, calcified (70–80%) suprarenal or paraspinal mass</b> that displaces the ipsilateral kidney inferolaterally without intrinsic renal involvement. The mass characteristically <b>crosses the midline</b> and <b>encases (but does not occlude) the aorta, celiac axis, or SMA</b>. Intraspinal extension through neural foramina (dumbbell tumor) — assess on axial and coronal CT. Liver metastases (Stage 4S), bone metastases, and bone marrow involvement.',
      measure:'Report maximum dimensions in three planes, degree of vascular encasement, distance from the aorta, and any spinal canal involvement. IDRF (image-defined risk factors) for surgical planning.',
      pitfall:'Adrenal hemorrhage in a neonate is avascular and resolves over weeks on serial US/MRI — differentiate from neuroblastoma (which grows). Wilms tumor is intrinsic to the kidney; neuroblastoma displaces it.',
      pearl:'Elevation of urinary catecholamines (VMA, HVA) in 90% of cases — a positive biomarker in a child with a suprarenal mass is essentially diagnostic. <b>MIBG scan</b> is the staging modality of choice after CT/MRI.',
      f:'[X × X × X] cm heterogeneous [right suprarenal] mass with [punctate calcifications], crossing the midline and encasing [the celiac axis and SMA]. The [right] kidney is displaced inferolaterally but appears intrinsically normal. [No intraspinal extension. Liver metastases: [present / absent].]',
      i:'Imaging findings consistent with [right] suprarenal neuroblastoma with vascular encasement. Oncology referral and MIBG staging recommended.'
    }
  },

  {
    slug:'dka-cerebral-edema', title:'DKA — Cerebral Edema', region:'peds', system:'Neuro',
    modality:'CT', sev:'killer', emoji:'🧠',
    blurb:'Diffuse cerebral edema with sulcal effacement and small ventricles complicating pediatric DKA — herniation risk is high.',
    tags:['Sulcal effacement','Small ventricles','Herniation'], rp:'cerebral-oedema',
    sheet:{
      find:'<b>Diffuse cerebral swelling</b>: loss of gray-white differentiation, effacement of cortical sulci, basal cisterns, and ventricles. On non-contrast CT: diffuse cerebral hypodensity relative to the posterior fossa. Compare ventricle size to age-matched normals. Assess for signs of herniation: downward displacement of cerebellar tonsils, effacement of the prepontine cistern, or midline shift.',
      measure:'Measure ventricular width (frontal horn width, bifrontal index). Compare to age-matched normal ranges. Document basal cistern patency (suprasellar, quadrigeminal, and ambient cisterns).',
      pitfall:'Early cerebral edema in DKA can be subtle — the CT may appear relatively normal while the child is symptomatic. MRI with DWI is more sensitive for early edema (restricted diffusion) and posterior reversible encephalopathy syndrome (PRES), which can also occur in DKA.',
      pearl:'Cerebral edema in DKA typically occurs 6–12 hours into treatment, not at presentation. Risk factors: younger age, new-onset DKA, rapid fluid rehydration, bicarbonate use. If signs of herniation are present, immediate hypertonic saline or mannitol is indicated.',
      call:'<b>Herniation signs on CT (effaced basal cisterns, downward tonsils, midline shift)</b> = immediate neurocritical care and neurosurgery consultation.',
      f:'Non-contrast CT head demonstrates diffuse cerebral swelling with [effacement of cortical sulci and basal cisterns]. Ventricles are [small / effaced]. [Loss of gray-white differentiation in the [bilateral frontal lobes].] [No midline shift. No hemorrhage. [Cerebellar tonsils are at the level of the foramen magnum.]]',
      i:'CT findings consistent with diffuse cerebral edema in the setting of diabetic ketoacidosis. [No herniation. / Signs of transtentorial herniation — immediate neurosurgical consultation.]'
    }
  },

  {
    slug:'pediatric-osteomyelitis-septic-hip', title:'Pediatric Osteomyelitis and Septic Hip', region:'peds', system:'Skeletal',
    modality:'US', sev:'urgent', emoji:'🦴',
    blurb:'Hip effusion on US plus fever and elevated ESR mandates arthrocentesis to exclude septic arthritis from transient synovitis.',
    tags:['Hip effusion','Kocher criteria','Periosteal reaction'], rp:'osteomyelitis',
    sheet:{
      find:'<b>US</b>: hip joint effusion (anterior capsule-to-femoral neck distance >5 mm, or >2 mm asymmetry vs the contralateral side). Echogenic debris within the joint suggests infection over transient synovitis. <b>MRI</b> (gold standard for osteomyelitis): bone marrow edema (T2/STIR hyperintensity with T1 hypointensity), periosteal enhancement, and adjacent soft tissue abscess. Subperiosteal abscess on MRI is highly specific. <b>Radiograph</b>: soft tissue swelling, periosteal elevation (7–10 days after onset), lytic lesion (2–3 weeks).',
      measure:'Kocher criteria for septic hip (0–4 points): fever >38.5°C, non-weight-bearing, ESR >40 mm/h, WBC >12,000. 4/4 criteria: >99% probability septic arthritis. US effusion alone is not diagnostic — joint aspiration is required.',
      pitfall:'Transient synovitis can produce a large effusion indistinguishable from septic arthritis on US — never rely on US alone. Lyme arthritis and reactive arthritis are important mimics. Periosteal reaction on radiograph is a late finding; a negative radiograph does not exclude osteomyelitis.',
      pearl:'<b>MRI with gadolinium</b> is the gold standard for osteomyelitis and detects early marrow edema, subperiosteal abscess, and extent of soft tissue involvement before radiographic changes appear. Arrange same-day MRI if septic arthritis is excluded but osteomyelitis is still suspected.',
      call:'<b>US effusion + Kocher score ≥3 = presumptive septic arthritis — emergent orthopedic consultation and arthrocentesis.</b>',
      f:'US of the [right] hip demonstrates an anterior joint effusion of [X] mm (contralateral [X] mm), [with echogenic debris]. [No periosteal elevation on radiograph.] [MRI: T2/STIR hyperintensity of the [proximal right femoral metaphysis] with periosteal elevation and a [X] mm subperiosteal fluid collection.]',
      i:'[Right] hip effusion with [echogenic debris] — cannot exclude septic arthritis. Orthopedic consultation and joint aspiration recommended. [MRI findings consistent with osteomyelitis of the proximal right femur with subperiosteal abscess.]'
    }
  },

  {
    slug:'scfe-transient-synovitis', title:'SCFE and Developmental Dysplasia of the Hip', region:'peds', system:'Skeletal',
    modality:'Radiograph', sev:'urgent', emoji:'🦴',
    blurb:'Klein\'s line violation and a widened physis confirm SCFE in a limping obese adolescent — urgent orthopedic referral.',
    tags:['Klein\'s line','Widened physis','DDH'], rp:'slipped-capital-femoral-epiphysis',
    sheet:{
      find:'<b>SCFE</b>: AP pelvis — <b>Klein\'s line</b> (line along superior femoral neck) fails to intersect the epiphysis (normally intersects the lateral 20% of the head). The epiphysis is displaced <b>posterior, medial, and inferior</b> to the metaphysis. <b>Widened and blurred physis</b> is the earliest finding. Frog-leg lateral is most sensitive. <b>Developmental Dysplasia of the Hip (DDH)</b>: US in infants <4 months — assess alpha angle (normal >60°), beta angle, and coverage of the femoral head by the acetabulum. AP pelvis in older children: lateral displacement of the femoral head, shallow acetabulum, Shenton\'s line broken.',
      measure:'SCFE severity: mild (<33% displacement), moderate (33–50%), severe (>50%). Alpha angle on US for DDH: <60° = dysplasia. Acetabular index on AP radiograph: >30° abnormal in infants.',
      pitfall:'A normal AP pelvis does NOT exclude early SCFE — always obtain a frog-leg lateral. Bilateral SCFE occurs in 20–40%; always evaluate both hips. In DDH, dynamic US (stress views) by an experienced sonographer identifies borderline instability.',
      pearl:'SCFE in a child <10 years or with atypical body habitus warrants endocrine workup (hypothyroidism, growth hormone deficiency). Early DDH detected by US in the first 6 months responds to Pavlik harness; late cases require surgery.',
      call:'<b>Acute unstable SCFE</b> (unable to weight-bear) requires emergent orthopedic consultation — avascular necrosis risk is highest in unstable slips.',
      f:'AP pelvis and frog-leg lateral radiographs demonstrate [right] SCFE with [Klein\'s line failing to intersect the epiphysis] and [X%] posterior displacement. Physis is [widened and irregular]. [Contralateral hip appears normal / shows early changes.] [No avascular necrosis changes identified.]',
      i:'[Moderate right] slipped capital femoral epiphysis. Urgent orthopedic consultation recommended. Contralateral hip [normal — recommend surveillance].'
    }
  }

]);
