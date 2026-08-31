import { GithubIcon } from "./Icons";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({ project, onSelect }) {
  const openDetail = () => onSelect(project);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDetail();
    }
  };

  return (
    <motion.div
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      onClick={openDetail}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="project-card__content">
        {project.featured && (
          <span className="project-card__featured-badge">Destacado</span>
        )}

        <div className="project-card__header">
          <h3 className="project-card__title">{project.name}</h3>
          <div className="project-card__links">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
                aria-label={`Ver código de ${project.name} en GitHub`}
                title="Ver repositorio en GitHub"
                className="project-card__link"
              >
                <GithubIcon size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="project-card__tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <span className="project-card__more">Ver detalle &rarr;</span>
      </div>
    </motion.div>
  );
}