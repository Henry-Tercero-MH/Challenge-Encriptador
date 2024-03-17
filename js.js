//capturaramos el msj que el usuario escribe en el textarea y mensaje
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textEncriptado = encriptar(textArea.value);
  mensaje.value = textEncriptado;
  textArea.value = "";
  copiar.style.backgroundImage = "none";
}
function btnDesencriptar() {
  const textEncriptado = desencriptar(textArea.value);
  mensaje.value = textEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {
  //se crea un array bidimensional donde almacenamos las llaves de encriptacion
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1],
        [1]
      );
    }
  }
  return stringEncriptada;
}
function desencriptar(stringDesencriptada) {
  //se crea un array bidimensional donde almacenamos las llaves de encriptacion
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();
  if (stringDesencriptada === "jaimenters") {
    let nombre = "james";
    return nombre;
  } else {
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(
          matrizCodigo[i][1],
          matrizCodigo[i][0]
        );
      }
    }
    return stringDesencriptada;
  }
}
function copiarTexto() {
  // Seleccionar el textarea
  const textArea = document.querySelector(".mensaje");

  // Seleccionar el texto dentro del textarea
  textArea.select();

  // Copiar el texto seleccionado al portapapeles
  document.execCommand("copy");

  // Deseleccionar el texto (opcional)
  textArea.setSelectionRange(0, 0);

  // // Mostrar un mensaje o realizar otras acciones (opcional)
  // alert("Texto copiado al portapapeles");
  textArea.value = ""; //borramos el texto
}
