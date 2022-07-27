//pedir para o usuario digitar um numero
var n1 = prompt('Digite um número:')
alert('O número digitado é ' + n1)
//converter em numero inteiro
n1 = parseInt(n1)
alert('O tipo é ' + typeof n1)
//pedir para o usuario digitar outro numero
var n2 = prompt('Digite outro número: ')
alert('O outro valor digitado foi ' + n2)
//converter em numero inteiro
n2 = parseInt(n2)
//mostrar a subtração concatenando com o texto "a subtração é: ..."
alert('A subtração é ' + (n1 - n2))
//mostrar a multiplicação concatenando com o texto "a multiplicação é: ..."
alert('A mutiplicação é ' + n1 * n2)
//mostrar a divisão concatenando com o texto "a divisão é: ..."
alert('A divisão é ' + n1 / n2)
//mostrar a soma concatenando com o texto "a soma é: ..."
alert('A soma é ' + (n1 + n2))
