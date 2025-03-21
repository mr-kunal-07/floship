import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UtilityBillPayments = () => {
    return (
        <motion.div
            className="container mx-auto px-4 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Hero Banner */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-between"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Text Section */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                        Easy <span className="text-[#fb6534]">Utility & Bill Payments</span>
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Pay all your utility bills hassle-free with our secure and seamless online payment solutions.
                        Electricity, water, gas, internet, and more—manage everything in one place.
                    </p>
                </div>

                {/* Image */}
                <motion.div
                    className="md:w-1/2 mt-6 md:mt-0"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src="/Services/utility.png" alt="Bill Payments" className="rounded-lg shadow-lg w-full" />
                </motion.div>
            </motion.div>

            {/* Services Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Our Bill Payment Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {[
                        { title: "Electricity Bills", text: "Pay your electricity bills on time and avoid late penalties with our instant payment service." },
                        { title: "Water Bills", text: "Ensure uninterrupted water supply by making timely payments effortlessly." },
                        { title: "Internet & Phone Bills", text: "Recharge your phone, broadband, or mobile internet in just a few clicks." }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-bold text-[#fb6534]">{service.title}</h3>
                            <p className="text-gray-700 mt-2">{service.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-gray-800">Pay Your Bills Securely & Instantly!</h2>
                <p className="text-gray-700 mt-2">Experience a seamless way to manage your utility payments.</p>
                <Link to="/contact" className="mt-4 inline-block bg-[#fb6534] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition">
                    Get Started
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default UtilityBillPayments;
