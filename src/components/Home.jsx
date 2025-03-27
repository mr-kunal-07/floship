import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import About2 from "./About2";
import Services2 from "./Services2";
import Partners from "./Partners";
import Hero from "./Hero";


const Home = () => {

    return (
        <>

            <Hero />
            <About2 />
            <Partners />
            <Services2 />
        </>
    );
};

export default Home;
