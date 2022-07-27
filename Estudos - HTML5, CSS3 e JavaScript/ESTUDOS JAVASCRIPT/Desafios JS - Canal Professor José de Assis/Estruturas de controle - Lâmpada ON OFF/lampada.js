function on() {
  document.getElementById('lampada').src = 'on.jpg'
}

function off() {
  document.getElementById('lampada').src = 'off.jpg'
}
function blink() {
  var intervalo = 0
  var contador = 0
  while (contador <= 10) {
    intervalo += 600 //tempo que a lampada vai piscar
    setTimeout("document.getElementById('lampada').src = 'on.jpg'", intervalo)
    intervalo += 600 //tempo que a lampada vai piscar
    setTimeout("document.getElementById('lampada').src = 'off.jpg'", intervalo) //intervalo vai receber o valor de 600
    contador++ // para poder incrementar o valor do contador
  }
}
