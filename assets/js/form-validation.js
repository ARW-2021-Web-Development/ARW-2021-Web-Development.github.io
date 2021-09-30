const questionForm = document.getElementById('question-form')
const feedbackForm = document.getElementById('feedback-form')

questionForm.onsubmit = e => {
  e.preventDefault()
  const { name, email, question } = Object.fromEntries(new FormData(e.target))

  if (name && email && question) {
    const button = e.target.children[3].children[0]
    button.classList.add('is-loading')

    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://arw2021submissions.herokuapp.com/post/questions', true)
    xhr.setRequestHeader('') // TODO: discuss

    xhr.onload = () => {
      button.classList.remove('is-loading')
      alert('Question was submitted!')
    }
  }
}

feedbackForm.onsubmit = e => {
  e.preventDefault()
  const { bug, suggestion, compliment } = Object.fromEntries(new FormData(e.target))

  if (bug || suggestion || compliment) {
    const button = e.target.children[3].children[0]
    button.classList.add('is-loading')

    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://arw2021submissions.herokuapp.com/post/feedbacks', true)
    xhr.setRequestHeader('') // TODO: discuss

    xhr.onload = () => {
      button.classList.remove('is-loading')
      alert('Feedback was submitted!')
    }
  }
}
