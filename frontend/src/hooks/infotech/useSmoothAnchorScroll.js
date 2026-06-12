import { useEffect } from 'react';

export default function useSmoothAnchorScroll(onNavigate) {
  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    const anchors = document.querySelectorAll('a[href^="#"]');

    function handleClick(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;
      e.preventDefault();
      const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      onNavigate?.();
    }

    anchors.forEach((anchor) => anchor.addEventListener('click', handleClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick));
    };
  }, [onNavigate]);
}
