// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
// Базовая инициализация Swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {

  const heroSlider = document.querySelector('.hero__slider');

  if (heroSlider) {
    new Swiper(heroSlider, {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: '.hero__pagination',
        clickable: true,
      },

    });
  }
});


const toursSlider = document.querySelector('.tours__slider-wrapper');

if (toursSlider) {
  new Swiper(toursSlider, {
    modules: [Navigation],

    slidesPerView: '1',
    centeredSlides: true,
    loop: false,
    pagination: false,

  });

}


document.addEventListener('DOMContentLoaded', () => {
  const trainingSlider = document.querySelector('.training__slider');

  if (trainingSlider) {
    new Swiper(trainingSlider, {
      modules: [Navigation],
      slidesPerView: 1, 

      centeredSlides: true,
      initialSlide: 2,


      // Навигация
      navigation: false,

      // {
      //   nextEl: '.training__button-next',
      //   prevEl: '.training__button-prev',
      // },
      slideWidth: 290,

      loop: true,

    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const reviewsSlider = document.querySelector('.reviews__slider');

  if (reviewsSlider) {
    new Swiper(reviewsSlider, {
      modules: [Navigation],
      slidesPerView: 1,

      centeredSlides: true,


      // Навигация
      navigation: false,

      // {
      //   nextEl: '.training__button-next',
      //   prevEl: '.training__button-prev',
      // },
      slideWidth: 290,

      loop: true,

    });
  }
});
