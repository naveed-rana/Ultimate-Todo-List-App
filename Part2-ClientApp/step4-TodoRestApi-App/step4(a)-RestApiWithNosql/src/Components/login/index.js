import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import loginIcondesktop from './icons/desktop/SignIcon.png';
import Backicon from './icons/mobile/Back.png';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "./style.css";



// This component have a login form both for desktop and mobile view
class Login extends Component {
    state = {
        showPassword: false,
    };


    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    //this will show or hide password by click on eye icon
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };


    render() {
        const { classes } = this.props;
        return (
            <div className='main-container2'>
                <Grid container>
                    <Grid item xs={2} className={classes.back}>
                        <Link to="/">
                            <img className={classes.backArrow} src={Backicon} alt="Back" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} className={classes.iconDiv}>

                        {/* Desktop Design Image */}
                        <img src={loginIcondesktop} alt="Login Icon" />
                    </Grid>
                    <Grid item xs={12} className={classes.FormHeader}>
                        <h2 className="sign-in-text"> Sign In </h2>
                    </Grid>

                    <form className={classes.container} autoComplete="off">
                        <Grid item xs={12} >

                            {/* textField for email */}
                            <TextField
                                className='email_field'
                                label="Email"
                                required={true}
                                id="input-with-icon-textfield search"
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
                        <Grid item xs={12} className={classes.formGrid} >

                        {/* textField for password */}
                            <TextField
                                style={{ color: '#fff' }}
                                id="adornment-password"
                                label="Password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                required={true}
                                className={classes.password}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </Grid>

                        <Grid item xs={12} className={classes.btmGrid}>
                            <Button type="submit" variant="extendedFab" aria-label="SigIn" className={classes.button}>
                                Sign In
                            </Button>
                        </Grid>

                        {/* if the user have no account before, then he will click below buttom */}
                        {/* this will redirect to Sign up page */}
                        
                        <Grid item xs={12} className={classes.btmGrid}>
                            <p className={classes.OR}>OR</p>
                            <Link to="signup" style={{ textDecoration: 'none' }}>
                                <Button variant="extendedFab" aria-label="Sigup" className={classes.SignUpBtn} >
                                    Create An Account
                             </Button>
                            </Link>
                        </Grid>
                    </form>
                </Grid>



            </div>
        );
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
