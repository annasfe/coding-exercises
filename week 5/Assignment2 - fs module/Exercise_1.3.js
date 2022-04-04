const pokemon = require('pokemon');
const fs = require('fs');

const fileName = 'ids_pokemon.txt';
const outputFile = 'names_pokemon.txt';

//read the file 
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.log(`${err} when trying to read the file: ${fileName}`);
        return
    }
    //process the data (content split by new line)
    let ids = data.split(/\r?\n/);
    //Get the corresponding pokemon name by id
    console.log("Processing ....")
    ids.forEach((id) => {
        try {
            //print pokemon names
            fs.appendFile(outputFile, `${pokemon.getName(id)} \n`, (err) => {
                if (err) console.log(err);
            });
        } catch (err) {
            console.log(err)
        }
    })
    console.log("Your file is ready!")
})