const accordions = document.querySelectorAll('.accordion');
const headers = document.querySelectorAll('.accordion-header');
const contents = document.querySelectorAll('.accordion-content');

headers.forEach((header, index) => {
    header.addEventListener('click', (event) => {
        accordions[index].classList.toggle('pressed');
        header.classList.toggle('pressed');

        const isClosed = contents[index].classList.toggle('closed');
        if (isClosed) {
            contents[index].style.maxHeight = '0px';
        } else {
            contents[index].style.maxHeight = `${contents[index].scrollHeight}px`;
        }
    });
});
