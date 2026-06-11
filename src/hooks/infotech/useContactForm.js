import { useCallback, useEffect, useRef, useState } from 'react';

export default function useContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitting(true);
    timeoutRef.current = setTimeout(() => setSubmitted(true), 1500);
  }, []);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return { submitting, submitted, handleSubmit };
}
