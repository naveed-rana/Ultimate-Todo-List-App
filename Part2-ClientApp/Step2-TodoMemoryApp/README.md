

Part II: Client Apps
==================
Step 2: Build a Simple in Memory Todo Client App using the TDD Approach
----------------------------------
<br />

In this step, we made a CRUD app by using only *redux*. Data will be stored temporarily and no entry will be left by clicking refresh button.



Running the App:
----------------
  1) To test this app, First run this command *"npm install"*.<br />
  2) After complete this command run *"npm start"*



Code Structure:
--------------

  a) _Save data to redux store_ <br />
      1) To save data to redux store, first we call the action from client side component and pass data to this function.<br />
      2) Then action pass a type and data as *"payload"* to reducer. <br />
      3) Then reducer match the type and save data to redux store.


  b) _Get data from redux store_ <br />
      1) To get data from store we call *"mapStateToProps"* function. This function update the state of the component with the data from redux store. Then the .map function will update the UI of component with data from redux store.


  c) _Update Data on Redux store_<br />
      1) To update data on redux store, we send the updated data along with unique id for that todo to reducer.<br />
      2) Then reducer filters the todo that have same id from an array of todos. <br/>
      3) Then update the state (the previous state spreads) along with change the processing object with a new one.


  d) _Delete a todo_ <br />
      1) To delete a ToDo, we send ToDo id to reducer.
      <br />
      2) Reducer finds the ToDos that doesnot match with the id that is being deleted and returns a new array
      <br />
      3) The new array returns and update the store.




Contributors:
-----------
Abaidullah complete this step
