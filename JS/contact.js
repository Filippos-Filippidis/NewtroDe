(() => {
  const dialog = document.createElement('dialog');
  dialog.id = 'contact-modal';
  dialog.className = 'contact-modal';
  dialog.setAttribute('aria-labelledby', 'contact-title');
  dialog.setAttribute('aria-describedby', 'contact-intro');
  dialog.innerHTML = `
    <button class="about-modal-close contact-close" type="button" aria-label="Close enquiry">×</button>
    <h2 class="section-label" id="contact-title" tabindex="-1">START A PROJECT</h2>
    <p id="contact-intro">Tell us a little about your project.</p>
    <form novalidate>
      <div class="contact-fields">
        <div class="contact-field">
          <label for="contact-name">NAME *</label>
          <input id="contact-name" name="name" autocomplete="name" required maxlength="100" aria-describedby="contact-name-error">
          <p class="contact-error" id="contact-name-error"></p>
        </div>
        <div class="contact-field">
          <label for="contact-email">EMAIL *</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required maxlength="254" aria-describedby="contact-email-error">
          <p class="contact-error" id="contact-email-error"></p>
        </div>
        <div class="contact-field contact-wide">
          <label for="contact-interest">I'M INTERESTED IN</label>
          <select id="contact-interest" name="interest">
            <option value="">Select an area (optional)</option>
            <option>Architecture</option><option>Reality Capture</option>
            <option>Computational Design</option><option>Digital Fabrication</option>
            <option>Construction &amp; MMC</option><option>Education</option><option>Other</option>
          </select>
        </div>
        <div class="contact-field contact-wide">
          <label for="contact-message">MESSAGE *</label>
          <textarea id="contact-message" name="message" rows="5" required maxlength="5000" aria-describedby="contact-message-error" placeholder="Tell us briefly what you're trying to understand, design, make or build."></textarea>
          <p class="contact-error" id="contact-message-error"></p>
        </div>
      </div>
      <div hidden aria-hidden="true">
        <label for="contact-website">Website</label>
        <input id="contact-website" name="website" tabindex="-1" autocomplete="off">
      </div>
      <button class="primary-btn" type="submit">SEND ENQUIRY →</button>
    </form>
    <p class="contact-status" role="status" aria-live="polite" aria-atomic="true"></p>
    <p class="contact-direct">Or email <a href="mailto:filippos@n3wtro.com">filippos@n3wtro.com</a> directly, including any project documents.</p>`;
  document.body.append(dialog);

  const form = dialog.querySelector('form');
  const submit = form.querySelector('[type="submit"]');
  const status = dialog.querySelector('.contact-status');
  let opener;
  let previousOverflow;
  let sending = false;

  document.querySelectorAll('[data-contact-open]').forEach(button => {
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', dialog.id);
    button.addEventListener('click', () => {
      if (dialog.open) return;
      opener = button;
      previousOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      dialog.querySelector('#contact-title').focus();
    });
  });

  dialog.querySelector('.contact-close').addEventListener('click', () => dialog.close());
  // Keep Escape from reaching the older About/project document handlers.
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      dialog.close();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = [...dialog.querySelectorAll('button:not(:disabled), input:not([tabindex="-1"]), select, textarea, a[href]')];
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement.id === 'contact-title')) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  let backdropPointer = false;
  const outside = event => {
    const rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  };
  dialog.addEventListener('pointerdown', event => { backdropPointer = outside(event); });
  dialog.addEventListener('click', event => {
    if (event.target === dialog && backdropPointer && outside(event)) dialog.close();
    backdropPointer = false;
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    opener?.focus({ preventScroll: true });
  });

  function fieldError(field, message) {
    form.elements[field].setAttribute('aria-invalid', String(Boolean(message)));
    dialog.querySelector(`#contact-${field}-error`).textContent = message;
  }
  ['name', 'email', 'message'].forEach(field => {
    form.elements[field].addEventListener('input', () => fieldError(field, ''));
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending) return;
    const data = Object.fromEntries(new FormData(form));
    Object.keys(data).forEach(key => { data[key] = data[key].trim(); });
    const errors = {
      name: !data.name || data.name.length > 100 || /[\x00-\x1f\x7f]/.test(data.name) ? 'Enter your name (up to 100 characters).' : '',
      email: !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) || data.email.length > 254 || !form.elements.email.validity.valid ? 'Enter a valid email address.' : '',
      message: !data.message || data.message.length > 5000 ? 'Enter a message (up to 5,000 characters).' : ''
    };
    Object.entries(errors).forEach(([field, message]) => fieldError(field, message));
    const invalid = Object.keys(errors).find(field => errors[field]);
    if (invalid) {
      status.textContent = 'Please check the highlighted fields.';
      form.elements[invalid].focus();
      return;
    }
    sending = true;
    submit.disabled = true;
    form.setAttribute('aria-busy', 'true');
    // Preserve exactly the submitted draft until the request settles.
    [...form.elements].forEach(control => { control.disabled = true; });
    submit.textContent = 'SENDING…';
    status.textContent = 'Sending your enquiry…';
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok || (await response.json()).ok !== true) throw new Error('Submission failed');
      form.reset();
      status.textContent = 'Thanks — your enquiry has been sent.';
    } catch {
      status.textContent = 'We couldn’t confirm your enquiry was sent. Please try again or email filippos@n3wtro.com.';
    } finally {
      sending = false;
      [...form.elements].forEach(control => { control.disabled = false; });
      form.removeAttribute('aria-busy');
      submit.textContent = 'SEND ENQUIRY →';
    }
  });
})();
