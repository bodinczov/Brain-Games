#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
// При импорте переменной name из cli.js выбрасывается ошибка, что она пустая и всегда будет пустой
// (код экспорта, импорта переменной был удален)

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
for (let i = 0; i < 4; i += 1) {
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  };      
  const randInt = Math.round((Math.random() * 50) + 1); // +1 чтобы не выпал 0
  let correctAnswer = '';
  if (randInt === 2 || randInt === 3 || randInt === 5 || randInt === 7) {
    correctAnswer = 'yes';
  } else if (randInt % 3 === 0) {
    correctAnswer = 'no';
  } else if (randInt % 5 === 0) {
    correctAnswer = 'no';
  } else if (randInt % 7 === 0) {
    correctAnswer = 'no';
  } else if (randInt % 2 === 0) {
    correctAnswer = 'no';
  } else {
    correctAnswer = 'yes';
  }
  console.log(`Question: ${randInt}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
};

