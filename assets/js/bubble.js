const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach((bubble) => {
    bubble.addEventListener('click', () => {
        bubble.classList.add('shrink');

        // bubble.addEventListener('transitionend', () => {
        //     bubble.style.display = 'none';
        //     bubble.classList.remove('shrink');
        // });

        setInterval(() => {
            // bubble.style.display = 'block';
            bubble.classList.remove('shrink');
            void bubble.offsetWidth;
        }, Math.random() * 3 + 5000);
    });
});
