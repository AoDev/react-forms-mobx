/**
 * asForm Higher Order Component
 */
import React, {Component} from 'react'

export default function asForm (MyComponent, formDataProp) {
  return class Form extends Component {
    constructor (props) {
      super(props)
      this.updateProperty = this.updateProperty.bind(this)
    }

    updateProperty (key, value) {
      this.props[formDataProp][key] = value
    }

    render () {
      return <MyComponent {...this.props} updateProperty={this.updateProperty}/>
    }
  }
}
