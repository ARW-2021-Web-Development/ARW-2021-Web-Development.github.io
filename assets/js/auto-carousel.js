const carouselItems = document.querySelectorAll('.carousel-item');

//images are in reversed order so the first image is the last in the
let currIndex = 0;
let prevIndex = 0;
let timer = createTimer();
let isAnimating = false;

carouselItems.forEach((item) => {
    item.ontransitionend = () => {
        isAnimating = false;
    };
    item.onmouseenter = () => clearInterval(timer);

    item.onmouseleave = () => {
        timer = createTimer();
    };
});

function showPrevImage() {
    //set initial image position by adding x-offset
    carouselItems[currIndex].classList.add('from-right');
    //this should not be animated
    carouselItems[currIndex].classList.add('notransition');
    //offset from previous animation should be removed
    carouselItems[currIndex].classList.remove('from-left');

    isAnimating = true;
    //animate to the proper position by removing x-offset
    setTimeout(() => {
        carouselItems[currIndex].classList.remove('notransition');
        carouselItems[prevIndex].classList.add('from-left');
        carouselItems[currIndex].classList.remove('from-right');
    }, 100);
}

function createTimer() {
    return setInterval(() => {
        if (isAnimating) {
            clearTimeout(timer);
            timer = createTimer();
            return;
        }
        prevIndex = currIndex;
        currIndex = currIndex + 1 > carouselItems.length - 1 ? 0 : currIndex + 1;

        showPrevImage();
    }, 5000);
}
