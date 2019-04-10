$(document).ready(function () {

    $('#go_data').click(function () {

        var email_ajax = $('#form_email').val(),
            promo = $('promocod').val(),
            phone_ajax = $('#form_phone').val(),
            telegram_ajax = $('#form_telegram').val();

        if(email_ajax == ""){
            $('.error_data').css('color','red');
            return false;
        }else {
            $.ajax({
                type: "POST",
                url: "https://paymon.org/helper/befirst.io/",
                // url: "http://192.168.0.26:8080/helper/befirst.io/",
                dataType: 'text',
		header : {
		    'Access-Control-Allow-Origin':'*'
		},
                data: {
                    'method': "deal",
                    'promocode': promo,
                    'email': email_ajax,
                    'telegram': telegram_ajax,
                    'phone': phone_ajax
                },
                success: function(object){
                    console.log("Success");
                    $('.error_data').css('color', '#fff');
                    $('.inputs_area input').val("");
                    $('.lg_send_status').css('display','block');
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
            var lang;
            var email_ajax_2 = $('#form_email_r').val();
            var code_word = $('#code_word').val();
                if ($('.lg_go').html() == 'Eng') {
                    lang = 'ru';
                }
                else if ($('.lg_go').html() == 'Ru'){
                    lang = 'eng'
                }
                if(email_ajax_2 == ""){
                    $('.error_data_1').css('color','red');
                    return false;
                }
                if (code_word == ""){
                    $('.error_data_2').css('color','red');
                    return false;
                }
                if ($('.check_box').attr('name') == 'uncheck'){
                    $('.check_box').css('border', '3px solid red');
                    return false;
                }
                else {
                    $.ajax({
                        type: "POST",
                        url: "https://paymon.org/helper/befirst.io/",
                        dataType: 'text',
                header : {
                    'Access-Control-Allow-Origin':'*'
                },
                    data: {
                        'method': "ref",
                        'email': email_ajax_2,
                        'lang' : lang,
                        'secret_word': code_word
                    },
                    success: function(object){
                        console.log("Success");
                        $('.error_data').css('color', '#fff');
                        $('.error_data_1').css('color', '#fff');
                        $('.check_box').css('border', '3px solid #fff')
                        $('.inputs_area_items input').val("");
                        $('.lg_send_status').css('display','block');
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
