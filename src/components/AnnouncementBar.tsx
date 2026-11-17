'use client';

import { Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-aura-text border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-2 flex items-center justify-center gap-3 flex-wrap">
        <p className="text-xs md:text-sm text-[#EFEBE6] font-light tracking-wide text-center">
          <Sparkles className="w-3.5 h-3.5 inline-block text-aura-accent mr-1.5 -mt-0.5" />
          This is a live demo website crafted by{' '}
          <a
            href="https://cimpletech.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:text-white transition-colors"
          >
            Cimple Tech
          </a>
          {' '}— love it for your restaurant?
        </p>
        <a
          href="tel:+61893672845"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-aura-accent hover:bg-aura-accent-hover text-white text-xs font-semibold tracking-wider rounded-full transition-all duration-300 whitespace-nowrap"
        >
          Contact Us · (08) 9367 2845 →
        </a>
      </div>
    </div>
  );
}
