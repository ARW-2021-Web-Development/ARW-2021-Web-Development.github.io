const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

//images are in reversed order
let currIndex = carouselItems.length - 1;
let prevIndex = 0;

function showNextImage() {
    setTimeout(() => {
        carouselItems[currIndex].classList.remove('notransition');
        carouselItems[currIndex].classList.remove('from-left');
    }, 10);
}

function showPrevImage() {
    setTimeout(() => {
        carouselItems[currIndex].classList.remove('notransition');
        carouselItems[currIndex].classList.remove('from-right');
    }, 10);
}

prevBtn.addEventListener('click', () => {
    prevIndex = currIndex;
    currIndex = currIndex - 1 < 0 ? carouselItems.length - 1 : currIndex - 1;
    carouselItems[currIndex].classList.add('notransition');

    setTimeout(() => {
        carouselItems[currIndex].classList.remove('from-left');
        carouselItems[currIndex].classList.add('from-right');
        carouselItems[prevIndex].classList.add('from-left');

        showPrevImage();
    }, 10);
});

nextBtn.addEventListener('click', () => {
    prevIndex = currIndex;
    currIndex = currIndex + 1 > carouselItems.length - 1 ? 0 : currIndex + 1;
    carouselItems[currIndex].classList.add('notransition');

    setTimeout(() => {
        carouselItems[currIndex].classList.remove('from-right');
        carouselItems[currIndex].classList.add('from-left');
        carouselItems[prevIndex].classList.add('from-right');

        showNextImage();
    }, 10);
});
