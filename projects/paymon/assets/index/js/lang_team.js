$(document).ready(function($) {
    var lang = localStorage.getItem('laung_beF');

     if(lang == "ru"){
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
        $('.lg_h_1').html('Инфраструктура');
        $('.lg_h_2').html('Биржи');
        $('.lg_h_3').html('Новости');
        $('.lg_title').html('Команда');

        $('.lgt_1').html('Семён <br> Глейм');
        $('.lgt_1_s').html('Основатель проекта и CEO');
        $('.lgt_1_f').html('Блокчейн евангелист, член Блокчейн Ассоциации в России консультант ICO, предприниматель с опытом более 5 лет. Несколько успешно реализованных IT проектов.');
        $('.lgt_2').html('Константин <br> Поскрёбышев');
        $('.lgt_2_s').html('Сооснователь, ведущий разработчик, Blockchain - программист');
        $('.lgt_2_f').html('Ранний инвестор bitcoin. Back-end разработчик, фанат своего дела. Опыт в IT отрасли 5 лет. Квалифицированных выпускник IT института . Последние 2 года занимается технической реализацией собственного блокчейна проекта Paymon.');
        $('.lgt_3').html('Максим <br> Скорынин');
        $('.lgt_3_s').html('Ведущий разработчик, Android и IOS разработчик');
        $('.lgt_3_f').html('Программист с 6-ти летним стажем, один из самых ранних участников проекта Paymon. Участвовал в нескольких проектах и мобильных играх в качестве ведущего разработчика. Андройд специалист.');
        $('.lgt_4').html('Владислав <br> Маркушин');
        $('.lgt_4_s').html('Ведущий разработчик, Blockchain - программист, Android и IOS разработчик');
        $('.lgt_4_f').html('Программист. В IT отрасли уже более 10 лет. Опыт в разработке приложений под WebGL и Android.Последние 2 года занимается созданием и реализацией смарт-контрактов, а также созданием блокчейн-технологий, под различные нужды.Технический консультант IT и ICO проектов.');
        
        $('.lgt_5').html('Максим <br> Пахомов');
        $('.lgt_5_s').html('Web - разработчик');
        $('.lgt_5_f').html('Опыт в WEB разработке около 2-х лет, молодой и амбициозный специалист. Прошёл обучение в нескольких IT школах. Участвовал в реализации многих проектов, в частности в реализации WEB части. До недавнего времени работал на Freelance.');
        $('.lgt_6').html('Сергей <br> Помелов');
        $('.lgt_6_s').html('Главный дизайнер и проектировщик');
        $('.lgt_6_f').html('Квалифицированный выпускник школы дизайна. Опыт работы в дизайне более 7 лет. Один из самых ранних участников проекта Paymon. Многолетний опыт сотрудничества со многими ведущими компаниями в различных отраслях.');
        $('.lgt_7').html('Никита <br> Ленчевский');
        $('.lgt_7_s').html('Главный маркетолог');
        $('.lgt_7_f').html('Работает в маркетинге с 2014 года. Участвовал в создании и развитии проектов в музыкальной, развлекательной и рекламной сфере. Отвечает за разработку маркетинговой стратегии и планирование развития новых направлений.');
        $('.lgt_8').html('Илья <br> Стефаниди');
        $('.lgt_8_s').html('Android Разработчик');
        $('.lgt_8_f').html('Back-end разработчик. Опыт в IT отрасли 3 года. Участник нескольких университетских проектов, лауреат студенческого конкурса IT проектов. Разработчик программного обеспечения для собственного университета. Последний год занимается технической реализацией проекта Paymon.');
        $('.lgt_9').html('Семён <br> Пушкарёв');
        $('.lgt_9_s').html('');
        $('.lgt_9_f').html('');
        $('.lgt_10').html('Ярослав <br> Кондратьев');
        $('.lgt_10_s').html('Таргетолог');
        $('.lgt_10_f').html('Специалист своего дела, 5 летний опыт в сфере СММ, участник нескольких проектов в области IT в качестве сотрудника отдела маркетинга. Более 100 законченных успешно проектов.');
        $('.lgt_11').html('Николай <br> Васенькин');
        $('.lgt_11_s').html('Web - разработчик');
        $('.lgt_11_f').html('Опыт в программировании более 3-х лет. Призёр чемпионатов России по спортивному программированию.');
        $('.lgt_12').html('Настя <br> Миронова');
        $('.lgt_12_s').html('');
        $('.lgt_12_f').html('');
        $('.lgt_13').html('Рафис <br> Юсупов');
        $('.lgt_13_s').html('');
        $('.lgt_13_f').html('');
        $('.lgt_14').html('Данил <br> Зверев');
        $('.lgt_14_s').html('');
        $('.lgt_14_f').html('');
        $('.lgt_15').html('Иван <br> Бабайлов');
        $('.lgt_15_s').html('Руководитель отдела маркетинга');
        $('.lgt_15_f').html('Блокчейн энтузиаст. Эксперт и тренер по продвижению в социальных сетях. Основатель нескольких рекламных агентств, на счету которых больше 500 успешных проектов. Более 10 000 часов практического опыта в интернет маркетинге.');

        $('.lg_f_1').html('Все права защищены.');
        $('.lg_f_2').html('Языки');
        $('.lg_f_3').html('О компании');
        $('.lg_f_4').attr('href', '../assets/index/docs/White_Paper_version_2_0_ru.pdf');
        $('.lg_f_5').attr('href', '../assets/index/docs/Technical_Document_ru.pdf');
    }
    function translateEng() {
        $('.lg_go').html("Ru");
        $('.lg_h_1').html('Infrastructure');
        $('.lg_h_2').html('Exchanges');
        $('.lg_h_3').html('News');

        $('.lgt_1').html('Semyon <br> Gleim');
        $('.lgt_1_s').html('Co-founder & CEO');
        $('.lgt_1_f').html('Blockchain evangelist, member of Blockchain Association in Russia, consultant ICO, an entrepreneur with experience more than 5 years. Several successfully implemented IT projects.');
        
        $('.lgt_2').html('Konstantin <br> Poskryobishev');
        $('.lgt_2_s').html('Co-founder, Lead Developer, Blockchain Specialist');
        $('.lgt_2_f').html('The early investor of bitcoin. Back-end developer, a fan of his craft. 5 years of experience in the IT industry. A qualified graduate of the IT Institute. The last 2 years Konstantin is engaged in the technical implementation of Paymon`s own blockchain.');
        
        $('.lgt_3').html('Maksim <br> Skorynin');
        $('.lgt_3_s').html('Lead Developer, Android and iOS Specialist');
        $('.lgt_3_f').html('A programmer with 6 years of experience, one of the earliest participants in the Paymon project. He participated in several projects and mobile games as a leading developer. Android specialist.');
        
        $('.lgt_4').html('Vladislav <br> Markushin');
        $('.lgt_4_s').html('Lead Developer, Blockchain Specialist, Android and iOS Developer');
        $('.lgt_4_f').html('Programmer. More than 10 years In the IT industry. Experience in developing applications for WebGL and Android. The last 2 years has been engaged in the creation and implementation of smart contracts, as well as the creation of blockchain technologies for various needs. Technical consultant for IT and ICO projects.');
        
        $('.lgt_5').html('Maksim <br> Pakhomov');
        $('.lgt_5_s').html('Web version Developer');
        $('.lgt_5_f').html('Has about 2 years of experience in web development, a young and ambitious specialist. Studied at several IT schools. Participated in the implementation of many projects, in particular in the implementation of the WEB part. Until recently, worked as a freelancer.');
        
        $('.lgt_6').html('Sergey <br> Pomelov');
        $('.lgt_6_s').html('Product Designer');
        $('.lgt_6_f').html('Qualified graduate of the school of design. Experience in design for more than 7 years. One of the earliest participants in the Paymon project. Long-term experience of cooperation with many leading companies in various industries.');
        
        $('.lgt_7').html('Nikita <br> Lenchevskii');
        $('.lgt_7_s').html('Lead Marketing Specialist');
        $('.lgt_7_f').html('Lead marketer Paymon. Has been working in marketing since 2014. He participated in the creation and development of projects in music, entertainment and advertising. Responsible for developing a marketing strategy and planning the development of new directions.');
        
        $('.lgt_8').html('Ilya <br> Stefanidi');
        $('.lgt_8_s').html('Android developer');
        $('.lgt_8_f').html('Back-end developer. Experience in the IT industry is 3 years. Participant of several university projects, a laureate of the student competition of IT projects. Software developer for his own university. Ilya engage technical implementation of the Paymon project.');
        
        $('.lgt_9').html('Semyon <br> Pushkarev');
        $('.lgt_9_s').html('');
        $('.lgt_9_f').html('');
        
        $('.lgt_10').html('Yaroslav <br> Kondratev');
        $('.lgt_10_s').html('Marketing Manager');
        $('.lgt_10_f').html('Target marketing specialist and community manager of Paymon. Specialist in his field, works 5 years in SMM, a participant in several IT projects as a marketing officer. More than 100 successfully completed projects.');
        
        $('.lgt_11').html('Nikolay <br> Vasenkin');
        $('.lgt_11_s').html('Web - developer');
        $('.lgt_11_f').html('Experience in programming for more than 3 years. Winner of the Russian championships in sports programming ICPC.');
        
        $('.lgt_12').html('Annastsya <br> Mironova');
        $('.lgt_12_s').html('');
        $('.lgt_12_f').html('');
        
        $('.lgt_13').html('Rafis <br> Usypov');
        $('.lgt_13_s').html('');
        $('.lgt_13_f').html('');
        
        $('.lgt_14').html('Danil <br> Zverev');
        $('.lgt_14_s').html('');
        $('.lgt_14_f').html('');
        
        $('.lgt_15').html('Ivan <br> Babaylov');
        $('.lgt_15_s').html('Chief Marketing Officer');
        $('.lgt_15_f').html('Blockchain-enthusiast. Expert and trainer of promotion in social networks. Founder of several advertising agencies with more than 500 successful projects. More than 10 000 hours of practical experience in internet marketing.');
        
        $('.lg_f_1').html('All rights reserved.');
        $('.lg_f_2').html('Languages');
        $('.lg_f_3').html('Company');
        $('.lg_f_4').attr('href', '../assets/index/docs/White_Paper_version_2_0_eng.pdf');
        $('.lg_f_5').attr('href', '../assets/index/docs/Technical_Document_eng.pdf');
    }
    $('.Lang_eng').click(function() {
        translateEng();
    });
    $('.Lang_ru').click(function() {
        translateRu();
    });
});










