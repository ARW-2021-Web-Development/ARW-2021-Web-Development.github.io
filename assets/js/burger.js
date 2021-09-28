const burger = document.querySelector('#navbar-burger');
const navMenu = document.querySelector('#navbar-menu');

burger.addEventListener('click', function toggleBurgerMenu() {
    burger.classList.toggle('is-active');
    const isActive = navMenu.classList.toggle('is-active');
    isActive ? navMenu.classList.remove('is-closing') : navMenu.classList.add('is-closing');

    //not removing 'is-closing' will trigger animation when suddenly switching
    //from desktop to mobile view
    navMenu.addEventListener('transitionend', () => {
        navMenu.classList.remove('is-closing');
    });
});
