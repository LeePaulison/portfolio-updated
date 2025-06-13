// NOTE: Contact form with updated validation including HTML tag filtering across all fields
'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function ContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    from_name: '',
    from_company: '',
    from_email: '',
    from_subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sanitizeAndValidate = useCallback(() => {
    const htmlTagRegex = /<(.|\n)*?>/g;
    const newErrors = {};

    if (!formData.from_name.trim()) newErrors.from_name = 'Name is required.';
    else if (htmlTagRegex.test(formData.from_name)) newErrors.from_name = 'HTML tags are not allowed.';

    if (!formData.from_email.trim()) newErrors.from_email = 'Email is required.';

    if (!formData.from_subject.trim()) newErrors.from_subject = 'Subject is required.';
    else if (htmlTagRegex.test(formData.from_subject)) newErrors.from_subject = 'HTML tags are not allowed.';

    if (formData.from_company && htmlTagRegex.test(formData.from_company)) {
      newErrors.from_company = 'HTML tags are not allowed.';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (htmlTagRegex.test(formData.message)) newErrors.message = 'HTML tags are not allowed.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const resetForm = () => {
    setFormData({
      from_name: '',
      from_company: '',
      from_email: '',
      from_subject: '',
      message: '',
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const grecaptcha = window.grecaptcha;
    if (!grecaptcha || !sanitizeAndValidate()) {
      setError('Validation failed. Please check your input.');
      return;
    }

    setIsSubmitting(true);

    try {
      const recaptchaToken = await grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
        action: 'contact_form',
      });

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptcha: recaptchaToken }),
      });

      const result = await res.json();
      if (!result.success) {
        throw new Error(result.error || 'Submission failed.');
      }

      resetForm();
      setConfirmationOpen(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('There was a problem submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='max-w-xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-8'>Contact Me</h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <Label htmlFor='from_name'>Name *</Label>
          <Input
            id='from_name'
            name='from_name'
            value={formData.from_name}
            onChange={handleChange}
            aria-invalid={!!errors.from_name}
          />
          {errors.from_name && <p className='text-sm text-destructive mt-1'>{errors.from_name}</p>}
        </div>
        <div>
          <Label htmlFor='from_company'>Company</Label>
          <Input
            id='from_company'
            name='from_company'
            value={formData.from_company}
            onChange={handleChange}
            aria-invalid={!!errors.from_company}
          />
          {errors.from_company && <p className='text-sm text-destructive mt-1'>{errors.from_company}</p>}
        </div>
        <div>
          <Label htmlFor='from_email'>Email *</Label>
          <Input
            id='from_email'
            type='email'
            name='from_email'
            value={formData.from_email}
            onChange={handleChange}
            aria-invalid={!!errors.from_email}
          />
          {errors.from_email && <p className='text-sm text-destructive mt-1'>{errors.from_email}</p>}
        </div>
        <div>
          <Label htmlFor='from_subject'>Subject *</Label>
          <Input
            id='from_subject'
            name='from_subject'
            value={formData.from_subject}
            onChange={handleChange}
            aria-invalid={!!errors.from_subject}
          />
          {errors.from_subject && <p className='text-sm text-destructive mt-1'>{errors.from_subject}</p>}
        </div>
        <div>
          <Label htmlFor='message'>Message *</Label>
          <Textarea
            id='message'
            name='message'
            rows={6}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className='text-sm text-destructive mt-1'>{errors.message}</p>}
        </div>

        {error && <p className='text-destructive text-sm font-medium'>{error}</p>}

        <div className='flex gap-4 justify-end'>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Submit'}
          </Button>
          <Button type='reset' variant='outline' onClick={resetForm}>
            Reset
          </Button>
          <Button type='button' variant='ghost' onClick={() => router.back()}>
            Cancel
          </Button>
        </div>
      </form>

      <Dialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thanks for reaching out!</DialogTitle>
          </DialogHeader>
          <p>I’ve received your message and will get back to you soon.</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
