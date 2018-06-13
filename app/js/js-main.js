  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************


});
$(document).ready(function() {
 
	$("form").submit(function() {
		var $form = $(this);
		var data = $form.serialize();
		
		if (validateForm($form)) {
			$.post("./assets/mail.php", data, function(resp) {});
			
			
//*************************************************************************************************
			//КОД ДЛЯ GOOGLE ANALYTICS:
			//ga('send', 'event', 'FormContact1', {nonInteraction: true});
			//ga('send', 'event',	'FormContact1', 'play', 'Fall Campaign');

//*************************************************************************************************			
			//КОД ДЛЯ МЕТРИКИ ЯНДЕКС:
			// ЗДЕСЬ ХХХХХХ - номер счетчика, FormContact - имя события, которое будет отображаться в метрике
			//yaCounter39173625.reachGoal('FormContact');
//*************************************************************************************************

			$('#exampleModal').arcticmodal({
				beforeOpen: function(data, el) {
					if ($('.modal').hasClass('show')) {
						$('.modal').addClass('zoomOut');						
                  		$('.modal_wrapper').addClass('fadeOut');                  		
                        $('.modal').removeClass('show zoomIn');      
                        $('.modal_wrapper').removeClass('show fadeIn');                  		
                 	}
				}				
    		});
//
		} else { return false; };

		return false;
	});

});
 

function validateForm($form) {
	var valid = true;
	$form.find(".required").each(function(index, element) {
		if ($(element).val() == "") {
			$(element).addClass("modal_error");
			setTimeout(function(){
                        $(element).removeClass('modal_error');
                  }, 1500);
			valid = false;
		}
		else {
			$(element).removeClass("modal_error");
		}
	});
	return valid;

}
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



