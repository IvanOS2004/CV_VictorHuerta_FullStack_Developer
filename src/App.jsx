import { useEffect, useState } from "react";

import Cursor from "./components/common/Cursor";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./sections/HeroSection";
import UISection from "./sections/UISection";
import ArchitectureSection from "./sections/ArchitectureSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("experience");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />

      <Navbar activeSection={activeSection} />

      <HeroSection />
      <UISection />
      <ArchitectureSection />
      <ProjectsSection />

      <Footer />
    </>
  );
}
