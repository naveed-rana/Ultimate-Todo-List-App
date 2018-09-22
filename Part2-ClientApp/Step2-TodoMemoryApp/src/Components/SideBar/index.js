import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { searchToDo } from '../Redux/actions/SearchToDoActions';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import profile from './icon/boy (2).png';
import { styles } from './style';
import './style.css';
import doneIcon from './icon/calendar (2).png';
import commingTask from './icon/calendar (6).png';
import myDayIcon from './icon/calendar (7).png';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1,
        }


    }


    // searchText = (e) => {
    //     this.props.searchToDo(e.target.value);
    // }

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container className="user">
                <Grid item sm={12} align="center">
                    <Avatar
                        alt="Abaid Malik"
                        src={profile}
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                </Grid>
                <Grid item sm={12}>
                    <input type="text" placeholder="Search" name="searchText" onChange={this.props.searchHandler} className="mySearch-field" />
                </Grid>

                <Grid item sm={12}>
                    <div className={classes.root}>
                        <List component="nav">
                            <Link to="/todoList" className="link-list" >
                                <ListItem
                                    button
                                    selected={this.state.selectedIndex === 0}
                                    onClick={event => this.handleListItemClick(event, 0)}
                                >
                                    <ListItemIcon>
                                        <img src={myDayIcon} alt="No Icon" />
                                    </ListItemIcon>
                                    <ListItemText primary="My Day" />
                                </ListItem>
                            </Link>

                            <Link to="/todoDone" className="link-list" >
                                <ListItem
                                    button
                                    selected={this.state.selectedIndex === 2}
                                    onClick={event => this.handleListItemClick(event, 2)}
                                >
                                    <ListItemIcon>
                                        <img src={doneIcon} alt="No Icon" />
                                    </ListItemIcon>
                                    <ListItemText primary="Done Tasks" />
                                </ListItem>
                            </Link>

                            <Link to="/todoComing" className="link-list" >
                                <ListItem
                                    button
                                    selected={this.state.selectedIndex === 3}
                                    onClick={event => this.handleListItemClick(event, 3)}
                                >
                                    <ListItemIcon>
                                        <img src={commingTask} alt="No Icon" />
                                    </ListItemIcon>
                                    <ListItemText primary="Coming Tasks" />
                                </ListItem>
                            </Link>

                            <br />
                            <Divider />
                        </List>


                        <Link to="/AdNewToDo" className="addNewList" >

                            <Grid item xs={12} className={classes.btmGrid}>
                                <Button type="submit" variant="extendedFab" aria-label="SigIn" className={classes.button}>
                                    Add Your Thing
                            </Button>
                            </Grid>
                        </Link>

                    </div>

                </Grid>

            </Grid>
        );
    }

}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

//////////
// Export this component with the style.js file
//////////

// export default connect(NULL, { searchToDo })(withStyles(styles)(SideBar));

export default withStyles(styles)(SideBar);