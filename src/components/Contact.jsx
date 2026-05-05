import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

const CHANNELS = [
  {
    label: 'EMAIL',
    value: 'makutualvine@gmail.com',
    href: 'mailto:makutualvine@gmail.com',
    icon: FiMail,
  },
  {
    label: 'GITHUB',
    value: 'Mal-ArchLumi',
    href: 'https://github.com/Mal-ArchLumi',
    icon: FiGithub,
  },
  {
    label: 'LINKEDIN',
    value: 'Alvine Lumiti',
    href: 'https://www.linkedin.com/in/alvine-lumiti-7a1a73299/',
    icon: FiLinkedin,
  },
  {
    label: 'LOCATION',
    value: 'Nairobi, Kenya',
    href: null,
    icon: FiMapPin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__header">
        <h2 className="section__title">CONTACT</h2>
        <p className="section__subtitle">
          Available for freelance projects, collaborations, and contract work.
          Reach out with a clear brief — response within 24 hours.
        </p>
      </div>

      <motion.div
        className="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="contact__channels">
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            const content = (
              <div className="contact__channel">
                <span className="contact__channel-label">{channel.label}</span>
                <span className="contact__channel-value">{channel.value}</span>
              </div>
            );

            return channel.href ? (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={channel.label}>{content}</div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
