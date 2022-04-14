import logo from './logo.svg';
import './css/App.css';
import Children from './components/Children.js';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Search from './components/search.js';

export class App extends Component {
  // messaggio = (nickName) => {
  //   alert(`Sono ${nickName} e sono un Senior Dev`);
  // };

  invioFormGenitore = (cerca) => {
    alert(`Messaggio dal genitore. Hai cercato ${cerca}`)
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Search name='cerca' onSubmit={this.invioFormGenitore} />
        </header>
      </div>
    );
  };
}

export default App;
