import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal-up, .reveal-left, .reveal-right, .reveal-scale';

export default function useRevealAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTOR);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('active', entry.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
