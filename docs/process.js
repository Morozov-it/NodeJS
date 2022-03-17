console.log(process.pid) //идентификатор процесса, отображается в списке открытых задач

//while (true) {}
//kill 5152 - команда в терминале принудительной остановки процесса с номером id




//console.log(process.env) //переменные окружения
const dotenv = require('dotenv')
dotenv.config() //Loads .env file contents into process.env.
console.log(process.env.PORT)
console.log(process.env.NODE_ENV)




//массив аргументов - переданных команд в скрипт запуска
//console.log(process.argv)
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\repos\\NodeJS\\process.js',
//     'random-command'
// ]

if (Math.random() < 0.5) {
    while(true) {}
} else {
    console.log('Programm is finished')
    process.exit() //метод завершения процесса
}