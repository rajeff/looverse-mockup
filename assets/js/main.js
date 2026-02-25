(() => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach((a) => {
    const isActive = a.getAttribute('href') === path;
    a.classList.toggle('active', isActive);
  });

  const form = document.getElementById('contact-form');
  const textarea = document.getElementById('message');
  const count = document.getElementById('char-count');
  const note = document.getElementById('form-note');

  if (textarea && count) {
    const updateCount = () => { count.textContent = String(textarea.value.length); };
    textarea.addEventListener('input', updateCount);
    updateCount();
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (note) note.textContent = 'Thanks — this is a mockup, so your message was not sent.';
      form.reset();
      if (count) count.textContent = '0';
    });
  }
})();
