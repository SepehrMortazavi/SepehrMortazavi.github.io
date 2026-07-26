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

let ticking = false;
const updateScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  document.documentElement.style.setProperty('--hero-scroll', Math.min(1, scrollY / Math.max(1, innerHeight)));

  let active = chapters[0];
  chapters.forEach((chapter) => {
    if (chapter.getBoundingClientRect().top <= innerHeight * 0.5) active = chapter;
  });
  chapterLabel.textContent = active?.dataset.chapter || '';

  if (!reduceMotion) {
    document.querySelectorAll('.project-scene').forEach((scene) => {
      const rect = scene.getBoundingClientRect();
      const raw = (innerHeight - rect.top) / (innerHeight + rect.height);
      const value = Math.max(0, Math.min(1, raw));
      scene.style.setProperty('--scene', value.toFixed(4));
    });
  }
  ticking = false;
};

addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateScroll);
    ticking = true;
  }
}, { passive: true });
addEventListener('resize', updateScroll);
updateScroll();
