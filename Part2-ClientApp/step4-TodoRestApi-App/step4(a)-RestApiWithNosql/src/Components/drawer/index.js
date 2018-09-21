import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { mailFolderListItems } from './tileData';
import { styles } from "./style";
import Button from '@material-ui/core/Button';
import userIcon from './icon/SignIcon.png'


//  This component will show a temporary Drawer on mobile screen

class DrawerComponent extends React.Component {
  state = {
    left: false,
    anchor: 'left',
  };

  // Toggler function that opens the Drawer on click
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  render() {
    const { classes } = this.props;

    // inner elements to show in drawer
    const sideList = (
      <div>
        <div align="center" className={classes.usrIcon}>
          <img src={userIcon} className={classes.user} alt="No Icon" />
        </div>
        <Divider />
        <div className={classes.list}>

          {/* Import a list of elements from "tileData.js" and shows here */}
          <List>{mailFolderListItems}</List>

        </div>
      </div>
    );



    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)} className={classes.btn} ><MenuIcon /></Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DrawerComponent);
