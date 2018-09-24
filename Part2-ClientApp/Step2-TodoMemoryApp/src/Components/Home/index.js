import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Mobilelogo from './icons/mobile/main-logo.png';
import DesktopLogo from './icons/desktop/main-logo.png';
import ArrowIcon from './icons/right-arrow.png';
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
                                    <span className="Facebook-text">Continue</span>
                                    <img src={ArrowIcon} alt="Arrow Icon" style={{marginLeft:'12px'}}/>
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
                            <Link to="/todoList" style={{textDecoration: 'none'}}>
                                <Button variant="extendedFab" aria-label="Delete" className="Facebook-btn">
                                    <span className="Facebook-text">Continue</span>
                                    <img src={ArrowIcon} alt="Arrow Icon" style={{marginLeft:'12px'}}/>
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
