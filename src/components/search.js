import React, { Component } from 'react'

export class search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cerca: this.props.name,
      note: ''
    };
  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
  };


  render() {
    return (
      <div>
        <form className='form-inline'>
          <div className='form-group mx-sm-3 mb-2'>
            <input type='text' className='form-control' name='cerca' value={this.state.cerca} onChange={this.onChange} />
            <textarea className='form-control' name='note' id='' cols={30} rows={10} value={this.state.note} onChange={this.onChange} />
          </div>
          <button type='submit' className='btn btn-warning mb-2'>INVIA</button>
        </form>
      </div>
    )
  }
}

export default search