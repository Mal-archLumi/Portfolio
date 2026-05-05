import { motion } from 'framer-motion';
import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si';
import { SiNodedotjs, SiPython, SiPhp, SiMysql, SiFirebase, SiSupabase, SiMongodb } from 'react-icons/si';
import { SiFlutter, SiDart, SiKotlin } from 'react-icons/si';
import { SiDocker, SiGit, SiLinux, SiNestjs } from 'react-icons/si';
import { FaShieldAlt, FaLayerGroup, FaMobileAlt, FaServer } from 'react-icons/fa';
import { sectionHead, staggerContainer, fadeUp, cardHover } from './motion';

const domains = [
  {
    icon: <FaLayerGroup />,
    title: 'Frontend',
    tools: [
      { label: 'React',      icon: <SiReact /> },
      { label: 'TypeScript', icon: <SiTypescript /> },
      { label: 'JavaScript', icon: <SiJavascript /> },
      { label: 'HTML5',      icon: <SiHtml5 /> },
      { label: 'CSS3',       icon: <SiCss3 /> },
      { label: 'Tailwind',   icon: <SiTailwindcss /> },
    ],
  },
  {
    icon: <FaServer />,
    title: 'Backend & Data',
    tools: [
      { label: 'Node.js',  icon: <SiNodedotjs /> },
      { label: 'NestJS',   icon: <SiNestjs /> },
      { label: 'Python',   icon: <SiPython /> },
      { label: 'PHP',      icon: <SiPhp /> },
      { label: 'MySQL',    icon: <SiMysql /> },
      { label: 'MongoDB',  icon: <SiMongodb /> },
      { label: 'Firebase', icon: <SiFirebase /> },
      { label: 'Supabase', icon: <SiSupabase /> },
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile',
    tools: [
      { label: 'Flutter', icon: <SiFlutter /> },
      { label: 'Dart',    icon: <SiDart /> },
      { label: 'Kotlin',  icon: <SiKotlin /> },
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: 'Infrastructure & Security',
    tools: [
      { label: 'Docker',        icon: <SiDocker /> },
      { label: 'Git',           icon: <SiGit /> },
      { label: 'Linux',         icon: <SiLinux /> },
      { label: 'Sec Practices', icon: <FaShieldAlt /> },
    ],
  },
];

const learning = ['Blockchain', 'AI/ML Integration', 'Cloud Architecture (AWS)', 'Ethical Hacking'];

export default function CapabilityLayer() {
  return (
    <section id="capability" className="sys-section">
      <motion.div
        variants={sectionHead}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="sys-label">Capability</p>
        <h2 className="sys-heading">Applied stack</h2>
        <p className="sys-subtext">
          Tools and technologies I've used in production — not just studied.
        </p>
      </motion.div>

      <motion.div
        className="cap__grid"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {domains.map((d) => (
          <motion.div
            key={d.title}
            className="cap__domain"
            variants={fadeUp}
            whileHover={cardHover}
          >
            <div className="cap__domain-header">
              <div className="cap__domain-icon">{d.icon}</div>
              <span className="cap__domain-title">{d.title}</span>
            </div>
            <div className="cap__tools">
              {d.tools.map((t) => (
                <span key={t.label} className="sys-tag">
                  {t.icon}&nbsp;{t.label}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="cap__currently"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <span className="cap__currently-label">Currently exploring</span>
        <div className="cap__learning">
          {learning.map((l) => <span key={l} className="sys-tag">{l}</span>)}
        </div>
      </motion.div>
    </section>
  );
}
