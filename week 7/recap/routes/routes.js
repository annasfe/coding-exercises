const router = require('express').Router();
const routesController = require('../controllers/routeController')

router.get('/index', isLoggedIn, routesController.getIndex)

router.get('/', isNotLoggedIn, routesController.login)
router.post('/', isNotLoggedIn, routesController.checkUser)
router.get('/register', isNotLoggedIn, routesController.register)
router.post('/register', isNotLoggedIn, routesController.createUser)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {    //a passport function
      return next()
    }
    res.redirect('/')
  }
  
  function isNotLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/index')
    }
    next()
  }

module.exports = router;