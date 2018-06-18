import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodoComplete } from '../actions/todos';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTogoStatus(todo) {
      return dispatch(toggleTodoComplete(todo));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
