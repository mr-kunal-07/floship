import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaHandshake, FaLeaf, FaShieldAlt, FaRocket } from "react-icons/fa";

const About = () => {
    // Core Values Data
    const coreValues = [
        { title: "Customer-Centricity", icon: <FaUsers />, description: "We put our customers at the heart of everything we do, delivering exceptional experiences that meet their evolving needs." },
        { title: "Innovation", icon: <FaLightbulb />, description: "We foster a culture of innovation, embracing new ideas, technologies, and approaches to stay ahead of the curve." },
        { title: "Collaboration", icon: <FaHandshake />, description: "We believe in the power of collaboration, working together with customers, partners, and colleagues to achieve shared goals." },
        { title: "Sustainability", icon: <FaLeaf />, description: "We're committed to sustainable practices that minimize our environmental footprint and promote social responsibility." },
        { title: "Integrity", icon: <FaShieldAlt />, description: "We operate with integrity, transparency, and accountability, upholding the highest standards of ethics and professionalism." },
        { title: "Agility", icon: <FaRocket />, description: "We embrace agility, adapting quickly to change while maintaining efficiency and effectiveness in our solutions." },
    ];

    return (
        <motion.div
            className="bg-white py-16 px-6 md:px-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Section Container */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12">

                {/* Left - Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold text-orange-500 uppercase">
                        Welcome to Floship Ecom Services
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Floship Ecom Services is a pioneering ecommerce solutions provider, revolutionizing the way businesses operate and connect with their customers.
                    </p>

                    <h3 className="text-2xl md:text-4xl font-bold mt-6 text-gray-900">Our Story</h3>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Founded on the principles of innovation, customer-centricity, and collaboration, Floship Ecom Services has rapidly evolved into a leading ecommerce ecosystem.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <a href="#explore" className="bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="w-full md:w-1/2">
                    <motion.img
                        src="/ecom.png"
                        alt="Ecommerce Services"
                        className="rounded-lg shadow-lg w-full"
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </div>
            </div>

            {/* Mission Section */}
            <motion.section className="px-6 py-12 md:px-12 lg:px-24 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="text-center">
                    <h2 className="text-sm text-[#fb6534] font-semibold uppercase">Our Mission</h2>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                        At Floship Ecom Services, We're Committed To:
                    </h1>
                    <ul className="text-gray-600 mt-4 max-w-2xl mx-auto text-left list-disc list-inside">
                        <li>Empowering businesses to succeed in the digital economy</li>
                        <li>Providing innovative ecommerce solutions that drive growth and efficiency</li>
                        <li>Building a sustainable and environmentally responsible ecosystem</li>
                        <li>Delivering exceptional customer experiences through our services</li>
                    </ul>
                </div>

                {/* Core Values Section */}
                <div className="text-center mt-12">
                    <h2 className="text-sm text-[#fb6534] font-semibold uppercase">Our Core Values</h2>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">What We Stand For</h1>
                </div>

                {/* Grid of Core Values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    {coreValues.map((value, index) => (
                        <CoreValueCard key={index} icon={value.icon} title={value.title} description={value.description} />
                    ))}
                </div>

                {/* Why Choose Us Section */}
                <motion.div
                    className="bg-gradient-to-r from-[#fb6534] to-[#c6461c] text-white text-center py-8 px-6 rounded-xl mt-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className="text-xl md:text-2xl font-bold">Why Choose Us</h2>
                    <p className="mt-2 text-white/90 max-w-xl mx-auto">
                        At Floship Ecom Services, we are dedicated to providing top-notch ecommerce solutions that enhance business efficiency, drive growth, and foster long-term success.
                    </p>
                </motion.div>
            </motion.section>
        </motion.div>
    );
};

// 🔹 Reusable Core Value Card Component
const CoreValueCard = ({ icon, title, description }) => (
    <motion.div
        className="bg-white p-6 shadow-md rounded-lg text-center border-t-4 border-[#fb6534] hover:shadow-lg transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
    >
        <div className="flex justify-center mb-3 text-[#fb6534] text-4xl">{icon}</div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
);

export default About;
