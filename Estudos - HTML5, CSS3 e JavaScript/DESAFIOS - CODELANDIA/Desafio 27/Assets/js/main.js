const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(){
  const btnMobile = document.getElementById('nav');
  nav.classList.toggle('active')//Classlist vai ativar a classe de ativo quando clicar e remover ao clicar.
}
btnMobile.addEventListener('click', toggleMenu);