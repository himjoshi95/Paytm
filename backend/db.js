const mongoose = require('mongoose')
const { config } = require('dotenv')
config()

const url = process.env.URL
mongoose.connect(url)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength:30
    },
    firstName: {
        type: String,
        require: true,
        trim: true,
        maxLength:50
    },
    lastName: {
        type: String,
        require: true,
        trim: true,
        maxLength:50
    },
    password: {
        type: String,
        require: true,
        minLength:3
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}