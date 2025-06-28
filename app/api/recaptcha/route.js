// app/api/recaptcha/route.js

export async function POST(req) {
  try {
    const { recaptcha } = await req.json();

    if (!recaptcha) {
      return new Response(JSON.stringify({ success: false, error: 'Missing reCAPTCHA token' }), { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;

    const googleResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: recaptcha,
      }).toString(),
    });

    const data = await googleResponse.json();

    if (!data.success || data.score < 0.5) {
      return new Response(JSON.stringify({ success: false, score: data.score }), { status: 403 });
    }

    return new Response(JSON.stringify({ success: true, score: data.score }), {
      status: 200,
    });
  } catch (err) {
    console.error('reCAPTCHA error:', err);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500 });
  }
}
