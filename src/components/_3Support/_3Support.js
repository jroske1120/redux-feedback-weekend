import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _3Support extends Component {

  state = {
    Feedback: {
      support: ''
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
    if (this.state.Feedback.support === "") {
      alert('Please select a number!')
    } else {
      console.log('in handleSubmit', this.state.Feedback.support)
      this.props.dispatch({
        type: "ADD_FEEDBACK",
        payload: this.state.Feedback
      })
      this.props.history.push('/comment');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Support</i></h4>
        </header>
        <input onChange={(event) => this.handleChange(event, 'support')}
          type="number" placeholder="Number from 1-5" />

        <button onClick={this.handleSubmit}>Next</button>
        <Router>
          <button><Link to="/understanding">Back</Link></button>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_3Support);
