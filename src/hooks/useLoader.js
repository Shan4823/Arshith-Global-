import { useEffect, useRef, useState } from 'react';

export default function useLoader() {
  const [visible, setVisible] = useState(true);
  const [gone, setGone] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setGone(true);
      const removeTimer = setTimeout(() => setVisible(false), 700);
      timeouts.current.push(removeTimer);
    }, 2700);
    timeouts.current.push(showTimer);

    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  return { visible, gone };
}
