import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _2Understanding extends Component {

  state = {
    understandingToAdd: {
      understanding: ''
    }
  }

  handleChange = (event, type) => {
    console.log(event.target.value)
    this.setState({
      understandingToAdd: {
        ...this.state.understandingToAdd,
        [type]: event.target.value
      }

    })
  }

  addUnderstanding = (event) => {
    console.log('in addUnderstanding')
    this.props.dispatch({
      type: "ADD_UNDERSTANDING",
      payload: this.state.understandingToAdd
    })
    this.setState({
      understandingToAdd: {
        understanding: '',
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Understanding</i></h4>
        </header>
        <input onChange={(event)=>this.handleChange(event,'understanding')}
        type="number" placeholder="Number from 1-5"/>

        <Router>
          <button onClick={this.addUnderstanding}><Link to="/support">Next</Link></button>
        </Router>      
        </div>
    );
  }
}



const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_2Understanding);