const nombre = document.getElementById("NombreDeUsuario");
const contraseña = document.getElementById("Contraseña");
const enviar = document.getElementById("Enviar");

enviar.addEventListener("click", function() {
  const ValorNombre = nombre.value;
  const ValorContraseña = contraseña.value;
  let nombreNumero = false;
  let nombreMayuscula = false;
  let nombreMinuscula = false;
  let contraseñaNumero = false;
  let contraseñaMayuscula = false;
  let contraseñaMinuscula = false;
  // Validar si el input de nombre contiene un número
  if (/\d/.test(ValorNombre)) {
    nombreNumero = true;
  }

  // Validar si el input de nombre contiene una letra mayúscula
  if (/[A-Z]/.test(ValorNombre)) {
    nombreMayuscula = true;
  }

  // Validar si el input de nombre contiene una letra minúscula
  if (/[a-z]/.test(ValorNombre)) {
    nombreMinuscula = true;
  }

  // Validar si el input de contraseña contiene un número
  if (/\d/.test(ValorContraseña)) {
    contraseñaNumero = true;
  }

  // Validar si el input de contraseña contiene una letra mayúscula
  if (/[A-Z]/.test(ValorContraseña)) {
    contraseñaMayuscula = true;
  }

  // Validar si el input de contraseña contiene una letra minúscula
  if (/[a-z]/.test(ValorContraseña)) {
    contraseñaMinuscula = true;
  }

  // Mostrar alerta solo si los dos inputs cumplen las condiciones
  if (nombreNumero&&nombreMayuscula&&nombreMinuscula&&contraseñaNumero&&contraseñaMayuscula&&contraseñaMinuscula) {
    alert("Nombre y contraseña válidos");
  } else {
    alert("Nombre y contraseña inválidos");
  }
});

// boton de ver o no ver contraseña
const botonVerONoVerContraseña = document.getElementById("botonveronovercontraseña");


let verContraseña = false;
document.getElementById("botonveronovercontraseña").addEventListener("click", function() {
  verContraseña = !verContraseña;
  if (verContraseña == false) {
    document.getElementById("Contraseña").type = "text";
    document.getElementById("botonveronovercontraseña").value= "No ver contraseña";

  } else {
    document.getElementById("Contraseña").type = "password";
    document.getElementById("botonveronovercontraseña").value= "Ver contraseña";
  }
});