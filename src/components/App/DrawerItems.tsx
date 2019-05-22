import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

export const mainDrawerItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary='ホーム' />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button disabled>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary='設定' />
    </ListItem>

    <ListItem button disabled>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='リリースノート' />
    </ListItem>

    <ListItem button disabled>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary='ヘルプ' />
    </ListItem>
  </div>
);
