import { motion } from 'framer-motion';
import { VIEWPORT_ONCE } from '../../lib/motion';
import ApplySidebar from './ApplySidebar';

const paymentDetails = [
  { label: 'UPI ID', value: 'nfarookafi@oksbi', icon: 'fa-mobile-screen' },
  { label: 'Gpay', value: '9493836029', icon: 'fa-mobile-screen' },
  { label: 'Holder Name', value: 'Farook N', icon: 'fa-user' },
  { label: 'Account No', value: '925010012605535', icon: 'fa-building-columns' },
  { label: 'IFSC Code', value: 'UTIB0003266', icon: 'fa-building-columns' },
];

const includes = [
  'Training and mentorship',
  'Access to real-time projects',
  'Learning resources and materials',
  'Technical support',
  'Placement-oriented training',
  'Interview preparation support',
  'Priority access to campus recruitment drives',
];

export default function RegistrationSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="head">
          <span className="mncfix-kicker">Get started</span>
          <h2>Registration Details</h2>
        </div>
        <div className="mncfix-reg-layout">
          <motion.div
            className="mncfix-reg-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mncfix-reg-price-wrap">
              <div className="mncfix-reg-price">₹1,999/-</div>
              <p className="mncfix-reg-note">One-time Registration Fee</p>
            </div>
            <div className="mncfix-reg-grid">
              <div className="mncfix-reg-col">
                <h4>Payment Details</h4>
                <ul className="mncfix-pay-list">
                  {paymentDetails.map((item) => (
                    <li key={item.label}>
                      <span>
                        <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
                        {item.label}
                      </span>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mncfix-reg-col">
                <h4>Includes</h4>
                <ul className="mncfix-includes-list">
                  {includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          <ApplySidebar />
        </div>
      </div>
    </section>
  );
}
