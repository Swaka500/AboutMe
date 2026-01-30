import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400 shadow-lg">
      
      {/* Logo / Name */}
      <div className="text-2xl md:text-3xl font-extrabold text-purple-200 cursor-pointer 
                      transition-transform duration-300 hover:scale-110 hover:text-pink-100 shadow-sm px-3 py-1 rounded-md
                      transform-gpu">
        Derrick Swaka
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-white font-semibold">
        <li>
          <a href="#about" className="hover:text-purple-300 transition-colors duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-purple-300 transition-colors duration-300">
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-300 transition-colors duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-300 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
}
