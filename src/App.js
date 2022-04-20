import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import Stock from './components/stock/Stock.js';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nome: 'GOOGLE', valore: 300 };
    console.log(`1g) il costruttore crea la prima istanza Genitore`);
  };

  // -------MOUNTING CREAZIONE ----------
  componentDidMount () {
    console.log(`3g) Genitore didMount`)
  };

  // --------UPDATE AGGIORNAMENTO--------

  // static getDerivedStateFromProps(np,ns) {
  //   return null
  // };

  // componentDidUpdate() {
  //   console.log(`4g) DidUpdate padre ${this.state.nome}`)
  // };
aggiornoStock = (e) => {
  e.preventDefault()
  this.setState({ nome: 'AMAZON' });
};
  render() {
    console.log(`2g) Genitore Render`)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Applicazione Stock Exchange - <a href='/#' onClick={this.aggiornoStock}> Aggiorno </a>
          </p>
          <Stock nome={this.state.nome} valore={this.state.valore}/>
        </header>
      </div>
    );
  };
};

export default App