import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuList from '@material-ui/core/MenuList';
import { styles } from './style'
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const ITEM_HEIGHT = 60;

class OptionsMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;

    return (
      <div className="some">
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className= "some"
          
        >

          <MoreVertIcon className="some" />
        </IconButton>
 <Menu className="some" id="render-props-menu" anchorEl={anchorEl} open={open} onClose={this.handleClose}>
              <MenuItem className="some" onClick={this.handleClose}>Edit</MenuItem>
              <MenuItem className="some" onClick={this.handleClose}>Delete</MenuItem>
            </Menu>
      </div>
    );
  }
}
OptionsMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionsMenu);