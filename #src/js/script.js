@@include("fjs/webp.js");
@@include("fjs/swiper-bundle.js");
@@include("fjs/swiper.js");
@@include("fjs/responsive.js");
@@include("fjs/form.js");
@@include("fjs/animate.js");
@@include("fjs/images.js");




const burger = document.querySelector('._burger');
const menuBurgerElems = document.querySelectorAll('._burger > span, body, .menu-header');
const menuLink = document.querySelectorAll('.menu-header__link');
burger.addEventListener('click', function () {
   menuBurgerElems.forEach(function (entry) {
      entry.classList.toggle('_active')
   });
   menuLink.forEach(function (entry) {
      entry.classList.toggle('_active')
   });
});
menuLink.forEach(function (event) {
   event.addEventListener('click', function () {
      menuBurgerElems.forEach(function (entry) {
         entry.classList.remove('_active')
      });
      menuLink.forEach(function (entry) {
         entry.classList.remove('_active')
      });
   });
});

