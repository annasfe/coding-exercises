function onClick() {

    console.log(mapWith([5, 22, 30, 0], addOne));
    console.log(mapWith(["lisa", "adriana", "vivi"], addS));

}

function mapWith(array, callback) {
    forEach(array, callback);
  return array;
}

function forEach(array, callback) {
    for (let i of array) {
      callback(i);    
    }
}

function addOne(num) {
    return num + 1;  
}

function addS(str){
  return str + "s";
}


var button = document.querySelector('button');
button.addEventListener('click', onClick);
