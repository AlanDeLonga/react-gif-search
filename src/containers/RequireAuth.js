import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// decorator that checks before the component mounts and if they are not authenticated
// redirects them to the login page.
export default function(WrappedComponent) {
  class Auth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Auth);
}
