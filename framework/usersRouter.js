const router = require('./Router')

const users = [
    { id: '1', name: 'vasya' },
    { id: '2', name: 'kolya' },
    { id: '3', name: 'sanya' },
]

router.get('/users', (req, res) => {
    const { id } = req.params
    if (id) {
        return res.send(users.find((user) => user.id === id))
    }

    res.send(users)
})

router.post('/users', (req, res) => {
    const { name } = req.body
    const user = {
        id: Date.now(),
        name
    }

    users.push(user)
    res.send(user)
})


module.exports = router.endpoints