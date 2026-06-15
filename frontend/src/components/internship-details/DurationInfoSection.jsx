import { motion } from 'framer-motion';
import { VIEWPORT_ONCE } from '../../lib/motion';

export default function DurationInfoSection() {
  return (
    <section className="section mncfix-decorated">
      <span className="mncfix-blob mncfix-blob--brand mncfix-blob--a" aria-hidden="true"></span>
      <span className="mncfix-blob mncfix-blob--gold mncfix-blob--c" aria-hidden="true"></span>
      <div className="container">
        <div className="head">
          <h2>Internship Duration</h2>
          <p>
            6 months duration, ensuring in-depth learning, project exposure, and skill
            development.
          </p>
        </div>
        <motion.div
          className="mncfix-stat-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mncfix-stat-icon">
            <i className="fa-solid fa-calendar-days" aria-hidden="true"></i>
          </div>
          <div className="mncfix-stat-figure">6</div>
          <div className="mncfix-stat-label">Months Duration</div>
        </motion.div>
      </div>
    </section>
  );
}
