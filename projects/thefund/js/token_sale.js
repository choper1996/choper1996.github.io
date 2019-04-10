$(document).ready(function() {
	// TABS
	$('.tab_wrap button').click(function() {
		$('.tab_wrap button').attr('name', '');
		$(this).attr('name', 'active');
	});
	// TIMER
	function makeTimer() {
	    var endTime = new Date("31 September 2019 11:26:00 GMT+0:00"); 
	    endTime = (Date.parse(endTime) / 1000);
	    var now = new Date();
	    now = (Date.parse(now) / 1000);
	    var timeLeft = endTime - now;
	    var days = Math.floor(timeLeft / 86400); 
	    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
	    $("#days").html(days);
	    $("#hours").html(hours);
	    $("#minutes").html(minutes);
	    $("#seconds").html(seconds);
	} 
    // END READY
}); 
