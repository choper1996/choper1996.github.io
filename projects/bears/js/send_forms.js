$(document).ready(function () {

    // CALLBACK
    var send_subs_callback = false,
        send_subs_buy = false,
        send_subs_wi = false;

    $('#call_back_btn').click(function () {

        var name = $('#back_call input[name="name"]').val(),
            tel = $('#back_call input[name="tel"]').val(),
            title = 'Обратный звонок';

        if (send_subs_callback) {return false}

        if (name === ""){
            $('#back_call .status').html('Пожалуйста, введите имя').css('color', 'red');
            return false;
        }
        if (tel === ""){
            $('#back_call .status').html('Пожалуйста, введите ваш номер телефона').css('color', 'red');
            return false;
        }

        $.ajax({
            type: "POST",
            // url: "https://services.thefund.io/",
            dataType: 'text',
            header: {
                // 'Access-Control-Allow-Origin': 'https://services.thefund.io/'
            },
            data: {
                'title' : title,
                'name'  : name,
                'tel'   : tel
            },
            success: function () {
                send_subs_callback = true;
                $('#back_call .status').html('Ваша заявка принята').css('color', 'green');
            },
            error: function (object) {
                $('#back_call .status').html('Ошибка, попробуйте позже').css('color', 'red');
            }
        });
        return false;

    });

    $('#back_call input').click(function() {
        $('#back_call .status').html('').css('color', '#4b4b4b');
    });


    // BUY
    $('#buy_btn').click(function () {

        var name = $('#buy_form input[name="name"]').val();
        var tel = $('#buy_form input[name="tel"]').val();
        var city = $('#buy_form input[name="city"]').val();
        var color = $('.bear_wrap .color_list').attr('id');
        var title = 'Покупка';

        if (send_subs_buy) {return false;}

        if (name === ""){
            $('#buy_form .status').html('Пожалуйста, введите имя').css('color', 'red');
            return false;
        }
        if (tel === ""){
            $('#buy_form .status').html('Пожалуйста, введите ваш номер телефона').css('color', 'red');
            return false;
        }

        $.ajax({
            type: "POST",
            // url: "https://services.thefund.io/",
            dataType: 'text',
            header: {
                // 'Access-Control-Allow-Origin': 'https://services.thefund.io/'
            },
            data: {
                'title' : title,
                'name'  : name,
                'tel'   : tel,
                'city'  : city,
                'color' : color
            },
            success: function () {
                send_subs_buy = true;
                $('#buy_form .status').html('Ваша заявка принята');
                $('#buy_form .status').css('color', 'green');
            },
            error: function (object) {
                $('#buy_form .status').html('Ошибка, попробуйте позже');
                $('#buy_form .status').css('color', 'red');
            }
        });
        return false;

    });

    $('#buy_form input').click(function() {
        $('#buy_form .status').html('');
        $('#buy_form .status').css('color', '#4b4b4b');
    });

    // WITHOUT INFO
    $('#without_inf_btn').click(function () {

        var name = $('#form_without_info input[name="name"]').val();
        var tel = $('#form_without_info input[name="tel"]').val();
        var title = 'Без информации';

        if (send_subs_wi) {return false}

        if (name === ""){
            $('#form_without_info .status').html('Пожалуйста, введите имя');
            return false;
        }
        if (tel === ""){
            $('#form_without_info .status').html('Пожалуйста, введите ваш номер телефона');
            return false;
        }

        $.ajax({
            type: "POST",
            // url: "https://services.thefund.io/",
            dataType: 'text',
            header: {
                // 'Access-Control-Allow-Origin': 'https://services.thefund.io/'
            },
            data: {
                'title' : title,
                'name'  : name,
                'tel'   : tel
            },
            success: function () {
                send_subs_wi = true;
                $('#form_without_info .status').html('Ваша заявка принята');
            },
            error: function (object) {
                $('#form_without_info .status').html('Ошибка, попробуйте позже');
            }
        });
        return false;

    });

    $('#form_without_info input').click(function() {
        $('#form_without_info .status').html('');
    });
});