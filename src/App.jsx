import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Join from "./components/Join";
import Contact from "./components/Contact";
import Login from "./components/Login";
import B2b from "./components/Services/B2b";
import CourierLogistics from "./components/Services/CourierLogistics";
import SolarSystem from "./components/Services/SolarSystem";
import UtilityBillPayments from "./components/Services/UtilityBillPayments";
import BankingServices from "./components/Services/BankingServices";
import CourierBooking from "./components/Services/CourierBooking";
import About2 from "./components/About2";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Define routes as an array of objects
  const routes = [
    { path: "/", component: <Home mobileMenuOpen={mobileMenuOpen} /> },
    { path: "/about", component: <About /> },
    { path: "/about1", component: <About2 /> },
    { path: "/services", component: <Services /> },
    { path: "/join", component: <Join /> },
    { path: "/contact", component: <Contact /> },
    { path: "/login", component: <Login /> },
    { path: "/services/b2b", component: <B2b /> },
    { path: "/services/courier-logistics", component: <CourierLogistics /> },
    { path: "/services/solar-energy", component: <SolarSystem /> },
    { path: "/services/bill-payments", component: <UtilityBillPayments /> },
    { path: "/services/banking", component: <BankingServices /> },
    { path: "/services/courier-booking", component: <CourierBooking /> },
  ];

  return (
    
     <>
      {/* Navbar with mobile menu state */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main className="relative">
        <ScrollToTop />
        <Routes>
          {/* 🔹 Dynamic route mapping using `.map()` */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </main>

      {/* ✅ WhatsApp Button (visible on all pages) */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
     </>
   
  );
};

export default App;
