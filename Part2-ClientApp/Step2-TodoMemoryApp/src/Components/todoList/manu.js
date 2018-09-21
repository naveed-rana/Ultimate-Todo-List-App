import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToDo } from '../Redux/actions/DeleteToDoActions';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { styles } from './style'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const ITEM_HEIGHT = 60;

class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
    console.log("props at options file", this.props.row);
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };



  _DeleteHandler = (id) => {
    // console.log('delete id Is: ', id);
    this.props.removeToDo(id);
  }


  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;
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
          <MenuItem className="some" onClick={() => this._DeleteHandler(row.id)}>Delete</MenuItem>
        </Menu>
      </div>
    );
  }
}
OptionsMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(OptionsMenu);

export default connect(null, { removeToDo })(withStyles(styles)(OptionsMenu));