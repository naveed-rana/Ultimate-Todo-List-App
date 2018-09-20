import React, { Component } from 'react';
import Home from '../Home';
import AdNewToDo from '../AdNewForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../login';
import SignUp from "../signup";
import TodoList from "../todoList"

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
               <Route exact path="/" component={Home}/>
               <Route exact path="/AdNewToDo" component={AdNewToDo} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/signup" component={SignUp} />
               <Route exact path="/todoList" component={TodoList} />


               </div>
            </Router>
        )
    }
}
