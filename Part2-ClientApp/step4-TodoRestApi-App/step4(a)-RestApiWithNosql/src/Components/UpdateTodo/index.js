import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import { styles } from './style';
import './style.css';
import SideBar from '../SideBar';

import { updateFunction } from '../Redux/actions/UpdateToDoActions'

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
        }
        console.log('Update id is: ', this.props.match.params.id);
        console.log('update form store ', this.props.data);

    }

    //////////
    // 1: "saveTodo" is a arrow function to save the record of todo item into record Object
    // 2: Then "record" Object pass to the add todo action to save the data into store of redux throuhg reducer
    //////////
    updateTodo = (e) => {
        e.preventDefault();
        console.log('ok');
        const record = {
            id: this.props.match.params.id,
            title: e.target.title.value,
            desc: e.target.desc.value
        }
        console.log('Update Todo Record is: ', record);

        //Call Update-ToDo action
        this.props.updateFunction(record);

        // Reset input fields of form
        this.updateToDoForm.reset();

        // redirect the path 
        this.props.history.push("/todo_view");
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
                                    <form onSubmit={this.updateTodo} ref={(el) => this.updateToDoForm = el} className={classes.container} noValidate autoComplete="off">
                                        <div className="headDiv-fields">
                                            <strong>Title:</strong>
                                            <Grid item xs={11} sm={10}><input type="text" name="title" defaultValue={item.title} onChange={this.onChangeHandler} className="myInput-field" /></Grid>
                                            <br />
                                            <strong>Description:</strong>
                                            <Grid item xs={11} sm={10}><textarea name="desc" onChange={this.onChangeHandler} className="myTextarea-field" rows={8}>{item.desc}</textarea> </Grid>

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
        data: data.AddTodo.todoList
    }
}

//////////
// Export this component with the style.js file
//////////

// export default withStyles(styles)(addTodo);

export default connect(mapStateToProps, { updateFunction })(withStyles(styles)(Update));