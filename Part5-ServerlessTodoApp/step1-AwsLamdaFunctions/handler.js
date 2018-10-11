'use strict';


module.exports.hello = async (event, context) => {
  var db = require('./Sqlconnection');
  console.log("db");
  console.log(db);
  
 var data =  db.one('INSERT INTO todos(title) VALUES($1) RETURNING title', ['John'])
  .then(data => {
    console.log(data);
    return data.tilte; 
    
    // print new user id;
  })
  .catch(error => {
      return error; // print error;
  });  
  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      dbs:data
    }),
  };

};
