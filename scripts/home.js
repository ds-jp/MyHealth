const cardVacina = (id, nome, dose, data, img, proxDose) => {
  const liVacina = document.createElement("li");
  liVacina.setAttribute("class", "itemsCardsDivVacinasMainHome");
  const divContentVacina = document.createElement("div");
  divContentVacina.setAttribute("class", "contentItemsCardsDivVacinasMainHome");
  const divDoseVacina = document.createElement("div");
  divDoseVacina.setAttribute("class", "divDoseItemsCardsDivVacinasMainHome");
  const divProxDoseVacina = document.createElement("div");
  divProxDoseVacina.setAttribute(
    "class",
    "divProxDoseContentItemsCardsDivVacinasMainHome"
  );

  const nomeVacina = document.createElement("a");
  nomeVacina.innerHTML = nome;
  nomeVacina.setAttribute("href", "#");
  nomeVacina.setAttribute(
    "class",
    "txtNomeContentItemsCardsDivVacinasMainHome"
  );
  const doseVacina = document.createElement("span");
  doseVacina.innerHTML = dose;
  doseVacina.setAttribute("class", "txtDoseItemsCardsDivVacinasMainHome");
  const dataVacina = document.createElement("span");
  dataVacina.innerHTML = data;
  dataVacina.setAttribute("class", "txtDataItemsCardsDivVacinasMainHome");
  const imgVacina = document.createElement("img");
  imgVacina.setAttribute("src", img);
  imgVacina.setAttribute("class", "imgContentItemsCardsDivVacinasMainHome");
  imgVacina.setAttribute("alt", "Comprovante da vacina");
  const proxDoseVac = document.createElement("span");
  if (dose === "Dose única") {
    proxDoseVac.innerHTML = "Não há próxima dose";
  } else {
    proxDoseVac.innerHTML = "Próxima dose em: " + proxDose;
  }
  proxDoseVac.setAttribute(
    "class",
    "txtProxDoseContentItemsCardsDivVacinasMainHome"
  );
  const inputHiddenId = document.createElement("input");
  inputHiddenId.type = "hidden";
  inputHiddenId.hidden = id;

  liVacina.appendChild(divContentVacina);
  liVacina.appendChild(inputHiddenId);
  divContentVacina.appendChild(nomeVacina);
  divContentVacina.appendChild(divDoseVacina);
  divDoseVacina.appendChild(doseVacina);
  divContentVacina.appendChild(dataVacina);
  divContentVacina.appendChild(imgVacina);
  divContentVacina.appendChild(divProxDoseVacina);
  divProxDoseVacina.appendChild(proxDoseVac);

  liVacina.addEventListener("click", () => {
    window.location.href = "editar-vacina.html?id=" + id;
  });

  document.getElementById("listaVacinas").appendChild(liVacina);
};

function buscaVacina() {
  let input = document.getElementById("buscaVacina");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("listaVacinas");
  let li = ul.getElementsByClassName("itemsCardsDivVacinasMainHome");
  for (let i of li) {
    let a = i.getElementsByTagName("a")[0];
    let txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) != -1) {
      i.style.display = "";
    } else {
      i.style.display = "none";
    }
  }
}
