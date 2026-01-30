import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* About Content */}
      <div className="max-w-3xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I am a passionate{" "}
          <span className="text-purple-400 font-semibold">full-stack developer</span> skilled in{" "}
          <span className="text-pink-400 font-semibold">React</span>,{" "}
          <span className="text-blue-400 font-semibold">Node.js</span>, and{" "}
          <span className="text-green-400 font-semibold">DevOps</span>. I enjoy building scalable,
          efficient, and user-friendly applications that deliver real value.
        </p>
        <p className="text-gray-400 text-md md:text-lg leading-relaxed">
          Beyond coding, I explore modern technologies, optimize workflows, and love creating
          sleek, interactive web experiences. My goal is to combine creativity with clean code to
          build impactful solutions.
        </p>
      </div>

      {/* Optional Side Image / Placeholder */}
      <div className="w-60 h-60 bg-gradient-to-tr from-purple-700 via-pink-500 to-red-500 rounded-full shadow-2xl transform transition-transform duration-500 hover:scale-105"></div>
    </section>
  );
}
