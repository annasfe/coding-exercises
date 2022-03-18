
/** 5. Write a function that accepts language as a parameter and prints a greeting in this language. You can handle as few or as many languages as you want - just make sure to always print a greeting.
 * 
 * Example:
 * input: 'English', output: 'Hello!'
*/


//the conditional way

function greetMeSwitch (choice, inputObj) {
  choice = choice.toLowerCase();
  switch(choice){
    case "english":
      console.log("Hello");
      break;
    case "spanish":
      console.log("Hola");
      break;
    case "greek":
      console.log("Kalimera");
      break;
    default:
      console.log("Hello World");

  }

}


//the passing object as argument and calling a function from function way


function greetMe(language, object) {

  let lowerCase = language.toLowerCase()

  if(object.hasOwnProperty(lowerCase)) {
    console.log(object[lowerCase]);
  } else {
    object[language] = getUserInput(language);
    console.log(object[language]);
  }
}


function getUserInput(language) {
  console.log(`what is the greeting of language ${language}?`);
  let greeting = "bonjour";
  return greeting;

}




let greetingsObject = {
  english: "Hello",
  spanish: "Hola",
  greek: "Kalimera"
}


greetMeSwitch("greek", greetingsObject);
greetMeSwitch("Spanish", greetingsObject);
greetMeSwitch("french", greetingsObject);

greetMe("greek", greetingsObject);
greetMe("Spanish", greetingsObject);
greetMe("french", greetingsObject);