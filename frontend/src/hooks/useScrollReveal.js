import { useEffect } from 'react';

const REVEAL_SELECTOR =
  '.section, .card, .product-card, .category-card, .news-card, .limited-card, .business-feature, .quote-card';

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTOR);
    const revealPoint = 100;

    function revealOnScroll() {
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }

    elements.forEach((el) => el.classList.add('reveal'));
    revealOnScroll();

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('load', revealOnScroll);
    };
  }, []);
}
