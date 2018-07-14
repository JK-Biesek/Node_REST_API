import { addNewEntry,getEntry } from '../controllers/baseController';
const routes = function (app) {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        }, getEntry)
        .post(addNewEntry);

    app.route('/contact/:contactID')
        .put((req, res,next) => {
            console.log(`request from ${req.originalUrl} and type is ${req.method}`);
            next();
        },(req,res) =>{
            res.send(`PUT request done`)
        })
        .delete((req, res) => {
            res.send('Delete request done status ok')
        });

}
export default routes;