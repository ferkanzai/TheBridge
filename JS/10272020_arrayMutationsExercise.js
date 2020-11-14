const quiz = {
    questions: [
      '¿De que color es la túnica de Gandalf al final de la trilogía?',
      '¿Cómo se llama el enemigo en el Señor de los Anillos?',
      '¿Cuántos elefantes mata Legolas en la batalla final?'
    ],
    validAnswers: ['blanco', 'sauron', 4],
    userAnswers: [],
    points: 0,
    validateAnswers: function () {
        this.userAnswers.forEach((answer, index) => {
            if (answer === this.validAnswers[index]) {
                this.points += 3;
            }
        })
    },
    resetQuiz: function () {
      this.points = 0;
      this.userAnswers = [];
    }
  };
// 1. Rellena el array con 3 respuestas a tu elección. Al menos una debe ser verdadera como en validAnswers.
const answers = ['blanco', 'saruman', 2];
// 2. Recorre con un .forEach el array answers y empuja cada respuesta dentro de userAnswers
answers.forEach((answer) => {
    quiz.userAnswers.push(answer)
});

console.log(quiz.userAnswers)

// 3. Modifica validateAnswers para que recorra userAnswers, y en caso de que
// la respuesta sea correcta (en validAnswers con el mismo index tiene el mismo valor)
// sumamos 3 puntos a points
// Aquí debe salir tantos puntos como respuestas correctas hemos añadido en answers

quiz.validateAnswers();
console.log(`¡¡Tienes ${quiz.points} puntos!!`)
// RESETEAMOS LOS PUNTOS Y VACIAMOS LAS PREGUNTAS
quiz.resetQuiz();
console.log(quiz.points)
// 4. Añade una pregunta a tu elección en questions. Añade una respuesta válida para esa
// pregunta en validAnswers. Y repite todo el proceso anterior con una respuesta más.
// Aquí debe salir tantos puntos como respuestas correctas hemos añadido en answers

quiz.questions.push('¿Dónde se reúne la Comunidad por primera vez?');
console.log(quiz.questions)
quiz.validAnswers.push('rivendel');
console.log(quiz.validAnswers)

answers.push('rivendel');
console.log(answers)

answers.forEach((answer) => {
    quiz.userAnswers.push(answer)
});

quiz.validateAnswers();

console.log(`¡¡Tienes ${quiz.points} puntos!!`)