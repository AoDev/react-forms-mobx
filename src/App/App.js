import React, {Component} from 'react'
import PersonForm from './PersonForm'
import {observable, toJSON} from 'mobx'
import personData from '../data/person'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.person = observable(personData)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm (event) {
    event.preventDefault()
    console.log('Sending form', JSON.stringify(toJSON(this.person), null, 2))
  }

  render () {
    return (
      <div className="container">
        <h1>Handling forms in React with Mobx</h1>
        <hr/>
        <PersonForm person={this.person} submitForm={this.submitForm}/>
      </div>
    )
  }
}
