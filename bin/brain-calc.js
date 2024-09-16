#!/usr/bin/env node
import getRandomInRange from '../src/utils.js';
import runEngine from '../src/index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomInRange(1, 50);
  const num2 = getRandomInRange(1, 50);
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculation(num1, num2, operator));

  return [question, correctAnswer];
};

const rules = 'What is the result of the expression?';
runEngine(rules, generateRound);
