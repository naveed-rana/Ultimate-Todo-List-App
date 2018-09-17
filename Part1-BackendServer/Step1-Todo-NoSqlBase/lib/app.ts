import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as session from 'express-session';
import * as cookieparser from 'cookie-parser';
import * as path  from 'path';
import * as passport from 'passport';
import setuppassport from './config/Passport';
import usersRouter from './routes/users';
import todoRouter from './routes/addToDo';
var dbURI = require('./config/key');


//creating App
const App = express();
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
mongoose.connect(dbURI,{ useNewUrlParser: true }, function (err) {
  if (err) throw err;
  console.log('Successfully connected');
});

//setup 
App.use(passport.initialize());
App.use(passport.session());
setuppassport();

//routes
App.use('/user', usersRouter);
App.use('/todo/api/v1.0', todoRouter);


//serve static files
App.use(express.static(path.join(__dirname, './build')));
export {App};