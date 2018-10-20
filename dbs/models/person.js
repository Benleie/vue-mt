
const mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost:27017/dbs', {
    useNewUrlParser: true
});

let personSchema = mongoose.Schema({
    name: String,
    age: Number
})

module.exports =  mongoose.model('Person', personSchema)