import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import AddIcon from '@material-ui/icons/Add';
import logo from './icons/logo With date.png';
import {Link} from 'react-router-dom';


function Home(props) {
    const { classes } = props;

    return (
        <div>
               {/* <Hidden only = {['sm','xs']}>
               
               <div>desktop</div>
               </Hidden>
             */}

            {/* <Hidden only = {['md','lg','xl']}> */}
        
        <div className={classes.root}>

            <Grid container spacing={0} className={classes.logo}>
                <Grid item xs={12}>
                    <img src={logo} alt="No Image" />
                </Grid>

                <Grid item xs={12}>
                    <h1 className={classes.welcomeMsg}>Welcome to To-Do</h1>
                </Grid>
                <Grid item xs={12}>
                <p className={classes.welcomeMsg}>Create an account to save your tasks <br /> and access them any where. Its FREE <br /> forever </p>
</Grid>
                <Grid item xs={12}>

                {/* show if person is logedin */}


                {/* <Link to="/AdNewToDo">
                    <Button  variant="extendedFab" aria-label="Delete" className={classes.button}>
                        <AddIcon className={classes.extendedIcon} />
                        Add Item
                     </Button>
                     </Link> */}

                     {/* otherwise */}
                     

                     
               <Link to="/login">
                    <Button  variant="extendedFab" aria-label="Delete" className={classes.button}>
                        <AddIcon className={classes.extendedIcon} />
                       Login
                     </Button>
                     </Link> 

                </Grid>


               
            </Grid>
        </div>
        {/* </Hidden> */}
        </div>
    );
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
