const questionForm = document.getElementById('question-form')
const feedbackForm = document.getElementById('feedback-form')

questionForm.onsubmit = e => {
  e.preventDefault()
  const { name, email, question } = Object.fromEntries(new FormData(e.target))

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
  const { bug, suggestion, compliment } = Object.fromEntries(new FormData(e.target))

  if (bug || suggestion || compliment) {
    const button = e.target.children[3].children[0]
    button.classList.add('is-loading')

    fetch('https://arw2021submissions.herokuapp.com/post/feedbacks', {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ bug, suggestion, compliment }),
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
