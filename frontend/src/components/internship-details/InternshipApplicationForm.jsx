import { motion } from 'framer-motion';
import useInternshipApplicationForm from '../../hooks/useInternshipApplicationForm';
import { INTERNSHIP_DOMAINS } from '../../lib/internshipDomains';
import { fadeUp, tapScale, VIEWPORT_ONCE } from '../../lib/motion';

const YEAR_OPTIONS = ['2nd Year', '3rd Year', '4th Year', 'Final Year', 'Graduate/Other'];

export default function InternshipApplicationForm() {
  const { status, errorMessage, handleSubmit } = useInternshipApplicationForm();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      variants={fadeUp}
    >
      <form className="mncfix-apply-form" noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
          aria-hidden="true"
        />

        <div className="mncfix-apply-form-row">
          <div className="mncfix-apply-form-group">
            <label htmlFor="applyFullName">Full Name</label>
            <input type="text" id="applyFullName" name="fullName" placeholder="Your full name" required />
          </div>
          <div className="mncfix-apply-form-group">
            <label htmlFor="applyEmail">Email Address</label>
            <input type="email" id="applyEmail" name="email" placeholder="you@example.com" required />
          </div>
        </div>

        <div className="mncfix-apply-form-row">
          <div className="mncfix-apply-form-group">
            <label htmlFor="applyPhone">Phone Number</label>
            <input type="tel" id="applyPhone" name="phone" placeholder="+91 98765 43210" required />
          </div>
          <div className="mncfix-apply-form-group">
            <label htmlFor="applyCollege">College / Institution</label>
            <input type="text" id="applyCollege" name="college" placeholder="Your college name" required />
          </div>
        </div>

        <div className="mncfix-apply-form-row">
          <div className="mncfix-apply-form-group">
            <label htmlFor="applyYear">Year of Study</label>
            <select id="applyYear" name="yearOfStudy" defaultValue="" required>
              <option value="" disabled>Select your year</option>
              {YEAR_OPTIONS.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div className="mncfix-apply-form-group">
            <label htmlFor="applyDomain">Domain of Interest</label>
            <select id="applyDomain" name="domain" defaultValue="" required>
              <option value="" disabled>Select a domain</option>
              {INTERNSHIP_DOMAINS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mncfix-apply-form-group">
          <label htmlFor="applyResume">Resume / Portfolio Link (optional)</label>
          <input type="url" id="applyResume" name="resumeLink" placeholder="https://drive.google.com/..." />
        </div>

        <div className="mncfix-apply-form-group">
          <label htmlFor="applyMessage">Anything else you'd like us to know? (optional)</label>
          <textarea
            id="applyMessage"
            name="message"
            rows="4"
            placeholder="Tell us a bit about yourself…"
          ></textarea>
        </div>

        <div className="mncfix-apply-form-submit">
          <motion.button
            type="submit"
            className="mncfix-apply-btn"
            disabled={status === 'submitting'}
            {...tapScale}
          >
            {status === 'submitting' ? (
              <>Submitting... <i className="fa-solid fa-spinner fa-spin"></i></>
            ) : (
              <>Submit Application <i className="fa-solid fa-paper-plane"></i></>
            )}
          </motion.button>
          {status === 'success' && (
            <p className="mncfix-apply-form-success">
              ✅ Thank you! Our team will review your application and reach out soon.
            </p>
          )}
          {status === 'error' && (
            <p className="mncfix-apply-form-error">⚠ {errorMessage}</p>
          )}
        </div>
      </form>
    </motion.div>
  );
}
