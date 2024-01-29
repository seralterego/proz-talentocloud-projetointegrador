let nav = document.querySelector("nav");
let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector("#menu");

function handleButtonClick(event) {
  //o preventDefault evita erro de abrir rapidamente o menu no mobile
  if(event.type === "touchstart") event.preventDefault();
  
  //alterna entre inserir e retirar a classe do elemento nav
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
  })

  //função que observa o menu e recebe um elemento alvo e um callback que irá permitir o clique além do botão de fechar do menu, para recolher o menu mobile
  function handleClickOutside(targetElement, callback) {
    //o "lado de fora" do elemento HTML pode ser o próprio html em si, então...
    const html = document.documentElement
    //...verificamos se o elemento NÃO possui o atributo data-target
    if(!targetElement.hasAttribute("data-target")) {
      html.addEventListener("click", handleHTMLClick);
      html.addEventListener("touchstart", handleHTMLClick);
      targetElement.setAtrribute("data-target", "");
    }
  }
}

//chama a função quando clica no botão
btnMenu.addEventListener("click", handleButtonClick);
//chama a função quando clica no botão, no mobile
btnMenu.addEventListener("touchstart", handleButtonClick);
