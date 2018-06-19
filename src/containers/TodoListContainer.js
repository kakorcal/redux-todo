import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { setTodoComplete } from '../actions/todos';

class TodoListContainer extends Component {
  render() {
    return <TodoList {...this.props} />;
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodoStatus(todo, key) {
      return dispatch(setTodoComplete(todo, key));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
