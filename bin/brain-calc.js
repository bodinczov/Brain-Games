#!/usr/bin/env node
import { getRandomInRange } from '../src/utils.js';
import { runEngine } from '../src/index.js';

const rules = 'What is the result of the expression?';

const makeRound = () => {
  const num1 = getRandomInRange(1, 20);
  const num2 = getRandomInRange(1, 20);
  const operation = getRandomInRange(0, 2);
  let question;
  let correctAnswer;

  switch (operation) {
    case 0:
      question = `${num1} + ${num2}`;
      correctAnswer = (num1 + num2).toString();
      break;
    case 1:
      question = `${num1} - ${num2}`;
      correctAnswer = (num1 - num2).toString();
      break;
    case 2:
      question = `${num1} * ${num2}`;
      correctAnswer = (num1 * num2).toString();
      break;
  }

  return [question, correctAnswer];
};

runEngine(rules, makeRound);
