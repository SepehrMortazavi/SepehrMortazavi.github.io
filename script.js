const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const progress = document.querySelector('.scroll-progress i');
const chapterLabel = document.querySelector('.chapter-label');
const motions = document.querySelectorAll('.motion');
const chapters = document.querySelectorAll('.chapter');

if (reduceMotion) {
  motions.forEach((item) => item.classList.add('in-view'));
} else {
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -7% 0px' });
  motions.forEach((item) => reveal.observe(item));
}

const updateScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;

  let active = chapters[0];
  chapters.forEach((chapter) => {
    if (chapter.getBoundingClientRect().top <= innerHeight * 0.5) active = chapter;
  });
  chapterLabel.textContent = active?.dataset.chapter || '';
};

addEventListener('scroll', updateScroll, { passive: true });
addEventListener('resize', updateScroll);
updateScroll();
