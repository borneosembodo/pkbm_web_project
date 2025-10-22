document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  });

  // Set current year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Fake product images (gradient placeholders)
  document.querySelectorAll('.card-media').forEach((el, i) => {
    el.style.background = `linear-gradient(135deg, rgba(0,174,239,${0.08 * (i + 3)}), #fff)`;
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.innerHTML = `<div style="font-size:0.9rem;color:#556">Product Image</div>`;
  });

  // Contact form
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message was sent. (This is a demo)');
    form.reset();
  });
});
