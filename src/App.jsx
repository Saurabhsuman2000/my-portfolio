import { useState } from "react";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS
import Navbar from "./Ui/Navbar";
import MobileMenu from "./Ui/MobileMenu";
import LoadingScreenAnimation from "./Ui/LoadingScreenAnimation";
import Home from "./sections/Home";
import AnimationWaves from "./Ui/AnimationWaves";
import About from "./sections/About";
import Projects from "./sections/Projects";
import { Contact } from "./sections/Contact";
import RevealOnScroll from "./Ui/RevealOnScroll";
import Footer from "./sections/Footer";

import StarsCanvas from "./Ui/StarCanvas";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative z-[10]">
      <StarsCanvas/>
      {!isLoading && (
        <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <RevealOnScroll>
        <Home />
        <AnimationWaves />
      </RevealOnScroll>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
