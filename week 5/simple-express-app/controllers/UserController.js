const userModel = require("../models/userModel");


async function getUsers(req, res) {

    const user = await userModel.find();
    console.log(user);   
    res.json(user);

}

async function getOneUser(req, res) {

    const user = await userModel.findOne({name: req.params.name});
    user.name = "Noah";
    await user.save();
    
    console.log("Modified user: " + user);   
    res.json(user);

}


async function createUser(req, res) {

    const user = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    console.log(user);
    res.json(user);

}


async function deleteUser(req, res) {
    const user = await userModel.deleteOne({name: req.params.name});
    console.log(user);

    res.json({message: "User deleted!"});

}



module.exports = {getUsers, deleteUser, createUser, getOneUser}