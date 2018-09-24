

Part II: Client Apps
==================
Step 3: Build a persistent Simple client Todo Client App using the TDD Approach
----------------------------------
<br />

In this step, we made a CRUD app by using *IndexedDB*. Data will be stored permanantly but only on client side



Running the App:<br />
---------------

  1) To test this app, First run this command *"npm install*".<br />
  2) After complete this command run *"npm start"*



Configuration:
------------
We configure indexedDB in config folder with *Dexie*.



Code Structure:
---------------

  a) _Save data to indexedDB_ <br />
      1) To save data to indexedDB, first we call the ".add" function and pass data to this function.
<br />
      2) Then call the "dispatch" to send data to redux store




  b) _Get data from indexedDB_<br />
      1) To get data from indexedDB we call "toArray" function. This function return an array that is stored to redux store. Then the .map function will update the UI of component with data from redux store.


  c) _Update Data on indexedDB_<br />
      1) To update data on indexedDB, we send the updated data along with unique id for that todo to action.<br />
      2) Then we call ".update" function.<br />
      3) This will update the spcific data that have the same id


  d) _Delete a todo_<br />
      1) To delete a ToDo, we send ToDo id to action.
      2) Then db.table finds the ToDo with same id and calls ".delete"





Contributors:
-----------
Abaidullah complete this step.
