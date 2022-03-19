const router = require('./Router')

const posts = [
    { id: 1, title: "it's post #1" },
    { id: 2, title: "it's post #2" },
    { id: 3, title: "it's post #3" },
]


router.get('/posts', (req, res) => {
    res.send(posts)
})


module.exports = router.endpoints