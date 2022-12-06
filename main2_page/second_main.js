$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 25,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
        }
    }
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    onmousewheel: true,
    keyboard: true,

    pagination: {
        el: '.swiper-pagination',
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',

    },
});


const openPopUp = document.getElementById('open-popup');
const closePopUp = document.getElementById('close-popup');
const Popup = document.getElementById('Popup');

openPopUp.addEventListener('click', function (e) {
e.preventDefault();
    Popup.classList.add('active');
});

closePopUp.addEventListener('click', () => {
    Popup.classList.remove('active');
});



const openArticles = document.getElementById('articles-btn');
const closeArticles = document.getElementById('close-articles')
const Articles = document.getElementById('articles-bar');

openArticles.addEventListener('click', function (e) {
    e.preventDefault();
    Articles.classList.add('active');
});

closeArticles.addEventListener('click', () => {
    Articles.classList.remove('active');
});
