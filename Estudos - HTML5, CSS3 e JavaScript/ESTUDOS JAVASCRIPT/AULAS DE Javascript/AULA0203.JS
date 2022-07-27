//Exercício é para pedir dois números e dar a média
var n1 = prompt("Digite o primeiro número");
n1 = parseFloat(n1);
var n2 = prompt("Digite o segundo número");
n2 = parseFloat(n2);
var n3 = prompt("Digite o terceiro número");
n3 = parseFloat(n3);
var n4 = prompt("Digite o quarto número");
n4 = parseFloat(n4);
var media = (n1 + n2 + n3 + n4)/2;
media = parseFloat(media);
if(media >=7){
  alert("Você foi aprovado com "+ media );
  }
  else{
    alert("Infelizmente você não conseguiu a média, sua nota foi "+ media);
  }
  
