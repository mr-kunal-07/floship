import React, { useState } from "react";
import { motion } from "framer-motion";

const CourierBooking = () => {
    const [formData, setFormData] = useState({
        senderName: "",
        senderAddress: "",
        receiverName: "",
        receiverAddress: "",
        packageWeight: "",
        packageType: "",
        deliverySpeed: "Standard",
    });

    // Handle form change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Courier Booking Details:", formData);
        alert("Courier Booking Successful! Our team will contact you soon.");
    };

    return (
        <motion.div
            className="container mx-auto px-4 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Hero Section */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold text-gray-800">
                    <span className="text-[#fb6534]">Courier</span> Booking
                </h1>
                <p className="text-gray-600 mt-2">
                    Book your courier in a few easy steps and enjoy fast, reliable delivery.
                </p>
            </motion.div>

            {/* Booking Form */}
            <motion.div
                className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Enter Booking Details</h2>
                <form onSubmit={handleSubmit}>
                    {/* Sender Details */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <label className="block text-gray-700 font-medium">Sender Name</label>
                        <input
                            type="text"
                            name="senderName"
                            value={formData.senderName}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-[#fb6534] outline-none"
                            placeholder="Enter sender's name"
                        />
                    </motion.div>

                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label className="block text-gray-700 font-medium">Sender Address</label>
                        <input
                            type="text"
                            name="senderAddress"
                            value={formData.senderAddress}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-[#fb6534] outline-none"
                            placeholder="Enter sender's address"
                        />
                    </motion.div>

                    {/* Receiver Details */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <label className="block text-gray-700 font-medium">Receiver Name</label>
                        <input
                            type="text"
                            name="receiverName"
                            value={formData.receiverName}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-[#fb6534] outline-none"
                            placeholder="Enter receiver's name"
                        />
                    </motion.div>

                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <label className="block text-gray-700 font-medium">Receiver Address</label>
                        <input
                            type="text"
                            name="receiverAddress"
                            value={formData.receiverAddress}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-[#fb6534] outline-none"
                            placeholder="Enter receiver's address"
                        />
                    </motion.div>

                    {/* Package Details */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <label className="block text-gray-700 font-medium">Package Weight (kg)</label>
                        <input
                            type="number"
                            name="packageWeight"
                            value={formData.packageWeight}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-[#fb6534] outline-none"
                            placeholder="Enter package weight"
                        />
                    </motion.div>

                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <label className="block text-gray-700 font-medium">Package Type</label>
                        <input
                            type="text"
                            name="packageType"
                            value={formData.packageType}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-[#fb6534] outline-none"
                            placeholder="Enter package type (e.g., documents, electronics)"
                        />
                    </motion.div>

                    {/* Delivery Speed */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <label className="block text-gray-700 font-medium">Delivery Speed</label>
                        <select
                            name="deliverySpeed"
                            value={formData.deliverySpeed}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-[#fb6534] outline-none"
                        >
                            <option value="Standard">Standard (3-5 Days)</option>
                            <option value="Express">Express (1-2 Days)</option>
                            <option value="Same Day">Same Day Delivery</option>
                        </select>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full bg-[#fb6534] text-white font-bold px-4 py-2 rounded-lg hover:opacity-90"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Confirm Booking
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default CourierBooking;
