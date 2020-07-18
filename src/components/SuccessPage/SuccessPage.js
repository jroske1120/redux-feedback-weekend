import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SuccessPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Success!</i></h4>
        </header>

        {/* image for success here? */}
        <Router>
          <button><Link to="/feeling">Take Another Survey!</Link></button>
        </Router>
              </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(SuccessPage);