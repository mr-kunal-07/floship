import React from "react";
import { motion } from "framer-motion";
import { FaStore, FaUsers, FaBuilding, FaHandshake } from "react-icons/fa";

const franchiseOptions = [
    {
        title: "Retail Franchise",
        icon: <FaStore className="text-orange-500 text-5xl" />,
        description: "Start your own retail solar franchise and sell top-quality solar products directly to customers.",
    },
    {
        title: "Distributor",
        icon: <FaUsers className="text-orange-500 text-5xl" />,
        description: "Become a distributor and supply solar products to retailers in your region.",
    },
    {
        title: "Master Distributor",
        icon: <FaBuilding className="text-orange-500 text-5xl" />,
        description: "Manage a network of distributors and retailers with exclusive regional rights.",
    },
    {
        title: "Channel Partner",
        icon: <FaHandshake className="text-orange-500 text-5xl" />,
        description: "Partner with us to market and expand solar solutions across multiple regions.",
    },
];

const Franchise = () => {
    return (
        <motion.div
            className="min-h-screen bg-gray-100 p-6 md:p-12 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-3xl md:text-5xl font-bold text-center text-gray-800"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Join Our <span className="text-orange-500">Franchise Network</span>
            </motion.h1>

            <p className="text-gray-600 text-lg md:text-xl mt-4 text-center max-w-3xl">
                Choose a franchise model that fits your business goals and be a part of India's No.1 Solar Franchise Provider.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {franchiseOptions.map((option, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        {option.icon}
                        <h2 className="text-xl font-semibold text-gray-800 mt-4">{option.title}</h2>
                        <p className="text-gray-600 mt-2">{option.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Franchise;
