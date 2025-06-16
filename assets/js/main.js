const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const bodyEl = document.querySelector("body");
const divEL = document.createElement("div");
const rowEl = document.createElement("div");
const colEl = document.createElement("div");
const ulEl = document.createElement("ul");
const TitleSiteEl = document.createElement("h1");
const divBtnEl = document.createElement("div");
const buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-success", "btn-sm");
buttonEl.innerHTML = "Genera";
divBtnEl.appendChild(buttonEl);
bodyEl.appendChild(divEL);
TitleSiteEl.innerHTML = "Generatore Email";
TitleSiteEl.classList.add("text-center", "my-5");
divEL.appendChild(TitleSiteEl);
divEL.classList.add("container", "my-5");
rowEl.classList.add("row");
colEl.classList.add("col");
divEL.appendChild(rowEl);
rowEl.appendChild(colEl);
colEl.appendChild(ulEl);
rowEl.append(divBtnEl);

buttonEl.addEventListener("click", function () {
  for (let i = 1; i <= 10; i++) {
    const liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        let email = data.response;
        liEl.innerHTML = email;
      });
  }
});
