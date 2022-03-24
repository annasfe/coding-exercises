


    let checkID = new Promise(function(resolve,reject){
        let hasID = true;

        if(hasID)
            resolve(hasID)
        else
            reject("no ID!")
        
    })


    checkID
        .then((res) => console.log(res))
        .catch((rej) => console.log(rej));


    console.log("Hello, can I come in?")

