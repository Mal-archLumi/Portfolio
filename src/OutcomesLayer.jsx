import { motion } from 'framer-motion';
import { sectionHead, staggerContainer, fadeUp, cardHover } from './motion';

const outcomes = [
  { value: '4+',    label: 'Production Systems',  desc: 'Deployed and actively used by real users across web and mobile platforms.' },
  { value: '4',     label: 'Domains Shipped',      desc: 'Agri-tech, community, cloud education, and e-commerce — each with distinct technical requirements.' },
  { value: '2+',    label: 'Years Building',       desc: 'Consistent delivery of full-stack systems since 2022, across freelance and personal projects.' },
  { value: 'Full',  label: 'Stack Ownership',      desc: 'End-to-end responsibility: schema design, API, UI, deployment, and iteration.' },
  { value: 'Open',  label: 'Source Contributor',   desc: 'All major builds are publicly available on GitHub with documented codebases.' },
  { value: 'Active', label: 'In Development',      desc: 'DevKazi is currently in active development — shipping new features weekly.' },
];

export default function OutcomesLayer() {
  return (
    <section id="outcomes" className="sys-section">
      <motion.div
        variants={sectionHead}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="sys-label">Outcomes</p>
        <h2 className="sys-heading">What's been produced</h2>
        <p className="sys-subtext">
          Concrete results from real builds — not estimates or projections.
        </p>
      </motion.div>

      <motion.div
        className="outcomes__grid"
        variants={staggerContainer(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {outcomes.map((o) => (
          <motion.div
            key={o.label}
            className="outcome__card"
            variants={fadeUp}
            whileHover={cardHover}
          >
            <div className="outcome__value">{o.value}</div>
            <div className="outcome__label">{o.label}</div>
            <div className="outcome__desc">{o.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
