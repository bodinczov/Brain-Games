#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gcd } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
// При импорте переменной name из cli.js выбрасывается ошибка, что она пустая и всегда будет пустой
// (код экспорта, импорта переменной был удален)

console.log('Find the greatest common divisor of given numbers.');
for (let i = 0; i < 4; i += 1) {
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }    
  const randInt = Math.round((Math.random() * 50) + 1);
  const randInt2 = Math.round((Math.random() * 50) + 1);
  const correctAnswer = gcd(randInt, randInt2);

  console.log(`Question: ${randInt} ${randInt2}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10); // посмотреть как работает
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}