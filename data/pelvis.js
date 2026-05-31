/* Region: Pelvis and OB/GYN — adnexa, uterus, pregnancy, scrotum. */
ERCT.add([

  {
    slug:'ectopic-pregnancy-tubal', title:'Tubal Ectopic Pregnancy', region:'pelvis', system:'Pregnancy',
    href:'ectopic/ectopic-pregnancy.html',
    modality:'CT pelvis', sev:'killer', emoji:'🚨',
    blurb:'Adnexal ring mass with no IUP — ruptured tubal ectopic bleeds fast and kills fast.',
    tags:['No IUP','Adnexal ring','Hemoperitoneum'], rp:'ectopic-pregnancy',
    sheet:{
      find:'An <b>adnexal ring sign</b> — a thick-walled hyperattenuating ring in the adnexa separate from the ovary — with no intrauterine gestational sac. Free fluid in the pelvis and Morison\'s pouch indicates hemorrhage. Look for a tubular structure lateral to the uterus.',
      measure:'Adnexal ring commonly 1–3 cm. Quantify free fluid distribution (pelvic only vs upper abdomen — if fluid reaches liver/spleen, hemorrhage is massive). Correlate serum beta-hCG; IUP expected >1500–2000 mIU/mL on US.',
      pitfall:'CT often first-line in undifferentiated pelvic pain; an <b>empty uterus</b> with any adnexal complex and free pelvic fluid must raise ectopic regardless of hCG. Corpus luteum cyst can mimic the ring sign — ovarian location and simpler appearance favor corpus luteum.',
      pearl:'A <b>tubal ring</b> separate from the ovary is the key discriminator from corpus luteum. On CT a hematosalpinx appears as a tubular hyperdense adnexal structure.',
      call:'Free fluid beyond the pelvis or hemodynamic instability = <b>ruptured ectopic</b> — OR now. Communicate immediately even with equivocal findings when beta-hCG is elevated and no IUP is seen.',
      f:'[Right/Left] adnexal ring-like structure measuring [X] cm, separate from the ovary, with surrounding free fluid. No intrauterine gestational sac. [Hemoperitoneum extending to the] [paracolic gutters / perihepatic space].',
      i:'CT findings suspicious for [right/left] tubal ectopic pregnancy with [hemoperitoneum]. No intrauterine pregnancy identified. Urgent OB/GYN correlation with transvaginal ultrasound and serum beta-hCG.'
    }
  },

  {
    slug:'ruptured-ectopic', title:'Ruptured Ectopic Pregnancy', region:'pelvis', system:'Pregnancy',
    modality:'CT pelvis', sev:'killer', emoji:'💉',
    blurb:'Hemoperitoneum from ruptured ectopic is a surgical emergency — every minute of delay matters.',
    tags:['Hemoperitoneum','Ruptured tube','Shock'], rp:'ectopic-pregnancy',
    sheet:{
      find:'<b>Hyperdense free fluid</b> (40–70 HU) layering in the pelvis, paracolic gutters, and perihepatic/perisplenic spaces. Look for an ill-defined or collapsed adnexal ring and <b>active extravasation</b> (blush on arterial phase) near the adnexa. Uterus deviated by hematoma.',
      measure:'Free fluid HU > 30 indicates hemorrhage (vs simple fluid). Measure hemoperitoneum extent: pelvic only, to mid-abdomen, or upper abdomen — guides surgical urgency. Active blush > 10 HU above surrounding hematoma.',
      pitfall:'Layering hyperdense fluid can be overlooked on scout or soft-tissue windows — always review on wider windows or non-contrast series. Bladder flap hematoma can obscure adnexal detail.',
      pearl:'The <b>sentinel clot</b> (highest-density blood) is often adjacent to the rupture site and may help lateralize the source when the adnexal ring itself is disrupted.',
      call:'<b>Massive hemoperitoneum</b> with adnexal ring complex in a woman of reproductive age = ruptured ectopic until proven otherwise. Emergency surgical consultation — do not delay for confirmatory US.',
      f:'Large volume hyperdense free fluid (measuring up to [X] HU) throughout the pelvis and [paracolic gutters / perihepatic space]. [Right/Left] adnexal complex measuring [X] cm with surrounding high-density clot. [Active arterial extravasation adjacent to the right/left adnexa.]',
      i:'CT findings consistent with ruptured ectopic pregnancy with [moderate/large] hemoperitoneum. Emergency surgical evaluation recommended.'
    }
  },

  {
    slug:'ovarian-torsion', title:'Ovarian (Adnexal) Torsion', region:'pelvis', system:'Adnexa',
    href:'ovarian-torsion/ovarian-torsion.html',
    modality:'US/CT', sev:'killer', emoji:'🌀',
    blurb:'Enlarged edematous ovary with absent flow and a twisted pedicle — act before infarction.',
    tags:['Enlarged ovary','Whirl sign','Absent flow'], rp:'ovarian-torsion',
    sheet:{
      find:'<b>Enlarged ovary</b> (often >5 cm, mean ~10 cm in torsion) displaced to the midline or contralateral pelvis. Peripheral follicles displaced to the cortex by stromal edema (<b>string of pearls</b>). <b>Twisted vascular pedicle</b> (whirl sign on CT — spiraling vessels at the adnexal hilum). Free pelvic fluid is common.',
      measure:'Ovarian volume >21 cm³ is suspicious; >2× contralateral size is highly supportive. On US, absent or decreased Doppler flow (note: present flow does not exclude torsion — 60% of torsion cases retain some flow on Doppler).',
      pitfall:'<b>Present Doppler flow does not exclude torsion.</b> CT is less sensitive than US for vascular assessment but the ovarian enlargement and pedicle whirl are key CT signs. A lead-point mass (dermoid, cystadenoma) predisposes — always look.',
      pearl:'The <b>whirl sign</b> of the ovarian pedicle at the hilum is the most specific CT finding for torsion. Associated lead-point mass occurs in ~50–60%; dermoid (fat density) and cystadenoma are most common.',
      call:'Enlarged edematous ovary with clinical pain — <b>presumed torsion until detorsion in OR</b>. Report to OB/GYN immediately; imaging specificity is not high enough to safely rule out torsion.',
      f:'[Right/Left] ovary markedly enlarged measuring [X × Y × Z] cm with peripheral displacement of follicles and stromal edema. Twisted vascular pedicle (whirl sign) at the [right/left] adnexal hilum. [Associated dermoid/cystic mass measuring X cm.] Small volume pelvic free fluid.',
      i:'CT findings highly suspicious for [right/left] ovarian torsion. Urgent OB/GYN surgical consultation recommended.'
    }
  },

  {
    slug:'ruptured-ovarian-cyst-hemoperitoneum', title:'Ruptured Ovarian Cyst with Hemoperitoneum', region:'pelvis', system:'Adnexa',
    modality:'CT pelvis', sev:'urgent', emoji:'🔴',
    blurb:'Ruptured hemorrhagic cyst spills into the peritoneum — most self-limit, but large bleeds need IR or OR.',
    tags:['Hemoperitoneum','Ruptured cyst','Active blush'], rp:'ruptured-ovarian-cyst',
    sheet:{
      find:'<b>Collapsed or absent ovarian cyst</b> with adjacent high-density hematoma (clot HU 40–70) or layering hyperdense pelvic free fluid. Contiguous free blood in the paracolic gutters in larger bleeds. Look for an <b>active arterial blush</b> on CTA if hemodynamically unstable.',
      measure:'Quantify free fluid extent and HU. Active blush > surrounding hematoma by >10 HU. Contralateral ovary to estimate normal size. Residual cyst wall if intact (may show rim enhancement).',
      pitfall:'Distinguishing ruptured hemorrhagic cyst from ruptured ectopic: confirm IUP on CT or transvaginal US. A collapsed cyst within the ovary (vs adnexal ring separate from ovary) favors ruptured cyst over ectopic.',
      pearl:'The <b>sentinel clot</b> adjacent to one ovary points to the source. Simple-density ascites (near water HU) argues against hemorrhage; blood typically >20–30 HU acutely.',
      call:'Active arterial extravasation with expanding hematoma and hemodynamic instability warrants <b>emergent IR/surgical consult</b>.',
      f:'[Right/Left] ovary with collapsed cystic structure and adjacent high-density pelvic hematoma. [Moderate/large] volume hyperdense free fluid (HU [X]) extending to [paracolic gutters]. [Active arterial extravasation adjacent to the right/left ovary.] Intrauterine pregnancy [not identified / identified].',
      i:'CT findings consistent with ruptured [right/left] ovarian cyst with [moderate] hemoperitoneum. [No active extravasation.] Clinical and hemodynamic correlation recommended; transvaginal US to exclude ectopic pregnancy if not done.'
    }
  },

  {
    slug:'hemorrhagic-ovarian-cyst', title:'Hemorrhagic Ovarian Cyst', region:'pelvis', system:'Adnexa',
    modality:'CT pelvis', sev:'routine', emoji:'🟠',
    blurb:'Hyperattenuating or heterogeneous adnexal cyst — internal hemorrhage is usually self-limited.',
    tags:['Hyperattenuating','Reticular pattern','No solid nodule'], rp:'haemorrhagic-ovarian-cyst',
    sheet:{
      find:'Adnexal cyst with <b>high internal attenuation</b> (35–80 HU) on non-contrast CT, or heterogeneous contents suggesting clot resorption. On US: reticular/lace-like internal echoes, no internal Doppler flow, and a posterior acoustic enhancement pattern distinguishes hemorrhagic cyst from solid tumor.',
      measure:'Size threshold: <5 cm in premenopausal = likely benign hemorrhagic cyst, follow per ACR ADNEX/O-RADS. >5 cm or postmenopausal warrants closer attention. Confirm no solid enhancing nodule on contrast CT.',
      pitfall:'<b>Endometrioma</b> also appears hyperattenuating and can mimic hemorrhagic cyst — endometriomas are often bilateral, have thicker walls, and "shading" on MRI T2. A <b>dermoid</b> (fat density) can have heterogeneous contents too.',
      pearl:'A completely fluid-filled cyst with all-over hyperattenuation (50–100 HU) on non-contrast CT and no solid component is nearly always a hemorrhagic cyst in a premenopausal woman.',
      f:'[Right/Left] adnexal cyst measuring [X] cm with diffusely elevated attenuation ([X] HU) consistent with internal hemorrhage. No solid enhancing nodule. No free pelvic fluid. Contralateral adnexa unremarkable.',
      i:'[Right/Left] hemorrhagic ovarian cyst measuring [X] cm. Findings are benign in appearance. [Recommend transvaginal ultrasound follow-up per O-RADS guidelines.]'
    }
  },

  {
    slug:'tubo-ovarian-abscess', title:'Tubo-Ovarian Abscess', region:'pelvis', system:'Adnexa',
    modality:'CT pelvis', sev:'urgent', emoji:'🦠',
    blurb:'Complex cystic-solid adnexal mass with thick enhancing walls and inflammatory fat stranding — PID gone bad.',
    tags:['Thick-walled','Fat stranding','Pyosalpinx'], rp:'tubo-ovarian-abscess',
    sheet:{
      find:'<b>Complex multilocular adnexal mass</b> with thick, irregular, <b>avidly enhancing walls</b> and internal low-density fluid (pus). Perilesional fat stranding and adjacent bowel thickening. Look for <b>pyosalpinx</b> (dilated tubular fluid-filled structure with enhancing walls extending from the uterus). Gas within the abscess is rare but diagnostic.',
      measure:'Measure abscess in three dimensions. Note proximity to bowel and pelvic sidewall. Internal gas is pathognomonic. Bilateral involvement is common (>50% of TOA).',
      pitfall:'<b>Ovarian torsion</b> can co-exist with TOA — enlarged edematous ovary within the complex mass should prompt consideration of torsion. Appendiceal abscess can involve the right adnexa and mimic right-sided TOA.',
      pearl:'TOA that does not respond to IV antibiotics in 48–72 hours needs <b>IR drainage or surgical intervention</b>. Ruptured TOA (peritonitis, free air/fluid) is a surgical emergency.',
      call:'Ruptured TOA with peritonitis or septic shock = <b>emergent surgery</b> — communicate immediately.',
      f:'[Right/Left / Bilateral] complex adnexal mass(es) measuring [X × Y] cm with thick enhancing walls, internal debris, and adjacent fat stranding consistent with tubo-ovarian abscess. [Pyosalpinx identified on the right/left.] [No gas within the collection.] Peritoneal fluid [present/absent].',
      i:'CT findings of [right/left/bilateral] tubo-ovarian abscess. [No evidence of rupture.] Recommend gynecologic consultation and IV antibiotics; IR drainage guidance available if no response.'
    }
  },

  {
    slug:'pelvic-inflammatory-disease', title:'Pelvic Inflammatory Disease', region:'pelvis', system:'Adnexa',
    modality:'CT pelvis', sev:'urgent', emoji:'🔥',
    blurb:'Uterine enhancement, endometrial fluid, salpingeal thickening, and pelvic fat haziness — PID before abscess forms.',
    tags:['Endometrial fluid','Salpingeal thickening','Fat haziness'], rp:'pelvic-inflammatory-disease',
    sheet:{
      find:'<b>Endometrial fluid or gas</b> (endometritis); <b>thickened, enhancing fallopian tubes</b> (salpingitis); <b>pelvic fat stranding</b>; free fluid in the cul-de-sac. Uterus may show increased myometrial enhancement. Can grade severity: mild (tubes only) to severe (TOA). Hydrosalpinx appears as a tubular, folded, fluid-filled adnexal structure.',
      measure:'Endometrial fluid >5 mm in non-pregnant patient is abnormal. Salpingeal wall enhancement and thickness. Note any focal abscess formation.',
      pitfall:'PID is primarily a clinical and US/pelvic exam diagnosis; CT is often ordered for abdominal pain and PID is the unexpected finding. Beware confusing a <b>hydrosalpinx from prior PID</b> (chronic, thin wall, no stranding) with acute salpingitis.',
      pearl:'<b>Fitz-Hugh–Curtis perihepatitis</b> — linear hepatic capsule enhancement or perihepatic fat stranding — complicates ~10–20% of PID (chlamydial/gonorrheal); look at the right upper quadrant.',
      f:'Bilateral [/right/left] tubal wall thickening and enhancement consistent with salpingitis. Endometrial fluid measuring [X] mm. Pelvic fat stranding. [No discrete abscess.] [Perihepatic fat haziness consistent with Fitz-Hugh–Curtis syndrome.]',
      i:'CT findings consistent with pelvic inflammatory disease (salpingitis [with early endometritis]). No tubo-ovarian abscess identified. Gynecologic evaluation and treatment recommended.'
    }
  },

  {
    slug:'ovarian-vein-thrombosis', title:'Ovarian Vein Thrombosis', region:'pelvis', system:'Adnexa',
    modality:'CT pelvis', sev:'urgent', emoji:'🩸',
    blurb:'Postpartum flank pain with a tubular non-enhancing ovarian vein — 90% right-sided, treat with anticoagulation.',
    tags:['Postpartum','Tubular filling defect','Right-sided'], rp:'ovarian-vein-thrombosis',
    sheet:{
      find:'A <b>tubular, non-enhancing, distended vascular structure</b> in the right (or left) adnexa tracking superiorly toward the IVC (right) or left renal vein (left). Low-density endoluminal filling defect with rim enhancement of the vein wall. Perivenous inflammatory stranding common. IVC involvement in up to 13%.',
      measure:'Measure vein diameter (normal ovarian vein ~3–4 mm). Check IVC for extension. Assess for associated pyelonephritis or abscess.',
      pitfall:'Right ovarian vein courses parallel to the right ureter — do not mistake a dilated ureter for the ovarian vein. Follow the structure: ureter goes to bladder; ovarian vein goes to IVC/renal vein.',
      pearl:'Septic ovarian vein thrombosis presents with spiking fevers postpartum (typically days 2–5) and requires <b>anticoagulation plus broad-spectrum antibiotics</b>. Risk of septic pulmonary emboli.',
      call:'IVC extension of thrombus or septic emboli on chest CT = escalate anticoagulation management urgently.',
      f:'Distended [right] ovarian vein with non-enhancing endoluminal filling defect measuring [X] cm in diameter, extending from the [right adnexa] to [the IVC]. Perivenous fat stranding. [No IVC extension.]',
      i:'CT findings consistent with [right] ovarian vein thrombosis. [No IVC extension identified.] Clinical correlation for septic thrombosis; anticoagulation and infectious disease consultation recommended.'
    }
  },

  {
    slug:'uterine-fibroid-degeneration', title:'Degenerating Uterine Fibroid', region:'pelvis', system:'Uterus',
    modality:'CT pelvis', sev:'urgent', emoji:'🟡',
    blurb:'Enlarged heterogeneous fibroid with central low density — degenerating myoma can cause acute pelvic pain mimicking torsion or appendicitis.',
    tags:['Heterogeneous fibroid','Central necrosis','Calcification'], rp:'uterine-fibroid',
    sheet:{
      find:'<b>Enlarged heterogeneous uterus</b> with one or more discrete intramural or pedunculated masses showing <b>central hypoattenuation</b> (cystic/hyaline/red degeneration), peripheral calcification (popcorn pattern), or peripheral rim of enhancement with central non-enhancement. Red degeneration in pregnancy presents with heterogeneous, hemorrhagic core.',
      measure:'Measure dominant fibroid in three dimensions. Note location: submucosal, intramural, subserosal, or pedunculated. Assess for uterine enlargement.',
      pitfall:'Pedunculated subserosal fibroid can <b>tort on its pedicle</b> and mimic adnexal torsion — trace the stalk back to the uterus. Degenerating fibroid can mimic ovarian mass on CT; US or MRI for clarification.',
      pearl:'<b>Sarcomatous transformation</b> is rare (~0.1–0.5%) but consider if rapid growth, irregular margins, and central necrosis without typical fibroid calcification pattern. MRI is the gold standard for characterization.',
      f:'Enlarged heterogeneous uterus with a dominant [intramural/subserosal/pedunculated] fibroid measuring [X × Y × Z] cm showing [central hypoattenuation / peripheral calcification / heterogeneous enhancement]. [No pedicle torsion identified.] [No free pelvic fluid.]',
      i:'Degenerating uterine fibroid measuring [X] cm. [No CT signs of pedicle torsion or sarcomatous change.] Correlation with transvaginal ultrasound or MRI recommended for further characterization.'
    }
  },

  {
    slug:'uterine-rupture', title:'Uterine Rupture', region:'pelvis', system:'Uterus',
    modality:'CT pelvis', sev:'killer', emoji:'💥',
    blurb:'Myometrial discontinuity with intraperitoneal fetal parts or hemoperitoneum — catastrophic obstetric emergency.',
    tags:['Myometrial defect','Hemoperitoneum','Prior scar'], rp:'uterine-rupture',
    sheet:{
      find:'<b>Myometrial wall discontinuity</b> or focal thinning (<3 mm at the scar site). <b>Hemoperitoneum</b> (hyperdense free fluid). Extrauterine location of fetal parts or placenta on CT is pathognomonic. Active extravasation may be present. Look at prior cesarean scar site (lower uterine segment anterior wall).',
      measure:'Myometrial thickness at the scar site (normal >3 mm). Volume of hemoperitoneum. Active blush measurement.',
      pitfall:'In a stable patient a uterine window (thin scar with intact serosa) may be misread as rupture — true rupture has <b>serosal/peritoneal breach</b> and free blood. CT is often diagnostic in blunt trauma; in obstetric scar rupture, US is first-line but CT may be the available modality.',
      pearl:'Risk factors: prior cesarean section (classic or low transverse), uterine instrumentation, grand multiparity, and obstructed labor. Lower uterine segment is the most common site for scar dehiscence.',
      call:'<b>Any suspected uterine rupture with viable pregnancy or massive hemorrhage = immediate OB and OR team notification.</b>',
      f:'Focal discontinuity of the [anterior lower uterine segment] myometrium with serosal breach. Hemoperitoneum [moderate/large] volume with hyperdense fluid (HU [X]). [Active arterial extravasation.] [Extrauterine fetal parts not identified / identified in the peritoneal cavity.]',
      i:'CT findings consistent with uterine rupture at the [lower uterine segment scar site] with [moderate/large] hemoperitoneum. Emergency OB surgical consultation.'
    }
  },

  {
    slug:'placental-abruption', title:'Placental Abruption', region:'pelvis', system:'Pregnancy',
    modality:'CT pelvis', sev:'killer', emoji:'🔴',
    blurb:'Retroplacental hematoma separates placenta from myometrium — fetal and maternal lives depend on speed.',
    tags:['Retroplacental hematoma','Placental separation','Heterogeneous placenta'], rp:'placental-abruption',
    sheet:{
      find:'<b>Retroplacental hematoma</b>: a crescentic or convex hyperdense collection between the placenta and myometrium. <b>Heterogeneous placental texture</b> with loss of normal homogeneous enhancement. Active extravasation in severe cases. Subchorionic hematoma appears marginal. Assess fetal lie and viability markers.',
      measure:'Estimate percentage of placental surface involved (>50% = severe, high risk of fetal demise). Hematoma HU (acute = 50–80 HU). Look for retroplacental hematoma size and location.',
      pitfall:'US is first-line for abruption in the obstetric suite; CT is performed in trauma. <b>Acute isoattenuating blood</b> can be overlooked on CT — compare to the placenta carefully. A retroplacental fibroid can mimic hematoma; check prior imaging.',
      pearl:'Traumatic abruption can occur without external signs of trauma. Fetal heart rate monitoring is essential regardless of imaging findings — CT does not exclude clinically significant abruption.',
      call:'Any CT finding suggesting placental separation in a viable pregnancy = <b>immediate OB notification and continuous fetal monitoring</b>.',
      f:'Retroplacental hyperdense crescentic collection measuring [X × Y] cm along the [anterior/posterior/lateral] placenta with loss of normal placental-myometrial interface. Placental involvement estimated [X]%. [Active extravasation.] [Heterogeneous placental parenchyma.]',
      i:'CT findings consistent with placental abruption with retroplacental hematoma ([X]% estimated surface involvement). Immediate obstetric consultation and fetal monitoring.'
    }
  },

  {
    slug:'retained-products-of-conception', title:'Retained Products of Conception', region:'pelvis', system:'Uterus',
    modality:'CT pelvis', sev:'urgent', emoji:'🟠',
    blurb:'Heterogeneous intrauterine material with abnormal vascularity after delivery or abortion — can cause life-threatening hemorrhage.',
    tags:['Intrauterine mass','Hypervascularity','Post-delivery'], rp:'retained-products-of-conception',
    sheet:{
      find:'<b>Heterogeneous intrauterine material</b> (soft-tissue and/or calcified foci) distending the endometrial cavity. On contrast CT: <b>avid enhancement</b> of retained material (hypervascularity). Enlarged uterus. Possible endometrial fluid or hemorrhage surrounding the mass. Dilated uterine vessels.',
      measure:'Endometrial cavity width (normal postpartum <1 cm by 6 weeks). Lesion volume. Note any extension into myometrium (placenta accreta spectrum).',
      pitfall:'Hematometra (blood distending the uterus) without trophoblastic tissue can mimic RPOC on CT — transvaginal US with Doppler flow distinguishes avascular clot from hypervascular RPOC. Small calcifications may be the only CT sign.',
      pearl:'Gestational trophoblastic disease (GTN) presents similarly but with markedly elevated beta-hCG and Swiss-cheese myometrial vascularity; early referral to gynecologic oncology for GTN.',
      call:'Active arterial hemorrhage from RPOC = <b>emergent gynecologic and IR consultation</b>.',
      f:'Heterogeneous enhancing intrauterine material measuring [X × Y] cm with [marked / mild] hypervascularity on contrast-enhanced CT. Endometrial cavity distended. [Calcified foci within the retained material.] [No myometrial invasion.]',
      i:'CT findings suggestive of retained products of conception. Transvaginal US with Doppler correlation recommended. Gynecologic consultation for management.'
    }
  },

  {
    slug:'heterotopic-pregnancy', title:'Heterotopic Pregnancy', region:'pelvis', system:'Pregnancy',
    modality:'CT pelvis', sev:'killer', emoji:'⚠️',
    blurb:'Simultaneous IUP and ectopic pregnancy — rare but lethal if the ectopic is missed because an IUP is found.',
    tags:['IUP plus ectopic','ART','Adnexal ring'], rp:'heterotopic-pregnancy',
    sheet:{
      find:'<b>Intrauterine gestational sac</b> AND a <b>separate adnexal ring or complex mass</b> with hemoperitoneum. The IUP may distract from the ectopic component. Same CT findings as ectopic (adnexal ring, hemoperitoneum) but with a co-existing IUP.',
      measure:'Characterize the ectopic component as for tubal ectopic (adnexal ring size, hemoperitoneum extent). Assess viability of IUP if gestational sac visible.',
      pitfall:'<b>The cardinal error:</b> identifying the IUP and calling the adnexal finding a corpus luteum cyst. With ART or ovulation induction, always scrutinize adnexa even when an IUP is confirmed.',
      pearl:'Incidence ~1:30,000 spontaneous pregnancies but <b>~1:100–1:500 with assisted reproductive technology (ART)</b> — always ask about IVF/IUI history. Surgical treatment targets only the ectopic to preserve the IUP.',
      call:'Adnexal ring with hemoperitoneum in an IVF patient with IUP = <b>heterotopic ectopic until proven otherwise — emergent OB/GYN</b>.',
      f:'Intrauterine gestational sac identified. [Right/Left] adnexal ring-like structure measuring [X] cm, separate from the ovary, with adjacent hemoperitoneum. Findings raise concern for heterotopic pregnancy.',
      i:'CT findings of intrauterine pregnancy with a concurrent [right/left] adnexal complex suspicious for heterotopic ectopic pregnancy. Emergency OB/GYN consultation — correlate with transvaginal ultrasound and beta-hCG.'
    }
  },

  {
    slug:'adnexal-mass-orads', title:'Adnexal Mass — O-RADS CT Context', region:'pelvis', system:'Adnexa',
    modality:'CT pelvis', sev:'routine', emoji:'🔬',
    blurb:'Adnexal mass found on CT — characterize enhancement, septations, and solid components for O-RADS risk stratification.',
    tags:['Solid component','Septations','O-RADS'], rp:'ovarian-mass',
    sheet:{
      find:'Characterize the mass: <b>simple cyst</b> (homogeneous water density, thin wall, no enhancement) vs <b>complex cyst</b> (septations, debris, thick walls) vs <b>solid-cystic</b> (enhancing solid nodule) vs <b>solid</b>. Note bilaterality, ascites, peritoneal deposits, and lymphadenopathy for staging context.',
      measure:'Maximum diameter in three planes. Wall thickness (>3 mm is abnormal). Number and thickness of septations. Size of any solid enhancing component. Enhancement (HU increase >15 on portal venous phase = enhancing).',
      pitfall:'CT cannot reliably characterize adnexal masses compared with MRI/US — do not over-call malignancy on CT. A fat-containing mass (negative HU) is a dermoid; do not mistake fat for necrosis. Paraovarian cysts and peritoneal inclusion cysts are often misclassified as ovarian.',
      pearl:'O-RADS CT categories: O-RADS CT 1 (simple cyst, benign) → O-RADS CT 5 (high-complexity, solid, likely malignant). Solid enhancing mass in a postmenopausal woman or any mass with peritoneal deposits warrants MRI and gynecologic oncology referral.',
      f:'[Right/Left] adnexal [cystic/solid-cystic/solid] mass measuring [X × Y × Z] cm with [simple/thick/irregular] wall and [no/thin/thick] septations. [Solid enhancing component measuring X cm.] [No ascites or peritoneal deposits.] [O-RADS CT category X].',
      i:'[Right/Left] [complex cystic/solid] adnexal mass. [O-RADS CT 3 — low risk / O-RADS CT 4–5 — intermediate-to-high risk.] Transvaginal ultrasound or MRI for further characterization recommended; gynecologic oncology referral if O-RADS 4–5.'
    }
  },

  {
    slug:'endometrioma', title:'Endometrioma', region:'pelvis', system:'Adnexa',
    modality:'CT pelvis', sev:'routine', emoji:'🟤',
    blurb:'Hyperattenuating adnexal cyst with uniform density — the chocolate cyst of endometriosis.',
    tags:['Hyperattenuating cyst','Bilateral','No solid nodule'], rp:'endometrioma',
    sheet:{
      find:'<b>Homogeneously hyperattenuating adnexal cyst(s)</b> (50–90 HU on non-contrast CT) with a well-defined thin wall and no solid enhancing component. Bilateral in ~50%. May have small satellite lesions. Associated CT findings of endometriosis: tethered bowel, implants on pelvic peritoneum.',
      measure:'Measure in three planes. CT HU on unenhanced series. Check for wall nodularity (raises concern for malignant transformation — endometrioid carcinoma). Bilateral assessment.',
      pitfall:'<b>Hemorrhagic cyst</b> is the main mimic and can be indistinguishable on CT — MRI (T1 high, T2 shading) is definitive. Dermoid (fat density, Rokitansky nodule) has distinct CT features. Endometriomas are stable over time; a rapidly growing "endometrioma" needs MRI.',
      pearl:'MRI T2 <b>shading</b> (T2 hypointense contents due to chronic blood) is pathognomonic. Malignant transformation (<1% lifetime risk) to clear-cell or endometrioid carcinoma — suspect if solid mural nodule develops.',
      f:'[Right/Left / Bilateral] adnexal cyst(s) measuring [X] cm with homogeneous elevated attenuation ([X] HU) on non-contrast CT and thin smooth walls. No solid enhancing component. [No peritoneal endometriotic implants identified.]',
      i:'CT appearance of [right/left/bilateral] endometrioma(s). MRI pelvis for definitive characterization and assessment for malignant transformation if clinically indicated.'
    }
  },

  {
    slug:'ovarian-hyperstimulation-syndrome', title:'Ovarian Hyperstimulation Syndrome (OHSS)', region:'pelvis', system:'Adnexa',
    modality:'CT pelvis', sev:'urgent', emoji:'💧',
    blurb:'Massively enlarged multicystic ovaries with ascites and pleural effusions after ovulation induction.',
    tags:['Massively enlarged ovaries','Ascites','Hemoconcentration'], rp:'ovarian-hyperstimulation-syndrome',
    sheet:{
      find:'<b>Bilaterally massively enlarged ovaries</b> (often >5–10 cm) with innumerable peripheral follicular cysts (honeycomb/wheel-spoke pattern). <b>Ascites</b> (third spacing) often large volume; pleural and pericardial effusions in severe cases. Enhanced vessels may show hemoconcentration. Look for <b>ovarian torsion</b> as a complication.',
      measure:'Bilateral ovarian volume (normal <10 cm³; OHSS often >100–500 cm³). Extent of ascites. Pleural effusion volume. Check for DVT or arterial thrombosis (VTE risk significantly elevated).',
      pitfall:'Enlarged multicystic ovaries in OHSS are at high risk for torsion — if unilateral pain, apply torsion criteria. Do not dismiss the ovarian enlargement as "just OHSS" without excluding torsion.',
      pearl:'Severe OHSS can cause life-threatening capillary leak, hypovolemia, renal failure, and thromboembolism. Grade: mild (ovaries 5–12 cm), moderate (+ascites), severe (+respiratory compromise, oliguria). Supportive care; paracentesis for tense ascites.',
      call:'Respiratory compromise, renal failure, or suspected torsion = <b>urgent hospitalization</b>.',
      f:'Bilaterally massively enlarged ovaries measuring [right: X × Y cm, left: X × Y cm] with innumerable peripheral follicular cysts. [Large] ascites. [Bilateral pleural effusions.] [No CT evidence of torsion.] [No DVT on this study.]',
      i:'CT findings consistent with ovarian hyperstimulation syndrome (OHSS), [moderate/severe] grade. [No ovarian torsion. No thrombosis identified.] Urgent gynecologic management recommended.'
    }
  },

  {
    slug:'uterine-cervical-malignancy-obstruction', title:'Uterine/Cervical Malignancy with Obstruction', region:'pelvis', system:'Uterus',
    modality:'CT pelvis', sev:'urgent', emoji:'🔴',
    blurb:'Bulky cervical or uterine mass causing hydronephrosis or bowel obstruction — report ureteral encasement and nodal spread.',
    tags:['Hydronephrosis','Cervical mass','Nodal spread'], rp:'carcinoma-of-the-cervix',
    sheet:{
      find:'<b>Bulky heterogeneous cervical or uterine fundal mass</b> with irregular margins, avid heterogeneous enhancement, and central necrosis. <b>Parametrial invasion</b>: irregular interface between mass and fat lateral to the cervix. <b>Ureteral encasement</b> causing hydronephrosis. Lymphadenopathy along internal/external iliac, obturator, and para-aortic chains.',
      measure:'Mass dimensions in three planes. Ureteral obstruction level. Lymph node size (>10 mm short axis = suspicious). Assess for fistula (vesicovaginal, rectovaginal) — look for air in bladder or thickened rectovaginal septum.',
      pitfall:'CT is poor at distinguishing parametrial invasion vs inflammatory stranding (overstages ~25%) — MRI is the staging modality of choice for cervical carcinoma. However, CT defines nodal and distant disease.',
      pearl:'<b>Obstructive nephropathy</b> from bilateral ureteral encasement can cause acute renal failure — report promptly for ureteral stenting. Check for pulmonary metastases on any chest CT.',
      call:'Bilateral hydronephrosis or rising creatinine = <b>urgent urology/gynecologic oncology consultation</b> for stenting.',
      f:'Bulky heterogeneous [cervical/uterine] mass measuring [X × Y × Z] cm with [central necrosis / irregular margins]. [Bilateral/right/left] hydronephrosis with ureteral encasement at the [pelvic brim/parametrium]. [Enlarged pelvic and para-aortic lymph nodes measuring up to X mm.]',
      i:'CT findings of bulky [cervical/uterine] malignancy with [bilateral] obstructive uropathy and [regional lymphadenopathy]. Urgent urologic consultation for stenting; MRI pelvis and oncology referral for staging and management.'
    }
  },

  {
    slug:'testicular-torsion', title:'Testicular Torsion', region:'pelvis', system:'Scrotum',
    href:'testicular-torsion/testicular-torsion.html',
    modality:'US/CT', sev:'killer', emoji:'🔵',
    blurb:'Absent testicular blood flow with twisting of the spermatic cord — the six-hour window to salvage the testicle.',
    tags:['Absent flow','Spermatic cord twist','Bell-clapper'], rp:'testicular-torsion',
    sheet:{
      find:'On scrotal US (primary modality): <b>absent or markedly decreased Doppler flow</b> in the affected testis compared to the contralateral side. <b>Spermatic cord whirl sign</b> in the inguinal canal or scrotal neck. Testicular heterogeneity indicates infarction. Reactive hydrocele. CT (trauma or undifferentiated): heterogeneous, non-enhancing testis with twisted cord.',
      measure:'Time from symptom onset (<6 hr = ~90–100% salvage; 6–12 hr = ~50%; >24 hr = <10%). Document Doppler flow qualitatively. Testicular size asymmetry.',
      pitfall:'<b>Present Doppler flow does not exclude torsion</b> (intermittent torsion, partial torsion, or reactive hyperemia after detorsion). Clinical suspicion alone is an indication for operative exploration — imaging should not delay surgery.',
      pearl:'<b>Bell-clapper deformity</b> (high attachment of the tunica vaginalis) is bilateral in ~80% — check the contralateral side. Torsion of a testicular appendage presents similarly but has a "blue dot sign" on exam and preserved Doppler flow.',
      call:'<b>Any clinical suspicion of testicular torsion demands immediate urologic surgical consult.</b> Do not wait for imaging if the patient is going to delay surgery.',
      f:'[Right/Left] testis [enlarged / heterogeneous] with absent Doppler flow on color and spectral US. Twisting of the spermatic cord identified in the [scrotal neck / inguinal canal]. Reactive hydrocele. Contralateral testis with normal flow.',
      i:'US findings consistent with [right/left] testicular torsion. Immediate urologic surgical consultation — operative exploration recommended.'
    }
  },

  {
    slug:'epididymo-orchitis', title:'Epididymo-Orchitis', region:'pelvis', system:'Scrotum',
    modality:'US/CT', sev:'urgent', emoji:'🔥',
    blurb:'Enlarged hypervascular epididymis with orchitis — STI or UTI pathogen, treat with antibiotics not the OR.',
    tags:['Hypervascular','Epididymal enlargement','Reactive hydrocele'], rp:'epididymo-orchitis',
    sheet:{
      find:'<b>Enlarged, hyperechoic epididymis</b> (body and tail usually first) with markedly increased Doppler flow (hyperemia). Orchitis: testicular heterogeneity and hyperemia. Reactive hydrocele with thickened scrotal wall. Epididymal abscess: hypoechoic non-enhancing region within the epididymis.',
      measure:'Epididymal size (normal head <12 mm). Testicular involvement. Assess for abscess (focal non-enhancing area).',
      pitfall:'Distinguishing epididymo-orchitis from torsion is critical — torsion has <b>absent/decreased</b> flow; epididymo-orchitis has <b>increased</b> flow. Intermittent torsion can have reactive hyperemia — clinical history matters. Do not delay urology consult if any doubt.',
      pearl:'<b>Fournier\'s gangrene</b> can complicate scrotal infection — look for scrotal wall gas or thickening extending to the perineum. In young men with STI risk: Chlamydia/Gonorrhea. In older men with UTI symptoms: coliform organisms.',
      f:'[Right/Left] epididymis enlarged and hyperemic with [diffuse/focal] increased Doppler flow. [Right/Left] testis [heterogeneous with hyperemia consistent with orchitis / normal in appearance]. Reactive hydrocele. [No epididymal abscess.] [No scrotal wall gas.]',
      i:'US findings consistent with [right/left] epididymo-orchitis. [No abscess.] Antibiotic treatment recommended; urology follow-up.'
    }
  },

  {
    slug:'testicular-rupture', title:'Testicular Rupture / Trauma', region:'pelvis', system:'Scrotum',
    modality:'US/CT', sev:'urgent', emoji:'💥',
    blurb:'Disrupted tunica albuginea with extruding testicular parenchyma — save the testicle in the OR within 72 hours.',
    tags:['Tunica disruption','Hematocele','Extrusion'], rp:'testicular-trauma',
    sheet:{
      find:'<b>Disruption of the tunica albuginea</b>: loss of the smooth hyperechoic line surrounding the testis. <b>Extrusion of testicular parenchyma</b> beyond the tunica. Large <b>hematocele</b> (complex fluid with echoes). Testicular contour irregularity and heterogeneous echotexture (hemorrhagic infarction). On CT: heterogeneous testis with ill-defined margins and adjacent hematoma.',
      measure:'Extent of tunica disruption. Hematocele volume. Residual viable testicular parenchyma (Doppler flow in remaining tissue).',
      pitfall:'Large hematocele can compress the testis and limit US assessment — probe compression and multiple planes are essential. Do not be satisfied with a hematocele alone; always evaluate tunica integrity.',
      pearl:'<b>Surgical exploration within 72 hours</b> of trauma has a >90% testicular salvage rate vs conservative management. Even equivocal US findings with a significant mechanism merit exploration.',
      call:'Disrupted tunica albuginea or equivocal US with significant trauma = <b>urgent urology consultation for exploration</b>.',
      f:'[Right/Left] testis with disruption of the [anterior/posterior] tunica albuginea and extruding parenchyma. Large surrounding hematocele. Heterogeneous testicular echotexture with [preserved/absent] Doppler flow in residual parenchyma.',
      i:'US findings consistent with [right/left] testicular rupture with tunica albuginea disruption and hematocele. Urgent urologic surgical consultation for scrotal exploration.'
    }
  },

  {
    slug:'fournier-gangrene-scrotal', title:'Fournier Gangrene / Scrotal Abscess', region:'pelvis', system:'Scrotum',
    modality:'CT pelvis', sev:'killer', emoji:'💀',
    blurb:'Perineal gas and fascial plane infection extending from scrotum to perineum — necrotizing fasciitis is instantly fatal without debridement.',
    tags:['Perineal gas','Fascial gas','Necrotizing fasciitis'], rp:'fournier-gangrene',
    sheet:{
      find:'<b>Gas within the scrotal wall, perineal soft tissues, or superficial fascial planes</b> (Colles\', Scarpa\'s fascia). CT is superior to clinical exam for delineating extent: follow gas tracking along fascial planes to the thigh, abdominal wall, or retroperitoneum. Soft-tissue thickening, fat stranding, skin thickening. Abscess as loculated fluid collection with gas and rim enhancement.',
      measure:'Document full extent of gas/infection (scrotum, perineum, inguinal, gluteal, thigh, abdominal wall, retroperitoneum). Severity correlates with extent of fascial involvement.',
      pitfall:'Do not mistake <b>iatrogenic perineal gas</b> (recent instrumentation, catheter) for Fournier\'s — clinical context is critical. Isolated scrotal abscess (no fascial plane gas) is managed differently (I and D vs debridement).',
      pearl:'<b>Finger soft sign</b>: gas in the scrotal/perineal fascial planes with subcutaneous emphysema tracking along named planes is pathognomonic Fournier gangrene. Mortality 20–40%; immediate wide surgical debridement is life-saving. Score with <b>FGSI</b> (Fournier Gangrene Severity Index).',
      call:'Perineal/scrotal fascial gas = <b>Fournier gangrene until proven otherwise — emergent surgical debridement, broad-spectrum antibiotics, and ICU — call OR immediately.</b>',
      f:'Extensive gas and soft-tissue stranding within the [scrotum / perineum / bilateral inguinal regions] tracking along [Colles\' and Scarpa\'s fasciae / perineal fascial planes] to the [thigh / abdominal wall]. [No retroperitoneal extension.] [No discrete abscess.]',
      i:'CT findings of Fournier gangrene (necrotizing perineal fasciitis) with gas extending along [perineal] fascial planes. Emergent surgical debridement and broad-spectrum antibiotic therapy required. ICU-level care.'
    }
  },

  {
    slug:'penile-fracture', title:'Penile Fracture', region:'pelvis', system:'Scrotum',
    modality:'CT pelvis', sev:'urgent', emoji:'⚡',
    blurb:'Acute rupture of the tunica albuginea of the corpus cavernosum — a urologic surgical emergency, not a CT diagnosis.',
    tags:['Tunica tear','Hematoma','Urethral injury'], rp:'penile-fracture',
    sheet:{
      find:'Clinical diagnosis: audible pop, sudden detumescence, severe penile pain, rapid hematoma formation (eggplant deformity), and penile deviation. CT/MRI may show <b>discontinuity of the tunica albuginea</b>, peripenile hematoma, and deviation of the corpus. Urethral injury in ~10–15%: blood at urethral meatus or inability to void.',
      measure:'Localize the tear (most common: distal shaft, lateral aspect). Assess for urethral involvement (retrograde urethrogram or cystoscopy if blood at meatus). Hematoma extent.',
      pitfall:'Do not delay surgical referral for imaging confirmation — penile fracture is a clinical diagnosis. Imaging (MRI/US) is used when the diagnosis is uncertain or to localize the tear for surgical planning. CT has limited soft-tissue resolution for tunical tears.',
      pearl:'Immediate surgical repair (within 24 hours) has >90% potency preservation vs conservative management (50–60%). Look for bilateral tunica injury (uncommon, may need bilateral exploration).',
      call:'Clinical penile fracture = <b>immediate urology surgical consultation</b> for repair.',
      f:'Peripenile hematoma with [right/left lateral] soft-tissue disruption of the corpus cavernosum. [No obvious urethral injury on CT.] [Bilateral corpora appear intact/with disruption.]',
      i:'CT findings suggest penile fracture with peripenile hematoma and suspected tunical disruption. Immediate urologic surgical consultation for repair. Retrograde urethrogram recommended to exclude urethral injury.'
    }
  }

]);
