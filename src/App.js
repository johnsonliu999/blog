import React, { Component } from 'react';
import './App.css';
import Content from './components/Content'

import Navigator from './components/Navigator'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigator/>
          <Content/>
          <Footer/>
      </div>
    );
  }
}

export default App;
