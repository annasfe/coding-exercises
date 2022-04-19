const User = require('../models/userModel')


const getIndex = (req, res) => {
    res.send("Hello world")
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({id: id});

    res.send(`Hello ${user.email}`)
}

const processPost = async (req, res) => {
    const name = req.body.name;
    await User.create({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password
    })

    res.send(`Data received ${name}`)
}

module.exports = {getIndex, getUserById, processPost}