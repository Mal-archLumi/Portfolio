import { motion } from 'framer-motion';

const STACK_DOMAINS = [
  {
    title: 'Frontend',
    tools: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend & APIs',
    tools: ['Node.js', 'NestJS', 'Python', 'PHP', 'REST', 'WebSocket', 'GraphQL'],
  },
  {
    title: 'Mobile',
    tools: ['Flutter', 'Dart', 'Kotlin', 'React Native', 'iOS', 'Android'],
  },
  {
    title: 'Data & Storage',
    tools: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Redis'],
  },
  {
    title: 'Infrastructure',
    tools: ['Docker', 'Git', 'Linux', 'AWS', 'Netlify', 'Vercel'],
  },
  {
    title: 'Currently Exploring',
    tools: ['Blockchain', 'AI/ML Integration', 'Cloud Architecture (AWS)', 'Ethical Hacking'],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="section__header">
        <h2 className="section__title">TECHNICAL STACK</h2>
        <p className="section__subtitle">
          Tools and technologies used in production systems — not theoretical knowledge.
          Organized by domain and application context.
        </p>
      </div>

      <div className="stack">
        {STACK_DOMAINS.map((domain, i) => (
          <motion.div
            key={domain.title}
            className="stack__domain"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="stack__domain-title">{domain.title}</h3>
            <div className="stack__tools">
              {domain.tools.map((tool) => (
                <span key={tool} className="stack__tool">{tool}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
