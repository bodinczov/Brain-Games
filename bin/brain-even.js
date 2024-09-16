#!/usr/bin/env node
import getRandomInRange from '../src/utils.js';
import runEngine from '../src/index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomInRange(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [`${number}`, correctAnswer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
runEngine(rules, generateRound);
