const os = require('os')
const cluster = require('cluster')

//Тип операционной системы 
//Possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'
console.log(os.platform())

//Архитектура процессора
console.log(os.arch())

//Разрядность и количество ядер
console.log(os.cpus())

//Kоличество ядер
console.log(os.cpus().length)
const cpus = os.cpus()

//проверка текущий процесс главный?
if (cluster.isMaster) {
    for (let i = 0; i < cpus.length - 2; i++) {
        //запуск дочернего процесса для каждого ядра
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`Process with pid = ${worker.process.pid} has been killed`)
        cluster.fork()
    })
} else {
    console.log(`Process with pid = ${process.pid} has been launched`)
    setInterval(() => {
        console.log(`Process with pid = ${process.pid} is working yet`)
    }, 5000)
}


// for (let i = 0; i < cpus.length - 2; i++) { 
//     const CPUcore = cpus[i];
//     console.log('Запустить еще один node JS процесс')
// }