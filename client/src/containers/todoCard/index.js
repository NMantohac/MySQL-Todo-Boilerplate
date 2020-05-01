import React, { Component } from 'react';
import axios from 'axios';

class TodoCard extends Component {
  state = {
    todo: {
      text: '',
      completed: '',
      id: ''
    },
    inputText: '',
  }

  handleInputChange = event => {
    this.setState({ inputText: event.target.value });
  }

  handleUpdateText = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.patch(`/api/todos/${this.props.match.params.todoId}/updatetext`, { text: this.state.inputText});
      this.setState({ todo: data, inputText: '' });
    } catch (err) {
      console.log(err);
    }
  }

  handleDelete = async (event) => {
    try {
      await axios.delete(`/api/todos/${this.props.match.params.todoId}`);
      this.props.history.push('/todos');
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/todos/${this.props.match.params.todoId}`);
      this.setState({ todo: data })
    } catch (err) {
      console.log(err);
    }
  } 

  render() {
    console.log(this.props);
    return (
      <div>
        <p>ID: {this.state.todo.id}</p>
        <p>Text: {this.state.todo.text}</p>
        <p>Completed: {this.state.todo.completed ? 'true' : 'false'}</p>
        <button onClick={this.props.history.goBack}>Go Back</button>
        <form>
          <input
              name='inputText'
              value={this.state.inputText}
              onChange={this.handleInputChange}
          />
          <button onClick={ (e) => this.handleUpdateText(e) }>Update Text</button>
        </form>
        <button onClick={ (e) => this.handleDelete(e) }>Delete</button>
      </div>
    )
  }
}

export default TodoCard;