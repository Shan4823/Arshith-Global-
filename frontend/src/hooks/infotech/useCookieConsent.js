import { useCallback, useEffect, useState } from 'react';

export default function useCookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookieConsent')) return;
    const timeoutId = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(timeoutId);
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  }, []);

  return { visible, accept, decline };
}
