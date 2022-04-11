const express = require('express');
const crazyObject = require('./quotes');
//const static = require('serve-static');
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.static('public'));

//server params
const hostname = 'localhost';
const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
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
