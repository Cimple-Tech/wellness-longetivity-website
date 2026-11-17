'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  User,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CalendarDays,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  SERVICES_CATEGORIES,
  SERVICES_DATA,
  SPECIALISTS_DATA,
} from '@/data/salonData';

const ALL_DEFAULT_TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
  '06:00 PM',
];

const getTodayDateString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getTimeSlotsForDate = (dateStr: string): string[] => {
  if (!dateStr) return ALL_DEFAULT_TIME_SLOTS;
  const parts = dateStr.split('-').map(Number);
  if (parts.length !== 3) return ALL_DEFAULT_TIME_SLOTS;
  // Local date parsing to prevent UTC day shifting
  const dayOfWeek = new Date(parts[0], parts[1] - 1, parts[2]).getDay();

  // Sunday hours: 10:00 AM - 5:00 PM (exclude 09:00 AM and 06:00 PM)
  if (dayOfWeek === 0) {
    return ['10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM', '04:30 PM'];
  }
  // Saturday: 9:00 AM - 7:00 PM & Weekdays: 9:00 AM - 8:00 PM
  return ALL_DEFAULT_TIME_SLOTS;
};

const getOperatingHoursForDate = (dateStr: string): string => {
  if (!dateStr) return '';
  const parts = dateStr.split('-').map(Number);
  if (parts.length !== 3) return '';
  const dayOfWeek = new Date(parts[0], parts[1] - 1, parts[2]).getDay();
  if (dayOfWeek === 0) return 'Sunday hours: 10:00 AM - 5:00 PM';
  if (dayOfWeek === 6) return 'Saturday hours: 9:00 AM - 7:00 PM';
  return 'Weekday hours: 9:00 AM - 8:00 PM';
};

const isValidPhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
};

const sanitizeText = (text: string): string => {
  return text.replace(/[<>]/g, '').trim().slice(0, 500);
};

export default function Contact() {
  // Booking Form State
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [service, setService] = useState('');
  const [specialist, setSpecialist] = useState('any');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [bookingCode, setBookingCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableTimeSlots = getTimeSlotsForDate(date);

  // Listen to quick booking events from Hero or Services
  useEffect(() => {
    const handleQuickBook = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        const { category: cat, date: dt } = customEvent.detail;
        if (cat) {
          setCategory(cat);
          // BUG-001 Fix: Reset service so stale service from another category is never retained
          setService('');
        }
        if (dt) {
          setDate(dt);
          // BUG-002 Fix: Invalidate timeSlot if not available on the newly selected date
          const validSlots = getTimeSlotsForDate(dt);
          setTimeSlot((prev) => (validSlots.includes(prev) ? prev : ''));
        }
        setStep(1); // Set to step 1 so they see the prefilled values
      }
    };

    const handleServiceBook = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        const { serviceId } = customEvent.detail;
        const found = SERVICES_DATA.find((s) => s.id === serviceId);
        if (found) {
          setCategory(found.category);
          setService(found.id);
          setStep(2); // Jump to specialist selection since service is decided
        }
      }
    };

    window.addEventListener('quick-booking-select', handleQuickBook);
    window.addEventListener('service-booking-select', handleServiceBook);

    return () => {
      window.removeEventListener('quick-booking-select', handleQuickBook);
      window.removeEventListener('service-booking-select', handleServiceBook);
    };
  }, []);

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
    // BUG-002 Fix: If currently chosen timeSlot is not valid on the new date, reset it
    const validSlots = getTimeSlotsForDate(newDate);
    if (timeSlot && !validSlots.includes(timeSlot)) {
      setTimeSlot('');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'notes') {
      // BUG-003 Fix: Enforce maximum 500 characters on notes
      if (value.length <= 500) {
        setClientInfo((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }
    setClientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1 && (!category || !service || !activeServiceObj)) return;
    if (step === 2 && !specialist) return;
    if (step === 3 && (!date || !timeSlot || !availableTimeSlots.includes(timeSlot))) return;
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // BUG-003 Fix: Validate required fields and phone format before submitting
    if (
      !clientInfo.name.trim() ||
      !clientInfo.email.trim() ||
      !isValidPhone(clientInfo.phone)
    ) {
      return;
    }

    setIsSubmitting(true);
    // BUG-003 Fix: Sanitize notes to prevent malformed text or script injection
    const cleanNotes = sanitizeText(clientInfo.notes);
    setClientInfo((prev) => ({ ...prev, notes: cleanNotes }));

    // Simulate API request delay
    setTimeout(() => {
      const code = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
      setBookingCode(code);
      setIsSubmitting(false);
      setStep(5); // Go to success page
    }, 1500);
  };

  const handleResetForm = () => {
    setStep(1);
    setCategory('');
    setService('');
    setSpecialist('any');
    setDate('');
    setTimeSlot('');
    setClientInfo({
      name: '',
      email: '',
      phone: '',
      notes: '',
    });
    setBookingCode('');
  };

  // Filter services matching chosen category
  const filteredServicesList = SERVICES_DATA.filter((s) => s.category === category);
  // BUG-001 Fix: Ensure activeServiceObj strictly matches current category as well
  const activeServiceObj = SERVICES_DATA.find((s) => s.id === service && s.category === category);
  const activeSpecialistObj = SPECIALISTS_DATA.find((s) => s.id === specialist);

  return (
    <section id="contact" className="py-28 bg-aura-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column Left: Contact Details, Map & Hours */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-aura-accent uppercase">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-serif text-aura-text">
                Visit Mantra Sanctuary
              </h2>
              <div className="h-[2px] w-12 bg-aura-accent"></div>
              <p className="text-sm text-aura-muted font-light leading-relaxed">
                Walk into our peaceful clinic in Beverly Hills, or schedule your appointments online. For events or special requests, connect with our concierge.
              </p>
            </div>

            {/* Info Cards Column */}
            <div className="space-y-4">
              {/* Card Address */}
              <div className="flex items-start space-x-4 p-5 bg-white border border-aura-border rounded-[20px] shadow-premium hover:-translate-y-0.5 hover:shadow-premium-hover transition-all duration-300">
                <div className="p-2.5 rounded-xl bg-aura-primary/50 text-aura-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-aura-text uppercase">Sanctuary Address</h4>
                  <p className="text-xs md:text-sm text-aura-muted font-light mt-1">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              {/* Card Hours */}
              <div className="flex items-start space-x-4 p-5 bg-white border border-aura-border rounded-[20px] shadow-premium hover:-translate-y-0.5 hover:shadow-premium-hover transition-all duration-300">
                <div className="p-2.5 rounded-xl bg-aura-primary/50 text-aura-accent">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full space-y-1">
                  <h4 className="text-xs font-semibold tracking-wider text-aura-text uppercase">Opening Hours</h4>
                  <div className="grid grid-cols-2 text-xs text-aura-muted font-light pt-1 gap-y-1">
                    <span>Mon - Fri:</span>
                    <span className="text-right font-medium text-aura-text">{BUSINESS_INFO.hours.weekdays}</span>
                    <span>Saturday:</span>
                    <span className="text-right font-medium text-aura-text">{BUSINESS_INFO.hours.saturday}</span>
                    <span>Sunday:</span>
                    <span className="text-right font-medium text-aura-text">{BUSINESS_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Card Phone/Email */}
              <div className="flex items-start space-x-4 p-5 bg-white border border-aura-border rounded-[20px] shadow-premium hover:-translate-y-0.5 hover:shadow-premium-hover transition-all duration-300">
                <div className="p-2.5 rounded-xl bg-aura-primary/50 text-aura-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-aura-text uppercase">Direct Contacts</h4>
                  <p className="text-xs md:text-sm text-aura-text font-medium mt-1">{BUSINESS_INFO.phone}</p>
                  <p className="text-xs md:text-sm text-aura-muted font-light">{BUSINESS_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Desaturated Google Map Iframe block */}
            <div className="relative aspect-video rounded-[20px] overflow-hidden border border-aura-border shadow-premium">
              <iframe
                title="Mantra Spa Location Map"
                src={BUSINESS_INFO.mapCoordinates}
                className="w-full h-full border-0 desaturate-[60%] contrast-[95%] opacity-90"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column Right: Interactive Multi-step Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-[20px] p-8 md:p-12 border border-aura-border shadow-premium transition-all duration-300 hover:shadow-premium-hover">
            <h3 className="font-serif text-2xl text-aura-text mb-2">Book Your Experience</h3>
            <p className="text-xs text-aura-muted font-light mb-8">Follow our easy multi-step booking client to secure your appointment instantly.</p>

            {/* Stepper Progress Indicator */}
            {step < 5 && (
              <div className="flex items-center justify-between mb-8 relative">
                {/* Horizontal progress bar track */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-aura-bg z-0" />
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-aura-accent transition-all duration-500 z-0"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                />

                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold z-10 transition-colors duration-500 ${
                      step >= num
                        ? 'bg-aura-accent text-white shadow-sm shadow-aura-accent/20'
                        : 'bg-aura-bg text-aura-muted border border-aura-border'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>
            )}

            {/* Form Steps Rendering with AnimatePresence */}
            <form onSubmit={handleSubmitBooking} className="min-h-[340px] flex flex-col justify-between">
              
              <div className="flex-grow">
                {/* STEP 1: Select Service Category & Service */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h4 className="text-sm font-semibold tracking-wider text-aura-text uppercase flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-aura-accent" />
                      <span>Step 1: Choose Treatment</span>
                    </h4>

                    {/* Select Category */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="booking-category" className="text-xs text-aura-text font-medium">Category</label>
                      <select
                        id="booking-category"
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                          setService(''); // Reset service selection when category changes
                        }}
                        className="relative w-full bg-aura-bg/50 border border-aura-border rounded-xl px-4 py-3 pr-8 text-sm text-aura-text outline-none focus:border-aura-accent focus:bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:border-aura-accent hover:shadow-[0_0_8px_rgba(168,107,115,0.4)] motion-reduce:transition-none cursor-pointer appearance-none after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-aura-text after:rotate-45"
                        required
                      >
                        <option value="">Choose a category...</option>
                        {SERVICES_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Select Service (only enabled when category is selected) */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="booking-service" className="text-xs text-aura-text font-medium">Treatment / Service</label>
                      <select
                        id="booking-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={`w-full bg-aura-bg/50 border border-aura-border rounded-xl px-4 py-3 text-sm text-aura-text outline-none focus:border-aura-accent focus:bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:border-aura-accent hover:shadow-[0_0_8px_rgba(168,107,115,0.4)] motion-reduce:transition-none cursor-pointer ${
                          !category ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={!category}
                        required
                      >
                        <option value="">Choose a treatment...</option>
                        {filteredServicesList.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} (${s.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Choose Specialist */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h4 className="text-sm font-semibold tracking-wider text-aura-text uppercase flex items-center gap-2">
                      <User className="w-4 h-4 text-aura-accent" />
                      <span>Step 2: Select Specialist</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Specialist Option: Any Available */}
                      <label
                        className={`p-4 rounded-2xl border-2 flex items-center space-x-3 cursor-pointer transition-all ${
                          specialist === 'any'
                            ? 'border-aura-accent bg-aura-primary/10'
                            : 'border-aura-border hover:border-aura-accent/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="specialist"
                          value="any"
                          checked={specialist === 'any'}
                          onChange={() => setSpecialist('any')}
                          className="sr-only"
                        />
                        <div className="w-10 h-10 rounded-full bg-aura-primary flex items-center justify-center text-aura-accent font-serif font-bold text-sm">
                          A
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-aura-text">Any Specialist</p>
                          <p className="text-[10px] text-aura-muted">Best available availability</p>
                        </div>
                      </label>

                      {/* Specialist Options: Team DB */}
                      {SPECIALISTS_DATA.map((spc) => (
                        <label
                          key={spc.id}
                          className={`p-4 rounded-2xl border-2 flex items-center space-x-3 cursor-pointer transition-all ${
                            specialist === spc.id
                              ? 'border-aura-accent bg-aura-primary/10'
                              : 'border-aura-border hover:border-aura-accent/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="specialist"
                            value={spc.id}
                            checked={specialist === spc.id}
                            onChange={() => setSpecialist(spc.id)}
                            className="sr-only"
                          />
                          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-aura-border flex-shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={spc.photo} alt={spc.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-aura-text">{spc.name}</p>
                            <p className="text-[10px] text-aura-muted">{spc.role.split(' ')[0]} Master</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Select Date & Time Slot */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h4 className="text-sm font-semibold tracking-wider text-aura-text uppercase flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-aura-accent" />
                      <span>Step 3: Select Date & Time</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Date Select */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="booking-date" className="text-xs text-aura-text font-medium">Select Date</label>
                        <input
                          id="booking-date"
                          type="date"
                          value={date}
                          min={getTodayDateString()}
                          onChange={(e) => handleDateChange(e.target.value)}
                          className="relative w-full bg-aura-bg/50 border border-aura-border rounded-xl px-4 py-3 pr-8 text-sm text-aura-text outline-none focus:border-aura-accent focus:bg-white transition-all duration-300 ease-out hover:scale-[1.02] hover:border-aura-accent hover:shadow-[0_0_8px_rgba(168,107,115,0.4)] motion-reduce:transition-none cursor-pointer appearance-none after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-aura-text after:rotate-45"
                          required
                        />
                        {date && (
                          <span className="text-[10px] text-aura-accent font-medium">
                            {getOperatingHoursForDate(date)}
                          </span>
                        )}
                      </div>

                      {/* Time Slots List */}
                      <div className="flex flex-col space-y-2">
                        <label className="text-xs text-aura-text font-medium">Select Time Slot</label>
                        <div className="grid grid-cols-2 gap-2 max-h-[180px] overflow-y-auto pr-1">
                          {availableTimeSlots.map((time) => (
                            <button
                              type="button"
                              key={time}
                              onClick={() => setTimeSlot(time)}
                              className={`py-2 px-3 text-xs rounded-xl border text-center font-medium transition-all ${
                                timeSlot === time
                                  ? 'bg-aura-accent text-white border-aura-accent shadow-sm'
                                  : 'bg-aura-bg/50 border-aura-border text-aura-text hover:border-aura-accent/30'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Client Contact Information & Booking Summary */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                  >
                    {/* Sub-column inputs */}
                    <div className="lg:col-span-7 space-y-4">
                      <h4 className="text-sm font-semibold tracking-wider text-aura-text uppercase flex items-center gap-2">
                        <Mail className="w-4 h-4 text-aura-accent" />
                        <span>Step 4: Contact Details</span>
                      </h4>

                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="booking-name" className="text-xs text-aura-text font-medium">Full Name</label>
                        <input
                          id="booking-name"
                          type="text"
                          name="name"
                          value={clientInfo.name}
                          onChange={handleInputChange}
                          className="w-full bg-aura-bg/50 border border-aura-border rounded-xl px-4 py-2.5 text-xs text-aura-text outline-none focus:border-aura-accent focus:bg-white transition-all"
                          placeholder="Your Name"
                          required
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="booking-email" className="text-xs text-aura-text font-medium">Email Address</label>
                        <input
                          id="booking-email"
                          type="email"
                          name="email"
                          value={clientInfo.email}
                          onChange={handleInputChange}
                          className="w-full bg-aura-bg/50 border border-aura-border rounded-xl px-4 py-2.5 text-xs text-aura-text outline-none focus:border-aura-accent focus:bg-white transition-all"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label htmlFor="booking-phone" className="text-xs text-aura-text font-medium">Phone Number</label>
                          {clientInfo.phone && !isValidPhone(clientInfo.phone) && (
                            <span className="text-[10px] text-amber-700 font-medium">Min 10 digits required</span>
                          )}
                        </div>
                        <input
                          id="booking-phone"
                          type="tel"
                          name="phone"
                          value={clientInfo.phone}
                          onChange={handleInputChange}
                          pattern="[\+]?[0-9\s\-\(\)\.]{10,20}"
                          title="Please enter a valid phone number with at least 10 digits"
                          className={`w-full bg-aura-bg/50 border rounded-xl px-4 py-2.5 text-xs text-aura-text outline-none focus:bg-white transition-all ${
                            clientInfo.phone && !isValidPhone(clientInfo.phone)
                              ? 'border-amber-400 focus:border-amber-600'
                              : 'border-aura-border focus:border-aura-accent'
                          }`}
                          placeholder="+1 (555) 000-0000"
                          required
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label htmlFor="booking-notes" className="text-xs text-aura-text font-medium">Special Requests / Notes</label>
                          <span className="text-[10px] text-aura-muted">{clientInfo.notes.length}/500</span>
                        </div>
                        <textarea
                          id="booking-notes"
                          name="notes"
                          rows={2}
                          maxLength={500}
                          value={clientInfo.notes}
                          onChange={handleInputChange}
                          className="w-full bg-aura-bg/50 border border-aura-border rounded-xl px-4 py-2 text-xs text-aura-text outline-none focus:border-aura-accent focus:bg-white transition-all resize-none"
                          placeholder="E.g., allergies, preference for soft/firm massage pressure..."
                        />
                      </div>
                    </div>

                    {/* Summary Card */}
                    <div className="lg:col-span-5 bg-aura-bg/50 rounded-2xl p-5 border border-aura-border space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h5 className="text-[10px] uppercase tracking-widest font-semibold text-aura-accent">Booking Summary</h5>
                        
                        <div className="space-y-2 text-xs text-aura-text font-light">
                          <p className="border-b border-aura-border pb-1">
                            <span className="font-semibold block text-aura-text/80">Treatment:</span>
                            {activeServiceObj?.name}
                          </p>
                          <p className="border-b border-aura-border pb-1">
                            <span className="font-semibold block text-aura-text/80">Practitioner:</span>
                            {specialist === 'any' ? 'Any Available Specialist' : activeSpecialistObj?.name}
                          </p>
                          <p className="border-b border-aura-border pb-1">
                            <span className="font-semibold block text-aura-text/80">Date & Time:</span>
                            {date} at {timeSlot}
                          </p>
                          <p className="flex justify-between font-serif text-sm pt-2">
                            <span>Total Price:</span>
                            <span className="text-aura-accent font-semibold">${activeServiceObj?.price}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Success confirmation */}
                {step === 5 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="p-4 rounded-full bg-green-50 text-green-500 shadow-sm">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl text-aura-text">Appointment Confirmed!</h4>
                      <p className="text-sm text-aura-muted font-light max-w-md mx-auto">
                        Thank you, <span className="font-semibold text-aura-text">{clientInfo.name}</span>. Your reservation has been recorded in our system. A confirmation email and SMS reminder have been sent to you.
                      </p>
                    </div>

                    <div className="p-4 bg-aura-bg/50 border border-aura-border rounded-2xl w-full max-w-sm">
                      <p className="text-[10px] uppercase tracking-widest text-aura-muted">Reservation Code</p>
                      <p className="text-xl font-mono font-bold text-aura-accent tracking-widest mt-1">{bookingCode}</p>
                    </div>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 bg-aura-accent hover:bg-aura-accent-hover text-white font-semibold text-xs tracking-widest uppercase rounded-full shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    >
                      Book Another Visit
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Navigation Row */}
              {step < 5 && (
                <div className="flex items-center justify-between border-t border-aura-border pt-6 mt-6">
                  {/* Prev Button */}
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 border border-aura-accent/25 hover:border-aura-accent text-aura-accent hover:bg-aura-primary/20 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center space-x-1.5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {/* Next / Submit Button */}
                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={
                        (step === 1 && (!category || !service || !activeServiceObj)) ||
                        (step === 2 && !specialist) ||
                        (step === 3 && (!date || !timeSlot || !availableTimeSlots.includes(timeSlot)))
                      }
                      className="px-5 py-2.5 bg-aura-accent text-white hover:bg-aura-accent-hover disabled:opacity-50 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center space-x-1.5 hover:-translate-y-0.5 shadow-sm transition-all duration-300 cursor-pointer"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={
                        isSubmitting ||
                        !clientInfo.name.trim() ||
                        !clientInfo.email.trim() ||
                        !isValidPhone(clientInfo.phone)
                      }
                      className="px-8 py-3.5 bg-aura-accent text-white hover:bg-aura-accent-hover disabled:opacity-50 rounded-full text-xs font-semibold tracking-widest uppercase shadow-md shadow-aura-accent/15 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    >
                      {isSubmitting ? 'Securing Spot...' : 'Confirm Reservation'}
                    </button>
                  )}
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

