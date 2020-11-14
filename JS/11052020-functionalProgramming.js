// From https://github.com/TheBridge-FullStackDeveloper/pt-sept-20-js-avanzado/blob/master/05-11-2020-functional-programming/ejercicios.md

// Crea una función que recibe una cadena y devuelve dicha cadena en mayúsculas

const upper = str => str.toUpperCase()
console.log(upper('hola'))

// Crea una función que reciba un str y devuelva la cadena del revés

const reverse = str => str.split("").reverse().join("");
console.log(reverse('hola'))

// Crea una función que reciba una cadena y devuelva un array con las letras como elementos del array

const strToArr = str => str.split('')
console.log(strToArr('hola'))

// Crea una función que reciba un array y devuelva un string formado por todos los elementos del array

const arrToStr = arr => arr.join('')
console.log(arrToStr([ 'h', 'o', 'l', 'a' ]))

// Crea una función currificada que reciba dos funciones en la primera ejecución, y una lista de, al menos, dos argumentos para la segunda ejecución. 
// La función comprobará si la ejecución de la primera función recibida en la primera ejecución con el segundo argumento recibido en la segunda ejecución es true. 
// Si lo es, devuelve la ejecución de la segunda función recibida con el primer argumento de la segunda ejecución. 
// Si no es true la evaluación, devuelve el primer argumento recibido en la segunda ejecución.

const curryTwoFunctions = (fn1, fn2) => (arg1, arg2) => fn1(arg2) ? fn2(arg1) : arg1

// Crea una función que recibe una cadena y devuelve esa cadena con la primera y última letra en mayúsculas.

const upperStartAndEnd = str => arrToStr(strToArr(str).map((el, i, array) => i === 0 || i === array.length - 1 ? el.toUpperCase() : el))
console.log(upperStartAndEnd('hola'))

