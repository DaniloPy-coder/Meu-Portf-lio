let sliderElement = document.querySelector("#slider");
letbtnElement = document.querySelector("#btn");

let sizePass = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*!@";
let novaSenha = "";
sizePass.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePass.innerHTML = this.value;
};

function generationPass() {
  let pass = "";

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPass() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}
