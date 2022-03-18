/** 1. Write a function that receives names of students in the class and returns the class size. There can be any number of names.
 * 
 * Example: getClassSize('Amy', 'Carolina', 'Marc', 'Peter', 'Maria') // returns 5
*/

/** 2. Write a function that can accept any number of arguments and always returns the last argument.
 * 
 * Example:
 * getLastParam('a', 23, true, 'hello') // returns 'hello'
 */

/** 3. Write a function that receives a name of a child as a first parameter and names of this kid's pets as the rest of parameters. The function prints the following: "Name has X pets"
 * 
 * Example: getPets('Sam', 'Lola', 'Bella', 'Cooper') // Prints "Sam has 3 pets."
 */

/** 4. Write a function that accepts user's names and surnames (up to 4 in total) and prints a greeting (something like "Hello Name1 Name2 Surname1 Surname2").
 * If no name is passed, it prints "Hello User". Be careful not to print "undefined"!
 * 
 * Example: printGreeting('Sarah', 'Jessica', 'Parker') // prints 'Hello Sarah Jessica Parker'
 * 
 * Tip: make use of default parameter values rather than conditional statements to solve this exercise.
 */


// ### Challenge 5: arrayBuilder

// Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.
function arrayBuilder(obj) {
    // ADD CODE HERE
  }
  
  // Uncomment these to check your work!
  // console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
  // console.log(arrayBuilder({})); // => []

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
  
