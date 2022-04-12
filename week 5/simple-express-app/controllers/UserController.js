const userModel = require("../models/userModel");


async function getUsers(req, res) {

    const user2 = await userModel.find();
    console.log(user2);   
    res.json(user2);

}

async function getOneUser(req, res) {

    const user2 = await userModel.find({name: req.params.name}); 
    console.log(user2);   
    res.json(user2);

}


async function createUser(req, res) {

    const user1 = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    console.log(user1);
    res.json(user1);

}


function deleteUser(req, res) {
    res.send("user deleted!")

}



module.exports = {getUsers, deleteUser, createUser, getOneUser}