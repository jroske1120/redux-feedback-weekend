import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _4Comments extends Component {
  state = {
    Feedback: {
      comment: ''
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
    if (this.state.Feedback.comment === ""){
      alert('Please leave a comment!')
    } else{
    console.log('in handleSubmit', this.state.Feedback.comment)
    this.props.dispatch({
      type: "ADD_FEEDBACK",
      payload: this.state.Feedback
    })
    this.props.history.push('/review');
  }}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Comments</i></h4>
        </header>
        <input onChange={(event) => this.handleChange(event, 'comment')}
          type="text" placeholder="Any comments you have" />

          <button onClick={this.handleSubmit}>Review</button>

      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_4Comments);
