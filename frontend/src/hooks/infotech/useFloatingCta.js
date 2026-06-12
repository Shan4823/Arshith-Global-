import { useEffect, useState } from 'react';

export default function useFloatingCta() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      setCollapsed(scrolled > document.documentElement.scrollHeight - 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return collapsed;
}
