document.addEventListener("DOMContentLoaded", function() {

    // HEADER
    let burger = document.querySelector('.header__burger'),
        header = document.querySelector('.header');

    burger.addEventListener('click', ()=> {
        header.classList.toggle('active');
    });

    // main
    let mainSlider = document.querySelector('.main__slider');

    $(mainSlider).slick({
        infinite:      true,
        dots:          false,
        pauseOnHover:  false,
        draggable:     true,
        autoplaySpeed: 3000,
        speed:          1000,
        autoplay:       true,
        arrows:        false,
        slidesToShow:      1,
        slidesToScroll:    1,
        vertical:       true
    });

    let mainLiseItems = document.querySelectorAll('.main-list__items');

    $(mainLiseItems).click(function() {
        $(mainSlider).slick('slickGoTo', +$(this).attr('id'));
    });

    $(mainSlider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        mainLiseItems.forEach((item)=> {
            item.classList.remove('active')
        });

        mainLiseItems[nextSlide].classList.add('active');
    });
});

