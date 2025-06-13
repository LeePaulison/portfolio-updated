// app/api/contact/route.js

import emailjs from '@emailjs/nodejs';

export async function POST(req) {
  try {
    const body = await req.json();
    const { recaptcha, from_name, from_company, from_email, from_subject, message } = body;

    // 1. Verify reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: recaptcha,
      }).toString(),
    });

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ success: false, error: 'Failed reCAPTCHA', score: recaptchaData.score }), {
        status: 403,
      });
    }

    // 2. Send email with EmailJS
    const templateParams = {
      from_name,
      from_company,
      from_email,
      from_subject,
      message,
    };

    const emailResponse = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    return new Response(JSON.stringify({ success: true, score: recaptchaData.score, email: emailResponse }), {
      status: 200,
    });
  } catch (err) {
    console.error('Contact error:', err);
    return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), { status: 500 });
  }
}
