
exports.handler = async (event) => {

    var db = require('./Sqlconnection');
    // TODO implement
   var data =  db.any('SELECT * FROM todos')
    .then(function(data) {
        // success;
        const response = {
            statusCode: 200,
            body: JSON.stringify('succefully run!')
        };
        return response;
    })
    .catch(function(error) {
        // error;
        const response = {
            statusCode: 500,
            body: JSON.stringify('error!')
        };
        return response;
    }).finally(db.$pool.end);

    return data;
   
};