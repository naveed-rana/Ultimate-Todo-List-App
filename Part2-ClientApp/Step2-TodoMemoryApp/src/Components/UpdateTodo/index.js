import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateToDo } from '../Redux/actions/UpdateToDoActions';

import moment from 'moment';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import { styles } from './style';
import './style.css';
import SideBar from '../SideBar';


class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // console.log('update id Is: ', this.props.match.params.id);
        console.log('store dATA' , this.props.data);
    }

    updateTodo = (e,data) => {
        e.preventDefault();
        const record = {
            id: this.props.match.params.id,
            title: e.target.title.value,
            desc: e.target.desc.value,
            done: data.done,
            createAt: data.createAt
        }
        // console.log('Update Todo Record is: ', record);

        //Call Update-ToDo action
        this.props.updateToDo(record);

        // Reset input fields of form
        this.updateToDoForm.reset();

        // redirect the path 
        this.props.history.push("/todoList");
    }


    render() {
        const { classes } = this.props;
        const todos = this.props.data;
        const editID = this.props.match.params.id;
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
                                <Typography variant="display3" gutterBottom className="title">Update Todo Item</Typography>
                            </div>
                        </Grid>

                        {todos.map((item, index) => {
                            if (item.id == editID) {
                                return (
                                    <form onSubmit={(e)=>this.updateTodo(e,item)} ref={(el) => this.updateToDoForm = el} key={index} className={classes.container} noValidate autoComplete="off">
                                        <div className="headDiv-fields">
                                            <strong>Title:</strong>
                                            <Grid item xs={11} sm={10}><input type="text" name="title" defaultValue={item.title} className="myInput-field" /></Grid>
                                            <br />
                                            <strong>Description:</strong>
                                            <Grid item xs={11} sm={10}><textarea name="desc" defaultValue={item.desc} className="myTextarea-field" rows={8}></textarea> </Grid>

                                            <Grid item sm={12}>
                                                <button type="submit" className="addBtn"> Update Your Thing</button>
                                            </Grid>
                                        </div>
                                    </form>

                                )
                            }
                        })
                        }

                    </Grid>
                </Grid>
            </div>
        );
    }

}

Update.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(data) {
    return {
        data: data.TodoApp.todoList
    }
}



//////////
// Export this component with the style.js file
//////////

// export default withStyles(styles)(Update);

export default withRouter(connect(mapStateToProps, { updateToDo })(withStyles(styles)(Update)));