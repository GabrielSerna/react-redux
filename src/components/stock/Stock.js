import React, { Component } from 'react';
import '../../css/stock/stock.css'
class Stock extends Component {

  constructor(props) {
    super(props);
    const { nome, valore } = this.props.dati;
    this.state = { nome, valore };
    console.log('1f) FIGLIO Creo istanza');
  };

  static getDerivedStateFromProps(np, ps) {
    if (np.dati.nome !== ps.nome) {
      return { nome: np.dati.nome, valore: np.dati.valore };
    };
    return null;
  };

  componentDidMount() {
    console.log('3f) FIGLIO DidMount ');
  };

  componentDidUpdate() {
    console.log('4f) FIGLIO Update ');
  };

  aggiornoStock = () => {
    const valore = this.state.valore + 10;
    this.setState({ valore });
  };

  render() {
    console.log('2f) FIGLIO Render');
    return (
      <div className="stock">
        <div className="row">
          <div className="col">
            <h2>{this.props.dati.nome}</h2>
            <p>Nasdaq</p>
          </div>
          <div className="col">
            <h2>{this.state.valore}</h2>
            <p>orario</p>
          </div>
          <div className="col">
            <h2>DIFF</h2>
            <p>percentuale</p>
          </div>
          <div className="col">
            <h2 onClick={this.aggiornoStock}><i className="fas fa-sync-alt fa-2x"></i></h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Stock