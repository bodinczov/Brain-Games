import readlineSync from 'readline-sync';

const enterNamePart = () => {
  var name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
const gcd = (num1, num2) => {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};
export { enterNamePart, gcd };