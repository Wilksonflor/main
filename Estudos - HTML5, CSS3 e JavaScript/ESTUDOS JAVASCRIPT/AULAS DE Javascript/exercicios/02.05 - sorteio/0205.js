//Fazer jogador1 digitar um número - OK
//Fazer jogador2 digitar um número - OK
//se forem iguais, mostrar mensagem de 'empate' - Ok
//sortear um numero de 0 e 1 - OK
//se o numero sorteado for 0, ganha quem escolher o numero menor - OK
//se o numero sorteado for 1, ganha quem escolher o numero maior - OK
alert('Vamos tirar 0 ou 1')
var j1 = parseInt(prompt('Jogador 1, Digite um número'))
var j2 = parseInt(prompt('Jogador 2, Digite um número'))
var sorteio = parseInt(Math.random() * 2)

if (j1 == j2) {
  alert('Empate!')
} else {
  alert(`O valor sorteado foi${sorteio}`)
}

if(sorteio===0 && j1<j2 || sorteio===1 && j1>j2){
  alert("Jogador 1 venceu");
}else{
  alert("Jogador 2 venceu")
}
