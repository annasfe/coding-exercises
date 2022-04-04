const pokemon = require('pokemon');
const fs = require('fs');

const fileName = 'ids_pokemon.txt';

try{
    //read the file synchronously
    let data = fs.readFileSync(fileName, 'UTF-8');
    //process the data (content split by new line)
    let ids = data.split(/\r?\n/);

    //Get the corresponding pokemon name by id
    ids.forEach((id) => {
        try {
            //print pokemon names
            console.log(pokemon.getName(id));
        } catch (err) {
            console.log(err)
        }
    });
} catch (err){
    console.log(`${err} when trying to read the file: ${fileName}`);
}
