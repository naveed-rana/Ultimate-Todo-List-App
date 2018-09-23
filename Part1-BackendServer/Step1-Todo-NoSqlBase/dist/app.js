"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieparser = require("cookie-parser");
const path = require("path");
const passport = require("passport");
const Passport_1 = require("./config/Passport");
const users_1 = require("./routes/users");
const addToDo_1 = require("./routes/addToDo");
var dbURI = require('./config/key');
//creating App
const App = express();
exports.App = App;
App.use(bodyParser.urlencoded({
    extended: true
}));
// Body Parser implement  
App.use(bodyParser.json());
App.use(session({
    secret: "@#^&$!#_)(@!#)**(@^%*&^*#${}|{@#$@#$(#@",
    resave: true,
    saveUninitialized: true
}));
App.use(cookieparser());
//connect with mongoose
mongoose.connect(dbURI, { useNewUrlParser: true }, function (err) {
    if (err)
        throw err;
    console.log('Successfully connected');
});
//setup 
App.use(passport.initialize());
App.use(passport.session());
Passport_1.default();
//routes
App.use('/user', users_1.default);
App.use('/todo/api/v1.0', addToDo_1.default);
//serve static files
App.use(express.static(path.join(__dirname, './build')));
//# sourceMappingURL=app.js.map