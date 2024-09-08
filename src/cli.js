import readlineSync from 'readline-sync';

const enterNamePart = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
const gcd = (num1, num2) => {
  let temp2 = num1;
  let temp3 = num2;
  while (temp3 !== 0) {
    const temp = temp3;
    temp3 = temp2 % temp3;
    temp2 = temp;
  }
  return temp2;
};
export { enterNamePart, gcd };
