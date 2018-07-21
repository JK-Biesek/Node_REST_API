let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

import { UserSchema } from '../model/user';

const User = mongoose.model('User', UserSchema);

export const register = (req, res) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

    newUser.save((err, data) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            suer.hashPassword = undefined;
            return res.json(data);
        }
    });
}

export const login = (req, res) => {

}

export const loginReq = (req, res) => {

}