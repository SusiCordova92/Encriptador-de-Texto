const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");


function encriptar(stringEncriptado) {
  let Codigo = [["a","ai"], ["e","enter"], ["i","emes"], ["o","ober"], ["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let a = 0; a < Codigo.length; a++) {
    if (stringEncriptado.includes(Codigo[a][0])) {
      stringEncriptado = stringEncriptado.replaceAll(Codigo[a][0], Codigo[a][1]);
    }
  }
  return stringEncriptado;
}

  function desencriptar(stringDesencriptado) {
  let Codigo = [["a","ai"], ["e","enter"], ["i","emes"], ["o","ober"], ["u","ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let a = 0; a < Codigo.length; a++) {
    if (stringDesencriptado.includes(Codigo[a][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(Codigo[a][1], Codigo[a][0]);
    }
  }
  return stringDesencriptado;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}