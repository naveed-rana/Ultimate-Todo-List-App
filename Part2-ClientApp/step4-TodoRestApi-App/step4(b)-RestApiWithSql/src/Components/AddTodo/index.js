import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import moment from 'moment';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import { styles } from './style';
import './style.css';
import SideBar from '../SideBar';

import { addToDo } from '../Redux/actions/AddToDoActions'

class addTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            done: false,
        }


    }

    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }

    //////////
    // 1: "saveTodo" is a arrow function to save the record of todo item into record Object
    // 2: Then "record" Object pass to the add todo action to save the data into store of redux throuhg reducer
    //////////
    saveTodo = (e) => {
        e.preventDefault();

        // // Get currunt date 
        // var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // var today = new Date();
        // var myDate = month_names_short[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
       
        const record = {
            id: Math.random() + 1,
            title: this.state.title,
            description: this.state.description,
            done: this.state.done,
            // format (sep 22, 2018)
            createat: moment().format('ll')
        }
        console.log('Add Todo Record is: ', record);

        //Call AddToDo action
        this.props.addToDo(record);

        // Reset input fields of form
        // this.addToDoForm.reset();

        // redirect the path 
        this.props.history.push("/todoList");
    }

    render() {
        {/* Desktop Design Starts */}
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container>
                    <Hidden only={['sm', 'xs']}>
                        <Grid item sm={3}>
                            <SideBar />
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={12} md={9} >
                        <Grid item xs={12} sm={12} md={12} >
                            <div className="addHead-bg">
                                <Typography variant="display3" gutterBottom className="title">Add New Thing</Typography>
                            </div>
                        </Grid>
                        <form onSubmit={this.saveTodo} ref={(el) => this.addToDoForm = el} className={classes.container} noValidate autoComplete="off">
                            <div className="headDiv-fields">
                                <strong>Title:</strong>
                                <Grid item xs={11} sm={10}><input type="text" name="title" onChange={this.onChangeHandler} className="myInput-field" /></Grid>
                                <br />
                                <strong>Description:</strong>
                                <Grid item xs={11} sm={10}><textarea name="description" onChange={this.onChangeHandler} className="myTextarea-field" rows={8}></textarea> </Grid>

                                <Grid item sm={12}>
                                    <button type="submit" className="addBtn"> Add Your Thing</button>
                                </Grid>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

addTodo.propTypes = {
    classes: PropTypes.object.isRequired,
};

//////////
// Export this component with the style.js file
//////////

// export default withStyles(styles)(addTodo);

// export default connect(null, { addToDo })(withStyles(styles)(addTodo));

export default withRouter(connect(null, { addToDo })(withStyles(styles)(addTodo)));