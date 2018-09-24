

Part I: Server REST API’s
=========================

Step 2: Todo RESTful API - A TDD Approach to Building an API using SQL Database
-------------------------------------------------------------------------------

            TYPESCRIP EXPRESS SERVER
            WITH
            PostgresDB



In this step, we made a CRUD app by using _Sql_ database (_PostgresDB_). Data will be stored permanantly to the database



Running the App:
---------------

  1) To run the server, first run the command *"npm install"* and after that run *"npm run nodemon"*<br />
  2) To Run the client<br />
     a) Go to the following directory "Part2-ClientApp/step4-TodoRestApi-App/step4(b)-RestApiWithSql"<br />
     b) First run this command *"npm install".*<br />
     c) After complete this command run "npm start".







Code Structure:
--------------

  a) _Save data to Sql database_<br />
      1) To save data to database, we made a "POST" request to server through axios. The server collects data save to PostgresDB table



  b) _Get data from Sql database_<br />
      1) To get data from Sql database we send a "GET" request through axios to server. The server finds all the toDos and responed back.


  c) _Update Data on Sql database_<br />
      1) To update data on database, we send the updated data along with unique id for that todo to server by *"PUT"* request through axios.<br />
      2) The server finds ToDo by id on PostgresDB table and update it


  d) _Delete a todo_<br />
      1) To delete a ToDo, we made a "DELETE" request through axios along with id of ToDo<br />
      2) Then server finds the ToDo with same id and delete it.





Contributors:
-------------
Naveed complete this step.
