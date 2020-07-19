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

  state = {
    Feedback: {
      feeling: ''
    }
  }

  // handle any change in the answer
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
    // conditional that will only advance to next page
    // if a response is provided
    if (this.state.Feedback.feeling === "") {
      alert('Please select a number!')
    } else {
      console.log('in handleSubmit', this.state.Feedback.feeling)
      // sends response to feedbackReducer
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
          <FormLabel component="legend">
            How are you feeling today?
            </FormLabel>
          <RadioGroup row aria-label="feeling" name="feeling"
            onChange={(event) => this.handleChange(event, 'feeling')}>
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
        <IconButton size="large" color="primary"
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
