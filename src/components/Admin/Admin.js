import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Admin extends Component {

  state = { orders: [] }

  componentDidMount() {
    this.viewFeedback()
  }//end componentDidMoutn

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
              <th>Date</th>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((feedback, i) =>
              <tr key={i}>
                <td>{feedback.date.split("T")[0]}</td>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
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