const express = require('express')
const app = express();
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const mongoose = require('mongoose')


dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', routes)

mongoose.connect(process.env.DB_SERVER)
.then(()=> console.log("Connected to DB server"))
.catch((err) => console.log(err));


app.listen(process.env.PORT, "localhost", (err) =>{
    if(err) console.log("Server could not be started" + err);
    else console.log(`Server listening at port ${process.env.PORT}....`)
})


