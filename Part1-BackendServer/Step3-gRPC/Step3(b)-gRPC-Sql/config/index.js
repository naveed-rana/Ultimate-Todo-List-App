const pgp =  require('pg-promise');
var dbURI = 'postgresql://NaveedRana:RANAlove1214@localhost:5432/addtodo';
  
const initOptions = {
    // global event notification;
    error(error, e) {
        if (e.cn) {
            // A connection-related error;
            console.log('CN:', e.cn);
            console.log('EVENT:', error.message || error);
        }
    }
};

const pgpc = pgp(initOptions);
// using an invalid connection string:
const db = pgpc(dbURI);

db.connect()
    .then(obj => {
        console.log("Successfully Connected!");
        obj.done();  
        // success, release the connection;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
//export
module.exports =  db;
