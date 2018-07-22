let data = require('../controllers/baseController');
let users = require('../controllers/userController');
const routes = function (app) {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        }, users.loginReq, data.getEntry)
        .post(users.loginReq, data.addNewEntry);

    app.route('/contact/:ID')
        .get(users.loginReq, data.findById)
        .put((req, res, next) => {
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        }, users.loginReq, data.updateEntry)
        .delete((req, res, next) => {
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        }, users.loginReq, data.deleteEntry);

        app.route('/auth/register')
        .post(users.register);

        app.route('/auth/login')
        .post(users.login);
}
module.exports = routes;