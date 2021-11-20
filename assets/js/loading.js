const loadingScreen = document.querySelector('.loading-screen');
const loadingIcon = document.querySelector('#loading-icon');

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hide');
    }, 2500);
});
