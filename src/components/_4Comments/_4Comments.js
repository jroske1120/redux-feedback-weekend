import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import TextField from '@material-ui/core/TextField';

class _4Comments extends Component {
  state = {
    Feedback: {
      comments: ''
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
    console.log('in handleSubmit', this.state.Feedback.comments)
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
          <button><Link to="/support">Back</Link></button>
        </Router>
        <TextField
          id="filled-multiline-static"
          label="Comment"
          multiline
          rows={4}
          onChange={(event) => this.handleChange(event, 'comments')}
          variant="filled"
        />
        <button onClick={this.handleSubmit}>Review</button>

      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_4Comments);
