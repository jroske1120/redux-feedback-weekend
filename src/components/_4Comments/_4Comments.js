import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class _4Comments extends Component {
  state = {
    commentToAdd: {
      comment: ''
    }
  }

  handleChange = (event, type) => {
    console.log(event.target.value)
    this.setState({
      commentToAdd: {
        ...this.state.commentToAdd,
        [type]: event.target.value
      }

    })
  }

  addComment = (event) => {
    console.log('in addComment')
    this.props.dispatch({
      type: "ADD_COMMENT",
      payload: this.state.commentToAdd
    })
    this.setState({
      commentToAdd: {
        comment: '',
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Comments</i></h4>
        </header>
        <input onChange={(event) => this.handleChange(event, 'comment')}
          type="text" placeholder="Any comments you have" />

        <Router>
          <button onClick={this.addComment}><Link to="/review">Review</Link></button>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_4Comments);
