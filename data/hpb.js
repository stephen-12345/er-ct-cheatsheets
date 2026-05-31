/* Region: Liver, Biliary, Pancreas, Spleen — hepatobiliary emergencies. */
ERCT.add([

  /* ── BESPOKE PAGE (no sheet) ─────────────────────────────────────────── */
  {
    slug:'pancreatitis', title:'Acute Pancreatitis', region:'hpb', system:'Pancreas',
    modality:'CT', sev:'urgent', emoji:'🧫',
    blurb:'Interstitial vs necrotizing, the revised Atlanta collections, CT severity index, and vascular complications.',
    tags:['Necrosis','Atlanta','Pseudoaneurysm'], rp:'acute-pancreatitis',
    href:'pancreatitis/pancreatitis.html'
  },

  /* ── FULL SHEET ENTRIES ───────────────────────────────────────────────── */

  {
    slug:'acute-calculous-cholecystitis', title:'Acute Calculous Cholecystitis', region:'hpb', system:'Gallbladder',
    modality:'CT abdomen', sev:'urgent', emoji:'🫀',
    blurb:'Gallstone impacted at the neck, distended gallbladder with wall thickening and pericholecystic stranding.',
    tags:['Calculus','Wall thickening','Stranding'], rp:'acute-cholecystitis',
    sheet:{
      find:'<b>Gallbladder distension</b> (&gt;5 cm transverse), wall thickening (&gt;3 mm), <b>pericholecystic fat stranding</b>, and a calculus impacted at the neck or cystic duct. Subserosal edema produces a halo.',
      measure:'GB wall &gt;3 mm (in a non-contracted, non-fasting state). Transverse GB diameter &gt;5 cm. Identify the obstructing stone at the neck or cystic duct.',
      pitfall:'Ascites and hypoalbuminemia cause GB wall thickening without cholecystitis. <b>Acalculous cholecystitis</b> (ICU patients) shares the same CT findings without a calculus — clinical context is key.',
      pearl:'<b>Pericholecystic fluid</b> confined to the GB fossa is a strong secondary sign. The <b>CT Murphy sign</b> (hyperemia on arterial phase) supports the diagnosis when clinical signs are equivocal.',
      call:'Signs of perforation (pericholecystic abscess, free air in GB wall, free fluid) require <b>urgent surgical consultation</b>.',
      f:'Distended gallbladder ([X] cm transverse) with wall thickening ([X] mm), pericholecystic fat stranding, and an obstructing calculus at the [neck/cystic duct]. [No pericholecystic abscess or free air.]',
      i:'CT findings consistent with acute calculous cholecystitis. [No CT evidence of perforation or gangrene.]'
    }
  },

  {
    slug:'gangrenous-cholecystitis', title:'Gangrenous Cholecystitis', region:'hpb', system:'Gallbladder',
    modality:'CT abdomen', sev:'killer', emoji:'💀',
    blurb:'Ischemic necrosis of the gallbladder wall — absent mural enhancement and intraluminal membranes herald perforation.',
    tags:['Absent enhancement','Membranes','Perforation'], rp:'gangrenous-cholecystitis',
    sheet:{
      find:'<b>Absent or asymmetric mural enhancement</b> on arterial/portal phase (ischemic necrosis). Intraluminal membranes or strands (sloughed mucosa), irregular wall, intraluminal gas, or pericholecystic abscess.',
      measure:'Compare arterial-phase GB wall enhancement to adjacent liver parenchyma. Any focal non-enhancing mural segment raises gangrene. Intraluminal gas is a highly specific sign.',
      pitfall:'Dense bile (milk of calcium) can mimic intraluminal soft tissue — look for dependent layering. <b>Emphysematous cholecystitis</b> requires an additional search for gas specifically in the wall (not just lumen).',
      pearl:'Gangrenous cholecystitis carries a <b>perforation rate up to 40%</b>; CT may underestimate it — surgical correlation is essential. Diabetic and immunosuppressed patients are at highest risk.',
      call:'<b>Absent mural enhancement or intraluminal gas</b> — communicate immediately for urgent cholecystectomy or percutaneous drainage.',
      f:'Distended gallbladder with [absent/markedly diminished] mural enhancement, intraluminal [membranes/gas], and pericholecystic [stranding/fluid/abscess]. [No free intraperitoneal air.]',
      i:'CT findings highly suspicious for gangrenous cholecystitis. [No frank perforation identified.] Urgent surgical consultation recommended.'
    }
  },

  {
    slug:'emphysematous-cholecystitis', title:'Emphysematous Cholecystitis', region:'hpb', system:'Gallbladder',
    modality:'CT abdomen', sev:'killer', emoji:'💨',
    blurb:'Gas in the gallbladder wall from gas-forming organisms — diabetic emergency with high mortality.',
    tags:['Mural gas','Diabetic','Gas-forming'], rp:'emphysematous-cholecystitis',
    sheet:{
      find:'<b>Gas within the gallbladder wall</b> (curvilinear or bubbly lucency conforming to the wall contour) on CT — the key distinction from simple intraluminal gas. May extend into the pericholecystic tissues or portal venous radicles.',
      measure:'Identify gas as intramural (wall-conforming) vs intraluminal (non-dependent layer) vs biliary. Three types: Type I = wall gas only; Type II = wall + lumen gas; Type III = pericholecystic extension.',
      pitfall:'Intraluminal gas alone (Type 0/II) without mural involvement does not meet criteria for emphysematous cholecystitis. Scout/plain film may show the GB gas and prompt CT confirmation.',
      pearl:'<b>Clostridium welchii</b> and other anaerobes predominate. Acalculous in ~50%. Mortality 15–25%, much higher than standard cholecystitis — expedite surgical or IR referral.',
      call:'<b>Gas in the gallbladder wall</b> is emphysematous cholecystitis until proven otherwise — <b>call surgery immediately</b>.',
      f:'Gas within the [gallbladder wall / pericholecystic tissues], consistent with emphysematous cholecystitis. [Distended gallbladder with wall thickening.] [No portal venous gas / portal venous gas present.]',
      i:'Emphysematous cholecystitis. Urgent surgical consultation recommended and discussed with [name] at [time].'
    }
  },

  {
    slug:'choledocholithiasis', title:'Choledocholithiasis', region:'hpb', system:'Biliary',
    modality:'CT abdomen', sev:'urgent', emoji:'🪨',
    blurb:'Hyperdense stone in a dilated duct, target sign on axial CT — trace the duct to the ampulla.',
    tags:['CBD stone','Duct dilation','Target sign'], rp:'choledocholithiasis',
    sheet:{
      find:'<b>Hyperdense (or isodense) calculus</b> within the common bile duct, producing a <b>target sign</b> (stone surrounded by bile) on axial images. Upstream intrahepatic and common bile duct dilation. Trace the CBD to the ampulla.',
      measure:'CBD &gt;8 mm (post-cholecystectomy &gt;10 mm) is dilated. Measure the calculus. Note any associated bile duct wall thickening (cholangitis) or pancreatitis.',
      pitfall:'Isodense stones (cholesterol) are easy to miss — a dilated CBD terminating abruptly at the ampulla without visible mass should prompt MRCP. Pneumobilia (prior sphincterotomy or fistula) can obscure small stones.',
      pearl:'<b>MRCP is more sensitive</b> for small stones; CT misses ~20–30% of isodense calculi. Always consider concurrent cholangitis (fever, jaundice, RUQ pain = Charcot triad).',
      f:'Hyperdense calculus ([X] mm) within the [distal] common bile duct with upstream CBD dilation ([X] mm) and [mild] intrahepatic biliary dilation. [No associated pancreatitis or biloma.]',
      i:'Choledocholithiasis at the [distal CBD/ampulla]. [CBD dilation [X] mm.] [Clinical correlation for Charcot triad / ascending cholangitis.]'
    }
  },

  {
    slug:'ascending-cholangitis', title:'Ascending Cholangitis', region:'hpb', system:'Biliary',
    modality:'CT abdomen', sev:'killer', emoji:'🔥',
    blurb:'Charcot triad on CT — dilated ducts with wall enhancement, obstructing stone, and hepatic abscesses signal Reynold\'s pentad.',
    tags:['Duct enhancement','Obstruction','Abscess'], rp:'ascending-cholangitis',
    sheet:{
      find:'<b>Biliary ductal dilation</b> with <b>periductal enhancement and edema</b> (thickened, enhancing bile duct walls). Identify the cause of obstruction (stone, stricture, mass). Hepatic arterial-phase hyperenhancement around ducts reflects periportal inflammation.',
      measure:'CBD diameter. Degree of intrahepatic dilation. Look for hepatic abscesses (Reynold\'s pentad: adds shock and altered consciousness to Charcot triad).',
      pitfall:'Thin-slice portal-phase images are needed; periductal enhancement is subtle on a single phase. PSC produces a beaded non-dilated biliary tree — different pattern.',
      pearl:'<b>Pyogenic hepatic abscesses</b> complicating cholangitis carry high mortality — carefully survey all liver segments for early abscess formation.',
      call:'Ascending cholangitis with septic shock or hepatic abscesses (Reynold\'s pentad equivalent) demands <b>immediate biliary decompression</b> — communicate now.',
      f:'Dilated common bile duct ([X] mm) and intrahepatic ducts with periductal wall thickening and enhancement. Obstructing [calculus/stricture] at [location]. [No / Early hepatic abscess formation at [segment].]',
      i:'CT findings consistent with ascending cholangitis, [with/without] hepatic abscess. Cause: [choledocholithiasis/stricture]. Urgent biliary decompression indicated.'
    }
  },

  {
    slug:'gallstone-ileus', title:'Gallstone Ileus (Rigler Triad)', region:'hpb', system:'Biliary',
    modality:'CT abdomen', sev:'urgent', emoji:'🪨',
    blurb:'Pneumobilia, ectopic gallstone, and small bowel obstruction — Rigler triad from a cholecystoenteric fistula.',
    tags:['Rigler triad','Pneumobilia','Ectopic stone'], rp:'gallstone-ileus',
    sheet:{
      find:'<b>Rigler triad</b>: (1) small bowel obstruction with transition point; (2) ectopic radiopaque or radio-lucent gallstone (most often at <b>terminal ileum</b>); (3) pneumobilia or air in the GB. Contracted or absent gallbladder with pericholecystic fat stranding from the fistula site.',
      measure:'Stone diameter — stones &gt;2.5 cm cause ileus; those &lt;2.5 cm may pass. Identify transition point. Bouveret syndrome = rare gastric outlet obstruction from stone at duodenum.',
      pitfall:'Only ~50% of gallstones are calcified on CT — look for the transition point ± a soft-tissue density filling defect within the lumen. Pneumobilia may be absent if the fistula closed.',
      pearl:'The <b>cholecystoduodenal fistula</b> is the most common; cholecystocolonic and cholecystogastric fistulas also occur. Enterolithotomy is the emergency procedure; fistula repair is deferred.',
      call:'Complete SBO with obstructing ectopic stone requires <b>surgical consultation</b>.',
      f:'Small bowel obstruction with a transition point in the [terminal ileum] where an ectopic calcified stone ([X] mm) is identified. Pneumobilia and [contracted/irregular] gallbladder consistent with a cholecystoenteric fistula.',
      i:'Gallstone ileus: Rigler triad of SBO, ectopic gallstone at the [terminal ileum], and pneumobilia. Cholecystoenteric fistula presumed.'
    }
  },

  {
    slug:'mirizzi-syndrome', title:'Mirizzi Syndrome', region:'hpb', system:'Biliary',
    modality:'MRCP/CT', sev:'urgent', emoji:'🔄',
    blurb:'Large cystic duct stone extrinsically compresses the common hepatic duct, causing obstructive jaundice.',
    tags:['CHD compression','Cystic duct stone','Jaundice'], rp:'mirizzi-syndrome',
    sheet:{
      find:'<b>Large stone in the cystic duct or infundibulum</b> abutting and compressing the <b>common hepatic duct</b> with upstream intrahepatic biliary dilation. The CBD below the cystic duct junction is normal caliber. Look for cholecystobiliary fistula (Type II–IV).',
      measure:'Measure CHD at point of compression vs CBD below. Distinguish Type I (extrinsic compression only) from Type II–IV (fistula with varying degrees of CBD wall involvement — changes surgical approach dramatically).',
      pitfall:'CT alone may miss the fistula component; MRCP (or ERCP) is needed for full classification. Cholangiocarcinoma can produce an identical appearance — look for ductal wall mass/enhancement.',
      pearl:'<b>McSherry classification</b> (I–IV) determines operability and technique. Type I can be treated laparoscopically; Types III–IV often need hepaticojejunostomy.',
      f:'Large calculus ([X] mm) in the [cystic duct/GB infundibulum] with extrinsic compression of the common hepatic duct. Intrahepatic biliary dilation. CBD below the cystic duct junction [normal / [X] mm]. [No cholecystobiliary fistula identified on CT.]',
      i:'CT findings consistent with Mirizzi syndrome, Type [I]. MRCP recommended for fistula classification before surgical planning.'
    }
  },

  {
    slug:'hepatic-abscess-pyogenic', title:'Pyogenic Hepatic Abscess', region:'hpb', system:'Liver',
    modality:'CT abdomen', sev:'urgent', emoji:'🧫',
    blurb:'Rim-enhancing hypoattenuating liver collection with perilesional edema — portal venous source vs cholangitic.',
    tags:['Rim enhancement','Cluster sign','Portal vein'], rp:'liver-abscess',
    sheet:{
      find:'<b>Hypoattenuating collection</b> with a <b>thick, irregular enhancing rim</b> and perilesional hepatic parenchymal hyperenhancement (arterial phase). The <b>cluster sign</b> = multiple small abscesses coalescing into one. Gas within the collection is a specific finding.',
      measure:'Size, segment location (Couinaud), and proximity to hepatic vessels/biliary ducts. Multiple small abscesses vs single large collection affects drainage planning.',
      pitfall:'Hepatic metastases (especially mucinous primary) can be rim-enhancing and hypoattenuating — clinical context (fever, leukocytosis) and DWI (MRI) help. Amebic abscess is indistinguishable on CT — serology needed.',
      pearl:'Source search: biliary (cholangitic pattern = multiple peripheral small abscesses); portal venous (pylephlebitis from appendicitis/diverticulitis); arterial (hematogenous). Biliary source requires concurrent biliary decompression.',
      call:'Gas-forming abscess or failed percutaneous drainage — <b>discuss with surgery/IR</b>.',
      f:'[Solitary / Multiple] hypoattenuating [collection(s)] in [liver segment(s)] measuring [X] cm with rim enhancement and perilesional edema. [Internal gas bubbles present.] [No biliary communication identified.]',
      i:'CT findings consistent with pyogenic hepatic abscess in [segment(s)]. [Biliary/portal venous/hematogenous] source suspected. Percutaneous drainage and blood cultures recommended.'
    }
  },

  {
    slug:'liver-laceration-aast', title:'Liver Laceration (AAST)', region:'hpb', system:'Liver',
    modality:'CT abdomen', sev:'killer', emoji:'💥',
    blurb:'Grade the laceration by depth and vascular involvement — active extravasation and devascularization drive AAST grade and management.',
    tags:['AAST grade','Active bleed','Devascularization'], rp:'liver-trauma',
    sheet:{
      find:'<b>Hypodense linear or branching lacerations</b> through the hepatic parenchyma. Active extravasation = <b>hyperdense blush</b> on portal or delayed phase. Subcapsular/perihepatic hematoma. Assess the hepatic veins, IVC, and portal vein for involvement.',
      measure:'<b>AAST grading</b>: I = subcapsular hematoma &lt;10% or laceration &lt;1 cm deep; II = &lt;50% subcapsular or &lt;10 cm parenchymal hematoma / laceration 1–3 cm; III = &gt;50% subcapsular or expanding / laceration &gt;3 cm; IV = laceration 25–75% of lobe or 1–3 Couinaud segments; V = &gt;75% of lobe or &gt;3 Couinaud segments or hepatic vein/IVC injury; VI = hepatic avulsion.',
      pitfall:'Arterial-phase images are essential to detect extravasation — portal phase alone will miss many. <b>Delayed-phase pooling</b> of contrast confirms active hemorrhage vs pseudoaneurysm.',
      pearl:'Grade III–V with active extravasation typically warrants angioembolization. Isolated hepatic vein injuries (Grade V) carry very high mortality; early communication is critical.',
      call:'Active extravasation or Grade IV–V injury — <b>notify surgery and IR immediately</b>.',
      f:'Hepatic [parenchymal laceration(s)] in [segment(s)] measuring [X] cm in depth with [subcapsular/perihepatic hematoma]. [Active contrast extravasation present / No active extravasation.] [Hepatic vein/IVC involvement: yes/no.]',
      i:'Liver laceration, AAST Grade [I–V], with [active hemorrhage/no active hemorrhage]. [Discussed with trauma surgery at time.]'
    }
  },

  {
    slug:'hepatic-infarct', title:'Hepatic Infarct', region:'hpb', system:'Liver',
    modality:'CT abdomen', sev:'urgent', emoji:'⚡',
    blurb:'Wedge-shaped, non-enhancing peripheral hepatic segment — hepatic artery occlusion after transplant, embolization, or hypercoagulability.',
    tags:['Non-enhancement','Wedge','Hepatic artery'], rp:'hepatic-infarction',
    sheet:{
      find:'<b>Wedge-shaped or geographic non-enhancing hypodensity</b> in the hepatic parenchyma on portal-phase CT, typically peripheral and following a segmental arterial distribution. No discrete rim enhancement (unlike abscess).',
      measure:'Segment involved (Couinaud). Look upstream for hepatic artery occlusion or thrombosis on CTA. Assess for portal vein patency — combined hepatic artery and portal venous occlusion is catastrophic.',
      pitfall:'<b>Perfusion artifact</b> (third inflow, transient hepatic attenuation difference/THAD) produces wedge-shaped transient enhancement differences on arterial phase — always confirm on portal-phase and look for a cause.',
      pearl:'In the <b>post-transplant</b> liver, hepatic artery thrombosis is the most feared early complication (causes biliary ischemia and graft loss) — Doppler US is first-line but CT/CTA confirms.',
      call:'Hepatic artery thrombosis post-transplant requires <b>immediate transplant surgery notification</b> — window for revascularization is narrow.',
      f:'[Wedge-shaped / Geographic] non-enhancing hypodense region in [hepatic segments] consistent with [segmental / lobar] hepatic infarction. [Hepatic artery [patent/thrombosed] at [location] on CTA.]',
      i:'Hepatic infarction, [segmental/lobar], in Couinaud segment(s) [X]. [Hepatic artery thrombosis identified — urgent vascular/transplant surgery consultation.]'
    }
  },

  {
    slug:'budd-chiari-syndrome', title:'Budd-Chiari Syndrome', region:'hpb', system:'Liver',
    modality:'CT abdomen', sev:'urgent', emoji:'🌊',
    blurb:'Hepatic vein thrombosis with caudate lobe hypertrophy, heterogeneous enhancement, and ascites.',
    tags:['Hepatic vein','Caudate hypertrophy','Ascites'], rp:'budd-chiari-syndrome',
    sheet:{
      find:'<b>Non-opacification of hepatic veins</b> on portal-phase CT with <b>heterogeneous "flip-flop" enhancement</b> — central parenchyma (caudate) enhances early (direct IVC drainage), peripheral parenchyma enhances late. Caudate lobe hypertrophy, ascites, and congested portal/IVC.',
      measure:'Identify which hepatic veins are thrombosed (right, middle, left). Assess IVC for involvement (hepatic portion and suprarenal IVC). Note acute vs chronic: acute has hyperdense thrombus; chronic has collateral veins.',
      pitfall:'Early acute Budd-Chiari may show only subtle hepatic heterogeneity — delayed-phase imaging is essential to show the "flip-flop" pattern. Hepatic veno-occlusive disease (sinusoidal obstruction) produces similar CT findings but occludes at a sub-venous level.',
      pearl:'Underlying thrombophilia (myeloproliferative neoplasm, antiphospholipid syndrome, PNH) is present in &gt;75% — labs are essential. TIPS or liver transplant for refractory disease.',
      f:'Non-opacification of the [right / middle / left] hepatic vein(s) with heterogeneous hepatic enhancement and caudate lobe hypertrophy. [IVC involvement: yes/no.] [Ascites present.] Acute thrombus [seen/not seen].',
      i:'CT findings consistent with Budd-Chiari syndrome involving the [right/middle/left] hepatic vein(s). [IVC extension noted.] Hematology consultation recommended for thrombophilia workup.'
    }
  },

  {
    slug:'hcc-lirads', title:'Hepatocellular Carcinoma (LI-RADS)', region:'hpb', system:'Liver',
    modality:'CT abdomen', sev:'urgent', emoji:'🔴',
    blurb:'Arterial hyperenhancement with washout and enhancing capsule in a cirrhotic liver — LI-RADS 5 is HCC until proven otherwise.',
    tags:['LI-RADS 5','Washout','APHE'], rp:'hepatocellular-carcinoma',
    sheet:{
      find:'<b>Arterial phase hyperenhancement (APHE)</b> — non-rim — with <b>portal venous or delayed washout</b> (lesion becomes hypodense relative to liver) and an enhancing capsule. In cirrhosis, this constellation = <b>LI-RADS 5</b> (HCC).',
      measure:'Measure the dominant lesion in three planes. Portal vein tumor thrombus (enhancing thrombus in PV = APHE within thrombus) changes staging (BCLC C). Note vascular invasion (hepatic vein, IVC), satellite nodules, and lymphadenopathy.',
      pitfall:'<b>LI-RADS 4</b> has APHE but lacks washout or capsule — do not over-call as HCC. Hemangiomas can show APHE (flash-filling small hemangioma); peripheral nodular enhancement with progressive fill-in is the hemangioma pattern.',
      pearl:'LI-RADS applies <b>only to cirrhotic or chronic HBV patients</b>. Report size and BCLC stage descriptors (single vs multifocal, vascular invasion, extrahepatic spread) to guide treatment.',
      f:'[X] cm arterially hyperenhancing lesion in [segment] with portal-phase washout and [enhancing capsule/no capsule]. [Portal vein tumor thrombus: present/absent.] [Additional satellite nodules.]',
      i:'LI-RADS [5] observation in [segment(s)], [X] cm, consistent with HCC in the setting of [cirrhosis/chronic HBV]. [Portal vein tumor thrombus: present.] Hepatology/multidisciplinary tumor board referral recommended.'
    }
  },

  {
    slug:'ruptured-hepatic-adenoma', title:'Ruptured Hepatic Adenoma or HCC', region:'hpb', system:'Liver',
    modality:'CTA', sev:'killer', emoji:'💥',
    blurb:'Active hepatic hemorrhage in a woman on OCPs or a cirrhotic — find the bleeding source and call IR.',
    tags:['Active bleed','Adenoma','Hemoperitoneum'], rp:'hepatic-adenoma',
    sheet:{
      find:'<b>Active contrast extravasation</b> (arterial-phase blush) within or at the surface of a hypervascular hepatic lesion with <b>peritumoral and perihepatic hematoma</b>. Subcapsular hematoma ± hemoperitoneum (hyperdense free fluid). The underlying lesion may be heterogeneous with internal hemorrhage.',
      measure:'Estimate hemoperitoneum volume. Identify the bleeding segment for IR guidance. Note whether the capsule is intact (subcapsular) vs ruptured (free hemoperitoneum).',
      pitfall:'Bleeding HCC and adenoma are indistinguishable on emergency CT without clinical context (cirrhosis, OCP use). HCC often has portal vein thrombus and background cirrhosis; adenoma in young women without cirrhosis.',
      pearl:'<b>Adenoma rupture risk</b> increases with lesion &gt;5 cm, sub-capsular location, beta-catenin subtype, and OCP use. Emergency angioembolization is first-line; resection is elective after stabilization.',
      call:'Active hepatic hemorrhage — <b>notify IR and surgery immediately</b> for angioembolization.',
      f:'Heterogeneous [hypervascular] hepatic lesion in [segment] with [subcapsular/perihepatic] hematoma and active contrast extravasation on arterial phase. [Hemoperitoneum in [locations].]',
      i:'Ruptured hepatic [adenoma/HCC] with active hemorrhage and [subcapsular/free intraperitoneal] hematoma. Emergent angioembolization discussed with IR at [time].'
    }
  },

  {
    slug:'splenic-laceration-aast', title:'Splenic Laceration (AAST)', region:'hpb', system:'Spleen',
    modality:'CT abdomen', sev:'killer', emoji:'💥',
    blurb:'Grade spleen laceration by depth and vascular involvement — blush and hilar injury drive the management decision.',
    tags:['AAST grade','Splenic blush','Nonoperative'], rp:'splenic-trauma',
    sheet:{
      find:'<b>Hypodense linear or stellate lacerations</b> through the spleen. Active extravasation = <b>arterial-phase blush</b> (hyperdense) within or adjacent to the spleen. Subcapsular or perisplenic hematoma. Assess the splenic hilum and vessels.',
      measure:'<b>AAST grading</b>: I = subcapsular hematoma &lt;10% surface or laceration &lt;1 cm; II = subcapsular 10–50% or &lt;5 cm intraparenchymal / laceration 1–3 cm; III = subcapsular &gt;50% or expanding / &gt;5 cm intraparenchymal / laceration &gt;3 cm; IV = laceration involving hilar vessels with &gt;25% devascularization; V = completely shattered spleen or hilar vascular injury with total devascularization.',
      pitfall:'Arterial-phase blush in the spleen can be normal heterogeneous enhancement (arciform pattern in early arterial phase) — confirmed only when the blush persists on portal phase or is focal/irregular.',
      pearl:'Grade III+ with blush or Grade IV–V: angioembolization is first-line in hemodynamically stable patients. Grades I–II are managed nonoperatively with serial imaging.',
      call:'Active splenic extravasation or Grade IV–V — <b>notify surgery and IR immediately</b>.',
      f:'Splenic [laceration(s)] measuring [X] cm in depth with [subcapsular/perisplenic] hematoma. [Active contrast extravasation/blush: present/absent.] [Hilar involvement: yes/no.]',
      i:'Splenic laceration, AAST Grade [I–V], with [active hemorrhage/no active hemorrhage]. [Discussed with trauma surgery at time.]'
    }
  },

  {
    slug:'splenic-infarct', title:'Splenic Infarct', region:'hpb', system:'Spleen',
    modality:'CT abdomen', sev:'urgent', emoji:'⚡',
    blurb:'Wedge-shaped peripheral non-enhancing splenic defect — embolic source, atrial fibrillation, or splenic vein thrombosis.',
    tags:['Wedge','Non-enhancement','Embolic'], rp:'splenic-infarction',
    sheet:{
      find:'<b>Wedge-shaped, peripheral, non-enhancing hypodense defect</b> in the spleen with its base at the capsule and apex pointing toward the hilum. May be solitary or multiple. Look for associated splenic vein or portal vein thrombosis.',
      measure:'Extent of splenic involvement (partial vs near-total infarction). If &gt;50% infarcted, rupture risk increases. Search for the embolic source: cardiac (thrombus, endocarditis, AF), aortic atheroma, or hematologic cause.',
      pitfall:'<b>Early infarcts</b> (&lt;6 hours) may be isodense on non-contrast and subtle on portal phase — arterial phase is most sensitive. Accessory spleen and cleft can mimic small infarcts.',
      pearl:'<b>Septic emboli</b> (endocarditis, IV drug use) produce multiple small splenic infarcts with surrounding enhancement ± abscess formation — look for liver and renal infarcts as well.',
      f:'[Wedge-shaped/geographic] non-enhancing hypodense defect(s) in the [upper/lower/mid] pole of the spleen, [X] cm, consistent with splenic infarction. [Splenic vein thrombosis: present/absent.] [Hematologic or cardiac source suggested.]',
      i:'Splenic infarct(s), [partial/near-total], [embolic/thrombotic] etiology. Source evaluation recommended (echocardiogram, hypercoagulability workup).'
    }
  },

  {
    slug:'splenic-abscess', title:'Splenic Abscess', region:'hpb', system:'Spleen',
    modality:'CT abdomen', sev:'urgent', emoji:'🧫',
    blurb:'Rim-enhancing splenic collection — hematogenous seeding or infarcted nidus; gas is diagnostic.',
    tags:['Rim enhancement','Splenic gas','Hematogenous'], rp:'splenic-abscess',
    sheet:{
      find:'<b>Hypoattenuating splenic collection with rim enhancement</b> ± internal gas bubbles. May be solitary or multiple. Perisplenic fat stranding suggests extension. Associated splenomegaly common.',
      measure:'Largest diameter. Single vs multiple (multiple lesions suggest hematogenous seeding from endocarditis or immunosuppression). Look for extension to the splenic capsule (rupture risk).',
      pitfall:'Splenic infarct undergoing liquefaction can mimic abscess — prior CT showing a wedge infarct helps. Fungal microabscesses in immunosuppressed patients appear as tiny "wheel-within-wheel" lesions on MRI.',
      pearl:'Most common organisms: Streptococcus, Staphylococcus, and gram-negatives. <b>CT-guided drainage</b> is first-line; splenectomy reserved for ruptured or multiloculated abscesses.',
      f:'[Solitary/Multiple] hypoattenuating [collection(s)] in the spleen measuring [X] cm with rim enhancement. [Internal gas: present/absent.] [Perisplenic stranding/fluid: present/absent.]',
      i:'CT findings consistent with splenic abscess(es). IR-guided drainage versus splenectomy per surgical consultation.'
    }
  },

  {
    slug:'splenic-artery-aneurysm', title:'Splenic Artery Aneurysm', region:'hpb', system:'Spleen',
    modality:'CTA', sev:'urgent', emoji:'🎈',
    blurb:'Most common visceral aneurysm — rupture risk rises with pregnancy and portal hypertension; size and symptoms drive urgency.',
    tags:['Visceral aneurysm','Rupture risk','Pregnancy'], rp:'splenic-artery-aneurysm',
    sheet:{
      find:'<b>Focal saccular or fusiform dilation</b> of the splenic artery (&gt;1 cm). May be calcified (eggshell). Assess for rupture: perisplenic hematoma, active extravasation, hemoperitoneum.',
      measure:'Maximal diameter. Location (proximal, mid, or hilar — hilar is higher surgical risk). Morphology: saccular (higher rupture risk) vs fusiform. Document relationship to pancreatic parenchyma.',
      pitfall:'A tortuous splenic artery can appear aneurysmal on single-axis measurement — true aneurysm requires dilation &gt;1 cm in two planes. Don\'t miss the "double rupture" sign: initial bleed contained by lesser sac, then free rupture.',
      pearl:'<b>Indications for intervention</b>: &gt;2 cm, symptomatic, rapidly enlarging, pregnant, portal hypertension. Endovascular coil embolization is preferred; surgery for complex hilar aneurysms.',
      call:'Ruptured splenic artery aneurysm with active extravasation is a <b>surgical/vascular emergency</b> — call IR and surgery now.',
      f:'Focal [saccular/fusiform] aneurysm of the [proximal/mid/distal] splenic artery measuring [X] cm. [No active extravasation or perisplenic hematoma.] [Calcified wall/no calcification.]',
      i:'Splenic artery aneurysm, [X] cm, [saccular/fusiform]. [No evidence of rupture.] [Meets/does not meet] intervention threshold.'
    }
  },

  {
    slug:'pancreatic-necrosis-won', title:'Pancreatic Necrosis and Walled-Off Necrosis', region:'hpb', system:'Pancreas',
    modality:'CT abdomen', sev:'urgent', emoji:'🧊',
    blurb:'Non-enhancing pancreatic parenchyma and peripancreatic fat necrosis — WON after 4 weeks signals infected necrosis or intervention.',
    tags:['Non-enhancement','WON','Infected necrosis'], rp:'acute-pancreatitis',
    sheet:{
      find:'<b>Non-enhancing areas of pancreatic parenchyma</b> on portal-phase CT (normal pancreas enhances avidly). Associated heterogeneous peripancreatic collections containing non-liquefied material (necrosis debris). After 4 weeks: <b>walled-off necrosis (WON)</b> = encapsulated collection with a defined wall containing solid debris.',
      measure:'Estimate % pancreatic necrosis (&lt;30%, 30–50%, &gt;50%). CT Severity Index (CTSI): grade A–E + necrosis score = 0–10. Note gas in the collection (infected necrosis). WON: largest diameter and proximity to stomach for transgastric drainage.',
      pitfall:'CT is unreliable before 72 hours — early pancreatitis may show full enhancement then develop necrosis. <b>Contrast-enhanced CT at 72–96 hours</b> is the standard for necrosis assessment.',
      pearl:'<b>Gas in a peripancreatic collection = infected necrosis</b> until proven otherwise — aspiration for culture and step-up drainage. Percutaneous or endoscopic transgastric necrosectomy for symptomatic WON.',
      call:'Gas within a peripancreatic collection or clinical sepsis — <b>infected necrosis: notify surgery/gastroenterology</b>.',
      f:'[X]% non-enhancing pancreatic [body/tail/head] parenchyma consistent with necrosis. [Peripancreatic heterogeneous collection / WON] measuring [X] cm with [solid debris / gas]. CTSI [score]/10.',
      i:'Necrotizing pancreatitis with [X]% gland necrosis, CTSI [score]/10. [Walled-off necrosis [X] cm; no/gas within collection suggesting infected necrosis.]'
    }
  },

  {
    slug:'pancreatic-pseudocyst', title:'Pancreatic Pseudocyst', region:'hpb', system:'Pancreas',
    modality:'CT abdomen', sev:'routine', emoji:'💧',
    blurb:'Homogeneous fluid collection with a thin wall more than 4 weeks after pancreatitis — no solid debris distinguishes it from WON.',
    tags:['Thin wall','Homogeneous fluid','Revised Atlanta'], rp:'pancreatic-pseudocyst',
    sheet:{
      find:'<b>Well-defined, round/oval, homogeneous fluid-density collection</b> (&lt;20 HU) with a <b>thin, imperceptible to thin wall</b>, no solid components, arising in or adjacent to the pancreas. Occurs after acute pancreatitis or trauma (&gt;4 weeks), or in chronic pancreatitis via ductal disruption.',
      measure:'Largest diameter. Relationship to pancreatic duct — ductal communication changes management. Pseudocysts &gt;6 cm that are symptomatic or enlarging warrant drainage.',
      pitfall:'<b>Solid components = WON, not pseudocyst</b> — this distinction is critical and changes management. CT may underestimate solid content; MRCP/EUS is more accurate. Cystic neoplasm (IPMN, MCN) is the other major differential in the absence of pancreatitis history.',
      pearl:'Most pseudocysts regress spontaneously. Endoscopic transmural (cystgastrostomy) or transpapillary drainage is preferred if intervention is needed. MRCP to evaluate for ductal communication before intervention.',
      f:'[Round/oval] homogeneous fluid collection ([X] HU) adjacent to the [pancreatic body/tail/head], measuring [X] cm, with a thin wall and no internal solid components. [Pancreatic duct communication: suspected/not identified.]',
      i:'Pancreatic pseudocyst, [X] cm. [No evidence of infection or solid components.] [Meets/does not meet criteria for drainage based on size and symptoms.]'
    }
  },

  {
    slug:'pancreatic-adenocarcinoma-obstruction', title:'Pancreatic Adenocarcinoma with Obstruction', region:'hpb', system:'Pancreas',
    modality:'CT abdomen', sev:'urgent', emoji:'🔴',
    blurb:'Hypovascular pancreatic head mass with double duct sign and vascular encasement — define resectability on the primary study.',
    tags:['Double duct','Vascular encasement','Resectability'], rp:'pancreatic-ductal-adenocarcinoma',
    sheet:{
      find:'<b>Hypovascular (hypoattenuating) mass</b> in the pancreatic head or uncinate process with upstream <b>pancreatic duct and CBD dilation</b> (<b>double duct sign</b>). Parenchymal atrophy upstream. Assess for peripancreatic fat stranding and vascular involvement.',
      measure:'Tumor size. Critical vascular assessment: SMA, celiac, hepatic artery, SMV, and portal vein. <b>Resectability</b>: resectable = no vascular contact; borderline = ≤180° vein contact or artery abutment; unresectable = &gt;180° arterial encasement or vein occlusion/thrombus.',
      pitfall:'<b>Autoimmune pancreatitis</b> (IgG4-related) produces a diffuse "sausage" pancreas or focal mass — look for capsule-like rim, duct threading through the mass, and biliary involvement. Serum IgG4 and steroid trial distinguish it.',
      pearl:'<b>Pancreatic protocol CT</b> (dual-phase: pancreatic parenchymal at 40s and portal venous at 65s) is the standard staging CT. Always report SMA, celiac, and portal-SMV confluence.',
      call:'Biliary obstruction with cholangitis requires <b>urgent biliary decompression</b> regardless of oncologic status.',
      f:'[X] cm hypovascular mass in the pancreatic [head/uncinate] with double duct sign (CBD [X] mm, PD [X] mm) and pancreatic parenchymal atrophy. [SMA/celiac/SMV contact: [X]° / no contact.] [Lymphadenopathy/liver metastases: present/absent.]',
      i:'Pancreatic head mass with double duct sign and upstream ductal dilation, consistent with [pancreatic ductal adenocarcinoma]. [Resectable/borderline resectable/unresectable] based on [vascular contact]. Multidisciplinary tumor board referral recommended.'
    }
  },

  {
    slug:'cholangiocarcinoma', title:'Cholangiocarcinoma (Perihilar/Intrahepatic)', region:'hpb', system:'Biliary',
    modality:'MRCP/CT', sev:'urgent', emoji:'🔶',
    blurb:'Biliary stricture with delayed-phase enhancing mass, ductal wall thickening, and upstream dilation — Bismuth-Corlette for hilar lesions.',
    tags:['Delayed enhancement','Bismuth-Corlette','Biliary dilation'], rp:'cholangiocarcinoma',
    sheet:{
      find:'<b>Periductal infiltrating or mass-forming lesion</b> with <b>progressive delayed-phase enhancement</b> (desmoplastic stroma). Upstream biliary dilation. Perihilar (Klatskin): spares the main hepatic ducts depending on Bismuth-Corlette level. Intrahepatic: mass with peripheral biliary dilation and satellite nodules.',
      measure:'Bismuth-Corlette classification for hilar lesions (I–IV): determines resectability and surgical approach. Assess portal vein involvement, hepatic artery encasement, and ipsilateral lobe atrophy.',
      pitfall:'<b>PSC</b> patients have markedly increased CCA risk — any dominant stricture in PSC deserves ERCP brushings. Delayed-phase CT alone is insufficient; MRCP with gadoxetate (Eovist) and/or ERCP/PTC is required for full staging.',
      pearl:'<b>CA 19-9</b> and CEA support diagnosis but are non-specific. Lobar atrophy + biliary dilation contralateral to the mass is a key CCA secondary sign. Resectability requires adequate future liver remnant.',
      f:'[Perihilar/intrahepatic] hypovascular lesion with progressive delayed enhancement and upstream [right/left/bilateral] intrahepatic biliary dilation. Bismuth-Corlette Type [I–IV]. [Portal vein involvement: yes/no.]',
      i:'CT/MRCP findings consistent with [perihilar/intrahepatic] cholangiocarcinoma, Bismuth-Corlette Type [X]. ERCP/PTC biliary decompression and multidisciplinary hepatobiliary consultation recommended.'
    }
  },

  {
    slug:'portal-venous-gas-vs-pneumobilia', title:'Portal Venous Gas vs Pneumobilia', region:'hpb', system:'Liver',
    modality:'CT abdomen', sev:'killer', emoji:'💨',
    blurb:'Peripheral hepatic gas = portal venous gas (ominous); central branching gas = pneumobilia (often benign).',
    tags:['Peripheral gas','Central gas','Distribution'], rp:'portal-vein-gas',
    sheet:{
      find:'<b>Portal venous gas</b>: air in the <b>peripheral branches</b> of the portal vein within 2 cm of the liver capsule (gas follows blood to periphery by gravity/flow). <b>Pneumobilia</b>: gas in the <b>central biliary tree</b> (CBD and hilar ducts), branching from the hilum outward, often non-dependent.',
      measure:'Distribution is the key discriminator. Portal venous gas: peripheral, often bilateral hepatic lobes. Pneumobilia: central, follows biliary anatomy toward hilum. CT is far more sensitive than plain film for both.',
      pitfall:'Both can coexist. On UNENHANCED CT the two can be indistinguishable if gas is central — trace the branching pattern: portal branches taper peripherally; biliary branches are larger centrally. <b>Portal venous gas without bowel ischemia</b> can occur (e.g., IBD, iatrogenic) — context is key but ischemia must be excluded.',
      pearl:'<b>Portal venous gas + pneumatosis intestinalis</b> = transmural bowel ischemia until proven otherwise — an immediately actionable CT finding. Pneumobilia is most often benign (post-ERCP sphincterotomy, biliary-enteric anastomosis, Mirizzi, gallstone ileus).',
      call:'<b>Portal venous gas with pneumatosis or bowel-wall findings</b> = mesenteric ischemia — <b>call surgery immediately</b>.',
      f:'[Peripheral/Central] hepatic gas consistent with [portal venous gas/pneumobilia] on CT. [Associated pneumatosis intestinalis in [bowel segment]: yes/no.] [Clinical cause for pneumobilia: post-ERCP/biliary fistula/none identified.]',
      i:'[Portal venous gas — urgent correlation for bowel ischemia / Pneumobilia — likely benign, correlate with biliary history.] [Discussed with surgery at time.]'
    }
  }

]);
