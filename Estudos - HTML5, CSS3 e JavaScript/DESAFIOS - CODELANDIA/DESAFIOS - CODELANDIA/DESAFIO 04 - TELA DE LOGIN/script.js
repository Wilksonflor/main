const form = document.getElementById('form')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const entrar = document.getElementById('entrar')
const entrarGoogle = document.getElementById('loginGoogle')

form.addEventListener('submit', e => {
  //o (e) tira o comportamento padrão do browser
  e.preventDefault() //vai cancelar o comportamento padrão ou seja, quando clicar em enviar ele irá atualizar
  checkInputs()
})

function checkInputs() {
  //validações dos campos

  const emailValue = email.value.trim() //criei a variavel e irá pegar o valor(value)
  const senhaValue = senha.value.trim() //trim irá remover os espaçamentos
  if (emailValue === '') {
    //mostrar o error
    //adicionar a classe de error

    errorValidation(email, 'Preencha esse campo')
  } else {
    //caso tenha digitado, mostrará a classe suces
  }
}

function errorValidation(input, message) {
  const form = input.parentElement //parent retona a referencia do pai
  inputsLogin.className = ''
}
