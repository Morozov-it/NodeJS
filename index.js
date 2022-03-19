require('dotenv').config()
const PORT = process.env.PORT || 5000;
const baseURL = process.env.BASE_URL + PORT;

const users = require('./framework/usersRouter')
const posts = require('./framework/postsRouter')
const { sendJson, parseURL } = require('./framework/middlewares')
const app = require('./framework/App')



const router = { endpoints: { ...users, ...posts } }

app.use(parseURL(baseURL))
app.use(sendJson)
app.addRouter(router)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    }
)

