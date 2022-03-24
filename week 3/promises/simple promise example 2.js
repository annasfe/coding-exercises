// 1. Create a Promise to fetch the water
let promise = new Promise(function (resolve, reject) {
    // Pretend a delay of 2 sec to fetch it!
    let water = false;
    setTimeout(function () {
      if(water)  
      // Fetched the water. Let's resolve the promise
        resolve("Hurray! Fetched the Water.");
      else
        reject("No water!")
    }, 2000);
  });
  
      // The handler function to handle the resolved promise
      promise.then(function (result) {
        // Fetched the water. Now we can start the cooking
        console.log(`cooking rice with the ${result}`);
      })
      .catch(function (reject) {
        // No cooking, show problem
        console.log(`Can't cook! What happened? ${reject}`);
      });
  