import { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <nav className="navebar navbar-default">
        <div classname="container-fluid">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">React2Gifs</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapDispatchToProps)(Header);
