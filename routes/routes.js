let data = require('../controllers/baseController');
const routes = function (app) {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        }, data.getEntry)
        .post(data.addNewEntry);

    app.route('/contact/:ID')
    .get(data.findById)
        .put((req, res, next) => {
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        }, data.updateEntry)
        .delete((req,res,next)=>{
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        },data.deleteEntry);

}
module.exports = routes;