$('.phone_mask').mask('+7(999)999-99-99');

$(document).ready(function () {
    $('.slider-banner').slick({
        arrows: true,

        slidesToShow: 1,
        autoplay: false,
        infinite: true,
        speed: 600,
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggale: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow'),
        nextArrow: document.querySelector('#nextArrow'),
        variableWidth: false,
        dots: true,
        fade: false,
        responsive: [
            {
                breakpoint: 405,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows: false,
                    // centerMode: true,
                    // touchMove: true,
                }
            }
        ],

    });

});

$(document).ready(function () {
    $('.slider-banner-mob').slick({


        slidesToShow: 1,
        autoplay: false,
        infinite: true,
        speed: 1800,
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggale: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow-2'),
        nextArrow: document.querySelector('#nextArrow-2'),

        arrows: false,
        variableWidth: false,
        dots: true,
        fade: true,
        responsive: [
            {
                breakpoint: 405,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    // arrows: true,

                    // centerMode: true,
                    // touchMove: true,
                }
            }
        ],

    });

});

const selectSingle = document.querySelector('.__select');


// const selectSingle_labels = selectSingle1.querySelectorAll('.__select__label1');

// Toggle menu


if (selectSingle) {
    const selectSingle_title = selectSingle.querySelector('.__select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    }
}

function openBlock() {
    const burgerBtn = document.getElementById("burgerBtn");
    const otherId = document.getElementById("other");
    burgerBtn.classList.toggle("active");

    otherId.classList.toggle("hidden");
    otherId.querySelector('.inner').classList.toggle('active');
    const basketBtn = document.getElementById("basketBtn")
    // basketBtn.classList.toggle("active");
}



// let button = document.querySelector('#button');
// let vhod = document.querySelector('#vhod-1');
// let vhod2 = document.querySelector('#vhod-2');


// if (button) {

//     button.addEventListener('click', () => {
//         vhod.classList.toggle('active');
//         vhod2.classList.toggle('active');

//     })
// }


!function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');


    /* Перебираем массив кнопок */
    modalButtons.forEach(function (item) {

        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function (e) {

            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();

            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach


    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

}); // end ready

