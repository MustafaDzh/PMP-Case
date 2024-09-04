$(document).ready(function () {
  var swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 95,
    centeredSlides: true,
    direction: 'horizontal',
    navigation: {
      nextEl: '.right-button',
      prevEl: '.left-button'
    },
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
      dynamicBullets: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      481: {
        slidesPerView: 3
      }
    }
  });

  $('.left-button').on('click', function () {
    swiper.slidePrev();
  });

  $('.right-button').on('click', function () {
    swiper.slideNext();
  });
});
