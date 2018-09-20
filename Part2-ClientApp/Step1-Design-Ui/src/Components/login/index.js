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
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import loginIcon from './icons/signin-icon.JPG';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Avatar from '@material-ui/core/Avatar';

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

            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={2} className={classes.back}>
                        <Link to="/">
                            <img className={classes.backArrow} src={arrow} alt="no image" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} className={classes.iconDiv}>
                 
                        <img src={loginIcon} alt="no image" className={classes.loinIcon} />
                    
                    </Grid>

                    <Grid item xs={12} className={classes.FormHeader}>
                        <h3> Sign In </h3>
                    </Grid>
                    <form className={classes.container} autoComplete="off">

                        <Grid item xs={12} >
                        <div className={classes.inputLable}>
                                <InputLabel className={classes.label} >Email</InputLabel>
                            </div>
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield search"
                                type="email"
                                required={true}
                                className={classes.textField}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    classes: {
                                        input: classes.inputs,
                                    },
                                }}
                            />
                        </Grid>
                      
                        <Grid item xs={12} className={classes.formGrid}>
                            <div className={classes.inputLable}>
                                <InputLabel className={classes.label} htmlFor="adornment-password">Password</InputLabel>
                            </div>

                            <Input
                                id="adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                className={classes.password}
                                required={true}
                               

                                // onChange={this.handleChange('password')}
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
                            <Link to="signup">
                            <Button variant="extendedFab" aria-label="Sigup" className={classes.SignUpBtn}>
                              
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
