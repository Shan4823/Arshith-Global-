import { useCallback } from 'react';

export default function useBackToTop() {
  return useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
}
