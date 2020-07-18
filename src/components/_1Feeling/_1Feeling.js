import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _1Feeling extends Component {

  state = {
    Feedback: {
      feeling: ''
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
    if (this.state.Feedback.feeling === "") {
      alert('Please select a number!')
    } else {
      console.log('in handleSubmit', this.state.Feedback.feeling)
      this.props.dispatch({
        type: "ADD_FEEDBACK",
        payload: this.state.Feedback
      })
      this.props.history.push('/understanding');
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4><i>Feeling</i></h4>

        </header>
        <input onChange={(event) => this.handleChange(event, 'feeling')}
          type="number" placeholder="Number from 1-5" />
        <Router>
          <button onClick={this.handleSubmit}>Next</button>
        </Router>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_1Feeling);
