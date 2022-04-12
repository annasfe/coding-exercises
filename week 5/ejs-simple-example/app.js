const express = require('express');
const path = require('path')
//server params
const hostname = 'localhost';
const port = process.env.PORT || 3000; 

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

let tasks = ["Test ejs", "...and test my APIs!"]

app.get('/', (req, res) => {
    //res.send('index.html')
    res.render('index', {myVariable: 'Hello world!'});
});

app.get('/tasks/:name', (req, res) => {
    res.render('tasks', {myTasks: tasks, name: req.params.name});
});



app.listen(port, hostname, (error) => {
    if(error) {
        console.log("Something went wrong", error)
    } else {
        console.log(`Server running at http://${hostname}:${port}/`);
    }
});
