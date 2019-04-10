$(document).ready(function () {
    var send_subs = false,
        sent_q = false;

    function chekEmail(email) {
        var dog = 0;
        for (var i = 0; i < email.length; i++) {
            if (email[i] === "@") dog++;
        }
        return dog === 1;
    }

    $('.submit_btn').click(function () {
        if (send_subs) {
            return false
        }
        var btn_id = $(this).attr("name").slice(4);
        var email_ajax = $('.subscribe_wrap[name=input_box_' + btn_id + '] input').val();
        if (chekEmail(email_ajax) === false) {
            $('.subscribe_wrap[name=input_box_' + btn_id + '] .subscribe_error').css('left', '0');
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "https://services.thefund.io/",
                dataType: 'text',
                header: {
                    'Access-Control-Allow-Origin': 'https://services.thefund.io/'
                },
                data: {
                    'email': email_ajax
                },
                success: function () {
                    console.log("***Success***");
                    $('.subscribe_success').css('left', '0');
                    send_subs = true;
                },
                error: function (object) {
                    console.log("***Error***");
                    $('.subscribe_wrap[name=input_box_' + btn_id + '] .subscribe_error').css('left', '0');
                    console.log(object);
                }
            });
            return false;
        }
    });

    $('.subscribe_error').click(function () {
        $('.subscribe_error').css('left', '100%');
    });

    $("#form_box input").focus(function () {
        $(this).css("background", "#c2c2c2");
    });

    $("#send_form").click(function () {
        if (sent_q) {
            return false
        }
        $("#form_box input").css("background", "#c2c2c2");
        var bull = false;
        var email = $("#email_question").val();
        var question = $("#text_question").val();
        for (var i = 0; i < email.length; i++) {
            var simbol = email[i];
            if (simbol === "@") {
                bull = true
            }
        }
        if (email === "" || !bull) {
            $("#email_question").css("background", "#e15754");
            return false;
        }
        if (question === "") {
            $("#text_question").css("background", "#e15754");
            return false;
        }
        $.ajax({
            type: "POST",
            url: "https://services.thefund.io/",
            dataType: 'text',
            header: {
                'Access-Control-Allow-Origin': 'https://services.thefund.io/'
            },
            data: {
                'emailQ': email,
                'question': question,
            },
            success: function () {
                console.log("***Success***");
                $("#form_successful").slideDown();
                sent_q = true;
            },
            error: function (object) {
                console.log("***Error***");
                console.log(object);
            }
        });
        return false;
    });

});