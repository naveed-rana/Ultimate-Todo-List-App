import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home';
import AdNewToDo from '../AdNewForm';
import TodoList from "../todoList";
import UpdateTodo from '../UpdateTodo';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/AdNewToDo" component={AdNewToDo} />
                    <Route exact path="/todoList" component={TodoList} />
                    <Route exact path="/update/:id" component={UpdateTodo} />
                </div>
            </Router>
        )
    }
}
