import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import arrow from './icons/back Arrow.JPG';
import { Link } from 'react-router-dom';
import loginIcon from './icons/edit icon.png';
import Hidden from '@material-ui/core/Hidden';
import Addtodo from '../AddTodo';
import Drawer from '../drawer'

import uuidv1 from 'uuid/v1';
import { addToDo } from '../Redux/actions/AddToDoActions'

class AdNewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
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
        
        // Get currunt date 
        // var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // var today = new Date();
        // var myDate = month_names_short[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
       
        const record = {
            id: uuidv1(),
            title: this.state.title,
            desc: this.state.desc,
            done: this.state.done,
            // format (sep 22, 2018)
            createAt: moment().format('ll')
        }
        // console.log('Add new form Record is: ', record);

        //Call AddToDo action
        this.props.addToDo(record);

        // Reset input fields of form
        // this.addToDoForm.reset();

        // redirect the path 
        this.props.history.push("/todoList");

    }



    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                {/* Desktop Design Starts */}
                <Hidden only={['sm', 'xs']}>
                    <Addtodo />
                </Hidden>
                {/* Mobile & Tablet View Starts */}
                <Hidden only={['md', 'lg', 'xl']}>
                    <div className={classes.root}>
                        <Grid container>
                            <Grid item xs={2} className={classes.icon}>
                                <Link to="/">
                                    <img className={classes.backArrow} src={arrow} alt="no media" />
                                </Link>
                            </Grid>
                            <Grid item xs={10} className={classes.icon} align="right">
                                <Drawer />
                            </Grid>
                            <Grid item xs={12} className={classes.iconDiv}>
                                <img src={loginIcon} alt="no media" className={classes.editIcon} />
                            </Grid>
                            <Grid item xs={12} className={classes.FormHeader}>
                                <h3> Add a new To-Do </h3>
                            </Grid>
                            <form onSubmit={this.saveTodo} ref={(el) => this.addToDoForm = el} className={classes.container} autoComplete="off">
                                <Grid item xs={12}>
                                    <TextField
                                        id="search"
                                        label="Title"
                                        type="text"
                                        name="title"
                                        onChange={this.onChangeHandler}
                                        required={true}
                                        className={classes.textField}
                                        margin="normal"
                                        InputProps={{
                                            classes: {
                                                input: classes.inputs,
                                                underline: classes.underline,
                                            },
                                        }}
                                        InputLabelProps={{
                                            className: classes.floatingLabelFocusStyle
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="search"
                                        label="Description"
                                        type="text"
                                        name="desc"
                                        onChange={this.onChangeHandler}
                                        required={true}
                                        className={classes.textField}
                                        InputProps={{
                                            classes: {
                                                input: classes.inputs,
                                                underline: classes.underline,
                                            },

                                        }}
                                        InputLabelProps={{
                                            className: classes.floatingLabelFocusStyle,
                                        }}
                                        margin="normal"

                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.btmGrid}>
                                    <Button type="submit" variant="extendedFab" aria-label="Delete" className={classes.button}>
                                        <AddIcon className={classes.extendedIcon} />
                                        Add Item
                        </Button>
                                </Grid>


                            </form>
                        </Grid>
                    </div>
                </Hidden>
            </Fragment>
        );
    }
}

AdNewTodo.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(AdNewTodo);

export default withRouter(connect(null, { addToDo })(withStyles(styles)(AdNewTodo)));