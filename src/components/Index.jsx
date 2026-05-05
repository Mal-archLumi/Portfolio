import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const INDEX_ITEMS = [
  { id: 'builds', label: 'BUILDS', count: 4 },
  { id: 'stack', label: 'TECHNICAL STACK', count: null },
  { id: 'approach', label: 'APPROACH', count: null },
  { id: 'contact', label: 'CONTACT', count: null },
];

export default function Index({ activeSection }) {
  return (
    <motion.div
      className="index"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="index__title">INDEX</h2>
      <div className="index__list">
        {INDEX_ITEMS.map(({ id, label, count }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`index__item ${activeSection === id ? 'active' : ''}`}
          >
            <FiArrowRight className="index__item-arrow" />
            <span>{label}</span>
            {count && <span className="index__item-count">[{count}]</span>}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
