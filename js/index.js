$(document).ready(function () {
  var swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 95,
      centeredSlides: true,
      direction: 'horizontal',
      navigation: {
        nextEl: '.right-button',
        prevEl: '.left-button'
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
  });
});
