'use client';

import { motion, MotionConfig } from 'framer-motion';
import { SPECIALISTS_DATA } from '@/data/salonData';
import { fadeIn, fadeInUp, scaleIn, staggerContainer } from '@/lib/animationVariants';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Specialists() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="specialists" className="py-28 bg-aura-bg relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-aura-accent uppercase mb-2">Our Artisans</span>
            <h2 className="text-3xl md:text-4xl font-serif text-aura-text">
              Meet Our Master Specialists
            </h2>
            <div className="h-[2px] w-12 bg-aura-accent my-4"></div>
            <p className="text-sm md:text-base text-aura-muted font-light leading-relaxed">
              Our certified therapists and artistic directors bring world-class training and a nurturing touch to every treatment.
            </p>
          </motion.div>

          {/* Specialists Cards Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SPECIALISTS_DATA.map((specialist) => (
              <motion.div
                variants={fadeInUp}
                key={specialist.id}
                className="bg-white rounded-[20px] overflow-hidden border border-aura-border group shadow-premium hover:-translate-y-1 hover:shadow-premium-hover transition-all duration-300"
              >
                {/* Image Container with Hover Social Drawer */}
                <motion.div variants={scaleIn} className="relative aspect-[3/4] w-full overflow-hidden bg-aura-bg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={specialist.photo}
                    alt={specialist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[1.03] saturate-[1.04] contrast-[1.02]"
                  />
                  
                  {/* Floating Social Icons Drawer on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-10">
                    {specialist.socials.instagram && (
                      <a
                        href={specialist.socials.instagram}
                        className="p-3 rounded-full bg-white text-aura-text hover:bg-aura-accent hover:text-white transition-colors duration-300 shadow-sm"
                        aria-label="Instagram Link"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    )}
                    {specialist.socials.facebook && (
                      <a
                        href={specialist.socials.facebook}
                        className="p-3 rounded-full bg-white text-aura-text hover:bg-aura-accent hover:text-white transition-colors duration-300 shadow-sm"
                        aria-label="Facebook Link"
                      >
                        <FacebookIcon className="w-4 h-4" />
                      </a>
                    )}
                    {specialist.socials.twitter && (
                      <a
                        href={specialist.socials.twitter}
                        className="p-3 rounded-full bg-white text-aura-text hover:bg-aura-accent hover:text-white transition-colors duration-300 shadow-sm"
                        aria-label="Twitter Link"
                      >
                        <TwitterIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Specialist Meta details */}
                <motion.div variants={fadeIn} className="p-6 text-center space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl text-aura-text">{specialist.name}</h3>
                    <p className="text-xs text-aura-accent uppercase tracking-widest font-semibold">{specialist.role}</p>
                  </div>
                  
                  <div className="h-[1px] bg-aura-border w-1/2 mx-auto" />

                  <div className="space-y-2 text-xs text-aura-muted font-light leading-relaxed">
                    <p>
                      <span className="font-semibold text-aura-text">Experience:</span> {specialist.experience}
                    </p>
                    <p className="px-4">
                      <span className="font-semibold text-aura-text">Expertise:</span> {specialist.specialization}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
}
