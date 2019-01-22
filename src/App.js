import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Home';
import Login from './components/Login';
import Login from './components/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Header navBrand={'Hokage'} />
          <div>
            <Route exact path="/" component= { Home }/>
            <Route path="/login" component={ Login }/>
            <Route path="/register" component={ Register }/>
          </div>
      </div>
    );
  }
}

export default App;
