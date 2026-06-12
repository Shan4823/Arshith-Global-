import { useEffect, useRef, useState } from 'react';

function parseTarget(text) {
  const suffixK = text.includes('K') ? 'K' : text.includes('k') ? 'k' : '';
  const suffixPlus = text.includes('+') ? '+' : '';
  const finalTarget = parseInt(text.replace(/\D/g, ''), 10);
  return { finalTarget, suffixK, suffixPlus };
}

export default function useCountUp(targetText, duration = 2000) {
  const { finalTarget, suffixK, suffixPlus } = parseTarget(targetText);
  const [display, setDisplay] = useState(`0${suffixK}${suffixPlus}`);
  const ref = useRef(null);
  const animatedRef = useRef(false);
  const frameRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const step = (timestamp, start) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.floor(easeOut * finalTarget).toLocaleString('en-IN') + suffixK + suffixPlus);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame((ts) => step(ts, start));
      } else {
        setDisplay(targetText);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            frameRef.current = requestAnimationFrame((ts) => step(ts, null));
            animatedRef.current = true;
          } else if (!entry.isIntersecting) {
            cancelAnimationFrame(frameRef.current);
            setDisplay(`0${suffixK}${suffixPlus}`);
            animatedRef.current = false;
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [targetText, duration, finalTarget, suffixK, suffixPlus]);

  return { ref, display };
}
