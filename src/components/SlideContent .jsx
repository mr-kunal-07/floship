import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import About2 from "./About2";
import Services2 from "./Services2";
import { Link } from "react-router-dom";
import Partners from "./Partners";

const SlideContent = () => {

    const slides = [
        { image: "/Home/pkg.png", tagline: "Your package, our priority!", subtext: "Get your packages delivered on time with our efficient and cost-effective courier services!" },
        { image: "/Home/b2b1.png", tagline: "Seamless B2B Logistics Solutions!", subtext: "Streamline your business operations with our reliable and scalable courier services, tailored for bulk and corporate shipments." },
        { image: "/Home/solar.png", tagline: "GO SOLAR For a Sustainable Future", subtext: "Join the Solar Revolution & Power Your Home Efficiently" },
        { image: "/Home/bank.png", tagline: "Smart Banking at Your Fingertips", subtext: "Seamless Transactions & Secure Banking Solutions" },
        { image: "/Home/ev.png", tagline: "Power Up with EV Charging Solutions", subtext: "Charge Faster, Drive Longer – The Future is Electric" },
        { image: "/Home/pkg2.png", tagline: "Your package, our priority!", subtext: "Get your packages delivered on time with our efficient and cost-effective courier services!" },
        { image: "/Home/b2b2.png", tagline: "Seamless B2B Logistics Solutions!", subtext: "Streamline your business operations with our reliable and scalable courier services, tailored for bulk and corporate shipments." },
        { image: "/Home/solar2.png", tagline: "GO SOLAR For a Sustainable Future", subtext: "Join the Solar Revolution & Power Your Home Efficiently" },
        { image: "/Home/bank2.png", tagline: "Smart Banking at Your Fingertips", subtext: "Seamless Transactions & Secure Banking Solutions" },
        { image: "/Home/ev1.png", tagline: "Power Up with EV Charging Solutions", subtext: "Charge Faster, Drive Longer – The Future is Electric" },
    ];

     const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <AnimatePresence mode="wait">
                {currentIndex % 2 === 0 ? (
                    <>
                        {/* Text on Left */}
                        <motion.div
                            key={currentIndex + "text"}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                                {slides[currentIndex].tagline} <span className="text-[#fb6534]">with Floship Services</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-700">{slides[currentIndex].subtext}</p>
                            <div className="mt-6 flex space-x-4">
                                <Link to="/services" className="bg-[#fb6534] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:opacity-80 transition">
                                    Explore More
                                </Link>
                                <Link to="/contact" className="border border-[#fb6534] text-[#fb6534] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#fb6534] hover:text-white transition">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>

                        {/* Image on Right */}
                        <motion.div
                            key={currentIndex + "image"}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <img src={slides[currentIndex].image} alt={slides[currentIndex].tagline} className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
                        </motion.div>
                    </>
                ) : (
                    <>
                        {/* Image on Left */}
                        <motion.div
                            key={currentIndex + "image"}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <img src={slides[currentIndex].image} alt={slides[currentIndex].tagline} className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
                        </motion.div>

                        {/* Text on Right */}
                        <motion.div
                            key={currentIndex + "text"}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                                {slides[currentIndex].tagline} <span className="text-[#fb6534]">with Floship Services</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-700">{slides[currentIndex].subtext}</p>
                            <div className="mt-6 flex space-x-4">
                                <Link to="/services" className="bg-[#fb6534] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:opacity-80 transition">
                                    Explore More
                                </Link>
                                <Link to="/contact" className="border border-[#fb6534] text-[#fb6534] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#fb6534] hover:text-white transition">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default SlideContent 