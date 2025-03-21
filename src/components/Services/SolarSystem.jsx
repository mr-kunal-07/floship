import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";

const installationImages = [
    "/uploads/solar1.jpg",
    "/uploads/solar2.jpg",
    "/uploads/solar3.jpg",
    "/uploads/solar4.jpg",
];

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SolarSystem = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Close modal when pressing ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <motion.div
            className="container mx-auto px-6 py-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            {/* Section 1 - Hero Banner */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div className="md:w-1/2" variants={fadeIn}>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Sustainable <span className="text-[#fb6534]">Solar Energy</span> Solutions
                    </h1>
                    <p className="text-gray-700 text-lg mt-4">
                        Our renewable energy solutions help businesses and individuals harness the power of solar energy, reducing their carbon footprint and energy costs.
                    </p>
                </motion.div>

                <motion.div className="md:w-1/2" variants={fadeIn}>
                    <img src="/Services/solar.png" alt="Solar Energy" className="rounded-lg shadow-lg w-full object-cover" />
                </motion.div>
            </div>

            {/* Section 2 - Solar Installation Auto-Scrolling Carousel */}
            <motion.div className="mt-16" variants={fadeIn}>
                <h2 className="text-3xl font-bold text-gray-800 text-center">Solar Panel Installations</h2>
                <p className="text-gray-700 text-center mt-2">
                    Our experts at work! See how we install high-quality solar panels.
                </p>

                <div className="mt-8">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                    >
                        {installationImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <motion.img
                                    src={image}
                                    alt={`Installation ${index + 1}`}
                                    className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedImage(image)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </motion.div>

            {/* Lightbox Modal for Enlarged Images */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div className="relative" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
                            <img src={selectedImage} alt="Enlarged View" className="max-w-full max-h-[80vh] rounded-lg" />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-lg"
                            >
                                ✖
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Section 3 - CTA */}
            <motion.div className="text-center mt-12" variants={fadeIn}>
                <h2 className="text-2xl font-bold text-gray-800">
                    Go Green with Solar Energy!
                </h2>
                <p className="text-gray-700 mt-2">
                    Contact us to explore solar solutions customized to your needs.
                </p>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <Link to="/contact" className="mt-4 inline-block bg-[#fb6534] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition">
                        Get a Quote
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SolarSystem;
