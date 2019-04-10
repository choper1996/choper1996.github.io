jQuery(document).ready(function($) {
	$('.slider').slick({
	    autoplay: false,
	    dots: false,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 3,
	    adaptiveHeight: true,
	    arrows : true,
	    responsive: [
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	            }
	        },
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	            }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	            }
	        }
	    ]
	});
});