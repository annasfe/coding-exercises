function sayHello(name = "stranger") {
  return "Hi," + " " + name;
    }
  console.log(sayHello());
  console.log(sayHello("Anna"));
  
  function wereAwesome(you, yourBuddy) {
    //console.log(`${yourBuddy} and ${you} are awesome!`);
    console.log(yourBuddy + " and " + you + " are awesome");
  }
  wereAwesome("Dave", "Will");
  


  //ML solution
  function lastLetterML(word) {
      wordArray = word.split('');
      //console.log(wordArray)
      lastIndex = Number(wordArray.length-1);
      //console.log(lastIndex);
      return wordArray[lastIndex];
  }
  
  console.log(lastLetterML("")); //=> "!"
  
  
  //Liz:
  function lastLetterL(word) {
    const num = word.length - 1;
    return word[num];
  }
  console.log(lastLetterL("")); //=> "!"
  
  
  //Adriana
  function lastLetterA(word) {
  return word.slice(-1);
  }
  
  console.log(lastLetterA("")); //=> "!"
  
  //Anna
  function lastLetter(word) {
      return (word.length ? word[word.length-1] : "Empty string given!");
  }
  
  
// Uncomment the lines below to test your code
 console.log(lastLetter("hello")); //=> "o"
 console.log(lastLetter("goodbye!")); //=> "!"
 console.log(lastLetter("ZeltoiD")); //=> "D"
 console.log(lastLetter("I love Javascript")); //=> "t"
 console.log(lastLetter("")); //=> ???
