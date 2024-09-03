import readlineSync from 'readline-sync';

const getName = () => {
  var name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default getName;