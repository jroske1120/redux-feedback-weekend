import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

class _4Comments extends Component {
  state = {
    Feedback: {
      comments: ''
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
    // No response ok, don't need conditional
    console.log('in handleSubmit', this.state.Feedback.comments)
    // sends response to feedbackReducer
    this.props.dispatch({
      type: "ADD_FEEDBACK",
      payload: this.state.Feedback
    })
    this.props.history.push('/review');
  }

  render() {
    return (
      <div className="App">
        <h4><i>Any comments you want to leave?</i></h4>
        <Router>
          <IconButton >
            <Link to="/support">
              <NavigateBeforeRoundedIcon
                fontSize="large"
                color="primary" />
            </Link>
          </IconButton>
        </Router>
        <TextField
          id="filled-multiline-static"
          label="Comment"
          multiline
          rows={4}
          onChange={(event) => this.handleChange(event, 'comments')}
          variant="filled"
        />
        <IconButton
          onClick={this.handleSubmit}>
          <NavigateNextRoundedIcon
            color="primary"
            fontSize="large" />
        </IconButton>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_4Comments);
