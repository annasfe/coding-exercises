// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
// CHALLENGE 1
function createFunction() {
    return function() {
        console.log("Hello");
    }
}

// /*** Uncomment these to check your work! ***/
 const function1 = createFunction();
 function1(); // => should console.log('hello');


// CHALLENGE 2
// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
function createFunctionPrinter(input) {
    return function() {
        console.log(input)
    }
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

//Now we are going to create a function addByX that returns a function that will add an input by x
function addByX(x) {
    let num = x;
    return function(input) {
        return num+input
    }
}

// /*** Uncomment these to check your work! ***/
 const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
// function once(func) {
//     let result = 0;
//     return function(input) {
//         if (result === 0) {result = func(input);}
//         return result
//     }
// }


function once(callback) {
    let result = 0;
    const newFunction = function(input) {
      if(result==0) {
        return result = callback(input);
      }
      else
        return result
    }
    return newFunction
  }
  
  const onceFunc = once(addByTwo);
  console.log(onceFunc(4));  // => should log 6
  console.log(onceFunc(10));  // => should log 6
  console.log(onceFunc(9001));  // => should log 6


// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6



// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

// CHALLENGE 5
function after(count, func) {
    let counter = 1;
    return function() {
        if(counter<count) {counter++; return;}
        else return func();
    }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed

