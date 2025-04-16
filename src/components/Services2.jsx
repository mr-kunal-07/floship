import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Services2 = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const navigate = useNavigate(); // Hook for navigation

    const stats = [
        { number: 128, label: "Warehouses Managed" },
        { number: 40, label: "Countries Covered" },
        { number: 250, label: "Companies We Help" },
        { number: 520, label: "Team Members" },
    ];

    const services = [
        { title: "Banking Services", description: "Our partnership with leading banks enables us to offer a suite of financial services, including payments, deposits, and loans.", image: "/Services/banking.png" },
        { title: "B2B Ecommerce", description: "Our B2B ecommerce platform connects businesses with suppliers, manufacturers, and distributors, streamlining procurement.", image: "/Services/b2b.png" },
        { title: "Courier and Logistics", description: "Our logistics expertise ensures timely and efficient delivery of packages, parcels, and shipments across the country.", image: "/Services/logistics.jpg" },
        { title: "Solar Energy", description: "Our renewable energy solutions help businesses and individuals harness the power of solar energy, reducing their carbon footprint.", image: "/Services/solar.png" },
        { title: "Utility and Bill Payments", description: "We provide a fast, secure, & user-friendly platform to ensure that all your utility bills are paid on time, hassle-free.", image: "/Services/utility.png" },
    ];

    return (
        <div className="bg-gray-100 py-16 px-6 md:px-20">
            {/* Section Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-orange-500 text-center">Our Services</h2>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mt-3">
                We're proud to offer a comprehensive range of services that cater to various industries and business needs.
            </p>

            {/* Swiper Sliding Cards */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Autoplay]}
                className="mt-10"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition h-full flex flex-col">
                            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg" />
                            <h4 className="text-xl font-semibold mt-4">{service.title}</h4>
                            <p className="text-gray-600 mt-2 flex-grow">{service.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <button
                                    onClick={() => navigate("/services")}
                                    className="text-orange-500 font-semibold hover:underline"
                                >
                                    Read More
                                </button>
                                <button
                                    onClick={() => navigate("/services")}
                                    className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition"
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Running Numbers Section */}
            <div className="mt-16 bg-orange-500 text-white py-10 rounded-lg text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto" ref={ref}>
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h3 className="text-4xl font-bold">
                                {inView && <CountUp start={0} end={stat.number} duration={2} />}+
                            </h3>
                            <p className="text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services2;
