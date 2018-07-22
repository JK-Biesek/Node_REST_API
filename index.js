let express = require('express');
let routes = require('./routes/routes');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let jsonwebtoken = require('jsonwebtoken');
let User = require('./model/user');
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

//SET JWT Token
app.use((req, res, next)=>{
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFUL-api',(err,decode)=>{
           if(err) {
               req.User = undefined;
           } 
           req.User = decode;
           next();
        });    
    } else {
        req.User = undefined;
        next();
    }
});

routes(app);

app.get('/', (req, res) => {
    res.send('Server is running at port ' + port);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
module.exports = app; // for testing