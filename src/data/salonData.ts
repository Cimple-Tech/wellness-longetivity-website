export interface ServiceItem {
  id: string;
  name: string;
  category: 'massage' | 'facials' | 'hair-styling' | 'hair-coloring' | 'nails' | 'skin' | 'bridal' | 'body-spa';
  description: string;
  duration: string;
  price: number;
  image: string;
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
    description: 'A gentle, full-body massage combined with organic lavender and chamomile essential oils to relieve stress and tension.',
    duration: '60 / 90 Mins',
    price: 95,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'msg-2',
    name: 'Deep Tissue Therapeutic Massage',
    category: 'massage',
    description: 'Targets deep muscle layers and connective tissue. Ideal for chronic muscle tension, active sports recovery, and stiffness.',
    duration: '60 / 90 Mins',
    price: 115,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'msg-3',
    name: 'Warm Basalt Stone Therapy',
    category: 'massage',
    description: 'Smooth, heated volcanic stones are placed on key energy centers to melt tension, expand blood vessels, and soothe body and mind.',
    duration: '75 Mins',
    price: 130,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
  },

  // Facial Rejuvenation
  {
    id: 'fac-1',
    name: 'Mantra Signature Botanical Facial',
    category: 'facials',
    description: 'A deep-cleansing facial using organic plant extracts, custom double mask, and ice-globe facial massage to restore youthful luminosity.',
    duration: '60 Mins',
    price: 110,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fac-2',
    name: 'Hydra-Radiance Oxygen Infusion',
    category: 'facials',
    description: 'Pressurized oxygen infuses active hyaluronic acid and peptides directly into the skin to instantly plump, hydrate, and reduce fine lines.',
    duration: '75 Mins',
    price: 145,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },

  // Hair Styling
  {
    id: 'har-1',
    name: 'Artisan Cut & Blowout',
    category: 'hair-styling',
    description: 'Personalized consultation, luxury hair wash, precision haircut, and dynamic blowout tailored perfectly to your facial structure.',
    duration: '60 Mins',
    price: 85,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'har-2',
    name: 'Couture Silk Press & Styling',
    category: 'hair-styling',
    description: 'Deep conditioning treatment, heat protection prep, and high-gloss flat iron styling for absolute silkiness, volume, and movement.',
    duration: '90 Mins',
    price: 120,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
  },

  // Hair Coloring
  {
    id: 'col-1',
    name: 'Sun-Kissed Balayage & Glaze',
    category: 'hair-coloring',
    description: 'Bespoke hand-painted highlights that blend seamlessly, finished with a nourishing acidic color glaze for multidimensional shine.',
    duration: '150 Mins',
    price: 195,
    image: 'https://images.unsplash.com/photo-1605497746445-97d1b0a9eead?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'col-2',
    name: 'Signature Full Highlight & Bond Protect',
    category: 'hair-coloring',
    description: 'Full head foil work using premium botanical bond-protecting formulas to preserve hair integrity while achieving bright tones.',
    duration: '180 Mins',
    price: 240,
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80',
  },

  // Nail Care
  {
    id: 'nal-1',
    name: 'Organic Milk & Honey Manicure',
    category: 'nails',
    description: 'Nourishing warm milk bath, honey scrub exfoliation, nail shaping, cuticle care, hand massage, and non-toxic vegan gel polish.',
    duration: '45 Mins',
    price: 55,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nal-2',
    name: 'Mantra Luxury Foot Ritual (Pedicure)',
    category: 'nails',
    description: 'Mineral salt soak, botanical volcanic mud mask, warm towel wrap, extensive hot stone calf massage, and precision pedicure polish.',
    duration: '60 Mins',
    price: 75,
    image: 'https://images.unsplash.com/photo-1519415510236-8a5d8431393f?auto=format&fit=crop&w=800&q=80',
  },

  // Skin Treatments
  {
    id: 'skn-1',
    name: 'Collagen Regeneration Therapy',
    category: 'skin',
    description: 'Advanced non-invasive microcurrent treatment combined with marine collagen infusion to sculpt, tone, and lift facial contours.',
    duration: '90 Mins',
    price: 180,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'skn-2',
    name: 'Bespoke Chemical Peel Cycle',
    category: 'skin',
    description: 'Medical-grade fruit acid peel adjusted to your skin concern to reduce pigmentation, refine skin texture, and fade acne scars.',
    duration: '45 Mins',
    price: 135,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
  },

  // Bridal Makeup
  {
    id: 'brd-1',
    name: 'Ultimate Bridal Makeup & Trial',
    category: 'bridal',
    description: 'Comprehensive 90-minute trial session followed by wedding day application featuring premium HD, airbrush makeup, and individual lash application.',
    duration: '180 Mins Total',
    price: 320,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brd-2',
    name: 'Bridal Party Glow & Touchups',
    category: 'bridal',
    description: 'Flawless makeup styling for bridesmaids and family members using camera-ready techniques for long-lasting perfection.',
    duration: '60 Mins',
    price: 110,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },

  // Body Spa
  {
    id: 'bdy-1',
    name: 'Organic Coconut Scrub & Wrap',
    category: 'body-spa',
    description: 'Exfoliation with raw coconut shavings and sea salt, followed by a warm botanical clay body mask and cocoon thermal wrap.',
    duration: '75 Mins',
    price: 140,
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bdy-2',
    name: 'Himalayan Pink Salt Bath & Scrub',
    category: 'body-spa',
    description: 'A detoxifying full-body scrub followed by a relaxing hydrotherapy bath infused with minerals to restore body pH and release toxins.',
    duration: '60 Mins',
    price: 115,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-2',
    title: 'Hot Stone Treatment Lounge',
    category: 'spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-3',
    title: 'Precision Color Styling Bar',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-4',
    title: 'Oxygen Infusion Treatment',
    category: 'skin',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
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

