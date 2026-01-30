import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Python Calculator",
    description: "Smart arithmetic calculator with validation & error handling.",
    link: "https://github.com/Swaka500/wk-1-python-assg.git",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React, Tailwind, and animations.",
    link: "#",
  },
  {
    title: "DevOps Dashboard",
    description: "Monitoring & automation dashboard built with Node.js.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto mt-24 px-6 relative z-10"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="text-purple-400">Featured</span> Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 
                       shadow-lg hover:shadow-purple-500/50 transition-all duration-500 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-pink-400 hover:text-purple-400 font-semibold transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
