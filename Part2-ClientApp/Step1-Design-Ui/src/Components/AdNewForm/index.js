import React, { Component } from 'react';
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


function AdNewTodo(props) {
    const { classes } = props;

    return (

        <div className={classes.root}>
            <Grid container>
                <Grid item xs={2} className={classes.icon}>
                    <Link to="/">
                        <img className={classes.backArrow} src={arrow} alt="no image" />
                    </Link>
                </Grid>
                <Grid item xs={12} className={classes.iconDiv}>
                    <img src={loginIcon} alt="no image" className={classes.editIcon} />
                </Grid>

                <Grid item xs={12} className={classes.FormHeader}>
                    <h3> Add a new To-Do </h3>
                </Grid>
                <form className={classes.container} autoComplete="off">
                    <Grid item xs={12}>
                        <TextField
                            id="search"
                            label="Title"
                            type="text"
                            required={true}
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                classes: {
                                    input: classes.inputs,
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
                            label="Event Date"
                            type="date"
                            className={classes.textField}
                            required={true}

                            margin="normal"

                            InputProps={{
                                classes: {
                                    input: classes.inputs,
                                },

                            }}
                            InputLabelProps={{
                                className: classes.floatingLabelFocusStyle,
                                shrink: true
                            }}

                        />
                    </Grid>


                    <Grid item xs={12}>
                        <TextField
                            id="search"
                            label="Description"
                            type="text"
                            required={true}
                            className={classes.textField}
                            InputProps={{
                                classes: {
                                    input: classes.inputs,
                                },
                            }}
                            InputLabelProps={{
                                className: classes.floatingLabelFocusStyle,
                            }}
                            margin="normal"

                        />
                    </Grid>





                    <Grid item xs={12} className={classes.btmGrid}>
                        <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
                            <AddIcon className={classes.extendedIcon} />
                            Add Item
                     </Button>
                    </Grid>


                </form>
            </Grid>



        </div>
    );
}
AdNewTodo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdNewTodo);
