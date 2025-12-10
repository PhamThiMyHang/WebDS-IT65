// Animation fade-up khi lướt tới
const items = document.querySelectorAll('.step');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up');
    }
  });
}, { threshold: 0.2 });

items.forEach(item => {
  observer.observe(item);
});
