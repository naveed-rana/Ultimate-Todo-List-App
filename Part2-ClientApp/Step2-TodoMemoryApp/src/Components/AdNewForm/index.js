import React, { Component, Fragment } from 'react';
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


class AdNewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

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
                                    <img className={classes.backArrow} src={arrow} alt="no image" />
                                </Link>
                            </Grid>
                            <Grid item xs={10} className={classes.icon} align="right">
                                <Drawer />
                            </Grid>
                            <Grid item xs={12} className={classes.iconDiv}>
                                <img src={loginIcon} alt="no image" className={classes.editIcon} />
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
export default withStyles(styles)(AdNewTodo);
