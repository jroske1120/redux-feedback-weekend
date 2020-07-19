import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Admin.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FlagRounded from '@material-ui/icons/FlagRounded';
import DeleteIcon from '@material-ui/icons/Delete';
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

  flagFeedback = (id) => {
    console.log('in flagFeedback');
    axios({
      method: 'PUT',
      url: `/admin/${id}`
    }).then((response) => {
      console.log('back from PUT:', response);
      this.viewFeedback();
    }).catch((error) => {
      console.log(error);
      alert('Put no worky werk');
    })
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
        <h2><i>Admin Page</i></h2>
        <section>
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
            {/* Ternary operator to display Flag
                  Button if not already flagged */}

            {this.state.orders.map((feedback, i) =>
              <tr key={i}>
                {!feedback.flagged ?
                  <td>
                    <FlagRounded
                      cursor="pointer"
                      color="primary"
                      aria-label="flag feedback"
                      onClick={() =>
                        this.flagFeedback(feedback.id)} />
                  </td>
                  : <td>
                    <FlagRounded color="secondary" />
                  </td>}
                <td>{feedback.date.split("T")[0]}</td>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td className="leftAlign">{feedback.comments}</td>
                <td><IconButton variant="contained" size="small" color="secondary"
                  onClick={() => this.deleteFeedback(feedback.id)}><DeleteIcon/></IconButton></td>
              </tr>)}
          </tbody>
        </table>
        </section>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(Admin);