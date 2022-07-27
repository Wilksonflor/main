//Pedir para o usuário digitar um número de 1 a 6. Mostrar na tela uma mensagem diferente para cada número		
var n = parseInt(prompt("Digite um número"));
switch(n){
  case 1:
    alert("Você escolheu o número 1");
    break;
  case 2:
    alert("Você escolheu o número 2");
    break;
  case 3:
    alert("VOcê escolheu o número 3");
    break;
  case 4:
    alert("Você escolheu o número 4 ");
    break;
  case 5:
    alert("VOcê escolheu o número 5 ");
    break;
  case 6:
    alert("Você escolheu o número 6");
    break;
  default:
    alert("Escolha de 1 a 6");
}
