const express = require('express');
const crazyObject = require('./quotes');

const app = express();

app.use(express.json())

//server params
const hostname = 'localhost';
const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.send(crazyObject.crazyString);
    //res.status(200).send('Success!');
    //res.status(404).send('Not found!');
});

app.get('/hello/:id', (req, res) => {
    res.send('Hello ' + req.params.id);
});

app.post('/form', (req, res) => {
    console.log(req.body) 
    res.send('Data received, thanks!');
});


app.listen(port, hostname, (error) => {
    if(error) {
        console.log("Something went wrong", error)
    } else {
        console.log(`Server running at http://${hostname}:${port}/`);
    }
});
