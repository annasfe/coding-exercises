
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')
const User = require('../models/users')


initializePassport(passport)

router.get('/', checkAuthenticated, (req, res) => {
    console.log(req.user);
    res.render('index.ejs', { name: req.user.name })
  })
  
  router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
  })
  
  router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true      //using Flash, displays the error messages from passport control
  }))
  
  router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
  })
  
  router.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      });
      res.redirect('/login')
    } catch(err) {
      res.redirect('/register')
    }
  })
  
  router.delete('/logout', (req, res) => {
    req.logOut()        //also passport function
    res.clearCookie("connect.sid", { path: "/" });

    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/login')
    });
    
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

