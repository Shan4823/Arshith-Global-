import { useCallback, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

export default function useInternshipApplicationForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get('fullName')?.trim(),
      email: formData.get('email')?.trim(),
      phone: formData.get('phone')?.trim(),
      college: formData.get('college')?.trim(),
      yearOfStudy: formData.get('yearOfStudy'),
      domain: formData.get('domain'),
      resumeLink: formData.get('resumeLink')?.trim(),
      message: formData.get('message')?.trim(),
      website: formData.get('website') || '', // honeypot
    };

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(`${API_BASE}/api/internship-application`, {
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
  }, []);

  return { status, errorMessage, handleSubmit };
}
