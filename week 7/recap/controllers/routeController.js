const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const initialize = require('../config/passport-conf')
const passport = require('passport')

const login = async (req, res) => {
    res.render('login.ejs')
}

initialize(passport);

const getIndex = async (req, res) => {
    res.render('index.ejs', {name: req.user.name, id: req.user.id})
}

const checkUser = async (req, res) => {
    passport.authenticate('local',{
        successRedirect: '/index',
        failureRedirect: '/login'
    })(req, res);
}

const register = async (req, res) => {
    res.render('register.ejs')
}

const createUser = async (req, res) => {
    try {
        const name = req.body.name;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword        })

        //res.send(`Data received ${name}`)
        res.redirect('/')

    } catch (err) {
        console.log(err.message)
    }
}



module.exports = {getIndex, login, checkUser, createUser, register}