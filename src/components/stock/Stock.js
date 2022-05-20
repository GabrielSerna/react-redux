import React, { Component } from 'react';
import Grafico from '../Grafico.js';
import '../../css/stock/stock.css'
class Stock extends Component {

  constructor(props) {
    super(props);
    const { symbol, price } = this.props.dati;
    this.state = {
      symbol,
      price,
      datatrade: 'xxxx-xx-xx 16:00:00',
      ckrealtime: '',
      datiGrafico: [{
        datetime: '16:00:00',
        price: price
      }],
      showgrafico: false
    };
    console.log('1f) FIGLIO Creo istanza');
  };

  static getDerivedStateFromProps(np, ps) {
    if (np.dati.symbol !== ps.symbol) {
      return { symbol: np.dati.symbol, price: np.dati.price };
    };
    return null;
  };

  componentDidMount() {
    console.log('3f) FIGLIO DidMount ');
  };

  componentDidUpdate() {
    console.log('4f) FIGLIO Update ');
  };

  // aggiornoStock = () => {
  //   const valore = this.state.valore + 10;
  //   this.setState({ valore });
  // };

  eliminoStock = () => {
    this.props.eliminoStock(this.props.dati.symbol);
  };

  startCheckElemento = () => {
    this.timer = setInterval(() => this.getNewElementi(), 2000)
  };

  stopCheckElemento = () => {
    clearInterval(this.timer);
  }

  // componentWillMount = () => {
  //     clearInterval(this.timer);
  // }

  startRealtime = () => {
    const ckrt = this.state.ckrealtime === 'checked' ? '' : 'checked';
    if (ckrt === 'checked') {
      this.startCheckElemento();
    } else {
      this.stopCheckElemento();
    }
    this.setState({ ckrealtime: ckrt })
  }

  getNewElementi = () => {
    const url = `https://lucioticali.it/nasdaqApi/api/v1/intraday/${this.props.dati.symbol}`;
    fetch(url)
      .then(r => r.json())
      .then(r => {
        const data = r;
        const random = Math.ceil(Math.random() * 10) * (Math.round(Math.random()) ? 1 : 1) / 3;
        const datatrade = new Date().toLocaleTimeString();
        const price = Number(data[0].open + random);
        const datiGrafico = [...this.state.datiGrafico, {datetime: datatrade.substring(11), price: price} ];
        this.setState({ price, datatrade, datiGrafico });
      })
      .catch((error) => {
        console.log('Fetch failed', error)
      });
  };

  showGrafico = () => {
    this.setState({showgrafico: !this.state.showgrafico});
  };

  render() {
    const data = [
      { datetime: '09:00:00', price: 4000 },
      { datetime: '09:01:00', price: 3000 },
      { datetime: '09:02:00', price: 2000 },
      { datetime: '09:03:00', price: 2548 },
      { datetime: '09:04:00', price: 3451 },
      { datetime: '09:05:00', price: 2547 },
      { datetime: '09:06:00', price: 1254 }
    ];

    console.log('2f) FIGLIO Render');
    const diff = (this.state.price - this.props.dati.price).toFixed(2);
    const percentuale = ((diff / this.props.dati.price) * 100).toFixed(1);
    return (
      <div className="stock col-md-6 p-3">
        <div className="bodystock">
          <i className="fas fa-times-circle closebtn" onClick={this.eliminoStock}></i>
          <div className="row">
            <div className="col-sm">
              <h2 className='giallo'>{this.props.dati.symbol}</h2>
              <p>{this.props.dati.symbol}</p>
            </div>
            <div className="col-sm">
              <h2>{this.state.price}</h2>
              <p>{this.state.datatrade.substring(11)}</p>
            </div>
            <div className="col-sm">
              <h2>{diff}</h2>
              <p style={{ color: 'green' }}>{percentuale}%</p>
            </div>
            <div className="col-sm">
              <p><i className='fas fa-chart-line fa-2x' onClick={this.showGrafico}></i></p>
              <label className='bs-switch'>
                <input type="checkbox" checked={this.state.ckrealtime} onChange={this.startRealtime} />
                <span className='slider round'></span>
              </label>
            </div>
          </div>
        </div>
        <div className="bodygrafico">
          <div className="row">
            <div className="col-sm">
              {this.state.showgrafico && <Grafico data={this.state.datiGrafico} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stock