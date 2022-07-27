//1 – Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número.
var n = parseInt(prompt("Digite um número"));

for(i=1;i<=10;i++){
  document.write(`${i}x${n} = ${n*i}<br>`);
}

//fácil