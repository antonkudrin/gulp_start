$(document).on("ready", function () {
   $(".regular").slick({
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,

      responsive: [
         {
            breakpoint: 2570,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });
});