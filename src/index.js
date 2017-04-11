import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import GifModal from './components/GifModal';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false,
    };
  }

  openModal = (gif) => {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif,
    });
  }

  closeModal = (gif) => {
    this.setState({
      modalIsOpen: false,
      selectedGif: null,
    });
  }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    const self = this;

    request.get(url, function(err, res) {
      // console.log(res.body.data[0]);
      self.setState({ gifs: res.body.data });
    });
  }

  render () {
    return (
      <div className="greeting">
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList  gifs={this.state.gifs}
                  onGifSelect={selectedGif => this.openModal(selectedGif)} />
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
