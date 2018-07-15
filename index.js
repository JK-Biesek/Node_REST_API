let express = require('express');
let routes = require('./routes/routes');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
const app = express();
const port = 3015;

//add mongoose connection
const url = 'mongodb://localhost:27017/NodeAppDb';
mongoose.Promise = global.Promise;
try {
    mongoose.connect(url,{ useNewUrlParser: true });
} catch(e) {
    console.error(e)
  }
//add bodyParser
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send('Server is running at port ' + port);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
module.exports = app; // for testing