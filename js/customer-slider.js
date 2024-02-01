const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 250,
    slidesPerView: 1,
    spaceBetween: 16,
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
    },

    navigation: {
        nextEl: '.customer-section__carousel-btn.next',
        prevEl: '.customer-section__carousel-btn.prev',
    },
});