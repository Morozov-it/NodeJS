const http = require('http')
const PORT = process.env.PORT || 5000;
const EventEmitter = require('events')

const emitter = new EventEmitter();

class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method = 'GET', path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        // users {GET, POST, PUT, DELETE }
        const endpoint = this.endpoints[path]

        if (endpoint[method]) {
            throw new Error(`${method} at ${path} is already existed`)
        }
        endpoint[method] = handler
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res)
        })
    }

    get(path, handler) {
        this.request('GET', path, handler)
    }
    post(path, handler) {
        this.request('POST', path, handler)
    }
    put(path, handler) {
        this.request('PUT', path, handler)
    }
    patch(path, handler) {
        this.request('PATCH', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}
const router = new Router()
router.get('/users', (req, res) => {
    res.end('You send request to /users')
})

const server = http.createServer((req, res) => {
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
    if (!emitted) {
        res.statusCode=404
        res.end('URL not found')
    }
})

//запуск слушателя сервера
server.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))

