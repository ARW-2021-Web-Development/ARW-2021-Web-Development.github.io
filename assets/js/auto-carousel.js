const carouselItems = document.querySelectorAll('.carousel-item');
const carouselCircles = document.querySelectorAll('.carousel-circles');

//images are in reversed order so the first image is the last in the
let currIndex = 0;
let prevIndex = 0;
let timer = createTimer();
let isAnimating = false;

let circleCtr = currIndex;
let manualNext = false;

carouselItems.forEach((item) => {
    item.ontransitionend = () => {
        isAnimating = false;
    };

    item.onmouseenter = () => clearInterval(timer);
    item.onmouseleave = () => {
        timer = createTimer();
    };
});

carouselCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        //don't do anything if same as current index
        if (index == currIndex) return;

        clearTimeout(timer);

        prevIndex = currIndex;
        currIndex = index;

        prevIndex > currIndex ? showPrevImage() : showNextImage();
        timer = createTimer();
    });
});

function showNextImage() {
    carouselItems[currIndex].classList.add('from-right');
    carouselItems[currIndex].classList.add('notransition');
    carouselItems[currIndex].classList.remove('from-left');

    isAnimating = true;
    setTimeout(() => {
        carouselItems[currIndex].classList.remove('notransition');
        carouselItems[prevIndex].classList.add('from-left');
        carouselItems[currIndex].classList.remove('from-right');

        carouselCircles[prevIndex].style.backgroundColor = 'rgba(133, 128, 128, 0.5)';
        carouselCircles[currIndex].style.backgroundColor = 'rgba(133, 128, 128)';
    }, 100);
}

function showPrevImage() {
    carouselItems[currIndex].classList.add('from-left');
    carouselItems[currIndex].classList.add('notransition');
    carouselItems[currIndex].classList.remove('from-right');

    setTimeout(() => {
        carouselItems[currIndex].classList.remove('notransition');
        carouselItems[prevIndex].classList.add('from-right');
        carouselItems[currIndex].classList.remove('from-left');

        carouselCircles[prevIndex].style.backgroundColor = 'rgba(133, 128, 128, 0.5)';
        carouselCircles[currIndex].style.backgroundColor = 'rgba(133, 128, 128)';
    }, 100);
}

function createTimer() {
    return setTimeout(() => {
        if (isAnimating) {
            clearInterval(timer);
            timer = createTimer();
            return;
        }
        prevIndex = currIndex;
        currIndex = currIndex + 1 > carouselItems.length - 1 ? 0 : currIndex + 1;
        showNextImage();
        timer = createTimer();
    }, 5000);
}
