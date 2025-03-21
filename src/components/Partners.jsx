import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const partners = [
    { name: 'XpressBees', logo: './Patners/xpress1.png' },
    { name: 'Delhivery', logo: '/Patners/delhivery.png' },
    { name: 'Ekart Logistics', logo: '/Patners/Ekart.png' },
    { name: 'Shadowfax', logo: '/Patners/Shadowfax.png' },
    { name: 'Blue Dart', logo: '/Patners/BlueDart.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
];

const Partners = () => {
    return (
        <section className="py-16 relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-800">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="absolute w-[300px] h-[300px] bg-white opacity-20 blur-3xl rounded-full"></div>
            </div>

            {/* Heading */}
            <div className="relative z-10 text-center">
                <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
                    Our Trusted Partners
                </h2>
            </div>

            {/* Swiper for Smooth Scrolling */}
            <div className="relative z-10 overflow-hidden px-6">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={5000}
                    grabCursor={true}
                    allowTouchMove={false}
                    loopAdditionalSlides={partners.length}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 20 },
                        640: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 5, spaceBetween: 50 },
                    }}
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 flex justify-center items-center">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-16 md:h-20 w-auto mx-auto object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Partners;
