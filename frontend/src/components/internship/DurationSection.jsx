import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';
import { fadeUp, fadeUpStagger, popIn, popInStagger, tapScale, VIEWPORT_ONCE } from '../../lib/motion';

// Counts up to `end` once the ref element enters view
function CountUp({ end, prefix = '', suffix = '', duration = 1.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setDisplay(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

function PricingCard({ months, price, tags, description, featured, applyHref }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const sp = { stiffness: 200, damping: 26 };
  const x = useSpring(rawX, sp);
  const y = useSpring(rawY, sp);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width  - 0.5);
    rawY.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const onLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.div className="mncfix-card-reveal" variants={fadeUp}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ perspective: 900, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className={featured ? 'mncfix-card mncfix-card--featured' : 'mncfix-card'}
          whileHover={{
            boxShadow: featured
              ? '0 24px 60px rgba(61,178,86,0.28), 0 6px 18px rgba(0,0,0,0.1)'
              : '0 16px 40px rgba(61,178,86,0.16), 0 4px 12px rgba(0,0,0,0.07)',
            y: -8,
          }}
          transition={{ duration: 0.25 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Shimmer stripe on hover */}
          {featured && (
            <motion.div
              aria-hidden="true"
              initial={{ x: '-120%' }}
              whileHover={{ x: '120%' }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 0, left: 0,
                width: '60%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                pointerEvents: 'none', zIndex: 0,
                transform: 'skewX(-15deg)',
              }}
            />
          )}

          <motion.div
            className="mncfix-tags"
            variants={popInStagger}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {tags.map((tag) => (
              <motion.span
                key={tag.label}
                className={`mncfix-tag${tag.accent ? ' mncfix-tag--accent' : ''}`}
                variants={popIn}
              >
                {tag.label}
              </motion.span>
            ))}
          </motion.div>

          {/* Animated counter badge */}
          <motion.div
            className="mncfix-duration-badge"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <span className="mncfix-duration-badge-num">
              <CountUp end={months} />
            </span>
            <span className="mncfix-duration-badge-unit">Months</span>
          </motion.div>

          <h3 style={{ position: 'relative', zIndex: 1 }}>{months}-Month Program</h3>

          <motion.p
            className="mncfix-price"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.4, delay: 0.25, type: 'spring', stiffness: 200 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {price}
          </motion.p>

          <p style={{ position: 'relative', zIndex: 1 }}>{description}</p>

          <motion.a
            href={applyHref}
            className="mncfix-apply-btn"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            Apply Now →
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function DurationSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mncfix-kicker">Choose your path</span>
          <h2>Internship duration</h2>
          <p>
            Choose the plan that fits your learning speed and goals. Please note that these
            internships are paid programs offered by our company and are designed to provide
            practical learning experience, real-time project exposure, and portfolio development.
          </p>
        </motion.div>

        <motion.div
          className="mncfix-grid mncfix-grid--duo"
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          <PricingCard
            months={3}
            price="₹1,250"
            tags={[{ label: 'Most Popular', accent: true }]}
            description="Work on multiple UI components, receive reviews, and build responsive pages while gaining practical, hands-on front-end development experience."
            featured
            applyHref="internship-details.html"
          />
          <PricingCard
            months={6}
            price="₹1,999"
            tags={[{ label: 'Advanced' }, { label: 'Placement Opportunity', accent: true }]}
            description="In-depth, industry-standard training with real-time project development, team collaboration, portfolio building, and eligibility for future placement drives."
            applyHref="internship-details.html"
          />
        </motion.div>
      </div>
    </section>
  );
}
