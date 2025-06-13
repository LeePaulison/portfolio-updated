// app/api/email/route.js

import emailjs from '@emailjs/nodejs';

export async function POST(req) {
  try {
    const body = await req.json();
    const { from_name, from_company, from_email, from_subject, message } = body;

    const templateParams = {
      from_name,
      from_company,
      from_email,
      from_subject,
      message,
    };

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
    });
  } catch (err) {
    console.error('EmailJS error:', err);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
  }
}
