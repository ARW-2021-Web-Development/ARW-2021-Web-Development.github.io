const logo = document.querySelector('#arw-logo');
let stopFlag = false;

logo.addEventListener('mouseover', addRotateClass);

logo.addEventListener('mouseout', stopAnimation);

logo.addEventListener('animationiteration', () => {
    if (stopFlag) {
        logo.classList.remove('rotate-logo');
    }
});

function addRotateClass() {
    stopFlag = false;
    logo.classList.add('rotate-logo');
}

function stopAnimation() {
    stopFlag = true;
}
