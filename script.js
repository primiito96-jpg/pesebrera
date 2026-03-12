// ===== CARRUSEL =====
// ===== CARRUSEL PRO =====
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Detectar cuántas tarjetas avanzar
function getStep() {
  return window.innerWidth <= 768 ? 1 : 2;
}

// Ancho real tarjeta
function getCardWidth() {
  const gap = 30;
  return cards[0].getBoundingClientRect().width + gap;
}

// Mover carrusel
function moveTo(index) {
  const cardWidth = getCardWidth();

  track.scrollTo({
    left: index * cardWidth,
    behavior: 'smooth'
  });

  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

// Flecha derecha
nextBtn?.addEventListener('click', () => {
  const step = getStep();

  if (currentIndex < cards.length - step) {
    currentIndex += step;
  } else {
    currentIndex = cards.length - 1;
  }

  moveTo(currentIndex);
});

// Flecha izquierda
prevBtn?.addEventListener('click', () => {
  const step = getStep();

  if (currentIndex > step - 1) {
    currentIndex -= step;
  } else {
    currentIndex = 0;
  }

  moveTo(currentIndex);
});

// Dots clicables
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    moveTo(index);
  });
});

// Detectar swipe manual
track.addEventListener('scroll', () => {
  const cardWidth = getCardWidth();
  const index = Math.round(track.scrollLeft / cardWidth);

  if (index !== currentIndex) {
    currentIndex = index;
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }
});


// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }

  lastScroll = currentScroll;
});
