import readlineSync from 'readline-sync';

export const evenGame = () => {
const sayHello = () => {
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
    return [randomNum, answer];
};

const game = () => {
    let wins = 0;
    question();
    if (isEven(randomNum) !== answer) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven(randomNum)}.\nLet's try again, ${name}!`)
    } else if (isEven(randomNum) === answer && wins < 3) {
        console.log(`Correct!`);
        wins += 1;
        game();
    } else {
        console.log(`Congratulations, ${name}!`);
    }
};
};