import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

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
        <Router>
          <Button variant="contained" size="small" color="primary">
            <Link to="/feeling">Back</Link>
          </Button>
        </Router>
        <FormControl component="fieldset">
          <FormLabel component="legend">How well are you understanding the content?</FormLabel>
          <RadioGroup row aria-label="understanding" name="understanding" onChange={(event) => this.handleChange(event, 'understanding')}>
            <FormControlLabel value="1" control={<Radio />}
              labelPlacement="bottom" label="Not at all" />
            <FormControlLabel value="2" control={<Radio />}
              labelPlacement="bottom" label="Not well" />
            <FormControlLabel value="3" control={<Radio />}
              labelPlacement="bottom" label="OK" />
            <FormControlLabel value="4" control={<Radio />}
              labelPlacement="bottom" label="Good" />
            <FormControlLabel value="5" control={<Radio />}
              labelPlacement="bottom" label="Great!" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" size="small" color="primary"
          onClick={this.handleSubmit}>Next</Button>
      </div>
    );
  }
}



const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_2Understanding);