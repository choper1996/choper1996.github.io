jQuery(document).ready(function($) {

	// anchors
	$('.nav_links, #main a').bind("click", function(e){
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 1000);
	    e.preventDefault();
	});

	// navigation
	$('#burger').click(function() {
		$('#header_txt_wrap').slideToggle(300);
	});

	// popup
	$('.popup-content').magnificPopup({
	    type: 'inline'
	});

	$('.close_area').click(function() {
		$('.mfp-close').click();
	});

	// choicee color
	$('.bear_color').click(function() {
		$(this).siblings().removeClass('active_color');
		$(this).addClass('active_color');
		$('.bear_wrap > img').removeClass('active');

		var colorId = $(this).attr('id');

		$('#bear_' + colorId).addClass('active');
	});

	// FAQ toggle
	$('#faq section').click(function(e) {
		if ( $(this).attr('class') === 'faq_hover') {
			$(this).find('.answer').slideToggle(300);
			$(this).removeClass();
		} else {
			$(this).find('.answer').slideToggle(300);
			$(this).addClass('faq_hover');
		}
	});

	// instagramm slider
	$('.inst_slider').slick({
	    autoplay: true,
	    dots: true,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 4,
	    adaptiveHeight: true,
	    arrows : false,
	    responsive: [
	        {
	          breakpoint: 992,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 1,
	            infinite: true
	          }
	        },
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	});
});

