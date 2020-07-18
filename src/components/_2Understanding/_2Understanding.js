import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _2Understanding extends Component {

  state = {
    Feedback: {
      understanding: ''
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
    if (this.state.Feedback.understanding === "") {
      alert('Please select a number!')
    } else {
      console.log('in handleSubmit', this.state.Feedback.understanding)
      this.props.dispatch({
        type: "ADD_FEEDBACK",
        payload: this.state.Feedback
      })
      this.props.history.push('/support');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4><i>Understanding</i></h4>
        </header>
        <input onChange={(event) => this.handleChange(event, 'understanding')}
          type="number" placeholder="Number from 1-5" />

        <button onClick={this.handleSubmit}>Next</button>
        <Router>
          <button><Link to="/feeling">Back</Link></button>
        </Router>
      </div>
    );
  }
}



const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_2Understanding);