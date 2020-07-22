import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';

class _4Comments extends Component {
 
  // handle any change in the answer
 handleChange = (event, type) => {
  this.props.dispatch({
    type: "ADD_FEEDBACK",
    payload: {
        comments: event.target.value
    }
  })
}

handleSubmit = () => {
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
          onChange={this.handleChange} 
          value={this.props.reduxState.feedbackReducer.comments}
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
