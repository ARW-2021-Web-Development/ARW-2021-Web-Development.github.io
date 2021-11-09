const carouselItems = document.querySelectorAll('.carousel-item');

//images are in reversed order so the first image is the last in the
let currIndex = 0;
let prevIndex = 0;

let isAnimating = false;

let timer = setInterval(() => {
    if (isAnimating) return;

    prevIndex = currIndex;
    currIndex = currIndex + 1 > carouselItems.length - 1 ? 0 : currIndex + 1;

    showPrevImage();
}, 5000);

carouselItems.forEach((item) => (item.ontransitionend = () => (isAnimating = false)));
carouselItems.forEach((item) => {
    item.onmouseenter = () => clearInterval(timer);
    item.onmouseleave = () => {
        timer = setInterval(() => {
            if (isAnimating) return;

            prevIndex = currIndex;
            currIndex = currIndex + 1 > carouselItems.length - 1 ? 0 : currIndex + 1;

            showPrevImage();
        }, 5000);
    };
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
