import { useCallback, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

export default function useContactForm(sourcePage = '') {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

      const payload = {
        name: formData.get('name')?.trim(),
        email: formData.get('email')?.trim(),
        phone: formData.get('phone')?.trim(),
        subject: formData.get('subject'),
        message: formData.get('message')?.trim(),
        sourcePage,
        website: formData.get('hp_contact_field') || '', // honeypot
      };

      setStatus('submitting');
      setErrorMessage('');

      try {
        const res = await fetch(`${API_BASE}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Something went wrong. Please try again.');
        }

        setStatus('success');
        form.reset();
      } catch (err) {
        setStatus('error');
        setErrorMessage(err.message || 'Something went wrong. Please try again.');
      }
    },
    [sourcePage]
  );

  return { status, errorMessage, handleSubmit };
}
