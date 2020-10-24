// From https://github.com/TheBridge-FullStackDeveloper/fundamentos-de-programacion-bikram-array-funciones

const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

function suma(x, y) {
    return x + y;
}

function potenciacion(x, y) {
    return Math.pow(x, y);
}

function separarPalabras(phrase) {
    return phrase.split(' ');
}

function repetirString(x, y) {
    let finalString = '';
    for(let i = 0; i < y; i++) {
        finalString += x
    }
    return finalString;
}

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return numero !== 1;
}

