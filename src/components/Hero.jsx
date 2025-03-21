import React from "react";
import { useState, useEffect } from "react";

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
        }, 2900); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[20vh] md:h-[40vh] lg:h-screen overflow-hidden">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="Slide"
                    className={`absolute  object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}
        </div>
    );
};

export default Hero;
