const http = require('http')
const EventEmitter = require('events')

// endpoint =
//         { '/users': {
//                  'GET': handler
//                  'POST': handler 
//                      }
//          }


class App {
    constructor() {
        this.emitter = new EventEmitter()
        this.server = this._createServer()
    }

    //добавление маршрутов
    addRouter(router) {
        Object.keys(router.endpoints).forEach((path) => {
            const endpoint = router.endpoints[path]
            Object.keys(endpoint).forEach((method) => {
                const handler = endpoint[method];
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    handler(req, res)
                })
            })
        })
    }

    //запуск слушателя сервера
    listen(port, callback) {
        this.server.listen(port, callback)
    }

    //создание сервера
    _createServer() {
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res)
            if (!emitted) {
                res.statusCode=404
                res.end('URL not found')
            }
        })
    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`
    }
}

module.exports = new App()