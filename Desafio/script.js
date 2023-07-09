function encriptarTexto() {
  var texto = document.getElementById("texto").value;
  var resultado = encriptar(texto);
  document.getElementById("resultado").innerHTML = resultado;
}

function desencriptarTexto() {
  var texto = document.getElementById("texto").value;
  var resultado = desencriptar(texto);
  document.getElementById("resultado").innerHTML = resultado;
}

function copiarTexto() {
  var resultado = document.getElementById("resultado").innerHTML;
  navigator.clipboard.writeText(resultado).then(function() {
    alert("Texto copiado al portapapeles: " + resultado);
  }, function() {
    alert("Error al copiar el texto al portapapeles.");
  });
}

function encriptar(texto) {
  texto = texto.toLowerCase();
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}

function desencriptar(texto) {
  texto = texto.toLowerCase();
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  return texto;
}
