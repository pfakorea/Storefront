// var lazyLoadInstance = new LazyLoad({
//   elements_selector: ".lazy"
//   // ... more custom settings?
// });
var myLazyLoad = new LazyLoad({
  elements_selector: ".lazy",
  load_delay: 0 //adjust according to use case
});


// Animation
AOS.init({
  duration: 1000,
});

// Scroll Parallax
var rellax = new Rellax('.rellax');

// Smooth Scroll
// var scroll = new SmoothScroll('a.smooth-scroll', {
// 	speed: 1000,
// 	offset: 0,
// 	easing: 'easeInOutQuint'
// });


// Swiper1
var swiperCycler = new Swiper('.product-cycler', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  }
});


// Swiper2
var swiperFade = new Swiper(".swiper-fade", {
  // autoplay: 2500,
  // autoplayDisableOnInteraction: true,
  slidersPerView: 1,
  effect: "fade",
  speed: 300,
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Swiper3
var swiperHomeTile = new Swiper('.tile-cycler', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 'auto',
  spaceBetween: 30,
  // init: false,
  breakpoints: {
    2000: {
      slidesPerView: 'auto',
      spaceBetween: 40,
    },
  }
});


// Swiper4
var swiperDiscover = new Swiper('.discover-cycler', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 'auto',
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    2000: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  },
});


// Swiper5
var swiperBestseller = new Swiper('.product-cycler-recommendation', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  }
});
