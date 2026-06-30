import { motion } from 'framer-motion';
import { fadeUp, fadeUpStagger, VIEWPORT_ONCE } from '../../lib/motion';

const CONTACT_INFO = [
  {
    icon: 'fa-location-dot',
    title: 'Office',
    content: (
      <>
        Bengaluru, Karnataka
        <br />
        India - 560076
      </>
    ),
  },
  {
    icon: 'fa-phone',
    title: 'Phone',
    content: <a href="tel:+918618471424">+91 8618471424</a>,
  },
  {
    icon: 'fa-envelope',
    title: 'Email',
    content: <a href="mailto:info@arshithgroup.com">info@arshithgroup.com</a>,
  },
  {
    icon: 'fa-clock',
    title: 'Business Hours',
    content: (
      <>
        Mon &ndash; Fri
        <br />
        10:00 AM &ndash; 6:00 PM
      </>
    ),
  },
];

export default function ContactInfoStrip() {
  return (
    <section className="ag-contact-info-strip">
      <div className="container">
        <motion.div
          className="ag-contact-info-grid"
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          {CONTACT_INFO.map((item) => (
            <motion.div
              className="ag-contact-info-card"
              variants={fadeUp}
              key={item.title}
              whileHover={{ y: -8, boxShadow: '0 18px 36px rgba(0,75,141,0.16)' }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.i
                className={`fa-solid ${item.icon}`}
                aria-hidden="true"
                whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.45 }}
              />
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
