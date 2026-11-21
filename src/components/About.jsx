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
    date: 'Titulado · 2019–2024',
    description:
      'Formación en programación, algoritmos, bases de datos, ingeniería de software, desarrollo web y móvil, inteligencia artificial, machine learning y ciencia de datos.',
  },
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Técnico en Soporte Informático',
    subtitle: 'ACTIS · Servicio para ProChile',
    date: 'Febrero 2026',
    description:
      'Experiencia laboral en soporte TI para usuarios y resolución de incidencias.',
  },
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Práctica profesional',
    subtitle: 'ProChile',
    date: 'Enero–marzo 2024',
    description:
      'Apoyo al teletrabajo de más de 70 usuarios y digitalización de más de 70 formularios.',
  },
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Práctica',
    subtitle: 'ProChile',
    date: 'Febrero–noviembre 2022',
    description:
      'Apoyo de soporte TI asociado a más de 40 equipos.',
  },
];

const CERTIFICATIONS = [
  { name: 'Machine Learning con Python', issuer: 'University of Michigan · 2025' },
  { name: 'SQL para Ciencia de Datos', issuer: 'IBM · 2025' },
  { name: 'Visualización de Datos con Python', issuer: 'IBM · 2025' },
  { name: 'Power BI', issuer: 'Santander · 2025' },
  { name: 'Ciencia de Datos e Inteligencia Artificial', issuer: 'IBM · 2023' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <span className="section-label">02. Sobre Mí</span>
        <h2 className="section-title">De soporte TI a software y datos</h2>

        <div className="about__content">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}>
            <p>
              ¡Hola! Soy Matías Andrés Torres Sandoval, Ingeniero Civil
              Informático titulado por la Universidad Andrés Bello. Busco mi
              primera oportunidad profesional en desarrollo de software o
              análisis de datos en Santiago de Chile.
            </p>
            <p>
              He trabajado en soporte TI en ACTIS para ProChile y realicé dos
              prácticas en ProChile. En una de ellas apoyé el teletrabajo de más
              de 70 usuarios y digitalicé más de 70 formularios.
            </p>
            <p>
              Por cuenta propia desarrollo proyectos full stack desplegados e
              integro APIs de modelos de lenguaje. Puedes revisar esos proyectos
              en la sección de proyectos; son trabajos personales y no
              experiencia laboral.
            </p>
            <p>
              Me interesa aportar en equipos de desarrollo de software y análisis
              de datos, BI e IA aplicada. Actualmente busco oportunidades junior
              o trainee en esas áreas.
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

        <div className="about__certifications">
          <h3 className="about__certifications-heading">Certificaciones</h3>
          <ul className="about__certifications-list">
            {CERTIFICATIONS.map((certification) => (
              <li className="about__certification" key={certification.name}>
                <span>{certification.name}</span>
                <small>{certification.issuer}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
