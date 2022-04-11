const fs = require('fs');


function getUsers(req, res) {

    const taskDatabaseJSON = fs.readFileSync(path.join(__dirname,'../public/storage.json'));
    const taskJson = JSON.parse(taskDatabaseJSON) // convert in JSON format
    const task = taskJson.filter(element => element.id === parseInt(req.params.id));
    res.render('contact')

}

function deleteUser(req, res) {
    res.send("user deleted!")

}

function createUser(req, res) {
    //logic of delete
}


module.exports = {getUsers, deleteUser, createUser}