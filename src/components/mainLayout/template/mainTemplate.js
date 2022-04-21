import React, { Component } from 'react'
import Header from '../header/header.js'
import Footer from '../footer/footer.js'

class mainTemplate extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default mainTemplate