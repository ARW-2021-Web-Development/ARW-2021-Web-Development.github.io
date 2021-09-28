const activePage = window.location.pathname;
const navButtons = document.querySelectorAll('.btn-gradient');
const baseurl = '/arw-2021/';

navButtons.forEach((navButton) => {
    if (navButton.href.includes(activePage) && activePage !== baseurl) {
        navButton.classList.add('active');
    }
});
