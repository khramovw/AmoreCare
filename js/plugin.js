'use strict';

window.addEventListener('load', function () {

    var widthWin = document.body.clientWidth; // ширина
    var sider = document.getElementsByClassName('js-slick');

    if (widthWin <= 768) {

        $(sider).slick({
            prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        });

        console.log('swich To Mobile ON');
    } else if (widthWin >= 768) {

        $(sider).on('beforeChange', function (event, slick, destroy) {
            console.log(destroy);
        });

        console.log('swich To Desctop ON');
    }

    console.log('width:', widthWin);
});