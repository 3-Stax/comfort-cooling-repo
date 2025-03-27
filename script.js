const carouselTrack = document.querySelector('.carousel-track');
const carouselImages = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function moveToSlide(index) {
  if (index < 0) {
    index = carouselImages.length - 1;
  } else if (index >= carouselImages.length) {
    index = 0;
  }
  const offset = -index * 100;
  carouselTrack.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
  carouselTrack.style.transform = `translateX(${offset}%)`;
  currentIndex = index;
}

prevButton.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    moveToSlide(currentIndex - 1);
  } else if (e.key === 'ArrowRight') {
    moveToSlide(currentIndex + 1);
  }
});

let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    moveToSlide(currentIndex + 1);
  }, 3000); 
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

startAutoPlay();

const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);

// Pause autoplay on user interaction
carouselTrack.addEventListener('touchstart', stopAutoPlay);
carouselTrack.addEventListener('touchend', startAutoPlay);
carouselTrack.addEventListener('mousedown', stopAutoPlay);
carouselTrack.addEventListener('mouseup', startAutoPlay);

document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll('.lazy');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => observer.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    });
  }
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 5 }
    }
  });

  $('.owl-carousel.lg-arrow').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 5 }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const contentWrapper = document.getElementById('contentWrapper');

  toggleButton.addEventListener('click', function () {
    const isExpanded = contentWrapper.classList.toggle('collapsed');
    toggleButton.setAttribute('aria-expanded', !isExpanded);
    toggleButton.textContent = isExpanded ? 'Expand' : 'Collapse';
  });
});