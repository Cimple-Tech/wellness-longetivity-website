'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';
import { Clock, Tag, CalendarCheck, CheckCircle2, ChevronRight, ArrowLeft, Sparkles, ChevronDown } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/salonData';

interface ServiceDetailProps {
  service: ServiceItem;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleBookNow = (serviceId: string = service.id, serviceName: string = service.name) => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('pending-booking-service', JSON.stringify({ serviceId, serviceName }));
      } catch (err) {
        console.error('Failed to set sessionStorage', err);
      }
      window.dispatchEvent(
        new CustomEvent('service-booking-select', {
          detail: { serviceId, serviceName },
        })
      );
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#contact';
      }
    }
  };

  // Resolve related services data
  const related = (service.relatedServices || [])
    .map((id) => SERVICES_DATA.find((s) => s.id === id))
    .filter(Boolean) as ServiceItem[];

  return (
    <MotionConfig reducedMotion="user">
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14" aria-labelledby="service-title">
        {/* Breadcrumbs & Back Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 md:mb-8 text-xs font-medium tracking-wider uppercase text-aura-muted">
          <nav aria-label="Breadcrumb" className="overflow-x-auto no-scrollbar py-0.5 max-w-full">
            <ol className="flex items-center space-x-2 whitespace-nowrap">
              <li>
                <Link href="/" className="hover:text-aura-accent transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-aura-border">/</li>
              <li>
                <Link href="/#services" className="hover:text-aura-accent transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-aura-border">/</li>
              <li aria-current="page" className="text-aura-text font-semibold truncate max-w-[220px] sm:max-w-none">
                {service.name}
              </li>
            </ol>
          </nav>

          <Link
            href="/#services"
            className="inline-flex items-center space-x-1.5 text-aura-accent hover:text-aura-accent-hover transition-colors font-semibold self-start sm:self-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Menu</span>
          </Link>
        </div>

        {/* Editorial Hero Banner */}
        <div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-10 md:mb-14 shadow-premium border border-aura-border"
        >
          <div className="relative w-full min-h-[460px] sm:min-h-[420px] md:min-h-[380px] md:aspect-[21/9] flex flex-col justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={service.image}
              alt={service.name}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.88] saturate-[1.05]"
            />
            {/* Deep luxury gradient overlay for optimal legibility */}
            <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/25 flex flex-col justify-end p-5 sm:p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <span className="inline-block px-3.5 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase bg-white/20 backdrop-blur-md text-white mb-3 border border-white/20">
                  {service.category.replace('-', ' ')}
                </span>
                <h1
                  id="service-title"
                  className="text-2xl sm:text-3xl md:text-5xl font-serif font-normal tracking-tight text-white mb-3 md:mb-4 leading-tight"
                >
                  {service.name}
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-white/90 font-light leading-relaxed mb-5 md:mb-6 max-w-2xl">
                  {service.description}
                </p>

                {/* Duration, Pricing & Instant Book Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/20 text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <div className="flex items-center space-x-1.5 text-white/90">
                      <Clock className="w-4 h-4 text-aura-accent" />
                      <span>Duration: <strong className="font-semibold text-white">{service.duration}</strong></span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-white/90">
                      <Tag className="w-4 h-4 text-aura-accent" />
                      <span>Investment: <strong className="font-semibold text-white">From ${service.price}</strong></span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleBookNow()}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-aura-accent text-white font-semibold text-xs tracking-widest uppercase hover:bg-aura-accent-hover shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex-shrink-0"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            {/* Overview */}
            {service.longDescription && (
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4 }}
                aria-labelledby="overview-heading"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-aura-border shadow-premium"
              >
                <div className="flex items-center space-x-2 text-aura-accent mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">Treatment Essence</span>
                </div>
                <h2 id="overview-heading" className="text-xl sm:text-2xl font-serif text-aura-text mb-4">
                  Overview &amp; Philosophy
                </h2>
                <p className="text-aura-muted text-xs sm:text-sm md:text-base leading-relaxed font-light">
                  {service.longDescription}
                </p>
              </motion.section>
            )}

            {/* Key Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4 }}
                aria-labelledby="benefits-heading"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-aura-border shadow-premium"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-aura-accent mb-2 block">
                  Results
                </span>
                <h2 id="benefits-heading" className="text-xl sm:text-2xl font-serif text-aura-text mb-6">
                  Key Holistic Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-aura-bg/60 border border-aura-border/60">
                      <CheckCircle2 className="w-4 h-4 text-aura-accent mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-aura-text leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* What to Expect (Treatment Protocol) */}
            {service.experience && service.experience.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4 }}
                aria-labelledby="experience-heading"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-aura-border shadow-premium"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-aura-accent mb-2 block">
                  Step by Step
                </span>
                <h2 id="experience-heading" className="text-xl sm:text-2xl font-serif text-aura-text mb-6">
                  What to Expect During Your Session
                </h2>
                <div className="space-y-4">
                  {service.experience.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3.5 sm:space-x-4">
                      <span className="w-7 h-7 rounded-full bg-aura-accent/15 text-aura-accent flex items-center justify-center font-serif text-xs font-semibold flex-shrink-0 mt-0.5 border border-aura-accent/25">
                        {idx + 1}
                      </span>
                      <div className="flex-1 pb-4 border-b border-aura-border/70 last:border-0 last:pb-0">
                        <p className="text-xs sm:text-sm text-aura-text leading-relaxed font-light">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4 }}
                aria-labelledby="faq-heading"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-aura-border shadow-premium"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-aura-accent mb-2 block">
                  Guidance
                </span>
                <h2 id="faq-heading" className="text-xl sm:text-2xl font-serif text-aura-text mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-aura-border rounded-xl overflow-hidden transition-all duration-200"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-3.5 sm:p-4 bg-aura-bg/40 hover:bg-aura-bg/80 transition-colors flex items-center justify-between text-xs sm:text-sm font-medium text-aura-text gap-3"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-aura-accent transition-transform duration-300 flex-shrink-0 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="p-3.5 sm:p-4 bg-white text-xs sm:text-sm text-aura-muted font-light leading-relaxed border-t border-aura-border/60">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sticky Sidebar Column */}
          <aside className="space-y-6 sm:space-y-8">
            {/* Quick Reservation Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-aura-border shadow-premium lg:sticky lg:top-28"
            >
              <h3 className="font-serif text-xl text-aura-text mb-2">Book Your Session</h3>
              <p className="text-xs text-aura-muted font-light leading-relaxed mb-6">
                Reserve your bespoke treatment with our certified wellness practitioners. Complimentary organic herbal tea included with every session.
              </p>

              <div className="space-y-3 mb-6 p-4 rounded-xl bg-aura-bg border border-aura-border text-xs">
                <div className="flex justify-between items-center text-aura-muted">
                  <span>Standard Session</span>
                  <span className="font-medium text-aura-text">{service.duration}</span>
                </div>
                <div className="flex justify-between items-center text-aura-muted">
                  <span>Starting Investment</span>
                  <span className="font-semibold text-aura-accent text-sm">${service.price}</span>
                </div>
                <div className="flex justify-between items-center text-aura-muted">
                  <span>Sanctuary</span>
                  <span className="font-medium text-aura-text">Beverly Hills, CA</span>
                </div>
              </div>

              <button
                onClick={() => handleBookNow()}
                className="w-full py-3.5 bg-aura-accent text-white font-semibold text-[11px] tracking-widest uppercase rounded-full shadow-sm hover:bg-aura-accent-hover hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserve This Treatment</span>
              </button>

              <div className="mt-4 text-center">
                <p className="text-[11px] text-aura-muted font-light">
                  Need personalized advice? Call us at <strong className="text-aura-text">+1 (555) 382-2872</strong>
                </p>
              </div>
            </motion.div>

            {/* Suitability Badge Block */}
            {service.suitableFor && service.suitableFor.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-aura-border shadow-premium"
              >
                <h3 className="font-serif text-lg text-aura-text mb-3">Ideal Candidate</h3>
                <ul className="space-y-2.5">
                  {service.suitableFor.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-aura-muted font-light leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-aura-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </aside>
        </div>

        {/* Related Treatments Section */}
        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.4 }}
            aria-labelledby="related-heading"
            className="mt-14 sm:mt-20 pt-10 sm:pt-12 border-t border-aura-border"
          >
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-aura-accent mb-2 block">
                Complementary Care
              </span>
              <h2 id="related-heading" className="text-2xl sm:text-3xl font-serif text-aura-text">
                Recommended Treatments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {related.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl overflow-hidden border border-aura-border shadow-premium hover:-translate-y-1 hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-aura-text border border-aura-border">
                      {rel.duration}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <h3 className="font-serif text-lg text-aura-text group-hover:text-aura-accent transition-colors">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-aura-muted font-light leading-relaxed mt-2 line-clamp-2">
                        {rel.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-aura-border flex items-center justify-between">
                      <span className="text-xs font-semibold text-aura-text">
                        From ${rel.price}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/services/${rel.slug}`}
                          className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-aura-text text-[10px] font-medium tracking-wider uppercase transition-colors"
                        >
                          Learn More
                        </Link>
                        <button
                          onClick={() => handleBookNow(rel.id, rel.name)}
                          className="px-3.5 py-1.5 rounded-full bg-aura-accent hover:bg-aura-accent-hover text-white text-[10px] font-medium tracking-wider uppercase transition-colors cursor-pointer"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </article>
    </MotionConfig>
  );
}
