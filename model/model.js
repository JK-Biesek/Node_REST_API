let mongoose = require('mongoose');

const Schema = mongoose.Schema;


 const BasicSchema = new Schema({
    firstName: {
        type: String,
        required: 'Type your Name'
    },
    lastName: {
        type: String,
        required: 'Type your Last Name'
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', BasicSchema);