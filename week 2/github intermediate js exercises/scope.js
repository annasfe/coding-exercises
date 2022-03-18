// // 1. What’s the result of executing this code and why.
// function test() {
//    console.log(a);          //undefined
//    console.log(foo());      //2
   
//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test();


// // 2. What is result?
// var a = 1; 

// function someFunction(number) {
//   a = 5;
// }

// console.log(a)          //1 - the function has not been called/executed



// // What will you see in the console for the following example?
// var person = 'Hermione'; 
// function b() { 
//     person =  'Luna'; 
// } 
// b(); 
// console.log(person);            //Luna



// // What's the result?
// let text = 'outside';
// function logIt(){
//     console.log(text);
//     let text = 'inside';
// };
// //logIt();                        //ReferenceError (hoisiting of let, dead zone)


// // What will you see in the console for the following example?
// var person = {name: 'Hermione'}; 
// function b() { 
//     person =  {name: 'Luna'}; 
// } 
// b(); 
// console.log(person);                    //{name: 'Luna'}


// // What will you see in the console for the following example?
// var person = {name: 'Hermione'}; 
// function b() { 
//     person =  {name: 'Luna'}; 
//     return
//     function person(){}             //<-----this function is casted on top, then person = {name: 'Luna'} is 
//                                     //consider to refer to that and reassign an object to that variable
// } 
// b(); 
// console.log(person);                //name: Hermione





// // Will the function be properly run?
// someFunction(); // function call

// function someFunction() { console.log('hi')};           //yes, the functions are casted on top