import React, { Component } from 'react'

export class search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cerca: this.props.name,
      note: '',
      actions: '',
      ck1: false,
      ck2: false,
    };
  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeCk = (e) => {
    console.log(e.target.checked);
    this.setState({ [e.target.name]: e.target.checked });
  };
  
  invioDati = (e) => {
    e.preventDefault();
    // alert(`I dati sono stati inviati correttamente`)
    this.props.onSubmit(this.state.cerca);
  };


  render() {
    return (
      <div>
        <form className='' onSubmit={this.invioDati}>
          {/* INPUT */}
          <div className='form-group mx-sm-3 mb-2'>
            <input type='text' className='form-control' name='cerca' value={this.state.cerca} onChange={this.onChange} />
          </div>

          {/* SELECT */}
          <div className='form-group mx-sm-3 mb-2'>
            <select name='actions' value={this.state.actions} onChange={this.onChange}>
              <option value={''}>Seleziona</option>
              <option value={'Gabriel'}>Gabriel</option>
              <option value={'Michele'}>Michele</option>
              <option value={'Mario'}>Mario</option>
            </select>
          </div>

          {/* CHECKBOX */}
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="ck1" checked={this.state.ck1} onChange={this.onChangeCk} />
              <label className="form-check-label">
                Crivella
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="ck2" checked={this.state.ck2} onChange={this.onChangeCk} />
              <label className="form-check-label">
                Capocolo
              </label>
          </div>

          {/* BUTTON */}
          <div className='form-group mx-sm-3 mb-2'>
            <textarea className='form-control' name='note' id='' cols={30} rows={10} value={this.state.note} onChange={this.onChange} />
          </div>
          <button type='submit' className='btn btn-warning mb-2'>INVIA</button>
        </form>
      </div>
    )
  }
}

export default search