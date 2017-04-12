import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// decorator that checks before the component mounts and if they are not authenticated
// redirects them to the login page. Now also checks to see if firebase stored a user
// using session storage, if so it will be checked so don't automatically redirect.
export default function(WrappedComponent) {
  class Auth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        let hasLocalStorageUser = false;

        for(let key in localStorage) {
          if(key.startsWith("firebase:authUser:")){
            hasLocalStorageUser = true;
          }
        }

        if (!hasLocalStorageUser) {
          browserHistory.push('/login');
        }
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
