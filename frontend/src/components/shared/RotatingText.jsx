import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function RotatingText({ words, interval = 2800, className = '' }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <motion.span
      className={`mncfix-rotator ${className}`.trim()}
      layout
      transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          className="mncfix-rotator-word"
          initial={{ opacity: 0, y: 32, scale: 0.82, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -32, scale: 0.82, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
