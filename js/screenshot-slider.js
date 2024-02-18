const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 250,
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },

    pagination: {
        el: '.pagination',
        bulletClass: 'pagination__bullet',
        bulletActiveClass: 'pagination__bullet--active',
        clickable: true,
    },

    navigation: {
        nextEl: '.game-section-screenshots__carousel-btn.next',
        prevEl: '.game-section-screenshots__carousel-btn.prev',
    },
});