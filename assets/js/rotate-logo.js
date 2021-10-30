const logo = document.querySelector('#arw-logo');

logo.addEventListener('mouseover', addRotateClass);

logo.addEventListener('mouseout', () => {
    logo.addEventListener('animationiteration', function stopAnimation() {
        logo.classList.remove('rotate-logo');
        logo.removeEventListener('animationiteration', stopAnimation);
    });
});

function addRotateClass() {
    logo.classList.add('rotate-logo');
}
