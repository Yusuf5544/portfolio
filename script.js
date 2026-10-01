const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

// Light / dark toggle (remembers the choice)
function setTheme(t) {
  root.setAttribute('data-theme', t);
  try { localStorage.setItem('theme', t); } catch (e) {}
  btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}
btn.addEventListener('click', () =>
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
setTheme(root.getAttribute('data-theme') || 'light');

// Typing effect
const el = document.getElementById('typed');
const words = ['Software Engineer', 'AI Researcher', 'NLP and Computer Vision Enthusiast'];
if (el && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let w = 0, i = 0, deleting = false;
  (function tick() {
    const word = words[w];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let delay = deleting ? 40 : 90;
    if (!deleting && i === word.length) { deleting = true; delay = 1600; }
    else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 400; }
    setTimeout(tick, delay);
  })();
}