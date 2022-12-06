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