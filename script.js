// função para funcionar o botao mode light:
function toggleMode() {
  const html = document.documentElement
  //if(html.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}        ou mais simples:
  html.classList.toggle("light")

  //PROXIMO PASSO:

  //pegar a tag img 
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adc a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a img normal.
    img.setAttribute("src", "./assets/avatar.png")
  }

}