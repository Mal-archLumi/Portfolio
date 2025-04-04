// Projects.jsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Pochi Yangu – Your Community Finance Companion",
    tech: "React + TensorFlow",
    description: "Community-first digital wallet for chama groups and individual finance management.",
    link: "#"
  },
  {
    title: "Mkulima Hub – Your Smart Farming Companion",
    tech: "React + Supabase",
    description: "A community-driven digital wallet enabling secure group contributions, real-time financial tracking, and collaborative decision-making.",
    link: "#"
  },
  {
    title: "E-Commerce Platform",
    tech: "HTML + CSS + JavaScript",
    description: "Full-stack solution for online shopping, featuring user authentication, product management, and payment integration.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <motion.section 
      id="projects" // Added ID here
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="projects-section"
    >
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="card-content">
        <h3>{project.title}</h3>
        <p className="tech">{project.tech}</p>
        <p className="description">{project.description}</p>
        <a href={project.link} className="project-link">
          Explore Project →
        </a>
      </div>
    </motion.div>
  );
}