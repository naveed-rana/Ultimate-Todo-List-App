import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToDo } from '../Redux/actions/DeleteToDoActions';

//pop up
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { styles } from './style'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
    }
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  _DeleteHandler = () => {
    this.props.removeToDo(this.props.row.id);
    this.setState({ open: false });
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const row = this.props.row;

    return (
      <div className="some">
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className="some"
        >

          <MoreVertIcon className="some" />
        </IconButton>
        <Menu className="some" id="render-props-menu" anchorEl={anchorEl} open={open} onClose={this.handleClose}>
          <Link to={`/update/${row.id}`}><MenuItem className="some">Edit</MenuItem></Link>
          <MenuItem className="some" onClick={this.handleClickOpen}>Delete</MenuItem>
        </Menu>

        {/* pop up */}

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Confirmations</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Confirmations! after delete your task permanently delete from your list,Are you sure you want to delete?
                            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.close} color="primary">
              Cancel
            </Button>
            <Button onClick={this._DeleteHandler} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        {/* end pop up */}

      </div>
    );
  }
}
OptionsMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

//////////
// "conect" function has 2 parameters first for use of State data from store and second for invoke action function in actions file
// And Export this component with the style.js file
//////////

export default connect(null, { removeToDo })(withStyles(styles)(OptionsMenu));