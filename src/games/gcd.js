import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

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

const generateRound = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const correctAnswer = gcd(num1, num2).toString();
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

export default () => {
  runEngine(rules, generateRound);
};
