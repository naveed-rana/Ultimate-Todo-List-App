import React from 'react';
import { connect } from 'react-redux';
import { updateToDo } from '../Redux/actions/UpdateToDoActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { styles } from "./style";
import Grid from '@material-ui/core/Grid';
import Manu from '../todoList/manu';
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
import TodoComing from '../TodoComing'

class ComingTask extends React.Component {
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
         
        if (event.target.classList.contains("some")) {

            return null
        } else {

            this.setState({
                expanded: expanded ? id
                    : false
            })
        }
    }

    toggleCheck = (item) => {

        const record = {
            id: item.id,
            title: item.title,
            desc: item.desc,
            done: !item.done,
            createAt: item.createAt
        }

        //Call Update-ToDo action
        this.props.updateToDo(record);
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        const todos = this.props.data;
        return (
            <div>
                <Hidden only={['sm', 'xs']}>
                    <TodoComing />
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
                                <h3 className={classes.listHeading}>Coming Tasks</h3>
                            </Grid>

                            <Grid item xs={12}>

                                {todos.length > 0 ?
                                    todos.map((item, index) => {
                                        if (item.done == false) {
                                            return (

                                                <ExpansionPanel expanded={expanded === 1}
                                                    onChange={this.handleChangeexpand(1)}
                                                    className={classes.todoItem} key={index}>
                                                    <ExpansionPanelSummary className={classes.expansionSummary}>

                                                        <Grid container className={classes.todoPanel}>
                                                            <Grid item xs={2} className={classes.checkboxGrid}>
                                                                <div className="round">
                                                                    <input type="checkbox" id={item.id} onClick={() => { this.toggleCheck(item) }} />
                                                                    <label htmlFor={item.id}></label>
                                                                </div>

                                                            </Grid>
                                                            <Grid item xs={8}>

                                                                <Typography className={classes.description}>{item.title}</Typography>

                                                            </Grid>
                                                            {/* className={classes.manus} */}
                                                            <Grid className="some" item xs={2} >
                                                                <div className="some">
                                                                    <Manu className="some" keys={index} row={item} />
                                                                </div>
                                                            </Grid>
                                                        </Grid>

                                                    </ExpansionPanelSummary>
                                                    <Divider />
                                                    <ExpansionPanelDetails>
                                                        <Grid container>
                                                            <Grid item xs={12}>

                                                                <Typography variant="caption" className={classes.description}>
                                                                    {item.desc}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={10} md={11}>

                                                                <Typography variant="caption" align="right">
                                                                    {item.createAt}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </ExpansionPanelDetails>
                                                </ExpansionPanel>
                                            )
                                        }
                                    })
                                    : <div><center><hr /><h2 style={{ color: 'lightgray' }}>Empty task list</h2></center></div>
                                }

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

ComingTask.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(data) {
    return {
        data: data.TodoApp.todoList
    }
}

//////////
// "conect" function has 2 parameters first for use of State data from store and second for invoke action function in actions file
// And Export this component with the style.js file
//////////

export default connect(mapStateToProps, { updateToDo })(withStyles(styles)(ComingTask));