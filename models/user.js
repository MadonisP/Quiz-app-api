const mongoose = require('mongoose')
 
const UserSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true 
    },
    password:{
        type: String,
        required: true,
    },
})
 
module.exports = mongoose.model('users', UserSchema)