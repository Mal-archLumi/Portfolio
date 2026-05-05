import { motion } from 'framer-motion';
import ProfilePhoto from './assets/profile.jpeg';
import { sectionHead, staggerContainer, fadeUp, slideLeft, cardHover } from './motion';

const principles = [
  {
    title: 'Systems before features',
    desc: 'I design the data model and architecture before writing UI. Every feature is a consequence of a well-defined system.',
  },
  {
    title: 'Ship, then iterate',
    desc: 'Working software over perfect software. I deploy early, gather real feedback, and refine based on actual usage.',
  },
  {
    title: 'Full ownership',
    desc: 'I own the full stack — from database schema to UI interaction. No handoff gaps, no context loss.',
  },
  {
    title: 'Security by default',
    desc: 'Auth, input validation, and access control are built in from day one, not bolted on after.',
  },
];

export default function OperatingModel() {
  return (
    <section id="model" className="sys-section">
      <motion.div
        variants={sectionHead}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="sys-label">Operating Model</p>
        <h2 className="sys-heading">How I build</h2>
        <p className="sys-subtext">
          A set of principles that govern how I approach every project — from initial scoping
          to production deployment.
        </p>
      </motion.div>

      <motion.div
        className="ops__grid"
        variants={staggerContainer(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {principles.map((p, i) => (
          <motion.div
            key={i}
            className="ops__principle sys-card"
            variants={fadeUp}
            whileHover={cardHover}
          >
            <div className="ops__num">{String(i + 1).padStart(2, '0')}</div>
            <div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="ops__profile"
        variants={slideLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img src={ProfilePhoto} alt="Alvine Lumiti" className="ops__photo" />
        <div className="ops__bio">
          <h3>Alvine Lumiti</h3>
          <p>
            Full-stack developer pursuing a B.Sc in Information Technology at Mount Kenya University.
            I've been building production systems since 2022 — spanning e-commerce, agri-tech, and
            community finance. My work is driven by a belief that software should solve real problems
            for real people.
          </p>
          <div className="ops__facts">
            <span className="ops__fact">Location: <span>Nairobi, Kenya</span></span>
            <span className="ops__fact">Degree: <span>B.Sc IT, MKU</span></span>
            <span className="ops__fact">Since: <span>2022</span></span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
