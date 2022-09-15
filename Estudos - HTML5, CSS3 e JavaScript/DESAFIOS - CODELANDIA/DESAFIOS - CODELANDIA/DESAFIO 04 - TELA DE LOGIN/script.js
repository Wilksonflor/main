let email = document.getElementById('email')
let senha = document.getElementById('senha')
let form = document.querySelector('form')
let textForm = document.getElementById('textForm')
form.addEventListener('submit', e => {
  if (email.value == '' && senha.value == '') {
    textForm.textContent = 'Você precisa digitar esse campo'
  } else {
    console.log(email.value)
    console.log(senha.value)
  }
  e.preventDefault()
})
