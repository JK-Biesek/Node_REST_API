import express from 'express';
import routes from './routes/routes';

const app = express();
const port = 3015;
routes(app);

app.get('/', (req, res) => {
    res.send('Server is running at port ' + port);
});

app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});