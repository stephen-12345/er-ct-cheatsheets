/* Region: MSK and Trauma — fractures, joints, soft-tissue infection. */
ERCT.add([
  {
    slug:'pelvic-ring-fracture-apc', title:'Pelvic Ring Fracture — APC', region:'msk', system:'Pelvis',
    modality:'CT', sev:'killer', emoji:'🦴',
    blurb:'Anterior-posterior compression opens the pelvic ring — APC III ruptures all ligaments and tears pelvic vessels.',
    tags:['Pubic diastasis','Open book','Ligament disruption'], rp:'pelvic-ring-fracture',
    sheet:{
      find:'Symphyseal diastasis and anterior sacroiliac joint widening on axial and coronal CT. Grade: <b>APC I</b> — symphysis &lt;2.5 cm; <b>APC II</b> — anterior SI widening, posterior ligaments intact; <b>APC III</b> — complete SI disruption with posterior widening.',
      measure:'Pubic symphysis &gt;2.5 cm = unstable. Posterior SI joint gap &gt;5 mm = posterior ligamentous failure.',
      pitfall:'Overlying bowel gas on scout can mask diastasis — axial CT is mandatory for any pelvic trauma.',
      pearl:'APC III has ~30% associated vascular injury; CTA pelvis or IR angioembolization is often next.',
      call:'APC II–III patterns carry major hemorrhage risk — <b>communicate immediately</b> to trauma surgery.',
      f:'Pubic symphysis diastasis of [X] cm with [anterior / bilateral] sacroiliac joint widening. [No posterior SI gap / Posterior SI joint gap of X mm.] [No pelvic hematoma / Large pelvic hematoma with active extravasation at X.]',
      i:'Pelvic ring disruption, [APC II / APC III] pattern. [No active arterial hemorrhage on CTA / Active pelvic arterial extravasation, discussed urgently with trauma surgery at time.]'
    }
  },
  {
    slug:'pelvic-ring-fracture-lc', title:'Pelvic Ring Fracture — LC/VS', region:'msk', system:'Pelvis',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Lateral compression and vertical shear patterns compress or vertically displace the pelvic ring.',
    tags:['Lateral compression','Vertical shear','Hemipelvis'], rp:'pelvic-ring-fracture',
    sheet:{
      find:'<b>LC</b>: impaction fractures of anterior sacrum or ilium with internal rotation of the ipsilateral hemipelvis. <b>VS</b>: vertical displacement of an entire hemipelvis (Malgaigne) — look for vertical offset at symphysis and SI joint simultaneously.',
      measure:'VS pattern: vertical displacement &gt;1 cm at either the symphysis or the SI joint confirms instability.',
      pitfall:'LC fractures can have deceptively subtle anterior sacral impaction — review coronal and sagittal reformats; do not rely on axial alone.',
      pearl:'VS injuries are the most unstable pattern and carry the highest transfusion requirement of all pelvic fracture types.',
      call:'Vertical shear with hemipelvis displacement requires urgent trauma surgery notification for external fixation or pelvic binder assessment.',
      f:'[Ipsilateral] rami fractures with [internal rotation of the hemipelvis / vertical displacement of X cm]. [Sacral impaction fracture / Posterior SI ligamentous disruption] noted.',
      i:'Pelvic ring injury, [lateral compression LC-II / vertical shear] pattern. [Communicating to trauma surgery.]'
    }
  },
  {
    slug:'acetabular-fracture', title:'Acetabular Fracture', region:'msk', system:'Hip',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Classify the column or wall pattern and exclude femoral head impaction — both determine surgical approach.',
    tags:['Anterior column','Posterior wall','Femoral head'], rp:'acetabular-fracture',
    sheet:{
      find:'Use axial + coronal + 3-D reformats. Identify which of <b>5 elementary</b> (anterior wall/column, posterior wall/column, transverse) or <b>5 associated</b> (T-type, both-column, transverse + posterior wall, etc.) patterns is present. Check for posterior wall impaction ("gull sign") and loose bodies in the joint.',
      measure:'Posterior wall comminution &gt;40% of wall surface predicts instability. Step-off at the weight-bearing dome &gt;2 mm = surgical threshold.',
      pitfall:'Both-column fracture detaches the entire articular surface from the axial skeleton but can still have a congruent reduction ("secondary congruence") — do not mistake this for a less severe pattern.',
      pearl:'<b>Ilioischial line disruption</b> = posterior column; <b>iliopectineal line disruption</b> = anterior column on AP pelvic radiograph, confirmed on CT.',
      f:'Comminuted [posterior wall] acetabular fracture with [X]% wall involvement and [no / a X mm] articular step-off at the weight-bearing dome. [No / Yes, intra-articular loose body.] [Femoral head congruent.]',
      i:'[Posterior wall] acetabular fracture. Communicating to orthopedic surgery for operative planning.'
    }
  },
  {
    slug:'sacral-fracture', title:'Sacral Fracture', region:'msk', system:'Pelvis',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Denis zone and spinopelvic dissociation (H/U) determine neurologic risk and need for fixation.',
    tags:['Denis zone','Spinopelvic','Neurologic risk'], rp:'sacral-fracture',
    sheet:{
      find:'On coronal and axial CT: <b>Denis I</b> — lateral to neural foramina; <b>Denis II</b> — through foramina; <b>Denis III</b> — central canal. <b>H-type</b> bilateral vertical fractures with transverse fracture = spinopelvic dissociation.',
      measure:'Kyphotic angulation &gt;15° at the fracture = displacement requiring stabilization. Foraminal narrowing predicts L5/S1 root injury.',
      pitfall:'Sacral fractures are missed on plain films ~30% of the time — always review sacrum on all pelvic CTs.',
      pearl:'An H-fracture (bilateral vertical + horizontal) signifies complete spinopelvic disconnection; urgent spine surgery consult needed.',
      call:'Denis III and H-type fractures carry significant neurologic injury risk — communicate to trauma and spine surgery.',
      f:'[Right-sided / Bilateral] sacral fracture, <b>Denis [II]</b>, with [no / narrowing of the right S1 foramen]. [No / H-type transverse component with spinopelvic dissociation.]',
      i:'Denis [II] sacral fracture [with foraminal narrowing, at risk for S1 root injury]. Orthopedic spine surgery notified.'
    }
  },
  {
    slug:'femoral-neck-fracture', title:'Femoral Neck Fracture', region:'msk', system:'Hip',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'Displaced femoral neck fractures interrupt the medial femoral circumflex artery and risk avascular necrosis.',
    tags:['Garden classification','AVN risk','Displaced'], rp:'femoral-neck-fracture',
    sheet:{
      find:'Cortical break or trabecular impaction at the femoral neck on CT scout and axial/coronal images. <b>Garden I</b> — valgus impaction; <b>II</b> — complete non-displaced; <b>III</b> — partial displacement; <b>IV</b> — complete displacement.',
      measure:'Vertical angle at the fracture (Pauwels): &gt;70° is the most unstable configuration.',
      pitfall:'Subtle Garden I impacted fractures can look nearly normal on plain film — CT or MRI if clinical suspicion persists.',
      pearl:'Garden III–IV in a young patient: the clock is AVN — timing to OR matters. In the elderly, arthroplasty is often preferred.',
      call:'Displaced femoral neck fracture (Garden III–IV) requires urgent orthopedic consultation for same-day or next-day fixation.',
      f:'[Minimally displaced / Displaced] femoral neck fracture, [Garden II / III]. [No / Medial offset of X mm.] [Pauwels angle X°.]',
      i:'[Garden III] femoral neck fracture with [medial displacement]. Orthopedic surgery notified.'
    }
  },
  {
    slug:'intertrochanteric-fracture', title:'Intertrochanteric Hip Fracture', region:'msk', system:'Hip',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'Extracapsular fracture between the trochanters — stable vs unstable pattern guides implant choice.',
    tags:['AO/OTA','Stable vs unstable','Posterior wall'], rp:'intertrochanteric-fracture',
    sheet:{
      find:'Fracture line from the greater to lesser trochanter. <b>Stable</b>: two-part fracture with intact posteromedial cortex. <b>Unstable</b>: comminuted, reverse-oblique, or with subtrochanteric extension.',
      measure:'Reverse-oblique pattern (fracture line slopes laterally inferior to medially superior) predicts medial displacement and requires intramedullary nail rather than sliding hip screw.',
      pitfall:'Subtrochanteric extension changes surgical strategy — always trace the fracture inferiorly on coronal reformats.',
      pearl:'Intertrochanteric fractures are extracapsular and rarely cause AVN; blood supply to the femoral head is generally preserved.',
      f:'[Two-part / Comminuted] intertrochanteric fracture with [intact / disrupted posteromedial cortex]. [No / Subtrochanteric extension to X cm below the lesser trochanter.]',
      i:'[Stable two-part / Unstable comminuted] intertrochanteric hip fracture. Orthopedic surgery notified.'
    }
  },
  {
    slug:'femoral-shaft-fracture', title:'Femoral Shaft Fracture', region:'msk', system:'Femur',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'High-energy diaphyseal fracture — classify pattern, exclude ipsilateral neck fracture, and triage hemorrhage.',
    tags:['Diaphysis','Ipsilateral neck','Blood loss'], rp:'femoral-shaft-fracture',
    sheet:{
      find:'Identify fracture location (proximal/middle/distal third), pattern (transverse, oblique, spiral, comminuted), and displacement. <b>Critical</b>: review the ipsilateral femoral neck for occult fracture on every femoral shaft fracture CT.',
      measure:'Estimated blood loss 1–2 L per femoral shaft fracture; assess for hematoma size and active extravasation.',
      pitfall:'Ipsilateral femoral neck fracture is present in 3–9% of shaft fractures and missed ~30% of the time on initial imaging — mandates CT of the entire femur.',
      pearl:'A spiral mid-shaft fracture in a child or low-energy mechanism in an adult raises suspicion for pathologic fracture — review bone density and cortex.',
      call:'Associated active vascular injury (femoral artery proximity at distal third) requires immediate vascular surgery notification.',
      f:'[Transverse / Spiral / Comminuted] fracture of the [mid-diaphyseal] femur with [X cm] displacement and [no / X cm] shortening. [No occult femoral neck fracture. / Ipsilateral femoral neck fracture identified — see separate description.] [No active extravasation.]',
      i:'[Comminuted mid-shaft] femoral fracture. [No associated neck fracture.] Orthopedic surgery notified.'
    }
  },
  {
    slug:'tibial-plateau-fracture', title:'Tibial Plateau Fracture', region:'msk', system:'Knee',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Schatzker classification guides surgery — depression and split-depression patterns risk compartment syndrome and vascular injury.',
    tags:['Schatzker','Depression','Vascular injury'], rp:'tibial-plateau-fracture',
    sheet:{
      find:'Axial + coronal + sagittal CT. <b>Schatzker I</b> — lateral split; <b>II</b> — lateral split-depression; <b>III</b> — lateral pure depression; <b>IV</b> — medial; <b>V</b> — bicondylar; <b>VI</b> — metaphyseal dissociation.',
      measure:'Articular depression &gt;3 mm or condylar widening &gt;5 mm are general thresholds for surgical intervention. Measure maximum depression in mm.',
      pitfall:'Posterior plateau fractures are easily missed on axial images — coronal and sagittal reformats are essential. Also look for a Segond fracture (ACL avulsion) on the lateral tibial rim.',
      pearl:'Schatzker V–VI with vascular injury to the popliteal artery: always check for vascular compromise (CTA knee in high-energy bicondylar fractures).',
      call:'Bicondylar (Schatzker V–VI) with tense compartments — compartment syndrome; notify orthopedic surgery immediately.',
      f:'[Lateral split-depression] tibial plateau fracture (Schatzker [II]) with [X mm] articular depression and [X mm] condylar widening. [Segond fracture noted / not identified.] [No vascular injury on CTA.]',
      i:'Schatzker [II] tibial plateau fracture. Orthopedic surgery notified.'
    }
  },
  {
    slug:'ankle-fracture', title:'Ankle Fracture — Weber/Malleolar', region:'msk', system:'Ankle',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'Weber classification by fibular fracture level predicts syndesmotic stability and guides surgical decision-making.',
    tags:['Weber A/B/C','Syndesmosis','Bimalleolar'], rp:'ankle-fracture',
    sheet:{
      find:'<b>Weber A</b> — below the plafond (avulsion); <b>Weber B</b> — at the plafond, syndesmosis possibly intact; <b>Weber C</b> — above the plafond, syndesmosis disrupted. Assess medial mortise width (normal ≤4 mm). Evaluate for posterior malleolus fracture.',
      measure:'Medial clear space &gt;4 mm = medial instability. Tibiofibular clear space &gt;6 mm on mortise view = syndesmotic diastasis.',
      pitfall:'Maisonneuve fracture — proximal fibular fracture with ankle mortise disruption; always palpate the entire fibula and image the knee if there is isolated medial malleolus fracture or syndesmotic widening without a fibular fracture at the ankle.',
      pearl:'Posterior malleolus involvement &gt;25% of the joint surface usually requires fixation to restore plafond congruity.',
      f:'[Weber B] fibular fracture [at the level of the plafond] with [medial clear space of X mm]. [No / Posterior malleolus fracture involving X% of the articular surface.] [Syndesmosis intact / disrupted.]',
      i:'[Bimalleolar-equivalent / Trimalleolar] ankle fracture, [Weber B]. Orthopedic surgery notified.'
    }
  },
  {
    slug:'pilon-fracture', title:'Pilon (Tibial Plafond) Fracture', region:'msk', system:'Ankle',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Axial load shatters the tibial plafond — CT defines articular comminution and guides staged repair.',
    tags:['Plafond','Ruedi-Allgower','Soft tissue'], rp:'pilon-fracture',
    sheet:{
      find:'Comminuted distal tibial articular fracture with variable fibular fracture. Use <b>Ruedi-Allgower</b>: I — non-displaced; II — displaced without comminution; III — comminuted with displacement.',
      measure:'Count the primary articular fragments; measure maximum step-off and gap. &gt;2 mm step-off = surgical threshold.',
      pitfall:'Pilon fractures are high-energy with severe soft-tissue compromise — CT is key for surgical planning but timing of definitive fixation depends on soft-tissue swelling (often staged).',
      pearl:'Associated fibular fracture is present in ~80%; stabilizing it is often the first surgical step (staged approach with external fixator bridging).',
      call:'Severe soft-tissue injury (fracture blisters, vascular compromise) requires urgent orthopedic surgery and possible vascular consult.',
      f:'Comminuted distal tibial [plafond] fracture ([Ruedi-Allgower III]) with [X] primary articular fragments, [X mm] maximum step-off, and [associated fibular fracture at X level]. [No vascular injury.]',
      i:'Comminuted pilon fracture, [Ruedi-Allgower III]. Orthopedic surgery notified for staged management.'
    }
  },
  {
    slug:'calcaneal-fracture', title:'Calcaneal Fracture', region:'msk', system:'Foot',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Bohler angle collapse and posterior facet depression define severity — CT guides ORIF vs non-operative.',
    tags:['Bohler angle','Posterior facet','Sanders'], rp:'calcaneal-fracture',
    sheet:{
      find:'Identify intra-articular vs extra-articular fracture. For intra-articular: use <b>Sanders classification</b> on coronal CT at the widest posterior facet: I — non-displaced; II — two-part; III — three-part; IV — comminuted.',
      measure:'<b>Bohler angle</b> (normal 20–40°) on lateral: &lt;20° indicates posterior facet depression. Measure the angle between the superior tuberosity and the posterior facet summit.',
      pitfall:'Associated lumbar burst fracture (L1/L2) occurs in ~10% of calcaneal fractures from falls — always image the lumbar spine.',
      pearl:'Sanders IV (severely comminuted) may be managed non-operatively or with primary subtalar fusion rather than ORIF.',
      f:'Intra-articular calcaneal fracture with a Bohler angle of [X°] and [Sanders II / III] comminution of the posterior facet. [No / Associated peroneal tendon subluxation.]',
      i:'Intra-articular calcaneal fracture, [Sanders III], with Bohler angle of [X°]. Orthopedic surgery notified. [Lumbar spine evaluated — no associated spinal fracture.]'
    }
  },
  {
    slug:'lisfranc-fracture-dislocation', title:'Lisfranc Fracture-Dislocation', region:'msk', system:'Foot',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Subtle tarsometatarsal disruption carries a high rate of late arthritis if missed — the fleck sign and column malalignment are key.',
    tags:['Fleck sign','TMT alignment','Missed injury'], rp:'lisfranc-fracture-dislocation',
    sheet:{
      find:'On weight-bearing views or CT: disruption of the normal alignment between the 2nd metatarsal base and middle cuneiform (medial border of 2nd MT should align with medial border of middle cuneiform). The <b>fleck sign</b> — a small avulsion fragment between the 1st and 2nd metatarsal bases — is pathognomonic.',
      measure:'Diastasis &gt;2 mm between the 1st and 2nd metatarsal bases or between the medial and middle cuneiforms = ligamentous Lisfranc injury.',
      pitfall:'A purely ligamentous Lisfranc injury can appear normal on non-weight-bearing plain films — weight-bearing films or CT mandatory if clinical suspicion exists.',
      pearl:'Homolateral (all metatarsals displace in same direction) vs divergent (1st MT medial, others lateral) pattern — both require ORIF or primary fusion.',
      call:'Neurovascular compromise (dorsalis pedis artery proximity) requires urgent vascular assessment.',
      f:'[Fleck sign avulsion between the 1st and 2nd metatarsal bases.] Diastasis of [X mm] between the 1st and 2nd metatarsal bases. [Medial column / All columns] tarsometatarsal malalignment.',
      i:'Lisfranc fracture-dislocation, [homolateral / divergent] pattern. Orthopedic surgery notified.'
    }
  },
  {
    slug:'talar-neck-fracture', title:'Talar Neck Fracture', region:'msk', system:'Foot',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Hawkins classification predicts AVN risk — subtalar and tibiotalar dislocation compound the vascular insult.',
    tags:['Hawkins classification','AVN risk','Subtalar'], rp:'talar-neck-fracture',
    sheet:{
      find:'Fracture at the talar neck on CT. <b>Hawkins I</b> — non-displaced, intact subtalar; <b>II</b> — displaced with subtalar dislocation; <b>III</b> — tibiotalar also dislocated; <b>IV</b> — talonavicular also dislocated.',
      measure:'Displacement &gt;2 mm or angulation &gt;5° = Hawkins II or higher; AVN risk escalates from ~13% (I) to &gt;90% (III–IV).',
      pitfall:'Hawkins sign on radiographs at 6–8 weeks (subchondral lucency) indicates revascularization and rules out AVN — its absence at that time is concerning.',
      pearl:'Hawkins III is a surgical emergency for urgent reduction to restore blood supply to the talar body.',
      call:'Hawkins III–IV: call orthopedic surgery immediately for urgent anatomic reduction.',
      f:'Talar neck fracture with [X mm] displacement. [No subtalar / Subtalar] dislocation. [No tibiotalar] dislocation. [Hawkins II / III] classification.',
      i:'Hawkins [III] talar neck fracture with subtalar dislocation. Discussed urgently with orthopedic surgery at [time].'
    }
  },
  {
    slug:'scaphoid-fracture', title:'Scaphoid Fracture', region:'msk', system:'Wrist',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'Waist fractures interrupt the retrograde blood supply — displaced or proximal pole fractures risk AVN of the proximal pole.',
    tags:['Waist fracture','AVN risk','Proximal pole'], rp:'scaphoid-fracture',
    sheet:{
      find:'Cortical break or trabecular impaction on CT coronal reformats. Classify location: <b>proximal pole</b> (highest AVN risk), <b>waist</b> (most common), distal pole.',
      measure:'Displacement &gt;1 mm or angulation (scapholunate angle &gt;60° or intrascaphoid angle &gt;35°) = displaced, requiring surgery.',
      pitfall:'Plain films miss ~20% of scaphoid fractures — if snuffbox tenderness and normal X-ray, CT (or MRI within 48 h) is the next step.',
      pearl:'Humpback deformity (volar flexion of the distal fragment) on sagittal CT is a sign of instability requiring ORIF.',
      f:'[Waist / Proximal pole] scaphoid fracture with [no / X mm] displacement and [no / humpback] angulation.',
      i:'[Non-displaced waist / Displaced proximal pole] scaphoid fracture. Orthopedic hand surgery notified.'
    }
  },
  {
    slug:'distal-radius-fracture', title:'Distal Radius Fracture — Colles and Smith', region:'msk', system:'Wrist',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'Intra-articular comminution and radial shortening drive surgical decision-making for distal radius fractures.',
    tags:['Colles/Smith','Articular step-off','Radial shortening'], rp:'distal-radius-fracture',
    sheet:{
      find:'<b>Colles</b> — dorsal displacement and angulation (dinner fork); <b>Smith</b> — volar displacement (garden spade). Assess articular involvement, comminution, radial length, inclination, and ulnar variance.',
      measure:'Radial shortening &gt;3 mm, articular step-off &gt;2 mm, or dorsal tilt &gt;10° beyond neutral are generally surgical thresholds. Check ulnar variance (normal 0 ± 2 mm).',
      pitfall:'Associated scaphoid or ulnar styloid fracture is easily missed — review all carpal bones on every distal radius fracture.',
      pearl:'Intra-articular die-punch fragment at the lunate fossa is a CT finding that changes surgical planning even if not apparent on plain films.',
      f:'Distal radial fracture with [dorsal / volar] angulation of [X°], radial shortening of [X mm], and [no / X mm] articular step-off. [Intra-articular extension to the [lunate fossa].] [Associated ulnar styloid fracture [base / tip].]',
      i:'Displaced intra-articular distal radial fracture. Orthopedic hand surgery notified.'
    }
  },
  {
    slug:'elbow-fracture-fat-pad', title:'Elbow Fracture with Fat Pad Sign', region:'msk', system:'Elbow',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'A posterior fat pad or elevated anterior fat pad on the lateral view signals an occult elbow fracture — CT confirms.',
    tags:['Fat pad sign','Occult fracture','Hemarthrosis'], rp:'elbow-fat-pad-sign',
    sheet:{
      find:'On the lateral radiograph in 90° flexion: the anterior fat pad normally hugs the coronoid fossa (sail sign if elevated). A <b>posterior fat pad</b> is always abnormal. CT identifies the fracture: most commonly radial head, then coronoid, then capitellar.',
      measure:'Elevation of the anterior fat pad &gt;4 mm or any posterior fat pad visibility = hemarthrosis and occult fracture until proven otherwise.',
      pitfall:'A normal lateral view does not exclude fracture — if clinical suspicion is high, obtain CT. Posterior fat pad can be obscured if the elbow is not in true lateral position.',
      pearl:'Posterior fat pad with a normal-appearing radial head in an adult: Mason I radial head fracture is likely; treat as fracture clinically even if CT shows only a hairline.',
      f:'[Posterior fat pad sign present on lateral view.] CT demonstrates [Mason I radial head fracture with no displacement / fracture of the coronoid process at X]. [Hemarthrosis.]',
      i:'[Occult radial head fracture] identified on CT. [No associated coronoid or capitellar fracture.] Orthopedic surgery notified.'
    }
  },
  {
    slug:'radial-head-fracture', title:'Radial Head Fracture', region:'msk', system:'Elbow',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'Mason classification guides management — block to pronation/supination and comminution are keys to surgical triage.',
    tags:['Mason classification','Block to motion','Essex-Lopresti'], rp:'radial-head-fracture',
    sheet:{
      find:'Fracture of the radial head on CT: <b>Mason I</b> — marginal crack, no displacement (&lt;2 mm); <b>II</b> — displaced or angulated; <b>III</b> — comminuted; <b>IV</b> — with elbow dislocation.',
      measure:'Displacement &gt;2 mm or articular involvement &gt;30% of the radial head surface = Mason II, typically requiring ORIF or arthroplasty.',
      pitfall:'<b>Essex-Lopresti injury</b> — radial head fracture + interosseous membrane rupture + distal radioulnar joint disruption — is missed when only the elbow is imaged; examine the wrist if forearm tenderness or ulnar variance is noted.',
      pearl:'The anterior neurovascular fat stripe and posterior fat pad elevation are indirect signs; CT is definitive for fragment displacement and comminution.',
      f:'Radial head fracture, [Mason II], with [X mm] articular step-off and [no / X] comminuted fragments. [No elbow dislocation.] [Distal radioulnar joint: normal / disrupted.]',
      i:'[Mason II] radial head fracture. Orthopedic surgery notified. [Wrist evaluated — no Essex-Lopresti injury.]'
    }
  },
  {
    slug:'posterior-shoulder-dislocation', title:'Posterior Shoulder Dislocation', region:'msk', system:'Shoulder',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Posterior dislocation is the great mimicker — the "lightbulb" sign and reverse Hill-Sachs confirm what plain films often miss.',
    tags:['Reverse Hill-Sachs','Lightbulb sign','Seizure/electrocution'], rp:'posterior-shoulder-dislocation',
    sheet:{
      find:'On CT axial: humeral head displaced posterior to the glenoid, internal rotation fixed. Look for <b>reverse Hill-Sachs</b> (anteromedial humeral head impaction defect) and reverse Bankart (posterior glenoid rim fracture).',
      measure:'Reverse Hill-Sachs depth: &gt;20% of humeral head articular surface = high risk of re-engagement ("locking"); may require surgical management.',
      pitfall:'On AP radiograph the humeral head retains a rounded "lightbulb" appearance from fixed internal rotation — this can look almost normal without a Y-view or axillary view. <b>Always obtain a second orthogonal view</b>.',
      pearl:'Classic mechanism: seizure, electrocution, or bilateral dislocation — have a high index of suspicion when bilateral or history of seizure.',
      call:'Locked posterior dislocation requires urgent orthopedic reduction under sedation/anesthesia.',
      f:'Posterior glenohumeral dislocation with the humeral head posterior to the glenoid by [X mm]. [Reverse Hill-Sachs defect involving approximately X% of the humeral head articular surface.] [No / Posterior glenoid rim fracture.]',
      i:'Posterior glenohumeral dislocation with reverse Hill-Sachs defect. Orthopedic surgery notified for urgent reduction.'
    }
  },
  {
    slug:'anterior-shoulder-dislocation', title:'Anterior Shoulder Dislocation', region:'msk', system:'Shoulder',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'Anterior dislocation with Hill-Sachs and Bankart lesions predicts recurrence — CT defines bony defect size.',
    tags:['Hill-Sachs','Bankart lesion','Bony glenoid'], rp:'anterior-shoulder-dislocation',
    sheet:{
      find:'Humeral head anterior and inferior to glenoid on CT. Assess for: <b>Hill-Sachs</b> (posterolateral humeral head impaction), <b>bony Bankart</b> (anterior inferior glenoid rim fracture), and glenoid track engagement.',
      measure:'Bony glenoid loss &gt;20–25% of glenoid width = "off-track" Hill-Sachs, indicating high recurrence risk requiring Latarjet procedure rather than soft-tissue repair.',
      pitfall:'Isolated Hill-Sachs without glenoid loss is low recurrence risk; it is the combination with glenoid bone loss that predicts instability. Always measure both.',
      pearl:'Post-reduction CT (after reduction confirmed) is the standard of care for first-time dislocations in young active patients to quantify bone loss.',
      f:'[Anterior] glenohumeral dislocation [now reduced]. [Hill-Sachs defect posterolateral, X% of humeral head.] [Bony Bankart fragment / No glenoid rim fracture, X% glenoid width loss.]',
      i:'Anterior glenohumeral dislocation. [Post-reduction CT: Hill-Sachs defect with X% glenoid loss — on-track / off-track.] Orthopedic surgery notified.'
    }
  },
  {
    slug:'proximal-humerus-fracture', title:'Proximal Humerus Fracture', region:'msk', system:'Shoulder',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'Neer classification by number of displaced parts guides fixation vs arthroplasty — axillary nerve and vascular injury must be excluded.',
    tags:['Neer classification','4-part','AVN risk'], rp:'proximal-humerus-fracture',
    sheet:{
      find:'Identify displacement (&gt;1 cm) or angulation (&gt;45°) of the anatomic neck, surgical neck, greater tuberosity, and lesser tuberosity to assign <b>Neer parts</b> (1–4). CT with 3-D reconstruction best defines fragment anatomy.',
      measure:'Greater tuberosity displacement &gt;5 mm = surgical in a young patient, even as an isolated fragment.',
      pitfall:'Head-splitting and valgus-impacted 4-part fractures have markedly different prognoses and management — CT distinguishes them from classic 4-part pattern.',
      pearl:'4-part fracture in a young patient risks AVN of the humeral head (blood supply via arcuate artery); in the elderly, reverse total shoulder arthroplasty is often preferred.',
      call:'Associated axillary artery injury (rare, seen with proximal fragment displacement) requires immediate vascular surgery.',
      f:'[Two-part / Three-part / Four-part] proximal humeral fracture (Neer) with displacement of the [greater tuberosity X mm / surgical neck X cm / anatomic neck]. [No / Glenohumeral dislocation.] [No vascular injury on CTA.]',
      i:'[Neer 3-part] proximal humeral fracture. Orthopedic surgery notified.'
    }
  },
  {
    slug:'clavicle-fracture', title:'Clavicle Fracture', region:'msk', system:'Shoulder',
    modality:'CT (or radiograph)', sev:'routine', emoji:'🦴',
    blurb:'Most clavicle fractures heal non-operatively, but displacement thresholds and neurovascular proximity warrant CT in complex cases.',
    tags:['Midshaft','Displacement','Neurovascular'], rp:'clavicle-fracture',
    sheet:{
      find:'Classify by location: middle third (most common, ~80%), lateral third, medial third. On CT, assess displacement, comminution, and shortening. Medial third fractures require CT to differentiate from sternoclavicular dislocation.',
      measure:'Midshaft shortening &gt;2 cm or complete displacement (no cortical contact) — surgical threshold in young active patients.',
      pitfall:'Posterior sternoclavicular dislocation mimics medial clavicle fracture and can compress the trachea, esophagus, or great vessels — CT of the chest is mandatory for any suspected sternoclavicular injury.',
      pearl:'Lateral clavicle fractures with coracoclavicular ligament disruption (displaced CC distance &gt;13 mm) are functionally equivalent to AC joint dislocation and often need fixation.',
      f:'[Midshaft] clavicle fracture with [X mm] displacement and [X mm] shortening. [No / Comminuted fragments.] [Sternoclavicular joint: intact.]',
      i:'[Displaced midshaft] clavicle fracture. [Surgical vs non-operative management per orthopedic surgery.]'
    }
  },
  {
    slug:'septic-arthritis', title:'Septic Arthritis', region:'msk', system:'Joint',
    modality:'CT', sev:'killer', emoji:'🔴',
    blurb:'Joint destruction begins within hours — CT confirms effusion and bony erosion when MRI is unavailable; joint aspiration is the diagnostic gold standard.',
    tags:['Joint effusion','Bony erosion','Aspiration urgent'], rp:'septic-arthritis',
    sheet:{
      find:'Moderate-to-large joint effusion with periarticular soft-tissue edema (stranding, fat plane obliteration). Look for adjacent <b>bony erosion</b>, gas within the joint (pathognomonic for pyarthrosis), and osteolysis.',
      measure:'Synovial fluid WBC &gt;50,000 cells/mm³ is the diagnostic criterion — CT only confirms effusion, not infection; aspiration is required.',
      pitfall:'Crystal arthropathy (gout, pseudogout) can produce tophaceous density within the joint and periarticular erosions that mimic septic arthritis on CT.',
      pearl:'Gas within the joint in a non-postoperative patient = pyarthrosis until proven otherwise — emergent aspiration and orthopedic consult.',
      call:'Any suspected septic joint is a surgical emergency — do not delay aspiration awaiting further imaging.',
      f:'Large [hip / knee] joint effusion with periarticular soft-tissue stranding and [no / X mm bony erosion at X]. [Intra-articular gas present / absent.] [Adjacent osteomyelitis: present / absent.]',
      i:'CT findings raising concern for septic arthritis of the [hip]. Orthopedic surgery notified for urgent joint aspiration. [Discuss with ED re: MRI if aspiration equivocal.]'
    }
  },
  {
    slug:'osteomyelitis', title:'Osteomyelitis', region:'msk', system:'Bone',
    modality:'CT', sev:'urgent', emoji:'🔴',
    blurb:'Cortical destruction, periosteal reaction, and intraosseous gas on CT — MRI is more sensitive but CT guides drainage planning.',
    tags:['Cortical destruction','Sequestrum','Periosteal'], rp:'osteomyelitis',
    sheet:{
      find:'<b>Acute</b>: permeative or moth-eaten cortical destruction, medullary lucency, periosteal new bone, adjacent soft-tissue edema. <b>Chronic</b>: sequestrum (dense avascular cortical fragment), involucrum (surrounding new bone), cloaca (cortical defect).',
      measure:'Extent of cortical destruction; presence of abscess (rim-enhancing soft-tissue collection) or intraosseous abscess (Brodie abscess).',
      pitfall:'Early osteomyelitis can be radiographically occult for 7–14 days; CT sensitivity for acute osteomyelitis is ~65%. MRI is gold standard for early diagnosis.',
      pearl:'Diabetic foot osteomyelitis: probe-to-bone test + cortical destruction on CT or signal change on MRI — discuss MRI if available and CT is equivocal.',
      f:'[Permeative cortical destruction / Sequestrum and involucrum] of the [distal fibula] with [periosteal new bone and adjacent soft-tissue edema]. [Intraosseous abscess / Soft-tissue abscess adjacent to bone.] [No / Sinus tract.]',
      i:'CT findings consistent with [acute / chronic] osteomyelitis of the [distal fibula]. MRI recommended for further characterization if clinical status permits. Orthopedic surgery and infectious disease notified.'
    }
  },
  {
    slug:'necrotizing-fasciitis', title:'Necrotizing Fasciitis', region:'msk', system:'Soft tissue',
    modality:'CT', sev:'killer', emoji:'💀',
    blurb:'Gas tracking along fascial planes is the CT signature of necrotizing fasciitis — surgical debridement within hours saves lives.',
    tags:['Fascial gas','Fascial thickening','Surgical emergency'], rp:'necrotizing-fasciitis',
    sheet:{
      find:'<b>Gas within or along deep fascial planes</b> (the LRINEC hallmark on CT) — this is the critical finding. Asymmetric fascial thickening (&gt;3 mm) with adjacent fat stranding and fluid tracking along fascial layers. Absence of gas does not exclude the diagnosis.',
      measure:'Gas extent: document the affected fascial compartments. LRINEC score ≥6 is associated with necrotizing soft-tissue infection (CRP, WBC, sodium, glucose, Cr, Hgb).',
      pitfall:'Up to 25% of cases have no CT gas — if clinical suspicion is high (severe pain, sepsis, rapidly spreading erythema), surgical exploration is diagnostic and must not be delayed for imaging.',
      pearl:'The absence of rim enhancement around the affected area (unlike simple abscess) reflects fascial ischemia — a worrisome CT sign of NF.',
      call:'Any gas in deep fascial planes in a septic patient = <b>immediate surgical emergency</b> — call surgery now.',
      f:'<b>Gas</b> tracking along the deep fascial planes of the [right lower extremity / perineum / abdominal wall], extending from [X] to [Y]. Fascial thickening and diffuse soft-tissue edema. [No organized abscess / Associated abscess.]',
      i:'CT findings consistent with <b>necrotizing fasciitis</b> of the [right lower extremity]. Discussed immediately with surgical team at [time]. Emergent OR indicated.'
    }
  },
  {
    slug:'gas-gangrene', title:'Gas Gangrene / Clostridial Myonecrosis', region:'msk', system:'Soft tissue',
    modality:'CT', sev:'killer', emoji:'💀',
    blurb:'Gas within muscle bellies with rapid progression defines clostridial myonecrosis — the most immediately lethal soft-tissue infection.',
    tags:['Intramuscular gas','Clostridium','Feathery pattern'], rp:'gas-gangrene',
    sheet:{
      find:'Gas within <b>muscle compartments</b> (intramuscular gas), often in a feathery or streaky pattern tracking along muscle fibers. Soft-tissue edema with rapid proximal spread. Overlying skin may show crepitus clinically.',
      measure:'Document involved muscle groups and fascial compartments; extent determines amputation level planning.',
      pitfall:'Gas-forming non-Clostridial organisms (E. coli, Klebsiella, mixed anaerobes) can produce an identical CT appearance — culture guides definitive therapy but OR cannot wait for results.',
      pearl:'Clostridial myonecrosis spreads along fascial planes and can extend several compartments beyond visible skin involvement — the CT extent typically understates the surgical extent.',
      call:'Intramuscular gas in a septic patient = <b>immediate surgical emergency</b>; amputation is often required. Call surgery and ICU simultaneously.',
      f:'Extensive intramuscular gas within the [anterior and posterior compartments of the right thigh], with feathery tracking along muscle fibers and surrounding soft-tissue edema. [No fascial plane involvement above / Fascial extension to X level.]',
      i:'CT findings consistent with gas gangrene / clostridial myonecrosis of the [right thigh]. Surgical emergency — discussed immediately with surgery and ICU at [time].'
    }
  },
  {
    slug:'acute-compartment-syndrome', title:'Acute Compartment Syndrome Imaging', region:'msk', system:'Soft tissue',
    modality:'CT', sev:'killer', emoji:'🚨',
    blurb:'CT confirms a cause (fracture, hematoma) but compartment pressure measurement is diagnostic — imaging must not delay fasciotomy.',
    tags:['Compartment pressure','Hematoma','Fasciotomy'], rp:'acute-compartment-syndrome',
    sheet:{
      find:'CT findings supporting raised compartment pressure: diffuse muscular swelling, obliteration of intermuscular fat planes, and the inciting injury (fracture, hematoma). Muscle may show heterogeneous enhancement or lack of enhancement if ischemic.',
      measure:'Clinical diagnosis: compartment pressure &gt;30 mmHg or within 30 mmHg of diastolic pressure = fasciotomy. CT does not measure pressure.',
      pitfall:'Normal CT does not exclude ACS — if the clinical syndrome (pain out of proportion, passive stretch pain, tense compartment) is present, pressure measurement and fasciotomy should not await CT findings.',
      pearl:'<b>Late ACS imaging</b> on CT: hypodense non-enhancing muscle = ischemic necrosis (Volkmann contracture). This is a delayed complication, not an acute imaging diagnosis.',
      call:'Clinical ACS is a time-sensitive surgical emergency — communicate the fracture and hematoma findings immediately and do not delay measurement or fasciotomy for additional imaging.',
      f:'[Fracture / Large intramuscular hematoma] of the [right forearm] with diffuse muscular swelling and obliteration of intermuscular fat planes consistent with markedly elevated compartment pressure. [No vascular injury on CTA.]',
      i:'CT demonstrates [fracture and expanding hematoma] with imaging correlates of raised compartment pressure in the [right forearm]. Clinical compartment syndrome assessment required immediately — surgical team notified at [time].'
    }
  },
  {
    slug:'soft-tissue-abscess', title:'Soft-Tissue Abscess', region:'msk', system:'Soft tissue',
    modality:'CT', sev:'urgent', emoji:'🔴',
    blurb:'A rim-enhancing fluid collection with adjacent cellulitis — confirm depth, size, and proximity to neurovascular bundles before drainage.',
    tags:['Rim enhancement','Cellulitis','Drainage'], rp:'soft-tissue-abscess',
    sheet:{
      find:'<b>Rim-enhancing fluid collection</b> with central low attenuation (pus, ~0–30 HU) and surrounding fat stranding (cellulitis). Note depth (subcutaneous vs subfascial vs intramuscular), size, and relationship to adjacent vessels and nerves.',
      measure:'Measure the collection in three dimensions. Note the largest diameter for drainage planning. Subfascial or intramuscular abscesses require surgical rather than bedside drainage.',
      pitfall:'Poorly enhancing or "dry" abscesses (early phlegmon) may not show a discrete fluid core on CT — clinical correlation and repeat imaging or aspiration may be needed.',
      pearl:'Gas within an abscess suggests gas-forming organisms; if gas tracks along fascial planes, suspect necrotizing fasciitis and escalate management.',
      f:'[X] cm rim-enhancing fluid collection within the [subcutaneous / subfascial / intramuscular] compartment of the [right thigh] with surrounding fat stranding. [No / Gas within the collection.] [No fascial plane tracking.]',
      i:'Soft-tissue abscess of the [right thigh], [subcutaneous / subfascial]. [No features of necrotizing fasciitis.] Surgical/procedural drainage planning recommended.'
    }
  },
  {
    slug:'pyomyositis', title:'Pyomyositis', region:'msk', system:'Soft tissue',
    modality:'CT', sev:'urgent', emoji:'🔴',
    blurb:'Intramuscular abscess in an immunocompromised or tropical-exposure patient — MRI is superior but CT guides urgent drainage.',
    tags:['Intramuscular abscess','Immunocompromised','Tropical'], rp:'pyomyositis',
    sheet:{
      find:'<b>Intramuscular hypodense collection</b> with rim enhancement on contrast CT. Surrounding muscle edema and fat stranding. Often involves a single large muscle (iliopsoas, quadriceps, paraspinal). In stage 1 (invasive): only diffuse muscle edema. Stage 2: abscess formation. Stage 3: septicemia.',
      measure:'Measure abscess dimensions. Assess for multi-compartment involvement. CT-guided drainage feasible if single well-defined collection.',
      pitfall:'Pyomyositis is commonly missed or delayed in non-tropical settings; consider in any immunocompromised patient (HIV, diabetes, IVDU) with localized muscle pain and fever.',
      pearl:'Iliopsoas abscess (pyomyositis or spread from lumbar osteomyelitis or Crohn disease) can present with hip pain, flexion contracture, and psoas sign — CT of the entire psoas is essential.',
      f:'[X] cm intramuscular hypodense collection within the [right iliopsoas] muscle with rim enhancement and surrounding muscle edema. [No / Multi-compartment involvement.] [No adjacent osteomyelitis.]',
      i:'CT findings consistent with [right iliopsoas] pyomyositis / intramuscular abscess. Infectious disease and surgery/IR notified for drainage planning.'
    }
  },
  {
    slug:'pathologic-fracture', title:'Pathologic Fracture', region:'msk', system:'Bone',
    modality:'CT', sev:'urgent', emoji:'⚠️',
    blurb:'Fracture through abnormal bone — characterize the underlying lesion to distinguish metastasis, myeloma, and primary tumor from benign causes.',
    tags:['Lytic lesion','Metastasis','Myeloma'], rp:'pathological-fracture',
    sheet:{
      find:'Fracture through a lytic or blastic bone lesion. Characterize the lesion: aggressive features (permeative pattern, cortical destruction, soft-tissue mass, periosteal reaction) vs benign (well-defined margins, sclerotic rim, no soft-tissue mass).',
      measure:'Mirels score for impending pathologic fracture: site, pain, lesion type, size (&gt;2/3 cortex = score 3). Total score &gt;8 = prophylactic fixation recommended.',
      pitfall:'Insufficiency fractures (in osteoporotic or irradiated bone) can mimic pathologic fractures — review bone density and treatment history; MRI distinguishes edema from replacement.',
      pearl:'A fracture through a purely lytic lesion in a patient &gt;40 years without a known primary should prompt workup for myeloma (SPEP, urine BPEP) and metastasis (CT chest/abdomen/pelvis).',
      call:'Pathologic fractures of weight-bearing bones (femur, humerus) with aggressive underlying lesion require urgent orthopedic consult for impending fixation.',
      f:'Fracture through a [lytic / sclerotic / mixed] bone lesion at the [proximal femur] measuring [X cm] with [no / X cm] cortical breakthrough and [no / soft-tissue mass]. [Additional lesions: absent / present at X, Y].',
      i:'Pathologic fracture through [aggressive lytic lesion] at the [proximal femur]. [Differential includes metastasis / myeloma / primary bone tumor]. Orthopedic oncology and oncology notified.'
    }
  },
  {
    slug:'avascular-necrosis-femoral-head', title:'Avascular Necrosis — Femoral Head', region:'msk', system:'Hip',
    modality:'CT', sev:'urgent', emoji:'🦴',
    blurb:'Subchondral collapse and crescent sign on CT mark irreversible AVN — MRI detects earlier disease when CT is normal.',
    tags:['Crescent sign','Subchondral collapse','ARCO staging'], rp:'avascular-necrosis-of-the-femoral-head',
    sheet:{
      find:'On CT: <b>crescent sign</b> (subchondral lucency parallel to the articular surface), subchondral collapse and flattening of the femoral head, sclerosis and cystic change in the weight-bearing segment. <b>ARCO staging</b>: I — MRI/bone scan only; II — sclerosis/cysts; III — crescent sign/collapse; IV — joint space loss.',
      measure:'Extent of necrotic segment: &lt;15% (small), 15–30% (medium), &gt;30% (large) of femoral head surface — correlates with collapse risk.',
      pitfall:'CT is insensitive for ARCO stage I and II — MRI (double-line sign on T2) is the gold standard for early diagnosis in the appropriate clinical setting.',
      pearl:'Bilateral AVN is present in ~50% of cases (alcohol, steroids, sickle cell) — always image both hips.',
      f:'[Subchondral crescent sign and collapse] of the [right] femoral head weight-bearing segment involving approximately [X%] of the articular surface. [Associated sclerosis and cystic change.] [Contralateral hip: normal / similar changes.]',
      i:'CT findings of avascular necrosis of the [right] femoral head, [ARCO stage III]. Orthopedic surgery notified. MRI recommended for bilateral evaluation and surgical planning.'
    }
  },
  {
    slug:'traumatic-vascular-extremity', title:'Traumatic Vascular Injury — Extremity', region:'msk', system:'Vascular',
    modality:'CT angiogram', sev:'killer', emoji:'🩸',
    blurb:'Hard signs mandate OR; CTA defines injury level and guides endovascular vs open repair for soft signs.',
    tags:['Pseudoaneurysm','Occlusion','Hard vs soft signs'], rp:'peripheral-arterial-injury',
    sheet:{
      find:'Trace the vessel from inflow to the distal run-off. Look for: <b>intimal flap</b>, arterial occlusion with meniscoid cutoff, <b>pseudoaneurysm</b> (saccular outpouching, contained), active extravasation (uncontained blush expanding on delayed), and AV fistula (early venous opacification).',
      measure:'Occlusion level and length; pseudoaneurysm size. Report the most distal reconstituted vessel for revascularization planning.',
      pitfall:'Hard signs (absent pulse, expanding hematoma, bruit, AV fistula) mandate immediate OR or IR without CTA — CTA is for <b>soft signs</b> (diminished pulse, proximity wound, stable hematoma).',
      pearl:'Posterior knee dislocation injures the popliteal artery in ~30–40% of cases — CTA is mandatory even after spontaneous reduction.',
      call:'Active extravasation or threatened limb on CTA = <b>immediate vascular surgery</b> notification.',
      f:'[Intimal flap / Pseudoaneurysm / Occlusion] of the [right popliteal] artery [X cm] from [reference point], with [no distal reconstitution / reconstitution at the tibioperoneal trunk]. [No / Active extravasation.] [AV fistula: absent / present.]',
      i:'[Pseudoaneurysm] of the [right popliteal] artery with [no active hemorrhage]. Vascular surgery notified immediately at [time].'
    }
  },
  {
    slug:'hemarthrosis-lipohemarthrosis', title:'Hemarthrosis and Lipohemarthrosis', region:'msk', system:'Knee',
    modality:'CT (or radiograph)', sev:'urgent', emoji:'🦴',
    blurb:'A fat-fluid level in the knee joint (lipohemarthrosis) is a reliable CT sign of an intra-articular fracture.',
    tags:['Fat-fluid level','Intra-articular fracture','Tibial plateau'], rp:'lipohemarthrosis',
    sheet:{
      find:'On a horizontal-beam lateral radiograph or CT in the supine patient: fat (low-attenuation, −50 to −100 HU) floating on blood (30–60 HU) within the suprapatellar pouch. The <b>fat-fluid level</b> = marrow fat released through an intra-articular fracture.',
      measure:'Any fat-fluid level = intra-articular fracture; the fracture may not be visible on plain films (occult tibial plateau fracture most common). CT of the knee is next.',
      pitfall:'A simple hemarthrosis (blood only, no fat layer) does not necessarily imply intra-articular fracture but can result from ligament tears — the fat layer is the specific fracture indicator.',
      pearl:'When a fat-fluid level is present without obvious fracture on radiographs, tibial plateau fracture is the most common occult cause — proceed to CT.',
      f:'Fat-fluid level within the [suprapatellar] joint recess with fat-attenuation layer [X mm] thick superiorly and dependent blood component. CT demonstrates [subtle tibial plateau fracture / no fracture visible on CT — MRI recommended].',
      i:'Lipohemarthrosis indicating intra-articular fracture. [Tibial plateau fracture identified on CT — see separate description.] [MRI recommended if CT negative and clinical suspicion persists.]'
    }
  },
  {
    slug:'rhabdomyolysis-imaging', title:'Rhabdomyolysis — Imaging Findings', region:'msk', system:'Soft tissue',
    modality:'CT', sev:'urgent', emoji:'⚠️',
    blurb:'Swollen edematous muscles with fat-plane obliteration on CT correspond to CK elevation — identify the compartment at risk and any precipitating cause.',
    tags:['Muscle edema','CK elevation','Compartment'], rp:'rhabdomyolysis',
    sheet:{
      find:'Affected muscles appear <b>diffusely swollen and hypodense</b> (edema replaces normal fat-containing stroma) with obliteration of adjacent fascial fat planes. May see heterogeneous or decreased muscle enhancement. In severe cases, intramuscular gas or necrosis.',
      measure:'On CT, muscle attenuation &lt;10 HU suggests significant edema/necrosis. Identify which compartments are involved for pressure measurement guidance.',
      pitfall:'CT may be normal early in rhabdomyolysis when CK is already markedly elevated — MRI (T2/STIR hyperintensity) is more sensitive. CT is useful to identify the cause (trauma, ischemia, compression) and exclude compartment syndrome.',
      pearl:'Common precipitants to note in the CT report context: crush injury, prolonged immobility (found-down), electrical injury, ischemic myopathy from vascular occlusion — describe the imaging cause if visible.',
      f:'Diffuse swelling and hypodensity of the [anterior and lateral compartment muscles of the left lower leg] with obliteration of adjacent fat planes, consistent with muscle edema / necrosis in the setting of rhabdomyolysis. [No compartment-expanding hematoma. / Intramuscular gas absent.]',
      i:'CT findings consistent with rhabdomyolysis involving the [left lower leg]. [No CT evidence of compartment syndrome; clinical pressure measurement recommended.] Nephrology and [trauma / surgery] notified.'
    }
  },
  {
    slug:'retained-foreign-body', title:'Retained Foreign Body — Soft Tissue', region:'msk', system:'Soft tissue',
    modality:'CT', sev:'urgent', emoji:'🔍',
    blurb:'CT localizes radiopaque and many radiolucent foreign bodies missed on plain films — glass, metal, and stone are reliably seen; wood and plastic are challenging.',
    tags:['Glass','Wood','Metal'], rp:'soft-tissue-foreign-body',
    sheet:{
      find:'Metal (hyperattenuating, beam hardening artifact), glass (moderately hyperattenuating, visible even if small), gravel/stone. <b>Wood</b>: initially hyperattenuating, becomes hypodense with aging and air entrainment — may mimic gas. Plastic: variable, often near soft-tissue attenuation and difficult to detect.',
      measure:'Report size, depth (subcutaneous / subfascial / intramuscular), and relationship to neurovascular bundles and tendons. Include three-plane localization for surgical planning.',
      pitfall:'Organic material (wood, thorns) often causes a delayed inflammatory reaction and abscess that alerts clinicians even when the object is not initially detected — re-review if abscess develops without obvious cause.',
      pearl:'Ultrasound is more sensitive than CT for radiolucent foreign bodies (especially wood) — if clinical suspicion is high and CT is negative, request ultrasound.',
      f:'[Metal / Glass] foreign body within the [subcutaneous / subfascial] tissues of the [right hand], measuring [X × Y mm], located approximately [X mm] deep to the skin surface and [X mm] from the [digital neurovascular bundle / flexor tendon].',
      i:'Retained [glass] foreign body in the [right hand] at [depth and location]. Surgical planning recommended.'
    }
  }
]);
