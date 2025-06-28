import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import SidePopupButton from "./components/SidePopupButton";
import AboutSection from "./components/AboutUs";
import DroneCards from "./components/DroneCards";
import Service from "./components/service/service"; // Import Service page

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} /> {/* Route for Service page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
      <DroneCards />
      <SidePopupButton text="Book Drone Show " postion="450px" />
      <SidePopupButton text="Fly With Us" postion="520px" />
    </>
  );
};

export default App;
