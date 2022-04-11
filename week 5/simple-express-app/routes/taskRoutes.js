//const router = require('express').Router();
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')


router.get('/', TaskController.getTasks)
router.get('/:id', TaskController.getTaskById)
router.post('/', TaskController.createTask)


module.exports = router;