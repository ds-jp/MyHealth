function dynamicHeader() {
  const pageUrl = window.location.pathname;

  const logoMyHealth = document.createElement("div");
  logoMyHealth.setAttribute("class", "flexHeader");
  const imgLogoMyHealth = document.createElement("img");
  imgLogoMyHealth.setAttribute("src", "../images/logo-myhealth.png");
  imgLogoMyHealth.setAttribute("class", "imgHeader");
  imgLogoMyHealth.setAttribute("alt", "Logo do MyHealth, uma vacina");
  const txtLogoMyHealth = document.createElement("span");
  txtLogoMyHealth.innerHTML = "MyHealth";
  txtLogoMyHealth.setAttribute("class", "txtHeader");
  logoMyHealth.appendChild(imgLogoMyHealth);
  logoMyHealth.appendChild(txtLogoMyHealth);
  switch (pageUrl) {
    case "/html/Index.html":
    // Quando eu inicio o Live Server o index fica com letra maiúscula
    case "/html/index.html":
      logoMyHealth.setAttribute("onclick", "pageIndex()");
      document.getElementById("header").appendChild(logoMyHealth);
      const btnEntrar = document.createElement("div");
      btnEntrar.setAttribute("class", "btnHeaderIndexEntrar");
      btnEntrar.setAttribute("onclick", "pageEntrar()");
      const txtBtnEntrar = document.createElement("span");
      txtBtnEntrar.innerHTML = "Já tenho conta";
      txtBtnEntrar.setAttribute("class", "txtBtnHeader");
      btnEntrar.appendChild(txtBtnEntrar);
      document.getElementById("header").appendChild(logoMyHealth);
      document.getElementById("header").appendChild(btnEntrar);
      break;
    case "/html/home.html":
    case "/html/editar-vacina.html":
    case "/html/nova-vacina.html":
      logoMyHealth.setAttribute("onclick", "pageHome()");
      const headerFlex = document.createElement("div");
      const btnVacinas = document.createElement("div");
      btnVacinas.setAttribute("class", "btnHeaderHomeVacinas");
      btnVacinas.setAttribute("onclick", "pageHome()");
      const txtBtnVacinas = document.createElement("span");
      txtBtnVacinas.innerHTML = "Minhas vacinas";
      txtBtnVacinas.setAttribute("class", "txtBtnHeader");
      btnVacinas.appendChild(txtBtnVacinas);
      headerFlex.appendChild(btnVacinas);
      const btnLogout = document.createElement("div");
      btnLogout.setAttribute("class", "btnHeaderHomeLogout");
      btnLogout.setAttribute("id", "btnLogout");
      const txtBtnLogout = document.createElement("span");
      txtBtnLogout.innerHTML = "Logout";
      txtBtnLogout.setAttribute("class", "txtBtnHeader");
      btnLogout.appendChild(txtBtnLogout);
      headerFlex.appendChild(btnLogout);
      headerFlex.setAttribute("class", "flexHeader");
      document.getElementById("headerLoggedOn").appendChild(logoMyHealth);
      document.getElementById("headerLoggedOn").appendChild(headerFlex);
      break;
    case "/html/criar-conta.html":
    case "/html/entrar.html":
    case "/html/recuperar-senha.html":
      logoMyHealth.setAttribute("onclick", "pageIndex()");
      document.getElementById("header").appendChild(logoMyHealth);
      break;
    default:
      break;
  }
}

window.onload = () => {
  dynamicHeader();
};

function pageCriarConta() {
  window.location.href = "/html/criar-conta.html";
}

function pageEntrar() {
  window.location.href = "/html/entrar.html";
}

function pageIndex() {
  window.location.href = "/html/index.html";
}

function pageHome() {
  window.location.href = "/html/home.html";
}

function pageNovaVacina() {
  window.location.href = "/html/nova-vacina.html";
}

function pageEditarVacina() {
  window.location.href = "/html/editar-vacina.html";
}
