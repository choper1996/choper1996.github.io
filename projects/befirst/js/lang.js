$(document).ready(function($) {
    let lang = localStorage.getItem('laung_beF');

     if(lang === "ru"){
         translateRu();
     }else{
         translateEng();
     }


    $('.lg_go').click(function (e) {
        e.preventDefault();
        lang = localStorage.getItem('laung_beF');
        if(lang === "ru"){
            translateEng();
            localStorage.setItem('laung_beF','eng');
        }else{
            localStorage.setItem('laung_beF','ru');
            translateRu();
        }
    });

    function translateRu() {
        $('.lg_go').html("Eng");
        $('.lg_nav_1, .main_btn_1').html('Оставить заявку');
        $('.main_btn_2').html('Прайс-лист');
        $('.main_btn_2').attr('href', 'docs/Price-list.pdf');
        $('.main_btn_3').html('Партнерская программа');
        $('#lg_1').html('Все началось с мечты');
        $('#lg_2').html('Мы мечтали о команде профессионалов: <br> искали людей, программистов, маркетологов<br> и советников, которые помогли бы нам <br> провести ICO на высшем уровне и без ошибок. <br> Это было сложней, чем мы ожидали, поэтому <br> мы сами стали лучшими из лучших.');
        $('#lg_3').html('Немного статистики');
        $('#lg_4').html('Сфера ICO переполнена мошенниками. <br> По нашим подсчетам');
        $('#lg_6').html('предложений на рынке ICO - обман. <br> Не забывайте об этом, и будьте бдительны.');
        $('#lg_7').html('Знакомьтесь - команда <br> экспертов BeFirst');
        $('#lg_8').html('Мы обеспечиваем <br> максимум безопасности');
        $('#lg_9').html('Сотрудничаем исключительно с проверенными  <br> маркетинговыми площадками и тщательно  <br> прорабатываем техническую часть проекта. <br> Проводя ICO с нами, вы будете уверены <br> в его защищенности.');
        $('#lg_10').html('нет поводов для беспокойства');
        $('#lg_11').html('Мы знаем какие площадки дают трафик, <br> а какие съедают бюджет. Вы будете точно знать, куда   <br> стоит вкладывать ваши средства и на что они пойдут.');
        $('#lg_12').html('Вы можете выбрать путь <br> успешного проекта, <br> а можете быть как все.');
        $('#lg_13').html('Как поступите вы?');
        $('#lg_14').html('Что делают все');
        $('#lg_15').html('Что делают успешные проекты');
        $('#lg_16').html('находят сотрудника (2-3 недели)');
        $('#lg_17').html('обучают сотрудника (2-4 недели)');
        $('#lg_18').html('занимаются поиском площадок, СМИ, трекеров, партнеров, советников (1-2 недели)');
        $('#lg_19').html('согласовывают условия (2-3 недели)');
        $('#lg_20').html('размещают проект на трекерах (1-2 недели)');
        $('#lg_20_1').html('размещаются по стандартному прайсу');
        $('#lg_21').html('Итог: от 56 дней поиска людей и платформ + продвижение по общему прайсу');
        $('#lg_22').html('обращаются к профессионалам');
        $('#lg_23').html('ждут всего 2 дня от момента заявки до старта работ');
        $('#lg_24').html('получают ежедневную подробную аналитику о проделанной работе');
        $('#lg_25').html('имеют связь с агентством 24/7/365');
        $('#lg_26').html('размещаются на трекерах и в СМИ вне общей очереди');
        $('#lg_27').html('размещаются по специальному прайсу');
        $('#lg_28').html('Итог: 2 дня до старта работ + продвижение по прайсу «для агентов»');
        $('#lg_29').html('Мы делаем невозможное!');
        $('.lg_rec_img').attr('src', 'img/recoupment_bg.jpg');
        $('#lg_30').html('Наша цель – это окупаемость каждого проекта х10. <br> И это не просто слова, это то, что мы делаем <br>  каждый день.');
        $('#lg_31').html('Вы только посмотрите, что <br>мы можем предложить.');
        $('#lg_32').html('Мы предлагаем комплекс услуг, и <br> готовы пройти с вами весь путь от <br> pre-ICO до post-ICO этапа.');
        $('#lg_33').html('Нажмите сюда');
        $('.lg_f_1').html("Оставьте Ваши контактные данные. Наш менеджер с вами свяжется.");
        $('.lg_f_2').attr('placeholder', 'Введите ваш Email');
        $('.lg_f_3').html("Контактный телефон");
        $('.lg_f_4').attr('placeholder', 'Введите ваш контактный телефон');
        $('.lg_f_5').html("Телеграмм");
        $('.lg_f_6').attr('placeholder', 'Введите ваш телеграмм логин');
        $('.lg_f_6_1').html("Промокод");
        $('.lg_f_6_2').attr('placeholder', 'Введите ваш промокод');
        $('.lg_f_7').html('ОТПРАВИТЬ');
        $('.lg_f_8').html("Какие выгоды я получаю, становясь партнером?");
        $('.lg_f_9').html("Зарегистрировавшись в партнерской программе, вы получите личный промокод, которым сможете делиться: ваш друг получит скидку 5% на наши услуги, а вы - вознаграждение в размере 3% от цены услуги, приобретенной вашим знакомым. Таким образом, выгоду получают все! ");
        $('.lg_f_10').html("Чтобы стать партнером, введите свой email и кодовое слово. Обязательно запомните или запишите кодовое слово, его нельзя восстановить и оно понадобится вам для получения вознаграждения. Кодовое слово должно состоять из латинских букв или цифр, без пробелов.");
        $('.lg_f_11').html("\* Кодовое слово");
        $('.lg_f_12').attr('placeholder', 'Придумайте кодовое слово');
        $('.lg_f_13').html("Я согласен с условиями <a class=\"form_doc\" target=\"_blank\" href=\"docs/affiliate_program_ru.pdf\">партнерской программы</a>");
        $('#lg_34').html('&copy; BeFirst INC. 2018 год. <br> Все права защищены.');
        
        $('.lg_Shavon').html('Md.Mofassair Hossain - топ-эксперт ICObench, CEO и учредитель Perhalic, инвестор и эдвайзер более чем 18 ICO');
        $('.lg_Kim').html('Daniel Kim - Специалист в области маркетинга и продаж с более чем 10-летним опытом работы в Азиатском регионе. Сооснователь Chain Box company');
        $('.lg_Shohel').html('Shohel Alam - Эксперт ICObench, ICO-предприниматель, эксперт в сфере маркетинга, инвестор, advisor');
        $('.lg_Giovanni').html('Giovanni Casagrande - Топ-30 Эксперт ICObench, advisor. Специалист в области продвижения проектов. Сооснователь Black Marketing Guru');
        $('.lg_Giacomo').html('Giacomo Arcaro - ICO эксперт и advisor, сооснователь ICOBooster и Fintech.Review. Специалист в области продвижения проектов');
        $('.lg_David').html('Dr. David Meszaros - Международный  юрист и стратегический консультант для компаний и ICO');
        $('.lg_Ali').html('Ali Kassab - Предприниматель с более чем 20-летним опытом работы в сфере облачного программного обеспечения и цифровых платежей. Известный новатор и энтузиаст');
        

        $('.main_section_1').css("background-image", "url(img/logo_with_words.png)");
        $('.lg_send_status').html("Ваша заявка отправлена!");
        $('.main_mobile_img').attr('src', 'img/logo_with_words_mobile.png');
    }
    function translateEng() {
        $('.lg_go').html("Ru");
        $('.lg_nav_1, .main_btn_1').html('Leave a request');
        $('.main_btn_2').html('Price-list');
        $('.main_btn_2').attr('href', 'docs/Price-list_eng.pdf');
        $('.main_btn_3').html('Affiliate');
        $('#lg_1').html('It all started with a dream');
        $('#lg_2').html('In the beginning, we dreamt of a team of professionals. <br> We sought programmers, marketers and advisors who would  <br> help us conduct a high-level, error-free ICO. It was  <br> harder to do than we expected, so we decided to become  <br> the best of the best ourselves.');
        $('#lg_3').html('Some Statistics');
        $('#lg_4').html('The ICO sphere is overflowing with <br> scammers. According to our calculations,');
        $('#lg_6').html('of the offers in the ICO market are <br> fake. Remember this and stay vigilant.');
        $('#lg_7').html('Meet the BeFirst  <br> expert team');
        $('#lg_8').html('We raised security<br> to a new level');
        $('#lg_9').html('We provide you with maximum security through  <br> our upstanding business practices and experience <br> working with ICO projects. We cooperate only with <br> proven marketing platforms and carefully work out  <br> the technical aspects of your project. When conducting  <br> an ICO with us, you can be confident in its security.');
        $('#lg_10').html('No need to worry');
        $('#lg_11').html('We know which web sites give traffic and which simply eat up <br> the budget. You will know exactly where to invest your money <br> and where it will go.');
        $('#lg_12').html('You can choose the path of <br> a successful project or you <br> can be like everyone else.');
        $('#lg_13').html('What will you do?');
        $('#lg_14').html('Here’s what everyone does');
        $('#lg_15').html('Now, here’s what <br>successful projects do');
        $('#lg_16').html('find an employee (2-3 weeks)');
        $('#lg_17').html('train that employee (2-4 weeks)');
        $('#lg_18').html('search for sites, media, trackers, partners, and advisors (1-2 weeks)');
        $('#lg_19').html('negotiate terms (2-3 weeks)');
        $('#lg_20').html('place the project on trackers (1-2 weeks)');
        $('#lg_20_1').html('place the project on a standard websit');
        $('#lg_21').html('The result: at least 8 weeks of searching for people and platforms with a promotion at the regular price.');
        $('#lg_22').html('approach professionals');
        $('#lg_23').html('wait only 2 days from the application date for work to begin');
        $('#lg_24').html('receive detailed daily analytics about completed work');
        $('#lg_25').html('have direct communication with the agency 24/7/365');
        $('#lg_26').html('get posted on trackers and in the media outside of the general queu');
        $('#lg_27').html('get placed at a special price');
        $('#lg_28').html('The result: 2 days before work starts, plus promotion at the \“for agents\” price');
        $('#lg_29').html('We do the impossible!');
        $('.lg_rec_img').attr('src', 'img/recoupment_bg_eng.jpg');
        $('#lg_30').html('Our goal is a 10x payback for each project. And these <br> aren’t just words – it is what we do every day');
        $('#lg_31').html('Just look <br> what we have to offer!');
        $('#lg_32').html('We offer a wide range of services and we <br> are ready to go with you, all the way <br> from pre-ICO to post-ICO');
        $('#lg_33').html('click here');
        $('.lg_f_1').html("Leave Your contact information. Our manager will contact you.");
        $('.lg_f_2').attr('placeholder', 'Enter your Email');
        $('.lg_f_3').html("Phone number");
        $('.lg_f_4').attr('placeholder', 'Enter your phone number');
        $('.lg_f_5').html("Telegram");
        $('.lg_f_6').attr('placeholder', 'Enter your Telegram');
        $('.lg_f_6_1').html("Promotional code");
        $('.lg_f_6_2').attr('placeholder', 'Enter your peronal promotional code');
        $('.lg_f_7').html('SEND');
        $('.lg_f_8').html("What benefits do I get when I become a partner? ");
        $('.lg_f_9').html("After registering in the affiliate program, you receive a personal promotional code that you can share with your friends. They will receive a 5% discount on our services and you will get 3% of the price of the service they purchased. Everyone wins!");
        $('.lg_f_10').html("To become a partner, enter your email and a code word. Remember or write down your code word. It cannot be recovered and you will need it to receive rewards. The code word should consist of Latin letters or numbers without spaces.");
        $('.lg_f_11').html("* Code word");
        $('.lg_f_12').attr('placeholder', 'Enter your code word');
        $('.lg_f_13').html("I agree to the terms of the <a class=\"form_doc\" target=\"_blank\" href=\"docs/affiliate_program_eng.pdf\">affiliate program</a>");
        $('#lg_34').html('Copyright &copy; 2018 BeFirst. <br> All rights reserved.');
        
        $('.lg_Shavon').html('Md.Mofassair Hossain - TOP-expert at ICObench, CEO and Founder of Perhalic, Investor and Advisor of 18+ ICOs in Blockchain industry');
        $('.lg_Kim').html('Daniel Kim - Has been working for marketing and sales industry more than 10years in south korea and Asia region. Co-founder of Chain Box company');
        $('.lg_Shohel').html('Shohel Alam - Expert at ICObench,  Entrepreneur-ICO Marketing Expert, Investor & Advisor');
        $('.lg_Giovanni').html('Giovanni Casagrande - An ICOBench Top30 Expert and Advisor. Blockchain industry figurehead, growth hacker and a co-Founder of Black Marketing Guru');
        $('.lg_Giacomo').html('Giacomo Arcaro - ICO growth hacker, ICO Expert and Advisor, Co-Founder ICOBooster and Fintech. Review');
        $('.lg_David').html('Dr. David Meszaros - An international lawyer and strategic advisor for companies and ICO projects');
        $('.lg_Ali').html('Ali Kassab - Businessman & entrepreneur with 20+ years of experience across multinational cloud software companies and digital payment companies. A known innovator and technology enthusiast');
        
        $('.main_section_1').css("background-image", "url(img/logo_with_words_eng.png)");
        $('.lg_send_status').html("Your request has been sent!");
        $('.main_mobile_img').attr('src', 'img/logo_with_words_mobile_eng.png');
    }
});










