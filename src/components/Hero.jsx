import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/Hero/del.jpg",
    "/Hero/Solar1.jpg",
    "/Hero/del3.jpg",
    "/Hero/b2b.jpg",
    "/Hero/del1.jpg",
    "/Hero/Solar.jpg",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2900); // Change slide every 2.9 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="relative w-full h-[15vh] md:h-[39vh] lg:h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Slide"
                    className="absolute opacity-100 transition-opacity duration-1000"
                    initial={{ opacity: 0, x: 50 }}  // Slide in from the right
                    animate={{ opacity: 1, x: 0 }}   // Fade in & center
                    exit={{ opacity: 0, x: -50 }}    // Slide out to the left
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </AnimatePresence>
        </motion.div>
    );
};

export default Hero;
