import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
    "/Hero/del.jpg",
    "/Hero/Solar1.jpg",
    "/Hero/del3.jpg",
    "/Hero/b2b.jpg",
];

const Hero = () => {
    const [showVideo, setShowVideo] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const videoTimeout = setTimeout(() => {
            setShowVideo(false);
        }, 5000); // Keep 5s but smoothen transition
        return () => clearTimeout(videoTimeout);
    }, []);

    useEffect(() => {
        if (!showVideo) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000); // Increased for smoother transition
            return () => clearInterval(interval);
        }
    }, [showVideo]);

    return (
        <motion.div
            className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <AnimatePresence mode="wait">
                {showVideo ? (
                    <>
                        <motion.video
                            key="video"
                            src="/Hero/bg.mp4"
                            autoPlay
                            muted
                            playsInline
                            className="absolute mt-[-20vh] w-full h-full object-cover"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }} // Longer fade-out
                        />

                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-50 mt-[-20vh] w-full h-full"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />

                        <motion.div
                            key="text"
                            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white mt-[-10vh]"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <h3 className="text-orange-500 text-base md:text-lg font-semibold">
                                Welcome To Floship
                            </h3>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                                India's No.1 Solar Franchise Provider
                            </h1>
                            <p className="mt-2 text-sm md:text-lg lg:text-xl text-gray-200 max-w-[90%] md:max-w-[70%]">
                                Floship provides top-quality solar franchise solutions in India,<br />
                                helping businesses expand with affordable and sustainable energy.
                            </p>

                            <div className="mt-6 flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/about"
                                    className="bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-semibold hover:bg-orange-600 transition duration-300 transform hover:scale-105"
                                >
                                    Get Started →
                                </Link>
                                <Link
                                    to="/services"
                                    className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-semibold hover:bg-black hover:text-white transition duration-300 hover:scale-110 hover:shadow-lg"
                                >
                                    View Projects →
                                </Link>
                            </div>
                        </motion.div>
                    </>
                ) : (
                    <motion.div className="absolute w-full h-full">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt="Slide"
                            className="absolute opacity-100 transition-opacity duration-1000"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.8, ease: "easeInOut" }} // Smoother fade-in
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Hero;