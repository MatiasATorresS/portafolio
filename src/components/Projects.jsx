import { useState, useCallback, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

const ProjectModal = lazy(() => import("./ProjectModal"));

const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Desarrollo Web" },
  { id: "data", label: "Data & Analytics" },
  { id: "ai", label: "IA & Visión" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState(null);

  const closeModal = useCallback(() => setSelected(null), []);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const sortedProjects = [...filteredProjects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return projects.length;
    return projects.filter((p) => p.category === categoryId).length;
  };

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <span className="section-label">01. Portafolio</span>
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle mb-extra">
          Una selección de mis trabajos recientes, abarcando desarrollo web, análisis
          de datos e inteligencia artificial. Haz clic en cualquier proyecto para ver
          el detalle, el problema que resuelve y, en algunos casos, una demo en vivo.
        </p>

        {/* Category Filters */}
        <div className="projects__filters" aria-label="Filtrar proyectos por categoría">
          {CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                aria-pressed={isActive}
                className={`projects__filter-btn ${isActive ? "projects__filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                <span className="projects__filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Suspense fallback={null}>
        <ProjectModal project={selected} onClose={closeModal} />
      </Suspense>
    </section>
  );
}