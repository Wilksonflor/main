//Pedir para o usuário digitar um número e mostrar a tabuada desse número de 1 a 1000

alert('Vamos fazer uma tabuada')
var n = parseFloat(prompt('Digite um número'))
var multiplicador = 1

while (multiplicador <= 10) {
  document.write(n + ' x ' + multiplicador + ' = ' + n * multiplicador + '<br>')
  multiplicador = multiplicador + 1
}
