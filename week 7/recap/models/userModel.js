const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 10
    },
    password : {
        type: String,
        required: true
    },
    favorites: [{
        type: String,
    }]
});

module.exports = new mongoose.model("User", UserSchema);