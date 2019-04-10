$(document).ready(function() {
    // TIMER
    function makeTimer() {
        var endTime = new Date("15 October 2018 18:00:00 GMT+0:00"); 
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
    setInterval(function() { makeTimer(); }, 1000);
    // SLIDERS
    $('.about_slider').slick({
        autoplay: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows : true,
        responsive: [
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
    $('.video_slider').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        slidesToShow: 3,
        speed: 500,
        variableWidt: false,
        responsive: [
            {
              breakpoint: 577,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
    $('.partners_slider, .doc_slider, .media_slider').slick({
        autoplay: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows : true,
        responsive: [
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
    // ROAD_MAP
    $('.road_stages_circles').click(function() {
        $('.road_stages_circles').attr('name', '');
        var stageID = $(this).attr('id').substr(6);
        for (var i = stageID; i < 17; i++){
            $('#stage_' + i).attr('name', 'future');
        }
        $(this).attr('name', 'active');
        $('.road_content').attr('name', '');
        $('#road_content_' + stageID).attr('name', 'active');
    });
    // END READY
}); 
