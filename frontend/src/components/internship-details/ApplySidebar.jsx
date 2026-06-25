import { motion } from 'framer-motion';
import { VIEWPORT_ONCE, tapScale } from '../../lib/motion';

export default function ApplySidebar() {
  return (
    <motion.aside
      className="mncfix-apply-sidebar"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mncfix-apply-sidebar-card">
        <div className="mncfix-apply-sidebar-price">₹1,999/-</div>
        <p className="mncfix-apply-sidebar-note">One-time Registration Fee</p>
        <ul className="mncfix-apply-sidebar-facts">
          <li>
            <i className="fa-solid fa-calendar-days" aria-hidden="true"></i> 6 Months
          </li>
          <li>
            <i className="fa-solid fa-certificate" aria-hidden="true"></i> Certificate Included
          </li>
        </ul>
        <motion.a
          href="#apply"
          className="mncfix-apply-btn mncfix-apply-sidebar-btn"
          {...tapScale}
        >
          Apply for Internship →
        </motion.a>
      </div>
    </motion.aside>
  );
}
