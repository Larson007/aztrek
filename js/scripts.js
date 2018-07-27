$(document).ready(function () {

  $('.burger, .overlay').click(function () {
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".burger").addClass("show");
    } else {
      $(".burger").removeClass("show");
    }
  });

  //=============Carousel=================//




  $(".owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    margin: 0,
    nav: true,
    navtext: ('Précédent', 'Suivant'),
    dots: false,
    autoplay: false,
    autoplaySpeed: 200,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }

  });

  $(".owl-carousel-inside").owlCarousel({
    nav: false,
    loop: true,
    margin: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 200,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }

  });



  //=============Map Monde=================//


  //--------Mexique-----------//

  $('.boutton-mexique').mouseover(function () {
    $('.map-mexique').addClass("show");
  });
  $('.boutton-mexique').mouseout(function () {
    $('.map-mexique').removeClass("show");
  });


  //--------Guatemala-----------//
  $('.boutton-guatemala').mouseover(function () {
    $('.map-guatemala').addClass("show");
  });
  $('.boutton-guatemala').mouseout(function () {
    $('.map-guatemala').removeClass("show");
  });
  //--------Honduras-----------//
  $('.boutton-honduras').mouseover(function () {
    $('.map-honduras').addClass("show");
  });
  $('.boutton-honduras').mouseout(function () {
    $('.map-honduras').removeClass("show");
  });
  //--------salvador-----------//
  $('.boutton-salvador').mouseover(function () {
    $('.map-salvador').addClass("show");
  });
  $('.boutton-salvador').mouseout(function () {
    $('.map-salvador').removeClass("show");
  });
  //--------Costa-rica-----------//
  $('.boutton-costa-rica').mouseover(function () {
    $('.map-costa-rica').addClass("show");
  });
  $('.boutton-costa-rica').mouseout(function () {
    $('.map-costa-rica').removeClass("show");
  });






});