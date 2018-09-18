import {Client} from 'pg';
var dbURI = require('../config/key.ts');

//connection with sql

const client = new Client({
    connectionString: dbURI,
  })
  client.connect((err)=>{
      if(err){
          console.log(err);
      }
      else{
          console.log("Successfully Connected!");
      }
  });
  
//export
export default client;
