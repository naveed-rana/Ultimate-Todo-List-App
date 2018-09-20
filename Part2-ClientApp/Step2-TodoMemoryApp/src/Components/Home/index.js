import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import AddIcon from '@material-ui/icons/Add';
import Mobilelogo from './icons/mobile/main-logo.png';
import DesktopLogo from './icons/desktop/main-logo.png';
import Fbicon from './icons/desktop/facebook.png';
import Mailicon from './icons/desktop/mail.png';
import { Link } from 'react-router-dom';
import "./style.css";

function Home(props) {
    const { classes } = props;
    return (
        <Fragment>
            {/* Desktop Design Starts */}
            <Hidden only={['sm', 'xs']}>
                <div className="main-container">
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <img src={DesktopLogo} alt="To Do App Main Logo" />
                        </Grid>
                        <Grid item xs={12}>
                            <h1 className="welcome-heading">Welcome to To-Do</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <p className="welcome-text">Create an account to save your tasks and access them anywhere. Its FREE Forever </p>
                        </Grid>
                        
                        {/* Continue  */}
                        <Grid item xs={12}>
                            <Link to="/todoList" style={{textDecoration: 'none'}}>
                                <Button variant="extendedFab" aria-label="Delete" className="Facebook-btn">
                                    <img src={Fbicon} alt="Facebook Icon" />
                                    <span className="Facebook-text">Continue</span>
                                </Button>
                            </Link>
                        </Grid>
                       
                    </Grid>
                </div>
            </Hidden>
            {/* Desktop Design Ends */}
            {/* Mobile & Tablet View Starts */}
            <Hidden only={['md', 'lg', 'xl']}>
                <div className={classes.root}>
                    <Grid container spacing={0} className={classes.logo}>
                        <Grid item xs={12}>
                            <img src={Mobilelogo} alt="To Do App MAin logo" />
                        </Grid>
                        <Grid item xs={12}>
                            <h1 className={classes.welcomeMsg}>Welcome to To-Do</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <p className={classes.welcomeMsg}>Create an account to save your tasks <br /> and access them any where. Its FREE <br /> forever </p>
                        </Grid>
                        <Grid item xs={12}>
                            {/* Continue with facebook button */}
                            <Button variant="extendedFab" aria-label="Delete" className="Facebook-btn">
                                <img src={Fbicon} alt="Facebook Icon" />
                                <span className="Facebook-text">Continue With facebook</span>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            {/* Continue With Email Button */}
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Button variant="extendedFab" aria-label="Delete" className="mail-btn">
                                    <img src={Mailicon} alt="Facebook Icon" />
                                    <span className="email-text">Continue With Email</span>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Hidden>
            {/* Mobile & Tab Ends */}
        </Fragment>

    );
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);
