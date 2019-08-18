import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const minQueryLen = 3;

const UserList = () => {
  const classes = useStyles();

  const [users, setUsers] = useState(mockData);

  const _onSearchChanged = (newText) => {
    if (newText.length >= minQueryLen) {
      let newUser = mockData.filter(function (u) {
        return (JSON.stringify(u).toLowerCase().includes(newText.toLowerCase()))
      });
      setUsers(newUser);
    }
    if (newText === "")
      setUsers(mockData);
  }

  return (
    <div className={classes.root}>
      <UsersToolbar onSearchChanged={_onSearchChanged} />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default UserList;
