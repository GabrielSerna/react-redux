import React, { Component } from 'react'

class Children extends Component {

  constructor(props) {
    super(props);

    this.state = { name: this.props.name, value: this.props.value };
    console.log(`1F) FIGLIO creo istanza`);
  };

  // static getDerivedStateFromProps(np, ns) {
  //   console.log(`1Fa) FIGLIO check props`);
  //   return null;
  // };

  componentDidMount() {
    console.log(`3f) FIGLIO didMount`);
  };

  componentDidUpdate() {
    console.log(`4f) FIGLIO DidUpdate`);
  };

  aggiornoStock = () => {
    this.state({ value: 300 });
  };

  render() {
    console.log('2f) FIGLIO Render');
    return (
      <div className="">
        <div className="row mytube">
          <div className="col-md-4">
            <h2>{this.props.nome}</h2>
            <p>MyTube</p>
          </div>
          <div className="col-md-4">
            <h2>{this.state.risultato}</h2>
            <p>Video</p>
          </div>
          <div className="col-md-4">
            <h2 onClick={this.aggiornoLista}><i className="fas fa-sync-alt"></i></h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Children