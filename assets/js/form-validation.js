const questionForm = document.getElementById('question-form');
const feedbackForm = document.getElementById('feedback-form');
const rating = document.getElementById('rating-stars');
const ratingValue = document.getElementById('rating');
const emailPatt =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const notification = document.querySelector('.notification');
const message = document.querySelector('.notification-message');
const deleteBtn = document.querySelector('.delete');
let delay = 0;

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

function showNotification(errors) {
    setTimeout(() => {
        notification.classList.add('is-active');
        message.innerText = errors.join('\n');

        deleteBtn.addEventListener('click', () => {
            notification.classList.remove('is-active');
            notification.classList.add('is-closed');
        });
    }, delay);
}

questionForm.onsubmit = async (e) => {
    e.preventDefault();
    const { name, email, question } = Object.fromEntries(new FormData(questionForm));
    const errors = getErrors(name, email, question);

    //don't exit current notification if it has the same error message
    if (message.innerText !== errors.join('\n')) {
        if (notification.classList.contains('is-active')) {
            notification.classList.remove('is-active');
            notification.classList.add('is-closed');
            delay = 550;
        }
    }

    if (errors.length === 0) {
        const button = e.target.children[3].children[0];
        button.classList.add('is-loading');

        const data = await sendDataToServer('questions', {
            name: name || 'No name provided',
            email: email || 'No email provided',
            question: question || 'No question provided',
        });

        button.classList.remove('is-loading');
        alert(data.msg);
    } else {
        showNotification(errors);
    }
};

feedbackForm.onsubmit = async (e) => {
    e.preventDefault();
    const { bug, suggestion, compliment, rating } = Object.fromEntries(new FormData(e.target));

    if (rating !== '0') {
        const button = e.target.children[4].children[0];
        button.classList.add('is-loading');

        const data = await sendDataToServer('feedbacks', {
            rating: parseInt(rating),
            bug: bug || 'No bugs reported',
            suggestion: suggestion || 'No suggestions made',
            compliment: compliment || 'Aww, no compliments received',
        });

        button.classList.remove('is-loading');
        alert(data.msg);
    } else {
        alert('Please rate first before submitting');
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
