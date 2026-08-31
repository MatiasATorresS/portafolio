import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__background"></div>

      <div className="hero__content container">
        <div className="hero__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero__text-wrapper">
            <span className="hero__greeting">Hola, soy</span>
            <h1 className="hero__name">Matías Torres Sandoval.</h1>
            <h2 className="hero__title">Construyo experiencias digitales.</h2>

            <p className="hero__description">
              Ingeniero Civil Informático especializado en desarrollo de
              software, análisis de datos y eficiencia tecnológica.
            </p>

            <div className="hero__actions">
              <button className="btn btn--primary" onClick={scrollToProjects}>
                Ver Proyectos <ArrowRight size={18} />
              </button>
              <a
                href="/Matias_Torres_Sandoval_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary">
                Curriculum Vitae <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hero__avatar">
            <picture>
              <source srcSet="/profile_avatar.webp" type="image/webp" />
              <img
                src="/profile_avatar.png"
                alt="Matías Torres Sandoval"
                className="hero__avatar-img"
                width="280"
                height="280"
                loading="eager"
              />
            </picture>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
