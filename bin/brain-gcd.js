#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gcd } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

let name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
// При импорте переменной name из cli.js выбрасывается ошибка, что она пустая и всегда будет пустой
// (код экспорта, импорта переменной был удален)

console.log('Find the greatest common divisor of given numbers.');
for (let i = 0; i < 4; i += 1) {
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  };      
  const randInt = Math.round((Math.random() * 50) + 1);
  const randInt2 = Math.round((Math.random() * 50) + 1);
  let correctAnswer = gcd(randInt, randInt2);

  console.log(`Question: ${randInt} ${randInt2}`);
  let answer = parseInt(readlineSync.question('Your answer: '));
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
};