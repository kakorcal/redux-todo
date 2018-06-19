import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

class AppContainer extends Component {
  render() {
    const todosLength = this.props.todos.length;
    const now = new Date();

    return <App todosLength={todosLength} now={now} />;
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

export default connect(mapStateToProps)(AppContainer);
