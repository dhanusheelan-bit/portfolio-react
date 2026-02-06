import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function App() {
  /* ================= THEME (DARK / LIGHT) ================= */
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ================= SCROLL + PARALLAX ================= */
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const heroBg = document.querySelector(".hero-bg");

    const onScroll = () => {
      // Reveal animation
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        if (sectionTop < triggerPoint) {
          section.classList.add("show");
        }
      });

      // Parallax effect
      if (heroBg) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
    </>
  );
}
