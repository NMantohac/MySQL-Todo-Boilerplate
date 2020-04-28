import React, { Component } from 'react';

import Counter from './counter';
import TodoForm from './todoForm';
// Functional Components

// Regular components that contain no state. All they do is render HTML aka Dumb Components.
// Stateful components contain state. They have logic inside of them, such as 
  // api request, onClick handlers, and a bunch of other logic
  // We call these "containers"

class App extends Component {
  render() {
    return (
      <>
        <Counter/>
        <TodoForm/>
      </>  
    );
  }
}

export default App;
