// criar uma tabuada com o laço for

for (var i = 1; i <= 10; i++) {
  document.write(`<p>Tabuada do  ${i} </p><br>`) //aqui vai lançar o valor de 1 até 10 que é o I
  for (var j = 1; j <= 10; j++) {
    document.write(`${i}*${j} = ${i * j}<br>`) //Aqui irá lançar o valor de I * o valor de j e imprimir no documento
  }
}
