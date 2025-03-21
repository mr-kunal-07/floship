import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-bold">FLOSHIP ECOM SERVICES</h2>
                    <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                        At Floship Services, we are committed to simplifying logistics and
                        providing innovative solutions for businesses. We specialize in
                        seamless courier logistics, solar energy solutions, utility bill payments,
                        and banking services to meet your needs efficiently.
                    </p>
                </div>

                {/* Pages */}
                <div>
                    <h3 className="text-lg font-bold text-orange-400">Pages</h3>
                    <ul className="mt-2 space-y-2 text-gray-300">
                        <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
                        <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-orange-400">Our Services</Link></li>
                        <li><Link to="/contact" className="hover:text-orange-400">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h3 className="text-lg font-bold text-orange-400">Our Services</h3>
                    <ul className="mt-2 space-y-2 text-gray-300">
                        <li><Link to="/b2b" className="hover:text-orange-400">B2B</Link></li>
                        <li><Link to="/courier-booking" className="hover:text-orange-400">Courier Booking</Link></li>
                        <li><Link to="/logistics" className="hover:text-orange-400">Courier Logistics</Link></li>
                        <li><Link to="/solar-energy" className="hover:text-orange-400">Solar Energy</Link></li>
                        <li><Link to="/utility-payments" className="hover:text-orange-400">Utility & Bill Payments</Link></li>
                        <li><Link to="/banking-services" className="hover:text-orange-400">Banking Services</Link></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-bold text-orange-400">Contact Information</h3>
                    <p className="mt-2 text-gray-300 flex items-start">
                        <FaMapMarkerAlt className="text-orange-400 mr-2" />
                        430/431, New Sonal Industrial Estate, CHS Ltd, Kanchpada Link Road,
                        Opp Movie Time Theater, Malad West, Mumbai - 400064.
                    </p>
                    <p className="mt-2 text-gray-300 flex items-center">
                        <FaPhoneAlt className="text-orange-400 mr-2" /> +91 93721 76665
                    </p>
                    <p className="mt-2 text-gray-300 flex items-center">
                        <FaEnvelope className="text-orange-400 mr-2" /> info@floshipservices.com
                    </p>
                    <p className="mt-2 text-gray-300 flex items-center">
                        <FaGlobe className="text-orange-400 mr-2" />
                        <a href="https://www.floshipservices.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                            www.floshipservices.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 border-t border-gray-600 pt-5 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                    © 2024 Floship Services. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                    <a href="#" className="bg-orange-400 p-2 rounded-full hover:bg-orange-500">
                        <FaFacebookF className="text-black text-lg" />
                    </a>
                    <a href="#" className="bg-orange-400 p-2 rounded-full hover:bg-orange-500">
                        <FaTwitter className="text-black text-lg" />
                    </a>
                    <a href="#" className="bg-orange-400 p-2 rounded-full hover:bg-orange-500">
                        <FaInstagram className="text-black text-lg" />
                    </a>
                    <a href="#" className="bg-orange-400 p-2 rounded-full hover:bg-orange-500">
                        <FaArrowUp className="text-black text-lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
