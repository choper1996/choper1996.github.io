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
        $('.lg_m_1').attr('placeholder', 'Введите ваш email');
        $('.lg_m_2').html('Вы успешно подписались');
        $('.lg_t_1').html("Инфраструктура");
        $('.lg_s_1').html('Безлимитная скорость транзакций, <br> смарт-контракты и кроссчейн-переводы в <br> удобном интерфейсе.');
        $('.lg_s_2').html('Основанный на DAG и созданный на <br> Rust, Hive является быстрым и  <br> защищенным блокчейном. Алгоритм <br> подтверждения Proof of Me  позволяет  <br> пользователям самим подтверждать <br>  транзакции друг друга <br> и избавляет от комиссий, майнеров <br> и опасности атаки 51.');
        $('.lg_s_3').html('Собственные смарт-контракты. Транзакции <br> токенов, созданных на базе Hive, <br> подтверждаются всеми пользователями <br> блокчейна. Чем больше пользователей, <br> разработчиков, тем больше нагрузка сети, <br> следовательно – выше скорость <br> транзакций. Безграничное <br> масштабирование.');
        $('.lg_s_4').html('Мы объединяем все криптовалюты в одну <br> экосистему. Атомарные свопы позволяют <br> обменивать одни валюты на другие <br> автоматически без участия третьих сторон. <br> Не нужно регистрироваться на бирже или <br> обменивать токен. Всё в одной платформе: <br> быстро, безопасно и просто. ');
        $('.lg_s_5').html('Благодаря бизнес-платформе Profit оплата товара <br> в криптовалюте станет такой же удобной, <br> как при использовании обычных денег.');
        $('.lg_s_6').html('Для <br> бизнеса');
        $('.lg_s_7').html('Оплата товара в криптовалюте – это  новая возможность, которая привлекает клиентов. Поэтому для любого бизнеса – это  отличный маркетинговый ход. С нашей стороны,  мы фиксируем цену в необходимой вам валюте,  поэтому для вас нет никаких рисков.');
        $('.lg_s_8').html('Для <br> пользователей');
        $('.lg_s_9').html('Держатели криптовалют получат возможность  использовать их в повседневной жизни, а не  просто хранить на кошельке. Не нужно  конвертировать или обналичивать. Достаточно просто авторизоваться в Profit, отсканировать  QR-код или выбрать магазин и произвести  оплату в два клика.');
        $('.lg_s_10').html('Для <br> инвесторов');
        $('.lg_s_11').html('С ростом популярности Profit будет расти и  популярность нашей компании. Это заметно увеличит спрос на PMNT  (Paymon Token). Данный процесс подробно описан в  финансовом анализе, который  подготовил наш  советник – Сослан Газоев ');
        $('.lg_s_12').html('Абсолютно защищенная <br> переписка  с простым и быстрым <br> переводом криптовалют.');
        $('.lg_s_13').html('Конфиденциально');
        $('.lg_s_14').html('Ваши данные под надежной защитой. В приложении используется наш собственный протокол. Весь трафик шифруется алгоритмами Диффи-Хеллмана (Diffie-Hellman), AES (Advanced Encryption Standard) с применением хэш-функций SHA (Secure Hash Algorithm), а переписки - алгоритмом RSA-2048.');
        $('.lg_s_15').html('Безопасно');
        $('.lg_s_16').html('В отличие от большинства сервисов, мы не используем горячие кошельки. Ваши средства находятся только у вас. Мы не имеем доступа к вашим приватным ключам, поэтому вы можете быть уверенными в их безопасности');
        $('.lg_s_17').html('Удобно');
        $('.lg_s_18').html('Не нужно запоминать или вводить ваш 30 – 44-значный публичный ключ и пользоваться сторонними сервисами. Достаточно сообщить логин, и другой пользователь сможет перевести вам деньги в несколько кликов. Кошелек также совместим с ERC20 токенами.');
        $('.lg_sb_1').html('Тестировать');
        $('.lg_sb_2').html('Регистрация');
        $('.lg_t_2').html('Биржи');
        $('.lg_e').html('Как купить');
        $('.lg_e_1').attr('href', 'https://yobit.io/ru/?bonus=Oqwyy');
        $('.lg_t_3').html('Новости');
        $('.lg_n_1').attr('src', '../assets/index/images/News/news_1.jpg');
        $('.lg_n_2').attr('src', '../assets/index/images/News/news_1_after.jpg');
        $('.lg_n_3').attr('src', '../assets/index/images/News/news_2.jpg');
        $('.lg_n_4').attr('src', '../assets/index/images/News/news_2_after.jpg');
        $('.lg_n_5').attr('src', '../assets/index/images/News/news_3.jpg');
        $('.lg_n_6').attr('src', '../assets/index/images/News/news_3_after.jpg');
        $('.lg_n_7').attr('src', '../assets/index/images/News/news_4.jpg');
        $('.lg_n_8').attr('src', '../assets/index/images/News/news_4_after.jpg');
        $('.lg_n_9').attr('src', '../assets/index/images/News/news_5.jpg');
        $('.lg_n_10').attr('src', '../assets/index/images/News/news_5_after.jpg');
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
        $('.lg_m_1').attr('placeholder', 'Enter your email');
        $('.lg_m_2').html('You have successfully subscribed');
        $('.lg_t_1').html("Infrastructure");
        $('.lg_s_1').html('Unlimited transaction speed, <br> smart contracts and cross-chain <br> transactions in a user-friendly interface.');
        $('.lg_s_2').html('DAG-based and created on Rust, Hive is a fast and secure blockchain. The Proof of Me verification algorithm allows users to confirm one another\'s transactions independently and they are therefore exempt from commissions, miners and the danger of a 51% attack.');
        $('.lg_s_3').html('We have our own smart contracts. All block users confirm the token transactions created on Hive. The more users and developers there are, the greater the network load is, which in turn increases the transaction speed. Unlimited scalability.');
        $('.lg_s_4').html('We unite all cryptocurrencies in one ecosystem. Atomic swaps allow you to exchange currencies automatically, without third parties. You do not need to register on the exchange or a token. Everything is gathered in one platform. Fast, safe and simple.');
        $('.lg_s_5').html('Thanks to the business platform Profit, <br> paying for goods with cryptocurrency will <br> be just as convenient as using fiat money. ');
        $('.lg_s_6').html('For <br> business');
        $('.lg_s_7').html('Paying for goods in cryptocurrency is a new opportunity to attract customers. Therefore, this is an excellent marketing move for any business. For our part, we fix the price in the currency you need, so you will not face any risks.');
        $('.lg_s_8').html('For <br> investors');
        $('.lg_s_9').html('As Profit’s popularity grows, so will the popularity of our company. This will significantly increase the demand for PMNT (Paymon Token). Our adviser, Soslan Gazoyev, has prepared a financial analysis that describes this process in detail.');
        $('.lg_s_10').html('For <br> users');
        $('.lg_s_11').html('Cryptocurrency holders will be able to use it in everyday life and not simply store it in a wallet. No need to convert or cash out – just log into Profit, scan the QR code (or select a store) and pay in two clicks.');
        $('.lg_s_12').html('Fully secure correspondence <br> with a simple, fast <br> cryptocurrency conversion.');
        $('.lg_s_13').html('Confidential');
        $('.lg_s_14').html('Your data is under secure protection – the app uses our own protocol. All traffic is encrypted with Diffie-Hellman algorithms and AES (Advanced Encryption Standard) using SHA (Secure Hash Algorithm) hash functions. Correspondence is encrypted with the RSA-2048 algorithm.');
        $('.lg_s_15').html('Safe');
        $('.lg_s_16').html('Unlike most services, we do not use hot wallets. You are the only keeper of your funds. We do not have access to your private keys, so you can be sure they are secure.');
        $('.lg_s_17').html('Convenient');
        $('.lg_s_18').html('No need to remember or enter your 30 – 44-digit public key and use third-party services. Simply provide your login and another user will be able to transfer you money in a few clicks. The wallet is also compatible with ERC20 tokens.');
        $('.lg_sb_1').html('Test');
        $('.lg_sb_2').html('Registration');
        $('.lg_t_2').html('Exchanges');        
        $('.lg_e').html('How to buy');
        $('.lg_e_1').attr('href', 'https://yobit.io/en/?bonus=Oqwyy');
        $('.lg_t_3').html('News');
        $('.lg_n_1').attr('src', '../assets/index/images/News/news_1_eng.jpg');
        $('.lg_n_2').attr('src', '../assets/index/images/News/news_1_after_eng.jpg');
        $('.lg_n_3').attr('src', '../assets/index/images/News/news_2_eng.jpg');
        $('.lg_n_4').attr('src', '../assets/index/images/News/news_2_after_eng.jpg');
        $('.lg_n_5').attr('src', '../assets/index/images/News/news_3_eng.jpg');
        $('.lg_n_6').attr('src', '../assets/index/images/News/news_3_after_eng.jpg');
        $('.lg_n_7').attr('src', '../assets/index/images/News/news_4_eng.jpg');
        $('.lg_n_8').attr('src', '../assets/index/images/News/news_4_after_eng.jpg');
        $('.lg_n_9').attr('src', '../assets/index/images/News/news_5_eng.jpg');
        $('.lg_n_10').attr('src', '../assets/index/images/News/news_5_after_eng.jpg');
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










