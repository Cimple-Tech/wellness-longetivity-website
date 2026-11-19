'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/salonData';
import { fadeInUp } from '@/lib/animationVariants';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const startAutoplay = () => {
    stopAutoplay();
    if (isHoveredRef.current) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
    }, 6000);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    stopAutoplay();
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [activeIndex]); // Reset timer on slide change to avoid quick double jumps

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Slider animation variants for slide transitions
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' as any },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.35, ease: 'easeOut' as any },
    }),
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="py-28 bg-aura-bg relative overflow-hidden">
        {/* Decorative Zen circular background */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-aura-primary rounded-full opacity-35 pointer-events-none z-0"></div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          
          {/* Header Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="text-center mb-12 flex flex-col items-center"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-aura-accent uppercase mb-2">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-serif text-aura-text">
              Loved by Our Guests
            </h2>
            <div className="h-[2px] w-12 bg-aura-accent my-4"></div>
          </motion.div>

          {/* Testimonial Active Slide Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full min-h-[300px] md:min-h-[260px] bg-white rounded-[20px] border border-aura-border p-8 md:p-12 shadow-premium flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-0.5"
          >
            {/* Quote mark decorator */}
            <div className="absolute right-8 top-8 text-aura-primary/30 pointer-events-none">
              <Quote className="w-16 h-16 transform rotate-180" />
            </div>

            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                key={activeIndex}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Photo & Rating column */}
                <div className="flex flex-col items-center space-y-4 md:border-r md:border-aura-border md:pr-8 flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-aura-accent">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={TESTIMONIALS_DATA[activeIndex].photo}
                      alt={TESTIMONIALS_DATA[activeIndex].name}
                      className="w-full h-full object-cover brightness-[1.03] saturate-[1.04] contrast-[1.02]"
                    />
                  </div>
                  
                  {/* Review Star Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(TESTIMONIALS_DATA[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-aura-accent text-aura-accent" />
                    ))}
                  </div>
                </div>

                {/* Message text block */}
                <div className="flex-grow space-y-4 text-center md:text-left">
                  <p className="text-sm md:text-base text-aura-text leading-relaxed font-light italic">
                    "{TESTIMONIALS_DATA[activeIndex].review}"
                  </p>
                  <div>
                    <h4 className="font-serif text-lg text-aura-text">
                      {TESTIMONIALS_DATA[activeIndex].name}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-aura-muted font-medium">
                      Verified Guest • {TESTIMONIALS_DATA[activeIndex].date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation Buttons */}
            <div className="absolute right-8 bottom-8 flex space-x-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 rounded-full border border-aura-border text-aura-text hover:bg-aura-primary/50 hover:border-aura-accent/30 transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 rounded-full border border-aura-border text-aura-text hover:bg-aura-primary/50 hover:border-aura-accent/30 transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Carousel Indicators / Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2 mt-8 z-10"
          >
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-6 bg-aura-accent' : 'w-2 bg-aura-accent/30 hover:bg-aura-accent/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
}
