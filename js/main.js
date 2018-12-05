$(document).ready(function(){
    //Scroll Events
    $(window).scroll(function(){

        var wScroll = $(this).scrollTop();

        //Activate menu
        if(wScroll > 20){
            $('#main-nav').addClass('active');
            $('$slide_out_menu').addClass('scrolled');
        }
        else {
            $('#main-nav').removeClass('active');
            $('$slide_out_menu').removeClass('scrolled');
        };

        //Scroll Effects

    })

    // Navigation
	$('#navigation').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide_out_menu').toggleClass('open');

		if ($('#slide_out_menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#slide_out_menu').removeClass('open');
			})
		}
	});

    // Initialazing WOW ANIMATION

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

    // @media query

    if($(window).width() > 1200){
        // do functionality on screens larger than 1200px
        // $('#navigation').css('display', 'block');
        // $('.logo_block').removeClass('col-md-6').addClass('col-md-12');
        // $('.navigation_block').css('display', 'none');
    }
    if($(window).width() > 992 &&  $(window).width() < 1199){
        // do functionality on screens smaller than 1199px and larger than 992px
    }
    if($(window).width() > 768 &&  $(window).width() < 991){
        // do functionality on screens smaller than 991px and larger than 768px
    }
    if($(window).width() < 767){
        // do functionality on screens smaller than 768px
        $('#navigation').css('display', 'block');
        $('.logo').css('float', 'right');
    }
    if($(window).width() < 320){
        // do functionality on screens smaller than 320px
    }
})