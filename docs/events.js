const EventEmitter = require('events')
require('dotenv').config()

const emitter = new EventEmitter()

const callback = (data, second, third) => {
    console.log('message: ', data)
    console.log('second argument: ', second)
    console.log('third argument: ', third)
}
//создание своего события, колбэк отрабатывает когда это событие вызвали
//on можно вызывать неограниченное количество раз
emitter.on('message', callback)

emitter.once() //отработает един раз

emitter.removeAllListeners() //удаляет все слушатели
emitter.removeListener('message', callback) //удаляет конкретного слушателя


const MESSAGE = process.env.MESSAGE || '';


if (MESSAGE) {
    //функция для генерации события с уникальным именем, после имени передаются аргументы в колбэк
    emitter.emit('message', MESSAGE, 'second', 3)
} else {
    emitter.emit('message', 'you have not typed a message')
}

console.log(MESSAGE)