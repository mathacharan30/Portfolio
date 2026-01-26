import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Stats from "./sections/Stats";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Stats />
        <Work />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
