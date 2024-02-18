const userOpenMenu = document.querySelector('.header__user');
const userMenu = document.querySelector(".header__user-menu");
// const menuBtnClose = document.querySelector('.menu-btn-close');
// const links = document.querySelectorAll('.mobile-menu__link');

const toggleUserMenu = () => userMenu.classList.toggle('is-hidden');
// const disableScroll = () =>
//   document.body.classList.toggle('is-scroll-disabled');

userOpenMenu.addEventListener('click', toggleUserMenu);
// menuBtnClose.addEventListener('click', toggleMenu);

// menuBtnOpen.addEventListener('click', disableScroll);
// menuBtnClose.addEventListener('click', disableScroll);

// links.forEach((link) => {
// 	link.addEventListener('click', () => {
// 		toggleMenu();
// 		disableScroll();
// 	});
// });