#!/usr/bin/env node
import getRandomInRange from '../src/utils.js';
import runEngine from '../src/index.js';

const rules = 'What number is missing in the progression?';

const makeRound = () => {
  const progressionLength = getRandomInRange(5, 10);
  const step = getRandomInRange(1, 10);
  const start = getRandomInRange(1, 50);
  const missingIndex = getRandomInRange(0, progressionLength - 1);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }

  const correctAnswer = progression[missingIndex].toString();
  progression[missingIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

runEngine(rules, makeRound);
