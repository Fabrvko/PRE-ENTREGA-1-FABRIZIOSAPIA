// Declaración de variables
let opcion = -1

let cantAirmax = 25;
let precAirmax = 7500;

let cantJordan = 10;
let precJordan = 10000;

let cantVans = 20;
let precVans = 6000;

let cantConverse = 15;
let precConverse = 5000;

// Declaración de funciones
const mostrarTablaStock = (nAirmax, nJordan, nVans, nConverse, pAirmax, pJordan, pVans, pConverse) => {

  return parseInt(prompt((
    "UMORA SHOES - STOCK" + "\n" +
    "Items    Cantidad    Precio por unidad\n" +
    "Airmax    " + nAirmax + " uni    $" + pAirmax + "\n" +
    "Jordan    " + nJordan + " uni    $" + pJordan + "\n" +
    "Vans    " + nVans + " uni    $" + pVans + "\n" +
    "Converse    " + nConverse + " uni    $" + pConverse + "\n\n" +
    "Ingrese 1 para realizar un pedido. Ingrese 0 para volver al menú principal."
  )));
}

const mostrarMenuPrincipal = () => {

  return (
    "UMORA SHOES" + "\n" +
    "1 - Ver Stock" + "\n" +
    "2 - Realizar pedido" + "\n" +
    "0 - Salir" + "\n\n" +
    "Seleccioná una opción."
  )
}

const menuMostrarProductos = () => {

  let productoId;

  while (repeat = true) {
    productoId = parseInt(prompt((
      "UMORA SHOES - Productos" + "\n" +
      "1 - Airmax" + "\n" +
      "2 - Jordan" + "\n" +
      "3 - Vans" + "\n" +
      "4 - Converse" + "\n\n" +
      "Seleccioná tu opción."
    )))
    if (productoId > 0 && productoId <= 4) {
      return productoId;
    } else {
      mensajeOpcionNoValida();
    }
  }
}

const preguntarCantidad = (producto) => {

  let value;

  while (true) {
    value = parseInt(prompt((
      "UMORA SHOES - Cantidad" + "\n" +
      "Ingresa la cantidad de " + producto + ":"
    )));
    if (value > 0) {
      return value;
    } else {
      alert("Error: la cantidad tiene que mayor a 0")
    }
  }
}

const chequearNanEspacioVacio = (mensaje) => {

  let condicion = true;

  while (condicion == true) {
    valor = prompt(mensaje);
    console.log(valor);
    if (valor == "" || valor == null) {
      condicion = true;
      alert("Error: no se ha ingresado ningún valor.");
    } else {
      condicion = false;
    }
  }

  return valor;
}

const preguntarNombres = () => {

  valor = 0

  return chequearNanEspacioVacio(
    "UMORA SHOES - Nombre" + "\n" +
    "Ingrese su/s nombre/s:"
  );
}

const preguntarApellidos = () => {

  return chequearNanEspacioVacio(
    "UMORA SHOES - Apellido" + "\n" +
    "Ingrese su/s apellido/s:"
  )
}

const preguntarDireccion = () => {

  return chequearNanEspacioVacio(
    "UMORA SHOES - Dirección" + "\n" +
    "Ingrese su dirección:"
  )
}

const preguntarEmail = () => {

  return chequearNanEspacioVacio(
    "UMORA SHOES - E-mail" + "\n" +
    "Ingrese la email:"
  )
}

const emailComprador = () => {

  return (
    "UMORA SHOES - email" + "\n" +
    "Ingrese su email:"
  )
}

const preguntarCondicionComprador = () => {

  let condicion = -1;

  while (condicion == -1) {
    condicion = parseInt(prompt(
      "UMORA SHOES - Entrega" + "\n" +
      "Condiciones de entrega:\n" +
      "1 - Retiro en sucursal" + "\n" +
      "2 - Envío a domicilio" + "\n\n" +
      "Seleccione su entrega:"
    ));
    if (!(condicion > 0 && condicion <= 2)) {
      condicion = -1;
      mensajeOpcionNoValida();
    }
  }

  return condicion;
}

const confirmarCompra = (productoId, productoQty, condicionComprador, precioFinal, nombresComprador, apellidosComprador, direccionComprador, emailComprador) => {

  let condicionEntrega = " | Retiro en sucursal.";

  if (condicionComprador == 2) {
    condicionEntrega = " | Envío a domicilio.";
  }

  return parseInt(prompt((
    "UMORA SHOES - Confirmar compra" + "\n" +
    productoQty + " uni de " + convierteIdNombre(productoId) + " | Pre. uni: $" + precioProducto(productoId) + condicionEntrega + " | Precio final: $" + precioFinal + "\n" +
    "A nombre de: " + apellidosComprador + ", " + nombresComprador + ".\n" +
    "Dirección de entrega: " + direccionComprador + ". E-mail: " + emailComprador + ".\n\n" +
    "Ingrese 1 para confirmar la compra. Ingrese 0 para cancelar la compra."
  )));
}

const chequearStock = (stock, cantSolicitada) => {

  if (stock - cantSolicitada >= 0) {
    return false;
  } else {
    alert("Error: cantidad pedida supera el stock de " + stock + " unidades.");
  }

  return true;
}

const convierteIdNombre = (id) => {

  switch (id) {
    case 1:
      return "Airmax";
    case 2:
      return "Jordan";
    case 3:
      return "Vans"
    case 4:
      return "Converse"
    default:
      return "Producto Desconocido"
  }
}

const precioProducto = (productoId) => {

  switch (productoId) {
    case 1:
      return precAirmax;
    case 2:
      return precJordan;
    case 3:
      return precVans;
    case 4:
      return precConverse;
    default:
      alert("Error")
      return 0;
  }
}

const calcularPrecioFinal = (productoId, productoQty, condicionComprador) => {

  let precioFinal = productoQty * precioProducto(productoId);

  if (condicionComprador == 2) {
    return precioFinal + 1000;
  }

  return precioFinal;
}

const graciasCompra = () => {

  alert("¡Muchas gracias por su compra!");
}

const compraCancelada = () => {

  alert("¡Atención: Compra cancelada!");
}

const descontarStock = (productoId, productoQty) => {
  switch (productoId) {
    case 1:
      cantAirmax = cantAirmax - productoQty;
      break;
    case 2:
      cantJordan = cantJordan - productoQty;
      break;
    case 3:
      cantVans = cantVans - productoQty;
      break;
    case 4:
      cantConverse = cantConverse - productoQty;
      break;
    default:
      alert("Error");
      break;

  }
}


const menuPrincipalPedido = () => {

  let repeat = true;
  let productoId;
  let productoQty;
  let nombresComprador;
  let apellidosComprador;
  let emailComprador;
  let condicionComprador;
  let precioFinal;
  let confirmaCompra;

  while (repeat == true) {

    productoId = menuMostrarProductos();
    productoQty = preguntarCantidad(convierteIdNombre(productoId));

    switch (productoId) {
      case 1:
        repeat = chequearStock(cantAirmax, productoQty);
        break;
      case 2:
        repeat = chequearStock(cantJordan, productoQty);
        break;
      case 3:
        repeat = chequearStock(cantVans, productoQty);
        break;
      case 4:
        repeat = chequearStock(cantConverse, productoQty);
        break;
      default:
        alert("Error: producto no encontrado.");
        break;
    }
  }

  nombresComprador = preguntarNombres();
  apellidosComprador = preguntarApellidos();
  direccionComprador = preguntarDireccion();
  emailComprador = preguntarEmail();
  condicionComprador = preguntarCondicionComprador();
  precioFinal = calcularPrecioFinal(productoId, productoQty, condicionComprador);
  confirmaCompra = confirmarCompra(productoId, productoQty, condicionComprador, precioFinal, nombresComprador, apellidosComprador, direccionComprador, emailComprador);
  if (confirmaCompra == 1) {
    descontarStock(productoId, productoQty);
    graciasCompra();
  } else {
    compraCancelada();
  }

  return -1;
}

const mensajeOpcionNoValida = () => {
  alert("Error por opción no valida ingresada.");
}

console.log("Inicio");

while (opcion != 0) {
  opcion = parseInt(prompt(mostrarMenuPrincipal()))

  switch (opcion) {
    case 0:
      alert("Gracias por tu visita. ¡Te esperamos pronto!");
      break;
    case 1:
      opcion = mostrarTablaStock(cantAirmax, cantJordan, cantVans, cantConverse, precAirmax, precJordan, precVans, precConverse);
      if (opcion == 1) {
        menuPrincipalPedido();
      } else {
        opcion = -1;
      }
      break;
    case 2:
      opcion = menuPrincipalPedido();
      break;
    default:
      mensajeOpcionNoValida();
      break;
  }
}

console.log("Fin");





