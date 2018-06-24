import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { setTodoComplete, deleteTodoItem } from '../actions/todos';

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
    },
    removeTodo(key) {
      return dispatch(deleteTodoItem(key));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
