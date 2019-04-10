$(document).ready(function () {

    $('#code_word').on("keydown", function (e) {
        return e.which !== 32;
    });

    $('#go_data').click(function () {



        $('input').click(function() {
            $('.error_data').css('color', '#fff');
        });

        const emailAjax  = $('#form_email').val(),
            promo         = $('.promocod').val(),
            telegramAjax = $('#form_telegram').val();

        let bull;

        if(emailAjax === ""){
            $('.error_data').css('color','red');
            return false;
        }
        for (let i = 0; i < emailAjax.length; i++){

            let simbols = emailAjax[i];

            if(simbols === "@"){
                bull = true
            }
        }
        if(bull === false){
            $('.error_data').css('color','red');
            return false;
        }
        if (bull === true) {
            $.ajax({
                type: "POST",
                url: "",
                dataType: 'text',
                header : {
                    'Access-Control-Allow-Origin':''
                },
                data: {
                    'method': "deal",
                    'promocode': promo,
                    'email': emailAjax,
                    'telegram': telegramAjax,
                },
                success: function(){
                    console.log("Success");
                    $('.error_data').css('color', '#fff');
                    $('.inputs_area input').val("");
                    $('#price_form .lg_send_status').css('display','block');
                },
                error: function(err){
                    console.log("Error");
                    console.log(err);
                }
            });

        }
        return false;
    });


        $('#go_data_r').click(function () {

            $('input').click(function() {
                $('.error_datas').css('color', '#fff');
            });

            let lang,
                bull;

            const emailAjaxSecond = $('#form_email_r').val(),
                code_word = $('#code_word').val();

                if ($('.lg_go').html() === 'Eng') {
                    lang = 'ru';
                }
                else if ($('.lg_go').html() === 'Ru'){
                    lang = 'eng'
                }
                if(emailAjaxSecond === ""){
                    $('.error_data_1').css('color','red');
                    return false;
                }

                bull = false;

                
                for (let i = 0; i < emailAjaxSecond.length; i++){
                    let simbols = emailAjaxSecond[i];
                    if(simbols === "@"){
                        bull = true
                    }
                }

                if(bull === false){
                    $('.error_data_1').css('color','red');
                    return false;
                }

                if (code_word === ""){
                    $('.error_data_2').css('color','red');
                    return false;
                }

                if ( $('.check_box').attr('name') === 'uncheck'){
                    $('.check_box').css('border', '3px solid red');
                    return false;
                } else {
                    $.ajax({
                        type: "POST",
                        url: "",
                        dataType: 'text',
                    header : {
                        'Access-Control-Allow-Origin':''
                    },
                    data: {
                        'method': "ref",
                        'email': emailAjaxSecond,
                        'lang' : lang,
                        'secret_word': code_word
                    },
                    success: function(object){
                        console.log("Success");
                        $('.error_data').css('color', '#fff');
                        $('.error_data_1').css('color', '#fff');
                        $('.check_box').css('border', '3px solid #fff')
                        $('.inputs_area_items input').val("");
                        $('#referal_form .lg_send_status').css('display','block');
                    },
                    error: function(err){
                        console.log("Error");
                        console.log(err);
                    }
                });
            }
            return false;
        });

});
