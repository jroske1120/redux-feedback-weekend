import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Header from '../Header/Header';

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
        <FormControl component="fieldset">
          <FormLabel component="legend">How are you feeling today?</FormLabel>
          <RadioGroup row aria-label="feeling" name="feeling" onChange={(event) => this.handleChange(event, 'feeling')}>
            <FormControlLabel value="1" control={<Radio />} labelPlacement="top" label="1" />
            <FormControlLabel value="2" control={<Radio />} labelPlacement="top" label="2" />
            <FormControlLabel value="3" control={<Radio />} labelPlacement="top" label="3" />
            <FormControlLabel value="4" control={<Radio />} labelPlacement="top" label="4" />
            <FormControlLabel value="5" control={<Radio />} labelPlacement="top" label="5" />
          </RadioGroup>
        </FormControl>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_1Feeling);
