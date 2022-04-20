import React, { Component } from 'react';
import '../../css/stock/stock.css'
class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {nome: this.props.nome, valore: this.props.valore };
        console.log('1f) FIGLIO Creo istanza');
    };

    static getDerivedStateFromProps(np, ps) {
      console.log('1fa) FIGLIO check props');
      return null;
    }

    componentDidMount() {
        console.log('3f) FIGLIO DidMount ');
    }

    componentDidUpdate() {
        console.log('4f) FIGLIO Update ');
    }

    aggiornoStock = () => {
        this.setState({ valore: 300 })
    }

    render() {
        console.log('2f) FIGLIO Render');
        return (
            <div className="stock">
                <div className="row">
                    <div className="col">
                        <h2>{this.props.nome}</h2>
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