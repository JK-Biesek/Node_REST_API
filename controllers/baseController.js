import mongoose from 'mongoose';
import { BasicSchema } from '../model/model';

const objContact = mongoose.model('Contact', BasicSchema);

export const addNewEntry = (req,res) => {
    let newContact = new objContact(req.body); 
    newContact.save((err,contact)=>{
        if(err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
};

export const getEntry = (req,res)=>{
    objContact.find({},(err,data)=>{
        if(err){
            res.send(err);
        } else {
            res.json(data);
        }
    });
};
