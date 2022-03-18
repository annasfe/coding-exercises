/** 1. Write a function that receives names of students in the class and returns the class size. There can be any number of names.
 * 
 * Example: getClassSize('Amy', 'Carolina', 'Marc', 'Peter', 'Maria') // returns 5
*/

/* FIRST VERSION */

// function getClassSize(...name) {
//   const classArray = [];
//   classArray.push(...name);
//   console.log(classArray);
//   return name.length;
// }
// console.log(getClassSize('Amy', 'Carolina', 'Marc', 'Peter', 'Maria'));


function getClassSize(...name) {
  return name.length;
}
console.log(getClassSize('Amy', 'Carolina', 'Marc', 'Peter', 'Maria'));


/** 2. Write a function that can accept any number of arguments and always returns the last argument.*/

function getLastParam(...param){
  //return param[param.length - 1];
  return param.pop()
}

console.log(getLastParam('a', 23, true, 'hello'));


/** 3. Write a function that receives a name of a child as a first parameter and names of this kid's pets as the rest of parameters. The function prints the following: "Name has X pets"*/
/* 
 * Example: getPets('Sam', 'Lola', 'Bella', 'Cooper') // Prints "Sam has 3 pets."
 */

/*FIRST VERSION*/
// function getPets (kid, ...pets) {
//   const petsArray = [];
//   petsArray.push(...pets);
//   const petsLength = petsArray.length;
//   console.log(`${kid} has ${petsLength} pets.`)
// }

function getPets (kid, ...pets) {
   console.log(`${kid} has ${pets.length} pets.`)
}

getPets('Sam', 'Lola', 'Bella', 'Cooper');


/** 4. Write a function that accepts user's names and surnames (up to 4 in total) and prints a greeting (something like "Hello Name1 Name2 Surname1 Surname2").
 * If no name is passed, it prints "Hello User". Be careful not to print "undefined"!
 * 
 * Example: printGreeting('Sarah', 'Jessica', 'Parker') // prints 'Hello Sarah Jessica Parker'
 * 
 * Tip: make use of default parameter values rather than conditional statements to solve this exercise.
 */

/*FIRST VERSION

function printGreeting (...num) {
  console.log(num);
  if (num.length < 5 && num.length > 0) {
    console.log(`Hello ${num}!`);
  } else if (num.length === 0){
    console.log("Hello User!");
  } else {
    console.log("You are too many!");
  }
}
*/

/*SECOND VERSION

function printGreeting (name1='', name2='', surname1='', surname2='') {
  if (name2 && surname1 && surname2 ==='') {
    `Hello ${name1}`;
    
  } else if  (surname1 && surname2 === '') {
    `Hello ${name1} ${name2}`;
    
  } else if  (surname2 === '')  {
    `Hello ${name1} ${name2} ${surname1}`;

  } else if  (name1 && name2 && surname1 && surname2 === '') {
    return `Hello User`
  } 
  return `Hello ${name1} ${name2} ${surname1} ${surname2}`
}
*/


function printGreeting(name1 = "User", ...manyMoreArgs) {
  if(manyMoreArgs.length>5) { console.log("too many names"); return; }
  console.log(`Hello ${name1} ${manyMoreArgs.join(" ")}`);
}


printGreeting('Sarah', 'Jessica', 'Parker');
printGreeting('');
printGreeting(null);
printGreeting();
printGreeting('Sarah', 'Jessica', 'Parker', 'Maria', 'John'); 




// ### Challenge 5: arrayBuilder

// Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.

function arrayBuilder(obj) {
  let keys = Object.keys(obj);          //keys = [cats, dogs]
  let values = Object.values(obj);      //values = [2, 1]
  let resultArray = []
  
  keys.forEach((item, index) => {  
  	for (let i=0; i<values[index]; i++) {
      resultArray.push(item)
    }
  })
  return resultArray
}
  
  // Uncomment these to check your work!
  console.log(arrayBuilder({'cats': 2, 'dogs': 5})); // => ['cats', 'cats', 'dogs']
  console.log(arrayBuilder({})); // => []




// ### Challenge 6: Function expression
// Convert the function named `functionDeclaration` to an anonymous function expression and assign it to a variable called myFunc.
// MODIFY THE CODE BELOW
function functionDeclaration() {
    return "Hi there!";
  }
  
  // console.log(myFunc()) //should log: "Hi there!"
  
// ### Challenge 7: Functions - ES6
  
  // For this challenge, convert the function `myJob` from ES5 syntax to arrow function syntax.
  
  function myJob(name, profession) {
    return `Hi, my name is ${name} and I'm a ${profession}.`;
  }
  
  // console.log(myJob("Jon", "Knights Watchman"));
  
