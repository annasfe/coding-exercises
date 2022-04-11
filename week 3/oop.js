
/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/
// Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:

// create an empty object
// add a name property to the newly created object with its value being the 'name' argument passed into the function
// add an age property to the newly created object with its value being the 'age' argument passed into the function
// return the object

function makePerson(name, age) {

    let newobj = {}
    newobj.name = name;
    newobj.age = age;
    return newobj

    //shorter
    //return {name: name, age: age}
}

const vicky = makePerson('Vicky', 24);
console.log(vicky)


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/
// Challenge 1/3
// Inside personStore object, create a property greet where the value is a function that logs "hello".
/*** CHALLENGE 1 of 3 ***/

const personStore = {
  greet: function() {console.log("Hello")}
};

// /********* Uncomment this line to test your work! *********/
 personStore.greet(); // -> Logs 'hello'


/*** CHALLENGE 2 of 3 ***/
// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

function personFromPersonStore(name, age) {
	const newObj = Object.create(personStore)
  newObj.name = name;
  newObj.age = age;
  return newObj;
}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
 console.log(sandra.name); // -> Logs 'Sandra'
 console.log(sandra.age); //-> Logs 26
 sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".

// add code here
personStore.introduce = function() {console.log("Hi, my name is " + this.name)}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'



/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.

function PersonConstructor(name, age) {

  this.greet = function() {console.log("Hello new!")}
  this.name = name;
  this.age = age;

}
//or
PersonConstructor.prototype.newGreet = function() {console.log("Hello again!")}

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'
simon.newGreet();


/*** CHALLENGE 2 of 3 ***/
// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

function personFromConstructor(name, age) {
	// add code here
  const obj = new PersonConstructor(name, age);

  return obj;

}

const mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
 console.log(mike.name); // -> Logs 'Mike'
 console.log(mike.age); //-> Logs 30
 mike.greet(); //-> Logs 'hello'
 mike.newGreet();



/*** CHALLENGE 3 of 3 ***/
// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".



PersonConstructor.prototype.introduce = function() {console.log("Hi, my name is " + this.name)}


mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
// Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.


class PersonClass {
	constructor(name) {
    // add code here
    this.name= name;

	}

  greet() {
    console.log("Hello class " + this.name)
  }
	// add code here

}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass("george");
george.greet(); // -> Logs 'hello'


/*** CHALLENGE 2 of 3 ***/
// Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.


class DeveloperClass extends PersonClass {
	constructor(name) {
    super(name);
	}

  introduce() {
    console.log("Hello World, my name is " + this.name)
  }
}


// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai');
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'
thai.greet();



// /****************************************************************
//                       EXTENSION: SUBCLASSING
// ****************************************************************/

// const userFunctionStore = {
//   sayType: function() {
//     console.log("I am a " + this.type);
//   }
// }

// function userFactory(name, score) {
//   let user = Object.create(userFunctionStore);
//   user.type = "User";
//   user.name = name;
//   user.score = score;
//   return user;
// }

// // const adminFunctionStore /* Put code here */ ;

// function adminFactory(name, score) {
//   // Put code here
// }

// /* Put code here for a method called sharePublicMessage*/

// const adminFromFactory = adminFactory("Eva", 5);

// // /********* Uncomment these lines to test your work! *********/
// // adminFromFactory.sayType() // -> Logs "I am a Admin"
// // adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"


// /****************************************************************
// EXTENSION: MIXINS
// ****************************************************************/

// class Dog {
//   constructor() {
//     this.legs = 4;
//   }
//   speak() {
//     console.log('Woof!');
//   }
// }

// const robotMixin = {
//   skin: 'metal',
//   speak: function() { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
// }

// let robotFido = new Dog();

// Object.assign(Dog.prototype, robotMixin);

// // robotFido = /* Put code here to give Fido robot skills */;

// // /********* Uncomment to test your work! *********/
// robotFido.speak() // -> Logs "I am made of metal"

