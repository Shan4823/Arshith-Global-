import { useCallback, useEffect, useState } from 'react';

export default function useServiceModal() {
  const [activeKey, setActiveKey] = useState(null);

  const openModal = useCallback((key) => setActiveKey(key), []);
  const closeModal = useCallback(() => setActiveKey(null), []);

  useEffect(() => {
    if (!activeKey) return undefined;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeKey, closeModal]);

  return { activeKey, openModal, closeModal };
}
