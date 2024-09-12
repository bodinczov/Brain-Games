#!/usr/bin/env node
import { getRandomInRange } from '../src/utils.js';
import { runEngine } from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeRound = () => {
  const number = getRandomInRange(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [`${number}`, correctAnswer];
};

runEngine(rules, makeRound);
