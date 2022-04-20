const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const initialize = require('../config/passport-conf')
const passport = require('passport')


initialize(passport);


const login = (req, res) => {
    res.render('login.ejs')
}

const getIndex = (req, res) => {
    res.render('index.ejs', {user: req.user})
}

const getFavorites = (req, res) => {
    res.render('favorites.ejs', {user: req.user})
}

const addFavorite = async (req, res) => {
    const user = await User.findOne({id: req.user.id})
    user.favorites.push(req.body.fav_movie)
    await user.save();
    res.redirect('/favorites')
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
            password: hashedPassword,
            favorites: req.body.fav_movie
        })

        //res.send(`Data received ${name}`)
        res.redirect('/')

    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {getIndex, getFavorites, addFavorite, login, checkUser, createUser, register}