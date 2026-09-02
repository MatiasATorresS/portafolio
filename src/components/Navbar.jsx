import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

const links = [
  { id: "projects", label: "Proyectos" },
  { id: "about", label: "Sobre Mí" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contacto" },
];

const SECTION_IDS = ["hero", "projects", "about", "skills", "contact"];

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), a[href]:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy via IntersectionObserver
  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.15, 0.3, 0.5],
        rootMargin: "-80px 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Cerrar menú al volver a tamaño desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const handleChange = (e) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Bloquear scroll, cerrar con Escape y gestionar foco mientras el menú está abierto
  useEffect(() => {
    if (!mobileOpen) return;

    previousFocus.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key === "Tab") {
        const focusables = menuRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeydown);

    const firstFocusable = menuRef.current?.querySelector("button, a");
    firstFocusable?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeydown);
      if (previousFocus.current instanceof HTMLElement) {
        previousFocus.current.focus();
      }
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  const handleNav = (id) => {
    closeMenu();
    document.body.style.overflow = "";
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHome = () => {
    closeMenu();
    document.body.style.overflow = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <nav className={`navbar ${scrolled || mobileOpen ? "navbar--scrolled" : ""}`} aria-label="Principal">
        <div className="navbar__inner container">
          <button className="navbar__logo" onClick={handleHome}>
            <span className="navbar__logo-accent">{"<"}</span>
            MT
            <span className="navbar__logo-accent">{" />"}</span>
          </button>

          <ul className="navbar__links">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  className={`navbar__link ${activeSection === l.id ? "navbar__link--active" : ""}`}
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                  aria-current={activeSection === l.id ? "true" : undefined}
                >
                  {l.label}
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

          <button
            className="navbar__toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            className="navbar__mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="navbar__mobile-links">
              {links.map((l, idx) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                >
                  <button
                    className={`navbar__mobile-link ${activeSection === l.id ? "navbar__mobile-link--active" : ""}`}
                    onClick={() => handleNav(l.id)}
                    aria-current={activeSection === l.id ? "true" : undefined}
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
              <li>
                <a
                  href={import.meta.env.BASE_URL + "Matias_Torres_Sandoval_CV.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__cv-btn navbar__mobile-cv"
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}