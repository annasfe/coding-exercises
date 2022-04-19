const router = require('express').Router();
const routesController = require('../controllers/routeController')

router.get('/', routesController.getIndex)

router.get('/:id', routesController.getUserById)

router.post('/', routesController.processPost)

module.exports = router;