function linearSearch(min, max, searched) {

    let guess = min;
    while(guess<=max) {
        console.log("My guess is ", guess);
        if(guess===searched) return true;
        else guess++;
    }
    return false;
}


//console.log(linearSearch(1, 10, 2));



function binarySearch(min, max, searched) {

while(min<=max) {
    let mid = Math.floor(((min+max)/2));

    if(mid === searched) 
        return console.log("found it!")

    if(mid>searched) {
        console.log("lower");
        max=mid-1;
        console.log(`Now checking from ${min} to ${max}`)
    } else {
        console.log("higher");
        min=mid+1;
        console.log(`Now checking from ${min} to ${max}`)
    }
}
return console.log("Not found!")

}

binarySearch(1, 6000, 10);


// function binarySearch (array, searched){
//     let min = array[0];
//     let max = array[array.length-1];
//     while(min<=max){
//         let mid = Math.floor((min+max)/2)
//         console.log("My guess: "+mid)
    
//         if (mid<searched){
//             min = mid+1
//             console.log("Higher! Now searching from "+ min + " to " + max)
//         } else if (mid>searched){
//             max = mid -1;
//             console.log("Lower! Now searching from "+ min + " to " + max)
//         } else {
//             console.log("Found it! " + mid)
//             return mid

//         }
//     } 
//     return console.log("Not found!");  
// }

//binarySearch([1,2,3,4,5,6,7], 8);
