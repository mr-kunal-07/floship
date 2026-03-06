import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const isActive = (path) => location.pathname === path;
    const isServiceActive = location.pathname.startsWith("/services");

    const services = [
        { name: "Solar Energy", path: "/services/solar-energy" },
        { name: "Courier Booking", path: "/services/courier-booking" },
        { name: "Courier Logistics", path: "/services/courier-logistics" },
        { name: "B2B Solutions", path: "/services/b2b" },
        { name: "Utility Payments", path: "/services/bill-payments" },
        { name: "Banking Services", path: "/services/banking" },
    ];

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Franchise", path: "/franchise" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
                ${isScrolled ? "bg-white py-3 shadow-sm border-gray-100" : "bg-white py-5 border-transparent"}`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
                    {/* Simple Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" 
                             onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=L"; }} />
                        <img src="/logoname.png" className="h-6 object-contain hidden sm:block" alt="Brand" 
                             onError={(e) => { e.target.style.display = 'none'; }} />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.slice(0, 2).map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path} 
                                className={`text-sm font-semibold transition-colors ${isActive(link.path) ? "text-[#fb6534]" : "text-gray-600 hover:text-[#fb6534]"}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Simple Dropdown */}
                        <div 
                            className="relative group"
                            onMouseEnter={() => setShowServicesDropdown(true)}
                            onMouseLeave={() => setShowServicesDropdown(false)}
                        >
                            <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${isServiceActive ? "text-[#fb6534]" : "text-gray-600 hover:text-[#fb6534]"}`}>
                                Services
                                <ChevronDown className={`w-4 h-4 transition-transform ${showServicesDropdown ? "rotate-180" : ""}`} />
                            </button>
                            
                            <div className={`absolute top-full -left-4 pt-4 w-56 transition-all duration-200 
                                ${showServicesDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                                <div className="bg-white border border-gray-100 shadow-xl rounded-lg py-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.path}
                                            to={service.path}
                                            className={`block px-4 py-2.5 text-sm transition-colors ${isActive(service.path) ? "text-[#fb6534] bg-orange-50" : "text-gray-600 hover:bg-gray-50 hover:text-[#fb6534]"}`}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {navLinks.slice(2).map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path} 
                                className={`text-sm font-semibold transition-colors ${isActive(link.path) ? "text-[#fb6534]" : "text-gray-600 hover:text-[#fb6534]"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Simple CTAs */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/login" className="text-sm font-bold text-gray-600 hover:text-[#fb6534] transition-colors">
                            Login
                        </Link>
                        <Link to="/contact" className="bg-[#fb6534] text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-[#e3562a] transition-colors shadow-sm">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="lg:hidden p-2 text-gray-600"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-black/20 z-[60] lg:hidden transition-opacity ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMobileMenuOpen(false)} />
            
            <div className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white z-[70] shadow-2xl transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                        <span className="font-bold text-lg">Menu</span>
                        <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-gray-600">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex-1 space-y-1">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path} 
                                className={`block p-3 rounded-md font-semibold ${isActive(link.path) ? "text-[#fb6534] bg-orange-50" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <div className="pt-4 mt-4 border-t border-gray-100">
                            <p className="px-3 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Services</p>
                            {services.map((service) => (
                                <Link 
                                    key={service.path} 
                                    to={service.path} 
                                    className={`block p-3 text-sm font-medium ${isActive(service.path) ? "text-[#fb6534]" : "text-gray-600"}`}
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    <div className="pt-6 border-t border-gray-100 space-y-3">
                        <Link to="/login" className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-md font-bold text-gray-700">
                            <LogIn className="w-4 h-4" /> Login
                        </Link>
                        <Link to="/contact" className="block w-full py-3 bg-[#fb6534] text-white text-center rounded-md font-bold">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>

            <div className="h-20" />
        </>
    );
};

export default Navbar;