$(document).ready(function() {

    var wid = $(window).width();
    var menu = $('nav .container');
    var price_num = true;

    // HEADER
    $('#touch_menu').click(function () {
        menu.slideToggle().css("display","flex");
        $("nav").css("background","#fff");
    });

    if (wid < 769) {
        $("nav").css("background", "none");
        menu.hide();
    }

    $(window).resize(function(){
        wid = $(window).width();
        if(wid < 769) {
            $("nav").css("background","none");
            menu.hide();
        }
        if(wid >= 769) {
            $("nav").css("background", "#fff");
            $("nav .container").css("display","flex");
        }
    });

    // LANGUAGE
    // $(".lang_list a, #mobile_lang_box a").click(function () {
    //     var lang = $(this).attr("name");
    //     document.cookie = "lang=" + lang;
    //     location.reload();
    // });

    $('.lang_box').click(function () {
        $('.lang_list').slideToggle();
    });

    // FixFooter
    setTimeout(function () {
        if (wid >= 1260) {
            $("#fix_footer").slideDown();
        }
    }, 4000);

    $("#cross_fix").click(function () {
        $("#fix_footer").slideUp();
    });

    // NAVIGATION
    $('.anchor_nav').bind("click", function(e){
        var wid_2 = $(window).width();
        if(wid_2 < 785) {
            menu.hide();
            $("nav").css("background","none");
        }
        var anchor = $(this);
        if(wid > 785){
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
        }else{
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1);
        }
        if ($(this).attr("name") !== "goLink") {
            history.pushState(null, null, '/');
            e.preventDefault();
        }
    });

    // SCROLL
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        scrollFunction(scrollTop);
    });

    scrollFunction($(window).scrollTop());

    function scrollFunction(scroll) {
        // Header
        if (wid > 785) {
            $("nav").css("background", "#fff")
        }
        // Animation
        if (scroll + 200 > $(".users").offset().top) {
            $("#anim_1" ).slideDown(500);
            $("#anim_2" ).slideDown(1000);
            $("#anim_3" ).slideDown(1500);
        }
        // Price
        if (scroll + 200 > $(".token").offset().top && price_num === true) {
            price_num = false;
            $({numberValue: 0}).animate({numberValue: 100},{
                duration: 1200, easing: "linear",
                step: function(val){ $(".price_1").html(Math.ceil(val) + '%') }
            });
            $({numberValue: 0}).animate({numberValue: 55},{
                duration: 1200, easing: "linear",
                step: function(val){ $(".price_2").html(Math.ceil(val) + ',44%') }
            });
            $({numberValue: 0}).animate({numberValue: 21},{
                duration: 1200, easing: "linear",
                step: function(val){ $(".price_3").html(Math.ceil(val) + ',06%') }
            });
            $({numberValue: 0}).animate({numberValue: 20},{
                duration: 1200, easing: "linear",
                step: function(val){ $(".price_4").html(Math.ceil(val) + ',00%') }
            });
            $({numberValue: 0}).animate({numberValue: 3},{
                duration: 600, easing: "linear",
                step: function(val){ $(".price_5").html(Math.ceil(val) + ',50%') }
            });
        }
    }

    // TIMER
    function makeTimer() {
        var endTime = new Date("30 December 2019 23:59:59 GMT+0:00");
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

        $(".days_fix").html(days);
        $(".hours_fix").html(hours);
        $(".minutes_fix").html(minutes);
        $(".secs_fix").html(seconds);
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
    $('.popup-content').magnificPopup({
        type: 'inline'
    });

    // YouTube VIDEO
    $(function() {
        $(".youtube").each(function() {
            $(this).append($('<div/>', {'class': 'play'}));
            $(document).delegate('#'+this.id, 'click', function() {
                var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1;rel=0&amp;showinfo=0";
                if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
                var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height(), 'allow':'autoplay; encrypted-media', 'allowfullscreen':'' })
                $(this).replaceWith(iframe);
            });
        });
    });

}); 
