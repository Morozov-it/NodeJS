const fs = require('fs')
const path = require('path')


// в синхронном режиме с блокировкой выполнения последующего кода выполняются методы Sync
//fs.mkdirSync(path.resolve(__dirname, 'dir')) //создать папку dir в текущей директории
//fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), { recursive: true }) //создать иерархию папок в текущей директории


// в асинхронном режиме через вызовы callback:

// CREATING FOLDER
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('Folder was created')
// })

// DELETING FOLDER
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Folder was deleted')
// })

//ADDING DATA INTO FILE
// fs.writeFile(path.resolve(__dirname, 'dir', 'file.js'), "const str = 'string data';", (err) => {
//     if (err) throw err;
//     console.log('File has been created')
// })

//EDITING DATA INTO FILE
// fs.appendFile(path.resolve(__dirname, 'dir', 'file.js'), "const append = 'append data';", (err) => {
//     if (err) throw err;
//     console.log('File has been updated')
// })





//Promises
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path,data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve('success')
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve('update')
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve('delete')
    }))
}


//Пример реализации через промисы
const myPath = path.resolve(__dirname, 'file.txt')

// writeFileAsync(myPath, 'data: ')
//     .then((data) => {
//         console.log(data)
//         return appendFileAsync(myPath, '123')
//     })
//     .then((data) => {
//         console.log(data)
//         return appendFileAsync(myPath, '456')
//     })
//     .then((data) => {
//         console.log(data)
//         return appendFileAsync(myPath, '578')
//     })
//     .then((data) => {
//         console.log(data)
//         return readFileAsync(myPath)
//     })
//     .then(data => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(()=> console.log('finish'))

// removeFileAsync(myPath)
//     .then(data=> console.log(data))


//Задача
const text = process.env.TEXT || '';
writeFileAsync(myPath, text)
    .then(() => readFileAsync(myPath))
    .then((data) => data.split(' ').length)
    .then((count) => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Count of numbers: ${count}`))
    .then(() => removeFileAsync(myPath))
    .catch(err => console.log(err))
    .finally(()=>console.log('finally'))