import $ from 'jquery';
export default function () {
    $(document).ready(function () {
        let btn = $('.hero__description-btn, .hero__arrow-down');
        $(btn).click(function () {
            let id = $(this).find('a').attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
        $(document).on('mouseover', '.hero__description-btn , .hero__arrow-down', function () {
            $(btn).addClass('animated');
        });
        $(document).on('mouseout', '.hero__description-btn, .hero__arrow-down', function () {
            $(btn).removeClass('animated');
        });

    });
}
