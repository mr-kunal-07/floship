import React from "react";

const FloshipServices = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Video */}
            <iframe
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="https://www.youtube.com/embed/TzfnlPxCZv0?autoplay=1&loop=1&mute=1&playlist=TzfnlPxCZv0"
                title="Floship Services Background"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-5xl font-bold mb-4">Floship Services</h1>
                <p className="text-lg mb-6 max-w-2xl">
                    Empowering businesses with cutting-edge IT solutions, seamless logistics, and cloud-based services.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg">
                    Explore Our Services
                </button>
            </div>
        </div>
    );
};

export default FloshipServices;