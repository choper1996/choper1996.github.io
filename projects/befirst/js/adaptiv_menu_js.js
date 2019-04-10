	jQuery(document).ready(function($) {
		$('.nav_burger').click(function() {
			$(this).toggleClass('nav_burger_active');
		});
		$('.nav_burger').click(function() {
			$('.nav_btns_area').slideToggle();
			$('.nav_btns_area').css('display', 'flex');
		});
	});