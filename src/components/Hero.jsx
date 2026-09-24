import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__content container">
        <div className="hero__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero__text-wrapper">
            <span className="hero__greeting">Ingeniero civil informático · Chile</span>
            <h1 className="hero__name">
              Matías Torres <span className="hero__name-accent">Sandoval.</span>
            </h1>
            <h2 className="hero__title">Software para problemas concretos.</h2>

            <p className="hero__description">
              Desarrollo aplicaciones para organizar proyectos, gestionar
              operaciones y entender datos. Aquí puedes ver las demos, el
              código y el problema que aborda cada proyecto.
            </p>

            <div className="hero__actions">
              <button className="btn btn--primary" onClick={scrollToProjects}>
                Ver Proyectos <ArrowRight size={18} />
              </button>
              <a
                href={import.meta.env.BASE_URL + "Matias_Torres_Sandoval_CV.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary">
                Ver CV <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="hero__work">
            <div className="hero__work-heading">
              <span>Trabajo seleccionado</span>
              <span>Desarrollo web</span>
            </div>
            <img
              src={import.meta.env.BASE_URL + "projects/devboard.png"}
              alt="Panel de DevBoard con métricas y proyectos"
              className="hero__work-image"
              width="1280"
              height="800"
              loading="eager"
            />
            <figcaption className="hero__work-caption">
              <strong>DevBoard</strong>
              <span>Proyectos, tareas y bugs en un solo lugar.</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
