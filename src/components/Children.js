import React, { Component } from 'react'

// class Children extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Il tuo nome utente é {this.props.name}</h1>
//       </div>
//     )
//   }
// }

  function Children({nickName}) {
    return (
      <div>
        <h1>Nome utente: {nickName}</h1>
      </div>
    )
  }

export default Children
// props = { name: 'Gabriel' }