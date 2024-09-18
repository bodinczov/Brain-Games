import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInRange(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, correctAnswer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  runEngine(rules, generateRound);
};
