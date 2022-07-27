//2 –  Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.

for(i=1;i<=10;i++){
  document.write(`<p>A tabuada de ${i}</p><br>`)
  for(v=1;v<=10;v++){
    document.write(`${i}x${v} = ${i*v}<br>`)
  }
}