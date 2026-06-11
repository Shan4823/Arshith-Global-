import { useEffect, useRef } from 'react';

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const t = document.documentElement;
      if (barRef.current) {
        barRef.current.style.width =
          (t.scrollTop / (t.scrollHeight - t.clientHeight)) * 100 + '%';
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="pbar" ref={barRef}></div>;
}
