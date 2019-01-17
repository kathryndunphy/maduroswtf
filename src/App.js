import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
     return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <p>This is a start!</p>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null,  'I\'m a React App!!! Fuck yo couch!!!'))
   }
}
export default App;
