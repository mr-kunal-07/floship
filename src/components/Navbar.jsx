import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation(); // Get the current route

    // Function to check if a link is active
    const isActive = (path) => location.pathname === path;
    const isServiceActive = location.pathname.startsWith("/services");

    return (
        <>
            {/* <Outlet /> */}
            <header className="bg-white flex justify-between items-center px-4 md:px-8 lg:px-12 py-3 shadow-md relative">
                {/* Logo Section */}
                <Link to="/" className="logo z-20 flex items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="ml-2 font-bold text-gray-800 hidden sm:block">
                        <img src="/logoname.png" className="h-10" alt="Logo Name" />
                    </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-20 p-2 text-gray-700 hover:text-[#fb6534]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`w-6 h-6 flex flex-col justify-between transition-all duration-300 ${mobileMenuOpen ? "rotate-45" : ""}`}>
                        <span className={`block h-1 w-6 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                        <span className={`block h-1 w-6 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block h-1 w-6 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
                    </div>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:block flex-1 mx-4 lg:mx-8">
                    <ul className="flex justify-center space-x-3 lg:space-x-8">
                        <li>
                            <Link to="/" className={`font-bold ${isActive("/") ? "text-[#fb6534]" : "text-gray-700"} hover:text-[#fb6534] transition-colors`}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={`font-bold ${isActive("/about") ? "text-[#fb6534]" : "text-gray-700"} hover:text-[#fb6534] transition-colors`}>
                                ABOUT US
                            </Link>
                        </li>

                        {/* Services Dropdown */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setShowServicesDropdown(true)}
                            onMouseLeave={() => setShowServicesDropdown(false)}
                        >
                            <button className={`font-bold flex items-center transition-colors focus:outline-none ${isServiceActive ? "text-[#fb6534]" : "text-gray-700"} group-hover:text-[#fb6534]`}>
                                OUR SERVICES <span className="ml-1">▼</span>
                            </button>
                            {showServicesDropdown && (
                                <div className="absolute top-full left-0 bg-white shadow-lg py-2 px-4 z-10 min-w-40 rounded transition-all duration-300 ease-in-out transform opacity-100 translate-y-0">
                                    <ul className="space-y-2">
                                        {[
                                            { name: "Solar Energy", path: "/services/solar-energy" },
                                            { name: "Courier Booking", path: "/services/courier-booking" },
                                            { name: "Courier Logistics", path: "/services/courier-logistics" },
                                            { name: "B2B", path: "/services/b2b" },
                                            { name: "Utility & Bill Payments", path: "/services/bill-payments" },
                                            { name: "Banking Services", path: "/services/banking" },
                                        ].map((service, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={service.path}
                                                    className={`block ${isActive(service.path) ? "text-[#fb6534]" : "text-gray-700"} hover:text-[#fb6534] transition-colors`}
                                                    onClick={() => setShowServicesDropdown(false)}
                                                >
                                                    {service.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <Link to="/contact" className={`font-bold ${isActive("/contact") ? "text-[#fb6534]" : "text-gray-700"} hover:text-[#fb6534] transition-colors`}>
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Login & Get a Quote Buttons */}
                <div className="hidden md:flex space-x-4 items-center">
                    <Link to="/login" className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition">
                        Login
                    </Link>
                    <Link to="/contact" className="bg-gradient-to-r from-[#fd7f50] to-[#c6461c] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-bold hover:opacity-90 transition">
                        Get a Quote !
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 bg-white z-10 md:hidden transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="flex flex-col justify-center h-full">
                        <nav className="px-8">
                            <ul className="space-y-6 text-center">
                                {[{ name: "HOME", path: "/" }, { name: "ABOUT US", path: "/about" }, { name: "CONTACT US", path: "/contact" }].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.path}
                                            className={`block font-bold text-xl ${isActive(item.path) ? "text-[#fb6534]" : "text-gray-700"} hover:text-[#fb6534]`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <p className="block font-bold text-xl text-gray-700">OUR SERVICES</p>
                                    <ul className="space-y-3 mt-2">
                                        {[
                                            { name: "Solar Energy", path: "/services/solar-energy" },
                                            { name: "Courier Booking", path: "/services/courier-booking" },
                                            { name: "Courier Logistics", path: "/services/courier-logistics" },
                                            { name: "B2B", path: "/services/b2b" },
                                            { name: "Utility & Bill Payments", path: "/services/bill-payments" },
                                            { name: "Banking Services", path: "/services/banking" },
                                        ].map((service, index) => (
                                            <li key={index}>
                                                <Link to={service.path} className={`block text-lg ${isActive(service.path) ? "text-[#fb6534]" : "text-gray-700"} hover:text-[#fb6534]`} onClick={() => setMobileMenuOpen(false)}>
                                                    {service.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                            <Link to="/login" className="block mt-6 text-center text-white bg-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-orange-600" onClick={() => setMobileMenuOpen(false)}>
                                Login
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
