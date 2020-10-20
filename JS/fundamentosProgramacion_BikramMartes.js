var variableSinValor;
var booleano1 = true;
var booleano2 = false;
const PI = 3.14;
const TAU = 2 * PI;
const booleanoAnd = booleano1 && booleano2;
const booleanoNot = !booleano1;
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
let incrementarDesp = 2;
const resultadoDesp = incrementarDesp++;
let incrementarAntes = 2;
const resultadoAntes = ++incrementarAntes;

// 10
let contarHasta10_2 = 0
for (contarHasta10_2; contarHasta10_2 < 10; contarHasta10_2++) {

}

// 11
let postI = 0;
let postJ = 0;
for (let i = 0; i < 11; i++) {
    postI += postJ++;
}

// 12
let sumaPares = 0;
for (let i = 0; i < 10; i++){
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

let variableValorNumerico = 22;
const MiNombre = 'Fernando';
const MiNumeroFav = 22;
const booleanoOr = booleano1 || booleano2;
const booleanoMix1 = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav);
const seisNoEsNueve = 6 !== 9;
const booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);
const valorSuma = MiNumeroFav + variableValorNumerico;
const valorResta = MiNumeroFav - variableValorNumerico;
const valorMultiplicacion = MiNumeroFav * variableValorNumerico;
const valorDivision = MiNumeroFav / 3;

// 24
let contarHasta10 = 0;
while (contarHasta10 < 10) {
    contarHasta10++;
}

// 25
let preI = 0;
let preJ = 0;
for(let i = 0; i < 11; i++){
    preI += ++preJ;
}

// 26
let sumaImpares = 0;
for (let i = 0; i < 10; i++){
    if (!(i % 2 === 0)) {
        sumaImpares += i;
    }
}