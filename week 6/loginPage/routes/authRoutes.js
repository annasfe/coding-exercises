
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')

const users = []    //users fake database
console.log(users);

//function initialize(passport, getUserByEmail, getUserById) {

function getUserByEmail(email) {
  return users.find((item) => item.email === email);
}
function getUserById(id) {
  return users.find((item) => item.id === id);
}

//this is only used cause we are not using a DB for now and we do the checks on the array users that is here
 initializePassport(passport, getUserByEmail, getUserById)

  router.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name})
  })
  
  router.get('/login', (req, res) => {
    res.render('login.ejs')
  })
  
  router.post('/login', passport.authenticate("local", {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true 
    })
  )
  
  router.get('/register', (req, res) => {
    res.render('register.ejs')
  })
  
  router.post('/register', async (req, res) => {
    // register and redirect to login
    //TODO: check if email already exists!!

     const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = {
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      }

      users.push(user);   //Users.create({}) if you use db
      console.log(users);
      res.redirect('/login')
  })
  
  router.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
  })

  
  //helper middleware
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {    //a passport function
      return next()
    }
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }


  module.exports = router;

