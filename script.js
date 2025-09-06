// Small niceties for the Compare page

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// If you want deep links like /compare#dorron → open the FAQ or focus a card:
if (location.hash) {
  const id = location.hash.slice(1);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.classList.add('focus');
    setTimeout(() => el.classList.remove('focus'), 1600);
  }
}

// Optional: expand/collapse all FAQs via query (?faqs=open/closed)
(function () {
  const params = new URLSearchParams(location.search);
  const fq = params.get('faqs');
  if (!fq) return;
  document.querySelectorAll('.df-faq details').forEach(d => {
    d.open = fq === 'open';
  });
})();
