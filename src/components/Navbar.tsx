'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnnouncementBar from './AnnouncementBar';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Specialists', href: '#specialists' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events to add styling to header & determine active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.href.replace('#', ''));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar />
        <div
          className={`transition-all duration-500 border-b ${
            isScrolled
              ? 'bg-aura-bg/85 backdrop-blur-md border-aura-border py-4 shadow-sm'
              : 'bg-transparent border-transparent py-6'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 font-serif text-2xl tracking-wider text-aura-text hover:opacity-85 transition-opacity"
          >
            <span>Mantra</span>
            <span className="w-1.5 h-1.5 rounded-full bg-aura-accent"></span>
            <span className="text-xs tracking-[0.25em] font-sans text-aura-muted uppercase align-middle ml-1">SPA</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-widest uppercase transition-colors relative py-1 group ${
                  activeSection === item.href
                    ? 'text-aura-accent font-semibold'
                    : 'text-aura-text/80 hover:text-aura-accent'
                } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-aura-accent after:transition-all after:duration-250 after:ease-out hover:after:w-full motion-reduce:transition-none`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-aura-accent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Call To Action Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-widest uppercase border border-aura-accent text-aura-text hover:bg-aura-accent hover:text-white hover:-translate-y-0.5 shadow-sm transition-all duration-300 rounded-full"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-aura-text p-2 hover:bg-aura-primary/30 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-aura-bg pt-44 px-8 flex flex-col justify-between pb-12 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xl font-serif tracking-widest uppercase transition-colors ${
                    activeSection === item.href ? 'text-aura-accent' : 'text-aura-text'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col space-y-6">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-4 bg-aura-accent text-white font-semibold tracking-widest uppercase rounded-full shadow-sm hover:bg-aura-accent-hover transition-colors"
              >
                Book Appointment
              </a>
              <div className="text-center text-xs text-aura-muted">
                <p>840 Organic Way, Beverly Hills, CA</p>
                <p className="mt-1">+1 (555) 382-2872</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

