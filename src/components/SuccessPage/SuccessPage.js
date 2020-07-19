import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import '../App/App.css';

class SuccessPage extends Component {
  render() {
    return (
      <div className="App">
        <img id="success" src="https://lh3.googleusercontent.com/proxy/N_hsQzbsPL9c7QEfw1DlFV_RZMl-VnKzGfNRHdfLENqNoahtELN97Xxm9CiKRZfJsoFEO7nK6f5pWJxA0EV77jtd8GCRMdQY"
        width="50%"/>
          <br></br>
          <Router>
            <Button variant="contained" 
            size="small" color="primary">
              <Link to="/feeling">
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