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


let button = document.querySelector('#button');
let vhod = document.querySelector('#vhod-1');
let vhod2 = document.querySelector('#vhod-2');


if (button) {

    button.addEventListener('click', () => {
        vhod.classList.toggle('active');
        vhod2.classList.toggle('active');

    })
}
