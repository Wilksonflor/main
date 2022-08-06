const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== ' ' && altura !== '' && peso !== '') {
    const valorIMC = peso / (altura * altura).toFixed(2)

    let classificacao = '' //recebe vazio para poder passar as informações abaixo

    if (valorIMC < 18.5) {
      classificacao = 'Abaixo do peso'
    } else if (valorIMC < 24.9) {
      classificacao = 'Peso normal'
    } else if (valorIMC < 30) {
      classificacao = 'Sobrepeso'
    } else if (valorIMC < 35) {
      classificacao = 'Obesidade grau I'
    } else if (valorIMC < 39.9) {
      classificacao = 'Obesidade grau II '
    } else if (valorIMC >= 40) {
      classificacao = 'Obesidade Grau III ou Obesidade Mórbida, Cuidado! '
    }

    resultado.textContent = `${nome} a sua classificação é de ${valorIMC} e você está ${classificacao} `
  } else {
    resultado.textContent = 'preencha todos os campos'
  }
  //validação simples
}
calcular.addEventListener('click', imc)
