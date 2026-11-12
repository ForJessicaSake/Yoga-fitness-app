export type YogaSession = {
  id: string;
  name: string;
  description: string;
  level: string;
  duration: string;
  focus: string;
  image: string;
  about: string;
  poses: string[];
  benefits: string[];
  breathCue: string;
};

export const SESSIONS: YogaSession[] = [
  {
    id: "1",
    name: "Surya Namaskar Soft Flow",
    description:
      "A gentle Sun Salutation–inspired warm-up to wake the spine and open the chest.",
    level: "Beginner",
    duration: "20 min",
    focus: "Mobility & morning energy",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    about:
      "Built around classic Sun Salutation shapes at a slower pace. Move with your breath, keep knees soft, and skip jumps if your wrists or lower back feel tender.",
    poses: [
      "Mountain (Tadasana)",
      "Forward Fold (Uttanasana)",
      "Half Lift (Ardha Uttanasana)",
      "Low Lunge",
      "Downward-Facing Dog (Adho Mukha Svanasana)",
      "Cobra or Baby Cobra (Bhujangasana)",
    ],
    benefits: [
      "Warms major muscle groups",
      "Improves spinal mobility",
      "Builds a steady breath–movement link",
    ],
    breathCue: "Inhale to lengthen, exhale to fold. Match one breath to each transition.",
  },
  {
    id: "2",
    name: "Core-Focused Vinyasa",
    description:
      "Link standing balances and plank variations to strengthen your center.",
    level: "Intermediate",
    duration: "35 min",
    focus: "Core stability",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    about:
      "This vinyasa emphasizes bandha awareness—drawing the lower belly in as you move. Expect plank, boat, and warrior transitions that ask for control more than speed.",
    poses: [
      "Plank (Phalakasana)",
      "Boat Pose (Navasana)",
      "Warrior III (Virabhadrasana III)",
      "Side Plank (Vasisthasana)",
      "Chair Pose (Utkatasana)",
      "Crow preparation (Bakasana prep)",
    ],
    benefits: [
      "Builds deep core strength",
      "Improves balance and posture",
      "Supports safer transitions in flow classes",
    ],
    breathCue: "Exhale to engage the belly. Keep breaths long even when the pose gets strong.",
  },
  {
    id: "3",
    name: "Yin Evening Restore",
    description:
      "Long-held floor poses and soft breathwork to downshift before sleep.",
    level: "All levels",
    duration: "25 min",
    focus: "Nervous system reset",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    about:
      "Yin targets connective tissue with passive holds of 2–4 minutes. Use props under hips and knees. Sensation should be a dull stretch, never sharp pain.",
    poses: [
      "Butterfly / Baddha Konasana (supported)",
      "Sleeping Swan (Pigeon variation)",
      "Dragon (Low Lunge, yin style)",
      "Twisted Roots",
      "Legs-Up-the-Wall (Viparita Karani)",
      "Savasana",
    ],
    benefits: [
      "Releases hip and low-back tension",
      "Calms the nervous system",
      "Supports better wind-down routines",
    ],
    breathCue: "Breathe into the belly. On each exhale, soften the jaw, shoulders, and eyes.",
  },
  {
    id: "4",
    name: "Hip Opener Lab",
    description:
      "Target tight hip flexors and outer hips with pigeon, lizard, and seated twists.",
    level: "Beginner",
    duration: "30 min",
    focus: "Hips & lower body",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80",
    about:
      "Ideal after sitting all day. You’ll work both external rotation (pigeon) and hip flexor length (lizard). Keep the front knee stacked and use a block under the hip if the floor feels far away.",
    poses: [
      "Lizard Pose (Utthan Pristhasana)",
      "Pigeon Pose (Eka Pada Rajakapotasana prep)",
      "Fire Log Pose (Agnistambhasana)",
      "Seated Twist (Ardha Matsyendrasana)",
      "Happy Baby (Ananda Balasana)",
      "Supine Figure-Four",
    ],
    benefits: [
      "Eases hip and glute tightness",
      "Supports healthier low-back mechanics",
      "Improves comfort in seated meditation",
    ],
    breathCue: "Inhale to create space, exhale to ease 5% deeper—never force the stretch.",
  },
  {
    id: "5",
    name: "Power Yoga Strength",
    description:
      "A heated-style flow with lunges, chaturangas, and strong standing shapes.",
    level: "Advanced",
    duration: "45 min",
    focus: "Strength & endurance",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    about:
      "Closer to Power / Ashtanga-inspired sequencing: repeated Sun Salutations, standing series, and core finishers. Modify chaturanga to knees-down anytime form fades.",
    poses: [
      "Sun Salutation A & B",
      "Warrior I & II (Virabhadrasana I / II)",
      "Extended Side Angle (Utthita Parsvakonasana)",
      "Chaturanga Dandasana",
      "Wheel prep or Bridge (Setu Bandha)",
      "Crow Pose (Bakasana)",
    ],
    benefits: [
      "Builds muscular endurance",
      "Raises heart rate and heat",
      "Sharpens focus under effort",
    ],
    breathCue: "Ujjayi-style breath: soft ocean sound at the back of the throat, steady inhale and exhale.",
  },
  {
    id: "6",
    name: "Pranayama & Balance",
    description:
      "Box breathing paired with Tree and Warrior III for focus and calm.",
    level: "Intermediate",
    duration: "28 min",
    focus: "Breath & concentration",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
    about:
      "Start seated with simple pranayama, then take that same steady breath into balancing postures. Use a wall or chair for Tree and Warrior III until the gaze (drishti) feels steady.",
    poses: [
      "Easy Seat (Sukhasana) + Box Breath",
      "Tree Pose (Vrksasana)",
      "Warrior III (Virabhadrasana III)",
      "Eagle Pose (Garudasana)",
      "Half Moon prep (Ardha Chandrasana)",
      "Seated Forward Fold (Paschimottanasana)",
    ],
    benefits: [
      "Trains attention and balance",
      "Regulates stress response through breath",
      "Improves single-leg stability",
    ],
    breathCue: "Try 4-count inhale, 4 hold, 4 exhale, 4 hold—then keep that rhythm in standing balances.",
  },
  {
    id: "7",
    name: "Chandra Namaskar Moon Flow",
    description:
      "A cooling Moon Salutation sequence to settle the nervous system after a long day.",
    level: "Beginner",
    duration: "22 min",
    focus: "Cooling & recovery",
    image:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
    about:
      "Unlike fiery Sun Salutations, Chandra Namaskar emphasizes side bends, hip openers, and slower transitions. Ideal for evenings or when you want mobility without heat-building effort.",
    poses: [
      "Mountain (Tadasana)",
      "Side Bend / Crescent Moon",
      "Goddess Pose (Utkata Konasana)",
      "Triangle Pose (Trikonasana)",
      "Wide-Legged Forward Fold (Prasarita Padottanasana)",
      "Supported Forward Fold",
    ],
    benefits: [
      "Cools and calms after stimulation",
      "Opens side body and inner thighs",
      "Supports evening recovery routines",
    ],
    breathCue: "Lengthen the exhale. Let each fold feel soft rather than ambitious.",
  },
  {
    id: "8",
    name: "Hatha Foundations",
    description:
      "Hold classic standing and seated poses with alignment cues and rest between shapes.",
    level: "Beginner",
    duration: "40 min",
    focus: "Alignment basics",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80",
    about:
      "Traditional Hatha pacing: fewer poses, longer holds, and clear foundations. Great if you’re new to yoga or rebuilding consistency after time away.",
    poses: [
      "Mountain (Tadasana)",
      "Warrior II (Virabhadrasana II)",
      "Extended Side Angle",
      "Triangle Pose (Trikonasana)",
      "Seated Forward Fold (Paschimottanasana)",
      "Corpse Pose (Savasana)",
    ],
    benefits: [
      "Teaches safe alignment habits",
      "Builds strength without rushing",
      "Creates confidence for future flow classes",
    ],
    breathCue: "Find a natural breath first, then deepen once the pose feels stable.",
  },
  {
    id: "9",
    name: "Shoulder & Heart Opener",
    description:
      "Counter desk posture with chest openers, gentle backbends, and scapular mobility.",
    level: "All levels",
    duration: "25 min",
    focus: "Upper body mobility",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    about:
      "Designed for rounded shoulders and tight pecs from screens. You’ll mobilize the thoracic spine and open the front body while keeping the low back supported.",
    poses: [
      "Thread the Needle",
      "Puppy Pose (Uttana Shishosana)",
      "Sphinx Pose",
      "Bridge Pose (Setu Bandha Sarvangasana)",
      "Cow Face Arms (Gomukhasana arms)",
      "Supported Fish Pose (Matsyasana)",
    ],
    benefits: [
      "Relieves upper-back and neck tension",
      "Improves posture awareness",
      "Opens the chest for fuller breathing",
    ],
    breathCue: "Inhale into the collarbones and ribs; exhale without collapsing the chest.",
  },
  {
    id: "10",
    name: "Gentle Twist Detox Flow",
    description:
      "Seated and reclined twists to wring out stiffness through the spine and waist.",
    level: "Beginner",
    duration: "20 min",
    focus: "Spinal mobility",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    about:
      "Twists are sequenced after a light warm-up so the spine is ready. Keep length on the inhale and rotate on the exhale. Skip deep twists if you are pregnant or have disc issues—use open twists instead.",
    poses: [
      "Cat-Cow (Marjaryasana / Bitilasana)",
      "Thread the Needle",
      "Revolved Chair prep",
      "Seated Twist (Ardha Matsyendrasana)",
      "Supine Spinal Twist (Supta Matsyendrasana)",
      "Knees-to-Chest (Apanasana)",
    ],
    benefits: [
      "Increases spinal rotation",
      "Eases mid-back stiffness",
      "Supports digestion after heavy meals (gently)",
    ],
    breathCue: "Inhale to grow taller, exhale to twist. Never force the shoulders past the hips.",
  },
  {
    id: "11",
    name: "Yoga Nidra Deep Rest",
    description:
      "A guided body-scan style practice for deep rest without falling fully asleep.",
    level: "All levels",
    duration: "30 min",
    focus: "Rest & recovery",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    about:
      "Yoga Nidra (“yogic sleep”) keeps awareness while the body rests. Lie in Savasana with support under knees and head. Stay awake enough to follow cues; drifting is okay.",
    poses: [
      "Supported Savasana",
      "Body scan / rotation of consciousness",
      "Soft belly breathing",
      "Optional side-lying rest",
      "Seated reorientation",
      "Short seated meditation",
    ],
    benefits: [
      "Reduces perceived stress",
      "Improves sleep quality over time",
      "Restores energy without intense movement",
    ],
    breathCue: "Let the breath be effortless. Count slow exhales if the mind wanders.",
  },
  {
    id: "12",
    name: "Hamstring Care Flow",
    description:
      "Forward folds and active stretching to lengthen the backs of the legs safely.",
    level: "Intermediate",
    duration: "30 min",
    focus: "Posterior chain",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80",
    about:
      "Tight hamstrings often pull on the low back. This session blends active engagement with longer passive folds. Bend the knees generously and prioritize a flat back over touching the toes.",
    poses: [
      "Downward-Facing Dog (Adho Mukha Svanasana)",
      "Pyramid Pose (Parsvottanasana)",
      "Standing Split prep",
      "Head-to-Knee Pose (Janu Sirsasana)",
      "Seated Forward Fold (Paschimottanasana)",
      "Reclined Hand-to-Big-Toe (Supta Padangusthasana)",
    ],
    benefits: [
      "Improves forward-fold comfort",
      "Reduces low-back compensation",
      "Supports running and cycling recovery",
    ],
    breathCue: "Exhale to fold from the hips, not the waist. Keep a micro-bend if the knees yell.",
  },
  {
    id: "13",
    name: "Ashtanga Standing Series Intro",
    description:
      "A shortened standing sequence inspired by the Primary Series foundations.",
    level: "Advanced",
    duration: "40 min",
    focus: "Discipline & heat",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    about:
      "An accessible slice of Ashtanga’s standing sequence: Surya Namaskar A/B, then key standing postures with vinyasa links. Keep Ujjayi breath and a steady gaze. Rest in Child’s Pose whenever needed.",
    poses: [
      "Sun Salutation A",
      "Sun Salutation B",
      "Padangusthasana / Padahastasana",
      "Triangle & Revolved Triangle",
      "Side Angle & Extended Side Angle",
      "Prasarita Padottanasana A–C",
    ],
    benefits: [
      "Builds heat and stamina",
      "Strengthens legs and focus",
      "Introduces traditional vinyasa counting",
    ],
    breathCue: "One breath, one movement. If you lose the count, reset with three steady Ujjayi breaths.",
  },
  {
    id: "14",
    name: "Desk Reset Mini Practice",
    description:
      "A short sequence you can do between meetings to undo chair posture.",
    level: "All levels",
    duration: "12 min",
    focus: "Quick mobility",
    image:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
    about:
      "No mat required if space is tight—use a chair and the floor beside your desk. Move slowly, especially through the neck and wrists. Stop any move that recreates screen-related numbness or sharp pain.",
    poses: [
      "Seated Cat-Cow",
      "Seated Side Stretch",
      "Figure-Four at the chair",
      "Standing Forward Fold",
      "Wrist and forearm circles",
      "Standing Chest Opener at the wall",
    ],
    benefits: [
      "Breaks up long sitting blocks",
      "Relieves neck and hip stiffness",
      "Easy to repeat 2–3 times a day",
    ],
    breathCue: "Match each stretch to one full breath cycle so you don’t rush between calls.",
  },
  {
    id: "15",
    name: "Restorative Full Body Soften",
    description:
      "Fully supported poses with blankets and stillness for deep recovery.",
    level: "All levels",
    duration: "35 min",
    focus: "Deep restoration",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    about:
      "Restorative yoga uses props so muscles can switch off completely. Hold each shape 5–8 minutes. Dim lights, cover with a blanket, and treat this as recovery—not flexibility training.",
    poses: [
      "Supported Child’s Pose",
      "Supported Bridge with block",
      "Reclined Bound Angle (Supta Baddha Konasana)",
      "Supported Twist",
      "Legs-Up-the-Wall (Viparita Karani)",
      "Savasana with eye cover",
    ],
    benefits: [
      "Activates parasympathetic rest response",
      "Helps recovery from training or burnout",
      "Encourages true stillness",
    ],
    breathCue: "Place one hand on the belly. Soften 1% more on every exhale.",
  },
];
