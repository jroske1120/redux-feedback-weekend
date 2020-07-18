import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _5Review extends Component {

  reducer = this.props.reduxState;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Review</i></h4>
        </header>
        
              <h2>Your Feeling: {this.props.reduxState.feedbackReducer.feeling}</h2>
              <h2>Your Understanding: {this.props.reduxState.feedbackReducer.understanding}</h2>
              <h2>Your Support: {this.props.reduxState.feedbackReducer.support}</h2>
              <h2>Your Comment: {this.props.reduxState.feedbackReducer.comment}</h2>

        <Router>
          <button><Link to="/">Submit</Link></button>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_5Review);
