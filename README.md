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
To retrive specific entries from postman use its ID and request type ```GET``` and url ```http://localhost:3015/contact/<THE_ID>```

To update record from database use type ```PUT``` and add new keys and values in body request
then in url ```http://localhost:3015/contact/<THE_ID>```

To Delete record from database use type ```DELETE``` and the url  ```http://localhost:3015/contact/<THE_ID>```


To Run test cases type in command line ```mocha```