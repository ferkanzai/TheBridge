// From https://github.com/TheBridge-FullStackDeveloper/pt-sept-20-js-avanzado/blob/master/10-11-2020-functional-programming/ejercicio.md

const names = ['Frodo', 'Gandalf', 'Balrog', 'Galadriel'];
const ages = [30, 400, 2000, 1200];
const races = ['hobbit', 'human', 'demon', 'elf'];

// const tlotrCharacters = names.reduce((acc, current, index) => {
//   return {
//     ...acc,
//     positionIndexes: [...acc.positionIndexes, index]
//   }
// }, {
//   positionIndexes: []
// })

const push = (arr = [], value) => {
  const newArr = [...arr, value];
  return newArr;
};

const copyArrayInObj = (obj, field, arr) =>
  arr.reduce((acc, next) => {
    return {
      ...acc,
      [field]: push(acc[field], next),
    };
  }, obj);

// console.log(tlotrCharacters)

const tlotrCharacters = copyArrayInObj({}, 'age', ages)
console.log(tlotrCharacters)