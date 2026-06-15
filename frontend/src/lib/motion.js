// Default viewport options for scroll-triggered reveals.
// `once: true` is REQUIRED -- prevents the bidirectional-reveal bug that
// caused the previous useScrollReveal-based approach to be removed.
export const VIEWPORT_ONCE = { once: true, amount: 0.25 };

// Fade + slide-up reveal for individual items (cards, list items, etc.)
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// Container variant for staggered children. Apply on the grid/list wrapper
// with initial="hidden" whileInView="show" viewport={VIEWPORT_ONCE}, then
// each child gets variants={fadeUp} and inherits hidden/show automatically.
export const fadeUpStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

// Smaller-amplitude version for compact elements (tags/pills/notes).
export const popIn = {
  hidden: { opacity: 0, y: 10, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export const popInStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

// Hero mount stagger (no viewport needed -- animates on mount).
export const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// Shared button micro-interaction props (spread onto motion.a/motion.button).
// Only whileTap -- whileHover would conflict with elements that already have
// a CSS :hover transform (e.g. .mncfix-apply-btn translateY on hover).
export const tapScale = {
  whileTap: { scale: 0.96 },
};

// Continuous gentle vertical float, spread onto a `motion.*` element via
// {...floatLoop()}. Pass a `delay` so multiple floating elements drift out
// of sync for a more organic feel. Uses an explicit `animate`/`transition`
// object (not variants) so it runs independently of any parent stagger.
export function floatLoop(delay = 0, duration = 4, amplitude = 10) {
  return {
    animate: { y: [0, -amplitude, 0] },
    transition: { duration, repeat: Infinity, ease: 'easeInOut', delay },
  };
}
