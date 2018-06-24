import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { setTodoComplete, deleteTodoItem } from '../actions/todos';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    // how to manipulate react dom https://reactjs.org/docs/refs-and-the-dom.html
    // beware that you can't pass refs into stateless functional components
    this.listContainerRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    // scroll to bottom if user adds todo
    if (Object.keys(this.props.todos).length > Object.keys(prevProps.todos).length) {
      let listContainer = this.listContainerRef.current.children[0];
      listContainer.scrollTo(0, listContainer.scrollHeight);
    }
  }

  render() {
    return (
      <div ref={this.listContainerRef} className="TodoList__container">
        <TodoList {...this.props} />
      </div>
    );
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
