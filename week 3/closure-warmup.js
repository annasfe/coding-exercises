// Implement `some` function:
// The some(array, callback) method tests whether at least one element in the array passes the test implemented by the provided callback. It returns true if, in the array, it finds any element for which the callback returns true; otherwise it returns false. It doesn't modify the initial array.
// const isEven = item => item % 2 === 0;
// console.log(some([1, 2, 3, 4, 5], isEven)); // expected output: true
// const hasBiggerThanTen = item => item > 10
// console.log(some([1, 2, 3, 4, 5], hasBiggerThanTen)); // expected output: false

// Ways of doing it: 
// - use for loop
// - use filter function that you already have written 
// - use reduce function

// FOR LOOP
 function some1(somearray, callback) {
     for (let item of somearray) {
         if (callback(item)) return true;
     }
     return false;
 }

// FILTER
 function some2(somearray, callback) {
     return !!somearray.filter(callback).length;
 }


// REDUCE
function some(somearray, callback) {
    return !!somearray.reduce(function(acc, item) {return acc + Number(callback(item))},0);
}



const isEven = item => item % 2 === 0;
console.log(some([1, 2, 3, 4, 5], isEven)); // expected output: true
const hasBiggerThanTen = item => item > 10
console.log(some([1, 2, 3, 4, 5], hasBiggerThanTen)); // expected output: false








