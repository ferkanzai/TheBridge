class Student {
  constructor({ name, techs }) {
    this.name = name;
    this.techs = techs;
    this.levels = {};
  }

  getTechs() {
    return `${this.name} sabe las tecnologías: ${this.techs.join(', ')}`
  }

  addLevel(levelsArr) {
    this.techs.forEach((el, i) => {
      this.levels[el] = levelsArr[i]
    })
  }

  getLevels() {
    return Object.values(this.levels)
  }
}

const student = new Student({ name: 'Fernando', techs: ['HTML', 'CSS', 'JS', 'AWS'] });
console.log(student.getTechs())
student.addLevel([8, 7, 8, 9])
console.log(student)
console.log(student.getLevels())