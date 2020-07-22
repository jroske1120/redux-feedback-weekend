import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import '../App/App.css';

class SuccessPage extends Component {
  render() {
    return (
      <div className="App">
        <img id="success" 
        src="https://www.clker.com/cliparts/f/Q/9/7/2/u/success-banner-hi.png"
        alt="Success Banner"
        width="50%"/>
          <br></br>
          <Router>
            <Button variant="contained" 
            size="small" color="primary">
              <Link to="/">
                Take Another Survey!
                </Link>
                </Button>
          </Router>
              </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
          reduxState
        })

export default connect(putReduxStateOnProps)(SuccessPage);