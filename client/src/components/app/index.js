import React from 'react';

import Counter from '../../containers/counter';
import TodoForm from '../../containers/todoForm';
// Functional Components

// Regular components that contain no state. All they do is render HTML aka Dumb Components.
// Stateful components contain state. They have logic inside of them, such as 
  // api request, onClick handlers, and a bunch of other logic
  // We call these "containers"

const App = () => (
  <>
    <Counter/>
    <TodoForm/>
  </>
)

export default App;
