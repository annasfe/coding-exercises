const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

const DB_SERVER = "mongodb://localhost:27017"
const database = "simpleUserDB";

mongoose.connect(`${DB_SERVER}/${database}`)
.then(()=> console.log("Connected to DB server"))
.catch((err) => console.log(err));


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile("index.html"));

app.use('/users', userRoutes)


app.listen(port, "localhost", (err) =>{
    if(err) console.log("Server could not be started" + err);
    else console.log("Server listening at port 3000....")
})



