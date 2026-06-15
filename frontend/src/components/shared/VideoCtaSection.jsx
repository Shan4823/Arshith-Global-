import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VIEWPORT_ONCE, tapScale } from '../../lib/motion';

export default function VideoCtaSection({ heading, subtext, ctaLabel, ctaHref, ctaTarget, ctaRel }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section className="mncfix-video-cta" ref={sectionRef}>
      <div className="mncfix-video-cta-media">
        <motion.video
          className="mncfix-video-cta-video"
          src="/assets/WhatsApp Video 2026-06-06 at 6.18.36 PM.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ y: videoY }}
        />
        <div className="mncfix-video-cta-overlay" aria-hidden="true"></div>
      </div>
      <div className="container">
        <motion.div
          className="mncfix-video-cta-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>{heading}</h2>
          <p>{subtext}</p>
          <motion.a
            href={ctaHref}
            className="mncfix-apply-btn"
            target={ctaTarget}
            rel={ctaRel}
            {...tapScale}
          >
            {ctaLabel}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
