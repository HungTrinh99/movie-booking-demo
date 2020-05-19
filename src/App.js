import React, { Component } from 'react'
import "./App.css"
import Product1 from './Components/Product1'

export default class App extends Component {
  render() {
    return (
      <div>
        <p className="title">Hello world</p>
        <Product1/>
      </div>
    )
  }
}
