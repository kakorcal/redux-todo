import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

class AppContainer extends Component {
  render() {
    const todosLength = Object.keys(this.props.todos).length;
    const loading = this.props.loading;
    const now = new Date();

    return <App todosLength={todosLength} loading={loading} now={now} />;
  }
}

function mapStateToProps({ todos, loading }) {
  return { todos, loading };
}

export default connect(mapStateToProps)(AppContainer);
