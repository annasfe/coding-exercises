const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/userModel')


function initialize(passport) {
  const customFields = {
    usernameField: "email",
    passwordField: "password",
  };

  //This is the callback function that goes inside localstrategy setup
  const authenticateUser = async (email, password, done) => {
    const user = await User.findOne({email: email});
    console.log(user);

    if (user == null) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy(customFields, authenticateUser))

  //save user.id in our session
  passport.serializeUser((user, done) => {
    return done(null, user.id)
  })
  passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({id: id});
    return done(null, user)
  })

}

module.exports = initialize;