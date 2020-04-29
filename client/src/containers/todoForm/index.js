import React, { Component } from 'react';
import axios from 'axios';
import RenderTodoList from '../../components/renderTodoList'

class TodoForm extends Component {
  state = {
    todos: [],
    todoInput: ''
  }

  handleInputChange = event => {
    this.setState({ todoInput: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/todos', { text: this.state.todoInput });
      const todos = [...this.state.todos, data];
      this.setState({ todos, todoInput: '' });
    } catch (err) {
      console.log(err);
    }
  }

  handleDeleteTodo = async id => {
    try {
      const { data } = await axios.delete(`/api/todos/${id}`);
      this.setState({ todos: data });
    } catch (err) {
      console.log(err);
    }
  }

  handleUpdateTodo = async id => {
    try {
      const { data } = await axios.patch(`/api/todos/${id}`);
      this.setState({ todos: data });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount()  {
    try {
      const { data } = await axios.get('/api/todos');
      this.setState({ todos: data })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <RenderTodoList 
          items={this.state.todos}
          handleDelete={this.handleDeleteTodo}  
          handleUpdate={this.handleUpdateTodo}
        />
        <form>
          <input
            name='todoInput'
            value={this.state.todoInput}
            onChange={this.handleInputChange}
        />
          <button onClick={ (e) => this.handleSubmit(e) }>Add todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;