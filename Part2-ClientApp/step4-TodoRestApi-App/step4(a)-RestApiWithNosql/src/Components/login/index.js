import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import loginIcondesktop from './icons/desktop/SignIcon.png';
import loginIconmobile from './icons/mobile/SignIcon.png';
import Backicon from './icons/mobile/Back.png';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Hidden from '@material-ui/core/Hidden';
import "./style.css";
class Login extends Component {
    state = {
        showPassword: false,
    };
    handleMouseDownPassword = event => {
        event.preventDefault();
    };
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
                            <TextField
                                style={{color: '#fff'}}
                                id="adornment-password"
                                label="Password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                required={true}
                                className={classes.password}
                                // onChange={this.handleChange('password')}
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
                        <Grid item xs={12} className={classes.btmGrid}>
                            <p className={classes.OR}>OR</p>
                            <Link to="signup" style={{textDecoration: 'none'}}>
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
