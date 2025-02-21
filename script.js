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
    carouselTrack.style.transform = `translateX(${offset}%)`;
    currentIndex = index;
  }

  prevButton.addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
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
  });

  $(document).ready(function(){
    
    $('.owl-carousel.lg-arrow').owlCarousel({
      loop: true, 
      margin: 20, 
      nav: true, 
      dots: false, 
      responsive: {
        0: {
          items: 1 
        },
        600: {
          items: 3 
        },
        1000: {
          items: 5 
        }
      }
    });
  });