import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import Drawer from '../drawer';


function TodoList(props) {
    const { classes } = props;

    return (
      <div className={classes.root}>
            <Drawer />
            <Grid container className={classes.logo}>
                <Grid item xs={12}>
                   
                </Grid>



               
            </Grid>
        </div>
       
      
    );
}
TodoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);
