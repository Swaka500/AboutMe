import React from "react";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "DevOps", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto mt-24 px-6">

      <h2 className="text-4xl font-bold mb-6 text-purple-400">
        Skills
      </h2>

      {skills.map(skill => (
        <div key={skill.name} className="mb-4">

          <div className="flex justify-between text-gray-300">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="h-3 bg-gray-800 rounded">
            <motion.div
              className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2 }}
            />
          </div>

        </div>
      ))}
    </section>
  );
}
