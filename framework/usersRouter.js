const router = require('./Router')
const UserController = require('./userController')


router.get('/users', UserController.getAll.bind(UserController))
//router.get('/users/:id', UserController.getOne.bind(UserController))
router.post('/users', UserController.add.bind(UserController))


module.exports = router.endpoints