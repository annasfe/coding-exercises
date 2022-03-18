

// // ----------Solutions of exercises maths.js --------------


// /** 1. Write a function that converts a given number to hours and minutes.
//  * Examples:
//  * Input: 71 Output: 1:11
//  * Input: 450 Output: 7:30
// */

let input = 450;
console.log(Math.floor(input/60) + ":" + input%60);


// /** 2. Write a function that tells you if two numbers can be divided evenly, that is: given two integers, a and b, function returns true if a can be divided evenly by b. Returns false otherwise.
// * We assume that a will always be greater than or equal to b.
// * 
// * Examples:
// * divideEvenly(98, 7) ➞ true // 98/7 = 14
// * divideEvenly(85, 4) ➞ false // 85/4 = 21.25
// */

let input1 = 85;
let input2 = 4;
console.log(!Boolean(input1%input2))


// /** 3. Write a for loop which iterates the integers from 1 to 100 and prints them. However, for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". */

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}


// /** 4. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. */

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);



// /** 5. Write a function to get a random element from a given array.
//  */


function getRandom(input) {

    let arrayLength = input.length;
    let myRandomNumber = Math.floor(Math.random()*arrayLength);  //0 to 5

    return input[myRandomNumber];
}

const myArray = ["item1", "item2", "item3", "item4", "item5", "item6"]
console.log(getRandom(myArray))

