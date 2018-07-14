# Node_REST_API

REST NodeJs API

To run app locally : 
1. type ```npm install``` in console
2. ```npm run``` to run app locally at port ```:3015```
3. to run mongoDb type ```mongod```

Use Postman
1.To add Entry to database use ```POST``` type request and this url ```http://localhost:3015/contact```
2.In ```Body``` section add keys : 
```firstName,lastName,email,phone```

To retrive entries from postman use type ```GET``` and url ```http://localhost:3015/contact```