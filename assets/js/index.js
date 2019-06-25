jQuery(document).ready(function($) {
	// MENU
	$('#burger').click(function() {
		$('#navigation, #header, #header_img_wrap, #less_nav_wrap').toggleClass('active');
	});
});