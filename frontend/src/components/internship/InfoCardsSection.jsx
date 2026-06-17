import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { fadeUp, fadeUpStagger, popIn, popInStagger, VIEWPORT_ONCE } from '../../lib/motion';

// 3D tilt wrapper — each card manages its own motion values
function TiltCard({ children }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 28 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);
  const glowX   = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY   = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width  - 0.5);
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        perspective: 900,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        position: 'relative',
      }}
    >
      {/* Spotlight glow that follows the cursor */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit', zIndex: 1,
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(61,178,86,0.14) 0%, transparent 60%)`
          ),
          pointerEvents: 'none',
          transition: 'background 0.1s',
        }}
      />
      {children}
    </motion.div>
  );
}

export default function InfoCardsSection({ id, title, description, cards, variant }) {
  const gridClass = variant === 'steps' ? 'mncfix-grid mncfix-grid--steps' : 'mncfix-grid';

  return (
    <section className="section" id={id}>
      <div className="container">
        <motion.div
          className="head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </motion.div>

        <motion.div
          className={gridClass}
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          {cards.map((card) => (
            <motion.div className="mncfix-card-reveal" variants={fadeUp} key={card.heading}>
              <TiltCard>
                <motion.div
                  className="mncfix-card"
                  whileHover={{
                    boxShadow: '0 16px 40px rgba(61,178,86,0.18), 0 4px 12px rgba(0,0,0,0.06)',
                    borderColor: 'rgba(61,178,86,0.35)',
                  }}
                  style={{ position: 'relative', zIndex: 2, transition: 'box-shadow 0.25s, border-color 0.25s' }}
                >
                  <motion.div
                    className="mncfix-ico"
                    whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3>{card.heading}</h3>
                  {card.skills ? (
                    <motion.div
                      className="mncfix-skill-pills"
                      variants={popInStagger}
                      initial="hidden"
                      whileInView="show"
                      viewport={VIEWPORT_ONCE}
                    >
                      {card.skills.map((skill) => (
                        <motion.span
                          className="mncfix-skill-pill"
                          variants={popIn}
                          key={skill}
                          whileHover={{ scale: 1.1, background: '#3db256', color: '#fff' }}
                          style={{ transition: 'background 0.2s, color 0.2s' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  ) : (
                    <p>{card.text}</p>
                  )}
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
