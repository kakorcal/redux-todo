import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // todo: add dates
    const todosLength = this.props.todos.length;
    return <App todosLength={todosLength} />;
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

export default connect(mapStateToProps)(AppContainer);
