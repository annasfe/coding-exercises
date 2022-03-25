// CHALLENGE 0
//Implement fizzbuz using map!!
//Output array should have the input number, or "Fizz" if number is multiple of 3, "Buzz" if number is multiple of 5, and "FizzBuzz" is multiple of both 3 and 5.

wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  let fizzBuzz = wholes.map((n) => {
	if (n % 3 === 0 && n % 5 === 0) {
	  return "fizzbuzz";
	} else if (n % 3 === 0) {
	  return "fizz";
	} else if (n % 5 === 0) {
	  return "buz";
	}
	return n;
  }, wholes);
  
  console.log(fizzBuzz);




// using reduce method to get maximum of the array.
//v
const maxNum = wholes.reduce(function (result, item) {
	if (item > result) {
		result = item;
	  } 
	  return result;
  }, 0);
  console.log("The max is " + maxNum);


// CHALLENGE 1

var users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
             
             
             
//use map to obtain an array of just first names
// We're going to send out a message to all our users but just need their first name in order to personalize it. We can use .map() to quickly return an array of just their first names.

const soloNames = users.map(function(item) {return item.firstName;});



//use filter to filter out only residents
// We want to send out a message to just the Full Stack Residents, telling them what a wonderful job they're doing. We can use .filter() to return just those users who fit the right role.

let residents = users.filter(item => item.role.includes("Resident"));
//OR
let developers = users.filter(item => item.role === 'Full Stack Resident');



//use reduce to obtain a new single object
//We want to change up the structure of our users so that we can use the users' full name as the key and have their role as the value. Normally, this would take a lot of looping and initializing some variables. However, with reduce we can set an empty object as our starting point (i.e. previous) and do it all in a single go!

let newObject = users.reduce(function(result, item) {
    result[item.firstName+item.lastName] = item.role;
    return result;
}, {}) 




// CHALLENGE 2 - TODO

var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		];

// Use map() to project an array of videos into an array of {id,title} pairs
// Use filter() to get only those with rating > 5.0
// Use reduce() to get all titles into one string separated by commas
