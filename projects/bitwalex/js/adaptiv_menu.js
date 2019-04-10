jQuery(document).ready(function($) {
	$('.nav_burger').click(function() {
		$(this).toggleClass('nav_burger_active');
	});
	$('.nav_burger').click(function() {
		$('nav').slideToggle();
		$('nav').css('display', 'flex');
	});
});

var menu = $('nav a');
$(window).resize(function(){ 
	var wid = $(window).width(); 
	if(wid > 1199 && $('nav').is(':hidden')){
		$('nav').css('display', 'flex');
	}
});