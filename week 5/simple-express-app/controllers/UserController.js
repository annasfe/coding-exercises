const userModel = require("../models/userModel");


async function getUsers(req, res) {

    const user1 = await userModel.create({
        name: "Anna",
        email: "annasfe@gmail.com",
        age: 44
    });
    console.log(user1);
    res.json(user1);

}


function createUser(req, res) {
    //res.send("Here are your users");
    const user = {name: "Anna"}
    res.json(user);
}

function deleteUser(req, res) {
    res.send("user deleted!")

}



module.exports = {getUsers, deleteUser, createUser}