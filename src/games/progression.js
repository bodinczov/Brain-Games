import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomInRange(5, 10);
  const step = getRandomInRange(1, 10);
  const start = getRandomInRange(1, 50);
  const missingIndex = getRandomInRange(0, progressionLength - 1);

  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = progression[missingIndex].toString();
  progression[missingIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const rules = 'What number is missing in the progression?';

export default () => {
  runEngine(rules, generateRound);
};
