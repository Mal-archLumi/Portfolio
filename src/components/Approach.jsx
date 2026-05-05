import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    title: 'Systems before features',
    desc: 'Design data models and architecture before writing UI. Every feature is a consequence of a well-defined system. Schema-first development ensures scalability and maintainability.',
  },
  {
    title: 'Ship, then iterate',
    desc: 'Working software over perfect software. Deploy early, gather real feedback, and refine based on actual usage patterns. Continuous delivery beats delayed perfection.',
  },
  {
    title: 'Full ownership',
    desc: 'Own the full stack — from database schema to UI interaction. No handoff gaps, no context loss. End-to-end responsibility for system behavior and performance.',
  },
  {
    title: 'Security by default',
    desc: 'Authentication, input validation, and access control are built in from day one, not bolted on after. Security is a system property, not a feature.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section">
      <div className="section__header">
        <h2 className="section__title">APPROACH</h2>
        <p className="section__subtitle">
          Operating principles that govern how I approach every project — from initial scoping
          to production deployment. Methodology over methodology theater.
        </p>
      </div>

      <div className="approach">
        {PRINCIPLES.map((principle, i) => (
          <motion.div
            key={principle.title}
            className="approach__principle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="approach__principle-title">{principle.title}</h3>
            <p className="approach__principle-desc">{principle.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
