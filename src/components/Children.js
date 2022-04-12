import React, { Component } from 'react'

class Children extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: this.props.years
    };
  
    setInterval(() => {
      this.handleProps();
      console.log(this.state.years);
    }, 3000);
  };

  // handle upd props
  handleProps = () => {
    this.setState((state, props) => ({years: state.years +1}));
  };

  render() {
    // destructuring
    let { nickName } = this.props;

    // return
    return (
        <div>
          <h2>Nome utente: {nickName}</h2>
          <h3>{this.state.years >= 5 ? 'Senior Dev' : 'Junior Dev'}</h3>
          <h5>seniority: {this.state.years}</h5>
      </div>
    )
  }
}


// const  Children = ({nickName, years}) => {

//   setInterval(() => {
//     years++;
//     console.log(years);
//   }, 5000);

//   return (
//     <div>
//       <h2>Nome utente: {nickName}</h2>
//       <h3>{years >= 5 ? 'Senior Dev' : 'Junior Dev'}</h3>
//       <h5>seniority: {years}</h5>
//     </div>
//   )
// }

export default Children
// props = { nickName: 'Capocolo' }