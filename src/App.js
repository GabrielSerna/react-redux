import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import Stock from './components/stock/Stock.js';
import Cerca from './components/Cerca.js';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { listaStock: [] };
    console.log(`1g) il costruttore crea la prima istanza Genitore`);
  };

  // -------MOUNTING CREAZIONE ----------
  componentDidMount () {
    const stock = [
      {
        nome: 'APPL',
        valore: 200
      },
      {
        nome: 'GOOG',
        valore: 350
      },
    ];
    this.setState({ listaStock: stock });
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
    const stock1 = [
      {
        nome: 'AMZ',
        valore: 500
      },
      {
        nome: 'MICROSOFT',
        valore: 850
      },
    ];
    this.setState({ listaStock: stock1 });
  };

  cercaStock = str => {
    alert(str)
  };

  render() {
    console.log(`2g) Genitore Render`)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Applicazione Stock Exchange - <a href='/#' onClick={this.aggiornoStock}> Top guadagno Aggiorno </a>
          </p>
          <Cerca onInputSearch={this.cercaStock} />
          { this.state.listaStock.map(el => <Stock key={el.nome} dati={el}/>) }
          
        </header>
      </div>
    );
  };
};

export default App