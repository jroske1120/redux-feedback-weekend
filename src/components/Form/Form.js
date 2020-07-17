import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Form!</i></h4>
        </header>
        <Router>
          <button><Link to="/feeling">Next</Link></button>
        </Router>
              </div>
    );
  }
}

export default Form;
