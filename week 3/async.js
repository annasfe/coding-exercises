// # Asynchronicity
 // ### Challenge 5

// Create a function `limitedRepeat` that console logs `hi for now` every second, but only for 5 seconds. Research how to use `clearInterval` if you are not sure how to do this. 
  /* CHALLENGE 5 */
  
//   function limitedRepeat() {
//         let i=0;
//         setInterval(function(){
//             console.log("Hi again");
//             i++;
//             if(i==5) clearInterval(this);
//     }, 1000);
//     }

// limitedRepeat()



// ### Challenge 6

// Write a function called `everyXsecsForYsecs` that will accept three arguments: a function `func`, a number `interval`, and another number `duration`.
// `everyXsecsForYsecs` will execute the given function every `interval` number of milliseconds, but then automatically stop after `duration` milliseconds.
// What do you expect to happen?
  /* CHALLENGE 6 */
  
//   function everyXsecsForYsecs(func, interval, duration) {
//     let i=0;    
//     setInterval(function(){
//             func();
//             i++;
//             if(i < Math.ceil(duration/interval))
//                 clearInterval(this);
//         }, interval);
//     }
//   // Uncomment the following lines to check your work!
//   function theEnd() {
//     console.log('This is the end!');
//   }
//   everyXsecsForYsecs(theEnd, 2000, 20000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
function everyXsecsForYsecs(func, interval, duration) {

  const intervalId = setInterval(func, interval);
  setTimeout(function(){
      clearInterval(intervalId);
 }, duration)
}




// ### Challenge 7

// Write a function `delayCounter` that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.
// When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
  
  /* CHALLENGE 7 */

//   function delayCounter(target, wait) {
//         let i=0;
//         return function() {
//             setInterval(function(){
//                 i++;
//                 console.log(i);
//                 if(i == target)
//                     clearInterval(this);
//             }, wait);
//         }
// }

// // UNCOMMENT THESE TO TEST YOUR WORK!
//  const countLogger = delayCounter(3, 1000)
//  countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3




// ### Challenge 8

// Write a function, `promised`, that takes in a value. This function will return a promise that will resolve after 2 seconds.
 /* CHALLENGE 8 */
  
 function promised (val) {
     let promise = new Promise((resolve, reject) => {
         setTimeout(() => resolve(val), 2000)
     });
     return promise;
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
   const createPromise = promised('wait for it...');
   createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds





// ### Challenge 9

// Write a function called `debounce` that accepts a function and returns a new function that only allows invocation of the given function after `interval` milliseconds have passed since the last time the returned function ran.

// Additional calls to the returned function within the `interval` time should not be invoked or queued, but the timer should still get reset.

// **For examples of debouncing**, check out https://css-tricks.com/debouncing-throttling-explained-examples/

  
  /* CHALLENGE 9 */
  
  function debounce(callback, interval) {
    // ADD CODE HERE
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // function giveHi() { return 'hi'; }
  // const giveHiSometimes = debounce(giveHi, 3000);
  // console.log(giveHiSometimes()); // -> 'hi'
  // setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
  
  