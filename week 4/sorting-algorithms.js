//https://www.section.io/engineering-education/sorting-algorithms-in-js/#selection-sort

const array = [2,5,3,7,9,10, 1, 0]


function selectionSort(arr) {
    let min;
    //start passes.
    for (let i = 0; i < arr.length; i++) {
      //index of the smallest element to be the ith element.
      min = i; 
      //Check through the rest of the array for a lesser element
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      //compare the indexes (if min is not myself then swap)
      if (min !== i) {
        //swap
        [arr[i], arr[min]] = [arr[min], arr[i]]; //<---- useful trick for quick swapping!
      }
    }
    console.log(arr);
    return arr;
  }
  

selectionSort(array);




function bubbleSort(arr){

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length -1 - i ; j++){	//each time you use a smaller array, end positions are filled and in order so omit

           //Compare element with previous
            if(arr[j + 1] < arr[j]){	

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(bubbleSort([5,3,8,4,6]));



function insertionSort(arr){
    //Start from the second element, we start with considering first as "sorted"
    for(let i = 1; i < arr.length;i++){

        //Go through the elements behind it, so check with the sorted part of array (first/front part).
        for(let j = i - 1; j > -1; j--){
            
            //compare against previous element.
            if(arr[j + 1] < arr[j]){

                //swap
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

            }
        }
    };

  return arr;
}

console.log(insertionSort([23, 1, 10, 5, 2]));

