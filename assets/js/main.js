// creata variabile con endpoint
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
/* Verisone con nodi  
const bodyEl = document.querySelector("body");

// Creati elementi della pagina
const divEL = document.createElement("div");
const rowEl = document.createElement("div");
const colEl = document.createElement("div");
const ulEl = document.createElement("ul");
const TitleSiteEl = document.createElement("h1");
const divBtnEl = document.createElement("div");
const buttonEl = document.createElement("button");

// appeso nodi ai elementi e dato classi Bootstrap
bodyEl.appendChild(divEL);
buttonEl.classList.add("btn", "btn-success", "btn-sm", "my-2");
buttonEl.innerHTML = "Genera";
divBtnEl.appendChild(buttonEl);
TitleSiteEl.innerHTML = "Generatore Email";
TitleSiteEl.classList.add("text-center", "my-5");
divEL.appendChild(TitleSiteEl);
divEL.classList.add("container", "my-5");
rowEl.classList.add("row");
colEl.classList.add("col");
ulEl.classList.add("list-group");
divEL.appendChild(rowEl);
rowEl.appendChild(colEl);
colEl.appendChild(ulEl);
rowEl.append(divBtnEl);
*/

/* Versione semplificata*/
const buttonEl = document.querySelector("button");
const ulEl = document.querySelector("ul");
// Creata Funzione per generare email all'interno della lista
function generatedEmails() {
  for (let i = 1; i <= 10; i++) {
    const liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.classList.add("list-group-item");
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        let email = data.response;
        liEl.innerHTML = email;
      });
  }
}
generatedEmails();

// creato evento al click per far svuotare il contenitore e ripopolare tramite la funzione crata prima
buttonEl.addEventListener("click", function () {
  ulEl.innerHTML = "";

  generatedEmails();
});
