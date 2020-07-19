import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Admin.css';
import IconButton from '@material-ui/core/IconButton';
import FlagRounded from '@material-ui/icons/FlagRounded';
import DeleteIcon from '@material-ui/icons/Delete';
class Admin extends Component {

  // puts feedback results into an array to send to server
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
        // recalls the data, showing delete changes
        this.viewFeedback();
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log('Reconsidered');
    }
  }//end delete

  flagFeedback = (id) => {
    console.log('in flagFeedback');
    axios({
      method: 'PUT',
      url: `/admin/${id}`
    }).then((response) => {
      console.log('back from PUT:', response);
      // recalls the data, showing flagged changes
      this.viewFeedback();
    }).catch((error) => {
      console.log(error);
    })
  } //end flag

  viewFeedback = () => {
    console.log('in viewFeedback')
    axios.get('/admin')
      .then((response) => {
        console.log(response.data)
        this.setState({ orders: response.data })
        // crams the data into the array
      }).catch((err) => {
        console.log('Problem viewing Feedback!', err)
      })//end axios GET
  }//end viewFeedback

  render() {
    return (
      <div className="App">
        <h1>Admin Page</h1>
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
                    onClick={() => this.deleteFeedback(feedback.id)}><DeleteIcon /></IconButton></td>
                </tr>)}
              {/* Delete icon calls delete request*/}
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