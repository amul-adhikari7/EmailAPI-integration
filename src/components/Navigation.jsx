import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-custom-gradient z-10 w-full p-4 font-playfair">
      {/* Navbar Container */}
      <div className="flex items-center justify-between">
        {/* Logo with Link */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="./images/bg.png"
              alt="Pratish Prajwal logo"
              className="w-[150px] h-auto md:w-[233px] md:h-[104px] transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-black hover:text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute z-20 md:static md:flex top-full left-0 w-full bg-gray-100 shadow-lg p-4 flex-col gap-6 items-center transform transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } md:opacity-100 md:pointer-events-auto md:flex-row md:gap-12 md:justify-center md:bg-transparent md:shadow-none`}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
            { to: "/gallery", label: "Gallery" },
          ].map((item) => (
            <li key={item.to} className="relative group">
              <Link
                to={item.to}
                className={`text-lg md:text-xl font-semibold ${
                  location.pathname === item.to
                    ? "text-white"
                    : "text-black hover:text-gray-900"
                } tracking-wide px-4 py-2 transition-all duration-300`}
              >
                {item.label}
                {/* Underline Animation */}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ${
                    location.pathname === item.to ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
