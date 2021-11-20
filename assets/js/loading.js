const loadingScreen = document.querySelector('.loading-screen');
const loadingIcon = document.querySelector('#loading-icon');

let removeLoadingPage = false;

window.addEventListener('load', () => {
    removeLoadingPage = true;
});

loadingIcon.addEventListener('animationiteration', () => {
    if (removeLoadingPage) {
        loadingIcon.classList.remove('rotate-logo');
        setTimeout(() => {
            loadingScreen.classList.add('hide');
        }, 1500);
    }
});
