import React from 'react'
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Particles from './components/Particles';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Hero from './components/Hero';




export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Particles />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      


      
    </div>
  );
}
