// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add a scroll event listener to change the nav bar background
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled'); // Add class when scrolled
  } else {
    nav.classList.remove('scrolled'); // Remove class when at the top
  }
});

// Create a custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Create cursor trail elements
const trailElements = [];
for (let i = 0; i < 5; i++) {
  const trail = document.createElement('div');
  trail.classList.add('cursor-trail');
  document.body.appendChild(trail);
  trailElements.push(trail);
}

// Move the custom cursor and trail with the mouse
document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e; // Use clientX and clientY for screen-relative coordinates

  // Move the main cursor
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  // Move the trail elements with a delay
  trailElements.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      trail.style.opacity = 1 - index * 0.2; // Fade out the trail
    }, index * 50); // Add delay for each trail element
  });
});

// Add hover effect for interactive elements
const hoverElements = document.querySelectorAll('a, button, .btn, .skill, .project');
hoverElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    trailElements.forEach(trail => trail.classList.add('hover'));
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    trailElements.forEach(trail => trail.classList.remove('hover'));
  });
});

// Add click animation
document.addEventListener('click', (e) => {
  const clickEffect = document.createElement('div');
  clickEffect.classList.add('click-effect');
  clickEffect.style.left = `${e.clientX}px`;
  clickEffect.style.top = `${e.clientY}px`;
  document.body.appendChild(clickEffect);

  // Remove the effect after the animation ends
  setTimeout(() => {
    clickEffect.remove();
  }, 600);
});

// Add scroll-triggered animations
const sections = document.querySelectorAll('.home-section, .about-section, .skills-section, .projects-section, .contact-section');

const checkVisibility = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight * 0.8 && sectionBottom > 0) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);