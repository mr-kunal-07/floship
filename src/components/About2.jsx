import React from "react";
import { FaUsers, FaLightbulb, FaHandshake, FaLeaf, FaShieldAlt, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const About2 = () => {
    // Core Values Data
    const coreValues = [
        { title: "Customer-Centricity", icon: <FaUsers />, description: "We put our customers at the heart of everything we do, delivering exceptional experiences that meet their evolving needs." },
        { title: "Innovation", icon: <FaLightbulb />, description: "We foster a culture of innovation, embracing new ideas, technologies, and approaches to stay ahead of the curve." },
        { title: "Collaboration", icon: <FaHandshake />, description: "We believe in the power of collaboration, working together with customers, partners, and colleagues to achieve shared goals." },
        { title: "Sustainability", icon: <FaLeaf />, description: "We're committed to sustainable practices that minimize our environmental footprint and promote social responsibility." },
        { title: "Integrity", icon: <FaShieldAlt />, description: "We operate with integrity, transparency, and accountability, upholding the highest standards of ethics and professionalism." },
        { title: "Agility", icon: <FaRocket />, description: "We embrace agility, adapting quickly to change while maintaining efficiency and effectiveness in our solutions." },
    ];

    return (
        <section className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Right - Image */}
                <div className="w-full md:w-1/2">
                    <img src="/ecom.png" alt="Ecommerce Services" className="rounded-lg shadow-lg w-full object-cover" />
                </div>

                {/* Left - Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold text-orange-500 uppercase">
                        Welcome to Floship Ecom Services
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Floship Ecom Services is a pioneering ecommerce solutions provider, revolutionizing the way businesses operate and connect with their customers. With a diverse portfolio of services, we're empowering entrepreneurs, SMEs, and large enterprises to thrive in the digital economy.
                    </p>

                    <h3 className="text-2xl md:text-4xl font-bold mt-6 text-gray-900">
                        Our Story
                    </h3>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Founded on the principles of innovation, customer-centricity, and collaboration, Floship Ecom Services has rapidly evolved into a leading ecommerce ecosystem. Our journey began with a vision to bridge the gap between businesses and their customers, and we've since expanded our offerings to cater to the evolving needs of the market.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Link to="/about" className="bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;
