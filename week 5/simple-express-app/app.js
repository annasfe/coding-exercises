const express = require('express');
const path = require('path');
const logger = require('morgan');
const fs = require('fs');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.get('/', (req, res) => res.send("Hello! Click <a href='/tasks'> here </a>to start"));
app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)


app.listen(port, "localhost", (err) =>{
    if(err) console.log("Server could not be started" + err);
    else console.log("Server listening at port 3000....")
})



