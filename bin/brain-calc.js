#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

var name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
// При импорте переменной name из cli.js выбрасывается ошибка, что она пустая и всегда будет пустой
// (код экспорта, импорта переменной был удален)

console.log('What is the result of the expression?');
for (let i = 0; i < 4; i += 1) {
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  };
  let actionType = Math.floor(Math.random() * 3);
  if (actionType === 0) { //    "+"
    let randInt = Math.floor((Math.random() * 50) + 1); // +1 чтобы не выпал 0
    let randInt2 = Math.floor((Math.random() * 50) + 1); 
    let correctAnswer = randInt + randInt2;
    console.log(`Question: ${randInt} + ${randInt2}`);
    var answer = parseInt(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
      continue;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  } else if (actionType === 1) {
    let randInt = Math.floor((Math.random() * 50) + 1); 
    let randInt2 = Math.floor((Math.random() * 50) + 1); 
    if (randInt < randInt2) {
      while (randInt < randInt2) {
        randInt = Math.floor((Math.random() * 50) + 1);
        randInt2 = Math.floor((Math.random() * 50) + 1);
        //   -----Прочекать------
      }
    }
    let correctAnswer = randInt - randInt2;
    console.log(`Question: ${randInt} - ${randInt2}`);
    var answer = parseInt(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
      continue;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  } else if (actionType === 2) {
    let randInt = Math.floor((Math.random() * 10) + 1); 
    let randInt2 = Math.floor((Math.random() * 10) + 1); 
    let correctAnswer = randInt * randInt2;
    console.log(`Question: ${randInt} * ${randInt2}`);
    var answer = parseInt(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
      console.log('Correct!');
      continue;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
  