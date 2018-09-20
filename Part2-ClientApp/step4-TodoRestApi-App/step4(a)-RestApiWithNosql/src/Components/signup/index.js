import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import back_arrow from './icons/mobile/Back.png';
import SignupMobile from './icons/mobile/SignUpIcon.png';
import SignupDesktop from './icons/desktop/SignUpIcon.png';
import "./style.css";
class Sigin extends Component {

    render() {

        const { classes } = this.props;

        return (

            <div className='main-container3'>
                <Grid container >
                    <Grid item xs={2} className={classes.back}>
                        <Link to="/login">
                            <img className={classes.backArrow} src={back_arrow} alt="Back Button" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} className={classes.iconDiv}>
                        {/* Desktop Design Image */}
                        <Hidden only={['sm', 'xs']}>
                            <img src={SignupDesktop} alt="Signup Icon" />
                         </Hidden>
                         {/* Mobile & Tablet Image */}
                         <Hidden only={['md', 'lg', 'xl']}>
                            <img src={SignupMobile} alt="Sign Up Icon" className={classes.loinIcon} />
                         </Hidden>
                    </Grid>

                    <Grid item xs={12} className={classes.FormHeader}>
                        <h2 className="signuptext"> Sign Up </h2>
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
