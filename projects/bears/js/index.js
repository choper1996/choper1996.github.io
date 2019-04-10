jQuery(document).ready(function($) {

	// anchors
    const anchorLinks = $('.nav_links, #main a'),
        window = $('html, body');

    anchorLinks.bind("click", function(e){
	    let anchor = $(this);

        window.stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 1000);

	    e.preventDefault();
	});

	// navigation
    const burger = $('#burger'),
        headerText = $('#header_txt_wrap');

    burger.click(function() {
        headerText.slideToggle(300);
	});

	// popup
	$('.popup-content').magnificPopup({
	    type: 'inline'
	});

	// popup close windows
	$('.close_area').click(function() {
		$('.mfp-close').click();
	});

	// choicee color
    const bearColor = $('.bear_color'),
        bearImg = $('.bear_wrap > img');

    bearColor.click(function() {
		$(this).siblings().removeClass('active_color');
		$(this).addClass('active_color');
        bearImg.removeClass('active');

		let colorId = $(this).attr('id');

		$('#bear_' + colorId).addClass('active');
	});

	// FAQ toggle
	const faqSection = $('#faq section'),
        faqAnswer = $('.answer');

    faqSection.click(function(e) {
		if ( $(this).attr('class') === 'faq_hover') {
			$(this).find(faqAnswer).slideToggle(300);
			$(this).removeClass();
		} else {
			$(this).find(faqAnswer).slideToggle(300);
			$(this).addClass('faq_hover');
		}
	});

	// instagram slider
	const instagramSlider = $('.inst_slider');

    instagramSlider.slick({
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
    //end ready
});

