require('dotenv').config()
const express = require('express')
const app = express()
const passport = require('passport')
const methodOverride = require('method-override')
const flash = require('express-flash')
const session = require('express-session')
const authRoutes = require('./routes/authRoutes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const MongoStore = require('connect-mongo');


dotenv.config();

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use(flash())
app.use(session({
  secret: "your secret line of secretness", //key we use for encryption, store in .env
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000 }, //1hour
  store: MongoStore.create({		// this stores sessionIDs in the db, in collection sessions
    mongoUrl: process.env.DB_SERVER,
    collection: "sessions",
  })
}))


app.use(passport.initialize())
app.use(passport.session()) //this works together with the session config (line17), that is the express-session
app.use(methodOverride('_method'))

app.use(express.static("public"));

app.use('/', authRoutes)

mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true})
    .then(() => {
        console.log('Database connection successful')
        app.listen(process.env.PORT, "localhost", (err) =>{
            if(err) console.log("Server could not be started" + err.message);
            else console.log(`Server listening at port ${process.env.PORT}....`)
        })
    })
    .catch(err => {
        console.error(err.message)
    });
