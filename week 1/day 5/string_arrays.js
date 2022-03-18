/** 1. Write a function to check whether a given string starts with 'Java'. */

// const str1 = 'Javascript is easy!';

// // EASY WAY
// console.log(str1.startsWith('Java'));

// // OR
function checkString(){

let front = str1.substring(0, 4);
if (front === "Java") 
    return true;

return false;
}


/** 2. Write a function that accepts string as an argument and returns a reversed string.
 * 
 * For example:
 * input: Hello, output: olleH
 * input: coding is fun, output: nuf si gnidoc
 */


function reverseString(str) {

    return str.split("").reverse().join("");;       
}
console.log(reverseString("Hello"));

//OR (the hard way)

function reverseString(str) {
    let newstr = "";

    for(let a=str.length-1; a>=0; a--){
        newstr+=str[a];
    }
    return newstr;
}

console.log(reverseString("Hello"));



/** 3. Write a function that accepts a number and returns this number reversed.
 * Example:
 * Input: 12239, output: 93221
 */

function reverseNumber(somenum) {

    mystring = String(somenum);
    newstring = mystring.split("").reverse().join("");
    return Number(newstring);
}

console.log(reverseNumber(12345));



/** 4. Write a function that accepts a string and returns a string of letters of the passed string sorted in alfabethical order.
 * Example:
 * Input: 'apple' Output: 'aelpp'
*/


function orderLetters (value) {
    console.log(value.split("").sort().join(""));
}

orderLetters("HEllo");

/** 5. Write a function that truncates a string to a specified length.
 * The function will take 2 arguments: a string and a number (desired length).
 * Return the truncated string with '...' appended to the end or the original string, if it wasn't longer than the desired length.
 */




/** 6. Write a function that returns an array of n last elements from a given array.
*  Example:
*  input: [1, 2, 3], 2
*  output: [2,3]
*/