// PATH-------------------------------------------------------------------------------------------------
const path = require('path')

// join() склеивает пути на разных ОС необходимым образом, на выходе СТРОКА
//const join = path.join('first', 'second')
//const join = path.join(__dirname, 'first')
//const join = path.join(__dirname, '..')
//const join = path.join(__filename)
//console.log(join)

// resolve() добавляет строки к абсолютному пути директории, dirname можно не указывать, особое внимание на '/'
//const resolve = path.resolve('first', 'second')
const resolve = path.resolve(__dirname, 'first', 'second', 'file.js')
//console.log(resolve)

// parse() парсинг пути на составные его части
//const parsePath = path.parse(resolve)
//console.log(parsePath)
// {
//     root: 'd:\\',
//     dir: 'd:\\repos\\NodeJS\\first\\second',
//     base: 'file.js',
//     ext: '.js',
//     name: 'file'
// }

console.log('разделитель с ОС', path.sep) 
console.log('проверка на абсолютный путь', path.isAbsolute(resolve)) //boolean
console.log('название файла', path.basename(resolve)) 
console.log('расширение файла', path.extname(resolve)) 


// URL-------------------------------------------------------------------------------------------------
const { URL } = require('url')



const siteURL = 'http://localhost:8080/users?id=123'

const url = new URL
