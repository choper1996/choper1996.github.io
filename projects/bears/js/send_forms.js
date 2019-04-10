$(document).ready(function () {

    const buyBtn        = $('#buy_btn'),
        backcallBtn     = $('#call_back_btn'),
        withoutInfBtn    = $('#without_inf_btn'),
        buyStatus       = $('#buy_form .status'),
        backcallStatus  = $('#back_call .status'),
        withoutInfStatus = $('#form_without_info .status');

    // CALLBACK
    let sendSubsCallback = false,
        sendSubsBuy = false,
        sendSubsWi = false;

    backcallBtn.click(function () {

        const name = $('#back_call input[name="name"]').val(),
            tel = $('#back_call input[name="tel"]').val(),
            title = 'Обратный звонок';

        if (sendSubsCallback) {return false}

        if (name === ""){
            backcallStatus.html('Пожалуйста, введите имя').css('color', 'red');
            return false;
        }
        if (tel === ""){
            backcallStatus.html('Пожалуйста, введите ваш номер телефона').css('color', 'red');
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
                sendSubsCallback = true;
                backcallStatus.html('Ваша заявка принята').css('color', 'green');
            },
            error: function () {
                backcallStatus.html('Ошибка, попробуйте позже').css('color', 'red');
            }
        });
        return false;

    });

    buyStatus .click(function() {
        backcallStatus.html('').css('color', '#4b4b4b');
    });


    // BUY
    buyBtn.click(function () {

        const name = $('#buy_form input[name="name"]').val(),
            tel    = $('#buy_form input[name="tel"]').val(),
            city   = $('#buy_form input[name="city"]').val(),
            color  = $('.bear_wrap .color_list').attr('id');


        if (sendSubsBuy) {return false;}

        if (name === ""){
            buyStatus.html('Пожалуйста, введите имя').css('color', 'red');
            return false;
        }
        if (tel === ""){
            buyStatus.html('Пожалуйста, введите ваш номер телефона').css('color', 'red');
            return false;
        }

        $.ajax({
            type: "POST",
            url: "",
            dataType: 'text',
            header: {
                // 'Access-Control-Allow-Origin': ''
            },
            data: {
                'title' : 'Покупка',
                'name'  : name,
                'tel'   : tel,
                'city'  : city,
                'color' : color
            },
            success: function () {
                sendSubsBuy = true;
                buyStatus.html('Ваша заявка принята').css('color', 'green');
            },
            error: function () {
                buyStatus.html('Ошибка, попробуйте позже').css('color', 'red');
            }
        });
        return false;

    });

    $('#buy_form input').click(function() {
        buyStatus.html('').css('color', '#4b4b4b');
    });

    // WITHOUT INFO
    withoutInfBtn.click(function () {

        const name = $('#form_without_info input[name="name"]').val(),
            tel = $('#form_without_info input[name="tel"]').val();

        if (sendSubsWi) {return false}

        if (name === ""){
            withoutInfStatus.html('Пожалуйста, введите имя');
            return false;
        }
        if (tel === ""){
            withoutInfStatus.html('Пожалуйста, введите ваш номер телефона');
            return false;
        }

        $.ajax({
            type: "POST",
            url: "",
            dataType: 'text',
            header: {
                'Access-Control-Allow-Origin': ''
            },
            data: {
                'title' : 'Без информации',
                'name'  : name,
                'tel'   : tel
            },
            success: function () {
                sendSubsWi = true;
                withoutInfStatus.html('Ваша заявка принята');
            },
            error: function () {
                withoutInfStatus.html('Ошибка, попробуйте позже');
            }
        });
        return false;

    });

    $('#form_without_info input').click(function() {
        withoutInfStatus.html('');
    });
});