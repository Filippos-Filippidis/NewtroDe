// Vercel Node.js function; this repository has no ESM package configuration.
const INTERESTS = new Set(['', 'Architecture', 'Reality Capture', 'Computational Design',
  'Digital Fabrication', 'Construction & MMC', 'Education', 'Other']);
const MAX_BODY_BYTES = 32768;
const controls = /[\x00-\x1f\x7f]/;
const validEmail = value => value.length <= 254 && !controls.test(value) &&
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(value);
const escapeHTML = value => value.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);

module.exports = async function contact(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const reply = (code, body) => res.status(code).json(body);
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return reply(405, { error: 'Method not allowed.' });
  }
  if (!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type'] || '')) {
    return reply(415, { error: 'JSON required.' });
  }
  // JSON-only requests plus no CORS allowance prevent ordinary cross-site form posts.
  if (req.headers['sec-fetch-site'] === 'cross-site') return reply(403, { error: 'Request not allowed.' });
  let body;
  try {
    // Vercel may supply an already-parsed object or a raw body.
    const raw = Buffer.isBuffer(req.body) ? req.body.toString('utf8') : req.body;
    const serialized = typeof raw === 'string' ? raw : JSON.stringify(raw);
    if (Number(req.headers['content-length']) > MAX_BODY_BYTES ||
        (serialized && Buffer.byteLength(serialized) > MAX_BODY_BYTES)) {
      return reply(413, { error: 'Request too large.' });
    }
    body = typeof raw === 'string' ? JSON.parse(raw) : raw;
  } catch {
    return reply(400, { error: 'Invalid request.' });
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return reply(400, { error: 'Invalid request.' });
  const data = {};
  for (const field of ['name', 'email', 'interest', 'message', 'website']) {
    const value = body[field] ?? (['interest', 'website'].includes(field) ? '' : undefined);
    if (typeof value !== 'string') return reply(400, { error: 'Invalid enquiry.' });
    // Reject control characters before trimming header-like fields.
    if (['name', 'email'].includes(field) && controls.test(value)) return reply(400, { error: 'Invalid enquiry.' });
    data[field] = value.trim();
  }
  if (data.website) return reply(200, { ok: true });
  if (!data.name || data.name.length > 100 || !validEmail(data.email) ||
      !INTERESTS.has(data.interest) || !data.message || data.message.length > 5000 ||
      /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(data.message)) {
    return reply(400, { error: 'Please check your enquiry.' });
  }
  const apiKey = process.env.BREVO_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to || !validEmail(from) || !validEmail(to)) {
    return reply(503, { error: 'Unable to send enquiry. Please try again later.' });
  }
  const entries = [['Name', data.name], ['Email', data.email],
    ['Area of interest', data.interest || 'Not specified'], ['Message', data.message]];
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        sender: { name: 'N3WTRO Website', email: from },
        to: [{ email: to }], replyTo: { email: data.email },
        subject: `New project enquiry — ${data.name}`,
        textContent: entries.map(([label, value]) => `${label}:\n${value}`).join('\n\n'),
        htmlContent: '<!doctype html><html><body>' + entries.map(([label, value]) =>
          `<p><strong>${label}</strong><br>${escapeHTML(value).replace(/\r\n|\r|\n/g, '<br>')}</p>`).join('') + '</body></html>'
      })
    });
    if (!response.ok) throw new Error('Provider failure');
    return reply(200, { ok: true });
  } catch {
    // Never log submitted content, configuration or provider responses.
    return reply(502, { error: 'Unable to send enquiry. Please try again later.' });
  }
};
