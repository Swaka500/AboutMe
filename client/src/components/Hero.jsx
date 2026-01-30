import React from "react";
import { useEffect, useState } from "react";

const text= "Hi, Welcome 👋";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center mt-20 text-center">
      <h1 className="text-5xl font-bold text-purple-600">{displayed}</h1>
      <img 
        src="/image1.jpeg"
        className="mt-6 w-52 rounded-xl shadow-lg hover:scale-105 transition"
      />
      <a href="#projects" className="mt-6 text-purple-600 text-2xl font-bold">
       
      </a>
    </section>
  );
}
