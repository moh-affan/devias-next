import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh'
  },
  content: {
    height: '100vh'
  }
}));

const Blank = props => {


  const { children } = props;

  const classes = useStyles();

  console.log(process.env);

  return (
    <PerfectScrollbar>
      <div className={classes.root}>
        <main className={classes.content}>

          {children}
        </main>
      </div>
    </PerfectScrollbar>
  );
};

Blank.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Blank;
