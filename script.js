'use stict';
////////////
const bio = document.querySelector('.bio-wrapper');
const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', function () {});

const buttonScrollTo = document.querySelector('.arrow');
const section1 = document.querySelector('#section--1');
console.log();
/////// scroll
buttonScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////// reveal section
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
sectionObserver.observe(bio);
