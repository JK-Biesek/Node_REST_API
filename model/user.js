let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

 const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
UserSchema.methods.comparePassword = (password, hashPassword) =>{
    return bcrypt.compareSync(password, hashPassword);
};
module.exports = mongoose.model('User', UserSchema);