const arrow = () => {};

const CLAVES = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

let input = document.querySelector("textarea");
let btnEncrypt = document.querySelector("#encriptar");

const encrypt = () => {
  if (input.value == "") {
    document.getElementById(
      "clave"
    ).innerHTML = `<h5>Ningún mensaje fue encontrado</h5><p>Ingresa un mensaje para encriptar o desencriptar.</p>`;
    return;
  }

  let str = input.value;
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = CLAVES[arr[i]] || arr[i];
  }

  msg = arr.join("");

  document.getElementById(
    "clave"
  ).innerHTML = `<p>${msg}</p><div class="col s12 btn-d"><a id="copiar" class="waves-effect waves-light btn-large btn-s">Copiar</a></div>`;

  input.value = "";
};

btnEncrypt.onclick = encrypt;
