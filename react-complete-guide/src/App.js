import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <h1>Welcome to React</h1>
          <Person name="Max" age="10">We can use any thing instated 'props' in function here i have used properties</Person>
          <Person name="Min" age="20">children is a reserve keyword which is default</Person>
          <Person name="Avg" age="15">Read Note section for more info.</Person>

          <div className="PersonFullWidth">
          <h3>Note:</h3>
          children is a reserved word, we didn't pass anything as children on our persons, we only pass name and
          age. <br></br>Children refers to any elements
          
          and this includes plain text as we have it here between the opening and closing tag of our component,
          
          and you could nest complex hmtl code in-between too. <br></br>
          
          This doesn't have to be just text, could be unordered list with multiple list items, could be other react
          
          components, anything can go between here. 
          <br></br>
          And these children are now output with this syntax,
          
          of course you don't have to wrap it in a paragraph, you can use it anywhere in your jsx code,</div>
      </div>
    );
  }
}

export default App;
