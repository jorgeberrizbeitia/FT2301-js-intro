console.log("Probando desde script.js");

// comentarios de JS

/*

comentarios
de multiples
lineas

*/

let hobby; // creando una cajita. Declaracion de variable.

console.log(hobby);
// undefined define algo vacio. Algo que no se le ha asignado un valor.

hobby = "Videojuegos"; // dar contenido a la cajita. Initialización de Variable.

console.log(hobby);



let anotherHobby = "Escalar";

console.log(anotherHobby)

// cambiar valor de una variable
anotherHobby = "Bailar";

console.log(anotherHobby)

// let hobby;

// cosas que no puedo o no debo hacer en JS


// let 24horas; // empezar con numeros
// let const; // palabras reservadas
let mipeliculafavoritadelavida; // mala practica
// usar camelCasing
let miPeliculaFavoritaDeLaVida; // buena practica



// CONST

let age = 30;
console.log("antes de cambiar el valor", age)

age = 33;
console.log("despues de cambiar el valor", age)


const birthdate = "01/01/2000";
console.log("antes de cambiar valor", birthdate)

// birthdate = "02/02/2001";
// console.log("despues de cambiar valor", birthdate)

// const myNewAge; // JS no permite

// existe una 3ra palabra para crear variables que es var

// 1. var es una palabra antigua ES5-
// 2. var presenta algo que se llama hoisting
// 3. solo usar let o const. Cambiar todos los var por let.



// typeof
let variable1 = "Hello";
console.log( typeof variable1 )

let variable2 = 45;
console.log( typeof variable2 )

let variable3 = true;
console.log( typeof variable3 )

let variable4 = undefined;
console.log( typeof variable4 )

let variable5 = null; // si es su propio tipo de data.
console.log( typeof variable5 )

let variable6 = { name: "Jorge" }
console.log( typeof variable6 )

let variable7 = NaN; // no es un tipo de data, es tipo number
console.log( typeof NaN )

let variable8 = []; // los arrays no son su propio de data. comparte el mismo que los objetos.
console.log( typeof variable8 )
