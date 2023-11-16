import readlineSync from 'readline-sync';

const evenGame = () => {
const sayHello = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}! \nAnswer "yes" if the number is even, otherwise answer "no".`);
    return name;
};

const name = sayHello();

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
};

const question = () => {
    let randomNum = getRandomInt(1, 16);
    const answer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    const questResult = [randomNum, answer];
    return questResult;
};

const game = (wins) => {
    let questRes = question();
    if (isEven(questRes[0]) !== questRes[1]) {
        console.log(`${questRes[1]} is wrong answer ;(. Correct answer was ${isEven(questRes[0])}.\nLet's try again, ${name}!`)
    } else if (isEven(questRes[0]) === questRes[1] && wins < 2) {
        console.log(`Correct!`);
        wins += 1;
        game(wins);
    } else if (isEven(questRes[0]) === questRes[1] && wins === 2) {
        console.log(`Congratulations, ${name}!`);
    }
};
game(0);
};

export default evenGame;