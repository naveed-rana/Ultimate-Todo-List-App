import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import StarIcon from '@material-ui/icons/Star';
// import SendIcon from '@material-ui/icons/Send';
// import MailIcon from '@material-ui/icons/Mail';
// import DeleteIcon from '@material-ui/icons/Delete';
// import ReportIcon from '@material-ui/icons/Report';
// import { Add } from '@material-ui/icons'
// import { Done } from '@material-ui/icons'
import doneIcon from './icon/calendar (2).png';
import commingTask from './icon/calendar (6).png';
import myDayIcon from './icon/calendar (7).png';
import adNewIcon from './icon/calendar (4).png';
import {Link} from "react-router-dom";


export const mailFolderListItems = (
  <div>
      <ListItem button component={Link} to="/todoList">
        <ListItemIcon>
          <img src={myDayIcon} alt="No Icon" />
        </ListItemIcon>
        <ListItemText primary="My Day" />
      </ListItem>
    <ListItem button component={Link} to="/todoComing">
      <ListItemIcon>
        <img src={commingTask} alt="No Icon" />
      </ListItemIcon>
      <ListItemText primary="Comming Tasks" />
    </ListItem>
    <ListItem button component={Link} to="/todoDone">
      <ListItemIcon>
        <img src={doneIcon} alt="No Icon" />
      </ListItemIcon>
      <ListItemText primary="Done Tasks" />
    </ListItem>
    <ListItem button component={Link} to="/AdNewToDo">
      <ListItemIcon>
        <img src={adNewIcon} alt="No Icon" />
      </ListItemIcon>
      <ListItemText primary="Add New Todo" />
    </ListItem>
  </div>
);

