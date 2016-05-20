import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import {InputField} from '../../components'

@observer
export default class PersonAddress extends Component {
  constructor (props) {
    super(props)
    this.updateProperty = this.updateProperty.bind(this)
  }

  updateProperty (key, value) {
    this.props.address[key] = value
  }

  render () {
    const {address} = this.props
    return (
      <div>
        <InputField id="address-city" name="city" value={address.city} onChange={this.updateProperty}/>
        <InputField id="address-postal-code" name="postalCode" value={address.postalCode} onChange={this.updateProperty}/>
        <InputField id="address-street" name="street" value={address.street} onChange={this.updateProperty}/>
      </div>
    )
  }
}

PersonAddress.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string,
    postalCode: PropTypes.string,
    street: PropTypes.string
  })
}
