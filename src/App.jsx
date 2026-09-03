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
import CourierLogistics from "./components/Services/CourierLogistics";
import SolarSystem from "./components/Services/SolarSystem";
import About2 from "./components/About2";
import WhatsAppButton from "./components/WhatsAppButton";
import CursorDot from "./components/CursorDot";  

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
    { path: "/services/courier-logistics", component: <CourierLogistics /> },
    { path: "/services/solar-energy", component: <SolarSystem /> },
  ];

  return (
    
    <>
      {/* Cursor Dot - Always on top */}
      <CursorDot />

      {/* Navbar with mobile menu state */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main className="relative">
        <ScrollToTop />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </>
   
  );
};

export default App;
