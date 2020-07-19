import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  header: {
    backgroundColor: '#3f51b5',
    marginBottom: '10px'
  },
  mainTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: '30px'
  },
  phrase: {
    color: '#fff',
    fontStyle: 'italic',
    margin: '15px',
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <AppBar
          className={classes.header} position="static">
          <Typography
            className={classes.mainTitle}
            variant='h2'>
            Feedback!
          </Typography>
          <Typography
            className={classes.phrase}
            variant='h5'>
            <Link to="/feeling">
              Click here to start!
              </Link>
          </Typography>
        </AppBar>
      </Router >
    );
  }
}

export default withStyles(styles)(Header);