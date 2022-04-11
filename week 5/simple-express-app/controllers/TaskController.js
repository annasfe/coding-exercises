const fs = require('fs');
const path = require('path');


function getTasks (req, res) {
    
    const taskDatabaseJSON = fs.readFileSync(path.join(__dirname,'../public/storage.json'));
    const taskJson = JSON.parse(taskDatabaseJSON) // convert in JSON format
    const params = {
        name: "Anna",
        length: taskJson.length
    }
    res.render('index', params)
    
}


function getTaskById(req, res) {
    
    const taskDatabaseJSON = fs.readFileSync(path.join(__dirname,'../public/storage.json'));
    const taskJson = JSON.parse(taskDatabaseJSON) // convert in JSON format
    const task = taskJson.filter(element => element.id === parseInt(req.params.id));

    res.send(task);
}


function createTask(req, res) {
    let newTask = {id: Date.now(), description: req.body.newtask};
    tasks.push(newTask);

    const taskDatabaseJSON = fs.readFileSync(path.join(__dirname,'../public/storage.json'));
    const taskJson = JSON.parse(taskDatabaseJSON) // convert in JSON format
    taskJson.push(newTask);
    fs.appendFile(path.join(__dirname,'../public/storage.json'), JSON.stringify(taskJson, null, 2), function (err) {
        if (err) {
          return console.log(err);
        }
        return console.log('The data was appended to file!')
      })

    res.redirect('/')

}


module.exports = {createTask, getTaskById, getTasks}