import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Contact.css';

// Ofuscación simple para prevenir recolección automática por bots/scrapers
const USERNAME = 'matiastorres57';
const DOMAIN = 'gmail.com';
const getEmail = () => `${USERNAME}@${DOMAIN}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = getEmail();
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        throw new Error('Clipboard API unavailable');
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback para entornos que no soporten Clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}>
          <span className="section-label" style={{ textAlign: 'center' }}>
            04. Contacto
          </span>
          <h2
            className="section-title"
            style={{ textAlign: 'center', marginBottom: '30px' }}>
            Hablemos
          </h2>

          <p className="contact__text">
            Estoy abierto a nuevas oportunidades donde pueda aportar valor y
            seguir aprendiendo. Ya sea para un proyecto interesante o una oferta
            laboral, mi bandeja de entrada siempre está abierta.
          </p>

          <div className="contact__actions">
            <a
              href={`mailto:${getEmail()}`}
              className="btn btn--primary contact__btn">
              Saludar <Mail size={18} />
            </a>
            <button
              className="btn btn--secondary contact__copy-btn"
              onClick={handleCopyEmail}
              aria-label="Copiar email al portapapeles">
              {copied ? '¡Copiado!' : 'Copiar Email'}{' '}
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>

          <div className="contact__footer">
            <div className="contact__socials">
              <a
                href="https://github.com/MatiasATorresS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                <GithubIcon size={22} />
              </a>
              <a
                href="https://linkedin.com/in/matiastorressandoval"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <LinkedinIcon size={22} />
              </a>
              <a
                href="/Matias_Torres_Sandoval_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Curriculum">
                <FileText size={22} />
              </a>
            </div>

            <p className="contact__copyright">
              Diseñado y construido por Matías Torres Sandoval <br />
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="toast"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <Check size={16} />
            <span>¡Copiado al portapapeles!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
