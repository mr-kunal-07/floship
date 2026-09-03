import React from "react";

// --- FOOTER CONSTANTS ---
const COMPANY = {
  name: "Floship Ecom Services",
  description: "At Floship Services, we are committed to simplifying logistics and providing innovative solar energy and courier logistics solutions for businesses.",
  copyrightStart: 2024,
  phone: "+91 93265 39701 / +91 88502 76788",
};

const NAV_LINKS = [
  { label: "Home", to: "#" },
  { label: "About Us", to: "#" },
  { label: "Our Services", to: "#" },
  { label: "Contact Us", to: "#" },
];

const SERVICE_LINKS = [
  { label: "Solar Energy", to: "/services/solar-energy" },
  { label: "Courier Logistics", to: "/services/courier-logistics" },
];

const SOCIAL_LINKS = [
  { id: "fb", label: "Facebook", href: "#" },
  { id: "tw", label: "Twitter", href: "#" },
  { id: "ig", label: "Instagram", href: "#" },
];

// Simple Icon Components for Footer
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-8 relative overflow-hidden font-sans">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Company Brand */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            FLOSHIP <span className="text-orange-500">ECOM SERVICES</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            {COMPANY.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Navigation</h3>
          <ul className="space-y-4">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.to} className="text-slate-300 hover:text-white hover:underline underline-offset-4 transition-all text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Services</h3>
          <ul className="space-y-4">
            {SERVICE_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.to} className="text-slate-300 hover:text-white hover:underline underline-offset-4 transition-all text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Contact Us</h3>
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p className="flex items-start gap-3">
              <span className="text-orange-500 pt-1 shrink-0"><MapPinIcon /></span>
              3rd Floor, Office No 10&11, Shree Kamdhenu Estate, Next to Vibgyor School, Hometel hotel Road, Chincholi Bunder, Malad (w), Mumbai - 400064.
            </p>
            <p className="flex items-center gap-3">
              <span className="text-orange-500 shrink-0"><PhoneIcon /></span>
              {COMPANY.phone}
            </p>
            <p className="flex items-center gap-3">
              <span className="text-orange-500 shrink-0"><MailIcon /></span>
              info@floshipservices.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
          © {COMPANY.copyrightStart}—{currentYear} {COMPANY.name}. All Rights Reserved.
        </p>
        
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(social => (
            <a 
              key={social.id} 
              href={social.href} 
              className="text-slate-500 hover:text-orange-500 transition-colors text-[10px] font-bold uppercase tracking-widest"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
