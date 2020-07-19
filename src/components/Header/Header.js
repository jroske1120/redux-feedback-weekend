import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  header: {
    backgroundColor: '#485167',
    marginBottom: '100px'
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
      <AppBar className={classes.header} position="static">
        <Typography className={classes.mainTitle} variant='h2'>Feedback!</Typography>
        <Typography className={classes.phrase} variant='h5'>Don't forget it...</Typography>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);