//$(document).ready(function (event) {
//   // Параллакс
//   $(window).scroll(function () {
//      var scrolTop = $(this).scrollTop();
//      var menuSmall = $(".header__body, .header__logo, header, .firstscreen");
//      if (scrolTop > 50) {
//         menuSmall.addClass('small')
//      } else {
//         menuSmall.removeClass('small')
//      }
//   });

//   // Добавить плавную прокрутку ко всем ссылкам
//   $("a").on('click', function (event) {
//      if (this.hash !== "") {
//         event.preventDefault();
//         var hash = this.hash;
//         $('html, body').animate({
//            scrollTop: $(hash).offset().top
//         }, 800, function () {
//            window.location.hash = hash;
//         });
//      }
//   });

//});