jQuery(document).ready(function($) {
	$('.mobile_nav img').click(function() {
		$('.desktop_nav').slideToggle();
	});
});

// var menu = $('nav a');
// $(window).resize(function(){ 
// 	var wid = $(window).width(); 
// 	if(wid > 1199 && $('nav').is(':hidden')){
// 		$('nav').css('display', 'flex');
// 	}
// });