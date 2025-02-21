window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToScroll: 1,
        slidesToShow: 5, // Кількість видимих слайдів у рядку
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
});

