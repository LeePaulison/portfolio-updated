'use client';

import { useCallback } from 'react';

export function useRecaptcha() {
  const executeRecaptcha = useCallback(async (action = 'submit') => {
    if (!window.grecaptcha) {
      console.error('reCAPTCHA not loaded yet.');
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action });

      const response = await fetch('/api/recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recaptcha: token }),
      });

      const data = await response.json();

      if (!data.success) {
        console.error('reCAPTCHA failed verification:', data);
        return null;
      }

      console.log('reCAPTCHA passed:', data.score);
      return data;
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      return null;
    }
  }, []);

  return { executeRecaptcha };
}
