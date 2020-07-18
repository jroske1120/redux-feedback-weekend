import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _5Review extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Review</i></h4>
        </header>
        <table>
          <thead>
            <tr>
              <th>-Your Feeling-</th>
              <th>-Your Understanding-</th>
              <th>-Your Support-</th>
              <th>-Your Comment-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  {this.props.reduxState.feedbackReducer.feeling}
                </td>
                <td>
                  {this.props.reduxState.feedbackReducer.understanding}
                </td>
                <td>
                  {this.props.reduxState.feedbackReducer.support}
                </td>
                <td>
                  {this.props.reduxState.feedbackReducer.comment}
                </td>
              </tr>
          </tbody>
        </table>
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
