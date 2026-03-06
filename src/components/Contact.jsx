import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CUSTOM SVG ICONS ---
const IconWrapper = ({ children, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`w-5 h-5 ${className}`}
  >
    {children}
  </svg>
);

const MapPin = () => (
  <IconWrapper>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </IconWrapper>
);

const Mail = () => (
  <IconWrapper>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </IconWrapper>
);

const Phone = () => (
  <IconWrapper>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </IconWrapper>
);

const ArrowRight = () => (
  <IconWrapper className="w-4 h-4">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </IconWrapper>
);

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3768.147452673009!2d72.833733!3d19.188761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6eefb76fa01%3A0x9c4c6bc85e0a9609!2sOld%20Sonal%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1742236691391!5m2!1sen!2sin";

const CONTACT_METHODS = [
  {
    id: "location",
    Icon: MapPin,
    title: "Headquarters",
    text: "Malad West, Mumbai, 400064",
    href: "https://maps.google.com/?q=Old+Sonal+Industrial+Estate+Malad+West+Mumbai",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "email",
    Icon: Mail,
    title: "Email Us",
    text: "info@floshipservices.com",
    href: "mailto:info@floshipservices.com",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "phone",
    Icon: Phone,
    title: "Call Anytime",
    text: "+91 93265 39701 / +91 88502 76788",
    href: "tel:+919326539701",
    color: "bg-orange-50 text-orange-600",
  },
];

const FORM_FIELDS = [
  { id: "name", type: "text", label: "Full Name", placeholder: "Alex Johnson", colSpan: 1 },
  { id: "email", type: "email", label: "Work Email", placeholder: "alex@company.com", colSpan: 1 },
  { id: "subject", type: "text", label: "Subject", placeholder: "Logistics Inquiry", colSpan: 2 },
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Required fields are missing." });
      return;
    }
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_joj056o",
          template_id: "template_vaiivrl",
          user_id: "CIAJEr84e1aYEdQ3o",
          template_params: formData
        })
      });
      if (response.ok) {
        setStatus({ type: "success", message: "Message sent! We'll be in touch soon." });
        setFormData(INITIAL_FORM);
      } else {
        throw new Error();
      }
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header Section - Fluid Typography and Padding */}
      <header className="relative pt-12 pb-8 md:pt-20 md:pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-orange-100 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
              <span className="text-orange-700 font-bold text-[10px] md:text-xs uppercase tracking-widest">Global Support Center</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How can we <br />
              <span className="text-orange-600">help you today?</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed"
            >
              Whether you're shipping across the city or across the globe, our team of dedicated logistics professionals is here to streamline your journey.
            </motion.p>
          </div>
        </div>
      </header>

      {/* Main Content - Grid adapts from 1 to 12 columns */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Info Side - Stacks on mobile, stays left on desktop */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              {CONTACT_METHODS.map((method, idx) => (
                <motion.a
                  key={method.id}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="block group p-5 md:p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 md:p-4 rounded-lg ${method.color} transition-transform group-hover:scale-110`}>
                      <method.Icon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{method.title}</p>
                      <p className="text-sm md:text-md font-semibold text-slate-900 group-hover:text-orange-600 transition-colors truncate">
                        {method.text}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map Card - Responsive height */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm h-64 sm:h-80 lg:h-96 group">
              <iframe
                title="Location"
                src={MAP_EMBED_URL}
                className="w-full h-full border-none filter grayscale-[20%] contrast-[110%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/50 shadow-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[9px] md:text-[10px] font-bold text-orange-600 uppercase tracking-widest">Main Logistics Hub</p>
                    <p className="text-xs md:text-sm font-bold text-slate-900">Malad, Mumbai, India</p>
                  </div>
                  <div className="bg-orange-600 p-1.5 md:p-2 rounded-lg text-white">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side - Centered/Wide padding on mobile */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 p-6 sm:p-10 lg:p-14 rounded-2xl shadow-xl shadow-slate-200/50"
            >
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send an Inquiry</h2>
                <p className="text-sm md:text-base text-slate-500">Fill out the form and a specialist will respond within 24 hours.</p>
              </div>

              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mb-8 p-4 rounded-lg text-sm font-bold flex items-center gap-3 ${
                      status.type === "error" 
                        ? "bg-red-50 text-red-700 border border-red-100" 
                        : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    }`}
                  >
                    <div className={`shrink-0 w-2 h-2 rounded-full ${status.type === "error" ? "bg-red-600" : "bg-emerald-600"}`} />
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {FORM_FIELDS.map((field) => (
                    <div key={field.id} className={field.colSpan === 2 ? "md:col-span-2" : ""}>
                      <label className="block text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        disabled={isSubmitting}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 md:py-4 text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all outline-none text-sm font-medium"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5">
                  <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Requirement Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Tell us about your shipment volume, origin, and destination..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 md:py-4 text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all outline-none resize-none text-sm font-medium leading-relaxed"
                  />
                </div>

                <div className="pt-2 md:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 md:py-5 rounded-lg font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? <Spinner /> : "Confirm & Send"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;