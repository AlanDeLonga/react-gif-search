import React, { Component } from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
       <GifsTemp gifs={ this.props.gifs } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

export default connect(mapStateToProps)(App);
