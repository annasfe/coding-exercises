
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')

const users = []


//this is only used cause we are not using a DB for now and we do the checks on the array users
initializePassport(		
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

router.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
  })
  
  router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
  })
  
  router.post('/login', checkNotAuthenticated, (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next);
  });
  
  router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
  })
  
  router.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
    //TODO: ADD CHECK IF USER EXISTS!
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
      res.redirect('/login')
    } catch(err) {
      res.redirect('/register')
    }
  })
  
  router.delete('/logout', (req, res) => {
    req.logOut()        //also passport function
    res.redirect('/login')
  })

  
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

