const activePage = window.location.pathname;
const navButtons = document.querySelectorAll('.navbar-menu .navbar-item');
const baseurl = '/arw-2021/';

navButtons.forEach((navButton) => {
    if (navButton.href.includes(activePage) && activePage !== baseurl) {
        navButton.classList.add('active');
        navButton.classList.add('btn-glass');
    }

    'mouseover focus'.split(' ').forEach((event) => {
        navButton.addEventListener(event, () => {
            navButton.classList.add('btn-glass');
        });
    });

    'mouseout blur'.split(' ').forEach((event) => {
        navButton.addEventListener(event, () => {
            if (!navButton.classList.contains('active')) navButton.classList.remove('btn-glass');
        });
    });
});
