import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Service Data
const services = [
    { title: "Online Banking", description: "Access and manage your bank accounts securely anytime, anywhere." },
    { title: "Loans & Credit", description: "Get easy access to personal loans, business loans, and credit cards with minimal paperwork." },
    { title: "Investments & Savings", description: "Secure your future with smart investment and savings options tailored for you." },
];

const BankingServices = () => {
    return (
        <motion.div
            className="container mx-auto px-4 py-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Section 1 - Hero Banner */}
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Text Section */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                        Secure & Reliable <span className="text-[#fb6534]">Banking Services</span>
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Simplified banking solutions for personal and business needs.
                        From account management to financial transactions, experience seamless banking with us.
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="md:w-1/2 mt-6 md:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src="/Home/bank2.png" alt="Banking Services" className="rounded-lg shadow-lg w-full" loading="lazy" />
                </motion.div>
            </div>

            {/* Section 2 - Services */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Our Banking Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>

            {/* Section 3 - CTA */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h2 className="text-2xl font-bold text-gray-800">Experience Banking Made Simple!</h2>
                <p className="text-gray-700 mt-2">Join us for safe and convenient banking services.</p>
                <Link to="/contact" className="mt-4 inline-block bg-[#fb6534] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition">
                    Get Started
                </Link>
            </motion.div>
        </motion.div>
    );
};

// 🔹 Reusable Service Card Component
const ServiceCard = ({ title, description }) => (
    <motion.div
        className="p-6 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
    >
        <h3 className="text-xl font-bold text-[#fb6534]">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
    </motion.div>
);

export default BankingServices;
