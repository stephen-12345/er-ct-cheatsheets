/* Region: Abdomen and GI — bowel, peritoneum, hernia, GI bleed, abdominal trauma. */
ERCT.add([

  /* ── BESPOKE PAGES (no sheet) ─────────────────────────────────────────── */
  {
    slug:'appendicitis', title:'Acute Appendicitis', region:'abdomen', system:'Appendix',
    modality:'CT', sev:'urgent', emoji:'🔬',
    blurb:'Find the appendix off the cecal base, size it over 6 mm, and call perforation.',
    tags:['6 mm','Appendicolith','Perforation'], rp:'acute-appendicitis',
    href:'appendicitis/appendicitis.html'
  },
  {
    slug:'diverticulitis', title:'Acute Diverticulitis', region:'abdomen', system:'Colon',
    modality:'CT', sev:'urgent', emoji:'🌀',
    blurb:'Modified Hinchey staging, the complications, and telling it from perforated colon cancer.',
    tags:['Hinchey','Abscess','Fistula'], rp:'acute-diverticulitis',
    href:'diverticulitis/diverticulitis.html'
  },
  {
    slug:'bowel-obstruction', title:'Bowel Obstruction', region:'abdomen', system:'Small/large bowel',
    modality:'CT', sev:'urgent', emoji:'🔁',
    blurb:'Transition point, the cause, and the phrases that matter: closed-loop and ischemia.',
    tags:['Transition pt','Closed loop','Whirl'], rp:'small-bowel-obstruction',
    href:'obstruction/bowel-obstruction.html'
  },
  {
    slug:'mesenteric-ischemia', title:'Mesenteric Ischemia', region:'abdomen', system:'Bowel · CTA',
    modality:'CTA', sev:'killer', emoji:'🩻',
    blurb:'Four mechanisms, the wall-enhancement clues, pneumatosis, and portal venous gas.',
    tags:['SMA/SMV','Pneumatosis','NOMI'], rp:'acute-mesenteric-ischaemia',
    href:'ischemia/mesenteric-ischemia.html'
  },
  {
    slug:'perforation-free-air', title:'Perforation / Free Air', region:'abdomen', system:'Peritoneum',
    modality:'CT', sev:'killer', emoji:'💨',
    blurb:'Detect pneumoperitoneum on lung windows, then localize the leak.',
    tags:['Rigler','Lesser sac','Localize'], rp:'pneumoperitoneum',
    href:'perforation/perforation.html'
  },

  /* ── FULL SHEET ENTRIES ───────────────────────────────────────────────── */

  {
    slug:'sigmoid-volvulus', title:'Sigmoid Volvulus', region:'abdomen', system:'Colon',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🌀',
    blurb:'Coffee-bean sign or whirl of mesosigmoid — decompress or operate before ischemia sets in.',
    tags:['Coffee-bean','Whirl sign','Closed loop'], rp:'sigmoid-volvulus',
    sheet:{
      find:'Massively dilated sigmoid loop (often >10 cm) with its apex pointing to the right upper quadrant — the <b>coffee-bean</b> or <b>bent inner tube</b> sign. The <b>whirl sign</b> marks the twist point at the sigmoid mesocolon. Trace both limbs to the transition in the left lower quadrant.',
      measure:'Sigmoid diameter >10 cm is classic. Absence of haustrae distinguishes sigmoid from cecum. Look for wall thickening, hypoenhancement, pneumatosis, or portal venous gas indicating ischemia.',
      pitfall:'Pseudo-obstruction (Ogilvie) distends the right and transverse colon; in sigmoid volvulus the distention is predominantly the sigmoid loop tapering to a bird-beak at the rectosigmoid junction.',
      pearl:'The two converging bowel walls at the twist site create the <b>X marks the spot</b> appearance; a cut-off below the peritoneal reflection favors volvulus over carcinoma.',
      call:'<b>Ischemic signs</b> (pneumatosis, portal venous gas, free air, absent wall enhancement) demand emergency surgery — call now.',
      f:'Massively dilated sigmoid colon measuring [X] cm, forming a closed-loop configuration with apex in the [right upper quadrant] and a whirl sign at the [rectosigmoid junction]. [No pneumatosis or portal venous gas. No pneumoperitoneum.]',
      i:'Sigmoid volvulus with [no / early] CT signs of ischemia. [Emergent surgical consultation recommended.]'
    }
  },

  {
    slug:'cecal-volvulus', title:'Cecal Volvulus', region:'abdomen', system:'Colon',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🔄',
    blurb:'Cecum twists on a mobile mesentery and flips to the left upper quadrant — axial or bascule.',
    tags:['Ectopic cecum','Whirl sign','LUQ loop'], rp:'caecal-volvulus',
    sheet:{
      find:'Dilated cecum displaced into the <b>left upper quadrant</b> (axial type, most common) or folded anteriorly over the ascending colon (bascule type). The <b>whirl sign</b> is present at the right lower quadrant twist site. The ascending colon is decompressed.',
      measure:'Cecal diameter >10–12 cm. The appendix is often displaced with the cecum. Small-bowel dilation implies a high-grade obstruction.',
      pitfall:'On plain film a large gas shadow in the left upper quadrant is often attributed to stomach — CT confirms cecal origin. Do not confuse with sigmoid volvulus (which points right).',
      pearl:'Cecal volvulus requires surgery (cecopexy or right hemicolectomy); unlike sigmoid volvulus, endoscopic decompression is rarely effective.',
      call:'Ischemic wall changes demand <b>urgent surgical consultation</b>.',
      f:'Markedly dilated cecum ([X] cm) displaced to the [left upper quadrant] with a whirl sign at the right lower quadrant and decompressed ascending colon distal to the twist. [No pneumatosis or portal venous gas.]',
      i:'Cecal volvulus ([axial/bascule] type) with [no] CT signs of ischemia. Surgical consultation recommended.'
    }
  },

  {
    slug:'adult-intussusception', title:'Adult Intussusception', region:'abdomen', system:'Small bowel',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🌀',
    blurb:'Target or sausage mass on CT — adults almost always have a lead-point requiring resection.',
    tags:['Lead point','Target sign','Obstruction'], rp:'intussusception',
    sheet:{
      find:'<b>Target sign</b> on axial images: outer wall (intussuscipiens) encircling an inner loop (intussusceptum) with interposed mesenteric fat and vessels. A <b>lead-point mass</b> is present at the apex in the majority of adults — look for a soft-tissue, lipomatous, or hyperenhancing lesion.',
      measure:'Measure the length of the intussusception and note the level (jejuno-jejunal, ileo-ileal, ileo-colic). Document degree of obstruction and bowel wall enhancement.',
      pitfall:'Small, transient ileo-ileal intussusceptions without obstruction may be incidental (no lead point, resolves); persistent or ileo-colic intussusception in adults must be worked up for neoplasm.',
      pearl:'Lipoma (most common benign lead point), GIST, lymphoma, Peutz-Jeghers polyp, and inverted Meckel diverticulum are common adult lead points.',
      f:'[X] cm [ileo-colic] intussusception with a [lipomatous/soft-tissue] lead-point mass at the apex and surrounding mesenteric fat, causing [partial/complete] small-bowel obstruction.',
      i:'Adult intussusception at the [ileo-colic] junction with a [lipomatous] lead-point lesion. Surgical consultation recommended; pathologic lead point must be excluded.'
    }
  },

  {
    slug:'closed-loop-obstruction', title:'Closed-Loop Obstruction', region:'abdomen', system:'Small bowel',
    modality:'CT abdomen/pelvis', sev:'killer', emoji:'⛔',
    blurb:'Two adjacent obstruction points trap a bowel loop — ischemia is imminent; do not delay the call.',
    tags:['Whirl sign','C-loop','Ischemia'], rp:'closed-loop-obstruction',
    sheet:{
      call:'Closed-loop obstruction with any ischemic sign — <b>call surgery immediately</b>; this is a surgical emergency.',
      find:'A <b>C- or U-shaped</b> dilated loop with both limbs converging on a single twist point (whirl sign). Radially oriented dilated loops converging on a mesenteric whirl in the right lower quadrant are classic for an internal hernia. Look for <b>mesenteric venous engorgement</b>, bowel wall thickening, and decreased or absent mural enhancement.',
      measure:'Loop diameter >3 cm. Document mesenteric vessel orientation. Pneumatosis or portal venous gas = ischemia.',
      pitfall:'Plain films are often misleading; the closed loop may appear as a paucity of bowel gas or a "gasless abdomen" if fluid-filled.',
      pearl:'In a post-gastric bypass patient, a mesenteric whirl in the right lower quadrant is <b>Peterson space internal hernia</b> until proven otherwise.',
      f:'[C-shaped] dilated small-bowel loop measuring [X] cm with a whirl sign at the [right lower quadrant] mesentery, consistent with a closed-loop obstruction. [Decreased mural enhancement and mesenteric venous congestion suggesting ischemia.] [No pneumatosis or free air.]',
      i:'Closed-loop small-bowel obstruction with [ischemic / no ischemic] features. Emergency surgical consultation.'
    }
  },

  {
    slug:'internal-hernia', title:'Internal Hernia', region:'abdomen', system:'Hernia',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🔀',
    blurb:'Post-bypass mesenteric whirl or paraduodenal cluster — small-bowel ischemia lurks without prompt repair.',
    tags:['Mesenteric whirl','Post-bypass','Paraduodenal'], rp:'internal-hernia',
    sheet:{
      find:'<b>Mesenteric whirl</b> with crowded, swirling vessels and a cluster of small-bowel loops in an abnormal location (right lower quadrant for Peterson; left paraduodenal fossa for paraduodenal hernia). Bowel loops displaced behind the SMA or into the lesser sac.',
      measure:'Evaluate mural enhancement and thickness of herniated loops. Note degree of SBO. Map which mesenteric defect: transmesocolic, Peterson, Petersen, paraduodenal, paracecal, or foramen of Winslow.',
      pitfall:'May appear as a simple SBO without an obvious transition — the mesenteric whirl and ectopic bowel cluster are the clues. In Peterson hernia the whirl is right-sided and posterior to the SMA.',
      pearl:'<b>Paraduodenal hernia</b>: cluster of small bowel in the left paraduodenal fossa displaced the stomach and pushing the inferior mesenteric vein anteriorly. Foramen of Winslow hernia places bowel behind the hepatoduodenal ligament (lesser sac).',
      call:'Any associated ischemia or complete obstruction demands <b>urgent surgical consultation</b>.',
      f:'Mesenteric whirl in the [right lower quadrant] with a cluster of small-bowel loops in an ectopic position posterior to the SMA, consistent with [Peterson] internal hernia. [Partial small-bowel obstruction. No pneumatosis.]',
      i:'[Peterson] internal hernia with [partial] small-bowel obstruction. [No CT ischemic features.] Surgical consultation recommended.'
    }
  },

  {
    slug:'incarcerated-strangulated-hernia', title:'Incarcerated / Strangulated Hernia', region:'abdomen', system:'Hernia',
    modality:'CT abdomen/pelvis', sev:'killer', emoji:'🚨',
    blurb:'Irreducible hernia with edematous bowel or absent wall enhancement signals strangulation — operate now.',
    tags:['Strangulation','Fascial defect','Absent enhancement'], rp:'abdominal-wall-hernia',
    sheet:{
      call:'<b>Strangulated hernia</b> (absent mural enhancement, pneumatosis, free air) is a surgical emergency — call now.',
      find:'Identify the <b>hernia type</b> (inguinal, femoral, umbilical, incisional, Spigelian) and the <b>fascial defect width</b>. In an incarcerated hernia the neck is narrow relative to the herniated content. Strangulation signs: bowel wall thickening, absent or decreased enhancement, mesenteric fat stranding, free fluid, pneumatosis, free air.',
      measure:'Fascial defect width at the neck. Note bowel dilation proximal to the hernia.',
      pitfall:'A femoral hernia (below the inguinal ligament, medial to femoral vein) is easily missed and has a higher strangulation rate than inguinal. Always check below the inguinal ligament in women with groin pain.',
      pearl:'<b>Richter hernia</b>: only the anti-mesenteric wall is incarcerated — the lumen is not completely obstructed and obstruction signs may be absent despite ischemia.',
      f:'[X] cm fascial defect at the [right femoral canal] with incarcerated small-bowel loop showing [absent mural enhancement and circumferential wall thickening]. [Pneumatosis present / absent.] Proximal SBO [present].',
      i:'Strangulated [femoral] hernia with [ischemic] changes in the herniated bowel loop. Emergency surgical consultation.'
    }
  },

  {
    slug:'paralytic-ileus', title:'Paralytic Ileus', region:'abdomen', system:'Small/large bowel',
    modality:'CT abdomen/pelvis', sev:'routine', emoji:'💤',
    blurb:'Diffuse gas without transition point — exclude a mechanical cause and search for the precipitant.',
    tags:['No transition point','Gaseous distension','Exclude obstruction'], rp:'ileus',
    sheet:{
      find:'Diffusely gas-filled and fluid-filled bowel from stomach to rectum without a discrete <b>transition point</b>. No collapsed segment distal to the dilation. The colon and small bowel are involved proportionately.',
      measure:'Cecal diameter >9 cm in acute colonic pseudo-obstruction (Ogilvie) warrants close monitoring; >12 cm risks perforation.',
      pitfall:'An early adhesive SBO may not show a clear transition point; always review the entire bowel in sequence and look for a focal area of collapsed loops distal to dilated loops.',
      pearl:'Search for the underlying cause: post-operative state, electrolyte disturbance, spinal pathology, retroperitoneal process (hematoma, abscess), peritonitis, medications (opioids, anticholinergics).',
      f:'Diffuse gaseous distension of the small and large bowel with air to the [rectum] and no transition point to suggest mechanical obstruction. [No pneumoperitoneum. No bowel wall thickening.]',
      i:'Findings consistent with paralytic ileus. [No CT evidence of mechanical obstruction.] [Etiology to consider: postoperative state / electrolyte abnormality / retroperitoneal process.]'
    }
  },

  {
    slug:'epiploic-appendagitis', title:'Epiploic Appendagitis', region:'abdomen', system:'Peritoneum',
    modality:'CT abdomen/pelvis', sev:'routine', emoji:'🫒',
    blurb:'Fat-density ovoid lesion with a hyperattenuating ring adjacent to colon — self-limiting, no surgery.',
    tags:['Fat ovoid','Hyperattenuating ring','Self-limiting'], rp:'epiploic-appendagitis',
    sheet:{
      find:'<b>Ovoid fatty lesion</b> (fat-density core, −60 to −130 HU) 1–4 cm abutting the colonic serosa, most often the sigmoid or descending colon, with a <b>hyperattenuating peripheral ring</b> (peritoneal inflammation) and surrounding fat stranding. No bowel wall thickening or obstruction.',
      measure:'Typically 1–4 cm. A central <b>high-density dot</b> (thrombosed central vessel) is specific.',
      pitfall:'Mimics diverticulitis (diverticulitis has bowel wall thickening, pericolic fat stranding without a distinct ovoid fat lesion, and often a visible diverticulum) and appendicitis (appendagitis is lateral/anti-mesenteric).',
      pearl:'Confident CT diagnosis spares the patient surgery; treatment is NSAIDs. Calcified epiploic appendage later = intraperitoneal loose body.',
      f:'[1.8] cm ovoid fat-density lesion abutting the [sigmoid colon] serosa with a hyperattenuating peripheral ring and mild surrounding fat stranding. No adjacent colonic wall thickening or diverticula.',
      i:'CT findings consistent with epiploic appendagitis adjacent to the [sigmoid colon]. Self-limiting condition; conservative management with NSAIDs.'
    }
  },

  {
    slug:'omental-infarct', title:'Omental Infarction', region:'abdomen', system:'Peritoneum',
    modality:'CT abdomen/pelvis', sev:'routine', emoji:'🫠',
    blurb:'Fatty cake of infarcted omentum in the right lower quadrant — larger than appendagitis and also self-limiting.',
    tags:['Fatty mass','Right lower quadrant','No surgery'], rp:'omental-infarction',
    sheet:{
      find:'<b>Heterogeneous fatty mass</b>, usually 3–15 cm, most often in the right lower quadrant or paracolic gutter, with surrounding fat stranding and no clearly defined peritoneal ring. May show a central high-attenuation band. No diverticula, appendix involvement, or bowel wall thickening.',
      measure:'Larger than epiploic appendagitis (>5 cm typical). A hyperattenuating rim is less discrete than appendagitis.',
      pitfall:'Can mimic appendicitis or mesenteric panniculitis; the fatty mass in omental infarct is larger and lacks a distinct hyperattenuating ring.',
      pearl:'Associated with obesity, vigorous exercise, or right-sided hernia. Conservative management unless secondary infection or persistence > 4 weeks.',
      f:'[8] cm heterogeneous fatty mass in the [right lower quadrant / greater omentum] with surrounding fat stranding, consistent with omental infarction. [No discrete ovoid lesion or hyperattenuating ring to suggest epiploic appendagitis.] [Normal appendix.]',
      i:'CT findings consistent with primary omental infarction. Self-limiting; conservative management recommended.'
    }
  },

  {
    slug:'infectious-colitis', title:'Infectious Colitis', region:'abdomen', system:'Colon',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🦠',
    blurb:'Pancolitis or segmental wall thickening with the accordion sign — culture first, then treat.',
    tags:['Wall thickening','Accordion sign','Pancolitis'], rp:'infectious-colitis',
    sheet:{
      find:'<b>Circumferential bowel wall thickening</b> of the colon with mural stratification (target sign), pericolonic fat stranding, and mesenteric lymphadenopathy. Distribution may be segmental (Salmonella, Yersinia: terminal ileum and right colon) or pancolonic.',
      measure:'Normal colonic wall ≤3 mm when distended. Thickening >4 mm is abnormal. Document distribution (right, left, or pancolonic).',
      pitfall:'Infectious colitis overlaps with inflammatory bowel disease on CT; clinical context and culture are essential. Cytomegalovirus colitis in immunocompromised patients may show submucosal edema and ulceration.',
      pearl:'<b>Yersinia</b> causes terminal ileitis and right lower quadrant lymphadenopathy, mimicking Crohn and appendicitis. <b>Salmonella</b> and <b>Campylobacter</b> favor the right colon.',
      f:'Circumferential wall thickening of the [cecum and ascending colon] ([X] mm) with pericolonic fat stranding and mesenteric lymphadenopathy. No perforation or abscess.',
      i:'CT findings consistent with [right-sided] infectious colitis. [No complications.] Clinical correlation and stool cultures recommended.'
    }
  },

  {
    slug:'c-difficile-colitis', title:'C. difficile (Pseudomembranous) Colitis', region:'abdomen', system:'Colon',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🧫',
    blurb:'Markedly thickened colon with accordion sign and ascites — do not miss toxic megacolon.',
    tags:['Accordion sign','Pancolitis','Toxic megacolon'], rp:'pseudomembranous-colitis',
    sheet:{
      find:'<b>Markedly thickened colon</b> (often >10–15 mm) with a distinctive <b>accordion sign</b> (oral contrast trapped between thickened haustral folds). Typically pancolonic but may spare the rectum. Pericolonic stranding, ascites, and low-attenuation submucosal edema (target sign).',
      measure:'Document maximal colonic diameter (>6 cm = megacolon threshold). Note any free air or pneumoperitoneum.',
      pitfall:'Rectal sparing is classic but not universal. Severe cases develop toxic megacolon (>6 cm transverse colon, systemic toxicity) requiring emergency colectomy.',
      pearl:'The accordion sign is most specific for C. diff colitis among infectious colitides. Always review antibiotic history and recent hospitalization.',
      call:'<b>Toxic megacolon or free perforation</b> demands immediate surgical consultation.',
      f:'Pancolonic wall thickening ([X] mm maximum) with the accordion sign and low-attenuation submucosal edema. [Pericolonic fat stranding and small-volume ascites.] [Maximal transverse colon diameter [X] cm.] [No pneumoperitoneum.]',
      i:'CT findings highly suspicious for pseudomembranous (C. difficile) colitis. [No CT evidence of toxic megacolon or perforation.] Stool C. diff testing recommended.'
    }
  },

  {
    slug:'ischemic-colitis', title:'Ischemic Colitis', region:'abdomen', system:'Colon',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'⚠️',
    blurb:'Watershed zone wall thickening at the splenic flexure and sigmoid — check the IMA and portal venous gas.',
    tags:['Watershed','Thumbprinting','IMA'], rp:'ischaemic-colitis',
    sheet:{
      find:'<b>Segmental wall thickening</b> preferentially at the <b>splenic flexure</b> (Griffith point) and sigmoid (Sudeck point) — the watershed zones. Bowel wall thickening with submucosal edema, pericolonic fat stranding, and <b>thumbprinting</b> on plain film. In severe cases: absent enhancement, pneumatosis, portal venous gas.',
      measure:'Normal wall ≤3 mm. Document segment length. Look for IMA occlusion or stenosis.',
      pitfall:'Ascending colon involvement with right-sided predominance is more concerning for superior mesenteric artery ischemia; pancolonic pneumatosis suggests transmural necrosis requiring surgery.',
      pearl:'Non-occlusive causes (hypotension, vasopressors, after AAA repair) are more common than occlusive. Check for IMA origin atherosclerosis/occlusion.',
      call:'<b>Transmural necrosis</b> (absent wall enhancement, pneumatosis, portal venous gas, free air) is a surgical emergency.',
      f:'Segmental wall thickening of the [splenic flexure and descending colon] with submucosal edema and pericolonic fat stranding in a watershed distribution. [No pneumatosis or portal venous gas. IMA [patent / occluded].]',
      i:'CT findings consistent with ischemic colitis in a watershed distribution. [No transmural necrosis.] Recommend clinical correlation; surgical consultation if clinical deterioration.'
    }
  },

  {
    slug:'neutropenic-colitis', title:'Neutropenic Colitis (Typhlitis)', region:'abdomen', system:'Colon',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🩺',
    blurb:'Cecal and right colonic wall thickening in a neutropenic patient — treat aggressively, watch for perforation.',
    tags:['Cecum','Neutropenia','Perforation risk'], rp:'neutropenic-colitis',
    sheet:{
      find:'<b>Circumferential cecal wall thickening</b> (often >10 mm) extending to the terminal ileum and ascending colon, with low-attenuation submucosal edema, pericecal fat stranding, and ascites. Occurs in the setting of profound neutropenia (chemotherapy, bone marrow transplant).',
      measure:'Wall thickness >10 mm is associated with higher risk of perforation. Assess for pneumatosis, pericolonic abscess, or free fluid.',
      pitfall:'Can mimic appendicitis (the appendix may be secondarily inflamed in typhlitis) or infectious colitis (check the ANC). The distribution is classically right-sided.',
      pearl:'CT finding of typhlitis in a febrile neutropenic patient = broad-spectrum antibiotics with bowel rest; surgery reserved for perforation or clinical deterioration.',
      call:'<b>Free perforation or clinical deterioration</b> despite medical management warrants urgent surgical consultation.',
      f:'Circumferential cecal wall thickening ([X] mm) with submucosal edema extending to the terminal ileum and ascending colon with pericecal fat stranding. [No pneumatosis or free perforation.] Clinical setting: [neutropenia following chemotherapy].',
      i:'CT findings consistent with neutropenic colitis (typhlitis) involving the cecum and right colon. [No CT evidence of perforation.] Recommend prompt infectious disease and surgical consultation.'
    }
  },

  {
    slug:'toxic-megacolon', title:'Toxic Megacolon', region:'abdomen', system:'Colon',
    modality:'CT abdomen/pelvis', sev:'killer', emoji:'💢',
    blurb:'Massively dilated colon >6 cm with loss of haustrae and systemic toxicity — surgical emergency.',
    tags:['Megacolon','>6 cm','Perforation risk'], rp:'toxic-megacolon',
    sheet:{
      call:'<b>Toxic megacolon</b> is a surgical emergency — call the surgical team immediately; perforation is imminent.',
      find:'<b>Transverse colon diameter >6 cm</b> (often >9 cm) with loss of haustral markings, deep mural ulcerations (thumbprinting or mucosal islands), and pericolonic inflammation. Look for pneumoperitoneum (perforation) and pneumatosis.',
      measure:'Maximal transverse colon diameter. Wall thickness (thin wall = serosal involvement). Free air on lung windows.',
      pitfall:'The diagnosis requires both CT findings (megacolon) and systemic toxicity (fever, leukocytosis, tachycardia) — the term is clinico-radiologic. CT can appear as deceptively thin-walled distended colon before perforation.',
      pearl:'Causes: inflammatory bowel disease (UC more than Crohn), C. diff, infectious colitis, ischemia. IBD-associated toxic megacolon does not always show mural thickening — a thin, featureless colon is ominous.',
      f:'Markedly dilated transverse and [left] colon ([X] cm maximum diameter) with mucosal irregularity and loss of haustrae. [Pericolonic fat stranding. No pneumatosis or free perforation detected.]',
      i:'CT findings of toxic megacolon involving the transverse and [left] colon ([X] cm). [No pneumoperitoneum.] Emergent surgical consultation recommended given clinical toxicity.'
    }
  },

  {
    slug:'crohn-flare', title:'Crohn Disease Flare', region:'abdomen', system:'Small bowel',
    modality:'CT enterography', sev:'urgent', emoji:'🔥',
    blurb:'Mural hyperenhancement, comb sign, and fat wrapping — grade the activity and screen for complications.',
    tags:['Mural stratification','Comb sign','Fistula'], rp:'crohn-disease',
    sheet:{
      find:'<b>Mural thickening</b> (>3 mm) with <b>mural hyperenhancement and stratification</b> (target sign = active inflammation). The <b>comb sign</b> = engorged vasa recta in the mesentery adjacent to active bowel. Fat wrapping (creeping fat) encircles the bowel. Skip lesions from terminal ileum to right colon are classic.',
      measure:'Mural thickness >3 mm on CT enterography. Luminal stenosis with proximal dilation indicates fibrotic stricture. Look for fistulas (enterocutaneous, enteroenteric, enterovesical), abscesses, and free fluid.',
      pitfall:'Fibrotic stricture shows mural thickening without hyperenhancement — cannot be treated medically alone; consider strictureplasty. Active inflammation on CT may coexist with fibrosis.',
      pearl:'Document all complications: abscesses, fistulas, strictures, free perforation, SBO. The <b>Harvey-Bradshaw index</b> correlates activity; CT enterography better than standard CT for mucosal detail.',
      f:'Mural thickening ([X] mm) and hyperenhancement of the [terminal ileum and cecum] over [X] cm with the comb sign and mesenteric fat stranding. [Creeping fat encircling the ileum.] [Enteroenteric fistula / abscess / stricture with proximal dilation: describe.] [No free air or free fluid.]',
      i:'CT enterography findings of active Crohn ileocolitis with [complications: none / abscess / fistula / stricture] as described. Correlation with clinical and laboratory activity indices recommended.'
    }
  },

  {
    slug:'ulcerative-colitis-flare', title:'Ulcerative Colitis Flare', region:'abdomen', system:'Colon',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🌡️',
    blurb:'Continuous pancolitis from rectum proximally — rule out toxic megacolon and exclude CMV superinfection.',
    tags:['Pancolitis','Continuous','Lead-pipe'], rp:'ulcerative-colitis',
    sheet:{
      find:'<b>Continuous circumferential wall thickening</b> beginning at the rectum and extending proximally without skip lesions. Mucosal hyperenhancement (active disease) or loss of haustrae (<b>lead-pipe colon</b> in chronic disease). Pericolonic fat stranding and enlarged perirectal lymph nodes.',
      measure:'Colonic wall thickness >3 mm. Document the most proximal extent of involvement. Transverse colon diameter (toxic megacolon threshold >6 cm).',
      pitfall:'Deep mural ulceration (cobblestoning on CT) can also occur in UC; unlike Crohn, the terminal ileum is spared unless backwash ileitis is present.',
      pearl:'Sacroiliitis, primary sclerosing cholangitis (dilated intrahepatic ducts), and pyoderma gangrenosum are extraintestinal manifestations visible on CT.',
      call:'<b>Colonic diameter >6 cm with systemic toxicity</b> = toxic megacolon — emergency surgical consultation.',
      f:'Continuous circumferential wall thickening of the [left colon, splenic flexure, and rectum] with mucosal hyperenhancement and pericolonic fat stranding. [No haustral loss or megacolon. Transverse colon [X] cm.] [No free air.]',
      i:'CT findings consistent with an active ulcerative colitis flare involving the [left colon and rectum]. [No toxic megacolon or perforation.] Clinical correlation with endoscopy and CMV PCR recommended.'
    }
  },

  {
    slug:'lower-gi-bleed-cta', title:'Acute Lower GI Bleed (CTA)', region:'abdomen', system:'Colon',
    modality:'CTA', sev:'urgent', emoji:'🩸',
    blurb:'Active extravasation on arterial phase pools in the lumen on delayed phase — localize before IR or surgery.',
    tags:['Extravasation','Active bleed','Localize'], rp:'gastrointestinal-bleeding',
    sheet:{
      find:'On <b>arterial phase</b>: focal jet of high-attenuation contrast (>90 HU) within the bowel lumen. On <b>delayed/portal venous phase</b>: extravasated contrast expands and redistributes within the lumen (distinguishes true extravasation from a mucosal hyperemia or polyp). Measure the HU in the blush vs adjacent aorta.',
      measure:'Active extravasation: attenuation in the blush approaches aortic density (>90–100 HU on arterial). Note segment of bowel involved and the feeding artery. A rate of bleeding as low as 0.3–0.5 mL/min can be detected.',
      pitfall:'Calcified atherosclerotic plaque or a bone/implant near the bowel can mimic a blush — compare on NCCT (pre-contrast). True extravasation increases on delayed images.',
      pearl:'Always obtain a <b>non-contrast phase</b> first to identify pre-existing high-density material. Localize to a named vessel territory (SMA, IMA, celiac) and segment to guide IR.',
      call:'Active extravasation with hemodynamic instability warrants <b>immediate IR/surgical notification</b>.',
      f:'[X] mL active extravasation of contrast within the [ascending colon] on arterial phase (peak [X] HU), increasing on portal venous phase. [No pre-existing high density on NCCT.] Supplied by the [right colic artery, SMA territory].',
      i:'Active GI hemorrhage localized to the [ascending colon] within the [SMA] territory. Discussed with [interventional radiology/surgery] at [time].'
    }
  },

  {
    slug:'bowel-injury-trauma', title:'Bowel Injury (Blunt Trauma)', region:'abdomen', system:'Small bowel',
    modality:'CT abdomen/pelvis', sev:'killer', emoji:'💥',
    blurb:'Free fluid without solid organ injury, bowel wall discontinuity, or mesenteric hematoma demands exploration.',
    tags:['Unexplained free fluid','Bowel discontinuity','Mesenteric hematoma'], rp:'bowel-trauma',
    sheet:{
      call:'<b>Free intraperitoneal fluid without solid organ injury</b> in a blunt trauma patient is bowel injury until proven otherwise — call the surgical team.',
      find:'Look for: (1) <b>pneumoperitoneum</b> (lung windows); (2) <b>mesenteric hematoma</b> or fat stranding; (3) <b>bowel wall discontinuity</b> or extravasation of oral contrast; (4) <b>unexplained intraperitoneal free fluid</b> (especially near the bowel mesentery); (5) focal bowel wall thickening or hematoma.',
      measure:'CT sensitivity for hollow viscus injury is ~90% but delayed perforation can occur. Note AAST grade if identifiable. Mesenteric tear length.',
      pitfall:'False-negative CT occurs with small lacerations, early presentation, or focal bowel wall hematoma without full-thickness tear. Any patient with peritoneal signs and a negative CT should be observed and may need diagnostic laparoscopy.',
      pearl:'The <b>sentinel clot</b> sign: high-attenuation clot adjacent to the injured bowel/mesentery indicates the site of injury. Seatbelt sign on skin increases likelihood of hollow viscus injury.',
      f:'[Focal] discontinuity of the [jejunal] wall with adjacent mesenteric hematoma and [small volume] free intraperitoneal fluid without adjacent solid organ injury. [Trace pneumoperitoneum on lung windows.] [Oral contrast extravasation: present/absent.]',
      i:'CT findings highly suspicious for [jejunal] hollow viscus injury with mesenteric hematoma. Urgent surgical consultation recommended.'
    }
  },

  {
    slug:'mesenteric-injury', title:'Mesenteric Injury', region:'abdomen', system:'Mesentery',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🩻',
    blurb:'Mesenteric hematoma, vascular beading, or active blush — bowel ischemia is the downstream risk.',
    tags:['Mesenteric hematoma','Active blush','Bowel ischemia'], rp:'mesenteric-injury',
    sheet:{
      find:'<b>Mesenteric hematoma</b>: focal high-attenuation collection between bowel loops in the mesentery. <b>Mesenteric laceration</b>: linear or striated fat stranding with disruption of mesenteric vessels. <b>Active extravasation</b> from a mesenteric vessel (arterial blush). Segmental bowel wall thickening or decreased enhancement suggests secondary ischemia.',
      measure:'Hematoma size. Presence of active extravasation (compare arterial and delayed phases). Note proximity to named vessels (SMA, ileocolic). Document any bowel ischemia signs.',
      pitfall:'Mesenteric injury can be subtle — striated mesenteric fat stranding without a discrete hematoma still requires close observation for delayed bowel ischemia or perforation.',
      pearl:'Isolated mesenteric hematoma without bowel ischemia or active bleed may be managed non-operatively with serial imaging; associated active extravasation or bowel ischemia requires intervention.',
      call:'<b>Active arterial extravasation or bowel ischemia</b> requires immediate surgical consultation.',
      f:'[3] cm mesenteric hematoma in the [right lower quadrant] mesentery with [active arterial extravasation / striated fat stranding]. [Associated segmental [ileal] wall thickening suggesting ischemia / no bowel ischemia.]',
      i:'[Right lower quadrant] mesenteric injury with [hematoma and active extravasation / hematoma only]. [Bowel ischemia: present / absent.] Surgical consultation recommended.'
    }
  },

  {
    slug:'intra-abdominal-abscess', title:'Intra-abdominal Abscess', region:'abdomen', system:'Peritoneum',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🫧',
    blurb:'Rim-enhancing fluid collection with gas bubbles — source, drainability, and proximity to structures.',
    tags:['Rim enhancing','Gas bubbles','Percutaneous drainage'], rp:'intra-abdominal-abscess',
    sheet:{
      find:'<b>Rim-enhancing fluid collection</b> with internal debris, septa, or <b>gas bubbles</b>. Surrounding fat stranding. Note the location (subphrenic, paracolic, pelvic, interloop), the wall thickness, and relation to adjacent bowel, vessels, or solid organs.',
      measure:'Maximal dimensions in three planes for drainage planning. Attenuation of fluid (simple vs complex). Presence of gas within the collection.',
      pitfall:'A non-enhancing necrotic tumor nodule or biloma can mimic an abscess; clinical context (fever, leukocytosis, prior surgery) is essential. Infected hematoma may have a similar appearance.',
      pearl:'Assess <b>drainability</b>: a unilocular, well-defined, non-adjacent-to-vessels collection is ideal for percutaneous drainage. Multiloculated collections may require surgical drainage.',
      call:'<b>Large abscess with septic physiology</b> warrants urgent IR or surgical drainage consultation.',
      f:'[4 × 3 × 3] cm rim-enhancing fluid collection in the [right paracolic gutter] with internal gas bubbles and surrounding fat stranding. [No communication with adjacent bowel identified. No vascular proximity precluding drainage.]',
      i:'Intra-abdominal abscess in the [right paracolic gutter]. [Amenable to percutaneous drainage.] [Source: prior appendectomy / diverticulitis / unknown.] Discussed with [surgery/IR] at [time].'
    }
  },

  {
    slug:'pneumatosis-intestinalis', title:'Pneumatosis Intestinalis', region:'abdomen', system:'Small/large bowel',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'💨',
    blurb:'Gas in the bowel wall — benign (COPD, steroids, scleroderma) versus ischemic (the one that kills).',
    tags:['Bowel wall gas','Benign vs ischemic','Portal venous gas'], rp:'pneumatosis-intestinalis',
    sheet:{
      find:'<b>Gas within the bowel wall</b>: linear (submucosal) or bubbly (cystic). Linear intramural gas in the small bowel with portal venous gas is the <b>ischemic pattern</b>. Cystic pneumatosis of the colon in an ambulatory patient without symptoms may be benign (pneumatosis cystoides intestinalis).',
      measure:'Distribution (segment vs diffuse), bowel wall enhancement, associated portal venous gas, free air, free fluid, and vascular anatomy (SMA/SMV thrombus).',
      pitfall:'<b>Benign causes</b>: COPD (pulmonary over-insufflation), steroid use, scleroderma, IBD, post-procedure, graft-versus-host disease. Distinguish from ischemia using clinical context and bowel enhancement.',
      pearl:'<b>Portal venous gas + pneumatosis = ischemia until proven otherwise</b>. Absent bowel wall enhancement is the strongest CT predictor of transmural ischemia.',
      call:'<b>Ischemic pneumatosis with portal venous gas, absent wall enhancement, or clinical deterioration</b> demands emergent surgical consultation.',
      f:'[Linear / bubbly] pneumatosis of the [small bowel / colon] with [portal venous gas / no portal venous gas]. Bowel wall enhancement is [present and normal / decreased / absent]. [No pneumoperitoneum.]',
      i:'[Ischemic / indeterminate benign] pneumatosis of the [small bowel]. [Portal venous gas present.] [Bowel wall hypoenhancement.] Urgent surgical consultation recommended / Clinical and radiologic follow-up in the appropriate context.'
    }
  },

  {
    slug:'appendiceal-mucocele', title:'Appendiceal Mucocele', region:'abdomen', system:'Appendix',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🧴',
    blurb:'Cystic dilated appendix with curvilinear calcification — do not rupture it; pseudomyxoma peritonei lurks.',
    tags:['Dilated appendix','Curvilinear Ca++','Pseudomyxoma'], rp:'appendiceal-mucocele',
    sheet:{
      find:'<b>Cystic, dilated appendix</b> (>15 mm diameter) with thin walls, homogeneous mucoid content (15–30 HU), and ± <b>curvilinear peripheral calcification</b> ("eggshell" wall). The appendix is obstructed at its base. No surrounding fat stranding unless secondary infection.',
      measure:'Appendiceal diameter >15 mm with smooth walls suggests mucocele. Evaluate for mural nodularity (suggests LAMN or mucinous adenocarcinoma rather than simple retention cyst).',
      pitfall:'Thick wall, internal septations, or mural nodules raise concern for low-grade appendiceal mucinous neoplasm (LAMN) — do not mistake for ovarian cystic mass in women.',
      pearl:'Mucinous deposits on peritoneal surfaces (scalloping of liver/spleen, omental cake) indicate <b>pseudomyxoma peritonei</b> — check carefully. Inform surgery before any procedure; rupture is catastrophic.',
      f:'[3.5] cm cystic lesion arising from the appendiceal tip with curvilinear wall calcification and homogeneous low-attenuation contents. [No mural nodularity. No peritoneal mucin deposits. No fat stranding to suggest secondary inflammation.]',
      i:'Appendiceal mucocele. [No CT evidence of pseudomyxoma peritonei.] Surgical resection without rupture is recommended; oncologic referral for LAMN workup.'
    }
  },

  {
    slug:'meckel-diverticulitis', title:'Meckel Diverticulitis', region:'abdomen', system:'Small bowel',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🔬',
    blurb:'Inflamed blind-ending ileal diverticulum in the right lower quadrant — the great appendicitis mimic.',
    tags:['Blind-ending loop','Right lower quadrant','Heterotopic mucosa'], rp:'meckel-diverticulum',
    sheet:{
      find:'<b>Blind-ending outpouching</b> from the anti-mesenteric border of the distal ileum (within 100 cm of the ileocecal valve) with perilesional fat stranding and wall thickening. A <b>normal appendix</b> should be identified separately. May contain an enterolith.',
      measure:'Diverticulum length and width. Assess for complications: perforation (pneumoperitoneum, free fluid), obstruction (acts as lead point for intussusception), or bleeding.',
      pitfall:'Most cases are indistinguishable from appendicitis clinically; CT finding of normal appendix with a separate inflamed right lower quadrant outpouching off the ileum is the key. Ectopic gastric mucosa is not visible on CT.',
      pearl:'<b>Rule of 2s</b>: 2% prevalence, 2 feet from ileocecal valve, 2 inches long, presents in first 2 years but may be seen at any age. Tc-99m pertechnetate scan detects ectopic gastric mucosa.',
      f:'Blind-ending [2.5] cm diverticulum arising from the anti-mesenteric border of the distal ileum with surrounding fat stranding and wall thickening. [Enterolith at the neck. Normal appendix identified separately. No free air.]',
      i:'CT findings consistent with Meckel diverticulitis. Normal appendix excluded. Surgical consultation recommended.'
    }
  },

  {
    slug:'ingested-foreign-body', title:'Ingested Foreign Body / Body Packer', region:'abdomen', system:'GI tract',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'📦',
    blurb:'Localize the object or drug packages, count them, and rule out perforation or obstruction.',
    tags:['Foreign body','Body packer','Perforation'], rp:'ingested-foreign-body',
    sheet:{
      find:'<b>Hyperdense foreign body</b> or <b>drug packages</b> (ovoid, wrapped, high-attenuation capsules with a distinct outer coat): count, locate, and assess for complications. Most commonly in the stomach or small bowel. A <b>sharp foreign body</b> (fish bone, toothpick) may cause focal fat stranding and perforation at the ileocecal valve or sigmoid.',
      measure:'Number and location of packages. Size of the foreign body. Any pneumoperitoneum, abscess, or obstruction.',
      pitfall:'Body packers carry tightly packed drug capsules that may appear as geometric, layered hyperdensities arranged in a string-of-pearls; cocaine packets are often double-wrapped. Under-call risks catastrophic bag rupture.',
      pearl:'<b>Body pushers</b> (vaginally or rectally inserted) vs body packers (swallowed); CT detects both. Surgical consultation for sharp objects in the duodenum, packets with signs of leakage, or failure to progress.',
      call:'Suspected <b>packet leakage</b> (altered mental status, sympathomimetic crisis) or perforation demands immediate surgical and toxicology consultation.',
      f:'[X] hyperdense ovoid packages throughout the [small bowel and colon] in a body-packer configuration. [No pneumoperitoneum, bowel obstruction, or free fluid. No CT evidence of packet rupture.] Largest package [X] mm.',
      i:'Body-packer pattern with [X] drug packages distributed from [stomach] to [sigmoid colon]. [No CT evidence of leakage or perforation.] Surgical and toxicology consultation recommended.'
    }
  },

  {
    slug:'sma-syndrome', title:'SMA Syndrome', region:'abdomen', system:'Duodenum',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🩻',
    blurb:'Narrow aortomesenteric angle compresses the third portion of the duodenum — gastric distension and cut-off.',
    tags:['Aortomesenteric angle','Duodenal cut-off','Weight loss'], rp:'superior-mesenteric-artery-syndrome',
    sheet:{
      find:'<b>Dilated duodenum</b> (first through third portions) with an abrupt cut-off at the level where the third portion crosses between the aorta and SMA. A <b>narrow aortomesenteric angle</b> (<22–25°) and reduced aortomesenteric distance (<8 mm). Proximal gastric distension. The distal duodenum and small bowel are decompressed.',
      measure:'Aortomesenteric angle (normal 38–65°, SMA syndrome <22–25°). Aortomesenteric distance (normal >10 mm, SMA syndrome <8 mm). Measure on sagittal or sagittal-oblique reformats.',
      pitfall:'Can be simulated by prone positioning; scan in supine position. Distinguish from annular pancreas (soft tissue around duodenum), adhesions, or malignancy.',
      pearl:'Predisposing factors: severe weight loss, prolonged bed rest (loss of mesenteric fat pad), scoliosis surgery (Wilkie disease). Nutritional rehabilitation restores the fat pad and relieves obstruction in most cases.',
      f:'Marked dilation of the first through third portions of the duodenum with an abrupt cutoff at the level of the aortomesenteric corridor. Aortomesenteric angle [X]° and distance [X] mm. [Normal caliber small bowel distally.]',
      i:'CT findings consistent with superior mesenteric artery syndrome. Aortomesenteric angle [X]° (reduced). Surgical and gastroenterology consultation recommended.'
    }
  },

  {
    slug:'hemoperitoneum', title:'Hemoperitoneum', region:'abdomen', system:'Peritoneum',
    modality:'CT abdomen/pelvis', sev:'killer', emoji:'🩸',
    blurb:'Hyperdense free fluid — find the source, grade the hemorrhage, decide on angio-embolization or surgery.',
    tags:['Hyperdense free fluid','Sentinel clot','Active blush'], rp:'hemoperitoneum',
    sheet:{
      call:'<b>Active extravasation with hemodynamic instability</b> — immediate surgical or IR consultation.',
      find:'<b>Free intraperitoneal fluid >30–45 HU</b> (acute blood). Identify the <b>sentinel clot</b> (highest-attenuation clot adjacent to the bleeding source) to localize the injury. Active arterial extravasation: jet of contrast approaching aortic density on arterial phase, expanding on delayed phase.',
      measure:'Hemoperitoneum volume (semi-quantitative: mild <250 mL, moderate 250–500 mL, severe >500 mL). Active blush HU (>85–100 HU = active arterial hemorrhage). AAST organ injury grade.',
      pitfall:'Old blood (>48 h) becomes isodense or hypodense to muscle — review clinical history. Ascites is low-attenuation (<20 HU); hemoperitoneum is higher-attenuation (30–45+ HU).',
      pearl:'<b>Hyperdense clot adjacent to normal-density fluid</b> = hemoperitoneum with ongoing bleeding (hematocrit effect). Double contrast sign in the bladder distinguishes cystography from hemoperitoneum.',
      f:'[Moderate] volume high-attenuation free fluid ([X] HU) throughout the peritoneal cavity with the sentinel clot in the [perihepatic / perisplenic / pelvic] space. [Active arterial extravasation from the [right hepatic / splenic] artery measuring [X] HU.]',
      i:'Hemoperitoneum with active arterial hemorrhage from [source]. [AAST Grade [X] [hepatic/splenic/renal] laceration]. Discussed with [surgery/IR] at [time].'
    }
  },

  {
    slug:'retroperitoneal-hematoma', title:'Retroperitoneal Hematoma', region:'abdomen', system:'Retroperitoneum',
    modality:'CT abdomen/pelvis', sev:'urgent', emoji:'🔴',
    blurb:'Zone-based classification guides management — Zone 1 (central) and Zone 2 (flank) demand exploration or angio.',
    tags:['Zone classification','Active blush','Anticoagulant'], rp:'retroperitoneal-haematoma',
    sheet:{
      find:'<b>Hyperdense (30–60 HU) collection</b> in the retroperitoneum displacing the kidney, ureter, or bowel. Note whether it is <b>Zone 1</b> (central perivascular — aorta/vena cava injury), <b>Zone 2</b> (perirenal/flank — renal or lumbar artery), or <b>Zone 3</b> (pelvic — iliac vessels/pelvic fracture).',
      measure:'Dimensions and HU of the hematoma. Active extravasation (arterial blush). Look for underlying cause: aortic aneurysm, renal laceration, lumbar artery tear, vertebral fracture, anticoagulation.',
      pitfall:'Zone 3 pelvic hematomas from pelvic fractures are usually venous and managed with pelvic packing + angiography; Zone 1 mandates laparotomy if unstable. Iliacus hematoma from femoral nerve compression may be missed.',
      pearl:'Spontaneous retroperitoneal hematoma on anticoagulation most often arises from the iliacus or psoas muscle — look for an enlarged hemorrhagic iliopsoas. Femoral nerve stretch causes hip flexion pain.',
      call:'<b>Zone 1 hematoma with active extravasation or hemodynamic instability</b> demands immediate surgical consultation.',
      f:'[Zone 2] retroperitoneal hematoma measuring [X × X × X] cm in the [right perirenal space] with attenuation [X] HU. [Active arterial extravasation from the [right renal] artery.] [No extension to the pelvic retroperitoneum.]',
      i:'[Zone 2] retroperitoneal hematoma with [active arterial hemorrhage from the right renal artery]. [AAST Grade [X] renal laceration.] [Hemodynamic instability / stable]. Surgical/IR consultation recommended.'
    }
  },

  {
    slug:'peritoneal-carcinomatosis', title:'Peritoneal Carcinomatosis', region:'abdomen', system:'Peritoneum',
    modality:'CT abdomen/pelvis', sev:'routine', emoji:'🔵',
    blurb:'Omental cake, serosal implants, and malignant ascites — characterize extent for surgical candidacy.',
    tags:['Omental cake','Serosal implants','PCI score'], rp:'peritoneal-carcinomatosis',
    sheet:{
      find:'<b>Omental cake</b>: solid or nodular replacement of the greater omentum. <b>Serosal implants</b>: nodular or plaque-like soft tissue on bowel surfaces, mesentery, diaphragm, and peritoneum. <b>Malignant ascites</b>. Liver surface scalloping from peritoneal deposits.',
      measure:'<b>Peritoneal Cancer Index (PCI)</b>: document implants by region (0–12 abdominopelvic regions) and lesion size (0–3 scale) — guides cytoreductive surgery candidacy. Note small bowel involvement which limits surgical resectability.',
      pitfall:'Small serosal implants (<5 mm) are below CT resolution — PET-CT or diagnostic laparoscopy provides staging that CT underestimates. Pseudo-myxoma peritonei appears as low-attenuation gelatinous implants scalloping solid organs.',
      pearl:'Primary sites: ovary, colon, gastric, pancreatic, and appendiceal carcinoma. Elevated diaphragm and right-sided pleural effusion suggest hepatic and phrenic involvement. <b>HIPEC candidacy</b> requires surgically completable cytoreduction (PCI and regional involvement).',
      f:'Omental cake replacing the greater omentum, peritoneal implants in [region list], and [moderate] volume malignant ascites. [Serosal deposits on the small bowel mesentery. Liver surface scalloping.] [No high-grade obstruction.]',
      i:'CT findings consistent with peritoneal carcinomatosis, most compatible with [known/unknown] primary [ovarian/colorectal] malignancy. [PCI estimation: X/39.] Oncology and surgical oncology consultation for cytoreduction/HIPEC candidacy.'
    }
  }

]);
