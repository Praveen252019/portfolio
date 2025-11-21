// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
// Typing roles for hero section
const roles = [
  "Full Stack Developer",
  "Python Developer",
  "AI & ML",
  "Data Scientist"
];

let currentRole = 0;
let currentChar = 0;
const roleText = document.getElementById("role-text");

function typeEffect() {
  if (!roleText) return;

  if (currentChar < roles[currentRole].length) {
    roleText.textContent += roles[currentRole].charAt(currentChar);
    currentChar++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1300);
  }
}

function eraseEffect() {
  if (!roleText) return;

  if (currentChar > 0) {
    roleText.textContent = roles[currentRole].substring(0, currentChar - 1);
    currentChar--;
    setTimeout(eraseEffect, 50);
  } else {
    currentRole = (currentRole + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();


if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close menu when a link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });
}

// Active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140; // adjust if header height changes
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});

// (Optional) future: typewriter effect for role-text can come here
// Future enhancement: Typewriter effect for role-text