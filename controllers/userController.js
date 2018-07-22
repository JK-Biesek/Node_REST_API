let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

let User = require('../model/user');

 const register = (req, res) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

    newUser.save((err, data) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            data.hashPassword = undefined;
            return res.json(data);
        }
    });
}

 const login = (req, res) => {
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
            if (!data.comparePassword(req.body.password, data.hashPassword)) {
                res.status(401).json({
                    message: 'Wrong Password ! '
                });
            } else {
                return res.json({ token: jwt.sign({ email: data.email, userName: data.userName, _id: data.ID }, 'RESTFUL-api') })
            }
        }
    });
}

 const loginReq = (req, res, next) => {
    if(req.User) {
        next();
    } else{
        return res.status(401).json({ message: 'Unauthorized User !'});
    }
}
module.exports = {register, login, loginReq}