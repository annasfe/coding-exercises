
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')

const users = []


//this is only used cause we are not using a DB for now and we do the checks on the array users
initializePassport(		
)

router.get('/', (req, res) => {
    res.render('index.ejs', { name: req.user.name })
  })
  
  router.get('/login', (req, res) => {
    res.render('login.ejs')
  })
  
  router.post('/login', (req, res) => {
  	//authenticate and redirect if true to index
      res.redirect('/')
  })
  
  router.get('/register', (req, res) => {
    res.render('register.ejs')
  })
  
  router.post('/register', async (req, res) => {
    // register and redirect to login
      res.redirect('/login')
  })
  
  router.delete('/logout', (req, res) => {
	//logout and redirect to login
    res.redirect('/login')
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

