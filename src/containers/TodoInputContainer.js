import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from '../components/TodoInput';
import { createTodo } from '../actions/todos';

class TodoInputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ todoText: e.target.value });
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 && this.state.todoText !== '') {
      this.props.addNewTodo(this.state.todoText);
      this.setState({ todoText: '' });
    }
  }

  handleSubmit(e) {
    if (this.state.todoText !== '') {
      this.props.addNewTodo(this.state.todoText);
      this.setState({ todoText: '' });
    }
  }

  render() {
    return (
      <TodoInput
        todoText={this.state.todoText}
        handleKeyUp={this.handleKeyUp}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewTodo(todoText) {
      return dispatch(createTodo(todoText));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TodoInputContainer);
