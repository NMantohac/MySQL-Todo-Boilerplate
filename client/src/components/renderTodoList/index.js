import React from 'react';

const renderTodoList = props => {
  const renderTodoListItems = () => {
    if (props.items.length === 0) {
      return <h1>No todos yet</h1>
    } else {
      return props.items.map(todo => {
        return (
          <div key={todo.id}>
            <li style={{ color: todo.completed ? 'blue' : 'red'}}>{todo.text}</li>
            <button onClick={() => props.handleDelete(todo.id)}>Delete</button>
            <button onClick={() => props.handleUpdate(todo.id)}>Update</button>
          </div>
        )
      })
    };
  };

  return(
    <ul>
      { renderTodoListItems() }
    </ul>
  );
};

export default renderTodoList;