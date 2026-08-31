import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import "./ProjectModal.css";

const CATEGORY_LABELS = {
  web: "Desarrollo Web",
  data: "Data & Analytics",
  ai: "IA & Visión",
};

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const previousFocus = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!project) return;

    previousFocus.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeydown = (e) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", handleKeydown);

    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeydown);
      if (previousFocus.current instanceof HTMLElement) {
        previousFocus.current.focus();
      }
    };
  }, [project]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => onCloseRef.current()}
        >
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="modal__header">
              <div className="modal__meta">
                <span className="modal__category">
                  {CATEGORY_LABELS[project.category] || project.category}
                </span>
                <h3 className="modal__title" id="modal-title">
                  {project.name}
                </h3>
              </div>
              <button
                ref={closeRef}
                className="modal__close"
                onClick={() => onCloseRef.current()}
                aria-label="Cerrar detalle del proyecto"
              >
                <X size={22} />
              </button>
            </div>

            {project.demoUrl ? (
              <div className="modal__preview">
                <div className="modal__preview-bar">
                  <span className="modal__preview-url">{project.demoUrl}</span>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__preview-open"
                  >
                    Abrir pestaña <ExternalLink size={14} />
                  </a>
                </div>
                <iframe
                  className="modal__iframe"
                  src={project.demoUrl}
                  title={`Vista previa en vivo de ${project.name}`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            ) : (
              <div className="modal__preview modal__preview--empty">
                <p>La demo en vivo está en camino. Por ahora, el código está disponible en GitHub.</p>
              </div>
            )}

            <div className="modal__body">
              <p className="modal__description">{project.description}</p>
              <div className="modal__row">
                <h4>Problema</h4>
                <p>{project.problem}</p>
              </div>
              <div className="modal__row">
                <h4>Solución</h4>
                <p>{project.solution}</p>
              </div>
            </div>

            <div className="modal__tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="modal__tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="modal__footer">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  <GithubIcon size={18} /> Ver en GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Demo en vivo <ExternalLink size={18} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}