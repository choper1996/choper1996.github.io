$(document).ready(function() {

    // NAVIGATION
    const navTriger = $('.nav_lang, .lang_list a'),
        langList = $('.lang_list');

    navTriger.click(function() {
        langList.slideToggle();
    });

    // COURENCY LIST
    $('.courency_list_btn').click(function() {
        $('.courency_list').slideToggle();
    });
    $('.courency_list p').click(function() {
        $('.courency_list_btn span').html( $(this).html());
        $('.courency_list').slideToggle();
    });

    // CALCULATOR
    let btc_course,
    	eth_course;

    $('.calc_reverse').click(function(event) {
        if ($('.courency_list_btn span').html() === "ETH") {
            $.ajax({ 
                url: "https://api.coinmarketcap.com/v2/ticker/1027/?convert=usd",  
                success: function (object) { 
                    let cours = object.data.quotes.USD.price;
                    $('.calc_cost').html( ($('.courency_input').val() * cours) / 0.25);
                    alert(cours);
                }, 
                error: function (object) { console.log(object) } 
            });
        }
        
        if ($('.courency_list_btn span').html() === "BTC") {
            $.ajax({ 
                url: "https://api.coinmarketcap.com/v2/ticker/1/?convert=usd",  
                success: function (object) { 
                    let cours = object.data.quotes.USD.price;
                    $('.calc_cost').html( ($('.courency_input').val() * cours) / 0.25);
                    alert(cours);
                }, 
                error: function (object) { console.log(object) } 
            });
        }
        $('.calc_cost').html( $('.courency_input').val() * object.data.quotes.USD.price );
    });

    // TIMER
    function makeTimer() {
        let endTime = new Date("31 September 2019 11:26:00 GMT+0:00");
        endTime = (Date.parse(endTime) / 1000);
        let now = new Date();
        now = (Date.parse(now) / 1000);
        let timeLeft = endTime - now,
            days = Math.floor(timeLeft / 86400),
            hours = Math.floor((timeLeft - (days * 86400)) / 3600),
            minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60),
            seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);
    }
    setInterval(function() { makeTimer(); }, 1000);
    // SLIDER
    $('.slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows : false,
    });
    //FAQ SECTION SLIDE
    let faqSectionId = 1;
    $('.next_faq_btn').click(function() {
        faqSectionId = faqSectionId + 1;
        if (faqSectionId === 3){
            faqSectionId = 2
        }
        $('.faq .slide_number').html(faqSectionId);
        $(".qustions_items").attr('name', '');
        $(".global_answer").html('');
        $('.questions_area').attr('name', '');
        $('.q_' + faqSectionId).attr('name', 'active');
    });
    $('.prev_faq_btn').click(function() {
        faqSectionId = faqSectionId - 1;
        if (faqSectionId == 0){
            faqSectionId = 1
        }
        $('.faq .slide_number').html(faqSectionId);
        $(".qustions_items").attr('name', '');
        $(".global_answer").html('');
        $('.questions_area').attr('name', '');
        $('.q_' + faqSectionId).attr('name', 'active');
    });
    // FAQ
    $(".qustions_items").click(function() {
        if ($(this).attr('name') === ""){
            $(".qustions_items").attr('name', '');
            $(this).attr('name','active');
            $(".global_answer").html($('.qustions_items[name="active"] .answer').html() );
        }
        else{
            $(this).attr('name','');
            $(".global_answer").html(' ');
        }
    });
    //MEDIA SECTION SLIDE
    let mediaSectionId = 1;
    $('.next_media_btn').click(function() {
        mediaSectionId = mediaSectionId + 1;
        if (mediaSectionId === 3){
            mediaSectionId = 2
        }
        $('.media .slide_number').html(mediaSectionId);
        $('.media_wrap').attr('name', '');
        $('.m_' + mediaSectionId).attr('name', 'active');
    });
    $('.prev_media_btn').click(function() {
        mediaSectionId = mediaSectionId - 1;
        if (mediaSectionId === 0){
            mediaSectionId = 1
        }
        $('.media .slide_number').html(mediaSectionId);
        $('.media_wrap').attr('name', '');
        $('.m_' + mediaSectionId).attr('name', 'active');
    });
    // SUBSCRIBE
    let bull = false;
    $('.footer_submit').click(function() {
        let email = $('footer input').val();
        if(email === ""){
            email.val('').attr('placeholder', 'Неверный email');;
            return false;
        }
        bull = false;
        for (let i = 0; i < email.length; i++){
            let simbols = email[i];
            if(simbols === "@"){
               bull = true
            }
        }
        if (bull === true) {
            $.ajax({
                type: "POST",
                url: "",
                dataType: 'text',
                header : {
                  'Access-Control-Allow-Origin':'*'
                },
                data: {
                    'method': "deal",
                    'email': email
                },
                success: function(object){
                    console.log("Success");
                    email.val('');
                    email.attr('placeholder', 'Вы подписались');
                },
                error: function(err){
                    console.log("Error");
                    console.log(err);
                }
            })
        }
        else {
            email.val('').attr('placeholder', 'Неверный email');
        }        
    });
    // END READY
}); 
