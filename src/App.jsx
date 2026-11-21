import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <div className="portfolio-window">
        <div className="portfolio-window__bar" aria-label="Ventana del portafolio">
          <span className="portfolio-window__lights" aria-hidden="true"><i /><i /><i /></span>
          <span className="portfolio-window__path">matias@portfolio: ~</span>
          <span className="portfolio-window__status"><i /> disponible para proyectos</span>
        </div>
        <Navbar />
        <main id="main">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </MotionConfig>
  );
}

export default App;
