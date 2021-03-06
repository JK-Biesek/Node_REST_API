let objContact = require('../model/model');


const addNewEntry = (req, res) => {
    let newContact = new objContact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
};

const getEntry = (req, res) => {
    objContact.find({}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
};

const findById = (req, res) => {
    objContact.findById(req.params.ID, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
};
const updateEntry = (req, res) => {
    objContact.findOneAndUpdate({ _id: req.params.ID }, req.body, { new: true }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
};
const deleteEntry = (req, res) => {
    objContact.findOneAndRemove({ _id: req.params.ID }, req.body, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Entry deleted sucessfully',
            Username: 'User Name Deleted : ' + req.body.firstName
        });
        }
    });
};

module.exports = { addNewEntry, getEntry, findById, updateEntry, deleteEntry };