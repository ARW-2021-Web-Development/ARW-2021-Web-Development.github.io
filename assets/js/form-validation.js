const questionForm = document.getElementById('question-form')
const feedbackForm = document.getElementById('feedback-form')
const rating = document.getElementById('rating-stars')
const ratingValue = document.getElementById('rating')
const emailPatt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function setActive(n) {
  let i;
  ratingValue.value = n
  n = 5 - n
  for (i = 4; i >= n; i--) {
    rating.children[i].classList.add('selected')
  }
  for (; i >= 0; i--) {
    rating.children[i].classList.remove('selected')
  }
}

questionForm.onsubmit = e => {
  e.preventDefault()
  const { name, email, question } = Object.fromEntries(new FormData(e.target))
  const errors = []

  if (!name) {
    errors.append("Name should not be empty")
  }

  if (!email) {
    errors.append("Email should not be empty")
  } else if (!emailPatt.test(email)) {
    errors.append("Email provided is invalid")
  }

  if (!question) {
    errors.append("Question should not be empty")
  }

  if (name && email && question) {
    const button = e.target.children[3].children[0]
    button.classList.add('is-loading')

    fetch('https://arw2021submissions.herokuapp.com/post/questions', {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ name, email, question }),
    })
      .then(res => res.json())
      .then(data => {
        button.classList.remove('is-loading')
        alert(data.msg)
      })
      .catch(err => {
        button.classList.remove('is-loading')
        alert(err)
      });
  }
}

feedbackForm.onsubmit = e => {
  e.preventDefault()
  const { bug, suggestion, compliment, rating } = Object.fromEntries(new FormData(e.target))

  if (rating !== "0") {
    const button = e.target.children[4].children[0]
    button.classList.add('is-loading')

    fetch('https://arw2021submissions.herokuapp.com/post/feedbacks', {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ rating: parseInt(rating), bug, suggestion, compliment }),
    })
      .then(res => res.json())
      .then(data => {
        button.classList.remove('is-loading')
        alert(data.msg)
      })
      .catch(err => {
        button.classList.remove('is-loading')
        alert(err)
      });
  }
}
