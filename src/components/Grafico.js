import React, { Component } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

class Grafico extends Component {
  render() {
    return (
      <div>
        <LineChart width={600} height={400} data={this.props.data} margin={{ top: 45, left: 20, rigth: 30, bottom: 5 }}>
          <XAxis style={{ fontSize: '14px', color: 'green' }} dataKey="datetime" />
          <YAxis style={{ fontSize: '14px', color: 'green' }} />
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
      </div>
    )
  }
}

export default Grafico