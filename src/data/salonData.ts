export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  category: 'massage' | 'facials' | 'hair-styling' | 'hair-coloring' | 'nails' | 'skin' | 'bridal' | 'body-spa';
  description: string;
  longDescription: string;
  duration: string;
  price: number;
  priceDetails?: string;
  image: string;
  images?: string[];
  benefits: string[];
  experience: string[];
  faqs?: { q: string; a: string }[];
  suitableFor?: string[];
  relatedServices?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface PackageItem {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  photo: string;
  experience: string;
  specialization: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'spa' | 'hair' | 'skin' | 'nails';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  photo: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES_CATEGORIES = [
  { id: 'massage', name: 'Massage Therapy' },
  { id: 'facials', name: 'Facial Rejuvenation' },
  { id: 'hair-styling', name: 'Hair Styling' },
  { id: 'hair-coloring', name: 'Hair Coloring' },
  { id: 'nails', name: 'Nail Care' },
  { id: 'skin', name: 'Skin Treatments' },
  { id: 'bridal', name: 'Bridal Makeup' },
  { id: 'body-spa', name: 'Body Spa' },
] as const;

export const SERVICES_DATA: ServiceItem[] = [
  // Massage Therapy
  {
    id: 'msg-1',
    name: 'Swedish Aromatherapy Massage',
    category: 'massage',
    slug: 'swedish-aromatherapy-massage',
    description: 'A gentle, full-body massage combined with organic lavender and chamomile essential oils to relieve stress and tension.',
    longDescription: 'Indulge in a gentle full-body Swedish massage infused with calming lavender and chamomile essential oils, designed to melt stress, soothe the nervous system, and promote restorative tranquility.',
    duration: '60 / 90 Mins',
    price: 95,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Reduces muscular stress and mental fatigue',
      'Improves blood and lymphatic circulation',
      'Deeply hydrates skin with cold-pressed botanical oils',
      'Promotes sound, restorative sleep'
    ],
    experience: [
      'In-depth wellness consultation and bespoke aroma selection',
      'Gentle long gliding strokes (effleurage) with warm essential oils',
      'Focused relief on shoulders, neck, and lower back tension',
      'Calming hot towel compress and post-treatment hydration ritual'
    ],
    suitableFor: [
      'First-time spa visitors',
      'Individuals experiencing mild to moderate stress',
      'Anyone seeking holistic mental relaxation and gentle muscular unwinding'
    ],
    faqs: [
      {
        q: 'What essential oils are used during the treatment?',
        a: 'We exclusively blend organic French lavender, Roman chamomile, and sweet almond oil, tailored to your sensory preference.'
      },
      {
        q: 'Can the pressure be adjusted?',
        a: 'Yes, your therapist will constantly check in to ensure the pressure ranges comfortably from light to medium.'
      }
    ],
    relatedServices: ['msg-2', 'msg-3'],
    seoTitle: 'Swedish Aromatherapy Massage – Mantra Spa',
    seoDescription: 'Experience our soothing Swedish aromatherapy massage with organic lavender oils for ultimate relaxation and stress relief.'
  },
  {
    id: 'msg-2',
    name: 'Deep Tissue Therapeutic Massage',
    category: 'massage',
    slug: 'deep-tissue-therapeutic-massage',
    description: 'Targets deep muscle layers and connective tissue. Ideal for chronic muscle tension, active sports recovery, and stiffness.',
    longDescription: 'A targeted therapeutic experience engineered to release chronic myofascial tension and stubborn muscle adhesions. Utilizing slow, deliberate strokes and concentrated friction along muscle grains, this treatment breaks up stiffness and restores mobility.',
    duration: '60 / 90 Mins',
    price: 115,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Alleviates chronic back, neck, and shoulder stiffness',
      'Breaks down scar tissue and tight muscle knots',
      'Enhances athletic recovery and physical range of motion',
      'Lowers cortisol levels and promotes postural realignment'
    ],
    experience: [
      'Postural assessment and pinpointing areas of chronic strain',
      'Warm-up effleurage to prepare deeper muscle tissue',
      'Intense, targeted trigger point therapy and cross-fiber friction',
      'Cooling arnica balm finish to minimize post-treatment soreness'
    ],
    suitableFor: [
      'Athletes and active fitness enthusiasts',
      'Individuals suffering from desk-bound postural strain',
      'Those with chronic muscle stiffness who prefer firm pressure'
    ],
    faqs: [
      {
        q: 'Will I feel sore after the massage?',
        a: 'Mild tenderness is normal for 24-48 hours as toxins release. Drinking plenty of water and warm baths will quickly alleviate this.'
      },
      {
        q: 'Is deep tissue massage painful?',
        a: 'It involves intense pressure, but your therapist works within your comfort threshold to maintain a productive, relieving sensation rather than sharp pain.'
      }
    ],
    relatedServices: ['msg-1', 'msg-3'],
    seoTitle: 'Deep Tissue Therapeutic Massage – Mantra Spa',
    seoDescription: 'Release chronic tension and restore mobility with our targeted Deep Tissue Therapeutic Massage at Mantra Spa.'
  },
  {
    id: 'msg-3',
    name: 'Warm Basalt Stone Therapy',
    category: 'massage',
    slug: 'warm-basalt-stone-therapy',
    description: 'Smooth, heated volcanic stones are placed on key energy centers to melt tension, expand blood vessels, and soothe body and mind.',
    longDescription: 'Harnessing the grounding energy of smooth volcanic basalt stones, this centuries-old therapy warms and relaxes muscle fibers at the deepest cellular level. Heated stones are gently stroked along meridian pathways and strategically positioned on energy vortexes to encourage complete mind-body harmony.',
    duration: '75 Mins',
    price: 130,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Penetrates deep muscle layers without aggressive physical pressure',
      'Expands blood vessels to accelerate metabolic detoxification',
      'Soothes chronic arthritic and joint discomfort',
      'Induces a deeply tranquil, meditative state of mind'
    ],
    experience: [
      'Therapeutic temperature calibration of volcanic river basalt stones',
      'Application of rich organic jojoba oil infused with cedarwood',
      'Gliding hot stone massage along spine, legs, and neck',
      'Placement of grounding stones on chakra points and warm towel envelopment'
    ],
    suitableFor: [
      'Individuals sensitive to heavy pressure who still need deep relief',
      'Anyone suffering from cold extremities or sluggish circulation',
      'Those seeking profound nervous system grounding'
    ],
    faqs: [
      {
        q: 'How hot are the stones?',
        a: 'The stones are meticulously heated in water to approximately 125-130°F (52-54°C), tested against the therapist’s arm before touching your skin.'
      },
      {
        q: 'Are basalt stones natural?',
        a: 'Yes, our river basalt stones are naturally water-smoothed volcanic rock rich in iron, allowing them to retain healing heat.'
      }
    ],
    relatedServices: ['msg-1', 'bdy-2'],
    seoTitle: 'Warm Basalt Stone Therapy – Mantra Spa',
    seoDescription: 'Melt away stress with heated volcanic river stones placed along energy centers for ultimate mind-body renewal at Mantra Spa.'
  },

  // Facial Rejuvenation
  {
    id: 'fac-1',
    name: 'Mantra Signature Botanical Facial',
    category: 'facials',
    slug: 'signature-botanical-facial',
    description: 'A deep-cleansing facial using organic plant extracts, custom double mask, and ice-globe facial massage to restore youthful luminosity.',
    longDescription: 'Our flagship facial ritual combines nutrient-dense organic botanical extracts with holistic facial contouring techniques. Formulated to decongest pores, balance moisture barriers, and awaken dull skin, this facial features a dual-action botanical masque and cooling cryo-globe massage to leave your complexion glowing with vitality.',
    duration: '60 Mins',
    price: 110,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Gently purifies and clears congested pores without irritation',
      'Restores dermal moisture barrier with cold-pressed antioxidants',
      'Reduces puffiness and sculpts facial contours via cryo-globes',
      'Brightens complexions affected by environmental stressors'
    ],
    experience: [
      'Double cleanse with organic rosehip oil and botanical foaming milk',
      'Enzymatic fruit peeling exfoliation under gentle warm steam',
      'Manual lymphatic drainage facial massage with ice globes',
      'Custom botanical mask tailored to your skin type followed by peptide serum'
    ],
    suitableFor: [
      'All skin types, including sensitive and combination skin',
      'Tired, dehydrated, or city-stressed complexions',
      'Anyone preparing for a special occasion or seeking regular skin maintenance'
    ],
    faqs: [
      {
        q: 'Will this facial cause redness or breakouts?',
        a: 'No, we use gentle organic botanical enzymes rather than harsh chemicals, leaving skin immediately calmed and radiant.'
      },
      {
        q: 'How often should I get this facial?',
        a: 'For optimal skin cell turnover and continuous luminosity, we recommend this ritual once every 4 to 6 weeks.'
      }
    ],
    relatedServices: ['fac-2', 'skn-1'],
    seoTitle: 'Mantra Signature Botanical Facial – Mantra Spa',
    seoDescription: 'Revitalize your skin with organic plant extracts, gentle enzyme exfoliation, and sculpting ice-globe massage at Mantra Spa.'
  },
  {
    id: 'fac-2',
    name: 'Hydra-Radiance Oxygen Infusion',
    category: 'facials',
    slug: 'hydra-radiance-oxygen-infusion',
    description: 'Pressurized oxygen infuses active hyaluronic acid and peptides directly into the skin to instantly plump, hydrate, and reduce fine lines.',
    longDescription: 'A clinical-grade, non-invasive rejuvenation therapy beloved for red carpet prep. Pressurized hyperbaric medical-grade oxygen delivers high-potency hyaluronic acid, marine peptides, and vitamins A, C, and E directly into the epidermis, creating an instant plumping and line-smoothing transformation.',
    duration: '75 Mins',
    price: 145,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&h=800&q=80',
    benefits: [
      'Instant deep epidermal hydration and skin plumping effect',
      'Visibly softens the appearance of fine lines and dehydration creases',
      'Stimulates micro-circulation for a lit-from-within dewy glow',
      'Zero downtime—ideal immediately prior to events'
    ],
    experience: [
      'Deep ultrasonic pore purification and gentle resurfacing',
      'Hyperbaric pressurized oxygen wand application with hyaluronic serum',
      'Targeted peptide infusion around eyes and lip contours',
      'Protective lipid barrier seal and SPF 50 mineral application'
    ],
    suitableFor: [
      'Dehydrated, dull, or travel-fatigued skin',
      'Mature skin looking for instantaneous smoothing without needles',
      'Pre-event, wedding, or photoshoot preparation'
    ],
    faqs: [
      {
        q: 'How long do the plumping results last?',
        a: 'The immediate radiant plumpness lasts 7 to 10 days, with cumulative benefits seen when performed in monthly sessions.'
      },
      {
        q: 'Can I wear makeup right after the treatment?',
        a: 'Yes! Your skin will be calm, smooth, and perfectly primed, though most clients love going barefaced with their natural glow.'
      }
    ],
    relatedServices: ['fac-1', 'skn-1'],
    seoTitle: 'Hydra-Radiance Oxygen Infusion Facial – Mantra Spa',
    seoDescription: 'Instantly plump and rejuvenate your skin with pressurized oxygen and botanical hyaluronic peptides at Mantra Spa.'
  },

  // Hair Styling
  {
    id: 'har-1',
    name: 'Artisan Cut & Blowout',
    category: 'hair-styling',
    slug: 'artisan-cut-blowout',
    description: 'Personalized consultation, luxury hair wash, precision haircut, and dynamic blowout tailored perfectly to your facial structure.',
    longDescription: 'More than a simple haircut, our Artisan Cut & Blowout is an architectural study in balance and movement. Your stylist analyzes facial contours, hair texture, and daily lifestyle to execute precision wet and dry cutting techniques, culminating in a signature bouncy or sleek blowout that lasts for days.',
    duration: '60 Mins',
    price: 85,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&h=800&q=80',
    benefits: [
      'Customized cut engineered to flatter facial architecture',
      'Eliminates split ends and promotes healthy hair growth',
      'Enhances natural hair bounce, volume, and movement',
      'Includes a restorative scalp massage and nutrient-rich conditioning'
    ],
    experience: [
      'One-on-one style and silhouette consultation',
      'Aromatherapeutic head massage and botanical shampoo cleanse',
      'Precision technical haircut using shears and razor techniques',
      'Thermal round-brush blowout and editorial finishing touches'
    ],
    suitableFor: [
      'Anyone seeking a fresh seasonal haircut or transformation',
      'Clients needing regular split-end maintenance without sacrificing length',
      'Those wanting professional, bouncy styling for meetings or evenings out'
    ],
    faqs: [
      {
        q: 'What is included in the wash ritual?',
        a: 'We include a double cleanse with botanical sulfate-free shampoo, targeted conditioning mask, and a 5-minute pressure-point scalp massage.'
      },
      {
        q: 'Can I bring reference photos?',
        a: 'Absolutely! We encourage inspirational images to help your master stylist align with your personal aesthetic.'
      }
    ],
    relatedServices: ['har-2', 'col-1'],
    seoTitle: 'Artisan Cut & Blowout – Mantra Salon',
    seoDescription: 'Bespoke precision haircuts and long-lasting blowout styling tailored to your facial structure at Mantra Salon.'
  },
  {
    id: 'har-2',
    name: 'Couture Silk Press & Styling',
    category: 'hair-styling',
    slug: 'couture-silk-press-styling',
    description: 'Deep conditioning treatment, heat protection prep, and high-gloss flat iron styling for absolute silkiness, volume, and movement.',
    longDescription: 'Designed for natural, textured, and curly hair, our Couture Silk Press achieves glass-like sleekness, fluidity, and radiant shine without chemical alterants or thermal damage. We utilize steam hydration therapy and botanical thermal shields to maintain the integrity of your natural curl pattern.',
    duration: '90 Mins',
    price: 120,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Featherlight, glass-like shine with zero greasy residue',
      'Full heat protection preserving natural curl memory',
      'Deep moisture replenishment via steam hydration mask',
      'Exceptional movement, body, and resilience against humidity'
    ],
    experience: [
      'Clarifying scalp detox and moisture-infusing shampoo',
      'Steamed deep conditioning treatment with organic keratin and argan oil',
      'Tension blow-dry technique to safely stretch hair strands',
      'Single-pass ceramic flat-iron silk press and edge definition'
    ],
    suitableFor: [
      'Natural hair textures (types 3A through 4C)',
      'Clients seeking temporary bone-straight sleekness without chemicals',
      'Anyone preparing for milestone photography, weddings, or events'
    ],
    faqs: [
      {
        q: 'Will this process damage my natural curl pattern?',
        a: 'No. We strictly use heat-protective botanical primers and calibrated single-pass ceramic plates to ensure your curls spring back fully upon washing.'
      },
      {
        q: 'How long will the silk press stay straight?',
        a: 'With proper nighttime wrapping in silk/satin and keeping away from moisture, results typically hold beautifully for 2 to 3 weeks.'
      }
    ],
    relatedServices: ['har-1', 'col-2'],
    seoTitle: 'Couture Silk Press & Styling – Mantra Salon',
    seoDescription: 'Flawless thermal silk press delivering featherlight movement and high-gloss shine while protecting natural curl patterns.'
  },

  // Hair Coloring
  {
    id: 'col-1',
    name: 'Sun-Kissed Balayage & Glaze',
    category: 'hair-coloring',
    slug: 'sun-kissed-balayage-glaze',
    description: 'Bespoke hand-painted highlights that blend seamlessly, finished with a nourishing acidic color glaze for multidimensional shine.',
    longDescription: 'Our master colorists hand-paint delicate gradients using freehand French balayage methods to emulate the natural illumination of sunlight through hair. Finished with a bespoke acidic gloss glaze, this technique ensures a soft, seamless grow-out line with zero harsh demarcations.',
    duration: '150 Mins',
    price: 195,
    image: 'https://images.unsplash.com/photo-1605497746445-97d1b0a9eead?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Natural, sun-drenched multidimensional color graduation',
      'Ultra-low maintenance grow-out with no harsh root line',
      'Bond-building additives prevent cuticle damage during lightening',
      'Acidic color glaze seals cuticles for mirror-like light reflection'
    ],
    experience: [
      'Color theory consultation and skin tone undertone matching',
      'Artisan freehand hand-painting balayage application',
      'Botanical bond-building wash and rinse',
      'Custom toner glaze application and blowout styling'
    ],
    suitableFor: [
      'Clients wanting natural-looking dimension without monthly touch-ups',
      'First-time hair color clients wanting subtle enhancement',
      'Anyone looking to add depth and warmth to natural brown or blonde hair'
    ],
    faqs: [
      {
        q: 'How often does balayage need maintenance?',
        a: 'Because the transition is painted softly at the root, balayage only requires refreshing every 3 to 5 months, with an interim gloss glaze at 8 weeks.'
      },
      {
        q: 'Does balayage damage hair?',
        a: 'We incorporate bond-preserving plant proteins into every formula, keeping hair resilient, hydrated, and silky.'
      }
    ],
    relatedServices: ['col-2', 'har-1'],
    seoTitle: 'Sun-Kissed Balayage & Glaze – Mantra Salon',
    seoDescription: 'Hand-painted multidimensional balayage highlights with bespoke color glaze for effortless sun-kissed shine at Mantra Salon.'
  },
  {
    id: 'col-2',
    name: 'Signature Full Highlight & Bond Protect',
    category: 'hair-coloring',
    slug: 'signature-full-highlight-bond-protect',
    description: 'Full head foil work using premium botanical bond-protecting formulas to preserve hair integrity while achieving bright tones.',
    longDescription: 'A comprehensive full-head foil service engineered for maximum lightness and uniform brightness from roots to ends. By combining precision micro-weaving with premium bond-multiplying organic plex formulas, we lift shades cleanly while protecting the internal keratin architecture of every strand.',
    duration: '180 Mins',
    price: 240,
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Maximum dimensional brightness and all-over luminosity',
      'Full scalp-to-end coverage including nape and hairline baby hairs',
      'Built-in bond protection prevents breakage and maintains elasticity',
      'Personalized toning neutralizes brassiness for cool, neutral, or golden finishes'
    ],
    experience: [
      'Comprehensive hair health and lifting capability evaluation',
      'Meticulous full-head foil placement with bond-building lightener',
      'Processing under regulated infrared heat monitoring',
      'Post-lift peptide bond seal, custom toning wash, and styling blowout'
    ],
    suitableFor: [
      'Clients aiming for noticeable all-over blonde or platinum tones',
      'Those seeking maximum lightness and high-contrast dimension',
      'Correcting uneven previous coloring or blending natural silver hair'
    ],
    faqs: [
      {
        q: 'What is the bond-protecting formula?',
        a: 'We use clean, vegan bonding agents that cross-link broken disulfide bonds during the chemical lift, guaranteeing zero structural degradation.'
      },
      {
        q: 'How long does the appointment take?',
        a: 'Depending on hair density and desired lift, appointments range from 3 to 3.5 hours for thorough foil placement and toning.'
      }
    ],
    relatedServices: ['col-1', 'har-2'],
    seoTitle: 'Signature Full Highlight & Bond Protect – Mantra Salon',
    seoDescription: 'Full-head precision foil highlighting with integrated bond-strengthening technology for healthy, radiant blonde tones.'
  },

  // Nail Care
  {
    id: 'nal-1',
    name: 'Organic Milk & Honey Manicure',
    category: 'nails',
    slug: 'organic-milk-honey-manicure',
    description: 'Nourishing warm milk bath, honey scrub exfoliation, nail shaping, cuticle care, hand massage, and non-toxic vegan gel polish.',
    longDescription: 'A restorative hands-only ritual that combines the lactic acid exfoliating power of organic whole milk with the deep humectant properties of raw wildflower honey. Hands and cuticles are bathed, scrubbed, massaged, and groomed before finishing with breathable, non-toxic vegan nail polish.',
    duration: '45 Mins',
    price: 55,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Softens dry cuticles and restores moisture to weathered hands',
      'Gentle lactic acid exfoliation leaves skin velvety smooth',
      'Stimulates hand circulation and relieves wrist tension',
      'Long-lasting vegan 10-free polish or high-shine natural buffing'
    ],
    experience: [
      'Warm organic milk and chamomile hand soak',
      'Raw wildflower honey and sugar crystal gentle exfoliation',
      'Precision nail shaping, buffing, and gentle cuticle care',
      'Warm shea butter hand and forearm massage with non-toxic polish'
    ],
    suitableFor: [
      'Tired, dry, or frequently sanitized hands',
      'Clients prioritizing non-toxic, clean beauty formulations',
      'Routine nail care and healthy cuticle maintenance'
    ],
    faqs: [
      {
        q: 'Is the polish non-toxic?',
        a: 'Yes! We only use 10-free, vegan, cruelty-free lacquers and breathable gels free from formaldehyde, toluene, and DBP.'
      },
      {
        q: 'Can I choose natural buffing instead of polish?',
        a: 'Certainly. We offer a high-shine Japanese ceramic buffing technique for a clean, natural gloss.'
      }
    ],
    relatedServices: ['nal-2', 'fac-1'],
    seoTitle: 'Organic Milk & Honey Manicure – Mantra Spa',
    seoDescription: 'Nourish dry hands with an organic milk bath, wildflower honey exfoliation, and non-toxic polish at Mantra Spa.'
  },
  {
    id: 'nal-2',
    name: 'Mantra Luxury Foot Ritual (Pedicure)',
    category: 'nails',
    slug: 'luxury-foot-ritual-pedicure',
    description: 'Mineral salt soak, botanical volcanic mud mask, warm towel wrap, extensive hot stone calf massage, and precision pedicure polish.',
    longDescription: 'Elevate the classic pedicure into a restorative wellness ceremony. Your feet are immersed in an aromatic Epsom and dead sea salt bath, treated with volcanic pumice and detoxifying clay wraps, and revived through a soothing hot stone lower leg and foot massage before meticulous nail grooming.',
    duration: '60 Mins',
    price: 75,
    image: 'https://images.unsplash.com/photo-1519415510236-8a5d8431393f?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Softens stubborn calluses and deeply hydrates cracked heels',
      'Detoxifies tired feet with volcanic mineral clay wrapping',
      'Alleviates foot fatigue, swelling, and plantar tension with hot stones',
      'Meticulous nail shaping and flawless vegan polish finish'
    ],
    experience: [
      'Aromatic mineral foot soak infused with peppermint and tea tree',
      'Volcanic clay foot masque encased in steaming herbal towels',
      'Detailed callus treatment, cuticle care, and nail trimming',
      'Heated basalt stone calf and foot reflexology massage and polish application'
    ],
    suitableFor: [
      'Individuals on their feet all day or wearing restrictive footwear',
      'Athletes and runners seeking tension release and recovery',
      'Anyone wanting salon-perfect feet and tranquil relaxation'
    ],
    faqs: [
      {
        q: 'Are your foot basins sanitized?',
        a: 'We employ medical-grade sterilization and pipe-free hydrotherapy basins disinfected between every client.'
      },
      {
        q: 'How long does the pedicure last?',
        a: 'Our high-performance vegan lacquers resist chipping for 3 to 4 weeks on toenails.'
      }
    ],
    relatedServices: ['nal-1', 'msg-3'],
    seoTitle: 'Mantra Luxury Foot Ritual Pedicure – Mantra Spa',
    seoDescription: 'Revitalize tired feet with warm mineral soaks, volcanic clay wraps, and hot stone massage at Mantra Spa.'
  },

  // Skin Treatments
  {
    id: 'skn-1',
    name: 'Collagen Regeneration Therapy',
    category: 'skin',
    slug: 'collagen-regeneration-therapy',
    description: 'Advanced non-invasive microcurrent treatment combined with marine collagen infusion to sculpt, tone, and lift facial contours.',
    longDescription: 'Known as a non-invasive workout for facial muscles, this advanced aesthetic therapy pairs low-level electrical microcurrents with potent marine collagen peptides. The currents mirror the body’s own natural cellular frequencies to retrain facial muscles, re-densify thin skin, and visibly sculpt cheekbones and jawlines.',
    duration: '90 Mins',
    price: 180,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Visibly lifts drooping eyebrows, cheeks, and sagging jawline contours',
      'Stimulates natural ATP and cellular collagen synthesis',
      'Improves skin elasticity and diminishes fine lines',
      'Non-invasive with zero recovery downtime or discomfort'
    ],
    experience: [
      'Enzyme purification and galvanic deep cleansing',
      'Application of conductive marine collagen gel matrix',
      'Precision dual-probe microcurrent muscle lifting sequences',
      'Cryogenic soothing peptide mask and red-light LED therapy'
    ],
    suitableFor: [
      'Clients noticing loss of facial contour firmness or elasticity',
      'Preventative anti-aging maintenance starting in the late 20s and beyond',
      'Anyone wanting instant lifting before an important public appearance'
    ],
    faqs: [
      {
        q: 'Does microcurrent hurt?',
        a: 'Not at all. You may feel a slight, pleasant tingling or gentle pulsation as the microcurrent works on underlying muscle fibers.'
      },
      {
        q: 'How many sessions are recommended?',
        a: 'While immediate lifting is visible after one session, a series of 4 to 6 treatments produces lasting structural muscle memory.'
      }
    ],
    relatedServices: ['skn-2', 'fac-2'],
    seoTitle: 'Collagen Regeneration Therapy – Mantra Spa',
    seoDescription: 'Lift, tone, and sculpt facial contours with non-invasive microcurrent and marine collagen therapy at Mantra Spa.'
  },
  {
    id: 'skn-2',
    name: 'Bespoke Chemical Peel Cycle',
    category: 'skin',
    slug: 'bespoke-chemical-peel',
    description: 'Medical-grade fruit acid peel adjusted to your skin concern to reduce pigmentation, refine skin texture, and fade acne scars.',
    longDescription: 'A clinical dermatological resurfacing tailored precisely to your epidermal needs. Whether targeting sun damage, hyperpigmentation, uneven skin texture, or persistent acne scarring, our licensed practitioners calibrate custom percentages of glycolic, lactic, salicylic, and mandelic acids for deep cellular renewal.',
    duration: '45 Mins',
    price: 135,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Accelerates cellular renewal and sheds sun-damaged skin cells',
      'Fades stubborn hyperpigmentation, melasma, and post-acne marks',
      'Refines rough skin texture and minimizes enlarged pores',
      'Stimulates deep collagen production for smoothed fine lines'
    ],
    experience: [
      'Thorough dermatological skin type analysis and peel selection',
      'Degreasing prep to ensure uniform acid absorption',
      'Controlled application of clinical AHA/BHA acid formulation',
      'Neutralization, cooling hydrogel calm mask, and protective barrier balm'
    ],
    suitableFor: [
      'Uneven texture, sun spots, or post-inflammatory marks',
      'Oily, acne-prone skin with congested pores',
      'Clients seeking measurable dermatological skin resurfacing'
    ],
    faqs: [
      {
        q: 'Will my skin visibly peel off?',
        a: 'Depending on the strength selected (superficial vs. medium), you may experience light flaking for 3 to 5 days, revealing freshly renewed skin underneath.'
      },
      {
        q: 'Can I do this peel in the summer?',
        a: 'Yes, with diligent broad-spectrum SPF 50 sunscreen use and avoiding direct prolonged sun exposure for 7 days post-treatment.'
      }
    ],
    relatedServices: ['skn-1', 'fac-1'],
    seoTitle: 'Bespoke Chemical Peel Cycle – Mantra Spa',
    seoDescription: 'Clinically tailored AHA/BHA chemical peels to target hyperpigmentation, acne scarring, and texture at Mantra Spa.'
  },

  // Bridal Makeup
  {
    id: 'brd-1',
    name: 'Ultimate Bridal Makeup & Trial',
    category: 'bridal',
    slug: 'ultimate-bridal-makeup-trial',
    description: 'Comprehensive 90-minute trial session followed by wedding day application featuring premium HD, airbrush makeup, and individual lash application.',
    longDescription: 'Designed for the modern bride who seeks effortless elegance and unwavering confidence. This bespoke bridal journey includes an extensive 90-minute trial consultation to test color palettes and lighting, followed by wedding-day high-definition airbrush makeup, couture individual lash placement, and an emergency bridal touch-up kit.',
    duration: '180 Mins Total',
    price: 320,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Includes full 90-minute preview trial session prior to wedding day',
      '16-hour sweat-proof and tear-resistant airbrush formula',
      'Camera-calibrated HD pigments that prevent flashback in photos',
      'Complimentary luxury bridal touch-up kit with lipstick and blotting papers'
    ],
    experience: [
      'Initial bridal styling consultation exploring gown design, theme, and lighting',
      'Complete 90-minute trial application with photo-testing',
      'Wedding day luxury skin prep, lymphatic depuffing, and airbrush makeup',
      'Custom individual lash clustering and long-wear setting mist lock'
    ],
    suitableFor: [
      'Brides seeking bespoke, flawless makeup that endures through tears and dancing',
      'Destination or local weddings requiring professional photo-ready longevity',
      'Any bride wanting complete peace of mind through a dedicated trial'
    ],
    faqs: [
      {
        q: 'How far in advance should I book my trial?',
        a: 'We recommend scheduling your trial 6 to 8 weeks before your wedding date, ideally on a day when you have your dress fitting or photoshoot.'
      },
      {
        q: 'Do you offer on-location wedding day services?',
        a: 'Yes! Our bridal team travels to your bridal suite or venue upon request.'
      }
    ],
    relatedServices: ['brd-2', 'fac-1'],
    seoTitle: 'Ultimate Bridal Makeup & Trial – Mantra Spa',
    seoDescription: 'Luxury bridal makeup with dedicated trial session, HD airbrush techniques, and bespoke lashes for your wedding day.'
  },
  {
    id: 'brd-2',
    name: 'Bridal Party Glow & Touchups',
    category: 'bridal',
    slug: 'bridal-party-glow-touchups',
    description: 'Flawless makeup styling for bridesmaids and family members using camera-ready techniques for long-lasting perfection.',
    longDescription: 'Ensure your entire bridal party radiates harmonious beauty on the big day. Our master artists create customized looks for bridesmaids, mothers of the bride and groom, and attendants, balancing cohesive aesthetics with individual skin tones, eye shapes, and personal preferences.',
    duration: '60 Mins',
    price: 110,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&h=800&q=80',
    benefits: [
      'Harmonious color aesthetic that complements wedding color schemes',
      'Long-lasting photographic finish that holds up throughout the celebration',
      'Includes premium faux-mink strip or cluster lashes',
      'Relaxed, celebratory group styling atmosphere in our private bridal suite'
    ],
    experience: [
      'Personalized skin prep with soothing botanical mists and primer',
      'Flawless foundation matching and dimensional contouring',
      'Soft glam or classic eye styling tailored to individual preference',
      'Setting veil and touch-up lip gloss application'
    ],
    suitableFor: [
      'Bridesmaids, mothers of the bride, and junior attendants',
      'Gala attendees and wedding guests wanting professional glam',
      'Group bookings celebrating milestone events'
    ],
    faqs: [
      {
        q: 'Are lashes included in this service?',
        a: 'Yes, customized premium cluster or strip lashes are included for every member of your bridal party.'
      },
      {
        q: 'Can you accommodate large bridal parties?',
        a: 'Yes, we can deploy multiple senior artists to ensure everyone is styled promptly without stress.'
      }
    ],
    relatedServices: ['brd-1', 'har-1'],
    seoTitle: 'Bridal Party Glow & Touchups – Mantra Spa',
    seoDescription: 'Camera-ready makeup styling and lash application for bridesmaids and bridal party attendants at Mantra Spa.'
  },

  // Body Spa
  {
    id: 'bdy-1',
    name: 'Organic Coconut Scrub & Wrap',
    category: 'body-spa',
    slug: 'organic-coconut-scrub-wrap',
    description: 'Exfoliation with raw coconut shavings and sea salt, followed by a warm botanical clay body mask and cocoon thermal wrap.',
    longDescription: 'Transport your senses to a tropical sanctuary. This ultra-nourishing full-body ritual begins with an invigorating polish of virgin coconut oil, desiccated coconut flesh, and Atlantic sea salt, followed by a warm mineral clay wrap that infuses trace minerals into skin while you rest cocooned in thermal warmth.',
    duration: '75 Mins',
    price: 140,
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&h=800&q=80',
    benefits: [
      'Deeply exfoliates dead epidermal cells to unveil silky soft skin',
      'Saturates dry skin with virgin cold-pressed coconut lauric acids',
      'Stimulates lymphatic drainage through soothing cocoon thermal wrap',
      'Includes relaxing scalp and neck acupressure massage while wrapped'
    ],
    experience: [
      'Dry body brushing to stimulate circulation and open pores',
      'Gentle full-body scrub with raw coconut and fine sea crystals',
      'Warm rain-shower rinse followed by mineral clay body mask painting',
      'Cocoon thermal wrap accompanied by aromatherapeutic scalp massage'
    ],
    suitableFor: [
      'Dry, flaking, or winter-dull body skin',
      'Anyone seeking deep bodily relaxation and sensory replenishment',
      'Pre-vacation preparation for smooth, even sun absorption'
    ],
    faqs: [
      {
        q: 'What should I wear during the body scrub and wrap?',
        a: 'We provide disposable spa garments for your comfort, and your therapist maintains professional draping at all times.'
      },
      {
        q: 'Should I shave before this treatment?',
        a: 'We recommend refraining from shaving within 24 hours prior to prevent sea salt stinging.'
      }
    ],
    relatedServices: ['bdy-2', 'msg-1'],
    seoTitle: 'Organic Coconut Scrub & Wrap – Mantra Spa',
    seoDescription: 'Indulge in a raw organic coconut polish and warm botanical clay thermal wrap for ultimate skin radiance.'
  },
  {
    id: 'bdy-2',
    name: 'Himalayan Pink Salt Bath & Scrub',
    category: 'body-spa',
    slug: 'himalayan-pink-salt-bath-scrub',
    description: 'A detoxifying full-body scrub followed by a relaxing hydrotherapy bath infused with minerals to restore body pH and release toxins.',
    longDescription: 'Pure mineral richness from ancient Himalayan seabed deposits. This therapeutic bath ritual starts with a vigorous coarse pink salt and rosemary exfoliation to stimulate circulation, followed by immersion in a private copper hydrotherapy soaking tub filled with 84 essential ionic minerals to soothe aching joints and restore cellular pH.',
    duration: '60 Mins',
    price: 115,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Rich in 84 trace minerals that absorb transdermally during soaking',
      'Detoxifies heavy metals and metabolic waste via osmotic balance',
      'Relieves aching muscles, joint inflammation, and stress tensions',
      'Softens rough elbows, knees, and dry skin areas effortlessly'
    ],
    experience: [
      'Full-body exfoliation with mineral-rich Himalayan pink salt and botanical oils',
      'Immersion in a warm, private botanical mineral hydrotherapy bath',
      'Complimentary chilled organic electrolyte herbal tea service during the soak',
      'Application of nourishing botanical body silk lotion to seal in hydration'
    ],
    suitableFor: [
      'Tired, stressed individuals craving deep somatic decompression',
      'Athletes needing joint relief and muscular lactic acid flush',
      'Anyone with sluggish circulation seeking full-body detoxification'
    ],
    faqs: [
      {
        q: 'Is the hydrotherapy bath private?',
        a: 'Yes, your bath is enjoyed in our tranquil, candlelit private thermal suite with soft ambient music.'
      },
      {
        q: 'Are there any contraindications?',
        a: 'Individuals with severe hypertension, heart conditions, or open skin lesions should consult their physician before high-heat mineral baths.'
      }
    ],
    relatedServices: ['bdy-1', 'msg-3'],
    seoTitle: 'Himalayan Pink Salt Bath & Scrub – Mantra Spa',
    seoDescription: 'Detoxify body and mind with pure Himalayan pink salt scrubs and relaxing mineral hydrotherapy baths at Mantra Spa.'
  },
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'pkg-1',
    name: 'Mantra Rest & Recovery',
    price: 145,
    description: 'Perfect for a monthly relaxation routine. Rebalance and de-stress with core luxury essentials.',
    features: [
      '1x 60-min Swedish massage OR Signature Facial',
      'Complimentary organic herbal tea selection',
      '15% discount on additional service menu purchases',
      'Access to relaxation steam lounge (30 mins per visit)',
    ],
  },
  {
    id: 'pkg-2',
    name: 'Mantra Premium Harmony',
    price: 245,
    description: 'Our standard wellness program designed for deep head-to-toe revitalization and beauty maintenance.',
    features: [
      '1x 90-min Deep Tissue OR Warm Stone Massage',
      '1x Signature Botanical Facial',
      '1x Artisan Milk & Honey Manicure OR Pedicure',
      'Access to private relaxation suite with mineral bath',
      '20% discount on boutique retail products',
    ],
  },
  {
    id: 'pkg-3',
    name: 'Mantra Signature Luxury',
    price: 395,
    description: 'The ultimate bespoke wellness sanctuary membership. Complete access and VIP treatments.',
    features: [
      'Unlimited access to thermal suites & steam chambers',
      '2x 90-min bespoke treatments of your choice monthly',
      '1x VIP Hair styling & Blowout session monthly',
      'Priority booking & dedicated wellness concierge advisor',
      'Complimentary glass of organic champagne on arrival',
      'Full-size luxury take-home skincare gift set',
    ],
    isHighlighted: true,
  },
];

export const SPECIALISTS_DATA: Specialist[] = [
  {
    id: 'spc-1',
    name: 'Elena Rostova',
    role: 'Lead Spa Therapist & Wellness Expert',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    experience: '12 Years',
    specialization: 'Swedish, Deep Tissue & Aromatherapy Massage',
    socials: { instagram: '#', facebook: '#', twitter: '#' },
  },
  {
    id: 'spc-2',
    name: 'Marcus Chen',
    role: 'Artistic Director & Master Stylist',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    experience: '10 Years',
    specialization: 'Precision Haircuts, Balayage & Creative Color',
    socials: { instagram: '#', facebook: '#' },
  },
  {
    id: 'spc-3',
    name: 'Sophia Al-Jamil',
    role: 'Chief Aesthetician & Skin Practitioner',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
    experience: '8 Years',
    specialization: 'Advanced Microcurrents, Custom Peels & Hydrafacials',
    socials: { instagram: '#', twitter: '#' },
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mantra Thermal Relaxation Suite',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&h=800&q=80',
  },
  {
    id: 'gal-2',
    title: 'Hot Stone Treatment Lounge',
    category: 'spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&h=800&q=80',
  },
  {
    id: 'gal-3',
    title: 'Precision Color Styling Bar',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&h=800&q=80',
  },
  {
    id: 'gal-4',
    title: 'Oxygen Infusion Treatment',
    category: 'skin',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&h=800&q=80',
  },
  {
    id: 'gal-5',
    title: 'Milk & Honey Manicure Station',
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-6',
    title: 'Mantra Zen Water Garden',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'tst-1',
    name: 'Alexandra Vance',
    review: 'Mantra is a masterpiece of tranquility. The moment you walk through the doors, you leave the noise of the city behind. The aromatherapy Swedish massage was simply transcendent. Clean, highly professional, and gorgeous interiors.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    date: '2 weeks ago',
  },
  {
    id: 'tst-2',
    name: 'Julianne Thorne',
    review: 'Marcus Chen is a magician. I went in for a full balayage and style, and the results exceeded my expectations. The color is incredibly rich, natural, and my hair feels healthier than ever. The tea service was also a lovely touch.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    date: '3 weeks ago',
  },
  {
    id: 'tst-3',
    name: 'Genevieve Dupond',
    review: 'The Hydra-Radiance facial here is worth every dollar. My skin has never felt this hydrated and glowing. Sophia was extremely informative and tailored the treatment to my sensitive skin. Highly recommend the monthly membership.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    date: '1 month ago',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How early should I arrive before my appointment?',
    answer: 'We recommend arriving 15 to 20 minutes prior to your scheduled time. This allows you to check in, complete our briefly tailored skin/health questionnaire, change into a plush organic robe, and unwind in our thermal steam lounge with a complimentary herbal infusion.',
  },
  {
    id: 'faq-2',
    question: 'What is Aura’s cancellation and rescheduling policy?',
    answer: 'We value our specialists’ schedules and our clients’ needs. We kindly ask for at least 24 hours notice for any rescheduling or cancellations. Cancellations within 24 hours of the service time will incur a 50% service charge. No-shows will be charged at 100%.',
  },
  {
    id: 'faq-3',
    question: 'Can I request a specific therapist or specialist for my treatments?',
    answer: 'Absolutely. When booking online through our custom client form or over the phone, you can choose a specific therapist (e.g., Elena, Marcus, Sophia). If you prefer any available specialist, our booking algorithm will assign the best suited match.',
  },
  {
    id: 'faq-4',
    question: 'Are all treatments suitable during pregnancy?',
    answer: 'Many of our massage treatments, facials, and nail care therapies can be customized for pre-natal care. Please notify us during booking so our specialists can use safe, organic pregnancy-approved botanical oils and position you comfortably.',
  },
  {
    id: 'faq-5',
    question: 'Can I purchase the skincare products used during my facial?',
    answer: 'Yes! We carry complete retail product lines of the organic, medical-grade botanical brands used in our facials and skin therapies. Your aesthetician will provide a personalized skincare chart and recommendations after your treatment.',
  },
];

export const BUSINESS_INFO = {
  phone: '+1 (555) 382-2872',
  email: 'concierge@auraspasalon.com',
  address: '840 Organic Way, Suite 100, Beverly Hills, CA 90210',
  mapCoordinates: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.498450117495!2d-118.40243402438676!3d34.06949397315152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc0bc7c77d61%3A0xbb11b6f007e2c906!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  hours: {
    weekdays: '9:00 AM - 8:00 PM',
    saturday: '9:00 AM - 7:00 PM',
    sunday: '10:00 AM - 5:00 PM',
  },
};
