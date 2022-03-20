const User = require('./userModel')


class UserController {
    async getAll(req, res) {
        try {
            let users;
            const { id } = req.params
            if (id) {
                users = await User.findById(id)
            } else {
                users = await User.find()
            }
            return res.send(users)
        } catch (e) {
            return res.send(e.message)
        }
    }

    async add(req, res) {
        try {
            const { name, password } = req.body
            const user = await User.create({ name, password })
            return res.send(user)
        } catch (e) {
            return res.send(e.message)
        }
    }
}

module.exports = new UserController()