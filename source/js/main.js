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
    spaceBetween: '15',
    loop: false,
    pagination: false,

  });

  };
