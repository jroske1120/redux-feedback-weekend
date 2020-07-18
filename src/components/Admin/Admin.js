import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Admin extends Component {

  state = { orders: [] }

  componentDidMount() {
    this.viewFeedback()
  }//end componentDidMoutn

  deleteFeedback = (id) => {
    console.log('in delete', id);
    //Confirmation ask to delete. If ok'd, run delete
    let theyAreSure = window.confirm(
      "Are you sure you want to remove this feedback?"
    );
    if (theyAreSure) {
      axios({
        method: 'DELETE',
        url: `/admin/${id}` 
      }).then((response) => {
        console.log('back from DELETE:', response);
        this.viewFeedback();
      }).catch((error) => {
        console.log(error);
        alert('DELETE no worky werk');
      });
    } else {
      console.log('Reconsidered');
    }
  }

  viewFeedback = () => {
    console.log('in viewFeedback')
    axios.get('/admin')
      .then((response) => {
        console.log(response.data)
        this.setState({ orders: response.data })
      }).catch((err) => {
        console.log('Problem viewing Feedback!', err)
        alert('Try again later!')
      })//end axios GET
  }//end viewFeedback

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Admin Page</i></h4>
        </header>
        <table>
          <thead>
            <tr>
              <th>Flag</th>
              <th>Date</th>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((feedback, i) =>
              <tr key={i}>
                <td><button>Flag</button></td>
                <td>{feedback.date.split("T")[0]}</td>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><button onClick={() => this.deleteFeedback(feedback.id)}>Delete</button></td>
              </tr>)}
          </tbody>
        </table>
        {/* image for success here? */}
        <Router>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(Admin);