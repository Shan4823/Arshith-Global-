import { motion } from 'framer-motion';
import { fadeUp, fadeUpStagger, popIn, popInStagger, VIEWPORT_ONCE } from '../../lib/motion';

export default function InfoCardsSection({ id, title, description, cards, variant }) {
  const gridClass = variant === 'steps' ? 'mncfix-grid mncfix-grid--steps' : 'mncfix-grid';

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="head">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <motion.div
          className={gridClass}
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
        >
          {cards.map((card) => (
            <motion.div className="mncfix-card-reveal" variants={fadeUp} key={card.heading}>
              <div className="mncfix-card">
                <div className="mncfix-ico">{card.icon}</div>
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
                      <motion.span className="mncfix-skill-pill" variants={popIn} key={skill}>
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                ) : (
                  <p>{card.text}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
