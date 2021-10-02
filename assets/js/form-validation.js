const questionForm = document.getElementById('question-form');
const feedbackForm = document.getElementById('feedback-form');
const rating = document.getElementById('rating-stars');
const ratingValue = document.getElementById('rating');
const emailPatt =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const notification = document.querySelector('.notification');
const message = document.querySelector('.notification-message');
const deleteBtn = document.querySelector('.delete');

const questionSubmitBtn = document.querySelector('#question-submit');
const feedbackSubmitBtn = document.querySelector('#feedback-submit');

notification.addEventListener('animationend', () => {
    notification.classList.remove('is-closed');
});

function setActive(n) {
    ratingValue.value = n;
    n = 5 - n;
    for (var i = 4; i >= n; i--) {
        rating.children[i].classList.add('selected');
    }
    for (; i >= 0; i--) {
        rating.children[i].classList.remove('selected');
    }
}

function getErrors(name, email, question) {
    const errors = [];

    if (!name) {
        errors.push('Name should not be empty');
    }

    if (!email) {
        errors.push('Email should not be empty');
    } else if (!emailPatt.test(email)) {
        errors.push('Email provided is invalid');
    }

    if (!question) {
        errors.push('Question should not be empty');
    }

    return errors;
}

function showNotificationPopUp(msg) {
    setTimeout(() => {
        notification.classList.add('is-active');
        message.innerText = msg;

        deleteBtn.addEventListener('click', () => {
            notification.classList.remove('is-active');
            notification.classList.add('is-closed');
        });
    }, 10);
}

function resetNotificationPopUp() {
    if (notification.classList.contains('is-active')) {
        notification.classList.remove('is-active');
        notification.classList.add('is-closed');
    }
}

questionForm.onsubmit = async (e) => {
    e.preventDefault();
    const { name, email, question } = Object.fromEntries(new FormData(questionForm));
    const errors = getErrors(name, email, question);

    if (errors.length === 0) {
        questionSubmitBtn.classList.add('is-loading');

        const data = await sendDataToServer('questions', {
            name: name || 'No name provided',
            email: email || 'No email provided',
            question: question || 'No question provided',
        });

        questionSubmitBtn.classList.remove('is-loading');
        alert(data.msg);
    } else {
        resetNotificationPopUp();
        showNotificationPopUp(errors.join('\n'));
    }
};

feedbackForm.onsubmit = async (e) => {
    e.preventDefault();
    const { bug, suggestion, compliment, rating } = Object.fromEntries(new FormData(e.target));

    if (rating !== '0') {
        feedbackSubmitBtn.classList.add('is-loading');

        const data = await sendDataToServer('feedbacks', {
            rating: parseInt(rating),
            bug: bug || 'No bugs reported',
            suggestion: suggestion || 'No suggestions made',
            compliment: compliment || 'Aww, no compliments received',
        });

        feedbackSubmitBtn.classList.remove('is-loading');
        alert(data.msg);
    } else {
        resetNotificationPopUp();
        showNotificationPopUp('Please rate first before submitting');
    }
};

async function sendDataToServer(endpoint, data) {
    const header = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };

    try {
        const result = await fetch(`https://arw2021submissions.herokuapp.com/post/${endpoint}`, header);
        return result.json();
    } catch (err) {
        alert(err);
    }
}
