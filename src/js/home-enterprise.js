function sortear(lista) {
   let index = Math.floor(Math.random() * lista.length);
   return removerItem(lista, index);
}

function removerItem(lista, index) {
   let info = lista[index];
   lista.splice(index, 1);
   return info;
}

const listaContratar = document.querySelector(".contratar_lista");
const cargos = ["Copeiro", "Bartender", "Garçom", "Recepcionista", "Cozinheiro", "Commins", "Chef", "Maítre"];
const funcionarios = [
   {
      nome: "Annyk Deamatis",
      perfil: "./src/img/annyk.jpeg",
      alt: "Perfil da Annyk",
      sexo: "F",
   },
   {
      nome: "Kayque Maciel",
      perfil: "./src/img/maciel.jpeg",
      alt: "Perfil do Maciel",
      sexo: "M",
   },
   {
      nome: "Keven Souza",
      perfil: "./src/img/keven.jpeg",
      alt: "Perfil do Keven",
      sexo: "M",
   },
   {
      nome: "Lucas Gomes",
      perfil: "./src/img/lucas.svg",
      alt: "Perfil do Lucas",
      sexo: "M",
   },
   {
      nome: "Mileny Nogueira",
      perfil: "./src/img/mileny.jpg",
      alt: "Perfil da Mileny",
      sexo: "F",
   },
   {
      nome: "Roger Vieira",
      perfil: "./src/img/roger.svg",
      alt: "Perfil do Roger",
      sexo: "M",
   },
];

for(let i = (funcionarios.length - 1); i >= 0; i--) {
   let funcionario = sortear(funcionarios);
   let cargo = sortear(cargos);
   let li = document.createElement("li");

   if(cargo == "Garçom" && funcionario.sexo == "F") {
      cargo = "Garçonete";
   }

   li.innerHTML = `
      <img src="${funcionario.perfil}" alt="${funcionario.alt}">
      <p>${funcionario.nome}</p>
      <h4>${cargo}</h4>
      <div class="botao-contratar">Contratar</div>
   `;

   listaContratar.appendChild(li);
}

/* ********************************************** */
let itensLista = document.querySelectorAll("li");
let scroll = 0;
function fazendoScroll() {
   if(window.innerWidth > 700) {
      return;
   }
   scroll += 300;
   if(scroll > 1500) {
      scroll = 0;
   }
   listaContratar.scroll(scroll,0);
}
let interval = window.setInterval(fazendoScroll, 5000);

function cancelaIntervalo() {
   window.clearInterval(interval);
   interval = window.setInterval(fazendoScroll, 5000);
}

window.addEventListener("resize", cancelaIntervalo);
itensLista.forEach(li => {
   li.addEventListener("click", cancelaIntervalo);
   li.addEventListener("keydown", cancelaIntervalo);
   li.addEventListener("keyup", cancelaIntervalo);
   li.addEventListener("focus", cancelaIntervalo);
   li.addEventListener("drag", cancelaIntervalo);
   li.addEventListener("touchstart", cancelaIntervalo);
   li.addEventListener("touchmove", cancelaIntervalo);
   li.addEventListener("touchend", cancelaIntervalo);
});