$(document).ready(function () {
    // SLIDER
    $('.team_slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows : false,
    });
    // BLUR
    var winScrollTop;
    var show_price = false;
    var show_shield = false;
    $(window).scroll(function () {

        winScrollTop = $(this).scrollTop();
        var kok = winScrollTop / 500;
        $('.main_blur').css("opacity",kok);

        if(show_price == false && winScrollTop + 300 > $('.procents').offset().top){
            $({numberValue: 0}).animate({numberValue: 84},{
                duration: 1200,
                easing: "linear",
                step: function(val){
                    $(".price").html(Math.ceil(val) + '%');
                }
            });
            show_price = true;
        }

        if(show_shield == false && winScrollTop + 300 > $('.protect').offset().top){
            $('.protect_shield_wrap').css({'animation':'shield 3s ease-in-out',"width":"100%"});
            show_shield = true;
        }
    });
    // TABS
    $('#tab_2').hide();
    $('#tab_btn_1').click(function(){
        $('#tab_2').hide(300);
        $('#tab_btn_2').css('border-bottom', '0px solid #d75312');
        $('#tab_btn_2 h1').css('color', '#080d0f');
        $('#tab_1').show(300);
        $('#tab_btn_1').css('border-bottom', '2px solid #d75312');
        $('#tab_btn_1 h1').css('color', '#d75312');
    });
    $('#tab_btn_2').click(function(){
        $('#tab_1').hide(300);
        $('#tab_btn_1').css('border-bottom', '0px solid #d75312');
        $('#tab_btn_1 h1').css('color', '#080d0f');
        $('#tab_2').show(300);
        $('#tab_btn_2').css('border-bottom', '2px solid #d75312');
        $('#tab_btn_2 h1').css('color', '#d75312');
    });
    // POPUP
    $('.popup-content').magnificPopup({
        type: 'inline'
    });
    // CHECK
    $('.check_box').click(function() {
        var check = $('.check_box').attr('name');
        if (check == 'uncheck'){
            $('.check_box').attr('name', 'check');
        }
        else if (check == 'check'){
            $('.check_box').attr('name', 'uncheck');
        }
    });
    // END READY
});