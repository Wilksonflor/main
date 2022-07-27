//Problema - Pedir para o usuário digitar dois números e mostrar o boolean indicando se a média for maior que 5	
var n1 = parseInt(prompt("Digite a primeira nota"));
var n2 = parseInt(prompt("Digite a segunda nota"));
var media = (n1+n2)/2;
media = parseFloat(media);
if(n1===0 || n2===0 || media<5){
  alert("Você não alcançou a média");
}else{
  alert(`Sua média foi de ${media}, parabéns!`);
}