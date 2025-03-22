import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaHandshake, FaLeaf, FaShieldAlt, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const About2 = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.section
            className="bg-white py-16 px-6 md:px-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Right - Image */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img src="/ecom.png" alt="Ecommerce Services" className="rounded-lg shadow-lg w-full object-cover" />
                </motion.div>

                {/* Left - Text Content */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-orange-500 uppercase">
                        Welcome to Floship Ecom Services
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Floship Ecom Services is a pioneering ecommerce solutions provider, revolutionizing the way businesses operate and connect with their customers. With a diverse portfolio of services, we're empowering entrepreneurs, SMEs, and large enterprises to thrive in the digital economy.
                    </p>

                    <h3 className="text-2xl md:text-4xl font-bold mt-6 text-gray-900">
                        Our Story
                    </h3>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Founded on the principles of innovation, customer-centricity, and collaboration, Floship Ecom Services has rapidly evolved into a leading ecommerce ecosystem. Our journey began with a vision to bridge the gap between businesses and their customers, and we've since expanded our offerings to cater to the evolving needs of the market.
                    </p>

                    {/* CTA Button */}
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Link to="/about" className="bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
                            Learn More
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About2;
