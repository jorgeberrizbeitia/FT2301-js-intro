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

// let hobby; // no puede crear variables con el mismo nombre (let o const)

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



// STRINGS


let fruit1 = "banana";
let fruit2 = "pera";
let fruit3 = "fresa";


let recipe = "Mi receta de Smoothie lleva: " + fruit1 + " y tambien " + fruit2
console.log(recipe)

// en vez de contatenar, tenemos acceso a algo que se llama interpolacion de strings
// para esto solo se puede si usamos backticks ``
let recipeTotal = `Mi receta de Smoothie lleva: ${fruit1}, ${fruit2}, y tambien ${fruit3}`
console.log(recipeTotal)


// posiciones de caracteres (INDEX) en strings

let simpleWord = "Hola";
//                ||||
//                0123

console.log(simpleWord)
console.log(simpleWord[0])

console.log(simpleWord[2])

// length (propiedades) cantidad de caracteres

console.log( simpleWord.length )

// como hago console.log del ultimo caracter?

// let lastPosition = simpleWord.length - 1
console.log( simpleWord[simpleWord.length - 1] ) // ultimo caracter (sin importar largo de string)



// Algunos METODOS de strings


// .indexOf()

let song = "bananaramawakawakaehehsamiramira";

console.log( song.indexOf("w") ) // busca posicion de caracter. -1 es que no existe


// .slice()

// console.log( song.slice(10, 14) )
let newStr = song.slice(10, 14)
console.log(newStr)



// .toUpperCase() & .toLowerCase()

console.log( newStr.toUpperCase() )
console.log( song.toUpperCase() )

// lo mismo que arriba en una sola linea
console.log( song.slice(16, 24).toUpperCase() ) 




// obtener la primera letra capitalizada

let newWord = "bob"

let firstLetter = newWord[0].toUpperCase()
let restofWord = newWord.slice(1)

let capitalizedWord = firstLetter + restofWord
console.log(capitalizedWord)


// igual que arriba pero en una linea
console.log( newWord[0].toUpperCase() + newWord.slice(1, newWord.length) )


let name1 = "bob"
let name2 = "Macintosh"

console.log( name1 + " " + name2 )
console.log( `${name1} ${name2}` )




// NUMBERS



let posNum = 234234;
let negNum = -42423;
let decNum = 0.434;
// let other = Infinity
// let other = NaN



let num1 = 6;
let num2 = 2;


console.log( num1 + num2 );
console.log( num1 - num2 );
console.log( num1 * num2 );
console.log( num1 / num2 );
console.log( num1 ** num2 );

// % modulus

console.log( num1 % num2 ) // 2 + 2 + 2 = 6
console.log( 7 % 2 ) // 2 + 2 + 2 = 6 + restante 1
console.log( 20 % 7 ) // 7 + 7 = 14 + restante 6

// principalmente para saber si un numero es par o impar


// operadores matematicos y de asignacion

let myAge = 28;
console.log(myAge)

myAge = myAge + 1;
console.log(myAge)

// +=
myAge += 1; // exactamente lo mismo que myAge = myAge + 1;
console.log(myAge)

//++
myAge++ // exactamente lo mismo que myAge = myAge + 1 y que myAge += 1
console.log(myAge)


// COERCION

console.log( 3 + 5 )
console.log( "3" + "5" )

console.log( "5" - "3" ) //  coerciona los strings a numeros correctamente 5 - 3 = 2

console.log( "Javascript" - "script" ); // NaN

console.log( "3" + 5 ) // "35"
console.log( 3  + "5")
// + primero actua como concatenacion


// Objetos globales de JS

// Math para obtener numeros aleatorios

let randomNumber = Math.random()
// Math.random() valor aleatorio entre 0 y 0.999999999999
console.log(randomNumber)

// quiero un numero entre 0 y 10


let random10 = Math.random() * 11
let random10Int = Math.floor(random10)
console.log(random10Int)




// BOOLEANS


let posBool = true;
let negBool = false;


// Operador Not ! => invierte el booleano

console.log(posBool)
console.log(!posBool)
console.log(!!!!!!!!posBool)


// OPERADORES DE COMPARACION === & !== comparaciones estrictas

let food1 = "sopa";
let food2 = "hamburguesa";
let food3 = "sopa";

console.log(food1 === food2) // false
console.log(food1 === food3) // true

console.log(food2 !== food3)

console.log(10 >= 20) // false
console.log(4 < 10) // true


console.log("a" < "f") // ASCII true
console.log("x" < "b") // ASCII false


// == & !=

console.log("5" === "5") // true
console.log("5" === 5) // false
console.log("5" == 5) // true con == JS va a efectuar coercion de los tipos de data


// OPERADORES LOGICOS && || 

console.log("manzana" === "manzana" && "pizza" === "hamburguesa")
//                   true           &&        false
//                                 false

// && solo es verdadero si todas las comparaciones son verdaderas

console.log("manzana" === "pera" || "banana" === "banana")
//                    false      ||         true
//                              true

// || si al menos una comparaciones es verdadero, todo es verdadero


console.log( ("manzana" === "pera" || "banana" === "banana") && "pizza" === "hamburguesa" )
//                    false                   true
//                                true                       &&       false
//                                                          false


// Guess the console input for each console.log

console.log(true && false); // false
console.log(11 % 3 === 2); // 3 + 3 + 3 + 2
console.log(false || true); // true
console.log(!true || false); // false
console.log(17 == '17'); // true
console.log(123 === '123'); // false
console.log('Hello' - 'llo'); // NaN

let statement = 'I love JavaScript!';
let subStatement = statement.slice(7, statement.length);
console.log(subStatement);

statement[0].toLowerCase(); // "i" ???
console.log(statement); 

// 1. "i"
// 2. 'I love JavaScript!'


// CONDITIONALS


let naranjas = "patata";

if (naranjas === 0) {
  // solo ejecuta si lo de arriba es verdadero
  console.log("no tienes naranjas")
}

if (naranjas > 0 && naranjas < 10) {
  console.log("tienes naranjas para hacer un juego")
}

if (naranjas >= 10) {
  console.log("tienes muchas naranjas para hacer una tienda de jugos")
}

// if else

if (naranjas === 0) {
  console.log("no tienes naranjas")
  // detiene toda la verificacio del condicional
} else if (naranjas > 0 && naranjas < 10) {
  console.log("tienes naranjas para hacer un juego")
} else if (naranjas >= 10) {
  console.log("tienes muchas naranjas para hacer una tienda de jugos")
} else {
  // podemos crear una condicion predeterminada si todo falla
  // en cualquier otro caso
  console.log("hubo un error en la data")
}


// SWITCH para comparaciones directas si algo es igual a otra cosa

let manzanas = 5;

switch(manzanas) {
  case 0:
    console.log("no tienes manzanas");
    // break
    break; // deten la ejecucion a partir de este momento.
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    console.log(`tienes ${manzanas} manzanas para hacer jugo`);
    break;
  default: // en cualquier otro caso
    console.log("tienes muchas manzanas! para una tienda")
}



//


// if (30 === 30) {
//   console.log("esto se verá?")
// }

if (30) {
  // el numero tiene tiene un aspecto verdadero (thruthy)
  console.log("esto se verá?")
}

if (0) {
  // el numero 0 tiene un aspecto similar a false (falsy)
  console.log("esto se verá? numero 0")
}

console.log(false === 0) // false
console.log(false == 0) // falsy en ambos


// valores con aspecto falsy

// false
// 0
// ""
// undefined
// null
// NaN

if (false || 0 || "" || undefined || null || NaN) {
  console.log("can't see this!")
}

console.log( !!"Hola" ) // el valor booleano relativo


let username = ""; 

// console.log("Hola " + username)

if (username) {
  console.log("Hola " + username)
} else {
  console.log("Hola usuario, por favor agregue nombre")
}


// FOR LOOP


// for (inicialización, condición, expresión final) {
//  lo que quiero ejecutar x cantidad de veces
// }

// inicialización es la variable control del bucle
// condición es lo que determina cuantas veces ocurrirá el bucle
// expresión final es lo que altera el comportamiento del bucle

for (let patata = 10; patata < 20; patata = patata + 1) {
  
  // 1. let patata = 10 SOLO SE EJECUTA UNA VEZ antes de iniciar el bucle

  // 2. if (patata < 20) ejecuta el codigo dentro del bucle. AL INICIO DE CADA EJECUCION
  
  // 3. El codigo dentro del bucle se ejecuta
  console.log("yay! bucle de patatas!")

  // 4. patata = patata + 1 AL FINAL DE CADA EJECUCION
}

// console.log(patata)


for (let i = 0; i < 200; i = i + 20) {
  console.log("ejecutando un bucle 12 veces", i)
}

// console.log(i)


// bucles con variables externas

let lyrics = "Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world"


// determinar la cantidad de letras "o" del string

let counter = 0;

for (let i = 0; i < lyrics.length; i++) {
  // console.log( lyrics[i] )
  if (lyrics[i] === "o") {
    console.log("consegui la o!")
    counter = counter + 1
  }
}


console.log("la cantidad de letras o en la canción es: ", counter)
