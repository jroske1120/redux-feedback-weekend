import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _4Comments extends Component {
  state = {
    Feedback: {
      comments: ''
    }
  }

  handleChange = (event, type) => {
    console.log(event.target.value)
    this.setState({
      Feedback: {
        ...this.state.Feedback,
        [type]: event.target.value
      }

    })
  }

  handleSubmit = () => {
    console.log('in handleSubmit', this.state.Feedback.comments)
    this.props.dispatch({
      type: "ADD_FEEDBACK",
      payload: this.state.Feedback
    })
    this.props.history.push('/review');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4><i>Comments</i></h4>
        </header>
        <input onChange={(event) => this.handleChange(event, 'comments')}
          type="text" placeholder="Any comments you have" />

        <button onClick={this.handleSubmit}>Review</button>
        <Router>
          <button><Link to="/support">Back</Link></button>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_4Comments);
