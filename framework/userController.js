const users = [
    { id: '1', name: 'vasya' },
    { id: '2', name: 'kolya' },
    { id: '3', name: 'sanya' },
]

class UserController {
    constructor(users) {
        this.users = users
    }

    getAll(req, res) {
        const { id } = req.params
        const target = this.users.find((user) => user.id === id)
        if (target) {
            return res.send(target)
        }
        return res.send(this.users)
    }

    // getOne(req, res) {
    //     
    //     return res.send(this.users)
    // }

    add(req, res) {
        const { name } = req.body
        const user = {
            id: Date.now().toString(),
            name
        }
    
        this.users.push(user)
        return res.send(user)
    }
}

module.exports = new UserController(users)