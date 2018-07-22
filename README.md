# Node_REST_API

REST NodeJs API

To run app locally : 
1. type ```npm install``` in console
2. ```npm run``` to run app locally at port ```:3015```
3. to run mongoDb type ```mongod```

Use Postman
1.To add new User to database use ```POST``` type request and url ```http://localhost:3015/auth/register```

2.In Body section add keys : 
```userName,email,password```

3.To get JWT TOKEN use this url ```http://localhost:3015/auth/login``` with the same
Body keys-values

4.To add Entry to database use ```POST``` type request and this url ```http://localhost:3015/contact```
5.In ```Body``` section add keys : 
```firstName,lastName,email,phone```
In HEADERS add key ```Authorization``` and in values paste content of ```JWT Token```

6.To retrive entries from postman use type ```GET``` and url ```http://localhost:3015/contact```
In HEADERS add key ```Authorization``` and in values paste content of ```JWT Token```

7.To retrive specific entries from postman use its ID and request type ```GET``` and url ```http://localhost:3015/contact/<THE_ID>```
In HEADERS add key ```Authorization``` and in values paste content of ```JWT Token```

8.To update record from database use type ```PUT``` and add new keys and values in body request
then in url ```http://localhost:3015/contact/<THE_ID>```
In HEADERS add key ```Authorization``` and in values paste content of ```JWT Token```

9.To Delete record from database use type ```DELETE``` and the url  ```http://localhost:3015/contact/<THE_ID>```
In HEADERS add key ```Authorization``` and in values paste content of ```JWT Token```


To Run test cases type in command line ```mocha```