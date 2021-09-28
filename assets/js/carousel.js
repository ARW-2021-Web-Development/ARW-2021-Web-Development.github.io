const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let currIndex = 0;
showCurrentImage();

function showCurrentImage() {
    carouselItems.forEach((item, index) => {
        let visibility;
        index === currIndex ? (visibility = 'visible') : (visibility = 'hidden');
        item.style.visibility = visibility;
    });
}

prevBtn.addEventListener('click', () => {
    currIndex = currIndex - 1 < 0 ? carouselItems.length - 1 : currIndex - 1;
    showCurrentImage();
});

nextBtn.addEventListener('click', () => {
    currIndex = currIndex + 1 > carouselItems.length - 1 ? 0 : currIndex + 1;
    showCurrentImage();
});
