import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodoComplete } from '../actions/todos';

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
    toggleTodoStatus(id) {
      return dispatch(toggleTodoComplete(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
