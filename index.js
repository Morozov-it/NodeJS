const router = require('./framework/Router')
const app = require('./framework/App')
const PORT = process.env.PORT || 5000;

router.get('/users', (req, res) => {
    res.end('You send request to /users')
})
router.get('/posts', (req, res) => {
    res.end('You send request to /posts')
})

app.addRouter(router)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    }
)

