const burger = document.querySelector('.burger');
const menuBurgerElems = document.querySelectorAll('.burger > span, body, header-menu');
const menuLink = document.querySelectorAll('.header-menu__link');
burger.addEventListener('click', function (e) {
   menuBurgerElems.forEach(function (entry) {
      entry.classList.toggle('active')
   });
   menuLink.forEach(function (entry) {
      entry.classList.toggle('active')
   });
});
menuLink.forEach(function (event) {
   event.addEventListener('click', function (e) {
      menuBurgerElems.forEach(function (entry) {
         entry.classList.toggle('active')
      });
      menuLink.forEach(function (entry) {
         entry.classList.toggle('active')
      });
   });
});