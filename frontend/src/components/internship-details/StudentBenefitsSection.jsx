import { motion } from 'framer-motion';
import { fadeUp, fadeUpStagger, VIEWPORT_ONCE } from '../../lib/motion';

const benefits = [
  'Gain real-time industry experience',
  'Work on live projects',
  'Learn in-demand technologies and tools',
  'Improve confidence and communication skills',
  'Build a strong technical and project portfolio',
];

export default function StudentBenefitsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="head">
          <h2>Student Benefits</h2>
        </div>
        <motion.ul
          className="mncfix-check-list"
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          {benefits.map((item) => (
            <motion.li key={item} variants={fadeUp}>{item}</motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
