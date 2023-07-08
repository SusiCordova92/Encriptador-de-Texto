const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var btn_copiar = document.querySelector(".btn-copiar");



function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  if(textoEncriptado!=""){
      mensaje.value = textoEncriptado;
      textArea.value = "";
      
  } else {
      alert("Ingrese texto")
  }
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    if(textoDesencriptado!=""){
        mensaje.value = textoDesencriptado;
        textArea.value = "";
      
    } else {
        alert("Ingrese texto")
    }
  }

function encriptar(stringEncriptado) {
  if(stringEncriptado!=""){
  let Codigo = [["a","ai"], ["e","enter"], ["i","emes"], ["o","ober"], ["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let a = 0; a < Codigo.length; a++) {
    if (stringEncriptado.includes(Codigo[a][0])) {
      stringEncriptado = stringEncriptado.replaceAll(Codigo[a][0], Codigo[a][1]);
    }
  }
  return stringEncriptado;
} else {
  return "";
} }

  function desencriptar(stringDesencriptado) {
  if(stringDesencriptada!=""){
  let Codigo = [["a","ai"], ["e","enter"], ["i","emes"], ["o","ober"], ["u","ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let a = 0; a < Codigo.length; a++) {
    if (stringDesencriptado.includes(Codigo[a][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(Codigo[a][1], Codigo[a][0]);
    }
  }
  return stringDesencriptado;
}  else {
  return "";
}



  botonEncriptar.onclick = btnEncriptar;
  botonDesencriptar.onclick = btnDesencriptar;

  function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => console.log("Text copied to clipboard"))
        .catch(error => console.error("Error copying text:", error));
}

  btn_copiar.addEventListener("click", () =>copiartexto(result.textContent));

}

