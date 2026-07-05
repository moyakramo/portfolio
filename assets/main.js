// mobile nav toggle
document.addEventListener('click', function (e) {
  const t = e.target.closest('.nav-toggle');
  if (t) {
    document.querySelector('.nav-links')?.classList.toggle('open');
  } else if (!e.target.closest('.nav-links')) {
    document.querySelector('.nav-links')?.classList.remove('open');
  }
});

// scrollspy for artifact side nav
(function () {
  const links = Array.from(document.querySelectorAll('.side-nav a[href^="#"]'));
  if (!links.length) return;
  const sections = links
    .map(l => document.getElementById(l.getAttribute('href').slice(1)))
    .filter(Boolean);

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => obs.observe(s));
})();
