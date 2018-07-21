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
    User.findOne({
        email: req.body.email
    }, (err, data) => {
        if (err) {
            res.send(err);
        } else if (!data) {
            res.status(401).json({
                message: 'No user found'
            });
        } else if (data) {
            if (!user.comparePassword(req.body.password, data.hashPassword)) {
                res.status(401).json({
                    message: 'Wrong Password ! '
                });
            } else {
                return res.json({ token: jwt.sign({ email: data.email, userName: data.userName, _id: user.ID }, 'Secure REST api') })
            }
        }
    });
}

export const loginReq = (req, res) => {

}