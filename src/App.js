import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Verified from './components/Verified';
import WaitingVerification from './components/WaitingVerification';

class App extends Component {
  render() {
    return (
      <div>
        <Header navBrand={'KeseD'} />
          <div>
            <Route exact path="/" component= { Home }/>
            <Route path="/login" component={ Login }/>
            <Route path="/register" component={ Register }/>
            <Route path="/waitingverification" component={ WaitingVerification }/>
            <Route path="/verified" component={ Verified }/>
          </div>
      </div>
    );
  }
}

export default App;
