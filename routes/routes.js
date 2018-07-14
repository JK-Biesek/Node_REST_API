import { addNewEntry, getEntry, findById, updateEntry, deleteEntry } from '../controllers/baseController';
const routes = function (app) {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        }, getEntry)
        .post(addNewEntry);

    app.route('/contact/:ID')
    .get(findById)
        .put((req, res, next) => {
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        }, updateEntry)
        .delete((req,res,next)=>{
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        },deleteEntry);

}
export default routes;