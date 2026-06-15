import { motion } from 'framer-motion';
import { fadeUp, fadeUpStagger, VIEWPORT_ONCE } from '../../lib/motion';

const criteria = [
  'Duration of internship',
  'Performance and participation',
  'Successful project completion',
];

export default function CertificationSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="head">
          <h2>Certification</h2>
          <p>
            Internship Completion Certificate will be awarded. Certification is based on:
          </p>
        </div>
        <motion.ul
          className="mncfix-check-list"
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          {criteria.map((item) => (
            <motion.li key={item} variants={fadeUp}>{item}</motion.li>
          ))}
        </motion.ul>
        <motion.div
          className="mncfix-note"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <i className="fa-solid fa-circle-info mncfix-note-icon" aria-hidden="true"></i>
          <strong>Important:</strong> Only students who have successfully completed this 6-month
          internship program in our companies will be eligible to participate in future campus
          recruitment drives conducted by our organizations.
        </motion.div>
      </div>
    </section>
  );
}
