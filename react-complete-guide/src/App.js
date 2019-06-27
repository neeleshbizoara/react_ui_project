import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <h1>Welcome to React</h1>
          <Person name="Max" age="10"/>
          <Person name="Min" age="20"/>
          <Person name="Avg" age="15"/>
      </div>
    );
  }
}

export default App;
