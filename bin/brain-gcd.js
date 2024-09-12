#!/usr/bin/env node
import getRandomInRange from '../src/utils.js';
import runEngine from '../src/index.js';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const rules = 'Find the greatest common divisor of given numbers.';

const makeRound = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const correctAnswer = gcd(num1, num2).toString();
  return [`${num1} ${num2}`, correctAnswer];
};

runEngine(rules, makeRound);
