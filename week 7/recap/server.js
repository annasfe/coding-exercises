const express = require('express')
const app = express();
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const passport = require('passport')
const session = require('express-session')

dotenv.config();

app.set('view-engine', 'ejs')
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 } //1hour
    // store: MongoStore.create({
    //   mongoUrl: process.env.DB_SERVER,
    //   collection: "sessions",
    // })
  }))

app.use(passport.initialize())
app.use(passport.session())



app.use('/', routes)

mongoose.connect(process.env.DB_SERVER)
.then(()=> console.log("Connected to DB server"))
.catch((err) => console.log(err));


app.listen(process.env.PORT, "localhost", (err) =>{
    if(err) console.log("Server could not be started" + err);
    else console.log(`Server listening at port ${process.env.PORT}....`)
})


