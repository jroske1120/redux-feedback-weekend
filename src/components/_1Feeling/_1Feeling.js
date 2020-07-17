import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _1Feeling extends Component {

  state = {
    feelingToAdd: {
      feeling: ''
    }
  }

  handleChange = (event, type) => {
    console.log(event.target.value)
    this.setState({
      feelingToAdd: {
        ...this.state.feelingToAdd,
        [type]: event.target.value
      }

    })
  }

  addFeeling = (event) => {
    console.log('in addFeeling', event)
    this.props.dispatch({
      type: "ADD_FEELING",
      payload: this.state.feelingToAdd
    })
    this.setState({
      feelingToAdd: {
        feeling: '',
      }
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Feeling</i></h4>
        </header>
        <input onChange={(event)=>this.handleChange(event,'feeling')}
        type="number" placeholder="Number from 1-5" />
        <Router>
          <button onClick={this.addFeeling}><Link to="/understanding">Next</Link></button>
        </Router>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_1Feeling);
