import React from "react"
import { findDOMNode } from "react-dom"

export class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, this.initState())
    this.initialize()
  }
  initState() { return {} }
  initialize() { /* nothing. */ }
}
