// ¡Tengo mucha hambre!
// Declara una variable “level” cuyo valor sea un número.
// Declara la variable “howMuch” cuyo valor sea string vacío “” Esta será la variable donde guardaremos la palabra “mucha” repetida (mediante concatenación) una cierta cantidad de veces.
// Declara una tercera variable auxiliar “message” donde guardaremos el mensaje a mostrar.
// Crea un bloque de código que itere la cantidad de veces indicada en level y en cada vuelta sume la palabra “mucha” a la variable “howMuch”. 
// Finalmente, imprime por consola  el mensaje final que debe verse como este: “Tengo mucha hambre”, donde la palabra “mucha” se repetirá la cantidad de veces que indique “level”.
// Por ejemplo: Si var level = 4, la consola muestra “Tengo mucha mucha mucha mucha hambre”

var level = 5;
var howMuch = "";
var message;

// con while

while (level > 0){
  howMuch += " mucha";
  level--;
}

console.log("Tengo" + howMuch + " hambre")

// con for

for (level; level < 0; level--) {
    howMuch += " mucha";
    level--;
}