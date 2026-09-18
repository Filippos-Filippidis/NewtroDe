const { test, after } = require('node:test');
const assert = require('node:assert/strict');
const contact = require('../api/contact');
const originalFetch = global.fetch;
const keys = ['BREVO_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL'];
const originalEnv = Object.fromEntries(keys.map(key => [key, process.env[key]]));
after(() => {
  global.fetch = originalFetch;
  for (const key of keys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});
const draft = { name: 'Visitor', email: 'visitor@example.org', interest: 'Architecture', message: 'Project details', website: '' };
async function request(body = draft, method = 'POST', headers = {}) {
  const res = { headers: {}, setHeader(key, value) { this.headers[key] = value; },
    status(code) { this.code = code; return this; }, json(value) { this.body = value; return this; } };
  await contact({ method, headers: { 'content-type': 'application/json', ...headers }, body }, res);
  return res;
}
test('validation, fixed routing and safe email construction', async () => {
  let sent = [];
  process.env.BREVO_API_KEY = 'test-placeholder';
  process.env.CONTACT_FROM_EMAIL = 'sender@example.org';
  process.env.CONTACT_TO_EMAIL = 'recipient@example.org';
  global.fetch = async (url, options) => { sent.push({ url, options }); return { ok: true }; };
  for (const method of ['GET', 'PUT', 'OPTIONS', 'DELETE']) {
    const res = await request(draft, method);
    assert.equal(res.code, 405); assert.equal(res.headers.Allow, 'POST');
  }
  assert.equal((await request(draft, 'POST', { 'content-type': 'text/plain' })).code, 415);
  assert.equal((await request(draft, 'POST', { 'sec-fetch-site': 'cross-site' })).code, 403);
  for (const body of ['{', null, [], 42, {}, { ...draft, name: [] },
    { ...draft, name: '  ' }, { ...draft, message: ' ' }, { ...draft, email: 'bad' },
    { ...draft, name: 'Name\r\nBcc: other@example.org' }, { ...draft, email: 'visitor@example.org\n' },
    { ...draft, name: 'x'.repeat(101) }, { ...draft, email: 'a'.repeat(250) + '@example.org' },
    { ...draft, message: 'x'.repeat(5001) }, { ...draft, interest: 'Unknown' },
    { ...draft, message: '\u0000' }]) {
    assert.equal((await request(body)).code, 400);
  }
  assert.equal((await request('x'.repeat(32769))).code, 413);
  assert.equal((await request({ ...draft, website: 'bot.example' })).code, 200);
  assert.equal(sent.length, 0);
  const res = await request(JSON.stringify({ ...draft, name: '  <Visitor>  ', interest: '',
    message: '<script>alert("x")</script> & \'quoted\'\nNext line', to: 'attacker@example.org', from: 'attacker@example.org' }));
  assert.equal(res.code, 200); assert.deepEqual(res.body, { ok: true });
  assert.equal(res.headers['Cache-Control'], 'no-store');
  assert.equal(sent.length, 1);
  const payload = JSON.parse(sent[0].options.body);
  assert.equal(sent[0].url, 'https://api.brevo.com/v3/smtp/email');
  assert.deepEqual(payload.to, [{ email: 'recipient@example.org' }]);
  assert.equal(payload.sender.email, 'sender@example.org');
  assert.deepEqual(payload.replyTo, { email: draft.email });
  assert.equal(payload.subject, 'New project enquiry — <Visitor>');
  assert.ok(payload.htmlContent.includes('&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; &amp; &#39;quoted&#39;<br>Next line'));
  assert.ok(payload.textContent.includes('<script>'));
  assert.ok(payload.textContent.includes('Not specified'));
  assert.equal((await request(Buffer.from(JSON.stringify(draft)))).code, 200);
  for (const interest of ['Reality Capture', 'Computational Design', 'Digital Fabrication', 'Construction & MMC', 'Education', 'Other']) {
    assert.equal((await request({ ...draft, interest })).code, 200);
  }
  global.fetch = async () => ({ ok: false });
  assert.equal((await request()).code, 502);
  global.fetch = async () => { throw new Error('private provider information'); };
  const failure = await request();
  assert.equal(failure.code, 502);
  assert.ok(!JSON.stringify(failure.body).includes('private'));
  delete process.env.BREVO_API_KEY;
  assert.equal((await request()).code, 503);
});
