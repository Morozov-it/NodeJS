const mongoose = require('mongoose')

//создание схемы данных
const userSchema = new mongoose.Schema({
    name: String,
    password: String
});

//на экспорт готовая модель данных
module.exports = mongoose.model('User', userSchema)