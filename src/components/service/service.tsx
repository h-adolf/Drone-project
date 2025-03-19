import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./DroneShow.css"; // Import the styles for the sliding effect

const droneShows = [
  {
    title: "Drone Show for couple's 40th Anniversary",
    description: "40 years of togetherness celebrated in the most beautiful way as all the friends and family members were awestruck by...",
    image: "public/images/gallery1.jpg",
  },
  {
    title: "Drone Show for RIT Chennai's Cultural Fest",
    description: "The ambiance of Chennai with novel designs made the first-ever drone light show of Tamil Nadu a technological marvel...",
    image: "public/images/gallery2.jpg",
  },
  {
    title: "Civil20India2023 Drone Show",
    description: "A fusion of technology, innovation and sustainability witnessed at Coimbatore as the sky of Amrita Vishwa Vidyapeetham...",
    image: "public/images/gallery3.jpg",
  },
];

const droneOptions = [
  { label: "100 Drones", video: "public/100-butterfly.mp4" },
  { label: "200 Drones", video: "public/200-drone.mp4" },
  { label: "300 Drones", video: "public/300-drone.mp4" },
  { label: "400 Drones", video: "public/400-drone.mp4" },
  { label: "500 Drones", video: "public/500-drone.mp4" },
  { label: "1000 Drones", video: "public/1000-drone.mp4" },
  { label: "2000 Drones", video: "public/2000-drone.mp4" },
  { label: "2500 Drones", video: "public/2500-drone.mp4" },
];

const Service: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [selectedDrone, setSelectedDrone] = useState(droneOptions[0]);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval: number | undefined;

    if (!slider) return; 

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        slider.scrollLeft += 1; 
      }, 20);
    };

    startScrolling();

    const stopScrolling = () => clearInterval(scrollInterval);
    slider.addEventListener("mouseenter", stopScrolling);
    slider.addEventListener("mouseleave", startScrolling);

    return () => {
      clearInterval(scrollInterval);
      slider.removeEventListener("mouseenter", stopScrolling);
      slider.removeEventListener("mouseleave", startScrolling);
    };
  }, []);

  return (
    <div className="w-full bg-black text-white">
      {/* Video Background Section */}
      <div className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        >
          <source src="public/service-page-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-10 left-10"
        >
          <h1 className="text-4xl font-semibold">
            Light up the <span className="text-blue-400">Night Sky</span>
          </h1>
          <button className="relative px-6 py-2 rounded-full shadow-lg text-white border-2 border-blue-500 overflow-hidden 
          transition-all duration-300 ease-in-out group">
            <span className="absolute inset-0 bg-blue-500 w-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative z-10 transition-all duration-300">Book a Show</span>
          </button>
        </motion.div>
      </div>

      {/* Who We Are Section */}
      <div className="w-full bg-white text-black py-20 px-10 lg:px-32">
        <h2 className="text-5xl font-semibold text-blue-400">Who We Are</h2>
        <p className="text-lg mt-6 text-gray-600 leading-relaxed">
        Lakshdeep Aviation takes your creative needs to the next level, quite literally. We, at BotLab Dynamics, are a team of seasoned creative professionals that collaborate to efficiently deliver your marketing, branding, and creative needs through live drone shows in a more innovative and clutter-breaking manner. We work at the intersection of technology, innovation and precision therefore sky is the limit at BotLab Dynamics. As a testament to our efforts, we’ve received accolades to our national and international drone projects that garnered considerable media attention over a period of time.
        </p>
        <button className="relative px-6 py-2 rounded-full shadow-lg text-black border-2 border-blue-500 overflow-hidden 
          transition-all duration-300 ease-in-out group">
          <span className="absolute inset-0 bg-blue-500 w-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          <span className="relative z-10 transition-all duration-300">Know more</span>
        </button>
      </div>

      {/* Drone Show Section */}
      <div className="drone-show-section">
        <h2 className="section-title">Gallery</h2>
        <div className="drone-show-slider" ref={sliderRef}>
          {droneShows.map((show, index) => (
            <div key={index} className="drone-show-card">
              <img src={show.image} alt={show.title} className="event-image" />
              <h3>{show.title}</h3>
              <p>{show.description}</p>
              <a href="#" className="check-event">Check Event →</a>
            </div>
          ))}
        </div>
      </div>

      {/* Customize Your Show Section */}
      <div className="w-full bg-white text-black py-16 px-10 lg:px-32 relative">
        <h2 className="text-4xl font-semibold text-blue-400">Customize your <span className="text-black">Show</span></h2>
        <p className="text-lg mt-6 text-gray-600 leading-relaxed">
          Drone Light Shows are a combination of drones programmed to fly in 3D space...
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          {droneOptions.map((option) => (
            <span
              key={option.label}
              className={`cursor-pointer text-lg ${selectedDrone.label === option.label ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-500"}`}
              onClick={() => setSelectedDrone(option)}
            >
              {option.label}
            </span>
          ))}
        </div>
        {/* Video Display */}
        <div className="mt-10 w-full flex justify-center">
          <video key={selectedDrone.video} controls autoPlay loop muted className="w-full max-w-4xl rounded-lg shadow-lg">
            <source src={selectedDrone.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Service;
