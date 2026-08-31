import { motion } from 'framer-motion';
import { Mail, GraduationCap, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './About.css';

const TIMELINE = [
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Ingeniería Civil Informática',
    subtitle: 'Universidad Andrés Bello (UNAB)',
    date: 'Egresado',
    description:
      'Licenciatura en Ciencias de la Ingeniería. Especialización en desarrollo de software, arquitectura de sistemas y análisis de datos.',
  },
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Soporte TI & Gestión Tecnológica',
    subtitle: 'Entornos Corporativos & Públicos',
    date: 'Experiencia Profesional',
    description:
      'Resolución de incidencias complejas, administración de infraestructura, optimización de flujos de trabajo y desarrollo de soluciones técnicas internas.',
  },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <span className="section-label">02. Sobre Mí</span>
        <h2 className="section-title">Ingeniero & Desarrollador</h2>

        <div className="about__content">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}>
            <p>
              ¡Hola! Soy Matías Andrés Torres Sandoval, Ingeniero Civil
              Informático egresado de la Universidad Andrés Bello. Tengo
              experiencia en soporte TI corporativo, desarrollo de software y
              análisis de datos.
            </p>
            <p>
              Me especializo en crear soluciones tecnológicas eficientes, desde
              interfaces de usuario rápidas y hermosas hasta análisis de grandes
              volúmenes de datos. Mi enfoque siempre está en la resolución de
              problemas y la eficiencia operativa.
            </p>
            <p>
              He trabajado en entornos gubernamentales gestionando incidencias y
              optimizando procesos. Actualmente busco oportunidades en áreas de
              desarrollo, infraestructura o análisis de datos.
            </p>

            <div className="about__socials">
              <a
                href="https://github.com/MatiasATorresS"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social-link"
                aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/matiastorressandoval"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social-link"
                aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:matiastorres57@gmail.com"
                className="about__social-link"
                aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Timeline / Trayectoria */}
        <motion.div
          className="about__timeline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}>
          <h3 className="about__timeline-heading">Trayectoria & Formación</h3>
          <div className="about__timeline-grid">
            {TIMELINE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="about__timeline-card">
                  <div className="about__timeline-icon">
                    <Icon size={20} />
                  </div>
                  <div className="about__timeline-info">
                    <span className="about__timeline-date">{item.date}</span>
                    <h4 className="about__timeline-title">{item.title}</h4>
                    <span className="about__timeline-subtitle">
                      {item.subtitle}
                    </span>
                    <p className="about__timeline-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
