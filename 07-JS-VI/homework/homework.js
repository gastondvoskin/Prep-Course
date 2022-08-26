// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}
// test
mayuscula('luis');


function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}
// //test
// function ejemplo() {
//   console.log('funciona');
// }
// invocarCallback(ejemplo);


function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);
}
// // test
// function suma(n1, n2) {
//   return n1 + n2;
// }
// operacionMatematica(5, 3, suma);



function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let sumaNumeros = numeros.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
  })
  cb(sumaNumeros);
}
// // test
// agregar return a la ultima linea de codigo de la función y ejecutar:
// sumarArray([1, 3], function(){console.log('funciona')});



function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento) {
    cb(elemento);
  })
}
// // test
// arr = [1, 3, 6];
// function mostrar(x) {
//   console.log(x);
// }
// forEach(arr, mostrar);
//
// function dupl(x) {
//   console.log (2 * x);
// }
// forEach(arr, dupl);




function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = array.map(function(elemento) {
    return cb(elemento);
  })
  return nuevoArray;
}
// // test
// let arr = [2, 3]
// function mostrar(num) {
//   console.log(num);
// }
// map(arr, mostrar);



function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  nuevoArreglo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().charAt(0) === 'a') {
      nuevoArreglo.push(array[i]);
    }
  }
  return nuevoArreglo;
}
// // test
// filter(['al', 'cl']);







// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
