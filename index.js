import express from 'express';
import routes from './routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();
const port = 3015;

//add mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NodeAppDb', {
    useMongoClient: true
});

routes(app);

app.get('/', (req, res) => {
    res.send('Server is running at port ' + port);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});