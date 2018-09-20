import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import { styles } from './style';
import './style.css';
import SideBar from '../SideBar';


class addTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
        }


    }

    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }

    //////////
    // 1: "saveTodo" is a arrow function to save the record of todo item into record Object
    //////////
    saveTodo = (e) => {
        e.preventDefault();
        const record = {
            id: Math.random() + 1,
            title: this.state.title,
            desc: this.state.desc
        }
        console.log('Add Todo Record is: ', record);

        // Reset input fields of form
        this.addToDoForm.reset();
    }

    render() {
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
                                <Grid item xs={11} sm={10}><textarea name="desc" onChange={this.onChangeHandler} className="myTextarea-field" rows={8}></textarea> </Grid>

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

export default withStyles(styles)(addTodo);