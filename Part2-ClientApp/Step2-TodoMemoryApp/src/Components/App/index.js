import React, { Component } from 'react';
import 'typeface-roboto/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import {login} from '../Redux/actions/AddToDoActions';

//Main App Component and Setup React Toastify

class App extends Component {
  componentDidMount() {
    this.props.login({title:"some",discription:"night at some",done:true,userid:2})
  }
  render() {
    return (
      <div>
        <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    />
    
      </div>
    );
  }
}

export default connect(null,{login})(App);
