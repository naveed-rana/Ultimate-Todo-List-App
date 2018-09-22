import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { styles } from "./style";
import Grid from '@material-ui/core/Grid';
import Manu from './manu';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import "./style.css"
import Drawer from '../drawer'
import Divider from '@material-ui/core/Divider'
import { Hidden } from '@material-ui/core';
import ToDoListDeskTop from '../TodoView'

// This component will show all the ToDos

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedA: true,
            checkedB: false,
            expanded: null,
            type: "hidden",

        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };


    handleChangeexpand = id => (event, expanded) => {
        console.log(event.target)
        if (event.target.classList.contains("some")) {

            return null
        } else {

            this.setState({
                expanded: expanded ? id
                    : false
            })
        }
    }
    render() {

        const { classes } = this.props;
        const { expanded } = this.state;
        return (
            <div>
                {/* For desktops, It will render below component */}
                <Hidden only={['sm', 'xs']}>
                    <ToDoListDeskTop />
                </Hidden>


                {/* Mobile & Tablet View Starts */}
                <Hidden only={['md', 'lg', 'xl']}>

                    <div className={classes.root}>
                        <Grid container>
                            <Grid item xs={6}  >
                                <div className={classes.DrawerGrid}>
                                    <Drawer />
                                </div>
                            </Grid>
                            <Grid item xs={12} className={classes.back} >
                                <h3 className={classes.listHeading}>Todo List</h3>
                            </Grid>


                            <Grid item xs={12}>

                            {/* Expansion Panel to show more detail about toDo */}
                                <ExpansionPanel expanded={expanded === 1}
                                    onChange={this.handleChangeexpand(1)}
                                    className={classes.todoItem}>
                                    <ExpansionPanelSummary className={classes.expansionSummary}>

                                        <Grid container className={classes.todoPanel}>
                                            <Grid item xs={2} className={classes.checkboxGrid}>
                                                <div class="round">
                                                    <input type="checkbox" id="checkbox" />
                                                    <label for="checkbox"></label>
                                                </div>

                                            </Grid>
                                            <Grid item xs={8}>

                                                <Typography className={classes.description}>Expansion Panel</Typography>

                                            </Grid>
                                            <Grid className="some" item xs={2} >
                                                <div className="some">

                                                    {/* To show a manu on click on manu icon at right side of a ToDo */}
                                                    <Manu className="some" />
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </ExpansionPanelSummary>
                                    <Divider />
                                    <ExpansionPanelDetails>
                                        <Grid container>
                                            <Grid item xs={12}>

                                                {/* Show the Description of ToDo */}
                                                <Typography variant="caption" className={classes.description}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                    sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={10} md={11}>

                                                <Typography variant="caption" align="right">
                                                    June 20, 2020
                                                    </Typography>
                                            </Grid>
                                        </Grid>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                            </Grid>
                            <Grid item xs={12} >
                                <Tooltip title="Add a new Todo">
                                    <Link to="/AdNewToDo">
                                        <Button variant="fab" className={classes.absolute}>
                                            <AddIcon />
                                        </Button>
                                    </Link>
                                </Tooltip>
                            </Grid>


                        </Grid>

                    </div>
                </Hidden>
            </div>
        );
    }
}

Todolist.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Todolist);
