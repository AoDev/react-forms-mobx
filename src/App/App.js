import React, {Component} from 'react'
import PersonForm from './PersonForm'
import {observable} from 'mobx'
import personData from '../data/person'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.person = observable(personData)
  }

  render () {
    return (
      <div className="container">
        <h1>Handling forms in React with Mobx</h1>
        <hr/>
        <PersonForm person={this.person}/>
      </div>
    )
  }
}

App.propTypes = {

}

App.defaultProps = {

}
