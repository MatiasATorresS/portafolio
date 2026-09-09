import { GithubIcon } from "./Icons";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

const CATEGORY_LABELS = { web: "Desarrollo web", data: "Datos & análisis", ai: "IA & visión" };

export default function ProjectCard({ project, onSelect }) {
  const openDetail = () => onSelect(project);

  return (
    <motion.article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
    >
      <button
        className={`project-card__preview project-card__preview--${project.category}`}
        onClick={openDetail}
        aria-label={`Vista previa y detalle de ${project.name}`}
      >
        {project.image ? (
          <img
            src={import.meta.env.BASE_URL + project.image}
            alt={`Captura de ${project.name}`}
            width="1280"
            height="800"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="project-card__cover">
            <span className="project-card__cover-index" aria-hidden="true">{String(project.id).padStart(2, "0")} /</span>
            <span className="project-card__cover-title">{project.coverLabel}</span>
            <span className="project-card__cover-detail">{project.coverDetail}</span>
          </span>
        )}
        <span className="project-card__preview-hint" aria-hidden="true">Explorar proyecto ↗</span>
      </button>

      <div className="project-card__content">
        <div className="project-card__eyebrow">
          <span>{CATEGORY_LABELS[project.category]}</span>
          {project.featured && <span className="project-card__featured-badge">Destacado</span>}
        </div>

        <div className="project-card__header">
          <h3 className="project-card__title">{project.name}</h3>
        </div>

        <p className="project-card__description">
          {project.summary || project.description}
        </p>

        <div className="project-card__tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
          {project.tags.length > 3 && (
            <span className="project-card__tag project-card__tag--extra" aria-label={`${project.tags.length - 3} tecnologías más en el detalle`}>+{project.tags.length - 3}</span>
          )}
        </div>

        <div className="project-card__footer">
          <button className="project-card__more" onClick={openDetail}>Ver detalle &rarr;</button>
          <div className="project-card__links">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo en vivo de ${project.name}`}
                title="Ver demo en vivo"
                className="project-card__link"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código de ${project.name} en GitHub`}
                title="Ver repositorio en GitHub"
                className="project-card__link"
              >
                <GithubIcon size={20} />
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.article>
  );
}
