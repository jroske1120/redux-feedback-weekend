import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { HashRouter as Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class _5Review extends Component {

  handleSubmit = (event) => {
    const feedback = this.props.reduxState.feedbackReducer;
    const feedbackToPost = {
      feeling: feedback.feeling,
      understanding: feedback.understanding,
      support: feedback.support,
      comments: feedback.comments,
    }//end customerr
    console.log('LOOK HERE, CUSTOMER POST:', feedbackToPost)
    axios({
      method: 'POST',
      url: '/feedback',
      data: feedbackToPost
    })
      .then((response) => {
        console.log('THIS IS FROM OUR POST:', response);
        this.props.history.push('/success');
      })
      .catch((error) => {
        console.log('Error adding customer', error);
      })//end axios
  }//end handleCheckout

  render() {
    return (
      <div className="App">
      <section>  
      <table>
          <thead>
            <tr>
              <th>Your Feeling</th>
              <th>Your Understanding</th>
              <th>Your Support</th>
              <th>Your Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.reduxState.feedbackReducer.feeling}
              </td>
              <td>
                {this.props.reduxState.feedbackReducer.understanding}
              </td>
              <td>
                {this.props.reduxState.feedbackReducer.support}
              </td>
              <td className="leftAlign">
                {this.props.reduxState.feedbackReducer.comments}
              </td>
            </tr>
          </tbody>
        </table>
        </section>
        <Button variant="contained" size="small" color="primary">
        <Link to="/comment">Back</Link>
        </Button>
        <span className="space-span"></span>
        <Button variant="contained" size="small" color="primary"
         onClick={this.handleSubmit}>Submit</Button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(_5Review);
