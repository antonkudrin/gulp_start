


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




//let burgerCategory = document.querySelector('.catigory-header__btn');
//let burgerCategoreItem = document.querySelectorAll('.catigory-header__burger > span');
//let catigoryList = document.querySelector('.catigory-header__list');

//burgerCategory.addEventListener('click', function () {
//   burgerCategoreItem.forEach(function (entry) {
//      entry.classList.toggle('active');
//   });
//   catigoryList.classList.toggle('active')
//});
//catigoryList.addEventListener('mouseleave', function () {
//   this.classList.remove('active');
//   burgerCategoreItem.forEach(function (entry) {
//      entry.classList.remove('active');
//   });
//});

//let allCategories = document.querySelector('.bottom-header__categories');
//let categoriesMenu = document.querySelector('.categories-header');

//allCategories.addEventListener('click', function () {
//   this.classList.toggle('_active')
//   categoriesMenu.classList.toggle('_active')
//});
//categoriesMenu.addEventListener('mouseleave', function () {
//   this.classList.remove('_active')
//   allCategories.classList.remove('_active')
//});


//let checkboxCategories = document.querySelectorAll('.categories-header__checkbox');

//for (let index = 0; index < checkboxCategories.length; index++) {
//   const checkboxCategory = checkboxCategories[index];
//   checkboxCategory.addEventListener('change', function () {
//      checkboxCategory.classList.toggle('_active');

//      let checkboxActiveCategory = document.querySelectorAll('.categories-header__checkbox._active');
//      var categoriesQuantity = allCategories.querySelector('.categories-quantity')
      
//      if (checkboxActiveCategory.length > 0) {
         
//         allCategories.classList.add('_categories');
//         categoriesQuantity.innerHTML = categoriesQuantity.getAttribute('data-text') + checkboxActiveCategory.length;
//      } else {
//         allCategories.classList.remove('_categories');
//      }

//   });
//}