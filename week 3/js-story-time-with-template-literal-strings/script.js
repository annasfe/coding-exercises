// who, with, where, whatIsDoing
let who = [
  "A Cat",
  "Michael Jackson",
  "Leonardo Da Vinci",
  "Taylor Swift",
  "Christina Aguilera",
  "Freddie Mercury",
  "Wednesday Adams",
  "Beyonce"
];

let withWho = [
  "maria",
  "martin",
  "a bird",
  "Manolo",
  "Bradd Pitt",
  "Elvis",
  "Lady Gaga",
  "a dog"
];

let where = [
  "the moon",
  "a park",
  "a restaurant",
  "a church",
  "a circus",
  "a graveyard",
  "a theater",
  "a boat"
];

let whatDoing = [
  "eating a giant tomato",
  "running a marathon",
  "bungee jumping in underwear",
  "participating a tortilla contest",
  "smoking weed",
  "swimming with dolphins",
  "killing a person",
  "snowboarding in a dress"
];

/*
 * Max num is always excluded
 * the minimum value 0
 */
function getRandomNumber(max) {
  // Math.random gives us 0 to 0.999999----> so on, never 1
  // Math.floor(2.5) --> 2
  // Opposite is Math.ceil(2.5) --> 3
  return Math.floor(Math.random() * max);
}

function getRandomItemFromArray(items) {
  // The length poroperty of array gives me size of the array

  // This is for readability
  // let sizeOfArray = items.length;

  // I am getting a random number between 0 and (length-1)
  let randomIndex = getRandomNumber(items.length);

  // let lastElement = items[items.length - 1];
  // let firstElement = items[0]

  // this is undefined
  // let undefinedElement  = items[items.length];

  return items[randomIndex];
}


function getRandomPerson() {
  return getRandomItemFromArray(who);
}

function getRandomPerson2() {
  return getRandomItemFromArray(withWho);
}

function getRandomPlace() {
  return getRandomItemFromArray(where);
}

function getRandomActivity() {
  return getRandomItemFromArray(whatDoing);
}

/*
function getRandomSentence() {
  let sentence =
    getRandomPerson() +
    " and " +
    getRandomPerson2() +
    " are " +
    getRandomActivity() +
    " in " +
    getRandomPlace();
  return sentence;
}

console.log('While', getRandomSentence() + ", " + getRandomSentence() + " on the other hand, " + getRandomSentence() + " and then, " + getRandomSentence() + " so that, " + getRandomSentence() + '.');
*/

function getRandomSentence(){
  let randomPerson = getRandomPerson();
  let randomPerson2 = getRandomPerson2();
  let randomActivity = getRandomActivity();
  let randomPlace = getRandomPlace();
  
  let sentence = `${randomPerson} and ${randomPerson2} are ${randomActivity} in ${randomPlace}`;
  return sentence;
}

function getRandomStory(){
  return `While ${getRandomSentence()}, ${getRandomSentence()}, on the other hand, ${getRandomSentence()} and then, ${getRandomSentence()} so that, ${getRandomSentence()}.`;
}

console.log(getRandomStory())

/*
While Wednesday Adams and Bradd Pitt are smoking weed in a church, Freddie Mercury and Elvis are swimming with dolphins in a boat on the other hand, Christina Aguilera and Elvis are eating a giant tomato in a church and then, Michael Jackson and Lady Gaga are killing a person in a boat so that, Freddie Mercury and maria are bungee jumping in underwear in a park.
*/
