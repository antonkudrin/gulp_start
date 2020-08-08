var mySwiper = new Swiper('._swiper', {

   //direction: 'vertical',
   direction: 'horizontal',
   loop: true,
   //autoHeight: true,
   centeredSlides: true,
   slidesPerView: 1,

   autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
   // Если нам нужна нумерация страниц
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Навигационные стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

});
