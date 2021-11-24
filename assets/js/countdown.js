const _days = document.querySelector('.days');
const _hours = document.querySelector('.hours');
const _minutes = document.querySelector('.minutes');
const _seconds = document.querySelector('.seconds');
const _cta = document.querySelector('#countdown-cta');

let countDownDate = new Date('Nov 27, 2021 18:00:00').getTime();
const countdownTimer = setInterval(countdown, 1000);

function countdown() {
    const distance = countDownDate - new Date().getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days = Math.max(0, days);
    hours = Math.max(0, hours);
    minutes = Math.max(0, minutes);
    seconds = Math.max(0, seconds);

    _days.innerText = String(days).padStart(2, 0);
    _hours.innerText = String(hours).padStart(2, 0);
    _minutes.innerText = String(minutes).padStart(2, 0);
    _seconds.innerText = String(seconds).padStart(2, 0);

    if (!(days || hours || minutes || seconds)) {
        _cta.innerText = 'Watch Here';
        _cta.href = 'https://www.facebook.com/DLSUARW';
        _cta.target = '_blank';

        clearInterval(countdownTimer);
    }
}
