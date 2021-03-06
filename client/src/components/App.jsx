import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './PageComponents/HomePage';
import NavBar   from './HeaderComponent/NavBar';
import Footer   from './FooterComponent/Footer';

/* 
 * This component will also store the routes for the various (React) routes that will be 
 * used to navigate the website. This is where we use React-Router for the website.  
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;