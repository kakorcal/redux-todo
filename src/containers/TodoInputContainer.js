import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from '../components/TodoInput';
import { addTodo } from '../actions/todos';

class TodoInputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ todoText: e.target.value });
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
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewTodo(todoText) {
      return dispatch(addTodo(todoText));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TodoInputContainer);
