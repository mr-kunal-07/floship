import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CourierLogistics = () => {
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
                        Reliable <span className="text-[#fb6534]">Courier & Logistics</span> Solutions
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our logistics expertise ensures timely and efficient delivery of packages, parcels, and shipments across the country.
                        Whether you are a business or an individual, we guarantee a seamless shipping experience.
                    </p>
                </div>

                {/* Image */}
                <motion.div
                    className="md:w-1/2 mt-6 md:mt-0"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src="/Services/logistics.jpg" alt="Courier & Logistics" className="rounded-lg shadow-lg w-full" />
                </motion.div>
            </motion.div>

            {/* Services Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Our Courier & Logistics Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {[
                        { title: "Express Delivery", text: "Fast and reliable express delivery services ensuring your parcels reach their destination on time." },
                        { title: "Bulk Shipping", text: "Cost-effective bulk shipping solutions for businesses requiring large-scale transportation." },
                        { title: "Last-Mile Delivery", text: "Efficient last-mile delivery services to ensure your package arrives at the doorstep safely." }
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
                <h2 className="text-2xl font-bold text-gray-800">Let’s Streamline Your Logistics Today!</h2>
                <p className="text-gray-700 mt-2">Contact us for customized shipping solutions tailored to your needs.</p>
                <Link to="/contact" className="mt-4 inline-block bg-[#fb6534] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition">
                    Get Started
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default CourierLogistics;
