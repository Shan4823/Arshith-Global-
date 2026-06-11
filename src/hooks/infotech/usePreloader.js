import { useEffect, useState } from 'react';

export default function usePreloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let timeoutId;
    const hide = () => {
      timeoutId = setTimeout(() => setHidden(true), 400);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
    }

    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(timeoutId);
    };
  }, []);

  return hidden;
}
