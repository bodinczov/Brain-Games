import readlineSync from 'readline-sync';

const enterNamePart = () => {
  var name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export { enterNamePart };