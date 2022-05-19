import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import Stock from './components/stock/Stock.js';
import Cerca from './components/Cerca.js';
import NomeStock from './components/NomeStock.js';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listaelementi: [],
      listapreferiti: []
    }
    console.log(`1g) il costruttore crea la prima istanza Genitore`);
  };

  // -------MOUNTING CREAZIONE ----------
  componentDidMount() {
    // const stock = [
    //   {
    //     nome: 'APPL',
    //     valore: 200
    //   },
    //   {
    //     nome: 'GOOG',
    //     valore: 350
    //   },
    // ];
    // this.setState({ listaStock: stock });
  };

  // --------UPDATE AGGIORNAMENTO--------

  // static getDerivedStateFromProps(np,ns) {
  //   return null
  // };

  // componentDidUpdate() {
  //   console.log(`4g) DidUpdate padre ${this.state.nome}`)
  // };

  // aggiornoStock = (e) => {
  //   e.preventDefault()
  //   const stock1 = [
  //     {
  //       nome: 'AMZ',
  //       valore: 500
  //     },
  //     {
  //       nome: 'MICROSOFT',
  //       valore: 850
  //     },
  //   ];
  //   this.setState({ listaStock: stock1 });
  // };

  cercaElementi = str => {
    // alert(`Stai cercando ${str}`);
    this.getElementi(str);
  };

  getElementi = str => {
    const url = `http://api.marketstack.com/v1/eod?access_key=f03cd42f1aeb2bfaa0f1f222c9da1c3a&symbols=${str}&limit=5`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const { data } = res;
        this.setState({ listaelementi: data })
        console.log(`Recupero dati ${JSON.stringify(res)}`)
      })
      .catch((error) => {
        console.log(`Fetch failed`, error)
      })
  };

  render() {
    console.log(`2g) Genitore Render`)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: 'gold' }}>
            Applicazione Stock Exchange
          </p>
          <Cerca onInputSearch={this.cercaElementi} />
          <div className="container">
            <section className="listanomi">
              <div className="row">
                <div className="col">
                  {this.state.listaelementi.map((el, idx)=> <NomeStock key={idx} dati={el} />)}
                </div>
              </div>
            </section>
            <section className="listapreferiti">
              <div className="row">
                <div className="col">
                  {this.state.listapreferiti.map((el, idx) => <Stock key={idx} dati={el} />)}
                </div>
              </div>
            </section>
          </div>
        </header>
      </div>
    )
  }
}

export default App