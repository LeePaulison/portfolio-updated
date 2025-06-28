// app/api/contact/route.js

import emailjs from '@emailjs/nodejs';

export async function POST(req) {
  try {
    const body = await req.json();

    if (body.recaptchaScore < 0.5) {
      return new Response(JSON.stringify({ success: false, error: 'Low reCAPTCHA score.' }), { status: 403 });
    }

    // 2. Send email with EmailJS
    const templateParams = {
      from_name: body.from_name,
      from_company: body.from_company,
      from_email: body.from_email,
      from_subject: body.from_subject,
      message: body.message,
    };

    if (
      !process.env.EMAILJS_SERVICE_ID ||
      !process.env.EMAILJS_TEMPLATE_ID ||
      !process.env.EMAILJS_PUBLIC_KEY ||
      !process.env.EMAILJS_PRIVATE_KEY
    ) {
      console.error('EmailJS environment variables are not set properly.');
      return new Response(JSON.stringify({ success: false, error: 'EmailJS configuration error.' }), { status: 500 });
    }

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
