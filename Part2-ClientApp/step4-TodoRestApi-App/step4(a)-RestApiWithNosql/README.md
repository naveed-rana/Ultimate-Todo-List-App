

Part II: Client Apps
=========================
Step 4: Build a Simple Todo Client App using the TDD Approach
-------------------------------------------------------------------------------
<br />

In this step, first we made the whole UI from adobe XD by using *Material-UI* .Then we made a CRUD app by using NoSql database *(MongoDB)*. Data will be stored permanantly to the database



Running the App:
---------------
  1) To test this app, First run this command *"npm install".*<br />
  2) After complete this command run *"npm start".*<br />
  3) Start the server<br />
    a)To run the server go to the directory "Part1-BackendServer/Step1-Todo-NoSqlBase"<br />
    b)Then run the command *"npm install"* and after that run *"npm run nodemon"*







  Code Structure:
  --------------

  a) _Save data to NoSql database_<br />
      1) To save data to database, we made a *"POST"* request to server through axios. The server collects data and save to mongoDB



  b) _Get data from NoSql database_<br />
      1) To get data from NoSql database we send a *"GET"* request through axios to server. The server finds all the toDos and responed back.


  c) _Update Data on NoSql database_<br />
      1) To update data on database, we send the updated data along with unique id for that todo to server by *"PUT"* request through axios.<br />
      2) The server finds ToDo by id on mongodb and update it


  d) _Delete a todo_<br />
      1) To delete a ToDo, we made a *"DELETE"* request through axios along with id of ToDo<br />
      2) Then server finds the ToDo with same id and delete it.





Contributors:
-----------
M Asif Mushtaq with contribution Fayyaz made the whole UI from adobe XD proto type by using *Material-UI*<br />

Zahid Ali managed all the request from client to server, and also managed send data from client and get data from server.<br/>
