let mongoose = require('mongoose');

const Schema = mongoose.Schema;


 const BasicSchema = new Schema({
    firstName: {
        type: String,
        required: 'Type you Name'
    },
    lastName: {
        type: String,
        required: 'Type you Last Name'
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