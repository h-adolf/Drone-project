import React, { useState, useEffect } from "react";
import Herosec from "../assets/images/herosection_image.jpg";

const Hero = () => {
  const [showFullImage, setShowFullImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullImage(true);
    }, 800); // Same duration as animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Slices Animation */}
      {!showFullImage ? (
        <div className="absolute inset-0 flex">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="hero-slice"
              style={{
                backgroundImage: `url(${Herosec})`,
                backgroundSize: "600% 100%", // Ensures perfect slicing
                backgroundPosition: `${(index * 100) / 5}% center`,
                animationDelay: "0s",
              }}
            ></div>
          ))}
        </div>
      ) : (
        // Single Full Image after animation
        <div
          className="absolute final-image inset-0 bg-cover bg-center transition-opacity duration-800"
          style={{
            backgroundImage: `url(${Herosec})`,
          }}
        ></div>
      )}

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 md:px-16 text-white z-10">
        <p className="text-2xl pt-36 mb-2">
          COMPREHENSIVE TRAINING FOR ASPIRING PILOTS
        </p>
        <h1 className="text-4xl md:text-8xl mb-8">
          YOUR Drone journeys <br />
          with OUR WINGS
        </h1>

        <div className="flex flex-wrap gap-4">
          <button className="bg-[#2374e1] text-white px-8 py-3 rounded hover:bg-[#1b5bb9] transition-colors">
            GET STARTED
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
