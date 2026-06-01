/* Region: Head, Face and Neck — orbit, sinus, facial fractures, airway, neck vessels. */
ERCT.add([
  {
    slug:'orbital-blowout-fracture', title:'Orbital Blowout Fracture', region:'headneck', system:'Orbit',
    modality:'CT maxillofacial', sev:'urgent', emoji:'👁️',
    blurb:'Indirect force fractures the thin orbital floor or medial wall; watch for entrapped muscle and diplopia.',
    tags:['Trapdoor floor','Muscle entrapment','Enophthalmos'], rp:'orbital-blowout-fracture',
    sheet:{
      find:'Thin-slice axial and coronal CT: disruption of the <b>orbital floor or medial wall (lamina papyracea)</b>. Look for herniation of orbital fat or inferior rectus into the maxillary sinus. A <b>trapdoor fracture</b> (hinge without displacement) entraps muscle and appears subtle.',
      measure:'Estimate orbital volume asymmetry: >15% increase in orbital volume predicts enophthalmos. Document presence and degree of muscle entrapment.',
      pitfall:'The <b>trapdoor fracture</b> in children — near-normal CT with an acutely entrapped inferior rectus causing nausea/bradycardia (oculocardiac reflex). Do not dismiss the subtle floor disruption.',
      pearl:'Medial wall blowout causes epistaxis and enophthalmos without much diplopia; floor blowout causes vertical diplopia and hypoglobus.',
      call:'Entrapped inferior rectus muscle is an <b>urgent surgical case</b> — ischemia develops within hours.',
      f:'Fracture of the [right] orbital [floor / medial wall] with herniation of [orbital fat / inferior rectus muscle] into the [maxillary sinus / ethmoid air cells]. [No extraocular muscle entrapment identified / Inferior rectus appears entrapped within the fracture defect.] [Orbital emphysema present.]',
      i:'[Right] orbital [floor] blowout fracture with [herniated orbital fat / inferior rectus entrapment]. Ophthalmology and oromaxillofacial surgical consultation recommended.'
    }
  },
  {
    slug:'retrobulbar-hemorrhage', title:'Retrobulbar Hemorrhage / Orbital Compartment Syndrome', region:'headneck', system:'Orbit',
    modality:'CT', sev:'killer', emoji:'🔴',
    blurb:'Blood behind the globe raises orbital pressure; lateral canthotomy within 2 hours preserves vision.',
    tags:['Proptosis','Tenting','Canthotomy'], rp:'retrobulbar-haemorrhage',
    sheet:{
      find:'<b>Retrobulbar intraconal or extraconal hematoma</b> (hyperdense blood on NCCT) with proptosis, <b>posterior globe tenting</b> (V-shape at optic nerve insertion), and stretching of the optic nerve. The intraconal fat is obliterated.',
      measure:'Globe proptosis >2 mm asymmetry is significant. Posterior tenting angle <120° correlates with elevated orbital pressure.',
      pitfall:'A subperiosteal hematoma along the orbital roof can be missed — look above the globe on coronal reformats. Do not wait for CT if exam shows orbital compartment syndrome (rigid orbit, no light perception).',
      pearl:'<b>Lateral canthotomy and cantholysis</b> is a bedside procedure — this is a clinical diagnosis; CT confirms but should never delay treatment.',
      call:'Retrobulbar hematoma with posterior tenting = <b>orbital compartment syndrome — call now</b>. Vision loss is irreversible after ~2 hours.',
      f:'[Right] retrobulbar [intraconal] hematoma with proptosis and posterior tenting of the globe, consistent with elevated intraorbital pressure. Optic nerve appears stretched. [No associated fracture.]',
      i:'Orbital compartment syndrome: [right] retrobulbar hemorrhage with globe tenting. Urgent ophthalmology consultation and lateral canthotomy indicated.'
    }
  },
  {
    slug:'globe-rupture', title:'Globe Rupture', region:'headneck', system:'Orbit',
    modality:'CT maxillofacial', sev:'killer', emoji:'💥',
    blurb:'Deformed or collapsed globe with intraocular air, lens dislocation, or vitreous hemorrhage after trauma.',
    tags:['Flat tire sign','Vitreous hemorrhage','Lens dislocation'], rp:'open-globe-injury',
    sheet:{
      find:'<b>Decreased globe volume (flat tire sign)</b>, irregular or squared-off contour, <b>intraocular air</b>, vitreous hemorrhage (high density filling the posterior chamber), lens dislocation, or focal scleral contour discontinuity (flattening or buckling of the scleral wall).',
      pitfall:'Do NOT perform MRI if intraocular foreign body (IOFB) is possible (metal). CT detects metal and glass IOFBs; wood/plastic may be isodense to vitreous.',
      pearl:'A <b>high-density vitreous</b> (70–80 HU) = vitreous hemorrhage. Intraocular air is the most specific sign of open globe — even a tiny bubble.',
      call:'Suspected open globe — <b>ophthalmology immediately</b>, shield the eye, no pressure, no examination.',
      f:'[Right] globe demonstrates decreased volume with scleral irregularity and intraocular air along the [posterior/anterior] chamber. [Vitreous hemorrhage present (hyperdense vitreous).] [Intraocular foreign body measuring X mm at (location).] No retrobulbar hematoma.',
      i:'CT findings consistent with open globe injury of the [right] eye with intraocular air and [vitreous hemorrhage]. Urgent ophthalmology evaluation required. [No metallic intraocular foreign body.]'
    }
  },
  {
    slug:'orbital-cellulitis-abscess', title:'Orbital Cellulitis and Subperiosteal Abscess', region:'headneck', system:'Orbit',
    modality:'CT neck', sev:'urgent', emoji:'🦠',
    blurb:'Sinus-origin infection breaching the orbital septum; subperiosteal abscess demands urgent drainage.',
    tags:['Preseptal vs postseptal','Subperiosteal abscess','Sinus origin'], rp:'orbital-cellulitis',
    sheet:{
      find:'<b>Preseptal cellulitis</b>: periorbital fat stranding anterior to the orbital septum; no proptosis. <b>Postseptal/orbital cellulitis</b>: fat stranding within the orbit, proptosis, optic nerve effacement. <b>Subperiosteal abscess</b>: peripheral rim-enhancing fluid collection along the medial or superior orbital wall, usually from adjacent ethmoid/frontal sinusitis.',
      measure:'Document abscess dimensions, degree of proptosis, and optic nerve compression. Check for intracranial extension (cavernous sinus thrombosis, epidural empyema).',
      pitfall:'Distinguishing cellulitis from phlegmon from discrete abscess — a fluid-density collection with rim enhancement needs drainage. Cavernous sinus thrombosis complicates severe cases: look for filling defects in the cavernous sinus on post-contrast.',
      pearl:'<b>Chandler classification</b>: I=preseptal → V=cavernous sinus thrombosis. Stages III–V require surgical intervention.',
      call:'Subperiosteal abscess, vision loss, ophthalmoplegia, or suspected cavernous sinus thrombosis — <b>urgent ophthalmology/ENT and neurosurgery</b>.',
      f:'[Right] orbital subperiosteal abscess along the [medial] orbital wall measuring [X × Y] cm, associated with [ethmoid] sinusitis. [Proptosis of X mm.] [No intracranial extension. / Filling defect within the [right] cavernous sinus concerning for cavernous sinus thrombosis.]',
      i:'[Right] subperiosteal orbital abscess secondary to [ethmoid] sinusitis. [Cavernous sinus thrombosis cannot be excluded / Cavernous sinus thrombosis identified — urgent neurosurgery and ophthalmology consultation.]'
    }
  },
  {
    slug:'lefort-fractures', title:'Le Fort Fractures (I, II, III)', region:'headneck', system:'Midface',
    modality:'CT maxillofacial', sev:'urgent', emoji:'💢',
    blurb:'High-energy midface fractures all traverse the pterygoid plates; classify to guide airway and surgical management.',
    tags:['Pterygoid plate','Midface mobility','Craniofacial dissociation'], rp:'le-fort-fractures',
    sheet:{
      find:'All Le Fort fractures involve the <b>pterygoid plates</b> — their fracture is the key CT finding. <b>Le Fort I</b>: horizontal line through the maxillary sinus walls and nasal septum base (floating palate). <b>Le Fort II</b>: pyramidal — crosses the nasal bridge, medial orbital wall/floor, zygomaticomaxillary suture, pterygoids (floating maxilla). <b>Le Fort III</b>: craniofacial dissociation — fractures extend through zygomatic arches, lateral orbital walls, nasofrontal suture, pterygoids (floating face). Fractures are often asymmetric and mixed-level.',
      measure:'Classify level on each side independently. Report any associated intracranial injury, CSF leak (pneumocephalus, fluid in cribriform region), and vascular injury.',
      pitfall:'Mixed Le Fort patterns are the rule — call each side separately. Do not miss an associated mandible fracture, C-spine injury, or carotid/vertebral dissection.',
      pearl:'<b>Le Fort II and III both violate the orbit</b>; Le Fort III has a zygomatic arch fracture that Le Fort II does not.',
      call:'Le Fort III with airway compromise or craniofacial instability — <b>immediate airway management and maxillofacial surgery</b>.',
      f:'Bilateral [Le Fort II] pattern fractures: pterygoid plate fractures bilaterally with fractures through [nasal bones, medial orbital walls/floors, and zygomaticomaxillary sutures]. [Pneumocephalus. / No intracranial hemorrhage.] [C-spine cleared.]',
      i:'[Le Fort II] midface fractures bilaterally. Maxillofacial surgery consultation recommended. [Airway at risk — ENT/anesthesia alert.]'
    }
  },
  {
    slug:'zygomaticomaxillary-complex-fracture', title:'Zygomaticomaxillary Complex (Tripod) Fracture', region:'headneck', system:'Midface',
    modality:'CT maxillofacial', sev:'urgent', emoji:'🔺',
    blurb:'Three-point disruption of the zygoma from the skull; zygomatic arch, orbital floor, and zygomaticomaxillary suture all break.',
    tags:['Tripod ZMC','Zygomatic arch','Orbital floor'], rp:'zygomaticomaxillary-complex-fracture',
    sheet:{
      find:'<b>Four fracture lines</b> (hence ZMC, not "tripod"): <b>zygomatic arch, frontozygomatic suture, zygomaticomaxillary suture, and orbital floor</b>. The zygoma rotates or displaces as a unit. Look for lateral orbital rim discontinuity, orbital floor disruption, and opacified maxillary sinus (hemosinus).',
      measure:'Assess degree of rotation/displacement of the zygomatic body on coronal and axial CT. Identify infraorbital nerve canal involvement (numbness).',
      pitfall:'An isolated zygomatic arch fracture (V-shape on axial) is not a ZMC fracture — check the other three components. Also look for inferior rectus entrapment within the orbital floor component.',
      pearl:'The infraorbital foramen sits immediately inferior to the fracture line; infraorbital nerve injury causes cheek numbness — document canal disruption.',
      f:'[Right] ZMC fracture with fractures through the [zygomatic arch, frontozygomatic suture, zygomaticomaxillary suture, and orbital floor]. [Inferolateral rotation of the zygomatic body.] [Right] maxillary sinus hemosinus. [Inferior rectus not entrapped.]',
      i:'[Right] zygomaticomaxillary complex (ZMC) fracture with [mild inferior displacement]. Maxillofacial surgery consultation.'
    }
  },
  {
    slug:'naso-orbito-ethmoid-fracture', title:'Naso-orbito-ethmoid (NOE) Fracture', region:'headneck', system:'Midface',
    modality:'CT maxillofacial', sev:'urgent', emoji:'👃',
    blurb:'Nasion-centered comminution with medial canthal tendon avulsion and CSF rhinorrhea risk.',
    tags:['NOE','Medial canthus','CSF rhinorrhea'], rp:'naso-orbito-ethmoid-fracture',
    sheet:{
      find:'Comminution of the <b>nasal bones, medial orbital walls (lamina papyracea), and ethmoid complex</b>. Key feature: fracture of the <b>anterior lacrimal crest</b> where the medial canthal tendon inserts (Markowitz classification). Look for cribriform plate fracture and pneumocephalus indicating CSF leak.',
      measure:'Markowitz type: I = single central fragment; II = comminuted central fragment; III = comminuted to soft tissue. Types II/III require transnasal wiring.',
      pitfall:'Soft-tissue swelling masks the telecanthus (widened intercanthal distance >35 mm) on clinical exam. CT shows the bony detail — look for lacrimal sac fossa disruption.',
      pearl:'The <b>bowstring test</b> (clinical) with imaging correlate — fracture fragment with medial canthal tendon attachment predicts post-op telecanthus if not addressed.',
      call:'Confirmed cribriform fracture with pneumocephalus — <b>neurosurgery for CSF fistula</b>.',
      f:'[Type II] naso-orbito-ethmoid fracture with comminution of the [nasal bones, bilateral medial orbital walls, and ethmoid sinus]. [Fracture extends to the right anterior lacrimal crest.] [Pneumocephalus / No cribriform plate fracture identified.] [Bilateral orbital emphysema.]',
      i:'[Markowitz type II] NOE fracture. [CSF rhinorrhea risk; neurosurgery and maxillofacial surgery consultation recommended.]'
    }
  },
  {
    slug:'mandible-fracture', title:'Mandible Fracture', region:'headneck', system:'Midface',
    modality:'CT maxillofacial', sev:'urgent', emoji:'🦷',
    blurb:'The mandible is a ring — a single fracture is uncommon; always find the second fracture.',
    tags:['Ring bone','Bilateral condyles','Symphysis'], rp:'mandible-fracture',
    sheet:{
      find:'Systematically review all mandible segments on axial and coronal CT: symphysis, parasymphysis, body, angle, ramus, condyle, and coronoid. The mandible acts as a ring — <b>a unilateral fracture at the angle/body is almost always accompanied by a contralateral condylar fracture</b>.',
      measure:'Document displacement (mm), angulation, dentition involvement, and whether the fracture is in the condyle (subcondylar, intracapsular). Condylar fractures may need CBCT for detail.',
      pitfall:'Condylar/subcondylar fractures are subtle — thin coronal reconstructions and dedicated reformats are essential. Intracapsular condylar fractures are often treated conservatively; subcondylar with dislocation may need open reduction.',
      pearl:'An <b>angle fracture impacted by a third molar</b> — the "third molar tooth in the fracture line" is a classic finding that increases infection risk.',
      f:'[Left] mandibular angle fracture, [minimally displaced], with [third molar tooth within the fracture line]. [Contralateral right] subcondylar fracture, [undisplaced]. [Dentition intact / Loss of dentition at (site).]',
      i:'[Left] mandibular angle and [right] subcondylar fractures (ring fracture pattern). Oral maxillofacial surgery consultation.'
    }
  },
  {
    slug:'nasal-bone-fracture', title:'Nasal Bone Fracture', region:'headneck', system:'Midface',
    modality:'CT maxillofacial', sev:'routine', emoji:'👃',
    blurb:'Common isolated fracture; the key call is septal hematoma on exam and associated NOE injury on CT.',
    tags:['Nasal bone','Septal deviation','NOE overlap'], rp:'nasal-fracture',
    sheet:{
      find:'Cortical discontinuity of the nasal bones on axial and coronal CT. Assess septal deviation. <b>Look for associated NOE fracture</b> — if the fracture extends to the medial orbital wall or lacrimal crest, it is an NOE fracture, not isolated nasal.',
      pitfall:'The <b>nasociliary groove and nasomaxillary suture</b> are commonly mistaken for fractures on axial CT — compare bilaterally and look for associated soft-tissue swelling confirming the injury site.',
      pearl:'Septal hematoma is a clinical diagnosis; CT may show septal thickening or bowing but a normal CT does not exclude it — always recommend ENT nasal speculum exam.',
      f:'[Bilateral] nasal bone fractures with [mild lateral displacement]. Nasal septum [deviated to the right / midline]. [No extension to the medial orbital walls (no NOE pattern).]',
      i:'[Bilateral] nasal bone fractures, [no associated NOE fracture]. Clinical evaluation for septal hematoma recommended.'
    }
  },
  {
    slug:'frontal-sinus-fracture', title:'Frontal Sinus Fracture', region:'headneck', system:'Midface',
    modality:'CT maxillofacial', sev:'urgent', emoji:'🧠',
    blurb:'Anterior table fractures are cosmetic; posterior table fractures risk CSF fistula and mucocele.',
    tags:['Anterior vs posterior table','Nasofrontal duct','Mucocele risk'], rp:'frontal-sinus-fracture',
    sheet:{
      find:'Identify fracture of the <b>anterior table</b> (outer cortex of the frontal bone) vs <b>posterior table</b> (inner wall shared with the anterior cranial fossa). Look for <b>nasofrontal duct obstruction</b> (bony fragment or mucosa injury near the infundibulum — medial floor of the frontal sinus) and intracranial air (pneumocephalus).',
      measure:'Degree of anterior table displacement (>1 table width = significant for cosmesis). Posterior table fracture with any displacement warrants neurosurgical evaluation.',
      pitfall:'Isolated anterior table with intact nasofrontal duct → mostly cosmetic. Posterior table fracture with dural laceration → CSF rhinorrhea, meningitis, mucocele. Do not miss pneumocephalus on scout/topogram.',
      pearl:'<b>Nasofrontal duct injury</b> (medial sinus floor fracture) mandates sinus obliteration or cranialization — mention it explicitly.',
      call:'Posterior table fracture with pneumocephalus or suspected dural laceration — <b>neurosurgery and ENT consultation</b>.',
      f:'[Anterior and posterior table] frontal sinus fractures with [X mm] anterior table displacement. [Pneumocephalus.] [Fracture fragment at the left nasofrontal duct suggesting ductal obstruction.] [No intracranial hemorrhage.]',
      i:'[Posterior table] frontal sinus fracture with [nasofrontal duct involvement] and pneumocephalus. Neurosurgery and craniofacial/ENT consultation recommended.'
    }
  },
  {
    slug:'complicated-sinusitis', title:'Complicated Sinusitis / Pott Puffy Tumour', region:'headneck', system:'Sinuses',
    modality:'CT neck', sev:'killer', emoji:'🧨',
    blurb:'Frontal sinusitis with osteomyelitis and subperiosteal forehead abscess, or intracranial extension — this is a neurosurgical emergency.',
    tags:['Pott puffy','Epidural empyema','Osteomyelitis'], rp:'potts-puffy-tumour',
    sheet:{
      find:'<b>Frontal sinusitis</b> with bony erosion/dehiscence of the anterior or posterior table. <b>Pott puffy tumour</b>: subperiosteal forehead abscess (rim-enhancing fluid collection over the frontal bone) with underlying osteomyelitis (lytic/permeative change). Check for intracranial complications: <b>epidural empyema, subdural empyema, cerebritis, or brain abscess</b> along the inner table.',
      measure:'Measure abscess dimensions. Document osteomyelitis extent and any intradural extension.',
      pitfall:'Soft-tissue swelling alone can obscure a small subperiosteal collection — use bone windows and post-contrast. Do not dismiss the forehead fluctuance as trauma alone in a teenager with sinusitis.',
      pearl:'<b>Epidural empyema</b> along the posterior table is the most immediately dangerous complication; subdural empyema carries higher mortality. Always get post-contrast brain CT/MRI.',
      call:'Any intracranial extension or epidural/subdural empyema — <b>emergency neurosurgery and ENT</b>.',
      f:'[Frontal] sinusitis with bony erosion of the [anterior/posterior] table and [subperiosteal forehead abscess measuring X × Y cm (Pott puffy tumour)]. [Epidural collection of X mm along the inner table of the frontal bone consistent with empyema.] [No cerebral abscess.]',
      i:'Complicated frontal sinusitis: Pott puffy tumour with [epidural empyema]. Urgent neurosurgery and ENT consultation.'
    }
  },
  {
    slug:'coalescent-mastoiditis', title:'Coalescent Mastoiditis', region:'headneck', system:'Temporal bone',
    modality:'CT neck', sev:'urgent', emoji:'👂',
    blurb:'Acute otitis media with bony trabecular destruction of the mastoid; abscess forms when coalescence extends beyond the cortex.',
    tags:['Mastoid coalescence','Bezold abscess','Intracranial extension'], rp:'acute-mastoiditis',
    sheet:{
      find:'<b>Mastoid opacification with destruction of the bony trabeculae</b> (coalescence) — the septations between mastoid air cells are erased. Look for cortical dehiscence (lateral, medial, or posterior cortex) and associated collections: <b>subperiosteal abscess</b> (post-auricular), <b>Bezold abscess</b> (along the sternocleidomastoid via the mastoid tip), or intracranial extension (epidural empyema, sigmoid sinus thrombophlebitis).',
      measure:'Measure any subperiosteal collection. Document sigmoid sinus filling defect (thrombosis).',
      pitfall:'Simple acute otitis media with effusion can opacify the mastoid without coalescence — coalescence requires loss of bony trabecular definition, not just fluid. Do not confuse chronic changes (sclerosis, remodeling) with acute coalescence.',
      pearl:'<b>Sigmoid sinus thrombophlebitis</b> complicates posterior cortex erosion — check the sigmoid sinus for a filling defect on post-contrast; anticoagulation is controversial but needed.',
      call:'Intracranial extension (empyema, thrombophlebitis) or Bezold abscess — <b>urgent ENT and neurosurgery</b>.',
      f:'[Right] coalescent mastoiditis with destruction of mastoid air cell trabeculae. [Subperiosteal abscess measuring X × Y cm in the post-auricular region.] [Dehiscence of the lateral/posterior cortex.] [Filling defect within the sigmoid sinus consistent with thrombophlebitis. / No sigmoid sinus thrombosis.]',
      i:'[Right] coalescent mastoiditis with [subperiosteal abscess and sigmoid sinus thrombophlebitis]. Urgent ENT consultation and neurosurgery notification.'
    }
  },
  {
    slug:'malignant-otitis-externa', title:'Malignant (Necrotizing) Otitis Externa', region:'headneck', system:'Temporal bone',
    modality:'CT neck', sev:'urgent', emoji:'💀',
    blurb:'Pseudomonas osteomyelitis of the skull base in diabetic or immunocompromised patients; skull base erosion with cranial nerve palsies.',
    tags:['Skull base osteomyelitis','Pseudomonas','Diabetic/immunocompromised'], rp:'malignant-otitis-externa',
    sheet:{
      find:'<b>Skull base osteomyelitis</b>: lytic/permeative destruction of the clivus, temporal bone, and stylomastoid foramen region on bone windows. Soft-tissue thickening/phlegmon in the external auditory canal extending to the infratemporal fossa and parapharyngeal space. Cranial nerve involvement: facial nerve at stylomastoid foramen (CN VII), jugular foramen (CN IX–XI), or hypoglossal canal (CN XII).',
      measure:'Map the extent of skull base involvement. Compare with prior imaging if available. MRI is superior for marrow involvement — CT under-stages medullary disease.',
      pitfall:'Early disease may show minimal bony change — if the external canal has granulation tissue and the patient is diabetic, do not dismiss normal or near-normal CT. Hybrid PET-CT or MRI is more sensitive.',
      pearl:'<b>Gallium-67 or PET-CT</b> is used for treatment response monitoring — mention in the impression if diagnosis is confirmed.',
      call:'Cranial nerve palsy with skull base osteomyelitis pattern — <b>urgent ENT, infectious disease, and neurosurgery</b>.',
      f:'Soft-tissue thickening of the [right] external auditory canal with permeative destruction of the [temporal bone skull base / clivus], extending to the [infratemporal fossa]. [Enhancement along the facial nerve at the stylomastoid foramen.] Findings consistent with necrotizing otitis externa with skull base osteomyelitis.',
      i:'Malignant (necrotizing) otitis externa with [right-sided] skull base osteomyelitis. [Facial nerve involvement at stylomastoid foramen.] Urgent ENT and infectious disease consultation.'
    }
  },
  {
    slug:'peritonsillar-abscess', title:'Peritonsillar Abscess', region:'headneck', system:'Deep neck',
    modality:'CT neck', sev:'urgent', emoji:'🫁',
    blurb:'Rim-enhancing fluid collection in the peritonsillar space displacing the tonsil and uvula; watch for parapharyngeal extension.',
    tags:['Rim-enhancing','Uvula deviation','Parapharyngeal extension'], rp:'peritonsillar-abscess',
    sheet:{
      find:'<b>Rim-enhancing hypodense collection</b> in the peritonsillar space (between the tonsil and the superior pharyngeal constrictor). The <b>tonsil and uvula are displaced</b> contralaterally. Distinguish from peritonsillar cellulitis (no discrete fluid collection, homogeneous enhancement). Document extension to the <b>parapharyngeal space</b>.',
      measure:'Measure collection dimensions (cc³ if possible). Document airway caliber at the level of the oropharynx.',
      pitfall:'<b>Cellulitis vs abscess</b>: a collection needs to be fluid density (0–20 HU) with rim enhancement. A phlegmon is intermediate density without a discrete rim. Clinical aspiration may be needed if CT is equivocal.',
      pearl:'Peritonsillar abscess can extend to the parapharyngeal space — once there, retropharyngeal and danger-space spread becomes possible; always trace the full deep neck.',
      call:'Airway compromise or parapharyngeal extension — <b>ENT and airway management immediately</b>.',
      f:'[Right] peritonsillar abscess measuring [X × Y × Z] cm with rim enhancement, contralateral uvula deviation. [Extension into the right parapharyngeal space.] [Airway diameter at the oropharynx measures X mm; no critical narrowing.]',
      i:'[Right] peritonsillar abscess. [Parapharyngeal extension present.] ENT consultation for aspiration or drainage.'
    }
  },
  {
    slug:'retropharyngeal-abscess', title:'Retropharyngeal Abscess', region:'headneck', system:'Deep neck',
    modality:'CT neck', sev:'killer', emoji:'🚨',
    blurb:'Pus in the retropharyngeal space is one fascial plane from the danger space and mediastinum — this kills fast.',
    tags:['Retropharyngeal space','Danger space','Descending mediastinitis'], rp:'retropharyngeal-abscess',
    sheet:{
      find:'<b>Rim-enhancing fluid collection in the retropharyngeal space</b> (posterior to the posterior pharyngeal wall, anterior to the prevertebral fascia) with anterior displacement of the airway. Look for <b>gas within the collection</b> (highly specific for abscess over edema). Trace inferiorly for mediastinal extension (danger space = posterior mediastinum).',
      measure:'Measure retropharyngeal space width: >7 mm at C2 or >22 mm at C6 in adults is abnormal. Measure the collection. Document superior mediastinal extension if present.',
      pitfall:'<b>Retropharyngeal edema</b> (e.g., from intubation, C-spine injury) can widen the retropharyngeal space without abscess — no rim enhancement, no gas, clinical context. The space is artifactually widened if the film is taken in expiration in children.',
      pearl:'<b>Danger space</b> (between the alar and prevertebral fascia) runs from the skull base to the diaphragm — mediastinitis from a neck abscess has >40% mortality. Always extend the scan to the carina.',
      call:'Retropharyngeal abscess with mediastinal extension — <b>emergent ENT, thoracic surgery, and airway management</b>.',
      f:'Rim-enhancing fluid collection in the retropharyngeal space measuring [X × Y × Z] cm with [gas foci / no gas]. Airway displaced anteriorly; oropharyngeal/hypopharyngeal airway measures [X mm]. [Extension to the superior mediastinum / No inferior extension below C7.] [Prevertebral fascia intact.]',
      i:'Retropharyngeal abscess. [Extension to the danger space and superior mediastinum consistent with descending necrotizing mediastinitis — emergent surgical consultation.] Airway at risk.'
    }
  },
  {
    slug:'ludwig-angina', title:'Ludwig Angina', region:'headneck', system:'Deep neck',
    modality:'CT neck', sev:'killer', emoji:'🔥',
    blurb:'Bilateral submandibular and sublingual space infection with woody induration and supraglottic airway displacement.',
    tags:['Submandibular','Floor of mouth','Airway displacement'], rp:'ludwig-angina',
    sheet:{
      find:'<b>Bilateral cellulitis/phlegmon or frank abscess</b> of the submandibular and sublingual spaces with lifting and posterior displacement of the tongue. Stranding throughout the floor of mouth fat. <b>Gas within the soft tissues</b> is highly concerning. Trace inferiorly — involvement of the parapharyngeal, retropharyngeal, and mediastinal spaces.',
      measure:'Document presence of discrete abscess (rim-enhancing fluid) vs phlegmon. Measure airway diameter at the supraglottis (epiglottis level) — any narrowing below 5 mm is critical.',
      pitfall:'Airway assessment by CT alone is insufficient — the airway is a clinical exam and direct visualization issue. Ludwig angina can cause rapid complete obstruction; CT should not delay airway management if the patient is deteriorating.',
      pearl:'Dental origin in >80%: look for a periapical abscess or mandible fracture at the tooth root. The lingual space communicates with the sublingual space above the mylohyoid; the submandibular space is below.',
      call:'Floor of mouth elevation with airway compromise — <b>emergency airway (awake fiberoptic or surgical airway) and ENT/oral surgery</b>.',
      f:'Bilateral submandibular and sublingual space [phlegmon / abscess] with floor-of-mouth elevation and posterior tongue displacement. [Gas within the sublingual space.] Airway at the supraglottis measures [X mm]. [Extension to the parapharyngeal space / retropharyngeal space / mediastinum.] [Periapical abscess at [tooth] as likely source.]',
      i:'Ludwig angina: bilateral submandibular and sublingual space [infection / abscess] with floor-of-mouth displacement and airway compromise. [Mediastinal extension — emergent surgical and airway consultation.]'
    }
  },
  {
    slug:'epiglottitis', title:'Epiglottitis / Supraglottitis', region:'headneck', system:'Airway',
    modality:'CT neck', sev:'killer', emoji:'🌡️',
    blurb:'Swollen epiglottis and aryepiglottic folds on lateral neck radiograph; CT confirms and maps spread but must not delay airway.',
    tags:['Thumbprint sign','Aryepiglottic folds','Adult Hib'], rp:'epiglottitis',
    sheet:{
      find:'<b>Thickened epiglottis (>8 mm)</b> and aryepiglottic folds on lateral neck soft tissue or CT sagittal reformats — the <b>"thumbprint sign"</b>. Post-contrast CT shows mucosal enhancement, periglottic edema, and occasionally an epiglottic abscess (rim-enhancing fluid within the epiglottis). Look for extension to the paraglottic and pre-epiglottic spaces.',
      measure:'Normal epiglottis <5 mm on lateral neck. >8 mm is diagnostic. Measure subglottic airway diameter.',
      pitfall:'Adults, not children, are now the predominant group (post-Hib vaccination). CT should be obtained only if the diagnosis is uncertain and the patient is stable — direct laryngoscopy risks sudden airway loss and should be performed in the OR.',
      pearl:'<b>Supraglottitis</b> = involvement of the aryepiglottic folds and arytenoids, not just the epiglottis — this is actually more common in adults and carries higher risk of complete obstruction.',
      call:'Epiglottic swelling with stridor or drooling — <b>airway now; call anesthesia and ENT simultaneously</b>.',
      f:'Marked thickening of the epiglottis measuring [X mm] with swelling of the aryepiglottic folds and arytenoids, consistent with supraglottitis. [Epiglottic abscess: rim-enhancing fluid collection within the epiglottis measuring X cm.] Hypopharyngeal airway narrowed to [X mm].',
      i:'CT findings of supraglottitis with marked epiglottic and aryepiglottic thickening. [Epiglottic abscess.] Airway at immediate risk — urgent ENT and anesthesia.'
    }
  },
  {
    slug:'deep-neck-space-infection', title:'Deep Neck Space Infection with Mediastinal Risk', region:'headneck', system:'Deep neck',
    modality:'CT neck', sev:'killer', emoji:'⚠️',
    blurb:'Infection in the danger space between alar and prevertebral fascia can track from skull base to diaphragm without barrier.',
    tags:['Danger space','Descending mediastinitis','Fascial spaces'], rp:'deep-neck-infection',
    sheet:{
      find:'Identify which deep neck space is involved: <b>submandibular, parapharyngeal, retropharyngeal, danger space, or prevertebral</b>. The danger space (between alar and prevertebral layers of deep cervical fascia) connects directly to the posterior mediastinum — look for <b>air/fluid extending below C7 into the mediastinum</b>. Document gas, airway deviation, jugular vein thrombosis, and vascular erosion.',
      measure:'Scan from skull base to the carina. Measure collection dimensions in all spaces involved.',
      pitfall:'Infections can track between fascial planes without obvious CT abscess; do not dismiss fat stranding — if it crosses the danger space, the infection has a path to the mediastinum.',
      pearl:'<b>Lemierre syndrome</b>: internal jugular vein thrombophlebitis from Fusobacterium; septic emboli to the lungs. Look for IJV filling defect and lung nodules/cavities.',
      call:'Mediastinal extension or IJV thrombosis — <b>emergent thoracic surgery, ENT, and ICU</b>.',
      f:'[Parapharyngeal/retropharyngeal] space infection with fluid and gas tracking inferiorly through the danger space to the [superior / posterior] mediastinum. [Internal jugular vein thrombosis (Lemierre syndrome).] [Lung nodules with early cavitation.] Airway narrowing at [level].',
      i:'Descending necrotizing mediastinitis from deep neck space infection. [Lemierre syndrome with IJV thrombophlebitis.] Emergent ENT, thoracic surgery, and ICU consultation.'
    }
  },
  {
    slug:'sialolithiasis-sialadenitis', title:'Sialolithiasis and Sialadenitis', region:'headneck', system:'Salivary glands',
    modality:'CT neck', sev:'urgent', emoji:'🪨',
    blurb:'Calcified ductal stone with upstream gland enlargement and stranding; abscess formation warrants urgent drainage.',
    tags:['Wharton duct','Parotid duct','Gland abscess'], rp:'sialolithiasis',
    sheet:{
      find:'<b>Hyperdense stone within the duct</b> (submandibular = Wharton duct, floor of mouth; parotid = Stensen duct, buccal region) on NCCT or soft-tissue windows. Upstream <b>gland enlargement, ductal dilation, and periglandular fat stranding</b>. With abscess: rim-enhancing fluid collection within the gland.',
      measure:'Stone size and location within the duct (proximal/mid/distal). Distal Wharton duct stones may be palpable and amenable to intraoral stone removal.',
      pitfall:'Phleboliths in the parotid space can mimic parotid duct stones — phleboliths have a radiolucent center and are not in a duct. Confirm the stone is within the duct lumen on multiple planes.',
      pearl:'<b>Submandibular gland</b> accounts for ~80–85% of salivary duct stones because Wharton duct is long, runs uphill, and the saliva is more alkaline and mucous.',
      f:'[Submandibular] gland enlargement with periglandular fat stranding and a [X mm] calcified stone within [Wharton\'s duct at the (proximal/mid/distal) duct]. [Ductal dilation proximal to the stone.] [Rim-enhancing abscess within the gland measuring X × Y cm / No discrete abscess.]',
      i:'[Submandibular] sialolithiasis with acute sialadenitis. [Gland abscess — ENT consultation for drainage.] [No abscess — stone removal and antibiotics.]'
    }
  },
  {
    slug:'carotid-artery-dissection', title:'Internal Carotid Artery Dissection', region:'headneck', system:'Carotid space',
    modality:'CTA', sev:'killer', emoji:'🧠',
    blurb:'Intramural hematoma narrows the ICA lumen; stroke risk is highest in the first two weeks — anticoagulate or antiplatelet.',
    tags:['Intramural hematoma','String sign','Pseudo-aneurysm'], rp:'carotid-artery-dissection',
    sheet:{
      find:'<b>Eccentric or concentric intramural hematoma</b> (crescentic high density on NCCT, T1 fat-sat on MRI) causing <b>luminal narrowing (string sign)</b> or complete occlusion of the ICA. The true lumen is reduced; the vessel outer diameter is often enlarged. Look for <b>pseudoaneurysm</b> (focal outpouching of the false lumen). Dissection plane typically begins 2–3 cm above the carotid bifurcation.',
      measure:'Report degree of stenosis (NASCET), length of dissection, and presence of pseudoaneurysm. Document intracranial extension.',
      pitfall:'Flow-related artifact can mimic intramural hematoma — dedicated neck CTA with thin slices and NCCT neck (for the T1-equivalent mural bright signal) is essential. Do not dismiss a subtle string sign in a young patient with neck pain and Horner syndrome.',
      pearl:'<b>Horner syndrome</b> (ptosis, miosis, anhidrosis) in the setting of neck pain or trauma = ICA dissection until proven otherwise. The sympathetic fibers run along the ICA.',
      call:'ICA dissection with acute stroke or complete occlusion — <b>stroke neurology immediately; thrombolysis or thrombectomy decision window</b>.',
      f:'Eccentric intramural hematoma within the [right] internal carotid artery [from X cm above the bifurcation to the skull base], causing [X%] luminal narrowing (string sign). [Focal pseudoaneurysm at (level).] [No intracranial extension. / Thrombotic occlusion extending to the (supraclinoid ICA).]',
      i:'[Right] internal carotid artery dissection with [high-grade stenosis / pseudoaneurysm]. Stroke neurology consultation. Anticoagulation or antiplatelet therapy per stroke team.'
    }
  },
  {
    slug:'vertebral-artery-dissection', title:'Vertebral Artery Dissection', region:'headneck', system:'Carotid space',
    modality:'CTA', sev:'killer', emoji:'🔄',
    blurb:'Dissection at V3 (C2 loop) or V4 (intradural) after chiropractic or hyperextension; presents as lateral medullary stroke.',
    tags:['V3/V4 segment','Lateral medullary','PICA territory'], rp:'vertebral-artery-dissection',
    sheet:{
      find:'Intramural hematoma causing luminal irregularity or tapering of the <b>vertebral artery, most commonly at V3 (C1–C2 loop) or V4 (intradural, near PICA origin)</b>. CTA neck and head: eccentric filling defect, irregular caliber, occlusion, or pseudoaneurysm. NCCT may show a hyperdense intramural crescent. Check for associated posterior fossa ischemia (PICA territory cerebellar infarct).',
      measure:'Identify dominant vs non-dominant VA. V4 dissection with PICA involvement is highest risk for posterior fossa infarct.',
      pitfall:'Congenital hypoplasia of one VA is common — do not call it dissection. Dissection has a focal, typically short-segment caliber change with an intramural hematoma and is not smoothly tapered from origin. Bilateral VA dissection can cause basilar insufficiency.',
      pearl:'<b>Bow hunter syndrome</b>: dynamic occlusion of the VA at the C1–C2 level during rotation — present with positional vertigo; CT angiography in neutral and rotated positions.',
      call:'VA dissection with basilar or PICA territory infarct — <b>stroke neurology immediately</b>.',
      f:'Intramural hematoma and luminal irregularity of the [left] vertebral artery at the [V3 / V4] segment, consistent with dissection. [Pseudoaneurysm at (level).] [Posterior fossa PICA territory cerebellar infarct on DWI / No acute posterior fossa ischemia on CT.]',
      i:'[Left] vertebral artery dissection at [V3]. [Associated PICA territory cerebellar infarct.] Stroke neurology consultation urgently.'
    }
  },
  {
    slug:'penetrating-neck-injury', title:'Penetrating Neck Injury', region:'headneck', system:'Neck zones',
    modality:'CTA', sev:'killer', emoji:'🔪',
    blurb:'Zone-based triage is replaced by CTA-first protocols; hard signs (expanding hematoma, hemoptysis) go to OR without CT.',
    tags:['Zone I-II-III','Hard signs','No-zone protocol'], rp:'penetrating-neck-trauma',
    sheet:{
      find:'<b>CTA of neck and chest</b> (for Zone I): trace all major vessels (carotid arteries, vertebral arteries, subclavian arteries, jugular veins) for active extravasation, pseudoaneurysm, intimal flap, occlusion, or AV fistula. Evaluate the airway for tracheal/laryngeal injury, and the esophagus for air tracking along the fascial planes. Look for hematoma, hemothorax, and pneumothorax.',
      measure:'<b>Zone I</b>: clavicles to cricoid. <b>Zone II</b>: cricoid to angle of the mandible. <b>Zone III</b>: angle of mandible to skull base. Document which zone(s) are involved.',
      pitfall:'Hard signs (expanding hematoma, massive hemorrhage, hemoptysis, airway compromise, absent pulse) = OR without CT. Soft signs = CTA. Do not delay operative management for imaging in an unstable patient.',
      pearl:'<b>Esophageal injury</b> is the most commonly missed — CT sensitivity for esophageal injury is low; supplement with esophagoscopy or contrast swallow if esophageal zone II/III injury is possible.',
      call:'Active arterial extravasation, carotid occlusion, or airway compromise — <b>immediate surgical and vascular surgery alert</b>.',
      f:'Stab/gunshot wound to Zone [II] of the neck. [Pseudoaneurysm of the right common carotid artery at (level).] [Active extravasation.] [Tracheal wall irregularity at (level) suggesting laceration.] [Subcutaneous emphysema tracking along fascial planes. / No vascular injury identified.]',
      i:'Penetrating Zone [II] neck injury with [right CCA pseudoaneurysm]. Vascular surgery and ENT consultation. [Esophagoscopy recommended to exclude esophageal injury.]'
    }
  },
  {
    slug:'laryngeal-fracture', title:'Laryngeal Fracture', region:'headneck', system:'Airway',
    modality:'CT neck', sev:'killer', emoji:'🗣️',
    blurb:'Thyroid or cricoid cartilage fracture after blunt neck trauma; edema and hematoma cause rapid airway loss.',
    tags:['Thyroid cartilage','Cricoid ring','Surgical airway'], rp:'laryngeal-fracture',
    sheet:{
      find:'<b>Fracture of the thyroid or cricoid cartilage</b> on bone windows (calcified cartilage fractures better; non-calcified may appear only as soft-tissue asymmetry). Look for <b>laryngeal hematoma</b> (hyperdense blood in the paraglottic/pre-epiglottic space), soft-tissue air (pneumolarynx, surgical emphysema), mucosal disruption, and arytenoid dislocation.',
      measure:'Assess degree of airway narrowing at the glottis and subglottis. Document displacement of cartilage fragments. Cricoid fracture is particularly dangerous — it is a complete ring; fracture disrupts the only rigid structural airway support.',
      pitfall:'Young patients have non-calcified cartilage — the fracture may be invisible on CT, visible only as mucosal irregularity or edema. The clinical exam (voice change, subcutaneous emphysema, dysphagia) drives the decision.',
      pearl:'<b>Secure the airway before imaging</b> if the patient has stridor, voice change, or subcutaneous emphysema. Orotracheal intubation can complete a partial airway transection — surgical airway (cricothyrotomy vs tracheostomy) may be safer.',
      call:'Laryngeal fracture with airway compromise — <b>ENT and anesthesia for surgical airway now</b>.',
      f:'Fracture of the [thyroid / cricoid] cartilage with [displacement / minimal displacement]. [Laryngeal hematoma in the paraglottic space.] [Subcutaneous cervical emphysema.] Airway at [glottis / subglottis] measures [X mm]. [Arytenoid dislocation on the right.]',
      i:'[Thyroid/cricoid] cartilage fracture with laryngeal hematoma and [X mm] airway narrowing. Emergent ENT consultation for airway management.'
    }
  },
  {
    slug:'airway-hemorrhage-compression', title:'Post-tonsillectomy Hemorrhage and Thyroid/Neck Hematoma Compressing the Airway', region:'headneck', system:'Airway',
    modality:'CT neck', sev:'killer', emoji:'🩺',
    blurb:'Expanding neck hematoma compresses the trachea and venous drainage; even a non-pulsatile hematoma can kill the airway within minutes.',
    tags:['Hematoma expansion','Tracheal deviation','Bedside decompression'], rp:'post-tonsillectomy-haemorrhage',
    sheet:{
      find:'<b>Post-tonsillectomy hemorrhage</b>: active contrast extravasation or hematoma in the tonsillar fossa, posterior oropharynx, or nasopharynx. <b>Thyroid/neck hematoma</b>: hyperdense collection within or around the thyroid gland (post-op, spontaneous, or traumatic) causing tracheal displacement and compression. Document degree of airway narrowing and any active extravasation.',
      measure:'Measure tracheal diameter at the narrowest point. Any tracheal lumen <5 mm in an adult is critical. Document hematoma volume and extent (prelaryngeal, paraesophageal, retrosternal spread).',
      pitfall:'Post-tonsillectomy bleeding can be occult — blood in the stomach (swallowed), hematoma behind the soft palate, or active ooze without a focal collection. Always look at the oropharynx and estimate blood pooling.',
      pearl:'<b>Bedside hematoma decompression</b> (opening the neck wound) is a life-saving maneuver when the airway is failing — mention this in the call to the clinical team. Do not wait for return to the OR.',
      call:'Airway narrowing from hematoma — <b>emergent surgery or bedside hematoma decompression</b>.',
      f:'[Post-thyroidectomy] hematoma within the [anterior neck / thyroid bed] measuring [X × Y × Z] cm with [tracheal displacement to the right and luminal narrowing to X mm]. [Active contrast extravasation.] [No active extravasation.]',
      i:'Expanding [anterior neck / thyroid bed] hematoma with tracheal compression [to X mm]. Emergent surgical decompression required. [Active arterial bleeding at (site).]'
    }
  }
]);
