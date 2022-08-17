// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:


  // 1. Solución con EC6
  class Usuario {
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }

    saludar() {
      return 'Hola, mi nombre es ' + this.nombre;
    }
  }

  return Usuario;
}

// // 2. Solución con función constructora
//   function Usuario(opciones) { // declaración de la función constructora Usuario, que toma como parámetro el objeto opciones del cual se tomarán algunas propiedades.
//     this.usuario = opciones.usuario;  // this hace referencia al objeto que se creará con new. Se asignan propiedades a Usuario tomadas del objeto opciones.
//     this.nombre = opciones.nombre;
//     this.email = opciones.email;
//     this.password = opciones.password;
//   }
//
//   Usuario.prototype.saludar = function() { // Se agrega el método saludar al prototype de Usuario.
//     return 'Hola, mi nombre es ' + this.nombre;
//   }
//
//   return Usuario;
// }
//
//
// // 3. test
// var usuario1 = new Usuario({
//   usuario: 1,
//   nombre: 'jose',
//   email: 'jose@gmail.com',
//   password: '1234'
// });
//
// var usuario2 = new Usuario({
//   usuario: 2,
//   nombre: 'rober',
//   email: 'robertitohh@gmail.com',
//   password: '12323'
// });


function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function() {
    return "Hello World!";
  }
}
// // test de agregarMetodoPrototype
// function constructorTest(arg1) {
//   this.arg1 = arg1;
// }
// var objetoTest = new constructorTest;
// agregarMetodoPrototype(constructorTest);
// console.log(objetoTest.saludar()); // "Hello World!"



function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    return this.split("").reverse().join("");
  }
}

// // Test
// agregarStringInvertida();
// var palabra = 'abcde';
// palabra.reverse(); // 'edcba'
// 'ante'.reverse; // 'etna'


// El siguiente código no funcionó y aún no entiendo por qué
// String.prototype.reverse = function() {
//   var resultado = '';
//   for (var i = 0; i < this.length; i++) {
//     resultado[i] = this[this.length - 1 - i];
//   }
//   return resultado;
// }
//






// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: {
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio
    }

    detalle() {
      return this;
    }
}

// // test
// var unaPersona = new Persona('carlos', 'gutierrez', 37, 'guigui 145');
// unaPersona.detalle()
// // Devuelve Persona {
// //   nombre: 'carlos',
// //   apellido: 'gutierrez',
// //   edad: 37,
// //   domicilio: 'guigui 145'
// // }

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var unaPersona = new Persona('Juan', 'Perez', 22, 'Saavedra 123');
  return unaPersona;
}


function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {
    return this.nombre + ', ' + this.edad + ' años'
  }
}

// // Test
// agregarMetodo();
// var carlitos = new Persona('Carlos', 'Gimenez', 39, 'domicilio 135');
// carlitos.datos();






// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
