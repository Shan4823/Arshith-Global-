import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { fadeUp, fadeUpStagger, popIn, popInStagger, VIEWPORT_ONCE } from '../../lib/motion';

// 3D tilt with cursor spotlight — NOT used for variant="steps" because
// that variant absolutely-positions badges relative to .mncfix-card and
// a preserve-3d stacking context breaks that positioning.
function TiltCard({ children }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const sp = { stiffness: 200, damping: 28 };
  const x = useSpring(rawX, sp);
  const y = useSpring(rawY, sp);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const [glow, setGlow] = useState({ x: '50%', y: '50%' });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width  - 0.5);
    rawY.set((e.clientY - r.top)  / r.height - 0.5);
    setGlow({
      x: `${((e.clientX - r.left) / r.width)  * 100}%`,
      y: `${((e.clientY - r.top)  / r.height) * 100}%`,
    });
  };
  const onLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        perspective: 800,
        rotateX,
        rotateY,
        width: '100%',
        position: 'relative',
        // No transformStyle: preserve-3d — keeps child absolute positioning intact
      }}
    >
      {/* Cursor-following radial spotlight */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, borderRadius: 24, zIndex: 1,
          background: `radial-gradient(circle at ${glow.x} ${glow.y}, rgba(61,178,86,0.12) 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />
      {children}
    </motion.div>
  );
}

export default function InfoCardsSection({ id, title, description, cards, variant, kicker }) {
  const gridClass =
    variant === 'steps' ? 'mncfix-grid mncfix-grid--steps' :
    variant === 'quad'  ? 'mncfix-grid mncfix-grid--quad'  :
    'mncfix-grid';

  return (
    <section className="section mncfix-decorated" id={id}>
      <span className="mncfix-blob mncfix-blob--brand mncfix-blob--a" aria-hidden="true"></span>
      <span className="mncfix-blob mncfix-blob--gold mncfix-blob--c" aria-hidden="true"></span>
      <div className="container">
        <motion.div
          className="head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {kicker && <span className="mncfix-kicker">{kicker}</span>}
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
            <motion.div
              className="mncfix-card-reveal"
              variants={fadeUp}
              key={card.heading}
              style={{ width: '100%' }}
            >
              {variant === 'steps' ? (
                /* Steps: no TiltCard — badges are absolutely positioned and
                   break inside a 3D transform context */
                <motion.div
                  className="mncfix-card"
                  whileHover={{
                    boxShadow: '0 16px 40px rgba(61,178,86,0.2), 0 4px 12px rgba(0,0,0,0.06)',
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={`mncfix-ico${card.color ? ` mncfix-ico--${card.color}` : ''}`}>{card.icon}</div>
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
                          whileHover={{ scale: 1.08, background: '#3db256', color: '#fff' }}
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
              ) : (
                /* All other variants: full 3D tilt + spotlight */
                <TiltCard>
                  <motion.div
                    className="mncfix-card"
                    whileHover={{
                      boxShadow: '0 16px 40px rgba(61,178,86,0.18), 0 4px 12px rgba(0,0,0,0.06)',
                      borderColor: 'rgba(61,178,86,0.35)',
                    }}
                    style={{ position: 'relative', zIndex: 2 }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.div
                      className={`mncfix-ico${card.color ? ` mncfix-ico--${card.color}` : ''}`}
                      whileHover={{ scale: 1.18, rotate: [0, -6, 6, 0] }}
                      transition={{ duration: 0.38 }}
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
                            whileHover={{ scale: 1.08, background: '#3db256', color: '#fff' }}
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
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
