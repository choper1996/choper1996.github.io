$(document).ready(function() {

    $('.submit').click(function (e) {
        var email_ajax = $('.mail_input').val();
        if (email_ajax == ""){
        }else{
            $.ajax({
            type: "POST",
            url: "https://ico.paymon.org/helper/befirst.io/",
            dataType: 'text',
            header : {
              'Access-Control-Allow-Origin':'*'
            },
            data: {
                'method': "deal",
                'email': email_ajax
            },
            success: function(object){
                console.log("Success");
                $('.submit').css('color', '#33b5e5');
                $('.form_alert').css('width', '100%');
                $('.form_alert').css('z-index', '2');
                $('.form_alert p').css('opacity', '1');
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
