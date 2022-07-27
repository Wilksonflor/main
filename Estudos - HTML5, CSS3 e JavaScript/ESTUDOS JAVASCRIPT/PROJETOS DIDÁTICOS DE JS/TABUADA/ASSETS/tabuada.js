

function calcular(){


  var valor = parseInt(document.getElementById('valor').value);
  var texto = '';

  for(var i = 1; i <= 10 ; i++){
    text = texto + i.toString() + ' x ' + valor.toString() + ' = ' + (i*valor).toString()
  }
  document.getElementById('resultado').innerText = texto;
}