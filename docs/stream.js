const fs = require('fs')
const path = require('path')


const filePath = path.resolve(__dirname, 'test.txt')
const filePath2 = path.resolve(__dirname, 'test2.txt')

//чтение файла через стандартные методы по работе с файловой системой
// fs.readFile(filePath, (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })


//чтение файла с помощью стримов
//const stream = fs.createReadStream(filePath, { encoding: 'utf-8' })
//const stream = fs.createReadStream(filePath)

//событие data позволяет считывать файл, колбэк в параметр принимает куски data по 64кБ
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

//дополнительные методы
// stream.on('open', () => console.log('Start reading'))
// stream.on('end', () => console.log('Finish reading'))
// stream.on('error', (e) => console.log('Error', e))



//запись в файл с помощью стрима
const stream = fs.createWriteStream(filePath2)

for (let i = 0; i < 20; i++) {
    stream.write(i + '\n')
}

stream.write(chunk, (error) => console.log(error))

//запись всегда нужно останавливать вручную
stream.end('end')
//другие методы остановки записи
stream.close((err) => console.log(err))
stream.destroy(err)


const http = require('http')

//модуль http работает по принципам стримов
http.createServer((req, res) => {
    //req - readable stream
    //req.on('data', ()=>{})
    //res - writable stream
    //res.write(chunk, (err)=>{})

    const reading = fs.createReadStream(path)
    //при таком способе чтение данных с файла закончится раньше чем будет уходить запрос
    // reading.on('data', (chunk) => res.write(chunk))
    // reading.on('end', () => res.end())
    
    //таким способ создается синхронизация между readable & writable streams
    reading.pipe(res)
})