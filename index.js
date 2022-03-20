require('dotenv').config()
const PORT = process.env.PORT || 5000;
const baseURL = process.env.BASE_URL + PORT;

const mongoose = require('mongoose')
const users = require('./framework/usersRouter')
const posts = require('./framework/postsRouter')
const { sendJson, parseURL } = require('./framework/middlewares')
const app = require('./framework/App')


const uri = 'mongodb+srv://user:user@cluster0.3sdcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const router = { endpoints: { ...users, ...posts } }

app.use(parseURL(baseURL))
app.use(sendJson)
app.addRouter(router)


const start = async () => {
    try { 
        await mongoose.connect(uri)
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
} 
start()
