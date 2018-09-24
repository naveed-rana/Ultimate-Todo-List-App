const mongoose = require("mongoose");

exports.module = function () {

    mongoose
  .connect(
    "mongodb://NaveedRana:RANAlove1214@ds161062.mlab.com:61062/addtodo",
    { useNewUrlParser: true }
  )
  .then(function() {
    console.log("mongodb connected");
  })
  .catch(function(err) {
    console.log("Error in mongodb connection", err);
  });
  
}