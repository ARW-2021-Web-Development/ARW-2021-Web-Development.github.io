const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

//images are in reversed order so the first image is the last in the
let currIndex = carouselItems.length - 1;
let prevIndex = 0;

let isAnimating = false;

carouselItems.forEach((item) => (item.ontransitionend = () => (isAnimating = false)));

document.addEventListener('mouseup', () => {
    prevBtn.classList.remove('pressed');
    nextBtn.classList.remove('pressed');
});

'mousedown pointerdown'.split(' ').forEach((event) => {
    nextBtn.addEventListener(event, () => {
        nextBtn.classList.add('pressed');
    });

    prevBtn.addEventListener(event, () => {
        prevBtn.classList.add('pressed');
    });
});

'mouseup pointerup'.split(' ').forEach((event) => {
    nextBtn.addEventListener(event, () => {
        nextBtn.classList.remove('pressed');
    });

    prevBtn.addEventListener(event, () => {
        prevBtn.classList.remove('pressed');
    });
});

nextBtn.addEventListener('click', () => {
    //don't animate if an image is already being animated
    //to prevent multiple animation renders
    if (isAnimating) return;

    prevIndex = currIndex;
    currIndex = currIndex - 1 < 0 ? carouselItems.length - 1 : currIndex - 1;
    isAnimating = true;

    showPrevImage();
});

prevBtn.addEventListener('click', () => {
    //don't animate if an image is already being animated
    //to prevent multiple animation renders
    if (isAnimating) return;

    prevIndex = currIndex;
    currIndex = currIndex + 1 > carouselItems.length - 1 ? 0 : currIndex + 1;
    isAnimating = true;

    showNextImage();
});

function showPrevImage() {
    //set initial image position by adding x-offset
    carouselItems[currIndex].classList.add('from-right');
    //this should not be animated
    carouselItems[currIndex].classList.add('notransition');
    //offset from previous animation should be removed
    carouselItems[currIndex].classList.remove('from-left');

    //animate to the proper position by removing x-offset
    setTimeout(() => {
        carouselItems[currIndex].classList.remove('notransition');
        carouselItems[prevIndex].classList.add('from-left');
        carouselItems[currIndex].classList.remove('from-right');
    }, 0);
}

function showNextImage() {
    //set initial image position by adding x-offset
    carouselItems[currIndex].classList.add('from-left');
    //this should not be animated
    carouselItems[currIndex].classList.add('notransition');
    //offset from previous animation should be removed
    carouselItems[currIndex].classList.remove('from-right');

    //animate to the proper position by removing x-offset
    setTimeout(() => {
        carouselItems[currIndex].classList.remove('notransition');
        carouselItems[prevIndex].classList.add('from-right');
        carouselItems[currIndex].classList.remove('from-left');
    }, 0);
}
