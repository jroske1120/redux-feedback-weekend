import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SuccessPage from '../SuccessPage/SuccessPage';
import _1Feeling from '../_1Feeling/_1Feeling';
import _2Understanding from '../_2Understanding/_2Understanding';
import _3Support from '../_3Support/_3Support';
import _4Comments from '../_4Comments/_4Comments';
import _5Review from '../_5Review/_5Review';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>

        <Router>
        <Link to="/feeling">Start your Feedback</Link>

          {/* <Route exact path="/form" component={Form} /> */}
          <Route exact path="/feeling" component={_1Feeling} />
          <Route exact path="/understanding" component={_2Understanding} />
          <Route exact path="/support" component={_3Support} />
          <Route exact path="/comment" component={_4Comments} />
          <Route exact path="/review" component={_5Review} />
          <Route exact path="/success" component={SuccessPage} />
        </Router>
      </div>
    );
  }
}

export default App;
