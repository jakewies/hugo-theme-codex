window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`#TableOfContents ul li a[href="#${id}"]`).classList.add('active');
      } else {
        document.querySelector(`#TableOfContents ul li a[href="#${id}"]`).classList.remove('active');
      }
    });
  });

  // Track all headers that have an `id` applied
  document.querySelectorAll('article h3[id], article h2[id]').forEach((section) => {
    observer.observe(section);
  });
});
