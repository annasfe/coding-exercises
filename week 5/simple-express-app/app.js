const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');


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



