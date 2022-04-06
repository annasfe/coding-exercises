const cq = require("crazy-quotes");


let array1 = cq.allQuote('Movie').filter(e => e.character==="Yoda").map(e=>e.quote);
let array2 = cq.allQuote('TV').filter(e => e.character==="Dr. Sheldon Cooper").map(e=>e.quote);

let allquotes = array1.concat(array2).sort(); //this will join and mix the two arrays

let num = Math.floor(Math.random()*(allquotes.length-5));
let crazyString = allquotes.slice(num, num+5).reduce((acc, elem)=>{return acc+"\n"+elem}, "");

//console.log(crazyString);
let crazyObject = {crazyString: crazyString}

module.exports = crazyObject;