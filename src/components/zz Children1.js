import React, { Component } from 'react'

class Children extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: this.props.years
    };
  
  };
  
  time = () => {    
    setInterval(() => {
      this.handleProps();
      console.log(this.state.years);
    }, 2000);
  };

  // handle upd props
  handleProps = () => {
    this.setState((state, props) => ({years: state.years +1}));
    if (this.state.years <= 5) {
      if (this.state.years === 5) {
        this.props.seniorDev(this.props.nickName)
      }
    }
  };

  show = (e) => {
    console.log(e.pageX, e.pageY);
    alert(`Hai cliccato su ${this.props.nickName}`);
  };

  render() {
    // destructuring
    let { nickName } = this.props;

    // return
    return (
        <div>
          <i className="fa-brands fa-react"></i>
          <h2 onClick={this.show}>Nome utente: {nickName}</h2>
          <h3>{this.state.years >= 5 ? 'Senior Dev' : 'Junior Dev'}</h3>
          <h5>seniority: {this.state.years}</h5>
          <button className='btn btn-primary' onClick={this.time}>Avvia conteggio</button>
      </div>
    )
  }
}

export default Children
// props = { nickName: 'Capocolo' }