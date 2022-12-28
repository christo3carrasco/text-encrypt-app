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
let btnDencrypt = document.querySelector("#desencriptar");

const notEmpty = () => {
  document.getElementById(
    "clave"
  ).innerHTML = `<h5>Ningún mensaje fue encontrado</h5><p>Ingresa un mensaje para encriptar o desencriptar.</p>`;
};

const setMsg = (msg) => {
  document.getElementById(
    "clave"
  ).innerHTML = `<p>${msg}</p><div class="col s12 btn-d"><a id="copiar" class="waves-effect waves-light btn-large btn-s" onclick="copypaste()">Copiar</a></div>`;
  input.value = "";
};

const encrypt = () => {
  if (input.value == "") {
    notEmpty();
    return;
  }

  let str = input.value;
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = CLAVES[arr[i]] || arr[i];
  }

  msg = arr.join("");
  setMsg(msg);
};

const copypaste = () => {
  let txt = document.querySelector("#clave");
  let msg = txt.getElementsByTagName("p")[0].innerHTML;
  navigator.clipboard.writeText(msg);
};

const dencrypt = () => {
  if (input.value == "") {
    notEmpty();
    return;
  }

  let str = input.value;
  let msg = str
    .replace(CLAVES.a, "a")
    .replace(CLAVES.e, "e")
    .replace(CLAVES.i, "i")
    .replace(CLAVES.o, "o")
    .replace(CLAVES.u, "u");
  setMsg(msg);
};

btnEncrypt.onclick = encrypt;
btnDencrypt.onclick = dencrypt;
