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

// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  // Инициализация слайдера hero, если он есть на странице
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
      slidesPerView: 1, // 1 слайд на мобильных

      centeredSlides: true,
      initialSlide: 2, // Начинаем с третьей карточки


      // Навигация
      navigation: false,

      // {
      //   nextEl: '.training__button-next',
      //   prevEl: '.training__button-prev',
      // },
      slideWidth: 290,

      loop: false,

    });
  }
});

