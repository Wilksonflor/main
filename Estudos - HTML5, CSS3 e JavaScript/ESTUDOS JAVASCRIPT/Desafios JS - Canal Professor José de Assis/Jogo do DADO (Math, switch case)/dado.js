//Cod para criar para jogar dados de 6 lados
var sorteio = Math.floor(Math.random() * 6 + 1)


switch (sorteio) {
  case 1:
    document.getElementById('dados').src = 'face1.png'
    console.log(sorteio)
    break
  case 2:
    document.getElementById('dados').src = 'face2.png'
    console.log(sorteio)
    break
  case 3:
    document.getElementById('dados').src = 'face3.png'
    console.log(sorteio)
    break
  case 4:
    document.getElementById('dados').src = 'face4.png'
    console.log(sorteio)
    break
  case 5:
    document.getElementById('dados').src = 'face5.png'
    console.log(sorteio)
    break
  case 6:
    document.getElementById('dados').src = 'face1.png'
    console.log(sorteio)
    break
  default:
}
