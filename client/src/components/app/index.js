import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Counter from '../../containers/counter';
import TodoForm from '../../containers/todoForm';
import Navbar from '../navbar'
import TodoCard from '../../containers/todoCard'
// Functional Components

// Regular components that contain no state. All they do is render HTML aka Dumb Components.
// Stateful components contain state. They have logic inside of them, such as 
  // api request, onClick handlers, and a bunch of other logic
  // We call these "containers"

const App = () => (
  <Router>
    <Navbar/>
    <Route exact path='/' component={TodoForm}/>
    <Route exact path='/counter' component={Counter}/>
    <Route exact path='/todos' component={TodoForm}/>
    <Route exact path='/todos/:todoId' component={TodoCard}/>
  </Router>
)

export default App;
