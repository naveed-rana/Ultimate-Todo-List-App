import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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

