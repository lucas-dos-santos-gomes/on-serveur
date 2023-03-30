class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
}
  
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();
  
// -----> FIM DO MENU HAMBURGUER<-----

//------>INÍCIO MODAL VAGAS<-----

//MODAL PRIMEIRA IMAGEM
function abrir_modal(){
  let modal = document.querySelector(".modal")
  let janela_escura = document.querySelector(".fade")

  modal.style.visibility = "visible"
  janela_escura.style.visibility = "visible"
}

function fechar_modal(){
  let modal = document.querySelector(".modal")
  let janela_escura = document.querySelector(".fade")

  modal.style.visibility = "hidden"
  janela_escura.style.visibility = "hidden"
}

//-----FIM MODAL PRIMEIRA IMAGEM-----


//-----MODAL SEGUNDA IMAGEM-----
function abrir_modal2(){
  let modal = document.querySelector(".modal2")
  let janela_escura = document.querySelector(".fade2")

  modal.style.visibility = "visible"
  janela_escura.style.visibility = "visible"
}

function fechar_modal2(){
  let modal = document.querySelector(".modal2")
  let janela_escura = document.querySelector(".fade2")

  modal.style.visibility = "hidden"
  janela_escura.style.visibility = "hidden"
}
//-----FIM MODAL SEGUNDA IMAGEM------


//-----MODAL TERCEIRA IMAGEM------
function abrir_modal3(){
  let modal = document.querySelector(".modal3")
  let janela_escura = document.querySelector(".fade3")

  modal.style.visibility = "visible"
  janela_escura.style.visibility = "visible"
}

function fechar_modal3(){
  let modal = document.querySelector(".modal3")
  let janela_escura = document.querySelector(".fade3")

  modal.style.visibility = "hidden"
  janela_escura.style.visibility = "hidden"
}
//-----FIM MODAL TERCEIRA IMAGEM-----


//-----MODAL QUARTA IMAGEM------
function abrir_modal4(){
  let modal = document.querySelector(".modal4")
  let janela_escura = document.querySelector(".fade4")

  modal.style.visibility = "visible"
  janela_escura.style.visibility = "visible"
}

function fechar_modal4(){
  let modal = document.querySelector(".modal4")
  let janela_escura = document.querySelector(".fade4")

  modal.style.visibility = "hidden"
  janela_escura.style.visibility = "hidden"
}
//-----FIM MODAL QUARTA IMAGEM-----