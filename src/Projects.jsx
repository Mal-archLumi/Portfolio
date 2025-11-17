
import { motion } from 'framer-motion';
import DevKazi from './assets/Devkazi.png';
import mkulimaImage from './assets/mkulimahub.jpg';
import kenyamartImage from './assets/kenyamart.jpg';

const projects = [
  {
    title: "DevKazi",
    tech: "Flutter + nestjs + Mongodb",
    description: "Devkazi is a team-focused micro-internship platform where students form small groups, collaborate on, and complete real industry-style projects with integrated tools for teamwork, progress tracking, and verified experience.",
    image: DevKazi,
    liveLink: "#",
    codeLink: "https://github.com/Mal-ArchLumi/DevKazi"
  },
  {
    title: "Mkulima Hub",
    tech: "Flutter + Supabase",
    description: "A community-driven app for farmers that has a marketplace,a community section,post section and more.",
    image: mkulimaImage,
    liveLink: "#",
    codeLink: "https://github.com/Mal-ArchLumi/mkulima-hub"
  },
  {
    title: "KenyaMart",
    tech: "HTML + CSS + JavaScript",
    description: "Full-stack e-commerce platform with user authentication and payment integration.",
    image: kenyamartImage,
    liveLink: "https://kenyamart.netlify.app/",
    codeLink: "https://github.com/Mal-archLumi/Urban-Contemporary"
  }
];

export default function Projects() {
  return (
    <motion.section 
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
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
      whileHover={{ scale: 1.03 }}
    >
      <img src={project.image} alt={project.title} />
      <div className="card-content">
        <h3>{project.title}</h3>
        <p className="tech">{project.tech}</p>
        <p className="description">{project.description}</p>
        <div className="project-links">
          <a href={project.liveLink} className="project-link">View Live</a>
          <a href={project.codeLink} className="project-link">View Code</a>
        </div>
      </div>
    </motion.div>
  );
}