const http = require('http')
require('dotenv').config()
const PORT = process.env.PORT || 5000;


//метод создания сервера
const server = http.createServer((req, res) => {
    //это пример с SSR, разметка генерируется на сервере и на клиент приходит готовая страница
    // res.writeHead(200, {
    //     //'Content-Type': 'text/html; charset=utf-8'
    //     'Content-Type': 'text/html'
    // })
    //res.end('<h1>Hello world</h1>')

    //это пример с REST API
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    if (req.url === '/users') {
        return res.end(JSON.stringify([{name: 'item'},{name: 'titem'},{name: 'body'}]))
    }
    if (req.url === '/posts') {
        return res.end(JSON.stringify('posts'))
    }
})

//запуск слушателя сервера
server.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))

