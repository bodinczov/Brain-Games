#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

var name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What number is missing in the progression?');

for (let i = 0; i < 4; i += 1) {
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  };
  const progressionValues = [];
  const progressionLength = Math.round((Math.random() * 5) + 6); 
  const progressionIndex = Math.round((Math.random() * 10) + 1);
  const firstValue = Math.round((Math.random() * 10) + 1);
  const missingValue = Math.round(Math.random() * progressionLength);  
  progressionValues.push(firstValue);
  for (let i = 1; i < progressionLength; i += 1) {
    let forPush = progressionValues[i-1] + progressionIndex;
    progressionValues.push(forPush);
  }
  const miss = progressionValues[missingValue];
  progressionValues[missingValue] = '..';

  const correctAnswer = miss; 
  const question = progressionValues.join(' ');
  console.log(`Question: ${question}`);
  var answer = parseInt(readlineSync.question('Your answer: '));
  if (answer === correctAnswer) {
    console.log('Correct!');
    continue;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
};
