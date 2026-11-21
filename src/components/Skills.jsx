import { motion } from "framer-motion";
import "./Skills.css";

const skillCategories = [
  {
    title: "Desarrollo de software",
    skills: ["JavaScript", "React", "Node.js", "Express", "APIs REST"]
  },
  {
    title: "Datos & machine learning",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter"]
  },
  {
    title: "Bases de datos & BI",
    skills: ["SQL", "MySQL/TiDB", "MongoDB", "Power BI"]
  },
  {
    title: "Herramientas & IA aplicada",
    skills: ["Git", "Postman", "API de Anthropic", "OpenRouter", "API de OpenAI"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section skills glass" id="skills">
      <div className="container">
        <span className="section-label">03. Habilidades</span>
        <h2 className="section-title">Herramientas aplicadas en proyectos</h2>
        
        <div className="skills__grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skills__category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="skills__category-title">{category.title}</h3>
              <motion.div 
                className="skills__list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx} 
                    className="skills__badge"
                    variants={itemVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
