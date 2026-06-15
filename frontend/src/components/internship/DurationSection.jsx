import { motion } from 'framer-motion';
import {
  fadeUp,
  fadeUpStagger,
  popIn,
  popInStagger,
  tapScale,
  VIEWPORT_ONCE,
} from '../../lib/motion';

export default function DurationSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="head">
          <h2>Internship duration</h2>
          <p>
            Choose the plan that fits your learning speed and goals. Please note that these
            internships are paid programs offered by our company and are designed to provide
            practical learning experience, real-time project exposure, and portfolio
            development.
          </p>
        </div>

        <motion.div
          className="mncfix-grid mncfix-grid--duo"
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <motion.div className="mncfix-card-reveal" variants={fadeUp}>
            <div className="mncfix-card mncfix-card--featured">
              <motion.div
                className="mncfix-tags"
                variants={popInStagger}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT_ONCE}
              >
                <motion.span className="mncfix-tag mncfix-tag--accent" variants={popIn}>
                  Most Popular
                </motion.span>
              </motion.div>
              <div className="mncfix-duration-badge">
                <span className="mncfix-duration-badge-num">3</span>
                <span className="mncfix-duration-badge-unit">Months</span>
              </div>
              <h3>3-Month Program</h3>
              <p className="mncfix-price">₹1,250</p>
              <p>
                Work on multiple UI components, receive reviews, and build responsive pages while
                gaining practical, hands-on front-end development experience.
              </p>
              <motion.a href="internship-details.html" className="mncfix-apply-btn" {...tapScale}>
                Apply Now →
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="mncfix-card-reveal" variants={fadeUp}>
            <div className="mncfix-card">
              <motion.div
                className="mncfix-tags"
                variants={popInStagger}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT_ONCE}
              >
                <motion.span className="mncfix-tag" variants={popIn}>Advanced</motion.span>
                <motion.span className="mncfix-tag mncfix-tag--accent" variants={popIn}>
                  Placement Opportunity
                </motion.span>
              </motion.div>
              <div className="mncfix-duration-badge">
                <span className="mncfix-duration-badge-num">6</span>
                <span className="mncfix-duration-badge-unit">Months</span>
              </div>
              <h3>6-Month Program</h3>
              <p className="mncfix-price">₹1,999</p>
              <p>
                In-depth, industry-standard training with real-time project development, team
                collaboration, portfolio building, and eligibility for future placement drives.
              </p>
              <motion.a href="internship-details.html" className="mncfix-apply-btn" {...tapScale}>
                Apply Now →
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
