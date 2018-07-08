import express from 'express';

const app = express();
const port = 3015;

app.get('/', (req, res) => {
    res.send('Server is running at port ' + port);
});

app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});