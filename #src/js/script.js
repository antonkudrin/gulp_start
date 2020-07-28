@@include("fjs/responsive.js");
@@include("fjs/menuBurger.js");
@@include("fjs/popup.js");
@@include("fjs/slick.js");
@@include("fjs/sliders.js");
@@include("fjs/form.js");

$(document).ready(function (event) {
   // Параллакс
   $(window).scroll(function () {
      var scrolTop = $(this).scrollTop();
      var menuSmall = $(".header__body, .header__logo, header, .firstscreen");
      if (scrolTop > 50) {
         menuSmall.addClass('small')
      } else {
         menuSmall.removeClass('small')
      }
   });

   // Добавить плавную прокрутку ко всем ссылкам
   $("a").on('click', function (event) {
      if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
            window.location.hash = hash;
         });
      }
   });

});




//var galleryImage = document.querySelectorAll('.gallery__image-wrapper');
//galleryImage.forEach(function (params) {
//   params.onmouseover = params.onmouseout = handler;
//}); console.log(handler);
//function handler(event) {

//   function str(el) {
//      if (!el) return "null"
//      return el.className || el.tagName;
//   }

//   log.value += event.type + ':  ' +
//      'target=' + str(event.target) +
//      ',  relatedTarget=' + str(event.relatedTarget) + "\n";
//   log.scrollTop = log.scrollHeight;

//   if (event.type == 'mouseover') {
//      event.target.style.background = 'pink'
//   }
//   if (event.type == 'mouseout') {
//      event.target.style.background = ''
//   }
//}




