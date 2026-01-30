import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-5 py-10 relative z-10 bg-gradient-to-r from-purple-900 via-black to-pink-900 text-gray-300 backdrop-blur-lg border-t border-purple-500/20">>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Follow Me Heading */}
        <div className="text-2xl md:text-3xl font-bold text-white">
          Follow Me
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-gray-300">
          <a
            href="https://github.com/Swaka500"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/derrick-swaka-9639412b4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:marvelswaka@gmail.com"
            className="text-3xl hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>

      {/* Footer Bottom Text */}
      <div className="mt-8 text-center text-gray-400 text-sm">
         <span className="text-purple-400 font-semibold text-3xl">&copy; 2026 Made By Swaka.</span>
      </div>

    </footer>
  );
}
