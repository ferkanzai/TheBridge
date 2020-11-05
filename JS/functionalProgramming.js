// From https://github.com/TheBridge-FullStackDeveloper/pt-sept-20-js-avanzado/blob/master/03-11-2020-functional-programming/ejercicio.md

// Crea una función que recibe dos argumentos (from, to) y devuelve un array con todos los números desde 'from' hasta 'to' incluídos. (La única que se puede realizar de manera un poquito más imperativa)

function fromTo(from, to) {
  let arr = []
  for(from; from <= to; from++) {
    arr.push(from)
  }
  return arr
}

console.log(fromTo(3, 5))

// Crea un función que recibe un array de números y devuelva la suma de todos ellos

sumAll = arr => arr.reduce((acc, current) => acc + current, 0)
console.log(sumAll([1, 2, 3, 4, 5, 6, 100]))

// Crea una función que reciba un número y devuelva la mitad

const half = num => num / 2
console.log(half(40))

// Crea una función que reciba dos números y divida el primero entre el segundo

const division = num1 => num2 => num1 / num2
console.log(division(8)(4))

// Crea una función para devolver si un número dado es par

const isEven = num => num % 2 === 0
console.log(isEven(5))

// Crea una función para devolver si un número dado es impar

const isOdd = num => num % 2 !== 0
console.log(isOdd(5))

// Crea una función que devuelve el primer elemento de un array

const arrayFirstElement = arr => arr[0]
console.log(arrayFirstElement([1, 123, 45, 67]))

// Crea una función que devuelve el primer elemento de un array

const arrayAllButFirst = arr => arr.filter((el, i) => i !== 0)
console.log(arrayAllButFirst([1, 123, 45, 67]))

// Crea una función que reciba dos números y devuelva si el primero es mayor que el segundo (currificada)

const isGreater = num1 => num2 => num1 > num2
console.log(isGreater(4)(3))

// Crea una función que devuelva la negación de un resultado (mejor currificada, pero si no, no pasa nada)

const not = fn => (...args) => !fn(...args)
const negation = result => !result
console.log(negation(''))

// Crea una función que devuelva true si los dos argumentos que recibe son verdaderos

const bothTrue = (arg1, arg2) => arg1 && arg2 ? true : false
console.log(bothTrue(4, ''))

// Crea una función que reciba dos números y devuelva una tupla (una array de dos elementos)

const simpleTuple = (num1, num2) => [num1, num2]
console.log(simpleTuple(1, 2))

// Crea una función que recibe dos listas y devuelve la lista más larga

const longerList = (arr1, arr2) => {
  if(arr1.length > arr2.length) {
    return arr1
  } else {
    return arr2
  }
}
console.log(longerList([1, 3, 4], [2, 3]))

// Crea una función ternaria currificada, recibe primero una función y luego dos argumentos.
// Si la ejecución de la función con los dos argumentos pasa la condición, devuelve a, si no, b

const ternariaCurry = fn => (a, b) => fn(a, b) ? a : b

// Devuelve la media de una lista de todos los números del 1 al 50

console.log(sumAll(fromTo(1, 50)) / 50)

// Devuelve aquellos números menores de 30 que sean pares en una lista del 1 al 100

console.log(fromTo(1, 100).filter(el => isEven(el) && el < 30))

// Dadas dos listas, la primera del 1 al 50 y la segunda del 51 al 80, recibidas como argumentos, crea una función que devuelva un array compuesto de tuplas entre ambas listas => [[1, 51], [2, 52], [3, 53], ...]. En caso de no ser iguales, ignoraremos los elementos sobrantes.

const complexTuple = (arr1, arr2) => arr1.map((el, i) => simpleTuple(el, arr2[i])).filter((el) => bothTrue(el[0], el[1]))
console.log(complexTuple(fromTo(1, 50), fromTo(51, 80)))

// Dada la respuesta del ejercicio anterior, devuelve solo el primer número de las tuplas en posición impar cuya suma del par sea mayor de 70

const result = complexTuple(fromTo(1, 50), fromTo(51, 80))
  .map((el, i) => bothTrue(isOdd(i), isGreater(sumAll(el))(70)) ? el[0] : null )
  .filter((el) => el)

console.log(result)