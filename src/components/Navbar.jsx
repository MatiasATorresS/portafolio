import { useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, CodeXml, House, Mail, UserRound } from "lucide-react";
import "./Navbar.css";

const links = [
  { id: "projects", label: "Proyectos", shortLabel: "Proyectos", icon: BriefcaseBusiness },
  { id: "about", label: "Sobre mí", shortLabel: "Sobre mí", icon: UserRound },
  { id: "skills", label: "Habilidades", shortLabel: "Habilidades", icon: CodeXml },
  { id: "contact", label: "Contacto", shortLabel: "Contacto", icon: Mail },
];

const SECTION_IDS = ["hero", "projects", "about", "skills", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [dockHidden, setDockHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);
  const dockRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateViewportMode = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateViewportMode);
    return () => mediaQuery.removeEventListener("change", updateViewportMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let previousY = window.scrollY;
    const handleDockScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80 || currentY < previousY - 2) {
        setDockHidden(false);
      } else if (currentY > 120 && currentY > previousY + 2 && !dockRef.current?.contains(document.activeElement)) {
        setDockHidden(true);
      }
      previousY = currentY;
    };

    window.addEventListener("scroll", handleDockScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleDockScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const activeLine = isMobile ? window.innerHeight * 0.18 : 72;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top - activeLine) - Math.abs(b.boundingClientRect.top - activeLine));
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      {
        threshold: 0,
        rootMargin: isMobile ? "-18% 0px -65% 0px" : "-70px 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isMobile]);

  const goTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
  };
  const goHome = () => {
    setActiveSection("hero");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <header className="site-header">
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} aria-label="Principal">
        <div className="navbar__inner container">
          <button className="navbar__logo" onClick={goHome} aria-label="Matías Torres, volver al inicio">
            Matías<span className="navbar__logo-accent">.dev</span>
          </button>

          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  className={`navbar__link ${activeSection === link.id ? "navbar__link--active" : ""}`}
                  onClick={() => goTo(link.id)}
                  aria-current={activeSection === link.id ? "location" : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={import.meta.env.BASE_URL + "Matias_Torres_Sandoval_CV.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__cv-btn"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav
        ref={dockRef}
        className={`mobile-dock ${dockHidden ? "mobile-dock--hidden" : ""}`}
        aria-label="Navegación móvil"
        onFocusCapture={() => setDockHidden(false)}
      >
        <button
          className={`mobile-dock__item ${activeSection === "hero" ? "mobile-dock__item--active" : ""}`}
          onClick={goHome}
          aria-label="Inicio"
          aria-current={activeSection === "hero" ? "location" : undefined}
        >
          <House size={19} aria-hidden="true" />
          <span>Inicio</span>
        </button>
        {links.map(({ id, shortLabel, icon: Icon }) => (
          <button
            key={id}
            className={`mobile-dock__item ${activeSection === id ? "mobile-dock__item--active" : ""}`}
            onClick={() => goTo(id)}
            aria-label={shortLabel}
            aria-current={activeSection === id ? "location" : undefined}
          >
            <Icon size={19} aria-hidden="true" />
            <span>{shortLabel}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
