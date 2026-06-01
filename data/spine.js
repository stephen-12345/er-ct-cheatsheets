/* Region: Spine — C/T/L fractures, cord and canal emergencies. */
ERCT.add([
  {
    slug:'atlanto-occipital-dissociation', title:'Atlanto-Occipital Dissociation', region:'spine', system:'Craniocervical',
    modality:'CT spine', sev:'killer', emoji:'💀',
    blurb:'Craniocervical distraction injury — the most immediately fatal cervical fracture pattern, often missed on plain CT.',
    tags:['Basion-dens','BDI/BAI','Craniocervical'], rp:'atlanto-occipital-dislocation',
    sheet:{
      find:'Look for <b>widening of the craniocervical junction</b> on sagittal CT: increased basion-dens interval, abnormal basion-axial interval, prevertebral soft-tissue swelling, and associated occipital condyle fractures. Ligamentous disruption requires MRI confirmation.',
      measure:'<b>Basion-dens interval (BDI) >12 mm</b> in adults or <b>basion-axial interval (BAI) >12 mm</b> is abnormal. Powers ratio >1.0 indicates anterior AOD.',
      pitfall:'Patients may survive with obtundation or respiratory failure, so do not dismiss subtle BDI widening. Prevertebral hematoma alone should prompt measurement.',
      pearl:'Rule of 12s: BDI >12 mm, BAI >12 mm — any one positive in the right mechanism warrants emergent neurosurgery call.',
      call:'<b>AOD is uniformly fatal without emergent stabilization</b> — direct neurosurgery call and secure the airway with in-line stabilization.',
      f:'Basion-dens interval measures [X] mm (normal <12 mm). Basion-axial interval measures [X] mm. [Prevertebral hematoma present.] [Bilateral occipital condyle fractures.]',
      i:'CT findings consistent with atlanto-occipital dissociation. Discussed emergently with neurosurgery at [time].'
    }
  },
  {
    slug:'jefferson-c1-burst-fracture', title:'Jefferson C1 Burst Fracture', region:'spine', system:'C-spine',
    modality:'CT spine', sev:'killer', emoji:'💥',
    blurb:'Axial load shatters the C1 ring — lateral mass overhang signals transverse ligament disruption and instability.',
    tags:['C1 ring','Lateral mass','Transverse ligament'], rp:'jefferson-fracture',
    sheet:{
      find:'<b>Bilateral anterior and posterior arch fractures of C1</b> on axial CT, with lateral displacement of the C1 lateral masses relative to C2. Look for at least 2 fractures in the ring.',
      measure:'Sum of <b>bilateral C1 lateral mass overhang on C2 >6.9 mm (rule of Spence)</b> indicates transverse ligament disruption and instability. This threshold derives from plain films; MRI is definitive for transverse ligament integrity.',
      pitfall:'A unilateral anterior arch fracture is not a Jefferson fracture. Pseudo-spread of C1 on C2 occurs in children due to cartilaginous growth plates — confirm with CT.',
      pearl:'Stable Jefferson = intact transverse ligament (overhang ≤6.9 mm); unstable = disrupted ligament; MRI of the transverse ligament guides surgical planning.',
      call:'Overhang >6.9 mm or any neurologic deficit — <b>call neurosurgery immediately</b> for unstable Jefferson fracture.',
      f:'Fractures through the [anterior and posterior arches] of C1 at [number] sites with [X] mm combined lateral mass overhang beyond the C2 lateral masses. [No retropharyngeal hematoma / hematoma present.]',
      i:'Jefferson (C1 burst) fracture with [X] mm combined lateral overhang, [consistent with / raising concern for] transverse ligament disruption. Discussed with neurosurgery at [time].'
    }
  },
  {
    slug:'odontoid-dens-fracture', title:'Odontoid (Dens) Fracture', region:'spine', system:'C-spine',
    modality:'CT spine', sev:'killer', emoji:'🦷',
    blurb:'Type II at the base of the dens is the high-risk fracture — nonunion in elderly is a pitfall of delayed diagnosis.',
    tags:['Type I/II/III','Dens displacement','C1-C2'], rp:'odontoid-fracture',
    sheet:{
      find:'Sagittal and coronal reformats are key: <b>Type I</b> — oblique fracture of the dens tip; <b>Type II</b> — transverse fracture at the base of the dens (junction with C2 body); <b>Type III</b> — fracture extends into the C2 body. Check for C1-C2 subluxation and cord compression.',
      measure:'Quantify <b>anterior or posterior dens displacement</b> in mm. >5 mm displacement or angulation >10° suggests instability. ADI (anterior atlantodental interval) >3 mm in adults is abnormal.',
      pitfall:'<b>Os odontoideum</b> mimics Type II — smooth, corticated, well-rounded apical ossicle with no acute fracture lines. The os is well-corticated vs a fracture\'s sharp jagged margins.',
      pearl:'Type II has the highest nonunion rate (up to 36%) — especially in elderly >65, posterior displacement, or angulation; these often require surgical fusion vs halo.',
      call:'Displaced Type II (>5 mm) or cord compression — <b>emergent neurosurgery notification</b>.',
      f:'[Type II] odontoid fracture with [anterior / posterior] displacement of [X] mm. [C1-C2 alignment maintained / C1-C2 subluxation present.] [No spinal cord compression.]',
      i:'[Type II] odontoid fracture with [X] mm displacement. [Instability criteria met.] Discussed with neurosurgery at [time].'
    }
  },
  {
    slug:'hangman-c2-fracture', title:'Hangman Fracture (C2 Traumatic Spondylolisthesis)', region:'spine', system:'C-spine',
    modality:'CT spine', sev:'killer', emoji:'🪢',
    blurb:'Bilateral C2 pars fractures from hyperextension-axial load — check disc and anterior longitudinal ligament integrity for true instability.',
    tags:['C2 pars','Spondylolisthesis','Levine-Edwards'], rp:'hangman-fracture',
    sheet:{
      find:'<b>Bilateral fractures through the C2 pedicles or pars interarticularis</b> with anterior subluxation of the C2 body on C3. Review the C2-C3 disc space and anterior longitudinal ligament on CT/MRI.',
      measure:'<b>Levine-Edwards classification</b>: Type I — <3 mm displacement, no angulation; Type II — >3 mm or angulation >11°; Type IIa — severe angulation with little or no translation (flexion-distraction); Type III — bilateral facet dislocation.',
      pitfall:'Type IIa can be worsened by traction — do not apply axial traction before checking the classification. This is the key surgical planning distinction.',
      pearl:'True "hangman" is a judicial execution pattern (hyperextension-distraction); most ED presentations are hyperextension-axial load (MVA). Neurologic deficits are paradoxically uncommon due to canal widening.',
      call:'Type III with facet dislocation and neurologic deficit — <b>emergent neurosurgery call</b>.',
      f:'Bilateral fractures through the C2 [pedicles / pars interarticularis] with [X] mm anterior spondylolisthesis of C2 on C3 and [X]° angulation. [No C2-C3 disc space widening / disc space widened, suspicious for ALL injury.]',
      i:'Hangman fracture (C2 traumatic spondylolisthesis), Levine-Edwards Type [II], with [X] mm displacement. Discussed with neurosurgery at [time].'
    }
  },
  {
    slug:'cervical-facet-dislocation', title:'Cervical Facet Dislocation / Perched-Locked Facet', region:'spine', system:'C-spine',
    modality:'CT spine', sev:'killer', emoji:'🔒',
    blurb:'Jumped or locked facets from flexion-distraction — bilateral dislocation causes cord compression until reduced.',
    tags:['Jumped facets','Bilateral / unilateral','Cord compression'], rp:'cervical-facet-dislocation',
    sheet:{
      find:'On sagittal CT: <b>naked facet sign</b> — superior articular process of the inferior vertebra exposed without its partner. <b>Perched</b> = tip-to-tip contact; <b>jumped/locked</b> = inferior articular process anterior to superior articular process. Bilateral = unstable, high cord injury risk.',
      measure:'Subluxation: unilateral facet dislocation causes <50% anterolisthesis; bilateral causes ≥50%. Measure canal diameter and cord-level compromise.',
      pitfall:'Unilateral facet dislocation can have a normal or near-normal plain film — axial CT through the facet joints is definitive. Do not miss the asymmetric "bow-tie" sign.',
      pearl:'MRI before reduction is increasingly recommended to exclude traumatic disc herniation — a herniated disc at the injury level can worsen neurological injury during closed reduction.',
      call:'Bilateral locked facets with cord compression is a <b>spinal cord emergency — call neurosurgery immediately</b>; rapid reduction (closed vs open) reduces secondary injury.',
      f:'[Bilateral / unilateral right] jumped and locked facets at [C5-C6] with [X]% anterolisthesis. [Cord compression at this level. No disc herniation on limited CT assessment.]',
      i:'[Bilateral] locked cervical facet dislocation at [C5-C6] with [X]% subluxation and cord compression. Emergent neurosurgery consultation recommended.'
    }
  },
  {
    slug:'flexion-teardrop-fracture', title:'Flexion Teardrop Fracture', region:'spine', system:'C-spine',
    modality:'CT spine', sev:'killer', emoji:'💧',
    blurb:'Anterior inferior corner avulsion with retrolisthesis of the posterior fragment into the canal — high acute anterior cord syndrome risk.',
    tags:['Anterior cord','Retrolisthesis','Hyperflexion'], rp:'flexion-teardrop-fracture',
    sheet:{
      find:'<b>Triangular anterior-inferior corner fracture fragment</b> with posterior displacement of the remainder of the vertebral body into the spinal canal. Associated posterior element fractures and widened posterior interspinous space on sagittal CT.',
      measure:'Quantify the degree of retropulsion into the canal and resulting canal compromise as a percentage. Document cord compression on MRI if available.',
      pitfall:'Extension teardrop fracture (avulsion of the anterior-inferior corner at C2 in hyperextension) is often stable — distinguish by mechanism and the absence of retrolisthesis or posterior element injury.',
      pearl:'Flexion teardrop is one of the most unstable cervical fractures — ALL three columns are disrupted. Anterior cord syndrome (preserved proprioception, lost motor/pain/temperature) is the classic clinical correlate.',
      call:'Retrolisthesis with canal compromise — <b>spinal cord emergency; call neurosurgery now</b>.',
      f:'Triangular anterior-inferior corner fracture of [C5] with posterior displacement of the vertebral body remnant into the spinal canal, causing [X]% canal compromise. Posterior interspinous widening at [C4-C5].',
      i:'Flexion teardrop fracture of [C5] with significant canal compromise. High likelihood of anterior cord syndrome. Emergent neurosurgery consultation.'
    }
  },
  {
    slug:'burst-fracture-cervical-thoracolumbar', title:'Burst Fracture (Cervical and Thoracolumbar)', region:'spine', system:'Thoracolumbar',
    modality:'CT spine', sev:'urgent', emoji:'💢',
    blurb:'Axial load explodes the vertebral body — retropulsion into the canal distinguishes burst from simple compression.',
    tags:['Retropulsion','Canal compromise','Three columns'], rp:'burst-fracture-spine',
    sheet:{
      find:'<b>Comminuted vertebral body with retropulsion of bone fragments into the spinal canal</b>. On axial CT: widened interpedicular distance. Sagittal: loss of posterior vertebral body cortex. CT myelogram or MRI for cord/conus assessment.',
      measure:'Quantify <b>canal compromise (%)</b> and <b>vertebral body height loss (%)</b>. Kyphotic angulation >20–30° and canal compromise >50% are thresholds for surgical consideration.',
      pitfall:'<b>Simple compression fracture vs burst</b>: anterior wedging alone with intact posterior wall = compression; any posterior cortex disruption = burst. Do not miss on sagittal.',
      pearl:'At L1-L2, the conus is at risk with even modest compromise — report the level of conus and cauda equina clearly for surgical planning.',
      call:'Canal compromise >50% or neurologic deficit — <b>call neurosurgery urgently</b>.',
      f:'Comminuted burst fracture of [L1] with [X]% loss of vertebral body height, disruption of the posterior cortex, and [X]% canal compromise due to retropulsed fragment. Interpedicular distance widened to [X] mm. [No definite cord compression on CT.]',
      i:'[L1] burst fracture with [X]% canal compromise. MRI recommended for cord/conus assessment. Discussed with neurosurgery at [time].'
    }
  },
  {
    slug:'chance-fracture', title:'Chance (Flexion-Distraction) Fracture', region:'spine', system:'Thoracolumbar',
    modality:'CT spine', sev:'urgent', emoji:'🚗',
    blurb:'Seatbelt fracture through bone or disc and posterior ligaments — associated bowel and mesenteric injury in up to 50%.',
    tags:['Seatbelt','Three-column','Abdominal injury'], rp:'chance-fracture',
    sheet:{
      find:'<b>Horizontal fracture through the spinous process, lamina, pedicles, and vertebral body</b> (pure osseous Chance) or through the posterior ligamentous complex and disc (ligamentous). Sagittal CT shows the horizontal split; axial shows classic "empty vertebra" / "empty disc" sign.',
      measure:'Classify as <b>osseous (Chance proper) vs ligamentous vs combined</b>. Ligamentous predominance is more unstable and less amenable to bracing. Measure kyphosis angle.',
      pitfall:'<b>Abdominal visceral and mesenteric injuries occur in up to 50%</b> — this is a combined trauma injury; always review the CT abdomen/pelvis for bowel wall hematoma, seatbelt sign, mesenteric fat stranding, and free fluid.',
      pearl:'Osseous Chance fractures often heal with bracing; ligamentous injuries typically require surgical stabilization. The key question is bone vs ligament.',
      call:'Neurologic deficit or unstable ligamentous injury — <b>neurosurgery notification; also flag abdominal injury to trauma surgery</b>.',
      f:'Horizontal fracture through the posterior elements, pedicles, and vertebral body of [T12 / L1] consistent with a Chance (flexion-distraction) injury. [Purely osseous / ligamentous component present.] [Associated mesenteric stranding / free intraperitoneal fluid.] [No significant canal compromise.]',
      i:'Chance fracture at [T12/L1], [osseous/ligamentous], with associated [abdominal findings]. Discussed with spine and trauma surgery at [time].'
    }
  },
  {
    slug:'osteoporotic-vs-pathologic-compression-fracture', title:'Osteoporotic vs Pathologic Compression Fracture', region:'spine', system:'Thoracolumbar',
    modality:'MRI (if available) — describe CT findings', sev:'urgent', emoji:'🦴',
    blurb:'Distinguish benign osteoporotic collapse from malignant infiltration — CT can suggest but MRI decides.',
    tags:['Marrow signal','Pedicle destruction','STIR edema'], rp:'vertebral-compression-fracture',
    sheet:{
      find:'<b>CT:</b> Benign — anterior wedge, cortical impaction, intravertebral gas (vacuum cleft), no soft-tissue mass, preserved pedicles. <b>Malignant</b> — posterior vertebral convexity, pedicle destruction, epidural/paraspinal soft-tissue mass, multiple non-contiguous levels.',
      measure:'Quantify height loss and kyphosis. On MRI: STIR diffuse marrow edema with restricted diffusion and enhancing soft-tissue mass = high suspicion for malignancy.',
      pitfall:'<b>Acute osteoporotic fracture shows bone marrow edema on MRI mimicking malignancy</b> — DWI and enhancement pattern help; a band-like low T1 adjacent to the endplate with preserved posterior marrow favors benign.',
      pearl:'An epidural soft-tissue component or pedicle involvement on CT in a known cancer patient = malignant until proven otherwise — proceed directly to MRI for MESCC staging.',
      call:'Epidural extension with cord compression in a cancer patient — see MESCC entry; <b>call neurosurgery and oncology urgently</b>.',
      f:'[Anterior wedge] compression deformity of [T10] with [X]% height loss. [Intravertebral vacuum cleft present, favoring benign osteoporotic etiology. / Posterior cortex convexity, right pedicle destruction, and a paraspinal soft-tissue mass raise strong concern for malignant involvement.]',
      i:'[Osteoporotic / Pathologic] compression fracture at [T10]. [MRI recommended for further characterization / Urgent MRI for MESCC staging.]'
    }
  },
  {
    slug:'spinal-epidural-abscess', title:'Spinal Epidural Abscess', region:'spine', system:'Canal/cord',
    modality:'MRI (if available) — describe CT findings', sev:'killer', emoji:'🦠',
    blurb:'Ring-enhancing epidural collection compressing the cord — fever plus back pain plus deficit is a neurosurgical emergency.',
    tags:['Epidural collection','Ring enhancement','Cord compression'], rp:'spinal-epidural-abscess',
    sheet:{
      find:'<b>CT</b> (limited): hypodense or isodense epidural collection with loss of epidural fat; may see associated discitis-osteomyelitis. <b>MRI with gadolinium</b> is the study of choice: peripheral ring-enhancing epidural fluid collection with cord displacement, phlegmon vs frank abscess.',
      measure:'Document the craniocaudal extent of the collection, cord compression level, and involvement of adjacent disc/endplates (concurrent discitis-osteomyelitis in up to 80%).',
      pitfall:'<b>CT is insensitive</b> for epidural abscess — a normal CT does not exclude it. If clinical suspicion is high (fever, back pain, neurologic deficit), MRI is mandatory.',
      pearl:'<i>Staphylococcus aureus</i> is the causative organism in ~60%. Risk factors: IV drug use, recent spinal procedure, bacteremia, diabetes — always check for these.',
      call:'Any neurologic deficit with epidural abscess — <b>emergent neurosurgery call; surgical drainage often needed within hours to prevent permanent deficit</b>.',
      f:'[Posterior / anterior] epidural collection extending from [T6 to T9] with peripheral rim enhancement on post-contrast MRI consistent with abscess. Cord compressed and displaced [anteriorly]. [Adjacent discitis-osteomyelitis at T7-T8.]',
      i:'Spinal epidural abscess [T6-T9] with cord compression. Discussed urgently with neurosurgery at [time].'
    }
  },
  {
    slug:'spinal-epidural-hematoma', title:'Spinal Epidural Hematoma', region:'spine', system:'Canal/cord',
    modality:'MRI (if available) — describe CT findings', sev:'killer', emoji:'🩸',
    blurb:'Spontaneous or post-procedural epidural blood compresses the cord — the window for decompression is narrow.',
    tags:['Epidural blood','Cord compression','Coagulopathy'], rp:'spinal-epidural-haematoma',
    sheet:{
      find:'<b>CT</b>: hyperdense biconvex or lens-shaped epidural collection, displacing the thecal sac. Often posterior. <b>MRI</b>: T1 variable, T2 heterogeneous epidural mass; cord displacement and intrinsic cord signal change indicate severity.',
      measure:'Document craniocaudal extent, cord compression level, and intrinsic cord T2 signal change (worse prognosis). Check anticoagulation status.',
      pitfall:'<b>Spontaneous SEH occurs in patients on anticoagulants, after Valsalva, or without clear cause</b> — do not anchor on trauma. CT underestimates extent vs MRI.',
      pearl:'Prognosis correlates with duration of deficit before decompression — outcomes poor beyond 36–48 hours of complete deficit. Time-to-OR matters enormously.',
      call:'Any cord compression with new neurologic deficit — <b>emergent neurosurgery call; surgical decompression within hours</b>.',
      f:'[Posterior] epidural hyperdense collection extending [C4-C7], biconvex in configuration, displacing and compressing the thecal sac. [Intrinsic cord T2 signal change at C5-C6.] [Patient on anticoagulation.]',
      i:'Spinal epidural hematoma [C4-C7] with cord compression. Emergent neurosurgery notification at [time].'
    }
  },
  {
    slug:'cauda-equina-syndrome', title:'Cauda Equina Syndrome — Large Central Disc', region:'spine', system:'Canal/cord',
    href:'cauda-equina/cauda-equina.html',
    modality:'MRI (if available) — describe CT findings', sev:'killer', emoji:'🐴',
    blurb:'Massive central L4-L5 or L5-S1 disc herniation compressing the cauda equina — bowel and bladder dysfunction is a surgical alarm.',
    tags:['Central disc','Cauda equina','Saddle anesthesia'], rp:'cauda-equina-syndrome',
    sheet:{
      find:'<b>Large central or centrolateral disc herniation</b> at L4-L5 or L5-S1 effacing the thecal sac and compressing multiple nerve roots. CT: hyperdense disc material encroaching >50% of the canal. MRI: confirms nerve root compression, disc morphology, and epidural fat obliteration.',
      measure:'Quantify <b>% canal stenosis at the level of herniation</b>. Central canal diameter <10 mm is severe. Document the craniocaudal extent of sequestered disc.',
      pitfall:'<b>CT may underestimate disc vs other compressive pathology</b> — MRI is required for pre-op planning and to exclude epidural abscess/hematoma as the cause of CES.',
      pearl:'Incomplete CES (some sacral sparing) has much better surgical outcomes than complete CES — document any preserved perianal sensation or rectal tone in the report context.',
      call:'CES is a <b>surgical emergency — emergent spine surgery consultation</b>; delay beyond 24–48 hours worsens bladder recovery.',
      f:'Large central disc herniation at [L4-L5] causing [X]% canal stenosis and severe compression of the cauda equina. Epidural fat obliterated at this level. [Sequestered fragment extending inferiorly.]',
      i:'Large central disc herniation at [L4-L5] with cauda equina syndrome. Emergent spine surgery consultation recommended. Discussed at [time].'
    }
  },
  {
    slug:'malignant-epidural-spinal-cord-compression', title:'Malignant Epidural Spinal Cord Compression (MESCC)', region:'spine', system:'Canal/cord',
    modality:'MRI (if available) — describe CT findings', sev:'killer', emoji:'🎗️',
    blurb:'Metastatic deposit crushing the cord — dexamethasone and radiation or surgery within hours preserves ambulation.',
    tags:['Epidural metastasis','ESCC grade','Cord compression'], rp:'malignant-epidural-spinal-cord-compression',
    sheet:{
      find:'<b>CT</b>: lytic or sclerotic vertebral metastasis with pedicle destruction and epidural soft-tissue mass encroaching the canal. <b>MRI (gold standard)</b>: marrow replacement (low T1, high STIR), epidural mass with cord displacement, T2 cord signal change.',
      measure:'<b>Bilsky ESCC grading</b>: Grade 0 = bone only; Grade 1a-c = epidural without cord contact/deformation; Grade 2 = cord displaced, CSF preserved; Grade 3 = cord severely compressed, no CSF. Grade 2-3 are high-grade, require urgent intervention.',
      pitfall:'<b>MRI of the entire spine</b> is needed — up to 30% of MESCC patients have additional levels of compression. Single-level focus on only the symptomatic site misses synchronous lesions.',
      pearl:'High-grade MESCC (Bilsky 2-3) in a radiosensitive tumor (lymphoma, myeloma, SCLC) may respond to upfront radiation; solid tumors (breast, renal, thyroid) and mechanically unstable lesions favor surgery first.',
      call:'Cord compression with neurologic deficit — <b>immediate oncology and neurosurgery co-consultation; start dexamethasone</b>.',
      f:'Lytic metastatic lesion at [T6] with pedicle destruction and epidural soft-tissue extension causing [Bilsky Grade 2] cord compression. [T2 cord signal change present.] [Additional epidural lesion at T11, Grade 1c.]',
      i:'Malignant epidural spinal cord compression at [T6], Bilsky Grade [2]. [Additional levels noted.] Discussed urgently with neurosurgery and oncology at [time].'
    }
  },
  {
    slug:'discitis-osteomyelitis', title:'Discitis-Osteomyelitis', region:'spine', system:'Canal/cord',
    modality:'MRI (if available) — describe CT findings', sev:'urgent', emoji:'🦠',
    blurb:'Disc space infection with endplate erosion — MRI is gold standard; CT shows late bony changes and guides biopsy.',
    tags:['Endplate erosion','Disc enhancement','Paraspinal abscess'], rp:'discitis-osteomyelitis',
    sheet:{
      find:'<b>CT</b>: endplate erosion/destruction, disc space narrowing, paraspinal soft-tissue swelling or gas. <b>MRI</b>: T1 low signal / T2 and STIR high signal in the disc and adjacent endplates, disc and endplate enhancement, epidural or paraspinal phlegmon/abscess.',
      measure:'Document the extent of bone destruction, presence of epidural extension, and paraspinal collection size. Assess for cord/cauda equina compression.',
      pitfall:'<b>Modic Type 1 degenerative changes</b> mimic early discitis on MRI — key differentiators are disc enhancement, endplate erosion, and clinical fever/elevated CRP/ESR.',
      pearl:'Blood cultures before antibiotics in hemodynamically stable patients. CT-guided biopsy for culture if blood cultures are negative — organism identification guides 6-week IV antibiotic course.',
      call:'Epidural extension with cord compression — <b>call neurosurgery; see also spinal epidural abscess entry</b>.',
      f:'T1 hypointense and T2/STIR hyperintense signal in the [L2-L3] disc and adjacent endplates with endplate erosion and disc enhancement. [Paraspinal soft-tissue phlegmon / abscess measuring X cm.] [Epidural extension causing X% canal compromise.]',
      i:'MRI findings of discitis-osteomyelitis at [L2-L3] with [paraspinal phlegmon / epidural extension]. Infectious disease and spine surgery consultation recommended.'
    }
  },
  {
    slug:'ankylosing-spondylitis-dish-fracture', title:'Ankylosing Spondylitis and DISH Fracture', region:'spine', system:'Thoracolumbar',
    modality:'CT spine', sev:'killer', emoji:'🪨',
    blurb:'Transverse fracture through a fused spine acts like a long-bone fracture — these are highly unstable and high-mortality.',
    tags:['Fused spine','Transverse fracture','Three-column'], rp:'ankylosing-spondylitis',
    sheet:{
      find:'<b>Transverse fracture through the disc space or vertebral body traversing all three columns</b> of a fused (AS or DISH) spine. Look for: fracture through ossified anterior longitudinal ligament, disc space, and posterior elements. Subtle undisplaced fractures are easily missed.',
      measure:'Document displacement and angulation. The entire spine should be imaged — often presents after low-energy trauma in elderly patients. Note epidural hematoma (common).',
      pitfall:'<b>Undisplaced fractures in a densely fused spine are nearly invisible</b> — use bone windows, sagittal reconstructions, and a low threshold for MRI. Even minor pain after minimal trauma in an AS/DISH patient warrants full spine CT.',
      pearl:'AS fractures have a 3-column injury pattern and behave like long-bone fractures — unstable, high-velocity energy required. Epidural hematoma and neurologic deficit occur in up to 60%. Mortality is high.',
      call:'Any AS/DISH fracture is <b>potentially unstable — emergent neurosurgery call</b>, even without displacement.',
      f:'Transverse fracture through [T10-T11 disc space] extending through the [posterior elements], traversing all three columns in the setting of diffuse spinal ankylosis (AS/DISH). [X] mm displacement. [Epidural hematoma present at this level.]',
      i:'Unstable three-column transverse fracture through fused spine at [T10-T11], consistent with ankylosing spondylitis / DISH fracture. Discussed urgently with neurosurgery at [time].'
    }
  },
  {
    slug:'sacral-fracture-spinopelvic', title:'Sacral Fracture (Traumatic and Insufficiency)', region:'spine', system:'Thoracolumbar',
    modality:'CT spine', sev:'urgent', emoji:'🦴',
    blurb:'Vertical sacral fractures threaten the lumbosacral plexus; bilateral H-type insufficiency fractures are missed on plain radiographs.',
    tags:['Denis zones','H-type','Spinopelvic instability'], rp:'sacral-fracture',
    sheet:{
      find:'<b>Denis classification</b>: Zone I = lateral to sacral foramina (least neurologic risk); Zone II = through the foramina; Zone III = medial to foramina / central canal (highest neurologic risk). <b>H-type (bilateral vertical + transverse)</b>: bilateral vertical fractures connected by a transverse fracture — spinopelvic dissociation.',
      measure:'Document displacement, comminution, Denis zone, and involvement of the neural foramina. U-type and H-type fractures cause spinopelvic dissociation — assess lumbosacral alignment on coronal CT.',
      pitfall:'<b>Insufficiency sacral fractures (elderly, osteoporotic) are occult on plain films in 50%+</b>. Bilateral vertical fractures with sclerotic margins in a low-energy mechanism = insufficiency fractures.',
      pearl:'Zone II/III fractures risk L5-S2 nerve root injury (foot drop, bladder/bowel dysfunction). Always document whether the fracture traverses the foramina and report neurologic risk clearly.',
      call:'H-type fracture with spinopelvic dissociation or Zone III displacement — <b>call orthopedic or neurosurgery for spinopelvic fixation planning</b>.',
      f:'[Bilateral vertical sacral fractures] in Denis Zone [II], with [X] mm displacement. [Horizontal fracture component at S2-S3 level, creating H/U-type pattern.] [Spinopelvic dissociation present / alignment maintained.] [Traversal of the right S1 foramen.]',
      i:'[Bilateral] Denis Zone [II] sacral fractures with [H-type / spinopelvic dissociation]. Discussed with orthopedic surgery at [time].'
    }
  },
  {
    slug:'vertebral-artery-injury-c-spine', title:'Vertebral Artery Injury with C-spine Fracture', region:'spine', system:'C-spine',
    modality:'CTA', sev:'killer', emoji:'🩸',
    blurb:'Fractures through the foramen transversarium or facet joints injure the vertebral artery — stroke risk without anticoagulation.',
    tags:['Foramen transversarium','VAI','Stroke risk'], rp:'vertebral-artery-dissection',
    sheet:{
      find:'On CTA: <b>filling defect, flow void, or absent opacification of the vertebral artery</b> ipsilateral to a fracture through or adjacent to the foramen transversarium (C6-C1). CT bone: fracture extending into or displacing the transverse foramen.',
      measure:'<b>Denver grading</b>: Grade I = irregularity/dissection with <25% stenosis; Grade II = intraluminal thrombus or >25% stenosis; Grade III = pseudoaneurysm; Grade IV = occlusion; Grade V = transection. Grades I–II: anticoagulation/antiplatelet; Grades III–V: endovascular evaluation.',
      pitfall:'<b>CTA is required in any C-spine fracture involving the transverse foramen, facet, or subluxation</b> — plain CT misses the vascular injury. A unilateral occlusion may be asymptomatic if the contralateral VA is dominant.',
      pearl:'Posterior circulation stroke can present 12–72 hours after injury. Screen all foramen transversarium fractures and facet dislocations prospectively — do not wait for symptoms.',
      call:'Any grade VAI in an obtunded patient or grade III–V — <b>vascular surgery or interventional neurology call for anticoagulation decision and possible endovascular treatment</b>.',
      f:'Fracture through the right [C4] transverse foramen. CTA demonstrates [absent opacification / filling defect / caliber irregularity] of the right vertebral artery at this level, consistent with Grade [II / IV] vertebral artery injury.',
      i:'Grade [II] right vertebral artery injury associated with [C4] transverse foramen fracture. Vascular surgery and neurology consulted at [time] for anticoagulation decision.'
    }
  },
  {
    slug:'traumatic-central-cord-sciwora-stenosis', title:'Traumatic Central Cord Syndrome / SCIWORA with Canal Stenosis', region:'spine', system:'Canal/cord',
    modality:'MRI (if available) — describe CT findings', sev:'killer', emoji:'⚡',
    blurb:'Hyperextension through a stenotic cervical canal causes central cord syndrome — CT may look normal; MRI shows the injury.',
    tags:['Central cord','Hyperextension','SCIWORA'], rp:'central-cord-syndrome',
    sheet:{
      find:'<b>CT</b>: pre-existing cervical spondylosis, disc-osteophyte bars, and developmental or degenerative stenosis (canal AP diameter <10 mm = absolute stenosis). Often no fracture. <b>MRI</b>: central cord T2 hyperintensity (hemorrhagic or edematous), disc herniation, or ligamentum flavum buckling compressing the cord at the stenotic level.',
      measure:'Measure <b>mid-sagittal canal AP diameter</b>: normal >13 mm; relative stenosis 10–13 mm; absolute stenosis <10 mm. Document Torg ratio (canal-to-body ratio) and extent of T2 cord signal abnormality on MRI.',
      pitfall:'<b>CT can be normal in central cord syndrome</b> — the injury is to the cord itself from a dynamic pincer mechanism during hyperextension. Normal CT plus clinical CCS = MRI urgently.',
      pearl:'Central cord syndrome = upper > lower extremity weakness with bladder dysfunction, often elderly with pre-existing stenosis. Prognosis is generally better than complete cord injuries; hemorrhagic cord signal on MRI worsens prognosis.',
      call:'Cord signal change on MRI with neurologic deficit — <b>emergent neurosurgery notification</b>; early surgical decompression debated but increasingly favored within 24 hours.',
      f:'Pre-existing [multilevel] cervical spondylosis with absolute canal stenosis at [C4-C5] (AP diameter [X] mm). [No acute fracture.] MRI demonstrates T2 hyperintensity within the central cord at [C4-C5], [without / with] hemorrhagic component.',
      i:'Traumatic central cord syndrome at [C4-C5] superimposed on pre-existing cervical stenosis. [No fracture.] Discussed emergently with neurosurgery at [time].'
    }
  }
]);
