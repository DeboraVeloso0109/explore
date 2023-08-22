function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* const html = document.documentElement
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else {
    html.classList.add('light')
  }*/
  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/sol.png")
  } else {
    // se tiver sem light mode, manter normal
    img.setAttribute("src", "./assets/lua.png")
  }
  
}
