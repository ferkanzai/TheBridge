// Enunciado en: https://github.com/TheBridge-FullStackDeveloper/fundamentos-de-programacion-kata-fizzbuzz

// con for:

for ( var i = 1; i < 1001; i++ ){
    if ( i % 3 === 0 && i % 5 === 0 ){
        console.log("FizzBuzz");
    } else if ( i % 3 === 0 ){
        console.log("Fizz");
    } else if ( i % 5 === 0 ){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// con while:

var j = 1;

while ( j < 1001 ){
    if ( j % 3 === 0 && j % 5 === 0 ){
        console.log("FizzBuzz");
    } else if ( j % 3 === 0 ){
        console.log("Fizz");
    } else if ( j % 5 === 0 ){
        console.log("Buzz");
    } else {
        console.log(j);
    }
    j++;
}