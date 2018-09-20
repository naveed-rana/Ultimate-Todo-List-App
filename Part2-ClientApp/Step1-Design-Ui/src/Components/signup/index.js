import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import arrow from './icons/back Arrow.JPG';
import { Link } from 'react-router-dom';

import signupIcon from './icons/signup-icon.PNG';


class Sigin extends Component {

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={2} className={classes.back}>
                        <Link to="/login">
                            <img className={classes.backArrow} src={arrow} alt="no image" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} className={classes.iconDiv}>

                        <img src={signupIcon} alt="no image" className={classes.loinIcon} />

                    </Grid>

                    <Grid item xs={12} className={classes.FormHeader}>
                        <h3> Sign Up </h3>
                    </Grid>
                    <form className={classes.container} autoComplete="off">
                        <Grid item xs={12} >
                            {/* <div className={classes.inputLable}>
                                
                            </div> */}
                            <TextField
                                className={classes.margin}
                                label="User Name"
                                required={true}
                                id="input-with-icon-textfield search"
                                type="text"
                                className={classes.textField}
                                InputProps={{
                                    classes: {
                                        input: classes.inputs,
                                    },
                                }}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}

                            />
                        </Grid>
                        <Grid item xs={12} >
                            {/* <div className={classes.inputLable}>
                                <InputLabel className={classes.label} >Email</InputLabel>
                            </div> */}
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield search"
                                label="Email"
                                required={true}
                                type="email"
                                className={classes.textField}
                                InputProps={{
                                    classes: {
                                        input: classes.inputs,
                                    },
                                }}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}

                            />
                        </Grid>

                        <Grid item xs={12} >


                            <TextField
                                id="adornment-password"
                                label="Password"
                                type="password"
                                required={true}
                                className={classes.password}
                                // onChange={this.handleChange('password')}
                                InputProps={{
                                    classes: {
                                        input: classes.inputs,
                                    },
                                }}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                id="adornment-password"
                                label="Confirm Password"
                                type="password"
                                required={true}
                                className={classes.password}
                                // onChange={this.handleChange('password')}
                                InputProps={{
                                    classes: {
                                        input: classes.inputs,
                                    },
                                }}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}
                            />
                        </Grid>


                        <Grid item xs={12} className={classes.btmGrid}>
                            <Button type="submit" variant="extendedFab" aria-label="SigIn" className={classes.button}>

                                Sign Up
                            </Button>
                        </Grid>
                        <Grid item xs={12} className={classes.btmGrid}>


                        </Grid>


                    </form>
                </Grid>



            </div>
        );
    }
}
Sigin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sigin);
