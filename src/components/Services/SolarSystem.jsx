import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";

const installationImages = [
    "/uploads/solar2.jpg",
    "/uploads/solar3.jpg",
    "/uploads/solar4.jpg",
    "/uploads/1/1.jpg",
    "/uploads/1/2.jpg",
    "/uploads/1/3.jpg",
    "/uploads/1/4.jpg",
    "/uploads/1/5.jpg",
    "/uploads/1/6.jpg",
    "/uploads/1/7.jpg",
    "/uploads/1/8.jpg",
    "/uploads/1/9.jpg",
    "/uploads/1/10.jpg",
    "/uploads/1/11.jpg",
    "/uploads/1/12.jpg",
    "/uploads/1/13.jpg",
    "/uploads/1/14.jpg",
    "/uploads/1/15.jpg",
    "/uploads/1/16.jpg",
    "/uploads/1/17.jpg",
    "/uploads/1/18.jpg",
    "/uploads/1/19.jpg",
];

const solarSolutions = [
    {
        image: "/Solar/ong.png",
        title: "Solar On Grid",
        description: "An on-grid solar electric system generates electricity through solar panels and routes it to the main utility grid.",
    },
    {
        image: "/Solar/offgrid.png",
        title: "Solar Off Grid",
        description: "Off-grid is an alternative way to use the electricity through the battery.",
    },
    {
        image: "/Solar/hybrid.png",
        title: "Solar Hybrid",
        description: "A hybrid solar system is a combination of grid-connected solar system with an option to connect batteries.",
    },
    {
        image: "/Solar/streetlight.png",
        title: "Solar Street Light",
        description: "The solar energy is stored in batteries and used to power an automation street light control system.",
    },
    {
        image: "/Solar/homelight.png",
        title: "Solar Home Light",
        description: "Portable light fixtures composed of LED lamps, photovoltaic solar panels, and rechargeable batteries.",
    },
    {
        image: "/Solar/waterpump.png",
        title: "Solar Water Pump",
        description: "A solar water pump system is essentially an electrical system powered by one or several panels.",
    },
    {
        image: "/Solar/waterheater.png",
        title: "Solar Water Heater",
        description: "A solar water heater utilizes sunlight to heat water for various purposes, typically domestic hot water supply.",
    },
    {
        image: "/Solar/evcharger.png",
        title: "EV Charger",
        description: "An Electric Vehicle (EV) charger is a device used to charge the battery of an electric vehicle.",
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SolarSystem = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <motion.div className="container mx-auto px-6 py-12" initial="hidden" animate="visible" variants={fadeIn}>
            {/* Hero Section */}
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

            {/* Solar Installations Carousel */}
            <motion.div className="mt-16" variants={fadeIn}>
                <h2 className="text-3xl font-bold text-gray-800 text-center">Solar Panel Installations</h2>
                <p className="text-gray-700 text-center mt-2">Our experts at work! See how we install high-quality solar panels.</p>

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

            {/* Lightbox Modal */}
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
                            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-lg">
                                ✖
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Solar Solutions Grid */}
            <motion.div className="mt-16" variants={fadeIn}>
                <h2 className="text-3xl font-bold text-gray-800 text-center">Our Solar Solutions</h2>
                <p className="text-gray-700 text-center mt-2">Explore our range of solar-powered solutions for homes and businesses.</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {solarSolutions.map((solution, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg border bg-white">
                            <img src={solution.image} alt={solution.title} className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">{solution.title}</h3>
                                <p className="text-gray-600 mt-2">{solution.description}</p>
                                <Link to="/services" className="text-[#fb6534] font-bold mt-4 inline-block">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div className="text-center mt-12" variants={fadeIn}>
                <h2 className="text-2xl font-bold text-gray-800">Go Green with Solar Energy!</h2>
                <p className="text-gray-700 mt-2">Contact us to explore solar solutions customized to your needs.</p>
                <Link to="/contact" className="mt-4 inline-block bg-[#fb6534] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition">
                    Get a Quote
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default SolarSystem;
