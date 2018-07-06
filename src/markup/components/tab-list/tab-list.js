
import $ from 'jquery'

export default function () {
    $(document).ready(function () {
        let tabs = $('.tab-list__item');

        tabs.click(function () {
            let id  = $(this).find('a').attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
            tabs.each(function () {
                $(this).removeClass('is-active');
            });
            $(this).addClass('is-active');
      })

    })
}
