const router = require('./Router')
const UserController = require('./userController')


router.get('/users', UserController.getAll)

router.post('/users', UserController.add)


module.exports = router.endpoints