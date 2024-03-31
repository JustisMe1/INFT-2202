const mongoose = require('mongoose');
const app = require('../app');

console.log(app.username + ':' + app.password + ':' + app.PORT);

mongoose.Promise = global.Promise;
const conn = 'mongodb+srv://'+app.username+':'+app.password+'@cluster0.rtvdwnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(conn);

//declare schema
let Schema = mongoose.Schema;

//UserSchema
let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    friends: [String],
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    }
}, {
    collection: 'users'
})

module.exports.User = mongoose.model('user', userSchema);