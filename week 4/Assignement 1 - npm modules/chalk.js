const chalk = require('chalk');
const readline = require("readline");

const readL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ORANGES = "oranges"
const BANANAS = 'bananas';
const STRAWBERRIES = 'strawberries';
const KIWIS = 'kiwis';

const output = elem => `My favorite fruit is ... ${elem}`;

readL.question("What is your favorite fruit: oranges, bananas, strawberries or kiwis? ", function (input) {
    let fruit = input.toLowerCase();

    switch (fruit) {
        case ORANGES:
            console.log(chalk.keyword('orange')(output(fruit)));
            readL.close();
            break;
        case BANANAS:
            console.log(chalk.bold.yellow(output(fruit)));
            readL.close();
            break;
        case STRAWBERRIES:
            console.log(chalk.underline.red(output(fruit)));
            readL.close();
            break;
        case KIWIS:
            console.log(chalk.inverse.green(output(fruit)));
            readL.close();
            break;
        default:
            console.log(`Sorry we don't have this fruit available 😢`);
            readL.close();
    }

});

readL.on("close", function () {
    process.exit(0);
});