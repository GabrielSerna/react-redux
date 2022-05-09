import React, { Component } from 'react'
import '../../css/booklist/bookList.css'

class Booklist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid codrops-header'>
          <section className='text-center'>
              <h2>Search for books</h2>
              <form className='form-inline' onSubmit={this.onSubmitHandler}>
                  <div className="form-group" style={{ margin: ' 30px auto' }}>
                      <input
                          className='form-control'
                          type="search"
                          placeholder="book title..."


                      />
                      <button style={{ padding: '8px 15px', borderRadius: '5px' }} className='btn btn-warning' type="submit">
                          <i className="fas fa-search"></i>
                      </button>
                  </div>
              </form>
          </section>
        </div>
        <div className="main" style={{ marginTop: '10px' }}>
          <div className="bookshelf" id='bookshelf'>
              <div className="search-icon" data-reactid=".0.1.0.0">
                  <i className="fas fa-search"></i>
              </div>

              <figure className='details-open'>
                  <div className="perspective">
                      <div className="book">
                          <div className="cover">
                              <div className="front">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="buttons">
                  </div>
                  <figcaption>
                      <h2>
                      </h2>
                  </figcaption>
              </figure>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Booklist