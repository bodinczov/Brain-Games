#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What number is missing in the progression?');

for (let i = 0; i < 4; i += 1) {
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }

  const progressionValues = [];
  const progressionLength = Math.round((Math.random() * 5) + 5);
  const progressionStep = Math.round((Math.random() * 10) + 1);
  const firstValue = Math.round((Math.random() * 10) + 1);
  const missingIndex = Math.floor(Math.random() * progressionLength); // Исправлено использование Math.floor

  progressionValues.push(firstValue);
  for (let j = 1; j < progressionLength; j += 1) {
    const forPush = progressionValues[j - 1] + progressionStep;
    progressionValues.push(forPush);
  }

  const correctAnswer = progressionValues[missingIndex]; // Значение пропущенного элемента
  progressionValues[missingIndex] = '..';

  const question = progressionValues.join(' ');
  console.log(`Question: ${question}`);
  
  const answer = parseInt(readlineSync.question('Your answer: '), 10); // Добавлено основание системы счисления

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
