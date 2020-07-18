import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _5Review extends Component {

  handleSubmit = (event) => {
    const feedback = this.props.reduxState.feedbackReducer;
    const feedbackToPost = {
      feeling: feedback.feeling,
      understanding: feedback.understanding,
      support: feedback.support,
      comment: feedback.comment,
    }//end customerr
    console.log('LOOK HERE, CUSTOMER POST:', feedbackToPost)
    axios({
      method: 'POST',
      url: '/feedback',
      data: feedbackToPost
    })
      .then((response) => {
        console.log('THIS IS FROM OUR POST:', response);
        alert('Submission success!')
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log('Error adding customer', error);
      })//end axios
  }//end handleCheckout

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

        <button onClick={this.handleSubmit}>Submit</button>
        <Router>
          <button><Link to="/comment">Back</Link></button>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_5Review);
