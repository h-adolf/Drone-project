import React, { useState, useEffect } from "react";
import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-opacity-90 px-4 py-2 flex items-center justify-between transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center">
        <div className="p-2 rounded">
          <Link to="/">
            <img
              src="/images/logo_white.png"
              alt="Logo"
              className="h-20 w-auto cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center pr-4 space-x-5">
          <Link to="/" className="text-white hover:underline hover:underline-offset-4 hover:decoration-2">
            HOME
          </Link>
          <Link to="/service" className="text-white hover:underline hover:underline-offset-4 hover:decoration-2">
            SERVICES
          </Link>
          <a href="#about" className="text-white hover:underline hover:underline-offset-4 hover:decoration-2">
            ABOUT
          </a>
          <a href="#contact" className="text-white hover:underline hover:underline-offset-4 hover:decoration-2">
            CONTACT US
          </a>
        </div>
        <button className="text-white">
          <Search className="w-6 h-6" />
        </button>
        <button className="text-white md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
