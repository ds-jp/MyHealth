function passCheck() {
  if (
    document.getElementById("password").value ==
    document.getElementById("confirm_password").value
  ) {
    document.getElementById("message").innerHTML = "&#8203;";
  } else {
    document.getElementById("message").innerHTML = "Senha não confere!";
  }
}

function passConfirm() {
  passCheck();
  if (document.getElementById("message").innerHTML != "Senha não confere!") {
    return pageEntrar();
  }
}

const getEmail = () => {
  return document.getElementById("email").value;
};

const getSenha = () => {
  return document.getElementById("password").value;
};
