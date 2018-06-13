//*****************
var owl = $('#owl-1');

owl.owlCarousel({
  loop:true,//Зацикливаем слайдер
  margin:40,
  nav:true,
  dots: true,
  //autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
  //autoplay:true, //Автозапуск слайдера
  smartSpeed:1000, //Время движения слайда
  autoplayTimeout:30, //Время смены слайда
  responsiveClass:true,
  dotsEach: true,

  responsive:{
    0:{
      items:1,
      dots: false
    },
    768:{
      items:2
    },
    1000:{
      items:2
    }
  }
});


//при нажатии на ссылку
  $(".navbar-collapse a").click(function () {
    if (screen.width > '992') return;
    //если она не имеет класс dropdown-toggle
    if (!$(this).hasClass("dropdown-toggle")) {
      //то закрыть меню
      $(".navbar-collapse").collapse('hide');
    }
  });


  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    var position = $(window).scrollTop();
    var width = document.documentElement.clientWidth;
    if (width <= '992') return;
    if (position >= 630) {
      $('.navbar').css({
        opacity: '1'
      });
      $('.navbar').addClass('fixed-top');
    }
    if (position <= 400) {
      $('.navbar').css({
        opacity: '1'
      });
      $('.navbar').removeClass('fixed-top');
    }
    if (position > 410 && position < 600) {
      $('.navbar').css({
        opacity: '0'
      });
    }
  };

//$('a.nav-link').click(function () {
//  var el = $(this).attr('href');
//  $('html,body').animate({scrollTop: $(this).offset().top - 200}, 500);
//
//  $(".navbar-collapse").collapse('hide');
//  return false;
//});

//*****************



