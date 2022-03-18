
//1. FUNCTION DECLARATION

function arrayPush(){
    var arra = []; 
  for (var i = 0; i < 2003000; i++) {
    arra.push(i * i + i); 
  }

} 

//2. FUNCTION EXPRESSION

let arrayPush = function(){
    var arra = []; 
    for (var i = 0; i < 2003000; i++) {
      arra.push(i * i + i); 
    }  
}

//3. ARROW FUNCTION

let arrayPush = () => { let x = 1+2; console.log(x); }


//4. IIFE (Anonymous, immediately invoked function)

(function() 
  var arra = []; 
  for (var i = 0; i < 2003000; i++) {
    arra.push(i * i + i); 
  }
})();


