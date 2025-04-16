import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const B2b = () => {
    return (
        <motion.div
            className="container mx-auto px-6 py-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            {/* Section 1 - Hero Banner */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Section */}
                <motion.div className="md:w-1/2" variants={slideInLeft}>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Scalable <span className="text-[#fb6534]">B2B Logistics</span> for Your Business
                    </h1>
                    <p className="text-gray-700 text-lg mt-4">
                        We offer seamless, reliable, and cost-effective B2B logistics solutions that empower businesses of all sizes.
                        From warehousing to last-mile delivery, our expertise ensures your goods reach their destination safely and on time.
                    </p>
                </motion.div>

                {/* Image Section */}
                <motion.div className="md:w-1/2" variants={slideInRight}>
                    <img src="/Services/b2b.png" alt="B2B Logistics" className="rounded-lg shadow-lg w-full object-cover" />
                </motion.div>
            </div>

            {/* Section 2 - Services */}
            <motion.div className="mt-16" variants={fadeIn}>
                <h2 className="text-3xl font-bold text-gray-800 text-center">Our B2B Logistics Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                    {/* Card 1 - Warehousing */}
                    <motion.div
                        className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-bold text-[#fb6534]">Warehousing</h3>
                        <p className="text-gray-700 mt-2">
                            Secure storage facilities to manage your inventory efficiently, ensuring smooth supply chain operations.
                        </p>
                    </motion.div>

                    {/* Card 2 - Freight & Shipping */}
                    <motion.div
                        className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-bold text-[#fb6534]">Freight & Shipping</h3>
                        <p className="text-gray-700 mt-2">
                            Flexible shipping options, from bulk transportation to last-mile delivery, customized to your needs.
                        </p>
                    </motion.div>

                    {/* Card 3 - Supply Chain Management */}
                    <motion.div
                        className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-bold text-[#fb6534]">Supply Chain Management</h3>
                        <p className="text-gray-700 mt-2">
                            Streamline your operations with end-to-end supply chain solutions, reducing costs and improving efficiency.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Section 3 - CTA */}
            <motion.div className="text-center mt-12" variants={fadeIn}>
                <h2 className="text-2xl font-bold text-gray-800">
                    Get a Customized B2B Solution for Your Business
                </h2>
                <p className="text-gray-700 mt-2">Contact us today and let’s optimize your logistics.</p>

                <Link to="/contact" className="mt-4 inline-block bg-[#fb6534] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition">
                    Contact Us
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default B2b;
