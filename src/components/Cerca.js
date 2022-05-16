import React, { Component } from 'react'

class Cerca extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cerca: ''
    };
  };

  onInputChange = e => {
    this.setState({cerca: e.target.value});
    console.log(this.state.cerca);
  };

  render() {
    return (
      <div className='row'>
        <form className='form-inline'>
          <div className='form-group'>
            <input
            type='text'
            name='cerca'
            className='form-control'
            value={this.state.cerca}
            onChange={this.onInputChange}
            placeholder='Cerca...'
            />
          </div>
          <button type='submit' className='btn btn-warning'>Ok</button>
        </form>
      </div>
    )
  }
};

export default Cerca