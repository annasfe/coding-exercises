const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')


router.get('/', UserController.getUsers)
router.get('/:name', UserController.getOneUser)
router.delete('/:id', UserController.deleteUser)
router.post('/', UserController.createUser)

module.exports = router;