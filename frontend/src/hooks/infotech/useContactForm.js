import { useCallback, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

export default function useContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get('firstName')?.trim(),
      lastName: formData.get('lastName')?.trim(),
      email: formData.get('email')?.trim(),
      company: formData.get('company')?.trim(),
      service: formData.get('service') || '',
      message: formData.get('message')?.trim(),
      website: formData.get('website') || '', // honeypot
    };

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch(`${API_BASE}/api/infotech-enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }, []);

  return { submitting, submitted, error, handleSubmit };
}
