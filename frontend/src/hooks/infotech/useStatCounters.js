import { useEffect, useRef, useState } from 'react';

const SPEED = 200;

export default function useStatCounters(targets) {
  const containerRef = useRef(null);
  const [values, setValues] = useState(() => targets.map(() => 0));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const timeouts = [];

    const startCounters = () => {
      targets.forEach((target, i) => {
        let count = 0;
        const inc = target / SPEED;
        const updateCount = () => {
          if (count < target) {
            count = Math.ceil(count + inc);
            const value = Math.min(count, target);
            setValues((prev) => {
              const next = [...prev];
              next[i] = value;
              return next;
            });
            timeouts.push(setTimeout(updateCount, 15));
          }
        };
        updateCount();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startCounters();
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [targets]);

  return { containerRef, values };
}
