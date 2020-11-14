// Tasks from https://javascript.info/object-methods

// Task 1

function makeUser() {
    return {
        name: "John",
        ref: function ref() {
            return this
        }
        // The following would return undefined
        // ref: this
    };
}

let user = makeUser();

console.log(user.ref().name); // What's the result?

// With getters

// function makeUser() {
//     return {
//         name: "John",
//         get ref() {
//             return this
//         }
//     };
// }

// let user = makeUser();

// console.log(user.ref.name);

// Task 2

const calculator = {
    read(a, b) {
        this.a = a
        this.b = b
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
}

console.log(calculator.read(5, 6))
console.log(calculator.sum())
console.log(calculator.mul())

// Task 3

let ladder = {
    step: 0,
    up() {
        this.step++;
        // console.log(this)
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        console.log(this.step);
    }
  };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().up().down().down().down().down().showStep();