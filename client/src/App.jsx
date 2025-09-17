import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import { Toaster } from "react-hot-toast";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />

      {/* Toaster for toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Animated Icon Navbar */}
      <Navbar />

      {/* Each section wrapped in react-scroll Element */}
      <Element name="home" className="section">
        <Home />
      </Element>

      <Element name="about" className="section">
        <About />
      </Element>

       <Element name="skills" className="section">
        <Skills />
      </Element>

      <Element name="projects" className="section">
        <Projects />
      </Element>
      
      <Element name="certifications" className="section">
        <Certifications />
      </Element>

      <Element name="education" className="section">
        <Education />
      </Element>

      <Element name="contact" className="section">
        <Contact />
      </Element>
    </>
  );
}

export default App;
