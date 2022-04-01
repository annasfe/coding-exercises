const crazyQuotes = require('crazy-quotes');

let randomQuote = crazyQuotes.oneQuote();
console.log(randomQuote);


let allQuotes = crazyQuotes.allQuote("Movie");

let yodaQuotes = allQuotes.filter((element) => element.character="Yoda");

console.log(yodaQuotes);