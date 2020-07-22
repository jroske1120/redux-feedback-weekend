import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import IconButton from '@material-ui/core/IconButton';

class _1Feeling extends Component {


  // handle any change in the answer
  handleChange = (event, type) => {
    this.props.dispatch({
      type: "ADD_FEEDBACK",
      payload: {
          feeling: event.target.value
      }
    })
  }

  handleSubmit = () => {
    // conditional that will only advance to next page
    // if a response is provided
    if (this.props.reduxState.feedbackReducer.feeling === 0) {
      alert('Please select a number!')
    } else {
      this.props.history.push('/understanding');
    }
  }

  render() {
    return (
      <div className="App">
        <FormControl component="fieldset">
          <FormLabel component="legend">
            How are you feeling today?
            </FormLabel>
          <RadioGroup row aria-label="feeling" name="feeling"
            onChange={this.handleChange} 
            value={this.props.reduxState.feedbackReducer.feeling}>
            <FormControlLabel value="1" control={<Radio />}
              labelPlacement="bottom" label="Awful" />
            <FormControlLabel value="2" control={<Radio />}
              labelPlacement="bottom" label="Not good" />
            <FormControlLabel value="3" control={<Radio />}
              labelPlacement="bottom" label="OK" />
            <FormControlLabel value="4" control={<Radio />}
              labelPlacement="bottom" label="Good" />
            <FormControlLabel value="5" control={<Radio />}
              labelPlacement="bottom" label="Great!" />
          </RadioGroup>
        </FormControl>
        <IconButton color="primary"
          onClick={this.handleSubmit}>
          <NavigateNextRoundedIcon fontSize="large" />
        </IconButton>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_1Feeling);
