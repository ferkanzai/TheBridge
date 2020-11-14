// Tasks from: https://javascript.info/object

// Task 1

const user = {};
user.name = 'John';
user['surname'] = 'Smith';
user.name = 'Pete';
delete user['name'];
console.log(user);

// Task 2

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

// Taks 3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  
function sumSalaries(obj) {
    let sum = 0
    if (isEmpty(obj)) {
        return 0
    } else {
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                sum += obj[key]
            }
        }
    }
    return sum
}

const salariesEmpty = {}

console.log(sumSalaries(salaries));
console.log(sumSalaries(salariesEmpty));

// Task 4

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj){
        if (typeof obj[key] === 'number'){
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);
console.log(menu)

